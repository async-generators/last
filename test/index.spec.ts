import last from '../src';
import { expect } from 'chai';

describe("@async-generator/last", () => {
  it("should return undefined with empty source", async () => {
    let source = async function* () { }
    let expected = undefined;
    let result = await last(source());

    expect(result).to.be.eq(expected);
  });

  it("should return last item from source", async () => {
    let source = async function* () { yield 1; yield 2;}
    let expected = 2;
    let result = await last(source());

    expect(result).to.be.eq(expected);
  });

  it("should return nothing with empty source using predicate", async () => {
    let source = async function* () { }
    let expected = undefined;
    let result = await last(source(), () => true);

    expect(result).to.be.eq(expected);
  });

  it("should return nothing using always false predicate", async () => {
    let source = async function* () {
      yield 1; yield 2; yield 3; yield 4;
    }
    let expected = undefined;
    let result = await last(source(), () => false);

    expect(result).to.be.eq(expected);
  });

  it("should return last item when using always true predicate", async () => {
    let source = async function* () {
      yield 1; yield 2; yield 3; yield 4;
    }
    let expected = 4;
    let result = await last(source(), () => true);

    expect(result).to.be.eq(expected);
  });

  it("should return only last item where predicate is true", async () => {
    let source = async function* () {
      yield 1; yield 2; yield 3; yield 4;
    }
    let expected = 3;
    let result = await last(source(), (x) => x < 4);

    expect(result).to.be.eq(expected);
  });

  it("should await predicate", async () => {
    let source = async function* () {
      yield 1; yield 2; yield 3; yield 4;
    }
    let expected = 3;
    let result = await last(source(), async (x) => x == expected);

    expect(result).to.be.eq(expected);
  });
})
