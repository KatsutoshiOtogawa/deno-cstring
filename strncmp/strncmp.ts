import { load } from "./load_library.ts";

function strncmp(s1: Uint8Array, s2: Uint8Array, num: number): number {
  const {strncmp, library } = load();

  let result: number;
  try{
    // @ts-ignore
    result = strncmp(s1, s2, num);
  } finally {
    library.close();
  }
  return result;
}

export {
  strncmp
}
