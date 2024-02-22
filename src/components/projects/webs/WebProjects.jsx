import { webData } from "../../../database/database";
import { useEffect } from "react";
import { useState } from "react";
import Slider from "../../slider/Slider";
export default function WebProjects() {
  const [data, setData] = useState({});

  useEffect(() => {
    if (webData) setData(webData);
  }, [data]);

  return <Slider data={data} section={"Web Apps"} />;
}
