const whichSchool = function(age) {
  if (1 <= age && age <= 12) {
    return 'Elementary School';
  } else if (age <= 18) {
    return 'Secondary School';
  } else if (age >= 19) {
    return 'Lighthouse Labs';
  } else {
    return;
  }
}
console.log("I am 1. Which school should I go to?");
console.log(whichSchool(1));

console.log("I am 12. Which school should I go to?");
console.log(whichSchool(12));

console.log("I am 13. Which school should I go to?");
console.log(whichSchool(13));

console.log("I am 18. Which school should I go to?");
console.log(whichSchool(18));

console.log("I am 19. Which school should I go to?");
console.log(whichSchool(19));

console.log("I am 100. Which school should I go to?");
console.log(whichSchool(100));