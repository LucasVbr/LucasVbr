class Template:

    def __init__(self, template_path: str):
        self.template_path = template_path

    def render(self, **kwargs):
        with open(self.template_path, 'r') as f:
            template = f.read()

        return template.format(**kwargs)
