import "./Cards.scss";
import React, { useEffect, useRef } from "react";
import PureCounter from "@srexi/purecounterjs";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";

export default function Card02({ observer }: { observer: boolean }) {
  new PureCounter({
    start: 0,
    once: true
  });

  return (
    <section
      style={{
        transform: observer ? "translateY(0)" : "translateY(-250%)",
        transition: "transform 3s"
      }}
      className="card"
    >
      <main className="secondCard">
        <div className="main containers">
          <div className="title">
            <p>More than</p>
            <div className="number">
              <h3 data-purecounter-end="10" className="purecounter"></h3>
              <h3>k</h3>
            </div>
            <p>Hours of code work with</p>
          </div>

          <div className="languages">
            <div className="js">
              <BiLogoTypescript />
            </div>
            <div className="js">
              <IoLogoJavascript />
            </div>
            <div className="html">
              <FaHtml5 />
            </div>

            <div className="css">
              <FaCss3Alt />
            </div>

            <div className="react">
              <FaReact />
            </div>
          </div>
        </div>
        <div className="webs containers">
          <svg
            width="1rem"
            height="1rem"
            fill="var(--text-color)"
            version="1.1"
            id="Layer_1"
            viewBox="0 0 491.52 491.52"
          >
            <g>
              <g>
                <path d="M0,0v491.52h491.52V0H0z M471.04,471.04H20.48V102.4h450.56V471.04z M471.04,81.92H20.48V20.48h450.56V81.92z" />
              </g>
            </g>
            <g>
              <g>
                <rect x="430.08" y="40.96" width="20.48" height="20.48" />
              </g>
            </g>
            <g>
              <g>
                <rect x="389.12" y="40.96" width="20.48" height="20.48" />
              </g>
            </g>
            <g>
              <g>
                <rect x="348.16" y="40.96" width="20.48" height="20.48" />
              </g>
            </g>
            <g>
              <g>
                <rect x="51.2" y="40.96" width="245.76" height="20.48" />
              </g>
            </g>
            <g>
              <g>
                <polygon points="334.92,197.56 320.44,212.04 384.88,276.48 320.44,340.92 334.92,355.4 413.84,276.48 		" />
              </g>
            </g>
            <g>
              <g>
                <polygon points="171.08,212.04 156.6,197.56 77.68,276.48 156.6,355.4 171.08,340.92 106.64,276.48 		" />
              </g>
            </g>
            <g>
              <g>
                <rect
                  x="118.939"
                  y="276.481"
                  transform="matrix(0.3784 -0.9257 0.9257 0.3784 -115.8136 400.9863)"
                  width="243.406"
                  height="20.48"
                />
              </g>
            </g>
          </svg>
          <div className="title">
            <p>More than</p>
            <h3 data-purecounter-end="100" className="purecounter">
              0
            </h3>
            <p>WebApps deployed</p>
          </div>
        </div>
        <div className="repos containers">
          <svg
            version="1.1"
            fill="var(--text-color)"
            width="1rem"
            height="1rem"
            viewBox="0 0 1200 1200"
          >
            <g id="layer1" transform="translate(0,147.63782)">
              <path
                id="path2996"
                d="M600.073-130.212C268.728-130.212,0,138.37,0,469.715
		c0,260.491,166.117,482.172,398.146,565.076L546.04,643.675c-74.269-23.013-128.273-92.136-128.273-173.96
		c0-100.646,81.661-182.307,182.308-182.307c100.646,0,182.16,81.661,182.16,182.307c0,81.888-53.952,151.147-128.273,174.106
		l147.896,391.115C1033.938,952.082,1200,730.271,1200,469.715C1200,138.37,931.419-130.212,600.073-130.212z"
              />
            </g>
          </svg>
          <div className="title">
            <p>More than</p>
            <h3 data-purecounter-end="50" className="purecounter">
              0
            </h3>
            <p>Open Source Contributions</p>
          </div>
        </div>
      </main>
    </section>
  );
}
