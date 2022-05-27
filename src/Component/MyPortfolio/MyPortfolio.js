import React from "react";
import projectOne from "../../Images/projectOne.png";
import projectTwo from "../../Images/projectTwo.png";
import projectThree from "../../Images/projectThree.png";

const MyPortfolio = () => {
  const projectOneLink = "https://gentle-druid-446f93.netlify.app/";
  const projectTwoLink = "https://astonishing-axolotl-ef5575.netlify.app/";
  const projectThreeLink = "https://creative-ganache-ab9988.netlify.app/";
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center mx-auto">
        <div class="w-full max-w-sm">
          <h1 class="text-xl md:text-5xl font-bold">Md. Ataur Rahman</h1>
          <h3 class="text-xl md:text-3xl font-bold">
            mdataurrahmanm505@gmail.com
          </h3>
          <h3 class="text-xl md:text-3xl font-bold py-4">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
            <div class="card w-full lg:max-w-lg bg-base-100 shadow-xl">
              <a href={projectOneLink} target="_blank" rel="noreferrer">
                <figure>
                  <img src={projectOne} alt="" />
                </figure>
              </a>
            </div>
            <div class="card w-full lg:max-w-lg bg-base-100 shadow-xl">
              <a href={projectTwoLink} target="_blank" rel="noreferrer">
                <figure>
                  <img src={projectTwo} alt="" />
                </figure>
              </a>
            </div>
            <div class="card w-full lg:max-w-lg bg-base-100 shadow-xl">
              <a href={projectThreeLink} target="_blank" rel="noreferrer">
                <figure>
                  <img src={projectThree} alt="" />
                </figure>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
