import { _load } from './_load_library.js';

function load() {

  const library = _load();

  const { 
    strlen,
  } = library.symbols;

  return {
    strlen,
    library,
  };
}

export {
  load,
}
