import React from "react";
import "./Cover.css";

function Cover() {
  return (
    <div className="cover">
      <div className="cover-left" style={{ color: "white" }}>
        <span style={{ display: "flex", alignItems: "center" }}>
          <img
            style={{ width: "12px", height: "12px" }}
            src="https://static-00.iconduck.com/assets.00/netflix-icon-icon-512x512-8q3muky9.png"
            alt="Movie Icon"
          />
          <p style={{ marginLeft: "10px" }}>MOVIE</p>
        </span>
        <h1>Oppenheimer</h1>
        <p>
          During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J.
          Robert Oppenheimer to work on the top-secret Manhattan Project.
          Oppenheimer and a team of scientists spend years developing and
          designing the atomic bomb. Their work comes to fruition on July 16,
          1945, as they witness the world's first nuclear explosion, forever
          changing the course of history.
        </p>
      </div>
      <div className="cover-right">
        <div class="embedded-components button-layer">
          <span class="ActionButtons">
            <div class="global-supplemental-audio-toggle audio-btn button-layer">
              <button
                aria-label="Turn audio on"
                class="mute-icon"
                data-uia="audio-toggle-muted"
                type="button"
              >
                <div class="ltr-1st24vv">
                  <div class="small ltr-iyulz3" role="presentation">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="ltr-4z3qvp e1svuwfo1"
                      data-name="VolumeOff"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11 4.00003C11 3.59557 10.7564 3.23093 10.3827 3.07615C10.009 2.92137 9.57889 3.00692 9.29289 3.29292L4.58579 8.00003H1C0.447715 8.00003 0 8.44774 0 9.00003V15C0 15.5523 0.447715 16 1 16H4.58579L9.29289 20.7071C9.57889 20.9931 10.009 21.0787 10.3827 20.9239C10.7564 20.7691 11 20.4045 11 20V4.00003ZM5.70711 9.70714L9 6.41424V17.5858L5.70711 14.2929L5.41421 14H5H2V10H5H5.41421L5.70711 9.70714ZM15.2929 9.70714L17.5858 12L15.2929 14.2929L16.7071 15.7071L19 13.4142L21.2929 15.7071L22.7071 14.2929L20.4142 12L22.7071 9.70714L21.2929 8.29292L19 10.5858L16.7071 8.29292L15.2929 9.70714Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </span>
          <span class="maturity-rating ">
            <span class="maturity-number">U/A 16+</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Cover;
