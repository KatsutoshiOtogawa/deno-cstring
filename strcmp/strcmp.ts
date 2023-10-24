import { load } from "./load_library.ts";

function strcmp(s1: Uint8Array, s2: Uint8Array): number {
  const {strcmp, library } = load();

  let result: number;
  try{
    // @ts-ignore
    result = strcmp(s1, s2);
  } finally {
    library.close();
  }
  return result;
}

export {
  strcmp
}
