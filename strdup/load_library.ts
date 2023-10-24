import { _load } from './_load_library.js';

function load() {

  const library = _load();

  const { 
    strdup,
  } = library.symbols;

  return {
    strdup,
    library,
  };
}

export {
  load,
}
