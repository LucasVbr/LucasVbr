import yaml
from src.model.skill_list import skill_list
import requests
from src.model.social_list import social_list


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

    def get_data(self):
        self.load_config_file()
        self.handle_user_info()
        self.config_data["skills"] = skill_list(self.config_data["skills"])
        self.config_data["socials"] = social_list(self.config_data["socials"])

        return self.config_data
