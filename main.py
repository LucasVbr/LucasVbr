from src.config import load_data
from src.template import load_template

CONFIG_FILE = 'config.yaml'
TEMPLATE_FILE = 'template.md'
OUTPUT_FILE = 'README.md'

if __name__ == '__main__':
    data = load_data(CONFIG_FILE)
    template = load_template(TEMPLATE_FILE)

    # Add data to template
    result = template.format(**data)

    # Generate README file
    with open(OUTPUT_FILE, 'w') as readme_file:
        readme_file.write(result)

    print(f"{OUTPUT_FILE} generated successfully! 🎉")
