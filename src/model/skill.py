from src.shield.skill_shield import SkillShield


class Skill:
    alt: str
    src: str

    def __init__(self, name: str):
        self.alt = name
        self.src = SkillShield(name).__str__()

    def __str__(self) -> str:
        return f"![{self.alt}]({self.src})"
