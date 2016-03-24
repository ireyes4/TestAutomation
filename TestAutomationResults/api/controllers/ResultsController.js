/**
 * ResultsController
 *
 * @description :: Server-side logic for managing Results
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	createResult: function(req, res){
        return res.send("Test POST");
    },
    getResult: function(req, res){
        return null;
    }
};

