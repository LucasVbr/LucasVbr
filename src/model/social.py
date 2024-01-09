from src.shield.social_shield import SocialShield


class Social:
    name: str
    img: str

    def __init__(self, name: str, url: str):
        self.name = name
        self.img = SocialShield(name, url).__str__()
        self.url = url

    def __str__(self) -> str:
        return f"[![{self.name}]({self.img})]({self.url})"
