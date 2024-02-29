# Errors
from src.database.db import db
from src.utils.errors.CustomException import CustomException
# Models
from .models import Servicio

class ServicioService():

    @classmethod
    def get_servicio(cls):
        try:
            return Servicio.query.all()
        except CustomException as ex:
            raise CustomException(ex)

    @classmethod
    def post_servicio(cls, titulo: str, tiempo: str, descripcion: str, imagen: str, id_empresa: int):
        try:
            nuevo_servicio = Servicio(titulo = titulo, 
                                     tiempo = tiempo,
                                     descripcion = descripcion,
                                     imagen = imagen,
                                     id_empresa = id_empresa)
            db.session.add(nuevo_servicio)
            db.session.commit()
            return nuevo_servicio
        except CustomException as ex:
            raise CustomException(ex)
    
    @classmethod
    def put_servicio(cls, id_servicio: int, titulo = None, tiempo = None, 
                     descripcion = None, imagen = None, id_empresa = None):
        try:
            servicio = Servicio.query.get_or_404(id_servicio)

            if titulo:
                servicio.titulo = titulo

            if tiempo:
                servicio.tiempo = tiempo

            if descripcion:
                servicio.descripcion = descripcion

            if imagen:
                servicio.imagen = imagen

            if id_empresa:
                servicio.id_empresa = id_empresa

            db.session.commit()
            return servicio
        except CustomException as ex:
            raise CustomException(ex)

    @classmethod
    def delete_servicio(cls, id_servicio: int):
        try: 
            servicio = Servicio.query.get_or_404(id_servicio)
            db.session.delete(servicio)
            db.session.commit()
        except CustomException as ex:
            raise CustomException(ex)
