
import './App.css'

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <h2 className="logo">AI Interview Simulator</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <button className="login-btn">Login</button>
        </div>
      </nav>

      <main className="hero" id="home">
        <div className="hero-content">
          <p className="tagline">YOUR PERSONAL AI INTERVIEW COACH</p>

          <h1>
            Practice Interviews.
            <br />
            <span>Build Confidence.</span>
          </h1>

          <p className="description">
            Prepare for your dream job with AI-powered mock interviews,
            personalized feedback, and performance analysis.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Start Interview →
            </button>

            <button className="secondary-btn">
              Explore Features
            </button>
          </div>

          <div className="stats">
            <div>
              <h3>AI-Powered</h3>
              <p>Smart Questions</p>
            </div>

            <div>
              <h3>Real-Time</h3>
              <p>Instant Feedback</p>
            </div>

            <div>
              <h3>Personalized</h3>
              <p>Learning Journey</p>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="interview-card">
            <div className="card-header">
              <span className="status-dot"></span>
              <span>AI Interview Session</span>
              <span className="live-label">LIVE</span>
            </div>

            <div className="ai-avatar">AI</div>

            <h2>Tell me about yourself</h2>

            <p>
              Let's start with a brief introduction and your
              professional background.
            </p>

            <div className="answer-box">
              <span>🎙️</span>
              <span>Your answer will appear here...</span>
            </div>

            <div className="progress-label">
              <span>Interview Progress</span>
              <span>1 of 10</span>
            </div>

            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
          </div>

          <div className="floating-badge">
            ✨ AI-Powered Feedback
          </div>
        </div>
      </main>

      <section className="features" id="features">
        <p className="tagline">WHY CHOOSE US</p>
        <h2>Everything you need to ace your interview</h2>

        <div className="feature-grid">
          <article className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3>AI Mock Interviews</h3>
            <p>Practice job-specific interviews with intelligent AI questions.</p>
          </article>

          <article className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Performance Analysis</h3>
            <p>Understand your strengths and discover areas to improve.</p>
          </article>

          <article className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Personalized Feedback</h3>
            <p>Get actionable suggestions to improve every answer.</p>
          </article>
        </div>
      </section>

      <footer id="about">
        <p>© 2026 AI Interview Simulator | Practice. Improve. Succeed.</p>
      </footer>
    </div>
  )
}

export default App
