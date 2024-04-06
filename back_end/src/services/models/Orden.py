from src.database.db import db

class Orden(db.Model):

    id_orden = db.Column(db.Integer, primary_key = True)
    descripcion = db.Column(db.String(500), nullable = False)
    num_mesa = db.Column(db.Integer, nullable = False)
    precio = db.Column(db.Float, nullable = False)
    estado = db.Column(db.String(20), nullable = False)

    def __init__(self, descripcion: str, num_mesa: int, precio: float, estado: str) -> None:
        self.descripcion = descripcion 
        self.num_mesa = num_mesa
        self.precio = precio
        self.estado = estado

    def to_json(self):
        return {
            'id_orden': self.id_orden,
            'descripcion': self.descripcion,
            'num_mesa': self.num_mesa,
            'precio': self.precio,
            'estado': self.estado
        }
