from flask import Blueprint, request, jsonify

# Errors
from src.utils.errors.CustomException import CustomException
# Security
from src.utils.Security import Security
# Services
from src.services import UsuarioService

main = Blueprint('usuario_blueprint', __name__)

@main.route('/clientes', methods=['GET'])
@Security.custom_middleware()
def get_usuario():
    has_access = Security.verify_token(request.headers)

    if has_access:
        try:
            usuarios = UsuarioService.get_usuario()
            if (len(usuarios) > 0):
                return jsonify([usuario.to_json() for usuario in usuarios])
            else:
                return jsonify({'message': "NOTFOUND", 'success': True})
        except CustomException:
            return jsonify({'message': "ERROR", 'success': False})
    else:
        response = jsonify({'message': 'Unauthorized'})
        return response, 401

@main.route('/<string:cedula>', methods=['GET'])
@Security.custom_middleware()
def get_servicio_unique(cedula: str):
    has_access = Security.verify_token(request.headers)

    if has_access:
        try:
            usuario = UsuarioService.get_usuario_unique(cedula)
            if usuario:
                return jsonify(usuario.to_json())
            return jsonify({'message': "NOTFOUND", 'success': True})
        except CustomException:
            return jsonify({'message': "ERROR", 'success': False})
    else:
        response = jsonify({'message': 'Unauthorized'})
        return response, 401

@main.route('/admins', methods=['GET'])
@Security.custom_middleware()
def get_admin():
    has_access = Security.verify_token(request.headers)

    if has_access:
        try:
            usuarios = UsuarioService.get_admin()
            if (len(usuarios) > 0):
                return jsonify([usuario.to_json() for usuario in usuarios])
            else:
                return jsonify({'message': "NOTFOUND", 'success': True})
        except CustomException:
            return jsonify({'message': "ERROR", 'success': False})
    else:
        response = jsonify({'message': 'Unauthorized'})
        return response, 401

@main.route('/', methods=['POST'])
@Security.custom_middleware(required_keys=['nombre', 'cedula', 'password', 'primer_apellido', 'segundo_apellido', 'correo', 'id_rol'])
def post_usuario():
    has_access = Security.verify_token(request.headers)

    if has_access:
        try:
            nombre = request.json['nombre']
            cedula = request.json['cedula']
            password = request.json['password']
            primer_apellido = request.json['primer_apellido']
            segundo_apellido = request.json['segundo_apellido']
            correo = request.json['correo']
            id_rol = request.json['id_rol']

            usuario = UsuarioService.post_usuario(cedula, password, nombre, primer_apellido, segundo_apellido, correo, id_rol)
            return jsonify(usuario.to_json()), 201
        except CustomException:
            return jsonify({'message': "ERROR", 'success': False})
    else:
        response = jsonify({'message': 'Unauthorized'})
        return response, 401

@main.route('/<string:cedula>', methods=['PUT'])
@Security.custom_middleware(required_keys=['nombre', 'primer_apellido', 'segundo_apellido', 'correo', 'id_rol'])
def put_usuario(cedula):
    has_access = Security.verify_token(request.headers)

    if has_access:
        try:
            nombre = request.json['nombre']
            password = request.json['password']
            primer_apellido = request.json['primer_apellido']
            segundo_apellido = request.json['segundo_apellido']
            correo = request.json['correo']
            id_rol = request.json['id_rol']

            usuario = UsuarioService.put_usuario(cedula, password, nombre, primer_apellido, segundo_apellido, correo, id_rol)
            return jsonify(usuario.to_json()), 201
        except CustomException:
            return jsonify({'message': "ERROR", 'success': False})
    else:
        response = jsonify({'message': 'Unauthorized'})
        return response, 401

@main.route('/<string:cedula>', methods = ['DELETE'])
@Security.custom_middleware()
def delete_empresa(cedula):
    has_access = Security.verify_token(request.headers)

    if has_access:
        try:
            UsuarioService.delete_usuario(cedula)
            return jsonify({'message': "Usuario borrado exitosamente"}), 200
        except CustomException:
            return jsonify({'message': "ERROR", 'success': False})
    else:
        response = jsonify({'message': 'Unauthorized'})
        return response, 401
