import React from "react";
import { ThreeDots } from "react-loader-spinner";

interface Props {
  color?: string;
}

const ButtonLoader: React.FC<Props> = ({ color }) => {
  return (
    <div className=" grid place-items-center">
      <ThreeDots
        height="100%"
        width="40"
        radius="9"
        color={color || "#fff"}
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </div>
  );
};

export default ButtonLoader;
