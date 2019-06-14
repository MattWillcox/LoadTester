const fs = require("fs")
const AWS = require("aws-sdk")

var s3Key = ""
var s3Secret = ""
var buck = 'awsbois2'

function Upload(filepath) {
  var isErr = false
  var errData = {}
  var theLog = fs.readFileSync(filepath)
  var s3 = new AWS.S3();
  var manUp = s3.upload({ Bucket: buck, Key: Date.now() + '.log', ACL: "public-read", Body: theLog }, function (err, data) {
    isErr = true
    errData = data
    console.log(err, data)
  })

  manUp.send()
  return { isErr, errData }
}

function Init(key, secret, bucket = "awsbois2") {
  s3Key = key
  s3Secret = secret
  buck = bucket
  AWS.config.update({ region: 'us-east-1', accessKeyId: s3Key, secretAccessKey: s3Secret });
}

module.exports = { Init, Upload }