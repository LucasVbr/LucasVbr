# -*- coding: utf-8 -*-

"""
04/06/2022
"""

import json

__file__ = 'FileUtils.py'
__author__ = 'Lucas Vbr'
__version__ = '0.1'


def getJsonData(fileName: str) -> str:
    with open(fileName) as file:
        data = json.load(file)
    return data


def setFileData(fileName: str, content: str):
    with open(fileName, "w", encoding="utf8") as file:
        file.write(content)
