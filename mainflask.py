from flask import Flask, render_template

app = Flask(__name__)

@app.route("/home")
@app.route("/")
def home():
    return render_template('home.html')

@app.after_request
def add_header(response):
    response.cache_control.no_store = True
    return response
    

if __name__ == "__main__":
    app.run(debug=True, port=8000)
    

