import React, { useState } from "react";
function ClickNum() {
  const [getstate, SetState] = useState(0);
  return (
    <>
      <button type="button" onClick={() => SetState(getstate + 1)}>
        {getstate}
      </button>
    </>
  );
}
export default ClickNum;
