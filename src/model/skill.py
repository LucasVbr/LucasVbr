class Skill:
    def __init__(self, name: str, url: str):
        self.name = name
        self.url = url

    def __str__(self):
        return f"![{self.name}]({self.url})"

    def __repr__(self):
        return f"![{self.name}]({self.url})"