import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProgressBar } from "react-bootstrap";
// TODO: calculate the % of rating
function TotalRatingProgressBar({ starRating }) {
  const fourStarPercentage =
    (Number(starRating.fourStar) / Number(starRating.fiveStar)) * 100;
  const threeStarPercentage =
    (Number(starRating.threeStar) / Number(starRating.fiveStar)) * 100;
  const twoStarPercentage =
    (Number(starRating.twoStar) / Number(starRating.fiveStar)) * 100;
  const oneStarPercentage =
    (Number(starRating.oneStar) / Number(starRating.fiveStar)) * 100;

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <span>
          5 <FontAwesomeIcon icon={faStar} size="xs" />
        </span>
        <div>
          <ProgressBar variant="success" style={{ width: 150, height: 5 }} now={100} />
        </div>
        <span>{starRating.fiveStar}</span>
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <span>
          4 <FontAwesomeIcon icon={faStar} size="xs" />
        </span>
        <div>
          <ProgressBar variant="success"
            style={{ width: 150, height: 5 }}
            now={fourStarPercentage}
          />
        </div>
        <span>{starRating.fourStar}</span>
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <span>
          3 <FontAwesomeIcon icon={faStar} size="xs" />
        </span>
        <div>
          <ProgressBar variant="warning"
            style={{ width: 150, height: 5 }}
            now={threeStarPercentage}
          />
        </div>
        <span>{starRating.threeStar}</span>
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <span>
          2 <FontAwesomeIcon icon={faStar} size="xs" />
        </span>
        <div>
          <ProgressBar variant="danger"
            style={{ width: 150, height: 5 }}
            now={twoStarPercentage}
          />
        </div>
        <span>{starRating.twoStar}</span>
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <span>
          1 <FontAwesomeIcon icon={faStar} size="xs" />
        </span>
        <div>
          <ProgressBar variant="danger"
            style={{ width: 150, height: 5 }}
            now={oneStarPercentage}
          />
        </div>
        <span>{starRating.oneStar}</span>
      </div>
    </div>
  );
}

export default TotalRatingProgressBar;
