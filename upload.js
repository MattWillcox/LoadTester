const fs = require('fs');
const path = require("path");
const AWS = require("aws-sdk")

const filePath = path.resolve(process.argv[2])
var theLog = fs.readFileSync(process.argv[2])
var s3Key = ""
var s3Secret = ""
var err = false

AWS.config.update({ region: 'ca-central-1', accessKeyId: s3Key, secretAccessKey: s3Secret });
var s3 = new AWS.S3();
var manUp = s3.upload({ Bucket: 'awsbois', Key: Date.now() + '.log', ACL: "public-read", Body: theLog }, function (err, data) {
  err = true
  console.log(err, data)
})

manUp.send()
return err ? 1 : 0