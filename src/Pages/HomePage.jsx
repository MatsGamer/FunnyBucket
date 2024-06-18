//Homepage fetch jokes and filter by type and category,search for specific jokes, and toggle safe mode.
import React, { useContext } from "react";
import Jokes from "../Components/Jokes";
import { UserContext } from "../UserContext/UserContext";

function HomePage() {
  const { isNSFW } = useContext(UserContext);

  return (
    <div>
      <Jokes isNSFW={isNSFW}></Jokes>
    </div>
  );
}

export default HomePage;
