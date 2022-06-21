# -*- coding: utf-8 -*-

"""
04/06/2022
"""

import json

__file__ = 'FileUtils.py'
__author__ = 'Lucas Vbr'
__version__ = '0.1'

DEFAULT_FILE_ENCODING = "utf8"


def getJsonData(filePath: str) -> str:
    """
    Take data from JSON File
    :param filePath: Path of the file to read
    :return: The content of the JSON file
    """
    with open(filePath, encoding=DEFAULT_FILE_ENCODING) as file:
        data = json.load(file)
    return data


def setJsonData(filePath: str, content) -> None:
    setFileData(filePath, json.dumps(content, indent=2))


def setFileData(filePath: str, content: str) -> None:
    """
    Create a new File or replace it content if already exist
    :param filePath: Path of the file to fill
    :param content: Content to place in the file
    :return: None
    """
    with open(filePath, "w", encoding=DEFAULT_FILE_ENCODING) as file:
        file.write(content)
