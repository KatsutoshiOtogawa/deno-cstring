import { _load } from './_load_library.js';

function load() {

  const library = _load();

  const { 
    strerror,
  } = library.symbols;

  return {
    strerror,
    library,
  };
}

export {
  load,
}
