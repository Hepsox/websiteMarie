import { useState } from "react";

function Accordeon({ questions }) {
  const [accordeon, setAccordeon] = useState(-1);
  function toggleAccordeon(index) {
    if (accordeon === index) return setAccordeon(-1);
    setAccordeon(index);
  }

  return (
    <>
      <div className="accordeon-faq">
        {questions.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => toggleAccordeon(index)}
              className="accordeon"
            >
              <div className="accordeon-heading">
                <h3 className={accordeon === index ? "active" : ""}>
                  {item.skill}
                </h3>
                {accordeon === index ? (
                  <>
                    <span className="vertical">
                      <i className="fa-regular fa-circle-up"></i>
                    </span>
                  </>
                ) : (
                  <>
                    <span className="vertical">
                      <i className="fa-regular fa-circle-down"></i>
                    </span>
                  </>
                )}
              </div>

              <div className={accordeon === index ? "active" : "inactive"}>
                <p>{item.detail}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Accordeon;
