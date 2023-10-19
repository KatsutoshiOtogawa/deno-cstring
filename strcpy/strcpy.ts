import { load } from "./load_library.ts";

function strcpy(s1: Uint8Array, s2: Uint8Array): Deno.PointerValue {
  const {strcpy, library } = load();

  let s: Deno.PointerValue<Uint8Array>;
  try{
    // @ts-ignore
    s = strcpy(s1, s2);
  } finally {
      library.close();
  }
  return s;
}

export {
  strcpy
}
