/* eslint-disable @next/next/no-img-element */
import React from "react";

const StrategicFocus = () => {
  return (
    <div className="flex flex-wrap items-center max-w-7xl mx-auto px-4 gap-10">
      <div className="flex-1 basis-[25rem]">
        <div className="message-box">
          <div className="text-center">
            <h4 className="text-green-500 font-semibold">
              KIIRA COLLEGE BUTIKI
            </h4>
            <h2 className="text-4xl md:text-5xl">Strategic Focus</h2>
          </div>
          <p className="text-muted mt-5">
            Over the next ten years, the school will focus on the following
            strategic areas:
          </p>
          <p className="mt-4 text-muted">
            1. Providing wholesome quality education. <br />
            2. Improving the overall school infrastructure to support wholesome
            and quality education. <br />
            3. Enhancing staff management and development. <br />
            4. Building and sustaining a distinct school culture based on the
            school core values and vision. <br />
            5. Mobilizing adequate resources needed to implement the strategic
            plan.
          </p>
        </div>
      </div>
      <div className="flex-1 basis-[25rem]">
        <div className="post-media wow fadeIn">
          <img src="/images/content.jpg" alt="KCB" className="rounded" />
        </div>
      </div>
    </div>
  );
};

export default StrategicFocus;
