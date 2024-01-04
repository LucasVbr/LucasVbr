from src.model.social import Social


class SocialList:
    socials: list[Social]

    def __init__(self, socials: list):
        self.socials = [Social(social.get("name"), social.get("url")) for social in socials]

    def __str__(self) -> str:
        return "\n".join([str(social) for social in self.socials])
