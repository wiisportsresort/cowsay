import { CowFunction } from '../types';

export const stimpy: CowFunction = ({ thoughts, eye }) => `
  ${thoughts}     .    _  .
   ${thoughts}    |\\_|/__/|
       / / \\/ \\  \\
      /__|${eye}||${eye}|__ \\
     |/_ \\_/\\_/ _\\ |
     | | (____) | ||
     \\/\\___/\\__/  //
     (_/         ||
      |          ||
      |          ||\\
       \\        //_/
        \\______//
       __ || __||
      (____(____)
`;
