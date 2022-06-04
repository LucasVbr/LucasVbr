# coding: utf-8

__author__ = "LucasVbr"
__version__ = "3.0.0"

import requests
from flask import render_template
import flask
from Badge import *
from FileUtils import *
from datetime import datetime

TEMPLATE_FILE = "index.md.jinja"
DATA_FILE = "data.old.json"
TOOLS_DATA = "tools.json"
OUTPUT_FILE = "README.md"

app = flask.Flask('my app')

if __name__ == "__main__":
    # Get Data from JSON
    data = getJsonData(DATA_FILE)

    toolsData = getJsonData(TOOLS_DATA)
    tools = [Badge(toolName) for toolName in toolsData]

    tools.sort(key=getBadgeColor)  # Sort by color

    request = requests.get("https://goweather.herokuapp.com/weather/rodez")

    weather_status = request.status_code
    weather = request.json()

    today = datetime.today().strftime("%A %d %B %y, %H:%M")

    # Build from template and data
    with app.app_context():
        rendered = render_template(
            TEMPLATE_FILE,
            # data=data,
            tools=tools,
            weather_status=weather_status,
            weather=weather,
            today=today
        )

    # Generate Markdown file
    setFileData(OUTPUT_FILE, rendered)
