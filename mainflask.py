from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)


# /home opens home.html
@app.route("/home")
@app.route("/")
def home():
    return render_template('home.html')


# attempt to stop browser caching
@app.after_request
def add_header(response):
    response.cache_control.no_store = True
    return response


# starts flask app
if __name__ == "__main__":
    app.run(debug=True, port=8000)
    

