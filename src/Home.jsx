import { useState } from "react";
import {
  ArrowRight,
  MapPin,
  User,
  Clock,
  Car,
  Shield,
  DollarSign,
  Star,
  Menu,
  X,
  Bell,
  Settings,
} from "lucide-react";
import "./Home.css";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("rides");

  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="home-navbar">
        <div className="home-nav-logo">
          <span className="logo-text">
            Urban<span className="logo-accent">Pool</span>
          </span>
        </div>

        <div className="home-nav-links desktop-only">
          <a href="#" className="nav-link active">
            Home
          </a>
          <a href="#" className="nav-link">
            My Rides
          </a>
          <a href="#" className="nav-link">
            Messages
          </a>
          <a href="#" className="nav-link">
            Wallet
          </a>
        </div>

        <div className="home-nav-actions desktop-only">
          <button className="nav-icon-btn">
            <Bell size={20} />
          </button>
          <div className="user-avatar">LK</div>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isMenuOpen && (
          <div className="mobile-menu">
            <a href="#" className="mobile-nav-link">
              Home
            </a>
            <a href="#" className="mobile-nav-link">
              My Rides
            </a>
            <a href="#" className="mobile-nav-link">
              Messages
            </a>
            <a href="#" className="mobile-nav-link">
              Wallet
            </a>
            <div className="mobile-user-info">
              <div className="user-avatar">LK</div>
              <span>John Doe</span>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="home-main">
        {/* Search Bar */}
        <div className="home-search-bar">
          <div className="search-tabs">
            <button
              className={`search-tab ${activeTab === "rides" ? "active" : ""}`}
              onClick={() => setActiveTab("rides")}
            >
              <Car size={18} />
              Find a Ride
            </button>
            <button
              className={`search-tab ${activeTab === "offer" ? "active" : ""}`}
              onClick={() => setActiveTab("offer")}
            >
              <ArrowRight size={18} />
              Offer a Ride
            </button>
          </div>

          <div className="search-inputs">
            <div className="search-input-group">
              <MapPin className="input-icon" size={20} />
              <input type="text" placeholder="From" className="search-input" />
            </div>
            <div className="search-divider-line"></div>
            <div className="search-input-group">
              <MapPin className="input-icon" size={20} />
              <input type="text" placeholder="To" className="search-input" />
            </div>
            <div className="search-divider-line"></div>
            <div className="search-input-group">
              <Clock className="input-icon" size={20} />
              <input type="text" placeholder="Today" className="search-input" />
            </div>
            <button className="search-btn">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="quick-stats">
          <div className="stat-card">
            <div className="stat-icon-wrap">
              <Car size={24} />
            </div>
            <div className="stat-info">
              <span className="stat-value">12</span>
              <span className="stat-label">Active Rides</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon-wrap">
              <DollarSign size={24} />
            </div>
            <div className="stat-info">
              <span className="stat-value">₹2,450</span>
              <span className="stat-label">Saved This Month</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon-wrap">
              <Star size={24} />
            </div>
            <div className="stat-info">
              <span className="stat-value">4.9</span>
              <span className="stat-label">Your Rating</span>
            </div>
          </div>
        </div>

        {/* Upcoming Rides */}
        <section className="rides-section">
          <div className="section-header">
            <h2>Upcoming Rides</h2>
            <a href="#" className="see-all">
              See All
            </a>
          </div>
          <div className="rides-list">
            <div className="ride-card">
              <div className="ride-date">
                <span className="date-day">15</span>
                <span className="date-month">Mar</span>
              </div>
              <div className="ride-details">
                <h3>Mumbai → Pune</h3>
                <p>Departure: 8:00 AM</p>
                <p className="ride-seats">2 seats available</p>
              </div>
              <div className="ride-price">
                <span className="price">₹450</span>
                <span className="per-seat">per seat</span>
              </div>
            </div>
            <div className="ride-card">
              <div className="ride-date">
                <span className="date-day">18</span>
                <span className="date-month">Mar</span>
              </div>
              <div className="ride-details">
                <h3>Pune → Mumbai</h3>
                <p>Departure: 6:00 PM</p>
                <p className="ride-seats">3 seats available</p>
              </div>
              <div className="ride-price">
                <span className="price">₹400</span>
                <span className="per-seat">per seat</span>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="activity-section">
          <div className="section-header">
            <h2>Recent Activity</h2>
          </div>
          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-icon success">
                <Shield size={18} />
              </div>
              <div className="activity-details">
                <p>Ride completed safely</p>
                <span>Mumbai → Thane • Yesterday</span>
              </div>
              <span className="activity-amount">₹350</span>
            </div>
            <div className="activity-item">
              <div className="activity-icon info">
                <Star size={18} />
              </div>
              <div className="activity-details">
                <p>New 5-star rating</p>
                <span>From rider • 2 days ago</span>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon warning">
                <Clock size={18} />
              </div>
              <div className="activity-details">
                <p>Upcoming ride reminder</p>
                <span>Pune → Mumbai • Tomorrow</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Bottom Navigation (Mobile) */}
      <nav className="bottom-nav mobile-only">
        <a href="#" className="bottom-nav-item active">
          <Car size={20} />
          <span>Rides</span>
        </a>
        <a href="#" className="bottom-nav-item">
          <MapPin size={20} />
          <span>My Trips</span>
        </a>
        <a href="#" className="bottom-nav-item">
          <User size={20} />
          <span>Profile</span>
        </a>
        <a href="#" className="bottom-nav-item">
          <Settings size={20} />
          <span>Settings</span>
        </a>
      </nav>
    </div>
  );
};

export default Home;
