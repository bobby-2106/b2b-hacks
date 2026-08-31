import React from 'react';

// Common style for pixel art SVGs
const pixelArtStyle: React.CSSProperties = {
  shapeRendering: 'crispEdges',
  imageRendering: 'pixelated',
};

// 1. Robot Head (Agentic AI Track)
export function PixelRobotIcon({ size = 32, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={pixelArtStyle} className={className}>
      {/* Ears */}
      <rect x="1" y="6" width="1" height="4" fill="#6b6966" />
      <rect x="14" y="6" width="1" height="4" fill="#6b6966" />
      {/* Antenna */}
      <rect x="7" y="1" width="2" height="2" fill="#df3035" />
      <rect x="7.5" y="3" width="1" height="2" fill="#6b6966" />
      {/* Head */}
      <rect x="3" y="5" width="10" height="9" fill="#e9e0d6" />
      <rect x="2" y="6" width="12" height="7" fill="#e9e0d6" />
      {/* Eyes */}
      <rect x="4" y="7" width="2" height="2" fill="#df3035" />
      <rect x="10" y="7" width="2" height="2" fill="#df3035" />
      {/* Mouth */}
      <rect x="5" y="10" width="6" height="1" fill="#171717" />
      <rect x="5" y="11" width="1" height="1" fill="#171717" />
      <rect x="10" y="11" width="1" height="1" fill="#171717" />
      {/* Cheeks */}
      <rect x="3" y="9" width="1" height="1" fill="#db6b6b" />
      <rect x="12" y="9" width="1" height="1" fill="#db6b6b" />
    </svg>
  );
}

// 2. Cloud Icon (Cloud Track)
export function PixelCloudIcon({ size = 32, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={pixelArtStyle} className={className}>
      <path d="M 5 11 h 8 v -1 h 1 v -2 h -1 v -1 h -1 v -1 h -2 v 1 h -1 v -2 h -2 v 1 h -1 v 1 h -1 v 3 h 1 z" fill="#75a5bf" />
      <path d="M 6 10 h 6 v -1 h 1 v -1 h -1 v -1 h -1 v -1 h -1 v 1 h -1 v -1 h -1 v 1 h -1 v 1 h -1 v 1 h 1 z" fill="#aed2e6" />
      <rect x="3" y="10" width="10" height="2" fill="#507c96" />
    </svg>
  );
}

// 3. Brain Cloud (AI x Cloud Track)
export function PixelBrainCloudIcon({ size = 32, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={pixelArtStyle} className={className}>
      {/* Cloud base */}
      <rect x="2" y="9" width="12" height="3" fill="#507c96" />
      <rect x="1" y="10" width="14" height="1" fill="#507c96" />
      {/* Brain Top */}
      <rect x="5" y="4" width="7" height="5" fill="#f4b2b2" />
      <rect x="4" y="5" width="9" height="4" fill="#f4b2b2" />
      <rect x="6" y="3" width="5" height="1" fill="#f4b2b2" />
      {/* Brain details / Shading */}
      <rect x="8" y="4" width="1" height="5" fill="#df3035" />
      <rect x="5" y="6" width="3" height="1" fill="#df3035" />
      <rect x="9" y="7" width="3" height="1" fill="#df3035" />
      <rect x="6" y="8" width="1" height="1" fill="#df3035" />
      <rect x="10" y="5" width="2" height="1" fill="#df3035" />
      {/* Connection sparkles */}
      <rect x="4" y="2" width="1" height="1" fill="#ffd700" />
      <rect x="12" y="3" width="1" height="1" fill="#ffd700" />
    </svg>
  );
}

// 4. Globe (Real-world Problem Solving Track)
export function PixelGlobeIcon({ size = 32, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={pixelArtStyle} className={className}>
      {/* Outer border */}
      <rect x="4" y="2" width="8" height="12" fill="#1d4ed8" />
      <rect x="2" y="4" width="12" height="8" fill="#1d4ed8" />
      <rect x="3" y="3" width="10" height="10" fill="#1d4ed8" />
      {/* Oceans */}
      <rect x="4" y="3" width="8" height="10" fill="#3b82f6" />
      <rect x="3" y="4" width="10" height="8" fill="#3b82f6" />
      {/* Lands (Green) */}
      <rect x="6" y="4" width="3" height="2" fill="#22c55e" />
      <rect x="5" y="5" width="3" height="3" fill="#22c55e" />
      <rect x="10" y="5" width="2" height="2" fill="#22c55e" />
      <rect x="9" y="8" width="3" height="3" fill="#22c55e" />
      <rect x="4" y="9" width="3" height="2" fill="#22c55e" />
      <rect x="8" y="10" width="3" height="2" fill="#22c55e" />
      {/* Latitude / Longitude lines */}
      <rect x="3" y="7" width="10" height="1" fill="#60a5fa" opacity="0.6" />
      <rect x="7" y="3" width="1" height="10" fill="#60a5fa" opacity="0.6" />
    </svg>
  );
}

