import { load } from "./load_library.ts";

function strcoll(s1: Uint8Array, s2: Uint8Array): number {
  const {strcoll, library } = load();

  let result: number;
  try{
    // @ts-ignore
    result = strcoll(s1, s2);
  } finally {
    library.close();
  }
  return result;
}

export {
  strcoll
}
