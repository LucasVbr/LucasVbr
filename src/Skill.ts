import BadgeUrlBuilder from './url_builder/BadgeUrlBuilder.ts';
import ImageComponent from '../components/ImageComponent.ts';
import type SkillModel from '../models/SkillModel.ts';

export default class Skill {

  constructor(private model: SkillModel) {};

  toString(): string {
    const defaultLogo = this.model.message.toLowerCase().replace(/\s+/g, '');

    const url = new BadgeUrlBuilder()
        .setParameters({
            ...this.model,
              color: this.model.color ?? '000',
              logo: this.model.logo ?? defaultLogo
            },
        )
        .build()
    ;

    return ImageComponent(this.model.message, url);
  }
}