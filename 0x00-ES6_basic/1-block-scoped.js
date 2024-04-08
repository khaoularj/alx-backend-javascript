export default function taskBlock(trueOrFalse) {
  const task = false; // Use let instead of var
  const task2 = true; // Use let instead of var

  if (trueOrFalse) {
    const task = true; // Use let instead of var
    const task2 = false; // Use let instead of var
  }

  return [task, task2];
}
