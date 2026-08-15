/**
 * @article : https://takeuforward.org/recursion/print-name-n-times-using-recursion/
 */

/*
  ✅ Problem Statement: 

  Print your Name N times using recursion

  */

const printName = (count, number) => {
  if (count > number) {
    return;
  }

  console.log("Hinesh");

  count = count + 1;
  printName(count, number);
};

printName(1, 4);
