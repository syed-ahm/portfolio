from flask import Flask, render_template, redirect, url_for, send_file


app = Flask(__name__)


# /home opens home.html
@app.route("/")
@app.route("/home")
def home():
    return render_template('index.html')


# /resume redirects to resume pdf
@app.route('/resume')
def resume():
    return send_file('static/other/syed_ahmed_RESUME.pdf', attachment_filename='syed_ahmed_RESUME.pdf')


# attempt to stop browser caching
@app.after_request
def add_header(response):
    response.cache_control.no_store = True
    return response


# starts flask app
if __name__ == "__main__":
    app.run(debug=True, port=8000)
    

