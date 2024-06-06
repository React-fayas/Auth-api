import { useState } from "react";

const useToggle = (initialValue: boolean = false) => {
  const [state, setState] = useState(initialValue);

  const toggle = () => setState(!state);

  return [state, toggle] as const;
};

export default useToggle;
