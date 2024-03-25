import os
from flask_migrate import Migrate
from flask_socketio import SocketIO
# from decouple import config as cf
from config import config
from src import init_app
from src.database.db import db
from src.events.OrdenEvents import OrdenEvents

configuration = config['development']
app = init_app(configuration)

app.config['SQLALCHEMY_DATABASE_URI'] = os.environ['PSQL_URI']
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

migrate = Migrate(app, db)

socketio = SocketIO(app, cors_allowed_origins="*")

OrdenEvents(socketio)

if __name__ == '__main__':
    socketio.run(app, debug=True, allow_unsafe_werkzeug=True, host='0.0.0.0')
