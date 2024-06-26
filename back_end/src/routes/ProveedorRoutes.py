from flask import Blueprint, request, jsonify

# Errors
from src.utils.errors.CustomException import CustomException
# Security
from src.utils.Security import Security
# Services
from src.services import ProveedorService

main = Blueprint('proveedor_blueprint', __name__)

@main.route('/', methods=['GET'])
def get_proveedores():
        try:
            proveedores = ProveedorService.get_proveedores()
            if (len(proveedores) > 0):
                return jsonify([proveedor.to_json() for proveedor in proveedores])
            else:
                return jsonify({'message': "NOTFOUND", 'success': True})
        except CustomException:
            return jsonify({'message': "ERROR", 'success': False})

@main.route('/<int:id_proveedor>', methods=['GET'])
def get_proveedor_unique(id_proveedor: int):
    try:
        proveedor = ProveedorService.get_proveedor_unique(id_proveedor)
        if proveedor:
            return jsonify(proveedor.to_json())
        else:
            return jsonify({'message': "NOTFOUND", 'success': True})
    except CustomException:
        return jsonify({'message': "ERROR", 'success': False})

@main.route('/', methods=['POST'])
@Security.custom_middleware(required_keys=['nombre'])
def post_proveedores():
    has_access = Security.verify_token(request.headers)

    if has_access:
        try:
            nombre = request.json['nombre']
            proveedor = ProveedorService.post_proveedor(nombre)
            return jsonify(proveedor.to_json()), 201
        except CustomException:
            return jsonify({'message': "ERROR", 'success': False})
    else:
        response = jsonify({'message': 'Unauthorized'})
        return response, 401

@main.route('/<int:id_proveedor>', methods=['PUT'])
@Security.custom_middleware(required_keys=['nombre'])
def put_proveedores(id_proveedor: int):
    has_access = Security.verify_token(request.headers)

    if has_access:
        try:
            nombre = request.json['nombre']
            proveedor = ProveedorService.put_proveedor(nombre, id_proveedor)
            return jsonify(proveedor.to_json()), 201
        except CustomException:
                return jsonify({'message': "ERROR", 'success': False})
    else:
        response = jsonify({'message': 'Unauthorized'})
        return response, 401

@main.route('/<int:id_proveedor>', methods = ['DELETE'])
@Security.custom_middleware()
def delete_proveedores(id_proveedor: int):
    has_access = Security.verify_token(request.headers)

    if has_access:
        try:
            ProveedorService.delete_proveedor(id_proveedor)
            return jsonify({'message': "Proveedor borrado exitosamente"}), 200
        except CustomException:
            return jsonify({'message': "ERROR", 'success': False})
    else:
        response = jsonify({'message': 'Unauthorized'})
        return response, 401

