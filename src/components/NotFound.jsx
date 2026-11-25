import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | NE Structures</title>
        <meta
          name="description"
          content="The page you are looking for does not exist on NE Structures."
        />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div
        style={{
          minHeight: "65vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 20px",
          textAlign: "center",
          fontFamily: "Raleway, sans-serif",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "72px",
              fontWeight: 800,
              color: "#05385d",
              marginBottom: "16px",
            }}
          >
            404
          </h1>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: 600,
              color: "#222",
              marginBottom: "16px",
            }}
          >
            Page Not Found
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "#525252",
              marginBottom: "32px",
              maxWidth: "460px",
            }}
          >
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <Link
            to="/"
            style={{
              display: "inline-block",
              padding: "12px 28px",
              backgroundColor: "#0d85de",
              color: "#fff",
              borderRadius: "4px",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;
