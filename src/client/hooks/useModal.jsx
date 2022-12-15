//TODO use this for chart view. If not, delete.

import { useState } from "react";

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }

  return [isShowing, toggle];
};
export default useModal;
