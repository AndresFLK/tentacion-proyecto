from flask import Blueprint, request, jsonify

# Errors
from src.utils.errors.CustomException import CustomException
# Security
from src.utils.Security import Security
# Services
from src.services import ServicioService

main = Blueprint('servicio_blueprint', __name__)

@main.route('/', methods=['GET'])
def get_servicio():
    # has_access = Security.verify_token(request.headers)

    # if has_access:
        try:
            servicios = ServicioService.get_servicio()
            if (len(servicios) > 0):
                return jsonify([servicio.to_json() for servicio in servicios])
            else:
                return jsonify({'message': "NOTFOUND", 'success': True})
        except CustomException:
            return jsonify({'message': "ERROR", 'success': False})
    # else:
        # response = jsonify({'message': 'Unauthorized'})
        # return response, 401

@main.route('/', methods=['POST'])
def post_servicio():

    try:
        data = request.get_json()

        titulo = data.get('titulo')
        tiempo = data.get('tiempo')
        descripcion = data.get('descripcion')
        imagen = data.get('imagen')
        empresa = data.get('id_empresa')

        servicio = ServicioService.post_servicio(titulo, tiempo, descripcion, imagen, empresa)
        return jsonify(servicio.to_json()), 201
    except CustomException:
        return jsonify({'message': "ERROR", 'success': False})

@main.route('/<int:id_servicio>', methods=['PUT'])
def put_servicio(id_servicio: int):

    try:
        data = request.get_json()

        titulo = data.get('titulo', None)
        tiempo = data.get('tiempo', None)
        descripcion = data.get('descripcion', None)
        imagen = data.get('imagen', None)
        empresa = data.get('id_empresa', None)

        servicio = ServicioService.put_servicio(id_servicio, titulo, tiempo, descripcion, imagen, empresa)
        return jsonify(servicio.to_json()), 201
    except CustomException:
        return jsonify({'message': "ERROR", 'success': False})

@main.route('/<int:id_servicio>', methods = ['DELETE'])
def delete_servicio(id_servicio: int):

    try:
        ServicioService.delete_servicio(id_servicio)
        return jsonify({'message': "Servicio borrado exitosamente"}), 200
    except CustomException:
        return jsonify({'message': "ERROR", 'success': False})
