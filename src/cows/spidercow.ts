import { CowFunction } from '../types';

export const spidercow: CowFunction = ({ thoughts, eyes, tongue }) => `
          ${thoughts}     (
           ${thoughts}     )
            ${thoughts}   (
         /\\  .-""""-.  /\\
        //\\\\/  ,,,,  \\//\\\\
        |/\\| ,;;;;;;, |/\\|
        //\\\\\\;-""""-;///\\\\
       //  \\/   ..   \\/  \\\\
      (| ,-_| \\ || / |_-, |)
        //\`__(\\(__)/)__\`\\\\
       // /.-\\\`(${eyes})'/-.\\ \\\\
      (\\ |)   ')  ('   (| /)
       \` (|   (o  o)   |) \`
         \\)    \`--'    (/
                ${tongue}
`;
