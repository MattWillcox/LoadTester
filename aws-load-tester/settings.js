const { ux, sdk } = require('@cto.ai/sdk')


let instances = [
  {
    type: 'input',
    name: 'instances',
    message: `\nHow many instances?:  ${ux.colors.reset.green('→')}\n\n`,
  },
]
let k6GitHub = [
  {
    type: 'input',
    name: 'instances',
    message: `\nWhat is your github of your k6 script?:  ${ux.colors.reset.green('→')}\n\n`,
  },
]
let virtualUsers = [
  {
    type: 'input',
    name: 'instances',
    message: `\nHow many virtual users per instance?:  ${ux.colors.reset.green('→')}\n\n`,
  },
]
let benchMark = [
  {
    type: 'input',
    name: 'instances',
    message: `\nHow long do you want to run the benchmark?:  ${ux.colors.reset.green('→')}\n\n`,
  },
]
let writeToS3 = [
  {
    type: 'input',
    name: 'instances',
    message: `\nDo you want to write the results to s3? if so, specify keys:  ${ux.colors.reset.green('→')}\n\n`,
  },
]
let saveSettings = [
  {
    type: 'input',
    name: 'instances',
    message: `\n Save current settings?:  ${ux.colors.reset.green('→')}\n\n`,
  },
]


module.exports = {
  instances,
  k6GitHub,
  virtualUsers,
  benchMark,
  writeToS3,
  saveSettings
};