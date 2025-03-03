import { useRouteError } from "react-router";

type RouteError = {
  status?: number;
  statusText?: string;
  message?: string;
}

export default function ErrorPage() {
  const error = useRouteError() as RouteError;
  console.error(error);

  return (
    <div>
      <h1>เกิดข้อผิดพลาด!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p style={{ color: "red" }}>
        {error && (
          <i>
            status: {error.status ?? "Unknown"} message: {error.statusText || error.message || "No details"}
          </i>
        )}
      </p>
    </div>
  );
}
