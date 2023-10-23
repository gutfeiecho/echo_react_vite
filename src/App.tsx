import { useState, useEffect, Suspense } from "react";
import "./App.css";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import { Await } from "react-router-dom";
import { IAwaitComponentProps } from "./global-type";

const AwaitComponent = (props: IAwaitComponentProps) => {
  const [message, setMessage] = useState("Who are you?");
  const { resolver } = props;

  const getMessage = async () => {
    resolver.then((data: any) => {
      setMessage(data.data.title);
    });
  };

  useEffect(() => {
    console.log("AwaitComponent Mount!!");
    getMessage();
  }, []);

  return <div>{message}</div>;
};

const AwaitChild = (props: any) => {
  const [message, setMessage] = useState("Who are you?");
  const { data } = props;
  console.log("🚀 ~ file: App.tsx:34 ~ AwaitChild ~ data:", data);
  useEffect(() => {
    setMessage(data.data.title);
  }, []);
  return <div>{message}</div>;
};

const promise = fetch("http://localhost:8989/msg", {
  headers: new Headers({ "Content-Type": "application/json" }),
}).then((response) => response.json());

function App() {
  useEffect(() => {
    console.log("fetcher changed!!");
  }, []);

  return (
    <Suspense fallback={<div>loading</div>}>
      <ErrorBoundary>
        <AwaitComponent resolver={promise}></AwaitComponent>
        <Await
          resolve={promise}
          errorElement={<div>Could not load reviews.</div>}
          children={(resolvedReviews) => <AwaitChild data={resolvedReviews} />}
        ></Await>
      </ErrorBoundary>
    </Suspense>
  );
}

export default App;
