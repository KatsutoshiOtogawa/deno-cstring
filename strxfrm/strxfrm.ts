import { load } from "./load_library.ts";

function strxfrm(s1: Uint8Array, s2: Uint8Array, num: number): number {
  const {strxfrm, library } = load();

  let result: number;
  try{
    // @ts-ignore
    result = strxfrm(s1, s2, num);
  } finally {
    library.close();
  }
  return result;
}

export {
  strxfrm
}
