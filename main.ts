import {parse} from 'https://deno.land/std@0.82.0/encoding/yaml.ts';
import nunjucks from 'https://deno.land/x/nunjucks@3.2.3-2/mod.js';
import makeContext from './src/Context.ts';
import type ConfigModel from './models/ConfigModel.ts';

// Load Config file
const config: ConfigModel = parse(await Deno.readTextFile('config.yaml')) as ConfigModel;
const context = makeContext(config.view)

// Render
nunjucks.configure('views/', {autoescape: true});
nunjucks.render(config.file.template, context, (err, res) => {
  if (err) return console.error(err);

  Deno.writeTextFile(config.file.output, res ?? '')
      .then(() => console.info(`[INFO] ${config.file.output} successfully generated`))
      .catch(err => console.error(err));
});