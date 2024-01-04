import { useEffect, useState } from "react";
import { instance } from "../../config/config";

const List = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    instance
      .get("/genre/movie/list", {
        params: {
          language: "ar",
        },
      })
      .then((res) => {
        setList(res.data.genres);
      })
      .catch((errer) => console.log(errer, "list errer connection"));
  }, []);

  return list;
};

export default List;
