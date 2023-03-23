import { useRouteError } from "react-router-dom";

export const Error = () => {
  const error = useRouteError();
  console.error(error);


  return (
    <div>
    Oops! There is some error!
      <p>{error.statusText || error.message}</p>
    </div>
  );
};
