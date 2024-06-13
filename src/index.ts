import { builtInObjects } from "./builtInObjects";
import { runVariablesReference } from "./variables";

function main() {
  let exit: boolean = false;

  while (!exit) {
    runVariablesReference();
    console.log("test");
    exit = true;
  }
}

main();
