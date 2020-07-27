from flask import Flask, render_template, redirect, url_for, send_file

app = Flask(__name__)


# /home opens home.html
@app.route("/home")
@app.route("/")
def home():
    return render_template('home.html')


@app.route('/resume')
def resume():
    return send_file('static/syed_ahmed_RESUME.pdf', attachment_filename='syed_ahmed_RESUME.pdf')


# attempt to stop browser caching
@app.after_request
def add_header(response):
    response.cache_control.no_store = True
    return response


# starts flask app
if __name__ == "__main__":
    app.run(debug=True, port=8000)
    

