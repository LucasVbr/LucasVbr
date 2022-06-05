# -*- coding: utf-8 -*-

import os.path
from flask import Flask, render_template
from src.Badge import Badge, getBadgeColor
from meteofrance_api import MeteoFranceClient
from src.FileUtils import setFileData, getJsonData

"""
05/06/2022
"""

__file__ = 'Utils.py'
__author__ = 'Lucas Vbr'
__version__ = '0.1'


def getDataSubfiles(files: list):
    """

    :param files:
    :return:
    """
    contents = {}
    for file in files:
        baseName = os.path.basename(file)
        fileName = os.path.splitext(baseName)[0]
        contents[fileName] = getJsonData(file)
    return contents


def convertToolBadges(listToolName: list) -> list[dict[str, str]]:
    tools = [Badge(toolName) for toolName in listToolName]
    tools.sort(key=getBadgeColor)  # Sort by color
    return [{"src": badge.url, "alt": badge.name} for badge in tools]


def getWeather(city: str) -> dict:
    meteoClient = MeteoFranceClient()
    place = meteoClient.search_places(city)[0]
    weather = meteoClient.get_forecast_for_place(place, language="en") \
        .current_forecast

    return {
        "temperature": weather.get('T').get('value'),
        "description": weather.get("weather").get("desc")
    }


def buildFile(templateFile: str, outputFile: str, data: dict) -> None:
    app = Flask('my app')
    with app.app_context():
        rendered = render_template(templateFile, data=data)

    setFileData(outputFile, rendered)
