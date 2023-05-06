import UrlBuilder from './UrlBuilder.ts';
import type BannerModel from '../../models/BannerModel.ts';

export default class BannerUrlBuilder extends UrlBuilder {
  static BASE_URL = 'https://svg-banners.vercel.app/api';

  constructor(parameters: BannerModel) {
    super(BannerUrlBuilder.BASE_URL, parameters, {});
  }

  public setParameters(parameters: BannerModel): this {
    return super.setParameters(parameters);
  }
}