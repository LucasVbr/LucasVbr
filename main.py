# coding: utf-8

__author__ = "LucasVbr"
__version__ = "3.0.0"

from Utils import *
from src.FileUtils import getJsonData
from datetime import datetime
import pytz

CONFIG_FILE = "config.json"

if __name__ == "__main__":
    configData = getJsonData(CONFIG_FILE)

    data = getDataSubfiles(configData.get("data_files"))
    data["info"] = configData.get("info")
    data["tools"] = convertToolBadges(data.get("tools"))
    data["weather"] = getWeather(data.get("info").get('city'))
    data['today'] = datetime \
        .today() \
        .astimezone(pytz.timezone(data['info'].get('timezone'))) \
        .strftime("%A %d %B %y, %H:%M")

    buildFile(
        configData.get("template_file"),
        configData.get("output_file"),
        data
    )
