from flask import Flask,send_from_directory
import os
app = Flask(__name__, static_folder="./static/build")
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if(path == ""):
        return send_from_directory('static/build', 'index.html')
    else:
        if(os.path.exists("static/build/" + path)):
            return send_from_directory('static/build', path)
        else:
            return send_from_directory('static/build', 'index.html')


if __name__ == "__main__":
    app.run(use_reloader=True,port=5000,threaded=True)
