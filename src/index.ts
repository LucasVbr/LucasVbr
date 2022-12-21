import {writeFile} from 'fs/promises';
import nunjucks from 'nunjucks';
import getSkills from './data/skills';
import Skill from './core/Skill';
import log from './core/Log';
import links from './data/links';
import footerBadges from './data/footerBadges';

const TEMPLATE_FILE: string = 'README.njk';
const OUTPUT_FILE: string = 'README.md';

const skills: Skill[] = getSkills();

nunjucks.configure('views/');
nunjucks.render(TEMPLATE_FILE, {skills, links, footerBadges}, (err, renderView : string | null) => {
  if (err) {
    log.error(err.message)
    return;
  }

  writeFile(OUTPUT_FILE, renderView ?? "")
  .then(() => log.success(`${OUTPUT_FILE} successfully generated`))
  .catch((err: string) => console.error(err));
});