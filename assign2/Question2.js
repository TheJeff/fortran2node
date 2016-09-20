/* EECS 2501 Assignment 2
Question 2
Translated from ForTran to node.js
By: Jeffrey Nicholls */

//Perform Hyperbolic functions

//importing libraries
var fs = require("fs");
var prompt = require('prompt');
var math = require('mathjs');

//Declaring variables
var x = 1;
var sinh = 1;
var cosh = 1;
var exp = 1;
var log = 1;

//start the input stream
var writerStream = fs.createWriteStream(__dirname+'/outputs/functions.txt');

//Collect users data
prompt.start();
console.log("enter in your x value:");
prompt.get('xVal', function(err,result){
	if(err){return onErr(err);}
	console.log("your x value was: "+result.xVal);
	
	//parse the string to an float value
	x = parseFloat(result.xVal);

	//Let's do some math
	sinh = math.sinh(x);
	cosh = math.cosh(x);
	exp = math.exp(x);
	log = math.log(x);
	//finish loop and start ending function
	done();
});

//ending function to write the results into the terminal and output file
function done(){
	console.log("Hyperbolic Sine Function Result: "+sinh);
	console.log("Hyperbolic Cosine Function Result: "+cosh);
	console.log("Euler's Function Result: "+exp);
	console.log("Logarithmic Function Result: "+log);
	writerStream.write("Hyperbolic Sine Function Result: "+sinh+"\n",'utf8');
	writerStream.write("Hyperbolic Cosine Function Result: "+cosh+"\n",'utf8');
	writerStream.write("Euler's Function Result: "+exp+"\n",'utf8');
	writerStream.write("Logarithmic Function Result: "+log+"\n",'utf8');
	console.log("Output has been saved to 'functions.txt'");
	console.log("Function Ceased");
	process.exit;
}