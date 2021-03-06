// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const sortByKey = (array, key) => {
  return array.sort(function(a, b) {
    const x = a[key];
    const y = b[key];
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
}

export default sortByKey;
