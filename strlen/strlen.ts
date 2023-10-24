import { load } from "./load_library.js";

function strlen(s: Uint8Array): number{
  const {strlen, library } = load();

  let len: number ;
  try{
    // @ts-ignore
    len = strlen(s);
  } finally {
      library.close();
  }
  return len;
}

export {
  strlen
}
