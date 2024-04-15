export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [i, quantity] of map) {
    if (quantity === 1) {
      map.set(i, 100);
    }
  }
}
