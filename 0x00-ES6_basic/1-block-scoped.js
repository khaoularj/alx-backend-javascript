export default function taskBlock(trueOrFalse) {
  let task = false; // Use let instead of var
  let task2 = true; // Use let instead of var

  if (trueOrFalse) {
    let task = true; // Use let instead of var
    let task2 = false; // Use let instead of var
  }

  return [task, task2];
}

