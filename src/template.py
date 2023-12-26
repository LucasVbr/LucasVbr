def load_template(template_file_path: str):
    with open(template_file_path, 'r') as template_file:
        template_content = template_file.read()
    return template_content
