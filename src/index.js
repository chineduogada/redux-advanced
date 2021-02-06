import { bugAdded, bugRemoved } from "./actions";
import store from "./store";

const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(bugAdded("Bug1"));

// unsubscribe();

store.dispatch(bugRemoved());

// console.log(store.getState());
