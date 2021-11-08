type TokenFunc = (str: string) => void;

export interface TokenInterface {
  token: string;
  setToken: TokenFunc;
}
