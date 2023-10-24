import { load } from "./load_library.ts";

function strchr(s: Uint8Array, c: number): Deno.PointerValue {
  const {strchr, library } = load();

  let ptr: Deno.PointerValue<Uint8Array>;
  try{
    // @ts-ignore
    ptr = strchr(s, c);
  } finally {
      library.close();
  }
  return ptr;
}

export {
  strchr
}
