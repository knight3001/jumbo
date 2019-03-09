//  @flow

import type { Store as ReduxStore, Dispatch as ReduxDispatch } from "redux";

export type StateType = {
  movie: { [key: string]: * }
};

export type DispatchType = ReduxDispatch<*>;
