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
} from "lucide-react";
import Navbar from "../Navbar";
import "./LandingPage.css";

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
      <div className="bg-grid">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="grid-line"
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        ))}
      </div>

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

      <section className="hero-d1">
        <div className="hero-d1-visual">
          <div className="hero-d1-car">
            <div className="hero-d1-car-body" />
            <div className="hero-d1-car-glow" />
          </div>
          <div className="hero-d1-route">
            {[...Array(5)].map((_, i) => (
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
    </div>
  );
};

export default LandingPage;
