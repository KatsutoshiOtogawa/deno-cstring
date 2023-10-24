import { _load } from './_load_library.ts';

function load() {

  const library = _load();

  const { 
    strrchr,
  } = library.symbols;

  return {
    strrchr,
    library,
  };
}

export {
  load,
}
