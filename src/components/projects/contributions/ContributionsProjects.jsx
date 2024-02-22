import { contributionsData } from "../../../database/database";
import { useEffect, useState } from "react";
import Slider from "../../slider/Slider";
export default function WebProjects() {
  const [data, setData] = useState();

  useEffect(() => {
    if (contributionsData) setData(contributionsData);
  }, [data]);
  // return <h1>Coming Soon</h1>;
  return <Slider data={data} section={"Contributions"} />;
}
