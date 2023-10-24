import { _load } from './_load_library.ts';

function load() {

  const library = _load();

  const { 
    strchr,
  } = library.symbols;

  return {
    strchr,
    library,
  };
}

export {
  load,
}
