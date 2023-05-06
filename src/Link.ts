import BadgeUrlBuilder from './url_builder/BadgeUrlBuilder.ts';
import ImageComponent from '../components/ImageComponent.ts';
import LinkModel from '../models/LinkModel.ts';
import LinkComponent from '../components/LinkComponent.ts';

export default class Link {

  constructor(private model: LinkModel) {}

  handleLabel() {
    const {label: badge} = this.model;
    const defaultLogo = badge.message.toLowerCase().replace(/\s+/g, '')

    const url = new BadgeUrlBuilder()
        .setParameters({
              ...badge,
              style: "for-the-badge",
              logo: badge.logo ?? defaultLogo,
              color: badge.color ?? '000',
            },
        )
        .build()
    ;

    return ImageComponent(badge.message, url);
  }

  toString(): string {
    const label = this.handleLabel().toString()
    return LinkComponent(label, this.model.url).toString()
  }
}