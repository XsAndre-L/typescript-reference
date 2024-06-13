import { builtInObjects } from "./builtInObjects";

console.log("Hello via Bun!");

// Variables
const a: number = 1;
const b = 2;

const str: string = "Hello";
const str_inferred = "Hello";

console.log(process.env.TEST);

builtInObjects();
