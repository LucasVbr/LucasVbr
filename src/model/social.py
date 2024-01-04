from src.shield.shield_builder import ShieldBuilder


class Social:
    name: str
    img: str

    def __init__(self, name: str, url: str):
        self.name = name
        self.img = (
            ShieldBuilder()
            .set_message(name)
            .set_logo(name)
            .set_link(url)
            .set_style("for-the-badge")
            .build()
        )

    def __str__(self) -> str:
        return f"![{self.name}]({self.img})"
