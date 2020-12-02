export interface FaceOptions {
  mode?: string;
  e?: string;
  T?: string;
}

export interface CowFace {
  eyes: string;
  tongue: string;
}

export interface CowOptions extends FaceOptions {
  n?: boolean;
  nowrap?: boolean;
  W?: number;
  cow?: CowFunction;
}

export type CowFunction = (options: {
  thoughts: string;
  eyes: string;
  eye: string;
  tongue: string;
}) => string;
