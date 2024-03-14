from decouple import config
import datetime
import jwt
import pytz


class Security():

    secret = config('JWT_KEY')
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
        if 'Authorization' in headers.keys():
            authorization = headers['Authorization']
            encoded_token = authorization.split(" ")[0]

            if (len(encoded_token) > 0):
                try:
                    payload = jwt.decode(encoded_token, cls.secret, algorithms=["HS256"])
                    rol = payload['rol']

                    if rol == 'ADMIN':
                        return True
                    return False
                except (jwt.ExpiredSignatureError, jwt.InvalidSignatureError):
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
