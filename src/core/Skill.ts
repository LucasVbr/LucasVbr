import {SimpleIcon} from 'simple-icons/types';

export default class Skill {
  private title: string;
  private slug: string;
  private shield: string;

  constructor(icon: SimpleIcon) {
    this.title = icon.title;
    this.slug = icon.slug;
    this.shield = this.buildShield(icon);
  }

  private buildShield(icon: SimpleIcon): string {
    const baseUrl = 'https://img.shields.io/static/v1';
    const params = {
      label: '',
      message: icon.title,
      color: icon.hex,
      logo: icon.slug,
      logoColor: 'white',
    };

    const shieldUrl = new URL(baseUrl);
    Object.entries(params).forEach(param => {
      const [key, value] = param;
      shieldUrl.searchParams.append(key, value);
    });
    return shieldUrl.toString();
  }

  public static sortBySlug(a: Skill, b: Skill) {
    if (a.slug < b.slug) return -1;
    if (a.slug > b.slug) return 1;
    return 0;
  }
}