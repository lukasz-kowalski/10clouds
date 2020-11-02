import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSize: {
      xxsmall: string;
      xsmall: string;
      small: string;
      base: string;
      large: string;
      xlarge: string;
    };

    colors: {
      lightPurple: string;
      darkPurple: string;
      black: string;
      background: string;
      white: string;
      grey: string;
      green: string;
      red: string;
    };
  }
}
