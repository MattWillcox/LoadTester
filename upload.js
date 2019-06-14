import { readFileSync } from 'fs';
import { S3, config } from "aws-sdk";

var s3Key = ""
var s3Secret = ""
var buck = 'awsbois'

function Upload(filepath) {
  var err = false
  var theLog = readFileSync(filepath)
  var s3 = new S3();
  var manUp = s3.upload({ Bucket: buck, Key: Date.now() + '.log', ACL: "public-read", Body: theLog }, function (err, data) {
    err = true
    console.log(err, data)
  })

  manUp.send()
  return { err, data }
}

function Init(key, secret, bucket) {
  s3Key = key
  s3Secret = secret
  buck = bucket
  config.update({ region: 'ca-central-1', accessKeyId: s3Key, secretAccessKey: s3Secret });
}

module.exports({ Init: Init(), Upload: Upload() })