/* EECS 2501 Assignment 1
Question 1
Translated from ForTran to node.js
By: Jeffrey Nicholls */

//Convert inputted temperature from F to c

//importing libraries
var fs = require("fs");
var prompt = require('prompt');

//Declaring variables
var degc = 1;
var deggyf = ' ';
//Starting a Write Stream
var writerStream = fs.createWriteStream(__dirname+'/outputs/DegreeC.txt');

//Gathering data from user
prompt.start();
console.log('input the temperature in F');
prompt.get('degf', function(err,result){
	if(err){return onErr(err);}
	console.log("The imputed temperature was: "+parseFloat(result.degf));
	deggyf = result.degf;
	//Calculate in celcius
	degc = (parseFloat(result.degf)-32)*5/9;
	done();
});

//Print output and terminate program
function done(){
	console.log("the temperature you converted was: "+deggyf+" to "+degc);
	writerStream.write("the temperature you converted was: "+deggyf+" to "+degc);
	writerStream.end();
	console.log("output has also been saved in DegreeC.txt");
	console.log("Function Ceased weiners");
	process.exit;
}
