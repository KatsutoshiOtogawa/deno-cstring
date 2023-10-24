import { load } from "./load_library.js";

function strerror(errnum: number): Deno.PointerValue {
  const {strerror, library } = load();

  let ptr: Deno.PointerValue<Uint8Array>;
  try{
    // @ts-ignore
    ptr = strerror(errnum);
  } finally {
      library.close();
  }
  return ptr;
}

export {
  strerror
}
