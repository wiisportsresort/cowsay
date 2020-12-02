import stringWidth from 'string-width';

interface Delimiters {
  first: [string, string];
  middle: [string, string];
  last: [string, string];
  only: [string, string];
}

const SPEECH_DELIMITERS: Delimiters = {
  first: ['/', '\\'],
  middle: ['|', '|'],
  last: ['\\', '/'],
  only: ['<', '>'],
};

const THOUGHT_DELIMITERS: Delimiters = {
  first: ['(', ')'],
  middle: ['(', ')'],
  last: ['(', ')'],
  only: ['(', ')'],
};

export const say = (text: string, wrap?: number): string => {
  return format(text, SPEECH_DELIMITERS, wrap);
};

export const think = (text: string, wrap?: number): string => {
  return format(text, THOUGHT_DELIMITERS, wrap);
};

const format = (text: string, delimiters: Delimiters, wrap?: number) => {
  let lines = split(text, wrap);
  if (lines.length === 0) {
    lines = [''];
  }
  const maxLength = Math.max(...lines.map(line => stringWidth(line)));

  const balloon = [
    top(maxLength),
    ...lines.map((line, i) => {
      const only = lines.length === 1;
      const first = i === 0;
      const last = i === lines.length - 1;
      const type: keyof Delimiters = only
        ? 'only'
        : first
        ? 'first'
        : last
        ? 'last'
        : 'middle';
      const [start, end] = delimiters[type];
      return `${start} ${pad(line, maxLength)} ${end}`;
    }),
    bottom(maxLength),
  ];
  return balloon.join('\n');
};

const split = (text: string, wrap?: number) => {
  text = text
    .replace(/\r\n?|[\n\u2028\u2029]/g, '\n')
    .replace(/^\uFEFF/, '')
    .replace(/\t/g, '        ');

  let lines = [];

  if (wrap) {
    text = text.split(/\s+/).join(' ');

    let start = 0;
    while (start < text.length) {
      let end = Math.min(start + wrap, text.length);
      const space = text.lastIndexOf(' ', end);
      if (end < text.length && space > start) {
        end = space;
      }
      lines.push(text.substring(start, end));
      if (space > start) {
        start = end + 1;
      } else {
        start = end;
      }
    }
  } else {
    lines = text.split('\n');
  }
  return lines;
};

const pad = (text: string, length: number) => {
  const trailingSpaces = new Array(length - stringWidth(text) + 1).join(' ');
  return text + trailingSpaces;
};

const top = (length: number) => {
  return ' ' + new Array(length + 3).join('_');
};

const bottom = (length: number) => {
  return ' ' + new Array(length + 3).join('-');
};
