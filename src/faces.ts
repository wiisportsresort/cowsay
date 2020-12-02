import { CowFace, FaceOptions } from './types';

// From `man cowsay`:
//
// There are several provided modes which change the appearance of the cow
// depending on its particular emotional/physical state.   The  -b  option
// initiates  Borg  mode;  -d  causes  the  cow to appear dead; -g invokes
// greedy mode; -p causes a state of paranoia to come  over  the  cow;  -s
// makes  the  cow  appear thoroughly stoned; -t yields a tired cow; -w is
// somewhat the opposite of -t, and initiates wired mode; -y brings on the
// cow's youthful appearance.
const DEFAULT_EYES = 'oo';
const DEFAULT_TONGUE = '  ';

const modes: { [mode: string]: CowFace } = {
  borg: { eyes: '==', tongue: '  ' },
  dead: { eyes: 'xx', tongue: 'U ' },
  greedy: { eyes: '$$', tongue: '  ' },
  paranoid: { eyes: '@@', tongue: '  ' },
  stoned: { eyes: '**', tongue: 'U ' },
  tired: { eyes: '--', tongue: '  ' },
  wired: { eyes: 'OO', tongue: '  ' },
  youthful: { eyes: '..', tongue: '  ' },
};

// First letter abbreviation
Object.keys(modes).forEach(key => {
  modes[key.substring(0, 1)] = modes[key];
});

export function getFace(options: FaceOptions): CowFace {
  return options.mode
    ? modes[options.mode]
    : {
        eyes: options.e || DEFAULT_EYES,
        tongue: options.T || DEFAULT_TONGUE,
      };
}
