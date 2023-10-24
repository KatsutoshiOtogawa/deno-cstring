import { load } from "./load_library.ts";

function strspn(s1: Uint8Array, s2: Uint8Array): number {
  const {strspn, library } = load();

  let len: number;
  try{
    // @ts-ignore
    len = strspn(s1, s2);
  } finally {
      library.close();
  }
  return len;
}

export {
  strspn
}
