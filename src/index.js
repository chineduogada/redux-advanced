import { BUG_ADDED, BUG_REMOVED } from "./actionTypes";
import store from "./store";

const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch({
  type: BUG_ADDED,
  payload: { description: "Bug1" },
});

unsubscribe();

store.dispatch({
  type: BUG_REMOVED,
  payload: { id: 1 },
});

// console.log(store.getState());
