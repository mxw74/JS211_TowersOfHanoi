"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// An object that represents the three stacks of Towers of Hanoi;
// * each key is an array of Numbers:
// * A is the far-left,
// * B is the middle,
// * C is the far-right stack
// * Each number represents the largest to smallest tokens:
// * 4 is the largest,
// * 1 is the smallest

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: [],
};

// Start here. What is this function doing?
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
};

// Next, what do you think this function should do?
const movePiece = (startStack, endStack) => {
  // Your code here
  //I need it to select the last variable in each stack (pop())
  //It needs to .push() this variable into another selected stack
  // startStack=console.log(stacks[startStack])
  // endStack=console.log(stacks[endStack])

  // let lastItem = stacks[startStack].pop();
  stacks[endStack].push(stacks[startStack].pop());

  // endStack
  // console.log(takePiece)
  // console.log(endStack)
  // console.log(startStack.push(endStack.pop()))

  //maybe an if statement (if startStack = "string" {pop()})
  // startStack = "";
  // if (startStack ==a) {
  //   startStack = console.log(stacks.a.pop());
  // } else if (startStack ==b) {
  //   startStack = console.log(stacks.b.pop());
  // } else if (startStack == c) {
  //   startStack = console.log(stacks.c.pop());
  // }
  // // endStack = "";
  // if (endStack == a) {
  //   endStack = console.log(stacks.a.push(startStack));
  // } else if (endStack == b) {
  //   endStack = console.log(stacks.b.push(startStack));
  // } else if (endStack == c) {
  //   endStack = console.log(stacks.c.push(startStack));
  // }
  // startStack = console.log(stacks.pop())
  // yourMove = () => {
  //   removedItem = console.log(stacks.a.pop()); //selects the last item in array a
  //   console.log(stacks.b.push(removedItem)); //adds removed item back to new array
  // }
};

// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2
const isLegal = (startStack, endStack) => {
  //startStack, endStack as parameters
  // Your code here

  if (
    stacks[endStack][stacks[endStack].length - 1] <
      stacks[startStack][stacks[startStack].length - 1] ||
    stacks[startStack] == [] ||
    stacks[endStack].length >= 4
  ) {
    return console.log("cannot make this move");
  } else {
    movePiece(startStack, endStack);
  }

  // const checkArray = console.log(stacks.a.length) | console.log(stacks.b.length) |
  // console.log(stacks.c.length)
  // if (startStack)
  // if (checkArray < 4, lastInteger > removedItem) {
  //   move the block to the selected array
  // } else {
  //   return "cannot make this move"
  // }
};

// What is a win in Towers of Hanoi? When should this function run?
const checkForWin = () => {
  // Your code here
  if (stacks.c == [4, 3, 2, 1]) {
    console.log("You Won");
  } else {
    return false;
  }
  //does the c array = 4 3 2 1 return a console log message if not return false
  //start a new game
};

// When is this function called? What should it do with its argument?
const towersOfHanoi = (startStack, endStack) => {
  // Your code here
  //  let firstMove = startStack;
  //  let secondMove = endStack;

  isLegal(startStack, endStack)

  // if (isLegal(startStack, endStack)) {
  //   movePiece(startStack, endStack);
  // }
  // movePiece(firstMove, secondMove);
  // movePiece(startStack, endStack)
  // checkForWin()
  // if (!isLegal(startStack, endStack)) {
  //   //console log an error message
  // } else {
  //   movePiece(startStack, endStack);
  // }
  // checkForWin();
};

const getPrompt = () => {
  printStacks();
  rl.question("start stack: ", (startStack) => {
    rl.question("end stack: ", (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
};

// Tests

if (typeof describe === "function") {
  describe("#towersOfHanoi()", () => {
    it("should be able to move a block", () => {
      towersOfHanoi("a", "b");
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe("#isLegal()", () => {
    it("should not allow an illegal move", () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: [],
      };
      assert.equal(isLegal("a", "b"), false);
    });
    it("should allow a legal move", () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: [],
      };
      assert.equal(isLegal("a", "c"), true);
    });
  });
  describe("#checkForWin()", () => {
    it("should detect a win", () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
} else {
  getPrompt();
}
