import { _load } from './_load_library.ts';

function load() {

  const library = _load();

  const { 
    strncmp,
  } = library.symbols;

  return {
    strncmp,
    library,
  };
}

export {
  load,
}
