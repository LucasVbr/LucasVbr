from simpleicons.all import icons

from src.shield.shield_builder import ShieldBuilder


class SkillShield:

    def __init__(self, name: str = None):
        self.builder = ShieldBuilder()
        self.skill = self.set_skill(name) if name is not None else None

    def get_skill(self):
        return self.skill

    def set_skill(self, name: str):
        self.skill = icons.get(name)

        if self.skill is not None:
            (self.builder.set_message(self.skill.title)
             .set_logo(self.skill.slug)
             .set_color(self.skill.hex)
             )
        else:
            self.builder.set_message(name)

    def get_builder(self):
        return self.builder

    def __repr__(self):
        self.__str__()

    def __str__(self):
        return self.builder.build()
