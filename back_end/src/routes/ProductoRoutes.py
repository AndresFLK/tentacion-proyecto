from flask import Blueprint, request, jsonify

# Errors
from src.utils.errors.CustomException import CustomException
# Security
from src.utils.Security import Security
# Services
from src.services import ProductoService

main = Blueprint('producto_blueprint', __name__)

@main.route('/', methods=['GET'])
def get_productos():
    # has_access = Security.verify_token(request.headers)

    # if has_access:
        try:
            productos = ProductoService.get_productos()
            if (len(productos) > 0):
                return jsonify([producto.to_json() for producto in productos])
            else:
                return jsonify({'message': "NOTFOUND", 'success': True})
        except CustomException:
            return jsonify({'message': "ERROR", 'success': False})
    # else:
        # response = jsonify({'message': 'Unauthorized'})
        # return response, 401

@main.route('/', methods=['POST'])
def post_producto():

    try:
        data = request.get_json()

        nombre = data.get('nombre')
        descripcion = data.get('descripcion')
        precio = data.get('precio')
        proveedores = data.get('proveedores', [])
        producto = ProductoService.post_producto(nombre = nombre, descripcion = descripcion, 
                                                 precio = precio, proveedores = proveedores)
        return jsonify(producto.to_json()), 201
    except CustomException:
        return jsonify({'message': "ERROR", 'success': False})

@main.route('/<int:id_producto>', methods=['PUT'])
def put_producto(id_producto: int):

    try:
        data = request.get_json()
        nombre = data.get('nombre', None)
        descripcion = data.get('descripcion', None)
        precio = data.get('precio', None)
        proveedores = data.get('proveedores', None)
        producto = ProductoService.put_producto(id_producto, nombre, descripcion, precio, proveedores)
        return jsonify(producto.to_json()), 201
    except CustomException:
        return jsonify({'message': "ERROR", 'success': False})

@main.route('/<int:id_producto>', methods = ['DELETE'])
def delete_producto(id_producto: int):

    try:
        ProductoService.delete_producto(id_producto)
        return jsonify({'message': "Producto borrado exitosamente"}), 200
    except CustomException:
        return jsonify({'message': "ERROR", 'success': False})
