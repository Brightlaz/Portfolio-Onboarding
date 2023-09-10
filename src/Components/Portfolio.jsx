/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/desktop.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "CodeSpace Africa",
    description:
      "Callaborated with a team to build a website for a non-profit organization. The website is built with React and deployed to Netlify.",
    url: "https://www.codespaceafrica.com/",
  },
  {
    title: "Productsio website",
    description:
      "Build a platform for a non-profit organization to showcase their products and services. The website is built with React and deployed to Netlify.",
    url: "https://github.com/microsoft/web-dev-for-beginners",
  },
  {
    title: "3d app",
    description:
      "Built a 3d app with react-three-fiber and deployed to Vercel.",
    url: "https://bright-3d.vercel.app/",
  },
  {
    title: "Niralab website",
    description:
      "A website for a non-profit organization. The website is built with React and deployed to Netlify.",
    url: "https://niralab.io/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
