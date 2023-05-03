import React from "react";
import { ReactComponent as PlusIcon } from "../../assets/icons/Vector (2).svg";
export const Icon = ({ ...props }) => {
  return (
    <div>
      <PlusIcon {...props} />
    </div>
  );
};