// 5. Antenna (IoT Track)
export function PixelAntennaIcon({ size = 32, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={pixelArtStyle} className={className}>
      {/* Tower Mast */}
      <rect x="7" y="6" width="2" height="9" fill="#4b5563" />
      <rect x="6" y="14" width="4" height="1" fill="#1f2937" />
      {/* Tower tip */}
      <rect x="7" y="5" width="2" height="1" fill="#df3035" />
      {/* Signal Waves */}
      {/* Inner Wave */}
      <rect x="5" y="4" width="1" height="3" fill="#df3035" opacity="0.7" />
      <rect x="10" y="4" width="1" height="3" fill="#df3035" opacity="0.7" />
      <rect x="6" y="3" width="4" height="1" fill="#df3035" opacity="0.7" />
      {/* Outer Wave */}
      <rect x="3" y="2" width="1" height="6" fill="#df3035" opacity="0.4" />
      <rect x="12" y="2" width="1" height="6" fill="#df3035" opacity="0.4" />
      <rect x="4" y="1" width="8" height="1" fill="#df3035" opacity="0.4" />
    </svg>
  );
}

// 6. Trophy Icon (Participate & Timeline Winners)
export function PixelTrophyIcon({ size = 76, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={pixelArtStyle} className={className}>
      {/* Glow Sparkles */}
      <rect x="4" y="6" width="2" height="2" fill="#ffd700" />
      <rect x="26" y="8" width="2" height="2" fill="#ffd700" />
      <rect x="23" y="3" width="2" height="2" fill="#ffd700" />
      {/* Handles */}
      <rect x="6" y="8" width="3" height="7" fill="#b57c1e" />
      <rect x="23" y="8" width="3" height="7" fill="#b57c1e" />
      <rect x="5" y="9" width="2" height="5" fill="#ffd700" />
      <rect x="25" y="9" width="2" height="5" fill="#ffd700" />
      <rect x="7" y="14" width="3" height="2" fill="#ffd700" />
      <rect x="22" y="14" width="3" height="2" fill="#ffd700" />
      {/* Trophy Bowl */}
      <rect x="9" y="7" width="14" height="10" fill="#ffd700" />
      <rect x="10" y="17" width="12" height="2" fill="#ffd700" />
      <rect x="11" y="19" width="10" height="2" fill="#ffd700" />
      {/* Highlights & Shading */}
      <rect x="9" y="7" width="2" height="10" fill="#fff" opacity="0.4" />
      <rect x="21" y="7" width="2" height="10" fill="#d97706" />
      <rect x="10" y="17" width="2" height="2" fill="#fff" opacity="0.4" />
      <rect x="20" y="17" width="2" height="2" fill="#d97706" />
      {/* Stem */}
      <rect x="14" y="21" width="4" height="4" fill="#ffd700" />
      <rect x="13" y="24" width="6" height="1" fill="#ffd700" />
      <rect x="16" y="21" width="2" height="4" fill="#d97706" />
      {/* Base */}
      <rect x="10" y="25" width="12" height="3" fill="#881337" />
      <rect x="11" y="25" width="10" height="1" fill="#be123c" />
      <rect x="9" y="28" width="14" height="2" fill="#1e2937" />
    </svg>
  );
}

// 7. Chest Icon (Prizes Section)
export function PixelChestIcon({ size = 74, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={pixelArtStyle} className={className}>
      {/* Gold coins spilling around */}
      <rect x="2" y="27" width="3" height="2" fill="#ffd700" />
      <rect x="4" y="28" width="2" height="2" fill="#ffd700" />
      <rect x="25" y="26" width="3" height="3" fill="#ffd700" />
      <rect x="27" y="28" width="3" height="2" fill="#ffd700" />
      <rect x="23" y="28" width="3" height="2" fill="#ffd700" />

      {/* Lower Chest Body */}
      <rect x="5" y="16" width="22" height="12" fill="#5c3a21" />
      <rect x="4" y="17" width="24" height="10" fill="#5c3a21" />
      {/* Metal Corners & Trims */}
      <rect x="4" y="17" width="2" height="10" fill="#ffd700" />
      <rect x="26" y="17" width="2" height="10" fill="#ffd700" />
      <rect x="4" y="26" width="24" height="2" fill="#d97706" />
      <rect x="4" y="17" width="24" height="2" fill="#ffd700" />

      {/* Shiny Coins overflowing from lid gap */}
      <rect x="6" y="13" width="20" height="4" fill="#ffd700" />
      <rect x="8" y="12" width="16" height="2" fill="#ffffff" opacity="0.7" />
      <rect x="12" y="14" width="4" height="2" fill="#f59e0b" />
      <rect x="18" y="13" width="5" height="3" fill="#f59e0b" />

      {/* Lid */}
      <rect x="5" y="5" width="22" height="9" fill="#78350f" />
      <rect x="6" y="4" width="20" height="10" fill="#78350f" />
      <rect x="8" y="3" width="16" height="11" fill="#78350f" />
      {/* Lid Metal Ribs */}
      <rect x="5" y="4" width="2" height="10" fill="#ffd700" />
      <rect x="25" y="4" width="2" height="10" fill="#ffd700" />
      <rect x="10" y="4" width="2" height="10" fill="#ffd700" />
      <rect x="20" y="4" width="2" height="10" fill="#ffd700" />
      <rect x="5" y="3" width="22" height="2" fill="#ffd700" />
      {/* Shading */}
      <rect x="6" y="12" width="20" height="2" fill="#1e2937" opacity="0.35" />

      {/* Big Lock */}
      <rect x="14" y="15" width="4" height="5" fill="#475569" />
      <rect x="15" y="16" width="2" height="3" fill="#ffd700" />
      <rect x="15" y="18" width="2" height="2" fill="#1e2937" />
    </svg>
  );
}

