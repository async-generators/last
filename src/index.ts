import iterable from '@async-generators/iterable';

async function basic<T>(
  source: AsyncIterable<T> | Iterable<T>
): Promise<T | undefined> {
  let last: T = undefined;
  for await (let item of iterable(source)) {
    last = item;
  }
  return last;
}

async function predicated<T>(
  source: AsyncIterable<T> | Iterable<T>,
  predicate: (item: T) => Promise<boolean> | boolean
): Promise<T | undefined> {
  let last: T = undefined;
  for await (let item of iterable(source)) {
    if (await predicate(item)) { last = item; }
  }
  return last;
}

export default function <T>(
  source: AsyncIterable<T> | Iterable<T>
): Promise<T | undefined>
export default function <T>(
  source: AsyncIterable<T> | Iterable<T>,
  predicate: (item: T) => Promise<boolean> | boolean
): Promise<T | undefined>
export default function <T>(
  source: AsyncIterable<T> | Iterable<T>,
  predicate?: (item: T) => Promise<boolean> | boolean
): Promise<T | undefined> {
  if (predicate === undefined) {
    return basic(source);
  }
  return predicated(source, predicate);
}