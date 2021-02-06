import { BUG_ADDED, BUG_REMOVED } from "./actionTypes";

export function bugAdded(description) {
  return { type: BUG_ADDED, payload: { description } };
}

export function bugRemoved(id) {
  return { type: BUG_REMOVED, payload: { id } };
}
