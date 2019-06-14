const { ux, sdk } = require('@cto.ai/sdk')
var fs = require('fs');
var settings = require('./settings');
var configs = require('./configs');
const spinUpRun = require('./spin-up-run');

let instances
let k6GitHub
let virtualUsers
let benchMark
let writeToS3
let loadConfig

async function setConfigs() {
  instances = await ux.prompt(settings.instances);
  // k6GitHub = await ux.prompt(settings.k6GitHub);
  // virtualUsers = await ux.prompt(settings.virtualUsers);
  // benchMark = await ux.prompt(settings.benchMark);
  // writeToS3 = await ux.prompt(settings.writeToS3);
}

async function main() {
  await setConfigs();
  spinUpRun.benchmark(instances.value);
}

main()
