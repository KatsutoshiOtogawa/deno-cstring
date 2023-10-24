import { load } from "./load_library.ts";

function strncat(s1: Uint8Array, s2: Uint8Array, num: number): Deno.PointerValue<Uint8Array> {
  const {strncat, library } = load();

  let ptr: Deno.PointerValue<Uint8Array>;
  try{
    // @ts-ignore
    ptr = strncat(s1, s2, num);
  } finally {
    library.close();
  }
  return ptr;
}

export {
  strncat
}
