import { StyledNotFound } from "../../styles/StyledNotFound";

export default function PageNotFound() {
  return (
    <StyledNotFound>
      <div className="not-found-container">
        <div className="not-found-content">
          <h1>404 Not Found</h1>
          <p>Oops! The page you're looking for might be lost in the void.</p>
        </div>
      </div>
    </StyledNotFound>
  );
}
