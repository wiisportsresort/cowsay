import { CowFunction } from '../types';

export const pinball_machine: CowFunction = ({ thoughts }) => `
    ${thoughts}
     ${thoughts}
              /\\
             <  \\
             |\\  \\
             | \\  \\
             | .\\  >
             |  .\\/|
             |   .||
             |    ||
            / \\   ||
           /,-.\\: ||
          /,,  \`\\ ||
         /,  ', \`\\||
        /, *   ''/ |
       /,    *,'/  |
      /,     , /   |
     / :    , /   .|
    /\\ :   , /   /||
   |\\ \\ .., /   / ||
   |.\\ \\ . /   /  ||
   |  \\ \\ /   /   ||
   |   \\ /   /    |'
   |\\o '|o  /
   ||\\o |  /
   || \\ | /
   ||  \\|/
   |'   ||
        ||
        ||
        |'
`;
