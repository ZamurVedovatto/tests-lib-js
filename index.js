describe("booleans", () => {
  it("false === false", () => {
    // code
  });
  it("true === true", () => {
    // code
  })
})

function describe(description, callback) {
  console.log(description);
  callback();
}

function it(description, callback) {
  console.log(description);
  callback();
}