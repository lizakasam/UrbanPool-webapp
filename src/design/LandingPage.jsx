import { useEffect, useRef } from "react";
import {
  ArrowRight,
  MapPin,
  Users,
  Shield,
  Clock,
  Zap,
  ChevronRight,
  Route,
  DollarSign,
  Leaf,
  Star,
} from "lucide-react";
import Navbar from "../Navbar";
import "./LandingPage.css";

const features = [
  {
    icon: <DollarSign className="feat-icon" />,
    color: "green",
    title: "Split Costs Fairly",
    desc: "Fuel, tolls, and time calculated automatically so no one overpays.",
  },
  {
    icon: <Shield className="feat-icon" />,
    color: "pink",
    title: "Verified Riders",
    desc: "ID-verified profiles, ratings, and reviews on every driver and passenger.",
  },
  {
    icon: <Leaf className="feat-icon" />,
    color: "green",
    title: "Eco Friendly",
    desc: "Every shared ride takes a car off the road, cutting your carbon footprint.",
  },
];

const LandingPage = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const x = (clientX / innerWidth - 0.5) * 20;
        const y = (clientY / innerHeight - 0.5) * 20;
        heroRef.current.style.setProperty("--mouse-x", `${x}px`);
        heroRef.current.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="design-1" ref={heroRef}>
      {/* Animated Background Grid */}
      <div className="bg-grid">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="grid-line"
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        ))}
      </div>

      {/* Floating Speed Lines */}
      <div className="speed-lines">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="speed-line"
            style={{
              top: `${10 + i * 12}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="hero-d1">
        <div className="hero-d1-content">
          <h1 className="hero-d1-title">
            <span className="hero-d1-word">Share</span>
            <span className="hero-d1-word hero-d1-accent">Rides.</span>
            <br />
            <span className="hero-d1-word">Split</span>
            <span className="hero-d1-word hero-d1-accent">Costs.</span>
          </h1>

          <p className="hero-d1-subtitle">
            Connect with travelers heading your way. Save up to 60% on
            long-distance trips while meeting interesting people along the
            journey.
          </p>

          <div className="hero-d1-cta-group">
            <button className="hero-d1-btn hero-d1-btn-primary">
              Find a Ride
              <ArrowRight className="hero-d1-btn-icon" />
            </button>
            <button className="hero-d1-btn hero-d1-btn-secondary">
              Offer a Seat
            </button>
          </div>
        </div>

        <div className="hero-d1-visual">
          <div className="hero-d1-car">
            <div className="hero-d1-car-body" />
            <div className="hero-d1-car-glow" />
          </div>
          <div className="hero-d1-route">
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className="hero-d1-route-point"
                style={{ animationDelay: `${i * 0.4}s` }}
              >
                <MapPin className="hero-d1-route-icon" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="stats-bar">
        <div className="stats-bar-inner"></div>
      </section>
      <section className="features-d1" id="features">
        <div className="section-header">
          <span className="section-tag">Why UrbanPool</span>
          <h2 className="section-title">
            Everything you need for a{" "}
            <span className="d1-gradient-text">smarter ride</span>
          </h2>
          <p className="section-sub">
            Built for long-distance travel. Designed around trust, savings, and
            the open road.
          </p>
        </div>

        <div className="features-d1-grid">
          {features.map((f, i) => (
            <div key={i} className={`feat-card feat-card--${f.color}`}>
              <div className={`feat-icon-wrap feat-icon-wrap--${f.color}`}>
                {f.icon}
              </div>
              <h3 className="feat-title">{f.title}</h3>
              <p className="feat-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="cta-d1">
        <div className="cta-d1-glow" />
        <div className="cta-d1-content">
          <span className="section-tag">Get Started Today</span>
          <h2 className="cta-d1-title">
            Your next trip should cost{" "}
            <span className="d1-gradient-text">half as much</span>
          </h2>
          <p className="cta-d1-sub">
            Join thousands of smart travelers who ride together and split every
            rupee fairly.
          </p>
          <div className="cta-d1-actions">
            <button className="hero-d1-btn hero-d1-btn-primary">
              Start for Free
              <ArrowRight className="hero-d1-btn-icon" />
            </button>
            <button className="hero-d1-btn hero-d1-btn-secondary">
              See How It Works
            </button>
          </div>
        </div>
      </section>

      <footer className="footer-d1">
        <div className="footer-d1-inner">
          <div className="footer-d1-brand">
            <span className="footer-d1-logo">UrbanPool</span>
            <p className="footer-d1-tagline">
              Share the road. Split the cost. Arrive together.
            </p>
          </div>
          <div className="footer-d1-links">
            <div className="footer-col">
              <h4>Product</h4>
              <ul>
                <li>
                  <a href="#">Find a Ride</a>
                </li>
                <li>
                  <a href="#">Offer a Seat</a>
                </li>
                <li>
                  <a href="#">How It Works</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Press</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Support</h4>
              <ul>
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Safety</a>
                </li>
                <li>
                  <a href="#">Community</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-d1-bottom">
          <span>© 2026 UrbanPool. All rights reserved.</span>
          <div className="footer-d1-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Settings</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
