import "./App.css";
import { useState, useRef, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import ProjectDetail from "./ProjectDetail";
import { Routes, Route, Link, useLocation } from "react-router-dom";

import { projects } from "./projects";


const heroImages = projects
  .flatMap((project) => project.images)
  .sort(() => Math.random() - 0.5)
  .slice(0, 6);

const services = [
  {
    id: 1,
    title: "Custom WordPress Themes",
    description:
      "Tailored WordPress themes with Gutenberg-ready blocks, brand-first layouts and pixel-perfect polish.",
  },
  {
    id: 2,
    title: "WooCommerce Stores",
    description:
      "High-converting WooCommerce stores with seamless catalog, checkout and payment workflows.",
  },
  {
    id: 3,
    title: "Performance & Security",
    description:
      "Site speed tuning, SEO-ready structure and secure WordPress hosting setup for reliable growth.",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Aisha Khan",
    role: "Startup CEO",
    quote:
      "Jeet delivered a website that exceeded our quality expectations with crisp branding and fast performance.",
  },
  {
    id: 2,
    name: "Rajiv Sharma",
    role: "Marketing Head",
    quote:
      "The project was completed on time, and the UI experience increased our conversions immediately.",
  },
  {
    id: 3,
    name: "Sneha Patel",
    role: "Product Manager",
    quote:
      "Smooth communication, smart recommendations, and a polished final product. Highly recommended.",
  },
];

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  const sliderRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(1 - t, 4)),
      smooth: true,
      direction: "vertical",
      gestureDirection: "vertical",
      smoothTouch: true,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((el) => {
      el.classList.remove("revealed");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [location.pathname]);

  const scrollSlider = (direction) => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: direction * 460,
      behavior: "smooth",
    });
  };
  return (

    <Routes>
 <Route
    path="/portfolio/"
    element={
    <>
      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <div className="container nav-inner">
          <a href="#" className="nav-brand">
            <div className="logo-mark logo-mark-large">
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#ec4899" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                </defs>
                <rect width="44" height="44" rx="10" fill="url(#g1)" />
                <text x="50%" y="58%" textAnchor="middle" fill="#ffffff" fontSize="18" fontWeight="700" fontFamily="Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial">
                  JT
                </text>
              </svg>
            </div>
            <div className="logo-text">
              <span>Jitendra</span>
              <small>WP Studio</small>
            </div>
          </a>

          <nav className="nav-links">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="nav-actions">
            <a href="#contact" className="btn-outline nav-cta">
              Start a Project
            </a>
          </div>
        </div>
      </header>

      {/* ================= HERO SECTION ================= */}
      <section className="hero reveal zoom-in">

        {/* Background Image Slider */}
        <div className="hero-bg-slider">
          <div className="hero-track">
            { [...heroImages, ...heroImages].map((src, index) => (
              <img key={`${src}-${index}`} src={src} alt="Project preview" />
            )) }
          </div>
        </div>

        <div className="container reveal">

          {/* Small Intro Text */}
          <span className="eyebrow">
            WordPress Developer • Gutenberg Specialist
          </span>

          {/* Main Heading */}
          <h1 className="heading-gradient">
            Building premium
            <br />
            WordPress experiences.
          </h1>

          {/* Hero Description */}
          <p>
            I am a freelance{" "}
            <span className="gradient-text">
              WordPress Developer
            </span>{" "}
            with experience in building dynamic, responsive, and high-performance websites.
            I personally handle every project from{" "}
            <span className="gradient-text">
              frontend design
            </span>{" "}
            to{" "}
            <span className="gradient-text">
              backend development
            </span>
            , ensuring quality and attention to detail.

            My expertise includes{" "}
            <span className="gradient-text">
              Gutenberg Block Development
            </span>
            ,{" "}
            <span className="gradient-text">
              Advanced Custom Fields (ACF)
            </span>
            ,{" "}
            <span className="gradient-text">
              WooCommerce
            </span>
            , Elementor, Oxygen Builder, and custom WordPress solutions.

            I specialize in creating clean, modern user interfaces with{" "}
            <span className="gradient-text">
              advanced CSS
            </span>{" "}
            and also work with{" "}
            <span className="gradient-text">
              Bootstrap
            </span>{" "}
            and{" "}
            <span className="gradient-text">
              Tailwind CSS
            </span>{" "}
            for scalable layouts.

            Having successfully completed numerous projects across different industries,
            I focus on delivering reliable, optimized, and user-friendly websites tailored
            to each client's unique business needs.
          </p>

          {/* CTA Buttons */}
          <div className="hero-actions">
            <a href="#work" className="btn">
              View WordPress Work
            </a>

            <a href="#contact" className="btn-outline">
              Get In Touch
            </a>
          </div>

        </div>
      </section>

      {/* =========================
          SUCCESS PROJECTS SECTION
      ========================= */}

      <section className="success-projects" id="work">

        <div className="container">

          <div className="section-head reveal slide-in-up">

            <span>WORDPRESS STORIES</span>

            <h2 className="heading-gradient">
              WordPress Success Stories
            </h2>

            <p>
              Real solutions delivered for startups,
              enterprises and growing businesses.
            </p>

          </div>

          <div className="projects-slider-wrap reveal slide-in-right">
            <button
              type="button"
              className="slider-btn prev"
              onClick={() => scrollSlider(-1)}
              aria-label="Previous projects"
            >
              ‹
            </button>

           <div className="projects-slider" ref={sliderRef}>
            {projects.map((project) => (
              <Link
              to={`/portfolio/projects/${project.slug}`}
                key={project.id}
                className="project-slide reveal slide-in-left"
              >
                <div className="project-thumb">
                  <img src={project.images[0]} alt={project.title} />
                </div>

                <div className="project-info">
                  <span>{project.category}</span>
                  <h3 className="heading-gradient">{project.title}</h3>
                </div>
              </Link>
            ))}
          </div>

            <button
              type="button"
              className="slider-btn next"
              onClick={() => scrollSlider(1)}
              aria-label="Next projects"
            >
              ›
            </button>
          </div>

        </div>

      </section>
      {/* ================= ABOUT + SERVICES SECTION ================= */}
      <div id="services"></div>
      <section className="about services-merged" id="about">
        <div className="container about-grid">
          <div className="about-left reveal slide-in-left">
            <div className="about-hero-card">
              <div className="about-copy-compact">
                <span className="small-title">What I Build</span>
                <h2 className="heading-gradient">Premium WordPress experiences for growth.</h2>
                <p>
                  Custom themes, WooCommerce stores and performance-first sites that are
                  straightforward to manage and built to convert.
                </p>
                <div className="about-pill-list">
                  <span>Theme design</span>
                  <span>WooCommerce</span>
                  <span>SEO & Speed</span>
                </div>
              </div>
            </div>

            <div className="about-stats compact">
              <div className="stat-box small">
                <h3 className="heading-gradient">5+</h3>
                <p>Years on WordPress</p>
              </div>
              <div className="stat-box small">
                <h3 className="heading-gradient">100+</h3>
                <p>Sites launched</p>
              </div>
            </div>
          </div>

          <div className="about-right reveal slide-in-right">
            <div className="service-panel">
              <div className="service-panel-head">
                <span>Core WordPress services</span>
                <h3 className="heading-gradient">Modern WordPress solutions built around your business goals.</h3>
              </div>

              <div className="service-grid-new">
                {services.map((item, index) => (
                  <div key={item.id} className="service-card reveal" style={{ animationDelay: `${0.2 * index}s` }}>
                    <div className="service-card-icon">{index + 1}</div>
                    <div className="service-card-body">
                      <h3 className="heading-gradient">{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS SECTION ================= */}
      <section className="testimonials">
        <div className="container">
          <div className="section-head">
            <span>CLIENT FEEDBACK</span>
            <h2 className="heading-gradient">Trusted by teams and founders.</h2>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <div key={item.id} className="testimonial-card reveal slide-in-up">
                <p>“{item.quote}”</p>
                <div>
                  <h3 className="heading-gradient">{item.name}</h3>
                  <span>{item.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="contact" id="contact">
        <div className="container contact-grid">
          <div className="contact-panel reveal slide-in-left">
            <span className="small-title">Let’s Talk</span>
            <h2 className="heading-gradient">Ready to build your next WordPress website?</h2>
            <p>
              Send me a message on WhatsApp and let’s discuss your WordPress theme, store or plugin project.
            </p>
            <a
              href="https://wa.me/919876543210?text=Hi%20Jeet%2C%20I%20would%20like%20to%20discuss%20a%20WordPress%20project."
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Hire WordPress Expert
            </a>
          </div>

          <div className="contact-details">
            <a
              href="mailto:jeet@portfolio.com"
              className="contact-card contact-link reveal slide-in-left"
            >
              <h3 className="heading-gradient">Email</h3>
              <p>jeet@portfolio.com</p>
              <span>Tap to email instantly</span>
            </a>
            <a
              href="tel:+919876543210"
              className="contact-card contact-link reveal slide-in-left"
            >
              <h3 className="heading-gradient">Phone</h3>
              <p>+91 98765 43210</p>
              <span>Call or WhatsApp directly</span>
            </a>
            <div className="contact-card reveal slide-in-left">
              <h3 className="heading-gradient">Availability</h3>
              <p>Mon - Fri, 10am - 7pm</p>
              <span>Quick response for project leads</span>
            </div>
          </div>
        </div>
      </section>


    
      

      <a
        className="whatsapp-link"
        href="https://wa.me/919876543210?text=Hi%20Jeet%2C%20I%20would%20like%20to%20discuss%20a%20project."
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </a>

      {/* ================= PROJECT MODAL ================= */}
      {/* Project click hone par popup open hoga */}

      {/* ================= FOOTER ================= */}
      <footer>
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="logo">JT.</div>
            <p>Designing premium WordPress builds with motion, speed and conversion in every page.</p>
          </div>
          <div className="footer-links">
            <a href="#work">Work Gallery</a>
            <a href="#about">Capabilities</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          © 2026 Jitendra Thakre. All Rights Reserved.
        </div>
           </footer>

    </>
      }
    />

    <Route
      path="/portfolio/projects/:slug"
      element={<ProjectDetail />}
    />

  </Routes>
  );
  
}

export default App;