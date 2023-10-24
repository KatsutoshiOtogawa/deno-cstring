import { load } from "./load_library.ts";

function strcspn(s1: Uint8Array, s2: Uint8Array): number{
  const {strcspn, library } = load();

  let len: number;
  try{
    // @ts-ignore
    len = strcspn(s1, s2);
  } finally {
      library.close();
  }
  return len;
}

export {
  strcspn
}
