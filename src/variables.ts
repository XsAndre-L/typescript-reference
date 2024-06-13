import { Chalk } from "chalk";

const chalk = new Chalk({ level: 1 });

export function runVariablesReference() {
  console.log("running variables reference");
  let isDone: boolean = false;

  let age: number = 30;

  let name: string = "John";

  let list: number[] = [1, 2, 3];

  let tuple: [string, number] = ["hello", 10];

  enum Color {
    Red,
    Green,
    Blue,
  }
  let c: Color = Color.Green;

  let notSure: any = 4;
  notSure = "maybe a string instead";

  // Tutorial

  console.log(
    `
    ${chalk.blue("Hello there")}
    `
  );

  console.log(
    `
Basic Types: number, string, boolean, any, void, null, undefined.
Arrays and Tuples: Array<T>, [type1, type2, ...].
Enums: enum.
Object Types: Object, Interface, Class.
Function Types: (parameters) => returnType.
Union and Intersection Types: | and &.
Literal Types: Specific values like "hello".
    `
  );
}
