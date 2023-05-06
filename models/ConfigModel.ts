import type BannerModel from './BannerModel.ts';
import type LinkModel from './LinkModel.ts';
import type BadgeModel from './BadgeModel.ts';

type ConfigModel = {
  file: {
    template: string,
    output: string
  },
  view: {
    userName: string,
    banner: BannerModel,
    about: string,
    links: LinkModel[],
    skills: BadgeModel[],
    footer: string[]
  }
}

export default ConfigModel;