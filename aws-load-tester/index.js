const { sdk } = require('@cto.ai/sdk')

async function main() {
  let instances = prompt("How many instances?: ");
  let k6GitHub = prompt("What is your github of your k6 script?: ");
  let virtualUsers = prompt("How many virtual users per instance?: ");
  let benchMark = prompt("How long do you want to run the benchmark?: ");
  let writeToS3 = prompt("Do you want to write the results to s3? if so, specify keys: ");
  let writeToYaml = prompt("Write to yaml: ");

}

main()
