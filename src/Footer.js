import React from "react";

export default function Footer() {
  return (
    <div className="row footer">
      <div className="col">
        <p>
          <span className="photo-credit">
            Background image by{" "}
            <a href="https://pixabay.com/photos/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=731260">
              Free-Photos
            </a>{" "}
            from{" "}
            <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=731260">
              Pixabay
            </a>
          </span>
        </p>
        <p>
          <span className="icons-credit">
            Weather icons by{" "}
            <a
              href="https://github.com/basmilius/weather-icons"
              rel="noreferrer"
              target="_blank"
            >
              Bas Milius
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}
