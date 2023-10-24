import { load } from "./load_library.js";

function strdup(s: Uint8Array): Deno.PointerValue {
  const {strdup, library } = load();

  let str: Deno.PointerValue<Uint8Array>;
  try{
    // @ts-ignore
    str = strdup(s);
  } finally {
      library.close();
  }
  return s;
}

export {
  strdup
}
