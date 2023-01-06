import "mocha";
import { assert } from "chai";
import { ImmutableMap } from "../src";
import npmPackage from "../src";

describe("NPM Package", () => {
  it("should be an object", () => {
    assert.isObject(npmPackage);
  });
  it("should have a ImmutableMap property", () => {
    assert.property(npmPackage, "ImmutableMap");
  });
});

describe("ImmutableMap", () => {
  let iMap = new ImmutableMap();
  it("should ba an object", () => {
    assert.isObject(iMap);
  });
  it("should have a data property", () => {
    assert.property(iMap, "data");
  });
  it("should have a size property", () => {
    assert.property(iMap, "size");
  });
  it("should have a getMap property", () => {
    assert.property(iMap, "getMap");
  });
  it("should have a values property", () => {
    assert.property(iMap, "values");
  });
  it("should have a keys property", () => {
    assert.property(iMap, "keys");
  });
  it("should have a get property", () => {
    assert.property(iMap, "get");
  });
  it("should have a set property", () => {
    assert.property(iMap, "set");
  });
  it("should have a setMany property", () => {
    assert.property(iMap, "setMany");
  });
  it("should have a delete property", () => {
    assert.property(iMap, "delete");
  });
  it("should have a deleteMany property", () => {
    assert.property(iMap, "deleteMany");
  });
  it("should have a forEach property", () => {
    assert.property(iMap, "forEach");
  });
  it("should have a `has` property", () => {
    assert.property(iMap, "has");
  });
  it("should have a `includes` property", () => {
    assert.property(iMap, "includes");
  });
  it("should have a `find` property", () => {
    assert.property(iMap, "find");
  });
  it("should have a `map` property", () => {
    assert.property(iMap, "map");
  });
  it("should have a `some` property", () => {
    assert.property(iMap, "some");
  });
  it("should have a `every` property", () => {
    assert.property(iMap, "every");
  });
  describe("get()", () => {
    const data = {
      a: "test",
    };
    before(() => {
      iMap.set(1, data);
    });
    it("should return a copy of a element", () => {
      assert.notEqual(iMap.get(1), iMap.get(1));
    });
  });
});
