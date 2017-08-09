let fs = require('fs'),
    csv = require('fast-csv');

//  Read and load the csv's
let streamOne = fs.createReadStream('student_list_prework_drops.csv'),
    streamTwo = fs.createReadStream('prework_url_student_list_bcsv2_all.csv'),
    streamOneArray = [],
    streamTwoArray = [];


let csvStreamOne = csv()
   .on('data', function(data) {
      // console.log(data);
      // console.log('inside data');
      streamOneArray.push(data);
      console.log(streamOneArray);
   })
   .on('end', function(data) {
      console.log('done');
   });

let csvStreamTwo = csv()
   .on('data', function(data) {
      // console.log(data);
      // console.log('inside data 2');
      // streamTwoArray.push(data);
   })
   .on('end', function(data) {
      console.log('done 2');
   });

// Compare CSV prework column
// Read first CSV
streamOne.pipe(csvStreamOne);

// Delay the reading of the second CSV after the first CSV is read
setTimeout(function() {
   streamTwo.pipe(csvStreamTwo);   
}, 3000);

// Display stream one array

console.log(streamOneArray);

