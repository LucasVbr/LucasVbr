import yaml

from src.model.skill_list import SkillList
import requests

from src.model.social_list import SocialList


def load_data(config_file_path: str) -> dict:
    """Load data from config file and return a dict"""
    config_data_builder = ConfigDataBuilder(config_file_path)
    return (config_data_builder
            .load_config_file()
            .load_user_info()
            .load_skill_section()
            .load_social_section()
            .build())


class ConfigDataBuilder:

    def __init__(self, config_file_path: str):
        """
        Initialize ConfigDataBuilder

        :param config_file_path: Path to config file
        """
        self.config_file_path = config_file_path
        self.config_data = None

    def load_config_file(self) -> 'ConfigDataBuilder':
        """
        Load config file and return ConfigDataBuilder

        :return: ConfigDataBuilder
        """
        with open(self.config_file_path, 'r') as config_file:
            self.config_data = yaml.safe_load(config_file)
        return self

    def load_user_info(self) -> 'ConfigDataBuilder':
        """
        Load user info from GitHub API and return ConfigDataBuilder

        :return: ConfigDataBuilder
        """
        user = self.config_data["user"]
        response = requests.get(f"https://api.github.com/users/{user}")

        if response.status_code != 200:
            raise Exception("User not found")

        self.config_data["user"] = response.json()
        return self

    def load_social_section(self) -> 'ConfigDataBuilder':
        """
        Load social section and return ConfigDataBuilder

        :return: ConfigDataBuilder
        """
        self.config_data["socials"] = str(SocialList(self.config_data["socials"]))
        return self

    def load_skill_section(self) -> 'ConfigDataBuilder':
        """
        Load skill section and return ConfigDataBuilder

        :return: ConfigDataBuilder
        """
        self.config_data["skills"] = str(SkillList(self.config_data["skills"]))
        return self

    def build(self) -> dict:
        """
        Return config data

        :return: dict
        """
        return self.config_data
