const { ux, sdk } = require('@cto.ai/sdk')
var fs = require('fs');
var settings = require('./settings');

async function main() {
  // fs.readdir("./prevSettings", function (err, files) {
  //   if (err) {
  //     // some sort of error
  //   } else {
  //     if (!files.length) {
  //       console.log("EMPTY FILE")
  //     } else {
  //       console.log("NOT EMPTY")
  //     }
  //   }
  // });

  let instances = await ux.prompt(settings.instances);
  let k6GitHub = await ux.prompt(settings.k6GitHub);
  let virtualUsers = await ux.prompt(settings.virtualUsers);
  let benchMark = await ux.prompt(settings.benchMark);
  let writeToS3 = await ux.prompt(settings.writeToS3);
  
}

main()
