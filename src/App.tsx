import { useState, memo, useMemo, useEffect } from "react";
import "./App.css";
import { getData } from "./server/http";

const Child = memo((props: any) => {
  const { data } = props;
  console.log("child render...", data.name);

  const userInfo = {
    name: "lucas",
    age: 28,
    description: "He is a programmer. He likes coding.",
  };

  sessionStorage.setItem("userInfo", JSON.stringify(userInfo));

  console.log("sessiongStorage");

  console.log(
    "sessionStorage--->",
    JSON.parse(sessionStorage?.getItem("userInfo") ?? "{}")
  );
  return (
    <div>
      <div>Child</div>
      <div>{data.name}</div>
    </div>
  );
});

function App() {
  console.log("App render...");
  const [count, setCount] = useState(0);
  const [name, setName] = useState("rose");

  const data = useMemo(() => {
    return {
      name,
    };
  }, [name]);

  const getQueryData = async (url: string, query = {}) => {
    let result;
    // The code in the try block is executed first, and if it throws an exception, the code in the catch block will be executed.
    try {
      result = await getData(url, query);
      console.log("result--->", result);
    } catch (error) {
      // If the Promise is rejected, the await expression throws the rejected value.
      console.log("error--->", error);
    }
  };

  useEffect(() => {
    // getQueryData("/query", { username: "lucas" });
  }, []);

  return (
    <>
      <div>
        <div>{count}</div>
        <button onClick={() => setCount(count + 1)}>Update count</button>
        <button onClick={() => setName(name + "@")}>Update name</button>
        <Child data={data} />
      </div>
    </>
  );
}

export default App;
