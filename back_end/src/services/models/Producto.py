from src.database.db import db

producto_proveedor = db.Table('producto_proveedor',
    db.Column('id_producto', db.Integer, db.ForeignKey('producto.id_producto'), primary_key=True),
    db.Column('id_proveedor', db.Integer, db.ForeignKey('proveedor.id_proveedor'), primary_key=True)
)

class Producto(db.Model):

    id_producto = db.Column(db.Integer, primary_key = True)
    nombre = db.Column(db.String(40), nullable = False)
    descripcion = db.Column(db.String(200), nullable = False)
    precio = db.Column(db.Integer, nullable = False)
    proveedores = db.relationship('Proveedor', secondary = producto_proveedor,
                                  backref = db.backref('productos', lazy = 'dynamic'))

    def __init__(self, nombre, descripcion, precio) -> None:
       self.nombre = nombre
       self.descripcion = descripcion
       self.precio = precio
       self.proveedores = [] 

    def to_json(self):
        return {
            'id_producto': self.id_producto,
            'nombre': self.nombre,
            'descripcion': self.descripcion,
            'precio': self.precio,
            'proveedores': [proveedor.nombre for proveedor in self.proveedores]
        }
