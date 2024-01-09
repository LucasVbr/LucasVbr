import yaml
from src.model.skill_list import SkillList
import requests
from src.model.social_list import SocialList


class Config:
    config_file_path: str
    config_data: dict[str, any] = None

    def __init__(self, config_file_path: str):
        self.config_file_path = config_file_path

    def load_config_file(self):
        with open(self.config_file_path, 'r') as config_file:
            self.config_data = yaml.safe_load(config_file)

    def handle_user_info(self):
        user = self.config_data["user"]
        response = requests.get(f"https://api.github.com/users/{user}")
        if response.status_code != 200:
            raise Exception("User not found")
        self.config_data["user"] = response.json()

    def handle_skill_section(self):
        self.config_data["skills"] = str(SkillList(self.config_data["skills"]))

    def handle_social_section(self):
        self.config_data["socials"] = str(SocialList(self.config_data["socials"]))

    def get_data(self):
        self.load_config_file()
        self.handle_user_info()
        self.handle_skill_section()
        self.handle_social_section()

        return self.config_data
