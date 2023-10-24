import { load } from "./load_library.ts";

function strcat(s1: Uint8Array, s2: Uint8Array): Deno.PointerValue<Uint8Array> {
  const {strcat, library } = load();

  let ptr: Deno.PointerValue<Uint8Array>;
  try{
    // @ts-ignore
    ptr = strcat(s1, s2);
  } finally {
    library.close();
  }
  return ptr;
}

export {
  strcat
}
