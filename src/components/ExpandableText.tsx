import React, { useState } from "react";
interface Props {
  cutToNumber: number;
}

function ExpandableText({ cutToNumber }: Props) {
  const [text, setText] =
      useState(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.`),
    [showWholeText, setShowWholeText] = useState(false);

  return (
    <>
      <span>
        {showWholeText ? text : text.substring(0, cutToNumber) + "..."}
      </span>
      <button onClick={() => setShowWholeText(!showWholeText)}>
        {showWholeText ? "hide" : "show"}
      </button>
    </>
  );
}

export default ExpandableText;
