import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "./style.scss";

function CounterApp() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="counterContainer">
          <div className="counts">
            <div className="count">
              <h1>
                {counterOn && (
                  <>
                    <CountUp start={0} end={25} duration={3} delay={0.2} />
                    <span>+</span>
                  </>
                )}
              </h1>
              <p>Years of Experience</p>
            </div>
            <div className="count">
              <h1>
                {counterOn && (
                  <>
                    <CountUp start={0} end={100} duration={3} delay={0.2} />
                    <span>+</span>
                  </>
                )}
              </h1>
              <p>Best Dishes</p>
            </div>
            <div className="count">
              <h1>
                {counterOn && (
                  <>
                    <CountUp start={0} end={56} duration={3} delay={0.2} />
                    <span>k+</span>
                  </>
                )}
              </h1>
              <p>Satisfied Customers</p>
            </div>
            <div className="count">
              <h1>
                {counterOn && (
                  <>
                    <CountUp start={0} end={36} duration={3} delay={0.2} />
                    <span>+</span>
                  </>
                )}
              </h1>
              <p>Specialists Chef</p>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
}

export default CounterApp;
