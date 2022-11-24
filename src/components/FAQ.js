import React, { useState } from "react";

const FAQ = () => {
  let [accordionbtn, setAccordionbtn] = useState([
    "collapsed",
    "collapsed",
    "collapsed",
    "collapsed",
    "collapsed",
    "collapsed",
  ]);
  let [datashow, setdatashow] = useState([
    "collapse",
    "collapse",
    "collapse",
    "collapse",
    "collapse",
    "collapse",
  ]);
  let accordionfun = (i) => {
    setAccordionbtn(
      accordionbtn.map((val, index) => {
        if (accordionbtn[i] === "collapsed") {
          if (index === i) {
            return "";
          }
          return val;
        } else {
          if (index === i) {
            return "collapsed";
          }
          return val;
        }
      })
    );

    setdatashow(
      datashow.map((val, index) => {
        if (datashow[i] === "collapse") {
          if (index === i) {
            return "collapse show";
          }
          return val;
        } else {
          if (index === i) {
            return "collapse";
          }
          return val;
        }
      })
    );
  };

  return (
    <>
      <section id="faq" className="faq">
        <div className="container">
          <header className="section-header">
            <h2>F.A.Q</h2>
            <p>Frequently Asked Questions</p>
          </header>

          <div className="row">
            <div className="col-lg-6">
              {/*F.A.Q List 1*/}
              <div className="accordion accordion-flush" id="faqlist1">
                <div
                  className="accordion-item"
                  onClick={() => {
                    accordionfun(0);
                  }}
                >
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${accordionbtn[0]}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-1"
                    >
                      Non consectetur a erat nam at lectus urna duis?
                    </button>
                  </h2>
                  <div
                    id="faq-content-1"
                    className={`accordion-collapse ${datashow[0]}`}
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Feugiat pretium nibh ipsum consequat. Tempus iaculis urna
                      id volutpat lacus laoreet non curabitur gravida. Venenatis
                      lectus magna fringilla urna porttitor rhoncus dolor purus
                      non.
                    </div>
                  </div>
                </div>

                <div
                  className="accordion-item"
                  onClick={() => {
                    accordionfun(1);
                  }}
                >
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${accordionbtn[1]}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-2"
                    >
                      Feugiat scelerisque varius morbi enim nunc faucibus a
                      pellentesque?
                    </button>
                  </h2>
                  <div
                    id="faq-content-2"
                    className={`accordion-collapse ${datashow[1]}`}
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Dolor sit amet consectetur adipiscing elit pellentesque
                      habitant morbi. Id interdum velit laoreet id donec
                      ultrices. Fringilla phasellus faucibus scelerisque
                      eleifend donec pretium. Est pellentesque elit ullamcorper
                      dignissim. Mauris ultrices eros in cursus turpis massa
                      tincidunt dui.
                    </div>
                  </div>
                </div>

                <div
                  className="accordion-item"
                  onClick={() => {
                    accordionfun(2);
                  }}
                >
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${accordionbtn[2]}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-3"
                    >
                      Dolor sit amet consectetur adipiscing elit pellentesque
                      habitant morbi?
                    </button>
                  </h2>
                  <div
                    id="faq-content-3"
                    className={`accordion-collapse ${datashow[2]}`}
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                      sagittis orci. Faucibus pulvinar elementum integer enim.
                      Sem nulla pharetra diam sit amet nisl suscipit. Rutrum
                      tellus pellentesque eu tincidunt. Lectus urna duis
                      convallis convallis tellus. Urna molestie at elementum eu
                      facilisis sed odio morbi quis
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              {/* F.A.Q List 2*/}
              <div className="accordion accordion-flush" id="faqlist2">
                <div
                  className="accordion-item"
                  onClick={() => {
                    accordionfun(3);
                  }}
                >
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${accordionbtn[3]}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq2-content-1"
                    >
                      Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
                    </button>
                  </h2>
                  <div
                    id="faq2-content-1"
                    className={`accordion-collapse ${datashow[3]}`}
                    data-bs-parent="#faqlist2"
                  >
                    <div className="accordion-body">
                      Dolor sit amet consectetur adipiscing elit pellentesque
                      habitant morbi. Id interdum velit laoreet id donec
                      ultrices. Fringilla phasellus faucibus scelerisque
                      eleifend donec pretium. Est pellentesque elit ullamcorper
                      dignissim. Mauris ultrices eros in cursus turpis massa
                      tincidunt dui.
                    </div>
                  </div>
                </div>

                <div
                  className="accordion-item"
                  onClick={() => {
                    accordionfun(4);
                  }}
                >
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${accordionbtn[4]}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq2-content-2"
                    >
                      Tempus quam pellentesque nec nam aliquam sem et tortor
                      consequat?
                    </button>
                  </h2>
                  <div
                    id="faq2-content-2"
                    className={`accordion-collapse ${datashow[4]}`}
                    data-bs-parent="#faqlist2"
                  >
                    <div className="accordion-body">
                      Molestie a iaculis at erat pellentesque adipiscing
                      commodo. Dignissim suspendisse in est ante in. Nunc vel
                      risus commodo viverra maecenas accumsan. Sit amet nisl
                      suscipit adipiscing bibendum est. Purus gravida quis
                      blandit turpis cursus in
                    </div>
                  </div>
                </div>

                <div
                  className="accordion-item"
                  onClick={() => {
                    accordionfun(5);
                  }}
                >
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${accordionbtn[5]}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq2-content-3"
                    >
                      Varius vel pharetra vel turpis nunc eget lorem dolor?
                    </button>
                  </h2>
                  <div
                    id="faq2-content-3"
                    className={`accordion-collapse ${datashow[5]}`}
                    data-bs-parent="#faqlist2"
                  >
                    <div className="accordion-body">
                      Laoreet sit amet cursus sit amet dictum sit amet justo.
                      Mauris vitae ultricies leo integer malesuada nunc vel.
                      Tincidunt eget nullam non nisi est sit amet. Turpis nunc
                      eget lorem dolor sed. Ut venenatis tellus in metus
                      vulputate eu scelerisque. Pellentesque diam volutpat
                      commodo sed egestas egestas fringilla phasellus faucibus.
                      Nibh tellus molestie nunc non blandit massa enim nec.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
