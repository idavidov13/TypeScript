// 1. Print and Sum

// Write a program that:

// · Receives a start number as a first parameter

// · Receives an end number as a second parameter

// · Prints all the numbers from the given start to the given end (inclusively)

// · Prints the sum of the printed numbers

// Note: All the numbers will be integers.

function printAndSum(startNum: number, endNum: number): void {
  let totalSum: number = 0;
  let arrayOfNums: number[] = [];
  for (let i = startNum; i <= endNum; i++) {
    arrayOfNums.push(i);
    totalSum += i;
  }
  console.log(arrayOfNums.join(" "));
  console.log(totalSum);
}

//*************
// TEST INPUT 1
//printAndSum(5, 10);

//*************
// TEST INPUT 2
//printAndSum(0, 26);

//*************
// TEST INPUT 3
printAndSum(50, 60);
