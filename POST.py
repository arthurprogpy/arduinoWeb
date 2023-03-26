import serial
from flask import Flask, request

app = Flask(__name__)
arduino = serial.Serial('/dev/ttyACM0', 9600)

@app.route('/led', methods=['POST'])
def led():
    led_state = request.json['ledState']
    arduino.write('1' if led_state else '0')
    return '', 204

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