// 8. Shield Icon (Rules Section)
export function PixelShieldIcon({ size = 82, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={pixelArtStyle} className={className}>
      {/* Shield Base Shape */}
      <rect x="6" y="4" width="20" height="18" fill="#ffffff" />
      <rect x="7" y="22" width="18" height="2" fill="#ffffff" />
      <rect x="9" y="24" width="14" height="2" fill="#ffffff" />
      <rect x="11" y="26" width="10" height="2" fill="#ffffff" />
      <rect x="13" y="28" width="6" height="2" fill="#ffffff" />
      <rect x="15" y="30" width="2" height="1" fill="#ffffff" />

      {/* Red Border */}
      <path d="M 6 4 h 20 v 2 h 1 v 12 h -1 v 4 h -1 v 2 h -2 v 2 h -2 v 2 h -2 v 2 h -2 v 2 h -2 v -2 h -2 v -2 h -2 v -2 h -2 v -2 h -2 v -4 h -1 v -12 h 1 z" fill="none" stroke="#df3035" strokeWidth="2" />
      <rect x="8" y="6" width="16" height="1" fill="#db6b6b" />

      {/* Large checkmark inside */}
      <rect x="10" y="15" width="2" height="2" fill="#22c55e" />
      <rect x="11" y="16" width="2" height="2" fill="#22c55e" />
      <rect x="12" y="17" width="2" height="2" fill="#22c55e" />
      <rect x="13" y="18" width="2" height="2" fill="#22c55e" />
      <rect x="14" y="19" width="3" height="2" fill="#22c55e" />
      <rect x="16" y="17" width="2" height="3" fill="#22c55e" />
      <rect x="17" y="15" width="2" height="3" fill="#22c55e" />
      <rect x="18" y="13" width="2" height="3" fill="#22c55e" />
      <rect x="19" y="11" width="2" height="3" fill="#22c55e" />
      <rect x="20" y="9" width="2" height="3" fill="#22c55e" />
      <rect x="21" y="7" width="2" height="3" fill="#22c55e" />
      {/* Checkmark highlight */}
      <rect x="14" y="19" width="1" height="1" fill="#86efac" />
      <rect x="16" y="17" width="1" height="1" fill="#86efac" />
      <rect x="18" y="13" width="1" height="1" fill="#86efac" />
      <rect x="20" y="9" width="1" height="1" fill="#86efac" />
    </svg>
  );
}

// 9. Rocket Icon (Ready to Build Section & Footer)
export function PixelRocketIcon({ size = 70, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={pixelArtStyle} className={className}>
      {/* Fire/Flame */}
      <rect x="6" y="23" width="4" height="4" fill="#ef4444" />
      <rect x="8" y="25" width="3" height="3" fill="#f97316" />
      <rect x="9" y="27" width="2" height="3" fill="#eab308" />
      <rect x="11" y="22" width="3" height="3" fill="#ef4444" />
      <rect x="12" y="24" width="2" height="2" fill="#f97316" />

      {/* Fin Left */}
      <rect x="9" y="18" width="4" height="4" fill="#df3035" />
      <rect x="8" y="20" width="2" height="3" fill="#b82028" />

      {/* Rocket Body */}
      <rect x="11" y="8" width="10" height="14" fill="#e9e0d6" />
      <rect x="10" y="10" width="12" height="10" fill="#e9e0d6" />
      {/* Body Shading */}
      <rect x="19" y="8" width="2" height="14" fill="#cbd5e1" />
      <rect x="21" y="10" width="1" height="10" fill="#cbd5e1" />

      {/* Nose cone */}
      <rect x="13" y="4" width="6" height="4" fill="#df3035" />
      <rect x="14" y="2" width="4" height="2" fill="#df3035" />
      <rect x="15" y="1" width="2" height="1" fill="#b82028" />

      {/* Fin Right */}
      <rect x="19" y="18" width="4" height="4" fill="#df3035" />
      <rect x="22" y="20" width="2" height="3" fill="#b82028" />

      {/* Window */}
      <rect x="14" y="11" width="4" height="4" fill="#0284c7" />
      <rect x="14" y="11" width="1" height="4" fill="#38bdf8" />
      <rect x="14" y="11" width="4" height="1" fill="#38bdf8" />
      <rect x="17" y="14" width="1" height="1" fill="#ffffff" />
    </svg>
  );
}

