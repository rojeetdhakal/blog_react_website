import { useEffect,useState } from "react";
const useFetch = (url) => {
  const [data, setdata] = useState(null);
  const [isPending, setisPending] = useState(true);
  const [error, seterror] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch data from the resources");
        }
        return res.json();
      })
      .then((data) => {
        setisPending(false);
        setdata(data);
        console.log(data);
        seterror(null);
      })
      .catch((err) => {
        seterror(err.message);
        setisPending(false);
      });
  }, [url]);
  return {data,isPending,error}
};
export default useFetch
