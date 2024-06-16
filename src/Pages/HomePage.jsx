//Homepage fetch jokes and filter by type and category,search for specific jokes, and toggle safe mode.
import React from "react";
import  Jokes  from "../Components/Jokes";

function HomePage() {
  return (
    <div>
      <Jokes isNSFW={true}></Jokes>
    </div>
  );
}

export default HomePage;
