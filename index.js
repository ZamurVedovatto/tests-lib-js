describe("booleans", () => {
  it("false === false", () => {
    expect(false).toBe(true);
  });
  it("true === true", () => {
    expect(true).toBe(false);
  })
})

function describe(description, callback) {
  console.log(description);
  callback();
}

function it(description, callback) {
  console.log(`   ${description}`);
  callback();
}

function expect(left) {
  return {
    toBe(right) {
      if (left !== right) {
        console.log(`   expected "${left}" to be "${right}"`);
      }
    }
  };
}