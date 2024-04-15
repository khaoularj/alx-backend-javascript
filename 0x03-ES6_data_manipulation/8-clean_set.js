export default function cleanSet(set, startString) {
  const result = Array.from(set)
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length));

  return result.join('-');
}
