/* EECS 2501 Assignment 2
Question 3
Translated from ForTran to node.js
By: Jeffrey Nicholls */

//the time it takes for light to get to earth from the sun

//Importing libraries
var fs = require("fs");

//Declaring variables
var spdLight = 9.46*(10e12);
var timeYear = 1;
var timeMin = 1;
var timeSec = 1;
var disSun = 15*(10e7);
var iMin = 1;
var iSec = 1;

//Start the write stream
var writerStream = fs.createWriteStream(__dirname+'/outputs/timeout.txt');

//calculate the time in years
timeYear = disSun/spdLight;

//There are 525960 minutes in one year
timeMin = timeYear*525960.0

//there are 60 seconds in a minute
timeSec = timeMin*60.0

//let's parse those floats into integers
iMin = parseInt(timeMin);
iSec = parseInt(timeSec);

//Print the results
console.log("It takes light "+timeYear+" years to get to the earth");
console.log("It takes light "+iMin+" minutes to get to the earth");
console.log("It takes light "+iSec+" seconds to get to the earth");
writerStream.write("It takes light "+timeYear+" years to get to the earth"+"\n",'utf8');
writerStream.write("It takes light "+iMin+" minutes to get to the earth"+"\n",'utf8');
writerStream.write("It takes light "+iSec+" seconds to get to the earth"+"\n",'utf8');
writerStream.end();
console.log("output has also been saved in 'timeout.txt'");
console.log("Function Ceased");
process.exit;
