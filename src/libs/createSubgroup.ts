// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const createSubgroup = (source, chunks) => {
  return new Array(Math.ceil(source.length / chunks)).fill({}).map((_, i) => source.slice(i * chunks,i * chunks + chunks));
}

export default createSubgroup;
