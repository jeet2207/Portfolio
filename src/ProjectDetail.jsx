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
      <style>{`
      
      .project-page{
        background:#f8fafc;
      }

      .project-container{
        width:min(1280px,92%);
        margin:auto;
      }

      /* ===================
      HERO
      ====================== */

      .project-hero{
        position:relative;
        overflow:hidden;
        background:
        linear-gradient(
        135deg,
        #0f172a 0%,
        #1e293b 40%,
        #2563eb 100%
        );

        color:#fff;
        padding:140px 0;
      }

      .project-hero::before{
        content:"";
        position:absolute;
        width:500px;
        height:500px;
        background:rgba(255,255,255,.08);
        border-radius:50%;
        top:-200px;
        right:-150px;
      }

      .project-hero::after{
        content:"";
        position:absolute;
        width:350px;
        height:350px;
        background:rgba(255,255,255,.05);
        border-radius:50%;
        bottom:-150px;
        left:-100px;
      }

      .project-badge{
        display:inline-flex;
        padding:10px 20px;
        border-radius:100px;
        background:rgba(255,255,255,.15);
        backdrop-filter:blur(12px);
        font-size:14px;
        font-weight:600;
        letter-spacing:.5px;
      }

      .project-title{
        font-size:clamp(40px,6vw,80px);
        line-height:1.1;
        margin:25px 0;
        font-weight:800;
      }

      .project-desc{
        max-width:850px;
        font-size:20px;
        line-height:1.9;
        opacity:.9;
      }

      .project-meta{
        display:grid;
        grid-template-columns:repeat(3,1fr);
        gap:25px;
        margin-top:60px;
      }

      .meta-card{
        background:rgba(255,255,255,.12);
        backdrop-filter:blur(15px);
        padding:30px;
        border-radius:24px;
      }

      .meta-card span{
        display:block;
        font-size:13px;
        opacity:.8;
        text-transform:uppercase;
        letter-spacing:1px;
      }

      .meta-card strong{
        display:block;
        margin-top:8px;
        font-size:20px;
      }

      /* ===================
      BACK BUTTON
      ====================== */

      .back-btn{
        display:inline-flex;
        align-items:center;
        gap:10px;
        margin:60px 0 20px;
        color:#2563eb;
        text-decoration:none;
        font-weight:700;
      }

      /* ===================
      OVERVIEW
      ====================== */

      .overview-section{
        padding:80px 0;
      }

      .overview-grid{
        text-align:center;
      }

      .overview-content h2{
        font-size:42px;
        margin-bottom:20px;
      }

      .overview-content p{
        line-height:1.9;
        color:#475569;
      }

      .overview-image img{
        width:100%;
        border-radius:24px;
        display:block;
        box-shadow:
        0 25px 60px rgba(0,0,0,.12);
      }

      /* ===================
      CHALLENGE SOLUTION
      ====================== */

      .cs-section{
        padding:30px 0 80px;
      }

      .cs-grid{
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:30px;
      }

      .cs-card{
        background:#fff;
        padding:40px;
        border-radius:24px;
        box-shadow:
        0 10px 40px rgba(15,23,42,.08);
      }

      .cs-icon{
        font-size:42px;
        margin-bottom:20px;
      }

      .cs-card h2{
        margin-bottom:20px;
      }

      .cs-card p{
        line-height:1.9;
        color:#475569;
      }

      /* ===================
      RESULTS
      ====================== */

      .results-section{
        padding:30px 0 80px;
      }

      .section-title{
        font-size:42px;
        text-align:center;
        margin-bottom:50px;
      }

      .results-grid{
        display:grid;
        grid-template-columns:
        repeat(auto-fit,minmax(250px,1fr));
        gap:25px;
      }

      .result-card{
        background:#fff;
        padding:30px;
        border-radius:24px;
        box-shadow:
        0 10px 30px rgba(15,23,42,.08);

        transition:.3s;
      }

      .result-card:hover{
        transform:translateY(-8px);
      }

      .result-icon{
        width:55px;
        height:55px;
        border-radius:50%;
        background:#2563eb;
        color:#fff;
        display:flex;
        align-items:center;
        justify-content:center;
        margin-bottom:20px;
        font-size:22px;
      }

      /* ===================
      TECH STACK
      ====================== */

      .tech-section{
        padding:30px 0 80px;
      }

      .tech-stack{
        display:flex;
        flex-wrap:wrap;
        gap:15px;
        justify-content:center;
      }

      .tech-stack span{
        padding:14px 24px;
        border-radius:100px;
        background:#2563eb;
        color:#fff;
        font-weight:600;
      }

      /* ===================
      GALLERY
      ====================== */

     .gallery-grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(420px,1fr));
          gap:30px;
      }

      .gallery-item{
          position:relative;
          height:320px;
          overflow:hidden;
          border-radius:24px;
          cursor:pointer;
          background:#fff;

          box-shadow:
          0 15px 40px rgba(15,23,42,.10);

          transition:all .35s ease;
      }

      .gallery-item:hover{
          transform:translateY(-8px);
          box-shadow:
          0 25px 60px rgba(15,23,42,.18);
      }

      .gallery-item img{
          width:100%;
          height:100%;
          object-fit:cover;
          display:block;
          transition:transform .6s ease;
      }

      .gallery-item:hover img{
          transform:scale(1.08);
      }

      .gallery-item::before{
          content:"View Project";
          position:absolute;
          left:20px;
          bottom:20px;
          z-index:2;

          background:rgba(255,255,255,.95);
          color:#0f172a;

          padding:10px 18px;
          border-radius:50px;

          font-size:14px;
          font-weight:700;

          opacity:0;
          transform:translateY(20px);
          transition:.3s;
      }

      .gallery-item:hover::before{
          opacity:1;
          transform:translateY(0);
      }

      .gallery-item::after{
          content:"";
          position:absolute;
          inset:0;

          background:
          linear-gradient(
            to top,
            rgba(0,0,0,.55),
            transparent 60%
          );

          opacity:0;
          transition:.3s;
      }


      .gallery-item:hover::after{
          opacity:1;
      }

      .gallery-content{
          position:absolute;
          right:25px;
          bottom:25px;
          z-index:3;
          color:#fff;
      }

      .gallery-content h4{
          font-size:22px;
          font-weight:700;
          margin:0;
      }

      @media(max-width:992px){

      .gallery-grid{
          grid-template-columns:1fr;
      }

      .gallery-item{
          height:300px;
      }

      }

      @media(max-width:576px){

      .gallery-item{
          height:240px;
      }

      }

      /* ===================
      CTA
      ====================== */

      .cta-box{
        background:
        linear-gradient(
        135deg,
        #2563eb,
        #1d4ed8
        );

        color:#fff;
        padding:70px;
        border-radius:30px;
        text-align:center;
        margin-bottom:100px;
      }

      .cta-box h2{
        font-size:42px;
        margin-bottom:15px;
      }

      .cta-box p{
        opacity:.9;
      }

      /* ===================
      MOBILE
      ====================== */

      @media(max-width:992px){

        .project-meta,
        .overview-grid,
        .cs-grid{
          grid-template-columns:1fr;
        }

        .gallery-grid{
          columns:2;
        }

      }

      @media(max-width:768px){

        .project-hero{
          padding:100px 0;
        }

        .project-title{
          font-size:46px;
        }

        .project-desc{
          font-size:17px;
        }

        .gallery-grid{
          columns:1;
        }

        .cta-box{
          padding:40px 25px;
        }

        .cta-box h2{
          font-size:30px;
        }

      }

      `}</style>

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