import React, { useState } from "react";
interface Props {
  cutToNumber: number;
  children: string;
}

function ExpandableText({ cutToNumber, children }: Props) {
  const [showWholeText, setShowWholeText] = useState(false);

  return (
    <>
      <span>
        {showWholeText ? children : children.substring(0, cutToNumber) + "..."}
      </span>
      <button onClick={() => setShowWholeText(!showWholeText)}>
        {showWholeText ? "hide" : "show"}
      </button>
    </>
  );
}

export default ExpandableText;
