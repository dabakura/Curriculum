export interface State {
  user: Array<any>;
  tokens: Array<any>;
  error: string;
  islogin: boolean;
}

export const initialState: State = {
  user: [],
  tokens: [],
  error: "",
  islogin: false
};
