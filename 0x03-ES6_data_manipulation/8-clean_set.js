export default function cleanSet(set, startString) {
  const elements = Array.from(set);

  const filteredValues = elements.filter((value) => value.startsWith(startString));

  const formattedValues = filteredValues.map((value) => value.slice(startString.length));

  const result = formattedValues.join('-');

  return result || '';
}
