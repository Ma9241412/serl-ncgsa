import React from "react";
import { Image, Carousel, Row, Col } from "antd";

// Helper function to chunk array
const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

function importAll(r) {
  return r.keys().map(r);
}

const awardImages = importAll(
  require.context("../../assets/awards", false, /\.(png|jpe?g|svg)$/)
);
// Split into chunks (e.g., 4 images per slide)
const awardChunks = chunkArray(awardImages, 7);

const AwardsSlider = () => (
  <Carousel autoplay dots={false} autoplaySpeed={2000}>
    {awardChunks.map((chunk, index) => (
      <div key={index}>
        <Row gutter={[16, 16]} justify="center">
          {chunk.map((img, i) => (
            <Col key={i}>
              <div className="award-card">
                <Image
                  src={img}
                  alt={`award-${index}-${i}`}
                  className="award-image"
                  preview={false}
                />
              </div>
            </Col>
          ))}
        </Row>
      </div>
    ))}
  </Carousel>
);

export default AwardsSlider;
