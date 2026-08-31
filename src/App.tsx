import { useState } from 'react';
import {
  ArrowUpRight,
  Award,
  Bot,
  Braces,
  CalendarDays,
  Check,
  CircleHelp,
  Heart,
  MapPin,
  Menu,
  ShieldCheck,
  X,
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
} from 'lucide-react';

import {
  PixelRobotIcon,
  PixelCloudIcon,
  PixelBrainCloudIcon,
  PixelGlobeIcon,
  PixelAntennaIcon,
  PixelTrophyIcon,
  PixelChestIcon,
  PixelShieldIcon,
  PixelRocketIcon,
  PixelRegistrationIcon,
  PixelOpeningIcon,
  PixelIdeationIcon,
  PixelDevelopmentIcon,
  PixelMentorshipIcon,
  PixelSubmissionIcon,
  PixelDemosIcon,
  PixelJudgingIcon,
  PixelDatabaseIcon,
  PixelDevOpsIcon,
  GoogleCloudLogo,
  AWSLogo,
  MongoDBLogo,
  ReplicateLogo,
  TwilioLogo,
  VercelLogo,
  GitHubLogo,
  PostmanLogo,
  HeroIllustration,
  HeroWindowCard,
} from './components/PixelArt';

type IconComponent = React.ComponentType<{ size?: number; className?: string }>;

type Track = { icon: IconComponent; title: string; text: string };
type TimelineItem = { icon: IconComponent; title: string; time: string };
type FaqItem = { question: string; answer: string };

const tracks: Track[] = [
  { icon: PixelRobotIcon, title: 'Agentic AI', text: 'Autonomous agents that think & act.' },
  { icon: PixelCloudIcon, title: 'Cloud', text: 'Scalable, resilient & secure cloud solutions.' },
  { icon: PixelBrainCloudIcon, title: 'AI × Cloud', text: 'Combine AI power with cloud infrastructure.' },
  { icon: PixelGlobeIcon, title: 'Real-world Problem Solving', text: 'Solve meaningful problems that matter.' },
  { icon: PixelAntennaIcon, title: 'IoT', text: 'Smart connected solutions for the real world.' },
];

const timeline: TimelineItem[] = [
  { icon: PixelRegistrationIcon, title: 'Registration', time: '9:00 AM' },
  { icon: PixelOpeningIcon, title: 'Opening', time: '10:00 AM' },
  { icon: PixelIdeationIcon, title: 'Ideation', time: '11:00 AM' },
  { icon: PixelDevelopmentIcon, title: 'Development', time: '12:00 PM – 8:00 AM' },
  { icon: PixelMentorshipIcon, title: 'Mentorship', time: '2:00 PM – 11:00 PM' },
  { icon: PixelSubmissionIcon, title: 'Submission', time: '8:00 AM' },
  { icon: PixelDemosIcon, title: 'Demos', time: '9:00 AM' },
  { icon: PixelJudgingIcon, title: 'Judging', time: '10:00 AM' },
  { icon: PixelTrophyIcon as any, title: 'Winners', time: '12:00 PM' },
];

const techStack: Track[] = [
  { icon: PixelRobotIcon, title: 'Agentic AI', text: 'Frameworks' },
  { icon: PixelBrainCloudIcon, title: 'LLMs', text: '& Models' },
  { icon: PixelCloudIcon, title: 'Cloud', text: 'Platforms' },
  { icon: PixelAntennaIcon, title: 'APIs', text: '& Services' },
  { icon: PixelDatabaseIcon, title: 'Databases', text: 'SQL / NoSQL' },
  { icon: PixelDevOpsIcon, title: 'DevOps', text: '& Deployment' },
];

const faqs: FaqItem[] = [
  { question: 'Who can participate?', answer: 'Students, developers, designers, founders and builders of every experience level are welcome to participate.' },
  { question: 'Do I need prior experience?', answer: 'Not at all. Bring curiosity and a willingness to learn. Mentors will be available throughout the event.' },
  { question: 'What should I bring?', answer: 'Bring your laptop, charger, student or government ID, and any ideas you are excited to explore.' },
  { question: 'Will food be provided?', answer: 'Yes. Meals, refreshments and event goodies will be provided for all registered participants.' },
  { question: 'How will judging work?', answer: 'Projects will be evaluated on innovation, technical complexity, impact, design and the final presentation.' },
];