// 10. Timeline Icons (9 specific ones)
export function PixelRegistrationIcon({ size = 19 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={pixelArtStyle}>
      <rect x="3" y="2" width="10" height="12" fill="#fff" stroke="#475569" strokeWidth="1" />
      <rect x="6" y="1" width="4" height="2" fill="#df3035" />
      <rect x="5" y="5" width="6" height="1" fill="#cbd5e1" />
      <rect x="5" y="7" width="6" height="1" fill="#cbd5e1" />
      <rect x="5" y="9" width="4" height="1" fill="#cbd5e1" />
      {/* Checkbox */}
      <rect x="10" y="9" width="2" height="2" fill="#22c55e" />
    </svg>
  );
}

export function PixelOpeningIcon({ size = 19 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={pixelArtStyle}>
      {/* Megaphone speaker */}
      <rect x="3" y="6" width="3" height="4" fill="#64748b" />
      <rect x="6" y="5" width="2" height="6" fill="#e2e8f0" />
      <rect x="8" y="4" width="3" height="8" fill="#df3035" />
      <rect x="11" y="3" width="1" height="10" fill="#b82028" />
      {/* Handle */}
      <rect x="5" y="10" width="2" height="3" fill="#475569" />
      {/* Sound waves */}
      <rect x="13" y="5" width="1" height="2" fill="#df3035" />
      <rect x="14" y="3" width="1" height="3" fill="#df3035" />
      <rect x="14" y="10" width="1" height="3" fill="#df3035" />
      <rect x="13" y="9" width="1" height="2" fill="#df3035" />
    </svg>
  );
}

export function PixelIdeationIcon({ size = 19 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={pixelArtStyle}>
      {/* Bulb body */}
      <rect x="5" y="2" width="6" height="6" fill="#ffd700" />
      <rect x="4" y="3" width="8" height="4" fill="#ffd700" />
      {/* Screw base */}
      <rect x="6" y="8" width="4" height="3" fill="#94a3b8" />
      <rect x="7" y="11" width="2" height="1" fill="#475569" />
      {/* Filaments / Glow */}
      <rect x="7" y="4" width="2" height="2" fill="#ffffff" opacity="0.8" />
      <rect x="2" y="5" width="1" height="1" fill="#ffd700" />
      <rect x="13" y="5" width="1" height="1" fill="#ffd700" />
      <rect x="3" y="2" width="1" height="1" fill="#ffd700" />
      <rect x="12" y="2" width="1" height="1" fill="#ffd700" />
      <rect x="8" y="0" width="1" height="1" fill="#ffd700" />
    </svg>
  );
}

export function PixelDevelopmentIcon({ size = 19 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={pixelArtStyle}>
      {/* Screen */}
      <rect x="2" y="2" width="12" height="9" fill="#1e2937" stroke="#94a3b8" strokeWidth="1" />
      {/* Code markup symbols */}
      <rect x="4" y="4" width="2" height="1" fill="#38bdf8" />
      <rect x="5" y="5" width="2" height="1" fill="#38bdf8" />
      <rect x="4" y="6" width="2" height="1" fill="#38bdf8" />
      {/* Other lines */}
      <rect x="7" y="4" width="5" height="1" fill="#a855f7" />
      <rect x="8" y="6" width="4" height="1" fill="#22c55e" />
      {/* Keyboard/Stand */}
      <rect x="6" y="11" width="4" height="2" fill="#64748b" />
      <rect x="3" y="13" width="10" height="1" fill="#475569" />
    </svg>
  );
}

export function PixelMentorshipIcon({ size = 19 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={pixelArtStyle}>
      {/* Mentor (Left, taller) */}
      <rect x="2" y="2" width="4" height="4" fill="#3b82f6" />
      <rect x="1" y="6" width="6" height="8" fill="#1d4ed8" />
      {/* Student (Right, smaller) */}
      <rect x="10" y="5" width="4" height="4" fill="#ffd700" />
      <rect x="9" y="9" width="6" height="5" fill="#f59e0b" />
      {/* Connecting light/sparkle */}
      <rect x="7" y="5" width="2" height="2" fill="#22c55e" />
    </svg>
  );
}

