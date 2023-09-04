from flask import Flask, render_template
from flask_socketio import SocketIO

app = Flask(__name__)
# 设置 host 和 port
socketio = SocketIO(app, host='0.0.0.0', port=8080)

@socketio.on('message')
def handle_message(message):
    print('Received message:', message)
    socketio.send('Message received: ' + message)

if __name__ == '__main__':
    socketio.run(app)