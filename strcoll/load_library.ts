import { _load } from './_load_library.ts';

function load() {

  const library = _load();

  const { 
    strcoll,
  } = library.symbols;

  return {
    strcoll,
    library,
  };
}

export {
  load,
}
