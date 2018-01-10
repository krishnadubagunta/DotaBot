from flask import Flask, render_template,request,jsonify
app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template('index.html')

@app.route('/api/recommend', methods = ['POST'])
def recommend():
    content = request.json
    print(content['x'])
    res = {"data" : content['y']}
    return jsonify(res)

if __name__ == '__main__':
    app.run(use_reloader=True,port=5000,threaded=True,debug=True)
