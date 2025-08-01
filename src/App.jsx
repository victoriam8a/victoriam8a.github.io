import { useState } from 'react';
import { Mail, Phone, Linkedin, Instagram, Youtube, Apple, Layers, Briefcase, BookOpen, Atom, MessageCircle, MapPin } from 'lucide-react';

// --- MAIN APP COMPONENT ---
// This is the primary component that manages the application state and layout.
export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Defines the navigation links and their corresponding icons
  const navItems = [
    { id: 'about', title: 'About', icon: <BookOpen className="h-4 w-4" /> },
    { id: 'projects', title: 'Projects', icon: <Layers className="h-4 w-4" /> },
    { id: 'experience', title: 'Experience', icon: <Briefcase className="h-4 w-4" /> },
    { id: 'education', title: 'Education', icon: <Atom className="h-4 w-4" /> },
    { id: 'skills', title: 'Skills', icon: <Apple className="h-4 w-4" /> },
  ];

  return (
    <div className="bg-purple-100 min-h-screen text-zinc-900 leading-relaxed font-inter transition-all duration-300">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        {/* Sticky Header with Navigation */}
        <header className="sticky top-0 bg-purple-100/90 backdrop-blur-sm py-4 z-40 rounded-b-xl shadow-lg mb-6 transition-all duration-300">
          <nav className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <button onClick={() => setActiveSection('home')} className="text-xl font-bold hover:text-red-600 transition-colors">
              Victoria M.
            </button>
            <div className="flex flex-wrap justify-center md:flex-row gap-4 md:gap-8">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center space-x-1 p-2 rounded-lg transition-all duration-300 ${activeSection === item.id ? 'bg-red-600 text-white shadow-md' : 'text-zinc-600 hover:text-red-600 hover:bg-red-200'}`}
                >
                  {item.icon}
                  <span className="text-sm font-semibold">{item.title}</span>
                </button>
              ))}
            </div>
          </nav>
        </header>

        {/* Conditional Rendering of Sections */}
        <main className="min-h-[calc(100vh-10rem)] py-6 md:py-12">
          {activeSection === 'home' && <HomeSection setActiveSection={setActiveSection} />}
          {activeSection === 'about' && <AboutSection />}
          {activeSection === 'projects' && <ProjectsSection />}
          {activeSection === 'experience' && <ExperienceSection />}
          {activeSection === 'education' && <EducationSection />}
          {activeSection === 'skills' && <SkillsSection />}
        </main>
      </div>
      <Footer />
    </div>
  );
}

// --- HOME SECTION COMPONENT ---
// Displays the main introduction and contact info.
function HomeSection({ setActiveSection }) {
  return (
    <section id="home" className="flex flex-col justify-center items-center text-center">
      <img src="https://placehold.co/192x192/9d174d/ffffff?text=Victoria" alt="Victoria Mendoza Pautt" className="w-48 h-48 rounded-full mb-8 shadow-xl object-cover" />
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-red-600">Victoria Mendoza Pautt</h1>
      <p className="text-xl md:text-2xl text-red-600 mb-8">Aspiring Apple Specialist</p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 items-center justify-center mb-8">
        <ContactInfo icon={<Mail className="h-5 w-5" />} text="victoriamendozap@gmail.com" link="mailto:victoriamendozap@gmail.com" />
        <ContactInfo icon={<Phone className="h-5 w-5" />} text="+1 (480)-432-6631" link="tel:4804326631" />
        <ContactInfo icon={<MapPin className="h-5 w-5" />} text="Lubbock, TX" />
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <SocialButton href="http://www.linkedin.com/in/victoriamendozap" icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" />
        <SocialButton href="https://www.instagram.com/victoriam8a/" icon={<Instagram className="h-5 w-5" />} label="Instagram" />
        <SocialButton href="https://www.threads.com/@victoriam8a" icon={<MessageCircle className="h-5 w-5" />} label="Threads" />
        <SocialButton href="https://www.youtube.com/@victoriamendoza4010" icon={<Youtube className="h-5 w-5" />} label="YouTube" />
      </div>
    </section>
  );
}

// --- ABOUT ME SECTION COMPONENT ---
function AboutSection() {
  return (
    <section id="about" className="py-8">
      <h2 className="text-3xl font-bold mb-6 text-red-600 border-b-2 border-red-600 pb-2">About Me</h2>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="text-lg space-y-4 md:w-2/3">
          <p>I am an international student at Texas Tech University, with a unique blend of passion for both sociocultural anthropology and technology. My multicultural background, shaped by living in various countries across the Americas, has given me a natural ability to build meaningful relationships with people from all walks of life. I am fluent in both Spanish and English, a skill I've honed through my diverse upbringing.</p>
          <p>My academic journey in anthropology has provided me with a deep understanding of human behavior and how culture influences decision-making—a skill I believe is essential for delivering exceptional customer service. This academic perspective is complemented by my hands-on, self-taught technical experience, which includes macOS recovery, cross-platform virtualization, and system modification. I am innately curious about how technology works and I love to solve problems.</p>
          <p>My professional experience in people-oriented roles has strengthened my sense of empathy and reinforced my commitment to helping others. As I approach graduation, I am seeking a career path at Apple to apply my knowledge and passion for both people and technology, in the U.S. or Mexico, where I can contribute to creating outstanding customer experiences that align with Apple's core values.</p>
        </div>
        <div className="md:w-1/3 flex-shrink-0">
          <img src="https://placehold.co/300x400/000000/ffffff?text=Tech+Background" alt="Technology-focused background" className="rounded-lg shadow-lg object-cover w-full h-auto" />
        </div>
      </div>
    </section>
  );
}

// --- PROJECTS SECTION COMPONENT ---
function ProjectsSection() {
  const projects = [
    { title: 'macOS System Recovery & Setup', description: 'Demonstrated proficiency in core Apple software by performing clean installations using Disk Utility and recovery tools.', skills: ['macOS', 'Troubleshooting', 'System Diagnostics'], img: 'https://placehold.co/400x250/333333/ffffff?text=macOS+Recovery' },
    { title: 'Cross-Platform Virtualization & Testing', description: 'Installed and managed Windows on Mac (Boot Camp, VirtualBox, Parallels) to gain essential insights into Apple product functionality in a cross-platform environment.', skills: ['Virtualization', 'Boot Camp', 'Problem-Solving'], img: 'https://placehold.co/400x250/0071e3/ffffff?text=Virtualization' },
    { title: 'Advanced Android Customization & System Optimization', description: 'Independently rooted a Samsung Galaxy S20 and installed custom ROMs to enhance performance and functionality, showcasing deep understanding of mobile OS.', skills: ['Android OS', 'Mobile Troubleshooting', 'Optimization'], img: 'https://placehold.co/400x250/a4c639/ffffff?text=Android+Customization' },
    { title: 'Nintendo Wii Modding & Customization', description: 'Hacked a Wii to enable extended features, demonstrating initiative, self-motivation, and technical creativity.', skills: ['Technical Creativity', 'Self-Guided Learning'], img: 'https://placehold.co/400x250/ff4b4b/ffffff?text=Wii+Modding' },
  ];

  return (
    <section id="projects" className="py-8">
      <h2 className="text-3xl font-bold mb-6 text-red-600 border-b-2 border-red-600 pb-2">Technical Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <img src={project.img} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-zinc-600 mb-4">{project.description}</p>
            <ul className="flex flex-wrap gap-2 mt-4">
                {project.skills.map((skill, i) => (
                    <li key={i} className="bg-red-200 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">{skill}</li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

// --- EXPERIENCE SECTION COMPONENT ---
function ExperienceSection() {
  const experiences = [
    { title: 'Learning Assistant', company: 'Texas Tech University', date: 'Jan 2025 - May 2025', details: ['Guided students through mathematical concepts, adapting communication based on individual learning styles.', 'Fostered a supportive and engaging environment—mirroring Apple\'s approach to personalized service.', 'Strengthened listening, problem-solving, and collaboration skills.'] },
    { title: 'Remote Medical Interpreter', company: 'Propio Language Services', date: 'Aug 2022 - Nov 2022', details: ['Interpreted real-time conversations between medical staff and Spanish-speaking patients.', 'Maintained accuracy, composure, and empathy in high-pressure situations.', 'Built trust and clarity in communication, a vital skill for customer-focused roles.'] },
    { title: 'Customer Service Representative', company: 'Atento & Sitel Colombia', date: 'Oct 2019 - Mar 2020', details: ['Handled over 100 daily inquiries via phone and digital platforms with empathy and efficiency.', 'Supported users with account, order, and billing concerns while following structured protocols.', 'Boosted satisfaction scores through accurate, solution-oriented service.'] },
  ];

  return (
    <section id="experience" className="py-8">
      <h2 className="text-3xl font-bold mb-6 text-red-600 border-b-2 border-red-600 pb-2">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <img
                  src={
                    exp.company === 'Texas Tech University'
                      ? 'https://placehold.co/100x40/cc0000/ffffff?text=Texas+Tech'
                      : exp.company === 'Propio Language Services'
                      ? 'https://placehold.co/100x40/004785/ffffff?text=Propio'
                      : 'https://placehold.co/100x40/F5A700/ffffff?text=Sitel'
                  }
                  alt={`${exp.company} Logo`}
                  className="h-10 w-auto object-contain mb-2"
                />
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-zinc-600">{exp.company}</p>
              </div>
              <p className="text-sm text-zinc-500 mt-2 md:mt-0">{exp.date}</p>
            </div>
            <ul className="list-disc list-inside mt-4 text-zinc-700 space-y-1">
              {exp.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

// --- EDUCATION SECTION COMPONENT ---
function EducationSection() {
  const education = [
    { school: 'Texas Tech University', degree: 'Bachelor of Arts in Anthropology', date: 'Jan 2024 - Present', honors: 'Dean\'s List Honoree & Presidential Transfer Scholarship Recipient' },
    { school: 'Phoenix College', degree: 'Associate of Arts', date: 'Jan 2022 - Dec 2023', honors: 'President\'s List Honoree' },
  ];

  return (
    <section id="education" className="py-8">
      <h2 className="text-3xl font-bold mb-6 text-red-600 border-b-2 border-red-600 pb-2">Education</h2>
      <div className="space-y-8">
        {education.map((edu, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <img
                  src={
                    edu.school === 'Texas Tech University'
                      ? 'https://placehold.co/100x40/cc0000/ffffff?text=Texas+Tech'
                      : 'https://placehold.co/100x40/642B8C/ffffff?text=Phoenix+College'
                  }
                  alt={`${edu.school} Logo`}
                  className="h-10 w-auto object-contain mb-2"
                />
                <h3 className="text-xl font-semibold">{edu.school}</h3>
                <p className="text-zinc-600">{edu.degree}</p>
              </div>
              <p className="text-sm text-zinc-500 mt-2 md:mt-0">{edu.date}</p>
            </div>
            <ul className="list-disc list-inside mt-4 text-zinc-700 space-y-1">
              <li>{edu.honors}</li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

// --- SKILLS SECTION COMPONENT ---
function SkillsSection() {
  const skillsCategories = [
    { title: 'Customer Support & Communication', skills: ['Bilingual: English & Spanish', 'Personalized Recommendations', 'Team Collaboration', 'Cross-Cultural Communication', 'Empathy & Active Listening'] },
    { title: 'Technology & Problem-Solving', skills: ['Apple Device Troubleshooting', 'Device Setup & Maintenance', 'System Recovery & Software Reinstall', 'Digital Literacy & Research Skills'] },
    { title: 'Learning & Initiative', skills: ['Quick Learner, Adaptive Thinker', 'Detail-Oriented with Procedural Accuracy', 'Passion for Continuous Improvement'] },
  ];

  return (
    <section id="skills" className="py-8">
      <h2 className="text-3xl font-bold mb-6 text-red-600 border-b-2 border-red-600 pb-2">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillsCategories.map((category, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
            <ul className="list-disc list-inside text-sm text-zinc-700 space-y-1">
              {category.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

// --- FOOTER COMPONENT ---
function Footer() {
  return (
    <footer className="py-8 text-center text-zinc-500 text-sm">
      &copy; 2024 Victoria Mendoza Pautt. All rights reserved.
    </footer>
  );
}

// --- REUSABLE COMPONENTS (for clean code) ---
const SocialButton = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-2 bg-white text-zinc-900 px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
  >
    {icon}
    <span className="font-semibold text-sm">{label}</span>
  </a>
);

const ContactInfo = ({ icon, text, link }) => (
  <div className="flex items-center space-x-2">
    <div className="text-red-600">{icon}</div>
    {link ? (
      <a href={link} className="hover:underline">{text}</a>
    ) : (
      <span>{text}</span>
    )}
  </div>
);

// --- CSS IN JS ---
// This is used for custom fonts.
// Note: In a real-world project, this would be a separate CSS file.
const style = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
body {
    font-family: 'Inter', sans-serif;
}
`;

