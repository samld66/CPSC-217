//task 1// 
function negativeArray (myArray){
    for (var i=0; i<myArray.length; i++){
        myArray [i] = myArray [i] * -1
    }
    return myArray;
}
console.log(negativeArray([1,2,3,4])); 


//task 2, resubmitted because i didnt do task correctly previously//
function numIndex (myArray, n){
    var count = 0;
    arr = [];
 for (var i=0; i<myArray.length; i++) {
        if (myArray[i] == n) {
            arr [count] = i;
            count = (count + 1);
        }

        }
        return count
    }
   console.log(numIndex([ 6, 4, 6, 6, 5, 2 ], 3));
 
//task 3//
var myArray = [ ["CPSC 110", "CPSC 130", "CPSC 146", "CPSC 207", "CPSC 217", "CPSC 246"] ]
myList = '<h4> CPSC Courses </h4>\n<ul>\n';

for (var i=0; i<myArray.length; i++) {
    for (var x=0; x<myArray[i].length; x = x+1) {
        myList = myList + '<li>' + myArray[i][x] + '</li>\n';
    }
}
myList = myList + '</ul>';

console.log(myList); 


//task 4//
function removeDuplicate(myArray){
    var n = [];
    for (var i=0, x=myArray.length; i<x; i++)
        if (n.indexOf(myArray[i]) == -1 && myArray[i])
            n.push(myArray[i]);
    return n;
}

    console.log(removeDuplicate([1,2,3,2,4,5,6,4,3,1,6,3,2,4,5,2,3]));
