
function generateId() {
  return Math.floor(Math.random() * 1000);
}

// convert the first letter of every word into
function getCapitalizedSentence(str) {
  const arr = str.splice(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].splice(1);
  }
}

export { generateId };
