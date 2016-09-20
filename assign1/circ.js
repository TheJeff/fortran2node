/* EECS 2501 Assignment 1
Translated from ForTran to node.js
By: Jeffrey Nicholls */

//Calculating Circumference Question

//Listing libraries
process.stdin.resume();
process.stdin.setEncoding('utf8');
var fs = require("fs");
var prompt = require('prompt');

//Existing Variable
var pi = 3.14159;
var circum = 1;

//Creating the writable stream to print file to
var writerStream = fs.createWriteStream(__dirname+'/output/circ.txt');

//Gathering input for the radius of the circle
prompt.start();
console.log("Please type in your radius:");
prompt.get('radius', function (err,result){
	if (err){return onErr(err);}
	console.log('Your radius was: '+parseFloat(result.radius));
	//Calculating the Circumference her to keep my logic then call function to finish program
	circum = 2*pi*parseFloat(result.radius);
	done();
});

//Function called in the prompt stack used to print/write and terminate program
function done() {
	console.log("The circumference you have calculated was: "+circum);
	writerStream.write("The circumference you have calculated was: "+circum.toString(), 'utf8');
	writerStream.end();
	console.log("The output has been written to file 'circ.text' found in this directory");
	console.log("Function Ceased");
	process.exit;
}