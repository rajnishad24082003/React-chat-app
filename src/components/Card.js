import React from "react";
import { Link } from "react-router-dom";
import noimg from "../assets/img/pricing-free.png";

const Card = ({ result }) => {
  if (result.length === 0) {
    return (
      <>
        <div className="container">
          <h2 className="text-center">....No results found</h2>
        </div>
      </>
    );
  } else {
    let cardcolor = ["blue", "orange", "green", "red", "purple", "pink"];
    let colorCount = -1;
    return (
      <>
        <section id="services" className="services">
          <div className="container">
            <div className="row gy-4">
              {result.map((val, index) => {
                if (colorCount === 5) {
                  colorCount = -1;
                }
                colorCount++;
                if (result[index].show.image == null) {
                  result[index].show.image = noimg;
                }
                return (
                  <div
                    className="col-lg-4 col-md-6"
                    key={result[index].show.id}
                  >
                    <div className={`service-box ${cardcolor[colorCount]}`}>
                      <img
                        src={
                          result[index].show.image.medium ||
                          result[index].show.image
                        }
                        alt=""
                      />
                      <h3>{result[index].show.name}</h3>
                      <p>
                        {" "}
                        {result[index].show.summary
                          ? `${result[index].show.summary
                              .split(" ")
                              .slice(0, 20)
                              .join(" ")
                              .replace(/<.+?>/g, "")}...`
                          : "no discription"}{" "}
                      </p>
                      <Link
                        to={`show/${result[index].show.id}`}
                        className="read-more"
                      >
                        <span>Read More</span>{" "}
                        <i className="bi bi-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </>
    );
  }
};

export default Card;
