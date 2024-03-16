from flask_migrate import Migrate
from flask_socketio import SocketIO
from decouple import config as cf
from config import config
from src import init_app
from src.database.db import db

configuration = config['development']
app = init_app(configuration)

app.config['SQLALCHEMY_DATABASE_URI'] = cf('PSQL_URI')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

migrate = Migrate(app, db)

socketio = SocketIO(app, cors_allowed_origins="*")

@socketio.on('realtime_data')
def handle_realtime_data(json):
    print('Received realtime data: ' + str(json))
    socketio.emit('realtime_update', json)

if __name__ == '__main__':
    socketio.run(app, debug=True)
