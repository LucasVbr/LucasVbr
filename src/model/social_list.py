from src.model.social import Social


class SocialList:
    def __init__(self, socials: list):
        self.socials = [Social(social.get("name"), social.get("url"), social.get("img")) for social in socials]

    def __str__(self) -> str:
        return "\n".join([str(social) for social in self.socials])

    def __repr__(self) -> str:
        return "\n".join([str(social) for social in self.socials])