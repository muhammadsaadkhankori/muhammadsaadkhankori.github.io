// main.js
const { useState } = React;

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{
      background: 'linear-gradient(to right, #6a11cb, #8e44ad)',
      padding: '1rem',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div className="container">
        <a className="navbar-brand" href="#" style={{
          color: 'white',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          My Portfolio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{
            border: '2px solid white'
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
              <li className="nav-item" key={index}>
                <a
                  className="nav-link"
                  href={`#${item.toLowerCase()}`}
                  style={{
                    color: 'white',
                    margin: '0 1rem',
                    padding: '0.5rem 1rem',
                    borderRadius: '25px',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}


function Hero() {
  return (
    <section id="home" style={{ textAlign: 'center', padding: '3rem 1rem', background: '#f4f4f4' }}>
      <h1>Welcome to My Portfolio</h1>
      <p>Your Name - Aspiring [Your Field]</p>
    </section>
  );
}

function About() {
  return (
    <section id="about" style={{ padding: '3rem 1rem', background: '#e0e0e0' }}>
      <h2>About Me</h2>
      <p>Write about your academic background, achievements, and skills.</p>
    </section>
  );
}

function Projects() {
  const [projects] = useState([
    { title: 'Project 1', description: 'Description for project 1.' },
    { title: 'Project 2', description: 'Description for project 2.' },
    { title: 'Project 3', description: 'Description for project 3.' },
  ]);

  return (
    <section id="projects" style={{ padding: '3rem 1rem', background: '#f4f4f4' }}>
      <h2>Projects</h2>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {projects.map((project, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '5px' }}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" style={{ padding: '3rem 1rem', background: '#e0e0e0' }}>
      <h2>Contact Me</h2>
      <p>Email: your.email@example.com</p>
      <p>Phone: +123456789</p>
    </section>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
