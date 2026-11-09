import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const projects = [
  {
    number: "01", type: "BUSINESS WEBSITE", title: "Shree Furnitures & Electronics",
    description: "A responsive business website that presents the store, product categories and essential business information, helping customers explore its offerings and get in touch.",
    stack: ["React", "JavaScript", "CSS"], mark: "SF", tone: "peach"
  },
  {
    number: "02", type: "WEB APPLICATION", title: "SmartBook — Appointment Booking",
    description: "An appointment-booking application concept focused on making it easier to schedule and manage appointments through a clear, product-oriented experience.",
    stack: ["React", "JavaScript", "Web App"], mark: "SB", tone: "violet"
  },
  {
    number: "03", type: "MOBILE APP PROTOTYPE", title: "Smart Gym Management System",
    description: "A gym management prototype covering members, trainers, attendance, memberships and billing, with authentication and role-based access.",
    stack: ["React Native", "Expo", "Supabase"], mark: "GY", tone: "mint"
  },
  {
    number: "04", type: "JAVA + DATABASE", title: "Bank Account Management System",
    description: "A completed Java application supporting account creation, deposits, withdrawals, balance checks and transaction history, connected to MySQL using JDBC.",
    stack: ["Java", "MySQL", "JDBC"], mark: "BK", tone: "blue"
  },
  {
    number: "05", type: "PROFESSIONAL WEBSITE", title: "Advocate Website",
    description: "A professional website concept presenting an advocate’s profile and legal services, with clear navigation and contact or enquiry information.",
    stack: ["React", "JavaScript", "CSS"], mark: "AD", tone: "gold"
  },
  {
    number: "06", type: "PRODUCT WEBSITE", title: "SmartBook — Product Website",
    description: "A standalone marketing website introducing SmartBook, explaining its appointment-booking purpose, scheduling features and reminders.",
    stack: ["React", "JavaScript", "Responsive UI"], mark: "WEB", tone: "rose"
  }
];

