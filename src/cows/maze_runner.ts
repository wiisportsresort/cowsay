import { CowFunction } from '../types';

export const maze_runner: CowFunction = ({ thoughts }) => `
    ${thoughts}
     ${thoughts}
      ${thoughts}
       \\
        \\
         \\
    \\     \\                     /
     \\     \\                   /
      \\     \\                 /
       ]     \\               [    ,'|
       ]      \\              [   /  |
       ]___               ___[ ,'   |
       ]  ]\\             /[  [ |:   |
       ]  ] \\           / [  [ |:   |
       ]  ]  ]         [  [  [ |:   |
       ]  ]  ]__     __[  [  [ |:   |
       ]  ]  ] ]\\ _ /[ [  [  [ |:   |
       ]  ]  ] ] (#) [ [  [  [ :===='
       ]  ]  ]_].nHn.[_[  [  [
       ]  ]  ]  HHHHH. [  [  [
       ]  ] /   \`HH("N  \\ [  [
       ]__]/     HHH  "  \\[__[
       ]         NNN         [
       ]         N/"         [
       ]         N H         [
      /          N            \\
     /           q,            \\
    /                           \\
`;
