import os
from functools import wraps
from flask import request, jsonify
# from decouple import config
import datetime
import jwt
import pytz


class Security():

    secret = os.environ['JWT_KEY']
    tz = pytz.timezone("America/Lima")

    @classmethod
    def generate_token(cls, authenticated_user):
        payload = {
            'iat': datetime.datetime.now(tz=cls.tz),
            'exp': datetime.datetime.now(tz=cls.tz) + datetime.timedelta(minutes=10),
            'cedula': authenticated_user.cedula,
            'nombre': authenticated_user.nombre,
            'rol': authenticated_user.rol.nombre
        }
        return jwt.encode(payload, cls.secret, algorithm="HS256")

    @classmethod
    def verify_token(cls, headers):

        if not headers['Authorization'] or headers['Authorization'].count('.') != 2:
            return False

        authorization = headers['Authorization']
        encoded_token = authorization.split(" ")[0]

        if (len(encoded_token) > 0):
            try:
                payload = jwt.decode(encoded_token, cls.secret, algorithms=["HS256"])
                rol = payload['rol']

                if rol == 'ADMIN':
                    return True
                return False
            except (jwt.ExpiredSignatureError, jwt.InvalidSignatureError, jwt.InvalidTokenError):
                return False

        return False

    @classmethod
    def profile_data(cls, headers):
        if 'Authorization' in headers.keys():
            authorization = headers['Authorization']
            encoded_token = authorization.split(" ")[0]

            if (len(encoded_token) > 0):
                try:
                    payload = jwt.decode(encoded_token, cls.secret, algorithms=["HS256"])
                    cedula = payload['cedula']
                    return cedula
                except (jwt.ExpiredSignatureError, jwt.InvalidSignatureError):
                    return None
        return None

    @classmethod
    def custom_middleware(cls, required_keys = None):
        def decorator(f):
            @wraps(f)
            def decorated_function(*args, **kwargs):
                # if skip_for_methods and request.method in skip_for_methods:
                    # return f(*args, **kwargs)

                if 'Authorization' not in request.headers:
                    return jsonify({'error': 'Missing required header.'}), 400

                if required_keys and request.json:
                    missing_keys = [key for key in required_keys if key not in request.json]
                    if missing_keys:
                        return jsonify({'error': 'Missing key(s) in JSON body.', 'missing_keys': missing_keys}), 400
                return f(*args, **kwargs)
            return decorated_function
        return decorator
