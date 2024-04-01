# Errors
from src.database.db import db
from src.utils.errors.CustomException import CustomException
# Models
from .models import Producto, Proveedor

class ProductoService():

    @classmethod
    def get_productos(cls):
        try:
            return Producto.query.all()
        except CustomException as ex:
            raise CustomException(ex)

    @classmethod
    def get_producto_unique(cls, id_producto: int):
        try:
            return Producto.query.filter_by(id_producto = id_producto).first_or_404()
        except CustomException as ex:
            raise CustomException(ex)

    @classmethod
    def post_producto(cls, nombre: str, descripcion: str, precio: int, proveedores: list):
        try:
            nuevo_producto = Producto(nombre, descripcion, precio)
            if not isinstance(proveedores, list):
                proveedores = [proveedores]

            for id_proveedor in proveedores:
                proveedor = Proveedor.query.get(id_proveedor)
                if proveedor:
                    nuevo_producto.proveedores.append(proveedor)

            db.session.add(nuevo_producto)
            db.session.commit()
            return nuevo_producto
        except CustomException as ex:
            raise CustomException(ex)
    
    @classmethod
    def put_producto(cls, id_producto: int, nombre = None, descripcion = None, 
                     precio = None , proveedores = None):
        try:
            producto = Producto.query.get_or_404(id_producto)

            if nombre:
                producto.nombre = nombre

            if descripcion:
                producto.descripcion = descripcion

            if precio:
                producto.precio = precio

            if proveedores is not None:
                producto.proveedores = []
                for proveedor in proveedores:
                    pv = Proveedor.query.get(proveedor)
                    if pv: 
                        producto.proveedores.append(pv)

            db.session.commit()
            return producto
        except CustomException as ex:
            raise CustomException(ex)

    @classmethod
    def delete_producto(cls, id_producto: int):
        try: 
            producto = Producto.query.get_or_404(id_producto)
            db.session.delete(producto)
            db.session.commit()
        except CustomException as ex:
            raise CustomException(ex)
