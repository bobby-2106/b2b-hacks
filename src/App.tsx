import { useState } from 'react';
import {
  ArrowUpRight,
  Award,
  Bot,
  Braces,
  CalendarDays,
  Check,
  CircleHelp,
  Compass,
  Copy,
  ExternalLink,
  Heart,
  MapPin,
  Menu,
  Navigation,
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
  HeroIllustration,
  HeroWindowCard,
} from './components/PixelArt';
import { RegistrationModal } from './components/RegistrationModal';

type Track = {
  id: string;
  icon: IconComponent;
  title: string;
  subtitle: string;
  text: string;
};
type TimelineItem = { icon: IconComponent; title: string; time: string };
type FaqItem = { question: string; answer: string };

const tracks: Track[] = [
  {
    id: '01',
    icon: PixelRobotIcon,
    title: 'Agentic AI',
    subtitle: 'BUILD AUTONOMOUS SYSTEMS',
    text: 'Autonomous agents that reason, plan & execute tasks independently.'
  },
  {
    id: '02',
    icon: PixelCloudIcon,
    title: 'Cloud',
    subtitle: 'DEPLOY RESILIENT CLOUD INFRA',
    text: 'Scalable, fault-tolerant & highly available cloud architecture.'
  },
  {
    id: '03',
    icon: PixelBrainCloudIcon,
    title: 'AI × Cloud',
    subtitle: 'FUSE INTELLIGENCE WITH SCALE',
    text: 'Harness LLMs, embeddings & serverless cloud computation.'
  },
  {
    id: '04',
    icon: PixelGlobeIcon,
    title: 'Real-world Problem Solving',
    subtitle: 'SOLVE HIGH-IMPACT CHALLENGES',
    text: 'Create pragmatic solutions for critical community & industry issues.'
  },
  {
    id: '05',
    icon: PixelAntennaIcon,
    title: 'IoT',
    subtitle: 'ENGINEER CONNECTED HARDWARE',
    text: 'Smart sensor arrays, embedded hardware & edge intelligence.'
  },
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [copied, setCopied] = useState(false);

  const closeMenu = () => setMobileOpen(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText('Jawaharlal Nehru Technological University Hyderabad (JNTUH), Ashok Nagar, Kukatpally, Hyderabad, Telangana 500085');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const openRegister = (e: React.MouseEvent) => {
    e.preventDefault();
    closeMenu();
    setIsModalOpen(true);
  };

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
          {['Home', 'About', 'Tracks', 'Schedule', 'Prizes', 'Rules', 'Venue', 'FAQ'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
          <a href="#register" className="nav-register" onClick={openRegister}>REGISTER NOW</a>
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
              <span><CalendarDays size={15} /> 10–11 Oct 2026</span>
              <span><MapPin size={15} /> Hyderabad, India</span>
            </div>
            <div className="hero-actions">
              <a href="#register" className="button button-primary" onClick={openRegister}>REGISTER NOW <ArrowUpRight size={15} /></a>
              <a href="#about" className="button button-outline">VIEW DETAILS</a>
            </div>
          </div>
          <div className="hero-illustration-container reveal reveal-delay">
            <HeroWindowCard />
          </div>
          <img src="/b2b-robot-mascot.png" alt="" className="hero-robot-static" aria-hidden="true" />
        </section>

        <section className="about section-grid" id="about">
          <div className="about-intro">
            <div className="pixel-section-label">
              <span className="pixel-label-tag">[01]</span>
              <span className="pixel-label-text">ABOUT THE HACKATHON</span>
            </div>
            <p>B2B HACKS is a 24-hour hackathon by <b>BackToBase × Code Viveks Club</b> bringing together problem solvers and dreamers to create impactful solutions using Agentic AI and Cloud technologies.</p>
          </div>
          
          <div className="partner-card">
            <div className="partner-logo">
              <img src="/backtobase-logo.jpg" alt="BackToBase" className="partner-logo-img" />
            </div>
            <p>Empowering builders to go from zero to impact.</p>
          </div>
          
          <div className="partner-card">
            <div className="partner-logo">
              <img src="/code-viveks-logo.jpg" alt="Code Viveks - SVIT Coding Club" className="partner-logo-img" />
            </div>
            <p>A community of innovators building the future.</p>
          </div>
        </section>

        <section className="split-section" id="tracks">
          <div className="tracks panel">
            <SectionTitle icon={Bot} title="Tracks / Problem Statements" badgeNum="02" pixelLabel="CHOOSE YOUR BATTLE" />
            <div className="track-grid">
              {tracks.map(({ id, icon: TrackIcon, title, subtitle, text }) => (
                <article
                  className={`level-card ${selectedTrack === title ? 'selected-level' : ''}`}
                  key={title}
                  onClick={() => {
                    setSelectedTrack(title);
                    setIsModalOpen(true);
                  }}
                >
                  <div className="level-card-header">
                    <span className="level-number-tag">
                      <span className="lvl-prefix">TRACK</span> {id}
                    </span>
                    <span className="level-status-pill">[ UNLOCKED ]</span>
                  </div>

                  <div className="level-icon-wrapper">
                    <TrackIcon size={34} />
                  </div>

                  <div className="level-card-body">
                    <h3 className="level-title">{title}</h3>
                    <p className="level-subtitle">{subtitle}</p>
                    <p className="level-desc">{text}</p>
                  </div>

                  <div className="level-card-footer">
                    <button
                      type="button"
                      className="level-select-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedTrack(title);
                        setIsModalOpen(true);
                      }}
                    >
                      <span>SELECT TRACK</span>
                      <span className="select-arrow">→</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="participate panel">
            <SectionTitle icon={Heart} title="Why Participate?" badgeNum="02.B" pixelLabel="LEVEL UP YOUR SKILLS" />
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
            <SectionTitle icon={CalendarDays} title="24-Hour Hackathon Timeline" badgeNum="03" pixelLabel="24 HOURS. ONE MISSION." />
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
            <SectionTitle icon={Award} title="Prizes" badgeNum="04" pixelLabel="WHAT'S AT STAKE?" />
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
            <SectionTitle icon={Braces} title="Tech Stack You Can Use" badgeNum="06" pixelLabel="TECH ARSENAL" />
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
            <SectionTitle icon={ShieldCheck} title="Rules & Eligibility" badgeNum="07" pixelLabel="PROTOCOLS & RULES" />
            <ul className="rules-list">
              {[
                'Individual participation (Solo hackers)',
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

        {/* Venue / Pixeled Treasure Map Section */}
        <section className="split-section venue-section" id="venue">
          <div className="venue-map-panel panel">
            <SectionTitle icon={Compass} title="Venue & Treasure Map" badgeNum="08" pixelLabel="QUEST DESTINATION" />
            <div className="treasure-map-container pixel-window">
              <div className="treasure-map-header">
                <div className="window-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="map-title-text">QUEST_MAP.BMP // TARGET: JNTUH_KUKATPALLY</span>
              </div>
              <div className="treasure-map-frame">
                <img
                  src="/treasure-map.jpg"
                  alt="Pixelated Treasure Map pointing to JNTUH Hackathon Venue in Hyderabad"
                  className="treasure-map-img"
                />
                  <div className="map-overlay-vignette" />

                {/* Pulsing Interactive Pin over JNTUH */}
                <div className="treasure-target-pin jntuh-pin" title="B2B HACKS VENUE @ JNTUH">
                  <div className="pin-radar-pulse" />
                  <div className="pin-radar-pulse-2" />
                </div>
              </div>
            </div>
          </div>

          <div className="venue-details-panel panel">
            <SectionTitle icon={MapPin} title="Quest Coordinates & Venue" badgeNum="08.B" pixelLabel="COORDINATES & DETAILS" />
            <div className="venue-card">
              <div className="venue-badge">
                <Navigation size={13} /> QUEST DESTINATION
              </div>
              <h3>Jawaharlal Nehru Technological University (JNTUH)</h3>
              <p className="venue-sub">Ashok Nagar, Kukatpally Housing Board Colony, Kukatpally, Hyderabad, Telangana 500085</p>
              
              <div className="venue-coords-bar">
                <div className="coord-item">
                  <span className="coord-label">GPS COORDS</span>
                  <span className="coord-val">17.4933° N, 78.3914° E</span>
                </div>
                <div className="coord-item">
                  <span className="coord-label">REGION</span>
                  <span className="coord-val">Kukatpally, Hyderabad</span>
                </div>
              </div>

              <div className="quest-checkpoints">
                <h4>GUILD CHECKPOINTS</h4>
                <ul>
                  <li>
                    <span className="checkpoint-badge">🚩 MAIN GATE</span>
                    <span>Hacker Check-in &amp; Kit Collection</span>
                  </li>
                  <li>
                    <span className="checkpoint-badge">⚡ TECH LABS</span>
                    <span>24-Hour Hacking Arena &amp; High-Speed Wi-Fi</span>
                  </li>
                  <li>
                    <span className="checkpoint-badge">☕ TAVERN</span>
                    <span>Refreshments, Snacks &amp; Energy Corner</span>
                  </li>
                  <li>
                    <span className="checkpoint-badge">🏆 AUDITORIUM</span>
                    <span>Main Stage for Final Demos &amp; Awards</span>
                  </li>
                </ul>
              </div>

              <div className="venue-actions">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=JNTU+Hyderabad+Kukatpally"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-primary map-btn"
                >
                  <Navigation size={15} /> GOOGLE MAPS <ExternalLink size={14} />
                </a>
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="button button-outline copy-btn"
                >
                  {copied ? <><Check size={14} /> COPIED!</> : <><Copy size={14} /> COPY ADDRESS</>}
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="bottom-grid" id="faq">
          <div className="judging panel">
            <SectionTitle icon={Award} title="Judging Criteria" badgeNum="09" pixelLabel="VICTORY CONDITIONS" />
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
          <div className="faq panel" id="faq">
            <SectionTitle icon={CircleHelp} title="FAQ" badgeNum="05" pixelLabel="GOT QUESTIONS?" />
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

        </main>

      {/* Dynamic Pixel Footer */}
      <footer className="pixel-footer-wrap" id="register">
        <div className="pixel-footer-sky">
          {/* Animated Pixel Stars */}
          <span className="pixel-star star-1">✦</span>
          <span className="pixel-star star-2">★</span>
          <span className="pixel-star star-3">✦</span>
          <span className="pixel-star star-4">✦</span>
          <span className="pixel-star star-5">★</span>
          <span className="pixel-star star-6">✦</span>
          <span className="pixel-star star-7">✦</span>

          {/* Main Content Area */}
          <div className="pixel-footer-inner">
            {/* Left Block: Catchphrase */}
            <div className="footer-left-block">
              <div className="footer-catchphrase">
                <span className="phrase-cyan">READY TO BUILD</span>
                <span className="phrase-cyan-sub">THE NEXT BIG THING?</span>
              </div>
            </div>

            {/* Center Block: Action CTA */}
            <div className="footer-center-block">
              <button 
                type="button" 
                className="pixel-register-cta-btn" 
                onClick={openRegister}
              >
                <span>REGISTER NOW</span>
                <span className="cta-arrow">→</span>
              </button>
            </div>

            {/* Right Block: Event Details & Contact */}
            <div className="footer-right-block">
              <div className="footer-event-badge">
                <div className="badge-brand">
                  <span className="brand-b2b">B2B</span> <span className="brand-hacks">HACKS</span>
                </div>
                <div className="badge-venue">
                  <span className="venue-pin">📍</span>
                  <span className="venue-name">JNTUH, HYDERABAD</span>
                </div>
                <div className="footer-contact-block">
                  <span className="contact-title">CONTACT US</span>
                  <a href="tel:+919876543210" className="contact-link">
                    <span className="contact-icon">📞</span> +91 98765 43210
                  </a>
                  <a href="mailto:contact@codeviveks.club" className="contact-link">
                    <span className="contact-icon">✉</span> contact@codeviveks.club
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Horizon Terrain Bar */}
          <div className="pixel-dunes-horizon" />
        </div>

        {/* System Status Bar */}
        <div className="pixel-status-bar">
          <div className="status-bar-inner">
            <div className="status-bar-left">
              <span className="status-brand-b2b">B2B</span> <span className="status-brand-hacks">HACKS</span>
            </div>
            <div className="status-bar-center">
              <span>Made with <span className="pixel-heart">♥</span> by Code Vivek&apos;s Club</span>
              <span className="bar-sep">|</span>
              <span>Build &bull; Innovate &bull; Deploy</span>
            </div>
            <div className="status-bar-right">
              <span className="status-label">SYSTEM STATUS: <b className="status-val">READY</b></span>
              <span className="status-dot" />
            </div>
          </div>
        </div>
      </footer>

      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} selectedTrack={selectedTrack} />
    </div>
  );
}

function SectionTitle({
  icon: TitleIcon,
  title,
  badgeNum,
  pixelLabel,
}: {
  icon: any;
  title: string;
  badgeNum?: string;
  pixelLabel?: string;
}) {
  return (
    <div className="section-title-wrap">
      {(badgeNum || pixelLabel) && (
        <div className="pixel-section-label">
          {badgeNum && <span className="pixel-label-tag">[{badgeNum}]</span>}
          {pixelLabel && <span className="pixel-label-text">{pixelLabel}</span>}
        </div>
      )}
      <div className="section-title">
        <TitleIcon size={16} />
        <h2>{title}</h2>
      </div>
    </div>
  );
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
