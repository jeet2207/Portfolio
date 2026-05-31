import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "./projects";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";

export default function ProjectDetail() {
  const { slug } = useParams();

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "40px",
          fontWeight: "700",
        }}
      >
        Project Not Found
      </div>
    );
  }

  return (
    <>
    

      <div className="project-page">
        {/* HERO */}
        <section className="project-hero">
          <div className="project-container">
            <span className="project-badge">
              {project.category}
            </span>

            <h1 className="project-title">
              {project.title}
            </h1>

            <p className="project-desc">
              {project.description}
            </p>

            <div className="project-meta">
              <div className="meta-card">
                <span>Industry</span>
                <strong>Technology</strong>
              </div>

              <div className="meta-card">
                <span>Services</span>
                <strong>Web Development</strong>
              </div>

              <div className="meta-card">
                <span>Status</span>
                <strong>Completed</strong>
              </div>
            </div>
          </div>
        </section>

        <div className="project-container">
          <Link
            to="/portfolio/"
            className="back-btn"
          >
            ← Back to Portfolio
          </Link>

          {/* OVERVIEW */}
          <section className="overview-section">
            <div className="overview-grid">
              <div className="overview-content">
                <h2>Project Overview</h2>

                <p>
                  {project.overview}
                </p>
              </div>
            </div>
          </section>

          {/* CHALLENGE + SOLUTION */}
          <section className="cs-section">
            <div className="cs-grid">
              <div className="cs-card">
                <div className="cs-icon">
                  ⚠️
                </div>

                <h2>
                  The Challenge
                </h2>

                <p>
                  {project.challenge}
                </p>
              </div>

              <div className="cs-card">
                <div className="cs-icon">
                  🚀
                </div>

                <h2>
                  The Solution
                </h2>

                <p>
                  {project.solution}
                </p>
              </div>
            </div>
          </section>

          {/* RESULTS */}
          <section className="results-section">
            <h2 className="section-title">
              Project Results
            </h2>

            <div className="results-grid">
              {project.results?.map(
                (item, i) => (
                  <div
                    key={i}
                    className="result-card"
                  >
                    <div className="result-icon">
                      ✓
                    </div>

                    <p>{item}</p>
                  </div>
                )
              )}
            </div>
          </section>

          {/* TECH STACK */}
          <section className="tech-section">
            <h2 className="section-title">
              Technologies Used
            </h2>

            <div className="tech-stack">
              {project.technologies?.map(
                (tech, i) => (
                  <span key={i}>
                    {tech}
                  </span>
                )
              )}
            </div>
          </section>

          {/* GALLERY */}
          <section className="gallery-section">
            <h2 className="section-title">
              Project Gallery
            </h2>

            <div className="gallery-grid">
              {project.images.map(
                (image, i) => (
                 <div
                  key={i}
                  className="gallery-item"
                  onClick={() => {
                    setIndex(i);
                    setOpen(true);
                  }}
                >
                  <img
                    src={image}
                    alt={`${project.title}-${i}`}
                  />

                  <div className="gallery-content">
                    <h4>{project.title}</h4>
                  </div>
                </div>
                )
                
              )}
            </div>
          </section>

          {/* CTA */}
          <div className="cta-box">
            <h2>
              Ready To Build Something Amazing?
            </h2>

            <p>
              Let's create a scalable,
              modern and high-performing
              digital experience together.
            </p>
          </div>
        </div>

        {/* LIGHTBOX */}

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          plugins={[Zoom]}
          zoom={{
            maxZoomPixelRatio: 5,
            zoomInMultiplier: 2,
            doubleTapDelay: 300,
            doubleClickDelay: 300,
            doubleClickMaxStops: 2,
            keyboardMoveDistance: 50,
            wheelZoomDistanceFactor: 100,
            pinchZoomDistanceFactor: 100,
          }}
          slides={project.images.map(
            (img) => ({
              src: img,
            })
          )}
        />
      </div>
    </>
  );
}