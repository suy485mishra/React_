import React, { useState } from "react";
import dataCollection from "./data";
import "./styles.css";
function Accordion() {
  const [accordion, setActiveAccordion] = useState(-1);

  function toggleAccordion(index) {
    if (index === accordion) {
      setActiveAccordion(-1);
      return
    }
    setActiveAccordion(index);
  };

  return (
    <>
      <div className="container">
        <div>
          <span className="accordion__title">Frequently asked questions</span>
          <h1>Let's answer some of your questions</h1>
        </div>
        <div className="accordion__faq">
          { dataCollection.map((item, index) =>
              <div key={index} onClick={() => toggleAccordion(index)}>
                <div className="accordion__faq-heading">
                  <h3 className={accordion === index ? "active" : ""}>{item.question}</h3>
                  <div>
                    {accordion === index ?
                      <span className="verticle">-</span> : <span className="horizental">+</span>}
                  </div>
                </div>
                <div><p className={accordion === index ? "active" : "inactive"} >{item.answer}</p></div>
              </div>
            )
          }
        </div>
      </div>
    </>
  );
}

export default Accordion;
