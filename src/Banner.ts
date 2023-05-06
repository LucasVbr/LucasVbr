import ImageComponent from '../components/ImageComponent.ts';
import type BannerModel from '../models/BannerModel.ts';
import BannerUrlBuilder from './url_builder/BannerUrlBuilder.ts';

export default class Banner {

  constructor(private model: BannerModel) {
  };

  toString(): string {
    const url = new BannerUrlBuilder()
        .setParameters({...this.model})
        .build()
    ;

    return ImageComponent(this.model.text1, url);
  }
}