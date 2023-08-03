function cookie(x) {
  let subj;
  if (typeof x == "string") {
    subj = "Zach";
  }
  if (typeof x == "number" || Number.isInteger(x)) {
    subj = "Monica";
  }
  if (typeof x != "number" && typeof x != "string") {
    subj = "Dog";
  }
  return `Who ate the last cookie? It was ${subj}!`;
  // ...
}
console.log(cookie(5.5));
