import React from "react";
import { CardBar } from "../../components/ui/CardBar";
const DashBoardPage = () => {
  return (
    <div>
      {[1, 2, 3, 4].map((item) => (
        <CardBar />
      ))}
    </div>
  );
};

export default DashBoardPage;
