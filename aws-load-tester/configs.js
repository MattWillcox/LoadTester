/**
 * @author: YOUR_NAME_HERE (YOUR_HACKCAPITAL_EMAIL_HERE)
 * @date: Friday, 14th June 2019 1:18:55 pm
 * @lastModifiedBy: YOUR_NAME_HERE (YOUR_HACKCAPITAL_EMAIL_HERE)
 * @lastModifiedTime: Friday, 14th June 2019 1:25:10 pm
 * 
 * DESCRIPTION
 * 
 * @copyright (c) 2019 Hack Capital
 */

let configs = {
  test: {
    instances: "1",
    k6GitHub: "1",
    virtualUsers: "1",
    benchMark: "1",
    writeToS3: "1",
    loadConfig: "1"
  }
}

module.exports = {
  configs
};