export function PixelSubmissionIcon({ size = 19 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={pixelArtStyle}>
      {/* Clipboard */}
      <rect x="3" y="2" width="10" height="12" fill="#e9e0d6" />
      <rect x="6" y="1" width="4" height="2" fill="#475569" />
      {/* Pencil */}
      <rect x="9" y="6" width="1" height="5" fill="#ffd700" />
      <rect x="10" y="5" width="1" height="5" fill="#ffd700" />
      <rect x="11" y="4" width="1" height="1" fill="#df3035" />
      {/* Checks */}
      <rect x="5" y="5" width="2" height="1" fill="#22c55e" />
      <rect x="5" y="8" width="2" height="1" fill="#22c55e" />
    </svg>
  );
}

export function PixelDemosIcon({ size = 19 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={pixelArtStyle}>
      <rect x="1" y="2" width="14" height="10" fill="#1e2937" stroke="#475569" strokeWidth="1" />
      {/* Play button triangle */}
      <polygon points="6,4 11,7 6,10" fill="#df3035" />
      {/* Base stand */}
      <rect x="6" y="12" width="4" height="2" fill="#475569" />
      <rect x="4" y="14" width="8" height="1" fill="#1e2937" />
    </svg>
  );
}

export function PixelJudgingIcon({ size = 19 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={pixelArtStyle}>
      {/* Checklist / Scoreboard */}
      <rect x="3" y="2" width="10" height="12" fill="#ffffff" stroke="#171717" strokeWidth="1" />
      {/* Ratings stars/bars */}
      <rect x="5" y="5" width="6" height="1" fill="#df3035" />
      <rect x="5" y="7" width="5" height="1" fill="#df3035" />
      <rect x="5" y="9" width="3" height="1" fill="#df3035" />
      {/* Magnifier glass checking */}
      <rect x="10" y="10" width="4" height="4" rx="2" fill="none" stroke="#475569" strokeWidth="1" />
      <line x1="13" y1="13" x2="15" y2="15" stroke="#475569" strokeWidth="2" />
    </svg>
  );
}

// 11. Sponsor Logos (8 custom high-fidelity SVGs)
export function GoogleCloudLogo({ className = '' }) {
  return (
    <svg viewBox="0 0 200 45" className={className} style={{ height: '24px' }}>
      {/* Icon */}
      <g transform="translate(5, 5) scale(0.7)">
        {/* Flat Hexagon in Google Cloud style */}
        <polygon points="25,5 45,15 45,35 25,45 5,35 5,15" fill="#34a853" />
        <polygon points="25,5 45,15 25,25 5,15" fill="#4285f4" />
        <polygon points="5,15 25,25 25,45 5,35" fill="#ea4335" />
        <polygon points="45,15 25,25 25,45 45,35" fill="#f9ab00" />
      </g>
      {/* Wordmark */}
      <text x="48" y="28" fontFamily="'DM Sans', sans-serif" fontSize="18" fontWeight="700" fill="#5f6368">
        Google <tspan fontWeight="400">Cloud</tspan>
      </text>
    </svg>
  );
}

export function AWSLogo({ className = '' }) {
  return (
    <svg viewBox="0 0 100 40" className={className} style={{ height: '28px' }}>
      {/* Letters */}
      <text x="10" y="26" fontFamily="'DM Sans', sans-serif" fontSize="23" fontWeight="900" fill="#1e293b" letterSpacing="-1">
        aws
      </text>
      {/* Amazon Smile Arrow */}
      <path d="M 12 30 Q 32 37 52 30 Q 56 27 58 24 L 54 26 Q 51 28 47 30 Z" fill="#f97316" />
      <path d="M 58 24 L 59 31 L 53 28 Z" fill="#f97316" />
    </svg>
  );
}

export function MongoDBLogo({ className = '' }) {
  return (
    <svg viewBox="0 0 140 40" className={className} style={{ height: '24px' }}>
      {/* Leaf Icon */}
      <path d="M 18 6 C 25 15 25 25 18 34 C 11 25 11 15 18 6 Z" fill="#13aa52" />
      <path d="M 18 6 C 15 15 15 25 18 34 Z" fill="#10aa50" opacity="0.6" />
      <path d="M 18 3 C 18 3 18 34 18 37" stroke="#13aa52" strokeWidth="2" />
      {/* Wordmark */}
      <text x="36" y="27" fontFamily="'DM Sans', sans-serif" fontSize="18" fontWeight="700" fill="#001e2b">
        mongo<tspan fontWeight="400">DB</tspan>
      </text>
    </svg>
  );
}

