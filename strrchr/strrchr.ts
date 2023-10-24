import { load } from "./load_library.ts";

function strrchr(s: Uint8Array, c: number): Deno.PointerValue {
  const {strrchr, library } = load();

  let ptr: Deno.PointerValue<Uint8Array>;
  try{
    // @ts-ignore
    s = strrchr(s, c);
  } finally {
      library.close();
  }
  return s;
}

export {
  strrchr
}