const services = [
  ["01", "Business websites", "Responsive websites that explain what you do, showcase your work and make it easy for customers to contact you."],
  ["02", "Web applications", "Custom React interfaces and full-stack applications built around your business workflows."],
  ["03", "Backend & APIs", "Server-side features, REST API integration, authentication and database connectivity."],
  ["04", "Website improvements", "Responsive fixes, UI updates, bug fixing and ongoing website maintenance."]
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return <div className="site-shell">
    <div className="grain"></div>
    <header className="topbar">
      <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">D<span>.</span></span><span>DIVYANSH MISHRA</span></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? "✕" : "☰"}</button>
      <nav className={menuOpen ? "nav nav-open" : "nav"}>
        {["About", "Services", "Work", "Contact"].map(x => <a key={x} href={"#" + x.toLowerCase()} onClick={closeMenu}>{x}</a>)}
        <a className="nav-cta" href="mailto:divyansh9022@gmail.com">Let's talk <span>↗</span></a>
      </nav>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot"></span> AVAILABLE FOR FREELANCE PROJECTS</div>
          <h1>Turning ideas<br/>into <em>digital</em><br/>experiences<span className="period">.</span></h1>
          <p className="hero-lead">Hey, I'm Divyansh — a full-stack developer who enjoys building useful, thoughtful and easy-to-use websites and applications.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my work <span>↗</span></a>
            <a className="text-link" href="/Divyansh-Mishra-Resume.pdf" target="_blank" rel="noreferrer">View my resume ↗</a>
          </div>
          <div className="hero-meta"><span>BASED IN NAGPUR, INDIA</span><span className="meta-line"></span><span>WORKING WITH CLIENTS WORLDWIDE</span></div>
        </div>
        <div className="hero-art" aria-label="Abstract developer illustration">
          <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
          <div className="art-glow"></div>
          <div className="code-card">
            <div className="code-top"><span></span><span></span><span></span><small>developer.js</small></div>
            <div className="code-lines">
              <p><i>01</i> <b>const</b> developer = {`{`}</p>
              <p><i>02</i> &nbsp; name: <strong>'Divyansh'</strong>,</p>
              <p><i>03</i> &nbsp; role: <strong>'Full-stack'</strong>,</p>
              <p><i>04</i> &nbsp; loves: [</p>
              <p><i>05</i> &nbsp;&nbsp; <strong>'Building'</strong>,</p>
              <p><i>06</i> &nbsp;&nbsp; <strong>'Learning'</strong>,</p>
              <p><i>07</i> &nbsp;&nbsp; <strong>'Solving'</strong></p>
              <p><i>08</i> &nbsp; ]</p>
              <p><i>09</i> {`}`};</p>
            </div>
            <div className="code-footer"><span className="pulse"></span> Always building something</div>
          </div>
          <div className="floating-chip chip-react"><span>⚛</span> React</div>
          <div className="floating-chip chip-node"><span>⬡</span> Node.js</div>
          <div className="floating-chip chip-db"><span>◈</span> Database</div>
          <div className="art-caption">DESIGN MINDED. CODE DRIVEN.</div>
        </div>
        <a className="scroll-cue" href="#about"><span></span> SCROLL TO EXPLORE</a>
      </section>

      <section className="intro-strip">
        <div className="section-wrap strip-inner"><span>WHAT I DO</span><p>I bring the frontend, backend and the details in between together to make digital products work.</p><span className="strip-star">✳</span></div>
      </section>

      <section className="section-wrap section-block" id="about">
        <div className="section-label"><span>01 / ABOUT ME</span><span className="label-line"></span></div>
        <div className="about-grid">
          <h2>I like making<br/>the <em>complex</em><br/>feel simple.</h2>
          <div className="about-copy">
            <p className="large-copy">I’m a developer who enjoys taking an idea and shaping it into something people can actually use.</p>
            <p>My work spans frontend interfaces, backend functionality and database integration. I like understanding how the pieces fit together, solving the small problems that make a product feel polished, and learning whatever a project needs.</p>
            <p>I’m currently pursuing a B.Tech in Computer Technology at Priyadarshini College of Engineering, Nagpur, and have also worked as a Web Developer / Full Stack Developer at Setu Solutions.</p>
            <a className="under-link" href="https://github.com/divyansh-9022" target="_blank" rel="noreferrer">Explore my GitHub <span>↗</span></a>
          </div>
        </div>
        <div className="stats-row">
          <div><strong>01</strong><span>Frontend to backend</span></div>
          <div><strong>06+</strong><span>Project examples</span></div>
          <div><strong>∞</strong><span>Things to keep learning</span></div>
        </div>
      </section>

      <section className="skills-section">
        <div className="section-wrap section-block">
          <div className="section-label"><span>02 / TOOLKIT</span><span className="label-line"></span></div>
          <div className="skills-heading"><h2>Tools I work<br/>with<span className="period">.</span></h2><p>The right tool depends on the problem. Here are some of the technologies I use across projects.</p></div>
          <div className="skill-groups">
            <div className="skill-group"><span>FRONTEND</span><div className="skill-list"><b>React.js</b><b>Next.js</b><b>JavaScript</b><b>HTML5</b><b>CSS3</b><b>Responsive Design</b></div></div>
            <div className="skill-group"><span>BACKEND</span><div className="skill-list"><b>Node.js</b><b>Express.js</b><b>Java</b><b>Python</b><b>REST APIs</b></div></div>
            <div className="skill-group"><span>DATABASES</span><div className="skill-list"><b>MongoDB</b><b>MySQL</b><b>Supabase</b><b>PostgreSQL</b><b>SQL</b></div></div>
            <div className="skill-group"><span>TOOLS & OTHER</span><div className="skill-list"><b>Git</b><b>GitHub</b><b>Postman</b><b>React Native</b><b>Expo</b><b>JDBC</b></div></div>
          </div>
        </div>
      </section>

      <section className="section-wrap section-block" id="services">
        <div className="section-label"><span>03 / SERVICES</span><span className="label-line"></span></div>
        <div className="services-head"><h2>How I can<br/><em>help you.</em></h2><p>Whether you're starting from scratch or improving something that already exists, let's figure out the right solution.</p></div>
        <div className="service-list">{services.map(s => <div className="service-row" key={s[0]}><span className="service-num">{s[0]}</span><h3>{s[1]}</h3><p>{s[2]}</p><span className="service-arrow">↗</span></div>)}</div>
      </section>

      <section className="work-section" id="work">
        <div className="section-wrap section-block">
          <div className="section-label"><span>04 / SELECTED WORK</span><span className="label-line"></span></div>
          <div className="work-heading"><h2>A few things<br/>I've <em>worked on.</em></h2><p>A selection of websites and applications across business, booking and management use cases.</p></div>
          <div className="project-grid">{projects.map(p => <article className="project-card" key={p.number}>
            <div className={"project-visual " + p.tone}><span className="project-index">{p.number} / PROJECT</span><div className="project-monogram">{p.mark}</div><span className="visual-corner">↗</span><div className="visual-grid"></div></div>
            <div className="project-info"><div className="project-type">{p.type}</div><h3>{p.title}</h3><p>{p.description}</p><div className="tag-row">{p.stack.map(t => <span key={t}>{t}</span>)}</div></div>
          </article>)}</div>
          <p className="project-note">Project descriptions reflect work and project scope; ask me for relevant walkthroughs or code samples.</p>
        </div>
      </section>

      <section className="experience-section">
        <div className="section-wrap section-block">
          <div className="section-label"><span>05 / EXPERIENCE & EDUCATION</span><span className="label-line"></span></div>
          <div className="timeline">
            <div className="timeline-item"><span className="timeline-date">NOV 2025 — OCT 2026</span><div><h3>Web Developer / Full Stack Developer</h3><h4>Setu Solutions</h4><p>Worked across responsive web interfaces, reusable components, backend functionality, REST API integration, database operations, debugging and ongoing improvements.</p></div></div>
            <div className="timeline-item"><span className="timeline-date">2023 — 2027</span><div><h3>B.Tech, Computer Technology</h3><h4>Priyadarshini College of Engineering & Technology, Nagpur</h4><p>CGPA: 8.17 / 10</p></div></div>
            <div className="timeline-item"><span className="timeline-date">JAN 2025 — APR 2025</span><div><h3>Java Training</h3><h4>Binary Brains, Nagpur</h4><p>Training in object-oriented programming, collections, multithreading, file handling, exception handling and JDBC.</p></div></div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-wrap contact-inner">
          <div className="section-label"><span>06 / GET IN TOUCH</span><span className="label-line"></span></div>
          <p className="contact-kicker">HAVE A PROJECT IN MIND?</p>
          <h2>Let's make<br/><em>something good.</em></h2>
          <p className="contact-text">Have an idea, a project to discuss, or need a hand with development? Tell me a little about it. I'd love to hear from you.</p>
          <a className="contact-email" href="mailto:divyansh9022@gmail.com">divyansh9022@gmail.com <span>↗</span></a>
          <div className="contact-bottom">
            <div><span>FIND ME ELSEWHERE</span><a href="https://www.linkedin.com/in/divyansh-mishra-a89982374/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/divyansh-9022" target="_blank" rel="noreferrer">GitHub ↗</a></div>
            <div><span>CALL / WHATSAPP</span><a href="https://wa.me/919022335845" target="_blank" rel="noreferrer">+91 90223 35845 ↗</a></div>
            <div><span>LOCATION</span><p>Nagpur, India · Open to remote work</p></div>
          </div>
        </div>
      </section>
    </main>
    <footer><div className="section-wrap footer-inner"><a className="brand" href="#home"><span className="brand-mark">D<span>.</span></span><span>DIVYANSH MISHRA</span></a><span>DESIGNED & BUILT WITH CARE © 2026</span><a href="#home">BACK TO TOP ↑</a></div></footer>
  </div>;
}

createRoot(document.getElementById("root")).render(<App />);
