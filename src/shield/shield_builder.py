from urllib.parse import urlunsplit, urlencode


class ShieldBuilder:
    BASE_URL = "https://img.shields.io/static/v1"

    message: str = None
    style: str = None
    logo: str = None
    logo_color: str = None
    label: str = None
    label_color: str = None
    color: str = None
    cache_seconds: int = None
    link: str = None

    def __init__(self):
        self.logo_color = "white"
        self.label = " "
        self.color = "black"

    def set_message(self, message: str):
        self.message = (
            message
            .replace("_", "__")
            .replace("-", "--")
            .replace(" ", "_")
        )
        return self

    def set_style(self, style: str):
        if not style in ["flat", "flat-square", "plastic", "for-the-badge", "social"]:
            raise Exception("Invalid style")

        self.style = style
        return self

    def set_logo(self, logo: str):
        self.logo = logo
        return self

    def set_logo_color(self, logo_color: str):
        self.logo_color = logo_color
        return self

    def set_label(self, label: str):
        self.label = label
        return self

    def set_label_color(self, label_color: str):
        self.label_color = label_color
        return self

    def set_color(self, color: str):
        self.color = color
        return self

    def set_cache_seconds(self, cache_seconds: int):
        self.cache_seconds = cache_seconds
        return self

    def set_link(self, link: str):
        self.link = link
        return self

    def get_query(self):
        query = {
            "message": self.message,
            "style": self.style,
            "logo": self.logo,
            "logoColor": self.logo_color,
            "label": self.label,
            "labelColor": self.label_color,
            "color": self.color,
            "cacheSeconds": self.cache_seconds,
            "link": self.link
        }

        # Remove None values
        return {k: v for k, v in query.items() if v is not None}

    def build(self):
        query = urlencode(self.get_query())
        return urlunsplit(("", "", self.BASE_URL, query, ""))


if "__main__" == __name__:
    shield_builder = (
        ShieldBuilder()
        .set_logo("HTML5")
        .set_message("HTML5")
        .build()
    )
    print(shield_builder)
