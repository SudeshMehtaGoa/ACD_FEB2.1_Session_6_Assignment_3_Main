/*
   sum of numbers ( 1 till user input)
   sum = 1+2+3+4+....
*/
function sumOfNumbers() {
   
    /* assumed values will be always numeric, validation is not done */
    var numMaxLimit = document.getElementById("txtMaxNumber").value;
    console.log("Max limit is :" + numMaxLimit);

    /* using FOR loop */
    var numFinalSum=0;
    for(var loopCounter=1;loopCounter<=numMaxLimit;loopCounter++)
    {
        numFinalSum = numFinalSum + loopCounter;
    }
    /*printing result calculated by for loop */
    document.getElementById("lblSumOfNumbersUsingForLoop").innerText = "Sum using FOR loop is " + numFinalSum;
    console.log("Sum using FOR loop is:" + numFinalSum);
    
    /*using WHILE loop */
    var whileLoopCounter = 1;
    numFinalSum =0;
    while(whileLoopCounter<=numMaxLimit)
    {
        numFinalSum = numFinalSum + whileLoopCounter;
        whileLoopCounter++;
    }
    /*printing result calculated by while loop */    
    document.getElementById("lblSumOfNumbersUsingWhileLoop").innerText = "Sum using WHILE loop is " + numFinalSum;
    console.log("Sum using WHILE loop is:" + numFinalSum);
}