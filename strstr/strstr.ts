import { load } from "./load_library.ts";

function strstr(s1: Uint8Array, s2: Uint8Array): Deno.PointerValue {
  const {strstr, library } = load();

  let ptr: Deno.PointerValue<Uint8Array>;
  try{
    // @ts-ignore
    ptr = strstr(s1, s2);
  } finally {
      library.close();
  }
  return ptr;
}

export {
  strstr
}
