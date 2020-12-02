import { CowFunction } from '../types';

export const cheese: CowFunction = ({ thoughts, eye, tongue }) => `
   ${thoughts}
    ${thoughts}
      _____   _________
     /     \\_/         |
    |                 ||
    |                 ||
   |    ###\\  /###   | |
   |     ${eye}  \\/  ${eye}    | |
  /|                 | |
 / |        <        |\\ \\
| /|                 | | |
| |     \\_______/   |  | |
| |        ${tongue}       | / /
/||                 /|||
   ----------------|
        | |    | |
        ***    ***
       /___\\  /___\\
`;
