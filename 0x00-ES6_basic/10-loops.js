export default function appendToEachArrayValue(array, appendString) {
  const newArray = array.map((item) => appendString + item);
  return newArray;
}
