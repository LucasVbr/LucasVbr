import Skill from './Skill.ts';
import Banner from './Banner.ts';
import Link from './Link.ts';

export default function makeContext(viewConfig) {
  return {
    ...viewConfig,
    banner: new Banner(viewConfig.banner).toString(),
    links: viewConfig.links.map(link => (new Link(link)).toString()),
    skills: viewConfig.skills.map(skill => (new Skill(skill)).toString()),
  }
}