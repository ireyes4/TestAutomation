var AWS = require("aws-sdk");

/**
 * ResultsController
 *
 * @description :: Server-side logic for managing Results
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
AWS.config.loadFromPath('config.json');
AWS.config.update({
  endpoint: "https://dynamodb.us-east-1.amazonaws.com"
});

var docClient = new AWS.DynamoDB.DocumentClient();

var params = {
    TableName:'TestAutomationResults',
    Item:{
        "Application": "TestAutomationResults",
        "TestMethod": "Foo"
        }
    };

module.exports = {
	createResult: function(req, res){
        docClient.put(params, function(err, data) {
            if (err) {
                console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
                res.send("Failed");
            } else {
                console.log("Added item:", JSON.stringify(data, null, 2));
                res.send("Success!");
            }
        }
        )},
    getResult: function(req, res){
        return null;
    }
};

