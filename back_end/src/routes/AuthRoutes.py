from flask import Blueprint, request, jsonify

# Models
from src.services.models.Usuario import Usuario
# Security
from src.utils.Security import Security
# Services
from src.services.AuthService import AuthService
from src.utils.errors.CustomException import CustomException

main = Blueprint('auth_blueprint', __name__)


@main.route('/login', methods=['POST'])
def login():

    cedula = request.json['cedula']
    password = request.json['password']

    _user = Usuario(cedula, password)
    authenticated_user = AuthService.login_user(_user)
    
    if (authenticated_user != None):
        encoded_token = Security.generate_token(authenticated_user)
        return jsonify({'success': True, 'token': encoded_token})
    else:
        response = jsonify({'message': 'Unauthorized'})
        return response, 401

@main.route('/register', methods=['POST'])
def register():
    try:

        cedula = request.json['cedula']
        password = request.json['password']
        nombre = request.json['nombre']
        primer_apellido = request.json['primer_apellido']
        segundo_apellido = request.json['segundo_apellido']
        correo = request.json['correo']
        id_rol = 2

        usuario = AuthService.register(cedula, password, nombre, primer_apellido, segundo_apellido, correo, id_rol)

        return jsonify({'message': 'User registered', 'usuario': usuario.to_json()}), 201
    except CustomException:
        return jsonify({'message': "ERROR", 'success': False})

@main.route('/profile', methods=['GET'])
def profile():
    try:
        headers = request.headers
        cedula = Security.profile_data(headers)

        if cedula:
            usuario = AuthService.profile(cedula)
            return jsonify(usuario.to_json()), 201

        response = jsonify({'message': 'Unauthorized'})
        return response, 401
    except CustomException:
        return jsonify({'message': "ERROR", 'success': False})

@main.route('/profile', methods=['PUT'])
def put_profile():
    try:
        headers = request.headers
        cedula = Security.profile_data(headers)
        nombre = request.json['nombre']
        primer_apellido = request.json['primer_apellido']
        segundo_apellido = request.json['segundo_apellido']
        correo = request.json['correo']

        if cedula:
            usuario = AuthService.put_profile(cedula, nombre, primer_apellido, segundo_apellido, correo)
            return jsonify({'message': 'Profile updated'}), 201

        response = jsonify({'message': 'Unauthorized'})
        return response, 401
    except CustomException:
        return jsonify({'message': "ERROR", 'success': False})
