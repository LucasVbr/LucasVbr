from src.model.social import Social


def social_list(socials: list) -> dict[str, str]:
    socials: dict[str, str] = {social.get("name"): str(Social(social.get("name"), social.get("url"))) for social in
                               socials}
    socials["all"] = "\n".join([str(social) for social in socials.values()])
    return socials
