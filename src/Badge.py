# -*- coding: utf-8 -*-

from simpleicons.all import icons
from urllib.parse import urlencode
from colour import Color

"""
04/06/2022
"""

__file__ = 'Badge.py'
__author__ = 'Lucas Vbr'
__version__ = '0.1'


class Badge:
    def __init__(self, badgeName: str):
        self.name = badgeName
        self.url = ""
        self.color = 0

        self.buildUrl()

    def get_color(self):
        return self.color

    def buildUrl(self):
        BASE_URL = "https://img.shields.io/static/v1"
        LOGO_COLOR = "white"

        icon = icons.get(self.name)

        try:
            params = {
                "label": "",
                "message": icon.title,
                "color": f"#{icon.hex}",
                "logo": icon.slug,
                "logoColor": LOGO_COLOR
            }
            urlParams = urlencode(params)
            self.url = f"{BASE_URL}?{urlParams}"
            self.color = Color(params["color"]).get_hue()
        except Exception:
            pass  # Let default values


def getBadgeColor(badge: Badge) -> float:
    return badge.color