export function ReplicateLogo({ className = '' }) {
  return (
    <svg viewBox="0 0 140 40" className={className} style={{ height: '24px' }}>
      {/* Double bracket square */}
      <rect x="8" y="8" width="24" height="24" rx="4" fill="#0f172a" />
      <text x="14" y="25" fontFamily="monospace" fontSize="16" fontWeight="bold" fill="#fff">
        r
      </text>
      {/* Wordmark */}
      <text x="40" y="27" fontFamily="'DM Sans', sans-serif" fontSize="19" fontWeight="700" fill="#0f172a" letterSpacing="-0.5">
        replicate
      </text>
    </svg>
  );
}

export function TwilioLogo({ className = '' }) {
  return (
    <svg viewBox="0 0 120 40" className={className} style={{ height: '24px' }}>
      {/* Red circle with 4 dots */}
      <circle cx="18" cy="20" r="12" fill="#f22f46" />
      <circle cx="13" cy="15" r="2.2" fill="#fff" />
      <circle cx="23" cy="15" r="2.2" fill="#fff" />
      <circle cx="13" cy="25" r="2.2" fill="#fff" />
      <circle cx="23" cy="25" r="2.2" fill="#fff" />
      {/* Wordmark */}
      <text x="38" y="27" fontFamily="'DM Sans', sans-serif" fontSize="19" fontWeight="700" fill="#171717">
        twilio
      </text>
    </svg>
  );
}

export function VercelLogo({ className = '' }) {
  return (
    <svg viewBox="0 0 110 40" className={className} style={{ height: '22px' }}>
      {/* Triangle */}
      <polygon points="18,8 29,28 7,28" fill="#000" />
      {/* Wordmark */}
      <text x="38" y="26" fontFamily="'DM Sans', sans-serif" fontSize="19" fontWeight="700" fill="#000" letterSpacing="-0.5">
        VERCEL
      </text>
    </svg>
  );
}

export function GitHubLogo({ className = '' }) {
  return (
    <svg viewBox="0 0 110 40" className={className} style={{ height: '24px' }}>
      {/* Octocat Silhouette simple */}
      <path d="M 18 8 C 11.4 8 6 13.4 6 20 C 6 25.3 9.4 29.8 14.2 31.4 C 14.8 31.5 15 31.1 15 30.8 C 15 30.5 15 29.7 15 28.7 C 11.6 29.4 10.9 27.2 10.9 27.2 C 10.4 25.8 9.6 25.4 9.6 25.4 C 8.5 24.6 9.7 24.6 9.7 24.6 C 11 24.7 11.7 26 11.7 26 C 12.8 27.9 14.6 27.3 15.3 27 C 15.4 26.2 15.7 25.7 16 25.4 C 13.3 25.1 10.5 24.1 10.5 19.5 C 10.5 18.2 11 17.1 11.8 16.3 C 11.7 16 11.3 14.8 11.9 13.1 C 11.9 13.1 12.9 12.8 15.2 14.4 C 16.2 14.1 17.2 14 18.2 14 C 19.2 14 20.2 14.1 21.2 14.4 C 23.5 12.8 24.5 13.1 24.5 13.1 C 25.1 14.8 24.7 16 24.6 16.3 C 25.4 17.1 25.9 18.2 25.9 19.5 C 25.9 24.1 23.1 25.1 20.4 25.4 C 20.8 25.8 21.2 26.5 21.2 27.6 C 21.2 29.2 21.2 30.5 21.2 30.9 C 21.2 31.2 21.4 31.6 22 31.5 C 26.8 29.8 30.2 25.3 30.2 20 C 30.2 13.4 24.8 8 18 8 Z" fill="#181717" />
      {/* Wordmark */}
      <text x="38" y="27" fontFamily="'DM Sans', sans-serif" fontSize="18" fontWeight="700" fill="#181717">
        GitHub
      </text>
    </svg>
  );
}

export function PostmanLogo({ className = '' }) {
  return (
    <svg viewBox="0 0 120 40" className={className} style={{ height: '24px' }}>
      {/* Orange circle with astronaut ring */}
      <circle cx="18" cy="20" r="11" fill="#ff6c37" />
      <path d="M 12 18 C 12 12 24 10 26 16 C 28 22 16 28 12 18" fill="none" stroke="#fff" strokeWidth="2.5" />
      {/* Wordmark */}
      <text x="36" y="27" fontFamily="'DM Sans', sans-serif" fontSize="18" fontWeight="700" fill="#1c2738">
        Postman
      </text>
    </svg>
  );
}

