# Errors
from src.database.db import db
from src.utils.errors.CustomException import CustomException
# Models
from .models import Empresa

class EmpresaService():

    @classmethod
    def get_empresas(cls):
        try:
            return Empresa.query.all()
        except CustomException as ex:
            raise CustomException(ex)

    @classmethod
    def get_empresa_unique(cls, id_empresa: int):
        try:
            return Empresa.query.filter_by(id_empresa = id_empresa).first_or_404()
        except CustomException as ex:
            raise CustomException(ex)

    @classmethod
    def post_empresa(cls, nombre: str):
        try:
            nueva_empresa = Empresa(nombre = nombre)
            db.session.add(nueva_empresa)
            db.session.commit()
            return nueva_empresa
        except CustomException as ex:
            raise CustomException(ex)
    
    @classmethod
    def put_empresa(cls, nombre: str, id_empresa: int):
        try:
            empresa = Empresa.query.get_or_404(id_empresa)
            empresa.nombre = nombre
            db.session.commit()
            return empresa
        except CustomException as ex:
            raise CustomException(ex)

    @classmethod
    def delete_empresa(cls, id_empresa: int):
        try: 
            empresa = Empresa.query.get_or_404(id_empresa)
            db.session.delete(empresa)
            db.session.commit()
        except CustomException as ex:
            raise CustomException(ex)
