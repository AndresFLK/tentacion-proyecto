# Errors
from src.database.db import db
from src.utils.errors.CustomException import CustomException
# Models
from src.services.models.Proveedor import Proveedor

class ProveedorService():

    @classmethod
    def get_proveedores(cls):
        try:
            return Proveedor.query.all()
        except CustomException as ex:
            raise CustomException(ex)

    @classmethod
    def post_proveedor(cls, nombre: str):
        try:
            nuevo_proveedor = Proveedor(nombre = nombre)
            db.session.add(nuevo_proveedor)
            db.session.commit()
            return nuevo_proveedor
        except CustomException as ex:
            raise CustomException(ex)
    
    @classmethod
    def put_proveedor(cls, nombre: str, id_proveedor: int):
        try:
            proveedor = Proveedor.query.get_or_404(id_proveedor)
            proveedor.nombre = nombre
            db.session.commit()
            return proveedor
        except CustomException as ex:
            raise CustomException(ex)

    @classmethod
    def delete_proveedor(cls, id_proveedor: int):
        try: 
            proveedor = Proveedor.query.get_or_404(id_proveedor)
            db.session.delete(proveedor)
            db.session.commit()
        except CustomException as ex:
            raise CustomException(ex)