// 12. Hero Section Illustration (Full Pixel Art Scene)
export function HeroIllustration() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 400 240" fill="none" style={pixelArtStyle}>
      {/* Background Pixel Grid Details / Distant Sparks */}
      <rect x="40" y="80" width="4" height="4" fill="#eecac5" />
      <rect x="340" y="60" width="4" height="4" fill="#df3035" opacity="0.6" />
      <rect x="90" y="150" width="4" height="4" fill="#df3035" opacity="0.4" />
      <rect x="180" y="40" width="6" height="6" fill="#eecac5" />
      <rect x="290" y="140" width="4" height="4" fill="#eecac5" />
      <rect x="130" y="90" width="5" height="5" fill="#df3035" opacity="0.3" />

      {/* 1. Large Red Cloud at the top center */}
      <g transform="translate(190, 15)">
        {/* Main cloud fill */}
        <rect x="10" y="30" width="80" height="40" fill="#df3035" />
        <rect x="20" y="20" width="60" height="60" fill="#df3035" />
        <rect x="30" y="10" width="40" height="80" fill="#df3035" />
        <rect x="0" y="40" width="100" height="20" fill="#df3035" />
        
        {/* Shading/Highlights on the cloud (pink/cream highlights) */}
        <rect x="20" y="25" width="20" height="15" fill="#f4b2b2" />
        <rect x="40" y="15" width="20" height="20" fill="#f4b2b2" />
        <rect x="65" y="25" width="15" height="10" fill="#f4b2b2" />
        <rect x="10" y="45" width="25" height="10" fill="#f4b2b2" />
        <rect x="55" y="45" width="35" height="10" fill="#f4b2b2" />
        <rect x="30" y="60" width="40" height="5" fill="#b82028" />

        {/* Floating rain-like pixels below cloud */}
        <rect x="15" y="75" width="4" height="8" fill="#df3035" />
        <rect x="45" y="85" width="4" height="8" fill="#f4b2b2" />
        <rect x="75" y="78" width="4" height="8" fill="#df3035" />
      </g>

      {/* 2. Monitor in the center */}
      <g transform="translate(195, 105)">
        {/* Stand */}
        <rect x="20" y="55" width="8" height="10" fill="#64748b" />
        <rect x="12" y="65" width="24" height="4" fill="#475569" />
        
        {/* Frame / Bezel */}
        <rect x="-8" y="0" width="64" height="56" rx="4" fill="#1e2937" />
        {/* Inner Screen */}
        <rect x="-4" y="4" width="56" height="48" fill="#ffffff" />
        
        {/* Code representation on screen: </ > in red */}
        {/* < */}
        <rect x="8" y="20" width="4" height="4" fill="#df3035" />
        <rect x="12" y="16" width="4" height="4" fill="#df3035" />
        <rect x="12" y="24" width="4" height="4" fill="#df3035" />
        
        {/* / */}
        <rect x="20" y="28" width="4" height="4" fill="#171717" />
        <rect x="22" y="22" width="4" height="4" fill="#171717" />
        <rect x="24" y="16" width="4" height="4" fill="#171717" />
        
        {/* > */}
        <rect x="36" y="20" width="4" height="4" fill="#df3035" />
        <rect x="32" y="16" width="4" height="4" fill="#df3035" />
        <rect x="32" y="24" width="4" height="4" fill="#df3035" />
      </g>

      {/* 3. Developer on the Left (Sitting and Typing) */}
      <g transform="translate(130, 140)">
        {/* Stool */}
        <rect x="15" y="45" width="10" height="20" fill="#78350f" />
        <rect x="10" y="40" width="20" height="5" fill="#451a03" />

        {/* Legs (Blue) */}
        <rect x="13" y="28" width="6" height="15" fill="#1e3a8a" />
        <rect x="18" y="32" width="8" height="10" fill="#1e3a8a" />
        {/* Shoes */}
        <rect x="11" y="43" width="4" height="2" fill="#171717" />
        <rect x="24" y="40" width="4" height="2" fill="#171717" />

        {/* Body (Red Shirt) */}
        <rect x="12" y="12" width="12" height="18" fill="#df3035" />
        <rect x="10" y="14" width="16" height="12" fill="#df3035" />

        {/* Arms typing */}
        <rect x="22" y="18" width="10" height="4" fill="#f9c49d" />
        <rect x="24" y="16" width="4" height="4" fill="#df3035" />

        {/* Head & Hair */}
        <rect x="13" y="-2" width="10" height="14" fill="#f9c49d" /> {/* Skin */}
        <rect x="11" y="-4" width="14" height="8" fill="#171717" /> {/* Hair */}
        <rect x="12" y="-1" width="13" height="4" fill="#171717" />

        {/* Laptop on desk */}
        <rect x="35" y="38" width="18" height="3" fill="#cbd5e1" /> {/* Base */}
        <rect x="47" y="26" width="3" height="14" fill="#94a3b8" /> {/* Screen */}
        <rect x="48" y="28" width="1" height="10" fill="#38bdf8" /> {/* Glow */}
      </g>

      {/* 4. Developer on the Right (Standing and Pointing) */}
      <g transform="translate(295, 140)">
        {/* Legs (Dark blue) */}
        <rect x="10" y="36" width="5" height="22" fill="#1e3a8a" />
        <rect x="17" y="36" width="5" height="22" fill="#1e3a8a" />
        {/* Shoes */}
        <rect x="8" y="58" width="7" height="3" fill="#171717" />
        <rect x="17" y="58" width="7" height="3" fill="#171717" />

        {/* Body (Orange/Yellow Shirt) */}
        <rect x="8" y="12" width="16" height="24" fill="#f97316" />
        <rect x="10" y="10" width="12" height="26" fill="#f97316" />

        {/* Left Arm pointing to screen */}
        <rect x="-4" y="16" width="12" height="4" fill="#f9c49d" /> {/* Hand */}
        <rect x="0" y="14" width="8" height="6" fill="#f97316" /> {/* Sleeve */}

        {/* Right Arm down */}
        <rect x="22" y="18" width="4" height="10" fill="#f9c49d" />
        <rect x="20" y="14" width="4" height="8" fill="#f97316" />

        {/* Head & Hair */}
        <rect x="11" y="-2" width="10" height="12" fill="#f9c49d" /> {/* Skin */}
        <rect x="9" y="-6" width="14" height="8" fill="#171717" /> {/* Hair */}
        <rect x="10" y="-2" width="12" height="4" fill="#171717" />
      </g>

      {/* Landscape / Ground line */}
      <rect x="10" y="202" width="380" height="2" fill="#e9e0d6" />
      <rect x="80" y="200" width="240" height="2" fill="#e9e0d6" />
    </svg>
  );
}

