describe("booleans", () => {
  it("false === false", () => {
    // call expect funcion here
  });
  it("true === true", () => {
    // call expect funcion here
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