from flask import Flask, jsonify, redirect
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


@app.route('/')
def index():
	return redirect('http://127.0.0.1:3000/')

@app.route('/super_api')
def super_api():
	a = 'Хуй пришел с API'
	resp = jsonify(a)
	resp.headers.add('Access-Control-Allow-Origin', '*')
	return resp

if __name__ == "__main__":
    app.run()
