import { useEffect, useState } from "react";
import Slider from "../../slider/Slider";
import { npmData } from "../../../database/database";
export default function NpmProjects() {
  const [data, setData] = useState();
  useEffect(() => {
    setData(npmData);
  }, [data]);

  return <Slider data={data} section={"NPM Packages"} />;
}
