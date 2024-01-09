from src.model.skill import Skill


class SkillList:
    skills: list[Skill]

    def __init__(self, skills: list[str]):
        # Sort and remove duplicates
        skills = list(set(skills))
        skills.sort()

        self.skills = [Skill(skill) for skill in skills]

    def __str__(self) -> str:
        return "\n".join([str(skill) for skill in self.skills])
