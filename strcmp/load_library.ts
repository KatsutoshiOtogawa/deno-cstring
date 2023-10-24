import { _load } from './_load_library.ts';

function load() {

  const library = _load();

  const { 
    strcmp,
  } = library.symbols;

  return {
    strcmp,
    library,
  };
}

export {
  load,
}
