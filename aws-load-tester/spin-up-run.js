// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Load credentials and set region from JSON file
var s3Key = ""
var s3Secret = ""
var err = false
const uploader = require('./upload');
uploader.Init("", "");

function benchmark(instanceNum) {
  // return new Promise((resolve, console.log) => {
    AWS.config.update({ region: 'us-east-1', accessKeyId: s3Key, secretAccessKey: s3Secret });

    var serverTagName = 'loadtester';


    console.log('instanceNum: ', instanceNum);

    // AMI is amzn-ami-2011.09.1.x86_64-ebs
    var instanceParams = {
      ImageId: 'ami-0bcd00e9df92ea1bd',
      InstanceType: 't2.micro',
      KeyName: 'launchkey',
      MinCount: instanceNum,
      MaxCount: instanceNum,
      SecurityGroupIds: [
        'sg-00d1e9d6101c6603e',
      ],
      SubnetId: 'subnet-0ca4f722',
      IamInstanceProfile: {
        Name: 'ssmaccess'
      },
      TagSpecifications: [
        {
          ResourceType: 'instance',
          Tags: [{
            Key: 'name',
            Value: serverTagName
          }]
        }
      ]
    };

    // Create a promise on an EC2 service object
    var ec2 = new AWS.EC2({apiVersion: '2016-11-15'});

    var instance = ec2.runInstances(instanceParams, function(err, data) {
      if (err) console.log(err);
      else console.log('success');

      // const instanceIds = data.Instances.map(instance => instance.InstanceId);
      // console.log('instanceIds: ', instanceIds);
      // var params = {
      //   // InstanceIds: instanceIds,
      //   // Filters: [{
      //   //   Name: 'instance-id',
      //   //   Values: [instanceId]
      //   // }]
      // };

      // ec2.waitFor('instanceStatusOk', params, function(err, data) {
      //   console.log('HERE5');
      //   if (err) {
      //     console.log('err: ', err);
      //   }
      //   console.log('data: ', data);

      //   console.log('HERE6');
      //   var ssm = new AWS.SSM();
      //   var params = {
      //     DocumentName: 'AWS-RunShellScript', /* required */
      //     Parameters: {
      //       'commands': [
      //         'git clone https://github.com/MattWillcox/LoadTester.git',
      //         'cd LoadTester',
      //         'k6 run -e URL=https://api-v2.liondesk.com/contacts,OAUTH_TOKEN=64b9e80f94b1f7d016dba6302f72914d5bb6253c --vus=1 --duration="10s" test/index.js > output.txt',
      //       ],
      //     },
      //     Targets: [
      //       {
      //         Key: 'tag:name',
      //         Values: [
      //           serverTagName
      //         ]
      //       },
      //     ],
      //   };
      //   console.log('HERE7');

      //   ssm.sendCommand(params, function(err, data) {
      //   console.log('HERE8');
      //     if (err) console.log(err);
      //     else console.log('commands', data);
      //     // uploader.Upload("output.txt ");

      //     // resolve('resolved')
      //   });
      //   console.log('HERE9');
      // });
    });
}

module.exports = { benchmark };
