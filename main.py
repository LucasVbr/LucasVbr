from src.config import Config
from src.template import Template

CONFIG_FILE = 'config.yaml'
TEMPLATE_FILE = 'template.md'
OUTPUT_FILE = 'README.md'

if __name__ == '__main__':
    template = Template(TEMPLATE_FILE)
    data = Config(CONFIG_FILE).get_data()

    # Generate README file
    render = template.render(**data)
    with open(OUTPUT_FILE, 'w') as f:
        f.write(render)

    print(f"{OUTPUT_FILE} generated successfully! 🎉")