function PixelMark() {
  return (
    <div className="brand-mark-row">
      <span className="bracket">&lt;</span>
      <span className="b2b">B2B</span>
      <strong className="hacks">HACKS</strong>
      <span className="bracket">/&gt;</span>
    </div>
  );
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const closeMenu = () => setMobileOpen(false);

  const getTimelineStyle = (index: number) => {
    if (index < 5) {
      return {
        gridColumn: `${1 + index * 2} / span 2`,
        gridRow: '1',
      };
    } else {
      const colIndex = index - 5;
      return {
        gridColumn: `${2 + colIndex * 2} / span 2`,
        gridRow: '2',
      };
    }
  };

  return (
    <div className="site-shell">
      <header className="navbar">
        <a href="#home" className="brand" aria-label="B2B Hacks home"><PixelMark /></a>
        <button className="menu-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={mobileOpen ? 'nav-links open' : 'nav-links'}>
          {['Home', 'About', 'Tracks', 'Schedule', 'Prizes', 'Rules', 'Sponsors', 'FAQ'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
          <a href="#register" className="nav-register" onClick={closeMenu}>REGISTER NOW</a>
        </nav>
      </header>

      <main>
        <section className="hero section-grid" id="home">
          <div className="pixel-squares" aria-hidden="true">
            <i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i />
          </div>
          <div className="hero-copy reveal">
            <div className="eyebrow"><CalendarDays size={13} /> 24-HOUR HACKATHON <b /></div>
            <h1 className="hero-title-mockup">
              <div>
                <span className="bracket-red">&lt;</span>
                <span className="b2b-red">B2B</span>
              </div>
              <div className="line-2">
                <span className="hacks-black">HACKS</span>
                <span className="bracket-red">/&gt;</span>
              </div>
            </h1>
            <p className="hero-subtitle">Agentic AI &amp; Cloud Hackathon</p>
            <p className="hero-description">Build. Innovate. Deploy.</p>
            <div className="event-meta">
              <span><CalendarDays size={15} /> 30–31 Aug 2025</span>
              <span><MapPin size={15} /> Hyderabad, India</span>
            </div>
            <div className="hero-actions">
              <a href="#register" className="button button-primary">REGISTER NOW <ArrowUpRight size={15} /></a>
              <a href="#about" className="button button-outline">VIEW DETAILS</a>
            </div>
          </div>
          <div className="hero-illustration-container reveal reveal-delay">
            <HeroWindowCard />
          </div>
        </section>

        <section className="about section-grid" id="about">
          <div className="about-intro">
            <p className="section-kicker">About B2B Hacks</p>
            <p>B2B HACKS is a 24-hour hackathon by <b>BackToBase × Code Viveks Club</b> bringing together problem solvers and dreamers to create impactful solutions using Agentic AI and Cloud technologies.</p>
          </div>
          
          <div className="partner-card">
            <div className="partner-logo">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="red-arrow">
                <path d="M5 19L19 5M19 5H9M19 5V15" stroke="#df3035" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter"/>
              </svg>
              <span className="logo-text">BackToBase</span>
            </div>
            <p>Empowering builders to go from zero to impact.</p>
          </div>
          
          <div className="partner-card">
            <div className="partner-logo">
              <span className="code-viveks-bracket">{'{'}</span>
              <span className="code-viveks-cv">cv</span>
              <span className="code-viveks-bracket">{'}'}</span>
              <span className="logo-text ml-1">CODE VIVEKS CLUB</span>
            </div>
            <p>A community of innovators building the future.</p>
          </div>
        </section>

        <section className="split-section" id="tracks">
          <div className="tracks panel">
            <SectionTitle icon={Bot} title="Tracks / Problem Statements" />
            <div className="track-grid">
              {tracks.map(({ icon: TrackIcon, title, text }) => (
                <article className="track-card" key={title}>
                  <div className="track-icon-container">
                    <TrackIcon size={32} />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="participate panel">
            <SectionTitle icon={Heart} title="Why Participate?" />
            <ul>
              {[
                'Build – Turn ideas into real products',
                'Learn – Explore cutting-edge tech',
                'Network – Meet like-minded builders',
                'Mentorship – Get guidance from experts',
                'Prizes & Recognition – Win exciting rewards'
              ].map((item) => (
                <li key={item}><Check size={14} /> {item}</li>
              ))}
            </ul>
            <div className="trophy-art">
              <PixelTrophyIcon size={130} />
            </div>
          </div>
        </section>

        <section className="split-section schedule-section" id="schedule">
          <div className="timeline panel">
            <SectionTitle icon={CalendarDays} title="24-Hour Hackathon Timeline" />
            <div className="timeline-container-wrapper">
              <div className="timeline-line-top" />
              <div className="timeline-line-bottom-curve" />
              <div className="timeline-track">
                {timeline.map(({ icon: TimelineIcon, title, time }, index) => (
                  <div className="timeline-item" key={title} style={getTimelineStyle(index)}>
                    <div className="timeline-icon">
                      <TimelineIcon size={19} />
                    </div>
                    <span className="timeline-dot" />
                    <h3>{title}</h3>
                    <p>{time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="prizes panel" id="prizes">
            <SectionTitle icon={Award} title="Prizes" />
            <div className="prize-list">
              <PrizeRow label="Winner" value="₹50,000 + Goodies" icon={PixelTrophyIcon as any} />
              <PrizeRow label="Runner-up" value="₹25,000 + Goodies" icon={PixelTrophyIcon as any} />
              <PrizeRow label="Special Awards" value="Exciting Rewards" icon={PixelTrophyIcon as any} />
              <PrizeRow label="All Participants" value="Certificates & Goodies" icon={PixelTrophyIcon as any} />
            </div>
            <div className="chest-art">
              <PixelChestIcon size={120} />
            </div>
          </div>
        </section>

        <section className="split-section tech-rules" id="rules">
          <div className="tech panel">
            <SectionTitle icon={Braces} title="Tech Stack You Can Use" />
            <div className="tech-grid">
              {techStack.map(({ icon: TechIcon, title, text }) => (
                <div className="tech-card" key={title}>
                  <TechIcon size={25} />
                  <strong>{title}</strong>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rules panel">
            <SectionTitle icon={ShieldCheck} title="Rules & Eligibility" />
            <ul className="rules-list">
              {[
                'Team size: 1 – 4 members',
                'Open to all students & professionals',
                'Original ideas only',
                'Use of pre-trained models allowed',
                'Respect others & hack responsibly'
              ].map((rule) => (
                <li key={rule}><span>›</span>{rule}</li>
              ))}
            </ul>
            <div className="rules-art">
              <PixelShieldIcon size={130} />
            </div>
          </div>
        </section>

        <section className="bottom-grid" id="sponsors">
          <div className="judging panel">
            <SectionTitle icon={Award} title="Judging Criteria" />
            <div className="criteria">
              {[
                ['Innovation', '30%'],
                ['Technical Complexity', '25%'],
                ['Impact & Relevance', '20%'],
                ['Design & UX', '15%'],
                ['Presentation', '10%']
              ].map(([label, percentage]) => (
                <div className="criterion" key={label}>
                  <span>{label}</span>
                  <div className="bar"><i style={{ width: percentage }} /></div>
                  <b>{percentage}</b>
                </div>
              ))}
            </div>
          </div>
          <div className="sponsors panel">
            <SectionTitle icon={Heart} title="Our Sponsors & Partners" />
            <div className="sponsor-grid">
              <div><GoogleCloudLogo /></div>
              <div><AWSLogo /></div>
              <div><MongoDBLogo /></div>
              <div><ReplicateLogo /></div>
              <div><TwilioLogo /></div>
              <div><VercelLogo /></div>
              <div><GitHubLogo /></div>
              <div><PostmanLogo /></div>
            </div>
          </div>
          <div className="faq panel" id="faq">
            <SectionTitle icon={CircleHelp} title="FAQ" />
            {faqs.map((faq, index) => (
              <div className={openFaq === index ? 'faq-item active' : 'faq-item'} key={faq.question}>
                <button onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                  <span>{faq.question}</span>
                  <span className="faq-toggle-icon">{openFaq === index ? '−' : '+'}</span>
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="final-cta" id="register">
          <div className="cloud cloud-left"><PixelCloudIcon size={85} /></div>
          <div className="rocket"><PixelRocketIcon size={70} /></div>
          <div className="cloud cloud-right"><PixelCloudIcon size={70} /></div>
          <h2>READY TO BUILD <span className="text-red">THE FUTURE?</span></h2>
          <p>Join us for 24 hours of innovation, learning &amp; fun!</p>
          <a href="mailto:hello@b2bhacks.dev" className="button button-primary">REGISTER NOW <ArrowUpRight size={15} /></a>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <PixelMark />
          <p>BackToBase × Code Viveks Club<br />24-Hour Agentic AI &amp; Cloud Hackathon</p>
          <small>© 2025 B2B HACKS. All rights reserved.</small>
        </div>
        <div>
          <h4>Quick links</h4>
          <a href="#about">About</a>
          <a href="#tracks">Tracks</a>
          <a href="#schedule">Schedule</a>
          <a href="#prizes">Prizes</a>
          <a href="#rules">Rules</a>
          <a href="#faq">FAQ</a>
        </div>
        <div>
          <h4>Contact us</h4>
          <a href="mailto:hello@b2bhacks.dev">hello@b2bhacks.dev</a>
          <a href="tel:+919876543210">+91 98765 43210</a>
          <span><MapPin size={13} /> Hyderabad, India</span>
        </div>
        <div>
          <h4>Follow us</h4>
          <div className="socials">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="Github"><Github size={16} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={16} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={16} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><Twitter size={16} /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Youtube size={16} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionTitle({ icon: TitleIcon, title }: { icon: any; title: string }) {
  return <div className="section-title"><TitleIcon size={16} /><h2>{title}</h2></div>;
}

function PrizeRow({ label, value, icon: PrizeIcon }: { label: string; value: string; icon: any }) {
  return (
    <div className="prize-row">
      <span>{label}</span>
      <strong>
        <PrizeIcon size={14} /> {value}
      </strong>
    </div>
  );
}

export default App;
