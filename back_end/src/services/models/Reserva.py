from datetime import datetime
from src.database.db import db

class Reserva(db.Model):

    id_reserva = db.Column(db.Integer, primary_key = True)
    fecha = db.Column(db.DateTime, unique = True, nullable = False)
    nombre_reserva = db.Column(db.String(200), nullable = False)
    cedula = db.Column(db.String, db.ForeignKey('usuario.cedula'), nullable = False)

    def __init__(self, cedula, fecha = datetime.today(), nombre_reserva = '') -> None:
        self.fecha = fecha
        self.nombre_reserva = nombre_reserva
        self.cedula = cedula

    def to_json(self):
        return {
            'id_reserva': self.id_reserva,
            'fecha': self.fecha,
            'nombre_reserva': self.nombre_reserva,
            'usuario': self.usuario.nombre + ' ' + self.usuario.primer_apellido,
        }
