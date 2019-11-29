import React from "react";

interface Props {
  className: string;
  message: string;
}

const EmptyList = (props: Props) => {
  const { className, message } = props;
  return <div className={className}>{message}</div>;
};

export default EmptyList;
