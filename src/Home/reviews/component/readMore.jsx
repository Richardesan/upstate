import React, { useState } from "react";



const ReadMore = ({ text, maxChars = 150, className }) => {
  const [expanded, setExpanded] = useState(false);
  const toggle = () => setExpanded((prev) => !prev);

  const isTruncated = text.length > maxChars;
  const visibleText = expanded ? text : text.slice(0, maxChars);

  return (
    <div className={"flex"}>
      <p>
        {visibleText}
        {isTruncated && !expanded && "..."}
      {isTruncated && (
        <span
          onClick={toggle}
          className="text-secondaryCol cursor-pointer ml-1 underline mt-1 text-sm font-semibold"
        >
          {expanded ? "Read less" : "Read more"}
        </span>
      )}
      </p>

    </div>
  );
};

export default ReadMore;
