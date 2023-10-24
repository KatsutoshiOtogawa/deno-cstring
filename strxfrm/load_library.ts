import { _load } from './_load_library.ts';

function load() {

  const library = _load();

  const { 
    strxfrm,
  } = library.symbols;

  return {
    strxfrm,
    library,
  };
}

export {
  load,
}
