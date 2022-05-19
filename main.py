# coding: utf-8

__author__ = "LucasVbr"
__version__ = "3.0.0"

from flask import render_template
import flask
import json

TEMPLATE_FILE = "index.md.jinja"
DATA_FILE = "data.json"
OUTPUT_FILE = "README.md"

app = flask.Flask('my app')

if __name__ == "__main__":
    # Get Data from JSON
    with open(DATA_FILE) as file:
        data = json.load(file)

    # Build from template and data
    with app.app_context():
        rendered = render_template(TEMPLATE_FILE, data=data)

    # Generate Markdown file
    with open(OUTPUT_FILE, "w", encoding="utf8") as file:
        file.write(rendered)
