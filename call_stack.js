// Call stack

// Dry run -
// Go through the code in your mind

function step1() {
  step2();
  console.log("step1");
}

function step2() {
  step3();
  console.log("step2");
}

function step3() {
  console.log("step3");
}

step1();
