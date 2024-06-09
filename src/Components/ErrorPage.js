import { useRouteError } from "react-router-dom";
import NavBar from "./NavBar";

function ErrorPage() {
  useRouteError();

  return (
    <>
    <header>
      <NavBar />
    </header>
      <main style={{color: "gold"}}>
          <h1>Whoops! Something went wrong! Head Back to the home page to continue having the best art experience</h1>
      </main>
    </>
  );
};

export default ErrorPage;