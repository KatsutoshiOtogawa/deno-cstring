import { _load } from './_load_library.ts';

function load() {

  const library = _load();

  const { 
    strncat,
  } = library.symbols;

  return {
    strncat,
    library,
  };
}

export {
  load,
}
