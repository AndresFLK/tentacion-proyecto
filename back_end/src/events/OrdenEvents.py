from flask_socketio import emit
from flask import request
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
                    print("Usuario conectado:", cedula)  
                else:
                    return False   # Prevents the client from connecting
            except:
                raise ConnectionRefusedError()

        @self.socketio.on('new_order')
        def handle_new_order(data):
            # Assuming 'data' contains order details and a list of product IDs
            try:
                # new_order = Order(state=data['state'])
                # db.session.add(new_order)
                db.session.flush()  # Flush to get the new order ID for product association

                # for product_id in data['product_ids']:
                    # product = Product(order_id=new_order.id)  # Add your logic to handle product details
                    # db.session.add(product)

                db.session.commit()
                # emit('order_update', {'order_id': new_order.id, 'state': new_order.state}, broadcast=True)
            except Exception as e:
                emit('error', {'error': str(e)})

        @self.socketio.on('update_order_state')
        def handle_update_order_state(data):
            # Assuming 'data' contains order ID and the new state
            try:
                # order = Order.query.get(data['order_id'])
                # if order:
                    # order.state = data['state']
                    db.session.commit()
                    # emit('order_update', {'order_id': order.id, 'state': order.state}, broadcast=True)
                # else:
                    # emit('error', {'error': 'Order not found'})
            except Exception as e:
                emit('error', {'error': str(e)})

