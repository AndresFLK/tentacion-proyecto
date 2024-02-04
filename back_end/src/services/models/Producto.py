from src.database.db import db

class Producto(db.Model):

    id_producto = db.Column(db.Integer, primary_key = True)
    nombre = db.Column(db.String(40), nullable = False)
    descripcion = db.Column(db.String(200), nullable = False)
    precio = db.Column(db.Int, nullable = False)
    proveedores = db.relationship('Proveedor', secondary = 'producto_proveedor',
                                  backref = db.backref('productos', lazy = 'dynamic'))

    def to_json(self):
        return {
            'id_producto': self.id_producto,
            'nombre': self.nombre,
            'descripcion': self.descripcion,
            'precio': self.precio,
            'proveedores': [proveedor.nombre for proveedor in self.proveedores]
        }
