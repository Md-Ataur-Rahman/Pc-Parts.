import React from "react";

const MyPortfolio = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center mx-auto">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Md. Ataur Rahman</h1>
          <h3 class="text-3xl font-bold">mdataurrahmanm505@gmail.com</h3>
          <h3 class="text-3xl font-bold py-4">
            Education Background: SSC Passed in 2021. Curently study at class 11
          </h3>
          <ul>
            <h3 class="text-3xl font-bold">list of technologies or skills</h3>
            <li>Html</li>
            <li>Css</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Node</li>
            <li>Express</li>
            <li>Mongodb</li>
            <li>Authentication</li>
            <li>Routes</li>
            <li>Payment Gatway</li>
          </ul>

          <div className="grid">
            <div class="card w-full lg:max-w-lg bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://api.lorem.space/image/shoes?w=400&h=225"
                  alt="Shoes"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
