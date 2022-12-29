import {SimpleIcon} from 'simple-icons/types';
import icons from 'simple-icons';
import Skill from '../core/Skill';

const LIST_OF_ICONS: SimpleIcon[] = [
  icons.siAngular,
  icons.siSymfony,
  icons.siGit,
  icons.siHtml5,
  icons.siFigma,
  icons.siJavascript,
  icons.siGnubash,
  icons.siAndroid,
  icons.siBulma,
  icons.siMariadb,
  icons.siSqlite,
  icons.siCss3,
  icons.siMysql,
  icons.siPython,
  icons.siC,
  icons.siPostgresql,
  icons.siPhp,
  icons.siBootstrap,
  icons.siExpress,
  icons.siNodedotjs,
  icons.siDeno,
  icons.siTypescript,
  icons.siOcaml,
  icons.siMongodb,
  icons.siReact,
  icons.siDocker,
  icons.siPug,
  icons.siNunjucks,
];

export default function getSkills(): Skill[] {
  return LIST_OF_ICONS.map((icon: SimpleIcon) => new Skill(icon)).
      sort(Skill.sortBySlug);
}