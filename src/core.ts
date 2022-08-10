import denjucks from "https://deno.land/x/denjucks/mod.js";

let { template, data, output } = JSON.parse(await Deno.readTextFile("src/config.json"));

template = await Deno.readTextFile(template);
data = JSON.parse(await Deno.readTextFile(data));

const result = denjucks.renderString(template, data);
await Deno.writeTextFile(output, result);