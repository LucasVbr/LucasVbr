from src.model.skill import Skill


def skill_list(skills: list[str]) -> dict[str, str]:
    # Sort and remove duplicates
    skills = list(set(skills))
    skills.sort()

    skills = {skill: Skill(skill).__str__() for skill in skills}
    skills["all"] = "\n".join([str(skill) for skill in skills.values()])
    return skills
