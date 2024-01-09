from simpleicons.all import icons

from src.shield.shield_builder import ShieldBuilder


class SocialShield:

    def __init__(self, name: str = None, url: str = None):
        self.builder = ShieldBuilder().set_style("for-the-badge")
        self.name = name
        self.url = url
        self.social = self.set_social(name, url) if name is not None and url is not None else None

    def get_social(self):
        return self.social

    def set_social(self, name: str, url: str):
        self.social = icons.get(name)

        if self.social is not None:
            (self.builder.set_message(self.social.title)
             .set_logo(self.social.slug)
             .set_color(self.social.hex)
             )
        else:
            self.builder.set_message(name)

        self.builder.set_link(url)

    def get_builder(self):
        return self.builder

    def __repr__(self):
        self.__str__()

    def __str__(self):
        return self.builder.build()
