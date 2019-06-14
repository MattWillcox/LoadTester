const fs = require('fs');
const crypto = require('crypto')
const path = require("path");

const filePath = path.resolve(process.argv[2])
var theLog = fs.readFileSync(process.argv[2])
const bucket = "awsbois"
const mime = "text/plain"
var resource = "/" + bucket + "/" + path.basename(filePath, '.log')
var dateValue = "Fri, 14 Jun 2019 11:06:04 -0700"
var toSign = "PUT\n\n" + mime + "\n" + dateValue + "\n" + resource
var s3Key = ""
var s3Secret = ""

var hasher = crypto.createHmac("SHA1", s3Secret)
hasher.update(theLog)
var signature = hasher.digest().toString()
console.log(signature)
/*
sources:
https://stackoverflow.com/questions/44751574/uploading-to-amazon-s3-via-curl-route/44751929
//https://stackoverflow.com/questions/31317007/get-a-file-full-path-in-node-js
*/