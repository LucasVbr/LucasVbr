import type BadgeModel from '../../models/BadgeModel.ts';
import UrlBuilder from './UrlBuilder.ts';

export default class BadgeUrlBuilder extends UrlBuilder {
  static BASE_URL = 'https://img.shields.io/static/v1';
  static DEFAULT_PARAMETERS: BadgeModel = {style: 'flat', label: " ", logoColor: "white"};

  constructor(parameters?: BadgeModel) {
    super(BadgeUrlBuilder.BASE_URL,
        parameters,
        BadgeUrlBuilder.DEFAULT_PARAMETERS,
    );
  };

  public setParameters(parameters: BadgeModel): this {
    return super.setParameters(parameters);
  }
}