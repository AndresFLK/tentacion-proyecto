# Errors
from datetime import datetime
from src.database.db import db
from src.utils.errors.CustomException import CustomException
# Models
from .models import Reserva

class ReservaService():

    @classmethod
    def get_reserva(cls):
        try:
            return Reserva.query.all()
        except CustomException as ex:
            raise CustomException(ex)

    @classmethod
    def get_reserva_usuario(cls, cedula: str):
        try:
            return Reserva.query.filter_by(cedula = cedula).all()
        except CustomException as ex:
            raise CustomException(ex)

    @classmethod
    def get_reserva_unique(cls, id_reserva: int):
        try:
            return Reserva.query.filter_by(id_reserva = id_reserva).first_or_404()
        except CustomException as ex:
            raise CustomException(ex)

    @classmethod
    def post_reserva(cls, fecha: datetime, nombre_reserva: str, cedula: str):
        try:
            nueva_reserva = Reserva(cedula = cedula, fecha = fecha, nombre_reserva = nombre_reserva)
            db.session.add(nueva_reserva)
            db.session.commit()
            return nueva_reserva
        except CustomException as ex:
            raise CustomException(ex)
    
    @classmethod
    def put_reserva(cls, id_reserva: int, fecha: datetime, nombre_reserva: str):
        try:
            reserva = Reserva.query.get_or_404(id_reserva)
            reserva.fecha = fecha
            reserva.nombre_reserva = nombre_reserva
            db.session.commit()
            return reserva
        except CustomException as ex:
            raise CustomException(ex)

    @classmethod
    def delete_reserva(cls, id_reserva: int):
        try: 
            reserva = Reserva.query.get_or_404(id_reserva)
            db.session.delete(reserva)
            db.session.commit()
        except CustomException as ex:
            raise CustomException(ex)
