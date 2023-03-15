import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

interface Props {
  email: string;
  onClick: () => void;
}

const EmailBlock: React.FC<Props> = ({ email, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer h-[3.8rem] rounded-lg border border-slate-700 px-8 flex items-center gap-2"
    >
      <div>
        <AccountCircleIcon />
      </div>
      <div className="font-bold">{email}</div>
    </div>
  );
};

export default EmailBlock;
