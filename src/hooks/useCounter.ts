import { useReducer } from "react";

type State = {
  count: number;
};

type Action = {
  type: "increment" | "decrement";
};

const intialstate: State = {
  count: 0,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error("Unhandled action type");
  }
};

export const useCounter = () => {
  const [state, dispatch] = useReducer(reducer, intialstate);

  const increment = () => dispatch({ type: "increment" });
  const decrement = () => dispatch({ type: "decrement" });

  return { count: state.count, increment, decrement };
};