// 13. Database Icon (Tech Stack Databases)
export function PixelDatabaseIcon({ size = 25, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={pixelArtStyle} className={className}>
      <ellipse cx="8" cy="4" rx="5" ry="2" fill="#94a3b8" />
      <ellipse cx="8" cy="4" rx="4" ry="1.2" fill="#cbd5e1" />
      
      <rect x="3" y="4" width="10" height="4" fill="#64748b" />
      <ellipse cx="8" cy="8" rx="5" ry="2" fill="#64748b" />
      <ellipse cx="8" cy="8" rx="4" ry="1.2" fill="#94a3b8" />
      
      <rect x="3" y="8" width="10" height="4" fill="#475569" />
      <ellipse cx="8" cy="12" rx="5" ry="2" fill="#475569" />
      <ellipse cx="8" cy="12" rx="4" ry="1.2" fill="#64748b" />

      <rect x="4" y="4" width="1" height="8" fill="#fff" opacity="0.25" />
      <rect x="11" y="4" width="1" height="8" fill="#1e2937" opacity="0.25" />
    </svg>
  );
}

// 14. DevOps Icon (Tech Stack DevOps)
export function PixelDevOpsIcon({ size = 25, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={pixelArtStyle} className={className}>
      <rect x="2" y="5" width="5" height="6" rx="2" fill="none" stroke="#22c55e" strokeWidth="2" />
      <rect x="9" y="5" width="5" height="6" rx="2" fill="none" stroke="#22c55e" strokeWidth="2" />
      <rect x="7" y="7" width="2" height="2" fill="#22c55e" />
      <rect x="6" y="6" width="1" height="1" fill="#15803d" />
      <rect x="9" y="9" width="1" height="1" fill="#15803d" />
    </svg>
  );
}

// 15. Retro Hero Window Card (mockup graphic)
export function HeroWindowCard() {
  return (
    <div className="hero-window-wrapper">
      {/* Floating pixel dots */}
      <div className="floating-dot red-dot-1" />
      <div className="floating-dot red-dot-2" />
      <div className="floating-dot red-dot-3" />
      <div className="floating-dot red-dot-4" />
      <div className="floating-dot peach-dot-1" />
      <div className="floating-dot peach-dot-2" />
      <div className="floating-dot peach-dot-3" />
      <div className="floating-dot peach-dot-4" />

      {/* Main card */}
      <div className="pixel-window">
        {/* Header Close btn */}
        <div className="window-header">
          <div className="window-close-btn">
            <span>×</span>
          </div>
        </div>

        {/* 24 Hours Badge */}
        <div className="window-badge">
          <span>24 HOURS</span>
        </div>

        {/* Text Area */}
        <div className="window-content">
          <div className="text-build">BUILD</div>
          <div className="text-future">THE FUTURE</div>
          
          <div className="window-divider" />
          
          <div className="text-ai-cloud">AI &times; CLOUD</div>
        </div>
      </div>
    </div>
  );
}
