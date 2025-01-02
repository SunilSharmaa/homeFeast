import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Oops!</h1>
      <h2>Something went wrong</h2>
      <h3>{error.statusText }</h3><br />
      <p>{error.error.message}</p>
    </div>
  );
};

export default ErrorPage;
