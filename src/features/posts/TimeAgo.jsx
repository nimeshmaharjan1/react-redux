import { parseISO, formatDistanceToNow } from "date-fns";

import React, { useEffect, useState } from "react";

const TimeAgo = ({ timestamp }) => {
  const [timeAgo, setTimeAgo] = useState("");

  useEffect(() => {
    if (timestamp) {
      const date = parseISO(timestamp);
      const timePeriod = formatDistanceToNow(date);
      setTimeAgo(`${timePeriod} ago`);
    }
  }, [timestamp]);

  return (
    <span title={timestamp}>
      - <i>{timeAgo}</i>
    </span>
  );
};

export default TimeAgo;
