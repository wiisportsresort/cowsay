import { CowFunction } from '../types';

export const milk: CowFunction = ({ thoughts, eye, tongue }) => `
 ${thoughts}     ____________
  ${thoughts}    |__________|
      /           /\\
     /           /  \\
    /___________/___/|
    |          |     |
    |  ==\\ /== |     |
    |   ${eye}   ${eye}  | \\ \\ |
    |     <    |  \\ \\|
   /|          |   \\ \\
  / |  \\_____/ |   / /
 / /|    ${tongue}    |  / /|
/||\\|          | /||\\/
    -------------|
        | |    | |
       <__/    \\__>
`;
