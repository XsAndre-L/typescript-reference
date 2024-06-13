//#region Variables

//#endregion

//#region Built-in Objects

export function builtInObjects() {
  // window or global depending on environment
  // const obj = globalThis;
  /* numeric value representing infinity */
  // const obj = Infinity;
  // const obj = NaN;
  const obj = undefined;

  console.log(obj);
}

//#endregion

//#region Arrays

const arr = new Array();

// Static Methods
console.log(Array.from("Hello"));
Array.fromAsync("Hello");
Array.isArray(arr);
Array.of(1, 2, 3);

console.log(Array.from("Hello"));
console.log(Array.of("Hello"));

Array.prototype.at(1);

arr[Symbol.iterator]();

// arr.push("Hello");
// arr.length = 0;
// arr.join(" ");
// arr.map((x) => x);
// arr.filter((x) => x);
// arr.reduce((x, y) => x + y);
// arr.reduceRight((x, y) => x + y);
// arr.find((x) => x);
// arr.findIndex((x) => x);
// arr.some((x) => x);
// arr.every((x) => x);
// arr.copyWithin(0, 0, 0);
// arr.fill("Hello", 0, 0);
// arr.reverse();
// arr.sort((x, y) => x - y);

//#endregion
