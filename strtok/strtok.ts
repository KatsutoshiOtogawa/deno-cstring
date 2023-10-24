import { load } from "./load_library.ts";

function strtok(s1: Uint8Array, s2: Uint8Array): Deno.PointerValue {
  const {strtok, library } = load();

  let ptr: Deno.PointerValue<Uint8Array>;
  try{
    // @ts-ignore
    ptr = strtok(s1, s2);
  } finally {
      library.close();
  }
  return ptr;
}

export {
  strtok
}
