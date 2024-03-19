import React, { useState } from "react";
import "./index.css";

const ExpandableCard = ({ title, description, imageUrl }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`expandable-card ${expanded ? 'expanded' : ''}`} onClick={toggleExpand}>
      <div className="card-header">{title}</div>
      <img className="card-image" src={imageUrl} alt={title} />
      {expanded && <div className="card-description">{description}</div>}
    </div>
  );
};

export default ExpandableCard;
