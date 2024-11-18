// main.js
const { useState } = React;

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#333', padding: '1rem' }}>
      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-around', margin: 0, padding: 0 }}>
        <li><a href="#home" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
        <li><a href="#about" style={{ color: 'white', textDecoration: 'none' }}>About</a></li>
        <li><a href="#projects" style={{ color: 'white', textDecoration: 'none' }}>Projects</a></li>
        <li><a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a></li>
      </ul>
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
