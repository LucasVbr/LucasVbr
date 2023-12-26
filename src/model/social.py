class Social:
    def __init__(self, name: str, url: str, img: str):
        self.name = name
        self.url = url
        self.img = img

    def __repr__(self) -> str:
        return f"[![{self.name}]({self.img})]({self.url})"
    
    def __str__(self) -> str:
        return f"[![{self.name}]({self.img})]({self.url})"