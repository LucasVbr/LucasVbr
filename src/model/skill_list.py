from src.model.skill import Skill


class SkillList:
    def __init__(self, skills: list):
        self.skills = [Skill(skill.get("name"), skill.get("url")) for skill in skills]

    def __str__(self) -> str:
        return "\n".join([str(skill) for skill in self.skills])

    def __repr__(self) -> str:
        return "\n".join([repr(skill) for skill in self.skills])

