from src.shield.shield_builder import ShieldBuilder


class Skill:
    alt: str
    src: str

    def __init__(self, name: str):
        self.alt = name
        self.src = (
            ShieldBuilder()
            .set_message(name)
            .set_logo(name)
            .build()
        )

    def __str__(self) -> str:
        return f"![{self.alt}]({self.src})"
