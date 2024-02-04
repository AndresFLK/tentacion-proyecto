from flask import Blueprint, request, jsonify

# Errors
from src.utils.errors.CustomException import CustomException
# Security
from src.utils.Security import Security
# Services
from src.services.ProveedorService import ProveedorService 

main = Blueprint('proveedor_blueprint', __name__)

@main.route('/', methods=['GET'])
def get_proveedores():
    # has_access = Security.verify_token(request.headers)

    # if has_access:
        try:
            proveedores = ProveedorService.get_proveedores()
            if (len(proveedores) > 0):
                return jsonify([proveedor.to_json() for proveedor in proveedores])
            else:
                return jsonify({'message': "NOTFOUND", 'success': True})
        except CustomException:
            return jsonify({'message': "ERROR", 'success': False})
    # else:
        # response = jsonify({'message': 'Unauthorized'})
        # return response, 401
@main.route('/', methods=['POST'])
def post_proveedores():

    try:
        nombre = request.json['nombre']
        proveedor = ProveedorService.post_proveedor(nombre)
        return jsonify(proveedor), 201
    except CustomException:
        return jsonify({'message': "ERROR", 'success': False})

@main.route('/<int:id_proveedor>', methods=['PUT'])
def put_proveedores(id_proveedor: int):

    try:
        if 'nombre' in request.json and request.json['nombre']:
            nombre = request.json['nombre']
            proveedor = ProveedorService.put_proveedor(nombre, id_proveedor)
            return jsonify(proveedor.to_json()), 201
        else:
            return jsonify({'message': 'El nombre es requerido'}), 400
    except CustomException:
        return jsonify({'message': "ERROR", 'success': False})

@main.route('/<int:id_proveedor>', methods = ['DELETE'])
def delete_proveedores(id_proveedor: int):

    try:
        ProveedorService.delete_proveedor(id_proveedor)
        return jsonify({'message': "Usuario borrado exitosamente"}), 200
    except CustomException:
        return jsonify({'message': "ERROR", 'success': False})
