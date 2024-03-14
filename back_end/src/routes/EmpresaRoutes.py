from flask import Blueprint, request, jsonify

# Errors
from src.utils.errors.CustomException import CustomException
# Security
from src.utils.Security import Security
# Services
from src.services import EmpresaService

main = Blueprint('empresa_blueprint', __name__)

@main.route('/', methods=['GET'])
def get_empresas():
    try:
        empresas = EmpresaService.get_empresas()
        if (len(empresas) > 0):
            return jsonify([empresa.to_json() for empresa in empresas])
        else:
            return jsonify({'message': "NOTFOUND", 'success': True})
    except CustomException:
        return jsonify({'message': "ERROR", 'success': False})

@main.route('/', methods=['POST'])
def post_empresa():
    has_access = Security.verify_token(request.headers)

    if has_access:
        try:
            nombre = request.json['nombre']
            empresa = EmpresaService.post_empresa(nombre)
            return jsonify(empresa.to_json()), 201
        except CustomException:
            return jsonify({'message': "ERROR", 'success': False})
    else:
        response = jsonify({'message': 'Unauthorized'})
        return response, 401

@main.route('/<int:id_empresa>', methods=['PUT'])
def put_empresa(id_empresa: int):
    has_access = Security.verify_token(request.headers)

    if has_access:
        try:
            if 'nombre' in request.json and request.json['nombre']:
                nombre = request.json['nombre']
                empresa = EmpresaService.put_empresa(nombre, id_empresa)
                return jsonify(empresa.to_json()), 201
            else:
                return jsonify({'message': 'El nombre es requerido'}), 400
        except CustomException:
            return jsonify({'message': "ERROR", 'success': False})
    else:
        response = jsonify({'message': 'Unauthorized'})
        return response, 401

@main.route('/<int:id_empresa>', methods = ['DELETE'])
def delete_empresa(id_empresa: int):
    has_access = Security.verify_token(request.headers)

    if has_access:
        try:
            EmpresaService.delete_empresa(id_empresa)
            return jsonify({'message': "Empresa borrada exitosamente"}), 200
        except CustomException:
            return jsonify({'message': "ERROR", 'success': False})
    else:
        response = jsonify({'message': 'Unauthorized'})
        return response, 401
