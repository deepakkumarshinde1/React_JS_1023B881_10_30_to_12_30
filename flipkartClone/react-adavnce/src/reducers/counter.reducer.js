export const CounterActions = {
  COUNT_1: "COUNT_1",
  COUNT_2: "COUNT_2",
};

export let CounterInitialState = {
  count1: 1,
  count2: 5,
  count3: 0,
};
export function CounterReducer(state, action) {
  let { type, payload } = action;
  switch (type) {
    case CounterActions.COUNT_1:
      let { count1 } = state;
      return { ...state, count1: count1 + 1, count3: count1 * 3 };

    case CounterActions.COUNT_2:
      let { count2 } = state;
      return { ...state, count2: count2 + 1 };

    default:
      return { ...state };
  }
}
