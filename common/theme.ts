interface Breakpoints {
  xs: string;
  s: string;
  ns: string;
  m: string;
  l: string;
}

const breakpoints: Breakpoints = {
  xs: "screen and (max-width: 30em)",
  s: "screen and (max-width: 48em)",
  ns: "screen and (min-width:30em)",
  m: "screen and (min-width:30em) and (max-width:60em)",
  l: "screen and (min-width:60em)",
};

export {
  breakpoints
}