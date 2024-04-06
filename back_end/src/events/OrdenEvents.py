from flask_socketio import emit
from flask import request, jsonify
from src.database.db import db
from src.services.models.Orden import Orden
from src.utils.Security import Security

class OrdenEvents():

    def __init__(self, socketio):
        self.socketio = socketio
        self.register_events()

    def register_events(self):
        @self.socketio.on('connect')
        def handle_connect():
            try:
                token = request.args['token']
                if not token:
                    print('Funciona')
                    return False

                headers = {
                    'Authorization': token
                }

                jwt_verify = Security.verify_token(headers)
                if jwt_verify:
                    cedula = Security.profile_data(headers) 
                    all_orders = Orden.query.filter(Orden.estado != 'terminado').all()
                    orders_json = [orden.to_json() for orden in all_orders]
                    print("Usuario conectado:", cedula)  
                    emit('order_update', {'ordenes': orders_json}, broadcast=True)
                else:
                    return False   # Prevents the client from connecting
            except:
                raise ConnectionRefusedError()

        @self.socketio.on('new_order')
        def handle_new_order(data):
            # Assuming 'data' contains order details and a list of product IDs
            try:
                new_order = Orden(descripcion=data['descripcion'], num_mesa=data['num_mesa'], precio=data['precio'], estado=data['estado'])
                db.session.add(new_order)
                # db.session.flush()  # Flush to get the new order ID for product association

                # for product_id in data['product_ids']:
                    # product = Product(order_id=new_order.id)  # Add your logic to handle product details
                    # db.session.add(product)

                db.session.commit()

                all_orders = Orden.query.filter(Orden.estado != 'terminado').all()
                orders_json = [orden.to_json() for orden in all_orders]

                emit('order_update', {'ordenes': orders_json}, broadcast=True)
            except Exception as e:
                emit('error', {'error': str(e)})

        @self.socketio.on('update_order_state')
        def handle_update_order_state(data):
            # Assuming 'data' contains order ID and the new state
            try:
                order = Orden.query.get(data['id_orden'])
                if order:
                    order.estado = data['estado']
                    db.session.commit()

                    all_orders = Orden.query.filter(Orden.estado != 'terminado').all()
                    orders_json = [orden.to_json() for orden in all_orders]

                    emit('order_update', {'ordenes': orders_json}, broadcast=True)
                else:
                    emit('error', {'error': 'Order not found'})
            except Exception as e:
                emit('error', {'error': str(e)})

