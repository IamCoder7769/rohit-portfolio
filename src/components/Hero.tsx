import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Github, FileText, Mail, MapPin, Phone, ArrowUpRight, Linkedin, ChevronLeft, ChevronRight } from 'lucide-react';
import { CANDIDATE_PROFILE } from '../data/portfolioData';
import { triggerConfetti, triggerSubtleSparks } from '../utils/confetti';

interface HeroProps {
  onOpenResume?: () => void;
}

interface CardData {
  label: string;
  title: string;
  color: string;
  items: string[];
  diagram: (c: string) => React.ReactNode;
}

const CARDS: CardData[] = [
  {
    label: 'Microservices',
    title: 'Distributed Architecture',
    color: '#539e43',
    items: ['Auth · Products · Cart · Events · Devices', 'gRPC sub-50ms inter-service calls', 'RabbitMQ + BullMQ async background jobs', 'Redis Pub/Sub for real-time event fanout'],
    diagram: (c) => (
      <svg viewBox="0 0 160 80" className="w-full h-full">
        {([['API GW', 18, 40], ['Auth', 78, 12], ['Cart', 78, 40], ['Events', 78, 68], ['DB', 142, 40]] as [string,number,number][]).map(([l,x,y],i) => (
          <g key={i}>
            <rect x={x-16} y={y-9} width="32" height="18" rx="3" fill={c+'22'} stroke={c} strokeWidth="1"/>
            <text x={x} y={y+4} textAnchor="middle" fontSize="6.5" fill={c} fontWeight="600">{l}</text>
          </g>
        ))}
        {([[34,40,62,12],[34,40,62,40],[34,40,62,68],[94,12,126,40],[94,40,126,40],[94,68,126,40]] as [number,number,number,number][]).map(([x1,y1,x2,y2],i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={c} strokeWidth="1" strokeDasharray="3,2" opacity="0.55"/>
        ))}
        <text x="80" y="78" textAnchor="middle" fontSize="5.5" fill={c} opacity="0.5">Independent scaling per service</text>
      </svg>
    ),
  },
  {
    label: 'Event-Driven Flow',
    title: 'RabbitMQ + BullMQ Pipeline',
    color: '#ff6600',
    items: ['Producer publishes to RabbitMQ exchange', 'Consumer workers process async jobs', 'BullMQ for scheduled & retry queues', 'Dead-letter queue for failed jobs'],
    diagram: (c) => (
      <svg viewBox="0 0 160 80" className="w-full h-full">
        <rect x="4" y="30" width="28" height="20" rx="3" fill={c+'22'} stroke={c} strokeWidth="1"/>
        <text x="18" y="43" textAnchor="middle" fontSize="6" fill={c} fontWeight="700">Producer</text>
        <rect x="62" y="20" width="36" height="16" rx="3" fill={c+'33'} stroke={c} strokeWidth="1"/>
        <text x="80" y="31" textAnchor="middle" fontSize="6" fill={c} fontWeight="700">Exchange</text>
        <rect x="62" y="44" width="36" height="16" rx="3" fill={c+'22'} stroke={c} strokeWidth="1"/>
        <text x="80" y="55" textAnchor="middle" fontSize="6" fill={c} fontWeight="700">Queue</text>
        {([['W1',128,14],['W2',128,40],['W3',128,66]] as [string,number,number][]).map(([l,x,y],i) => (
          <g key={i}>
            <rect x={x-14} y={y-9} width="28" height="18" rx="3" fill={c+'22'} stroke={c} strokeWidth="1"/>
            <text x={x} y={y+4} textAnchor="middle" fontSize="6" fill={c} fontWeight="600">{l}</text>
            <line x1={98} y1={52} x2={x-14} y2={y} stroke={c} strokeWidth="0.8" strokeDasharray="2,2" opacity="0.5"/>
          </g>
        ))}
        <line x1="32" y1="40" x2="62" y2="28" stroke={c} strokeWidth="1.2" opacity="0.7"/>
        <line x1="32" y1="40" x2="62" y2="52" stroke={c} strokeWidth="1.2" opacity="0.7"/>
        <text x="80" y="76" textAnchor="middle" fontSize="5.5" fill={c} opacity="0.5">Async decoupled processing</text>
      </svg>
    ),
  },
  {
    label: 'Kubernetes (K3s)',
    title: 'Container Orchestration',
    color: '#326ce5',
    items: ['K3s cluster with HPA auto-scaling', 'NGINX Ingress for centralized routing', 'Docker containerized microservices', 'Prometheus + Grafana observability'],
    diagram: (c) => (
      <svg viewBox="0 0 160 80" className="w-full h-full">
        <rect x="6" y="4" width="148" height="70" rx="7" fill={c+'0d'} stroke={c} strokeWidth="1" strokeDasharray="4,2"/>
        <text x="80" y="14" textAnchor="middle" fontSize="6.5" fill={c} fontWeight="700">K3s Cluster</text>
        <rect x="50" y="18" width="60" height="13" rx="3" fill={c+'33'} stroke={c} strokeWidth="1"/>
        <text x="80" y="28" textAnchor="middle" fontSize="6" fill={c} fontWeight="700">NGINX Ingress</text>
        {([['Auth',22,56],['Cart',55,56],['Events',90,56],['Notify',128,56]] as [string,number,number][]).map(([l,x,y],i) => (
          <g key={i}>
            <rect x={x-16} y={y-11} width="32" height="18" rx="3" fill={c+'33'} stroke={c} strokeWidth="1"/>
            <text x={x} y={y+2} textAnchor="middle" fontSize="5.5" fill={c} fontWeight="600">{l}</text>
            <line x1={x} y1={y-11} x2={x<80?68:92} y2={31} stroke={c} strokeWidth="0.8" opacity="0.4"/>
          </g>
        ))}
        <text x="80" y="76" textAnchor="middle" fontSize="5.5" fill={c} opacity="0.5">HPA scales pods on load</text>
      </svg>
    ),
  },
  {
    label: 'gRPC Communication',
    title: 'Inter-Service gRPC Calls',
    color: '#7c3aed',
    items: ['Protobuf binary serialization', 'Sub-50ms service-to-service latency', 'Bidirectional streaming support', 'Strongly typed service contracts'],
    diagram: (c) => (
      <svg viewBox="0 0 160 80" className="w-full h-full">
        {([['Auth Svc',28,20],['Cart Svc',28,60],['Product Svc',132,20],['Order Svc',132,60]] as [string,number,number][]).map(([l,x,y],i) => (
          <g key={i}>
            <rect x={x-22} y={y-10} width="44" height="20" rx="4" fill={c+'22'} stroke={c} strokeWidth="1"/>
            <text x={x} y={y+4} textAnchor="middle" fontSize="6" fill={c} fontWeight="600">{l}</text>
          </g>
        ))}
        <rect x="60" y="32" width="40" height="16" rx="4" fill={c+'33'} stroke={c} strokeWidth="1.2"/>
        <text x="80" y="43" textAnchor="middle" fontSize="6.5" fill={c} fontWeight="700">gRPC</text>
        {([[50,20,60,38],[50,60,60,42],[110,20,100,38],[110,60,100,42]] as [number,number,number,number][]).map(([x1,y1,x2,y2],i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={c} strokeWidth="1.2" opacity="0.7"/>
        ))}
        <text x="80" y="76" textAnchor="middle" fontSize="5.5" fill={c} opacity="0.5">Protobuf · sub-50ms latency</text>
      </svg>
    ),
  },
  {
    label: 'Real-Time',
    title: 'Socket.IO & Live Events',
    color: '#10b981',
    items: ['Socket.IO for cart & device sync', 'Live QR stamp & reward redemption', 'Manager broadcast alerts', 'Redis Pub/Sub multi-instance sync'],
    diagram: (c) => (
      <svg viewBox="0 0 160 80" className="w-full h-full">
        <circle cx="80" cy="38" r="15" fill={c+'22'} stroke={c} strokeWidth="1.5"/>
        <text x="80" y="42" textAnchor="middle" fontSize="6.5" fill={c} fontWeight="700">Server</text>
        {([['Client',18,14],['Client',142,14],['Device',18,64],['Mobile',142,64]] as [string,number,number][]).map(([l,x,y],i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="10" fill={c+'22'} stroke={c} strokeWidth="1"/>
            <text x={x} y={y+3} textAnchor="middle" fontSize="5.5" fill={c} fontWeight="600">{l}</text>
            <line x1={x+(x<80?10:-10)} y1={y+(y<38?5:-5)} x2={80+(x<80?-13:13)} y2={38+(y<38?-9:9)} stroke={c} strokeWidth="1" strokeDasharray="3,2" opacity="0.65"/>
          </g>
        ))}
        <circle cx="80" cy="70" r="6" fill={c+'33'} stroke={c} strokeWidth="1"/>
        <text x="80" y="73" textAnchor="middle" fontSize="5" fill={c} fontWeight="700">Redis</text>
        <line x1="80" y1="53" x2="80" y2="64" stroke={c} strokeWidth="1" strokeDasharray="2,2" opacity="0.5"/>
      </svg>
    ),
  },
  {
    label: 'Generative AI',
    title: 'RAG & LLM Pipeline',
    color: '#1a73e8',
    items: ['Google Gemini LLM for responses', 'Pinecone vector semantic search', 'Embed → Search → Generate flow', 'Context-aware personalized answers'],
    diagram: (c) => (
      <svg viewBox="0 0 160 80" className="w-full h-full">
        {([['Query',14,50],['Embed',50,50],['Pinecone',96,50],['Gemini',142,50]] as [string,number,number][]).map(([l,x,y],i) => (
          <g key={i}>
            <rect x={x-18} y={y-11} width="36" height="22" rx="4" fill={c+'22'} stroke={c} strokeWidth="1.2"/>
            <text x={x} y={y+4} textAnchor="middle" fontSize="6" fill={c} fontWeight="700">{l}</text>
          </g>
        ))}
        {([[32,50,32,50],[68,50,78,50],[114,50,124,50]] as [number,number,number,number][]).map(([x1,y1,x2,y2],i) => (
          <g key={i}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={c} strokeWidth="1.5" opacity="0.8"/>
            <polygon points={`${x2},${y2} ${x2-5},${y2-3} ${x2-5},${y2+3}`} fill={c} opacity="0.8"/>
          </g>
        ))}
        <path d="M96,39 Q96,20 142,20 Q142,39 142,39" fill="none" stroke={c} strokeWidth="1" strokeDasharray="3,2" opacity="0.45"/>
        <text x="120" y="16" textAnchor="middle" fontSize="5" fill={c} opacity="0.7">context</text>
        <text x="80" y="76" textAnchor="middle" fontSize="5.5" fill={c} opacity="0.5">RAG: Retrieve → Augment → Generate</text>
      </svg>
    ),
  },
  {
    label: 'Auth & Security',
    title: 'JWT · OAuth · RBAC',
    color: '#dc2626',
    items: ['JWT access + refresh token rotation', 'Google OAuth 2.0 federation', 'RBAC with 6 roles · 30+ permissions', 'Tenant & route-level authorization'],
    diagram: (c) => (
      <svg viewBox="0 0 160 80" className="w-full h-full">
        <rect x="4" y="30" width="28" height="20" rx="3" fill={c+'22'} stroke={c} strokeWidth="1"/>
        <text x="18" y="43" textAnchor="middle" fontSize="6" fill={c} fontWeight="700">Client</text>
        <rect x="64" y="10" width="32" height="16" rx="3" fill={c+'33'} stroke={c} strokeWidth="1"/>
        <text x="80" y="21" textAnchor="middle" fontSize="6" fill={c} fontWeight="700">Auth Svc</text>
        <rect x="64" y="54" width="32" height="16" rx="3" fill={c+'22'} stroke={c} strokeWidth="1"/>
        <text x="80" y="65" textAnchor="middle" fontSize="6" fill={c} fontWeight="700">RBAC</text>
        <rect x="126" y="30" width="28" height="20" rx="3" fill={c+'22'} stroke={c} strokeWidth="1"/>
        <text x="140" y="43" textAnchor="middle" fontSize="6" fill={c} fontWeight="700">Resource</text>
        <line x1="32" y1="40" x2="64" y2="18" stroke={c} strokeWidth="1.2" opacity="0.7"/>
        <line x1="32" y1="40" x2="64" y2="62" stroke={c} strokeWidth="1.2" opacity="0.7"/>
        <line x1="96" y1="18" x2="126" y2="38" stroke={c} strokeWidth="1" strokeDasharray="3,2" opacity="0.6"/>
        <line x1="96" y1="62" x2="126" y2="42" stroke={c} strokeWidth="1" strokeDasharray="3,2" opacity="0.6"/>
        <text x="80" y="76" textAnchor="middle" fontSize="5.5" fill={c} opacity="0.5">JWT · OAuth2 · RBAC/PBAC</text>
      </svg>
    ),
  },
  {
    label: 'Observability',
    title: 'Prometheus · Grafana · Loki',
    color: '#f59e0b',
    items: ['Prometheus scrapes all service metrics', 'Grafana dashboards for live visibility', 'Loki centralized log aggregation', 'Alerts on latency, errors & pod health'],
    diagram: (c) => (
      <svg viewBox="0 0 160 80" className="w-full h-full">
        {[28,45,35,55,42,60,38,50].map((h,i) => (
          <rect key={i} x={8+i*18} y={72-h} width="13" height={h} rx="2" fill={c+'33'} stroke={c} strokeWidth="1"/>
        ))}
        <polyline points="14,44 32,27 50,37 68,17 86,24 104,12 122,20 140,14" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        {([[14,44],[32,27],[50,37],[68,17],[86,24],[104,12],[122,20],[140,14]] as [number,number][]).map(([x,y],i) => (
          <circle key={i} cx={x} cy={y} r="2.5" fill={c}/>
        ))}
        <line x1="6" y1="72" x2="154" y2="72" stroke={c} strokeWidth="1" opacity="0.3"/>
        <text x="80" y="10" textAnchor="middle" fontSize="5.5" fill={c} opacity="0.6">Grafana · Prometheus · Loki</text>
      </svg>
    ),
  },
  {
    label: 'Database Layer',
    title: 'PostgreSQL · Redis · MongoDB',
    color: '#0891b2',
    items: ['PostgreSQL + Drizzle ORM for relational', 'MongoDB for document-based storage', 'Redis for caching & session store', 'Prisma ORM for type-safe queries'],
    diagram: (c) => (
      <svg viewBox="0 0 160 80" className="w-full h-full">
        <rect x="56" y="4" width="48" height="18" rx="4" fill={c+'22'} stroke={c} strokeWidth="1.2"/>
        <text x="80" y="16" textAnchor="middle" fontSize="6.5" fill={c} fontWeight="700">API Layer</text>
        {([['PostgreSQL',22,56],['Redis',80,56],['MongoDB',138,56]] as [string,number,number][]).map(([l,x,y],i) => (
          <g key={i}>
            <ellipse cx={x} cy={y} rx="20" ry="10" fill={c+'22'} stroke={c} strokeWidth="1"/>
            <ellipse cx={x} cy={y-4} rx="20" ry="5" fill={c+'33'} stroke={c} strokeWidth="1"/>
            <text x={x} y={y+3} textAnchor="middle" fontSize="5.5" fill={c} fontWeight="600">{l}</text>
            <line x1={x} y1={y-15} x2={x<80?68:x===80?80:92} y2={22} stroke={c} strokeWidth="1" strokeDasharray="3,2" opacity="0.55"/>
          </g>
        ))}
        <text x="80" y="76" textAnchor="middle" fontSize="5.5" fill={c} opacity="0.5">Drizzle · Prisma · Mongoose ORM</text>
      </svg>
    ),
  },
];

function getSlotStyle(offset: number): { x: number; y: number; scale: number; opacity: number; zIndex: number; blur: number } {
  switch (offset) {
    case  0: return { x:   0, y:  0, scale: 1,    opacity: 1,    zIndex: 5, blur: 0   };
    case  1: return { x:  62, y:  8, scale: 0.86, opacity: 0.55, zIndex: 4, blur: 0.5 };
    case  2: return { x: 104, y: 16, scale: 0.74, opacity: 0.28, zIndex: 3, blur: 1.5 };
    case -1: return { x: -62, y:  8, scale: 0.86, opacity: 0.55, zIndex: 4, blur: 0.5 };
    case -2: return { x:-104, y: 16, scale: 0.74, opacity: 0.28, zIndex: 3, blur: 1.5 };
    default: return { x: offset > 0 ? 160 : -160, y: 20, scale: 0.65, opacity: 0, zIndex: 1, blur: 3 };
  }
}

const CardCarousel: React.FC = () => {
  const [active, setActive] = useState(0);
  const total = CARDS.length;

  useEffect(() => {
    const t = setInterval(() => setActive(i => (i + 1) % total), 3800);
    return () => clearInterval(t);
  }, [total]);

  const go = (d: number) => setActive(i => (i + d + total) % total);
  const card = CARDS[active];

  return (
    <div className="relative select-none" style={{ height: '330px', overflow: 'visible' }}>

      {/* Render all 5 cards simultaneously, each animated to its slot */}
      {CARDS.map((c, idx) => {
        // offset: how far this card is from active (-2 to +2)
        let offset = idx - active;
        if (offset > total / 2)  offset -= total;
        if (offset < -total / 2) offset += total;

        const slot = getSlotStyle(offset);
        const isActive = offset === 0;

        return (
          <motion.div
            key={idx}
            className="absolute rounded-2xl border overflow-hidden cursor-pointer"
            style={{
              width: '74%',
              height: '278px',
              top: '16px',
              left: '13%',
              backgroundColor: 'var(--bg-card)',
              borderColor: isActive ? c.color : 'var(--border-main)',
              borderWidth: isActive ? '1.5px' : '1px',
              transformOrigin: 'center center',
              boxShadow: isActive
                ? '0 24px 48px -12px rgba(0,0,0,0.22)'
                : '0 4px 16px -4px rgba(0,0,0,0.1)',
            }}
            animate={{
              x: slot.x,
              y: slot.y,
              scale: slot.scale,
              opacity: slot.opacity,
              zIndex: slot.zIndex,
              filter: `blur(${slot.blur}px)`,
            }}
            transition={{ duration: 0.52, ease: [0.32, 0.72, 0, 1] }}
            onClick={() => { if (!isActive) go(offset > 0 ? 1 : -1); }}
          >
            {/* Accent bar */}
            <div className="h-1 w-full shrink-0" style={{ backgroundColor: c.color }} />

            {isActive ? (
              <div className="flex-1 flex flex-col px-4 pt-3 pb-2 gap-2 overflow-hidden" style={{ height: 'calc(100% - 4px)' }}>
                <div className="flex items-center justify-between shrink-0">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded-full" style={{ backgroundColor: c.color + '20', color: c.color }}>
                    {c.label}
                  </span>
                  <span className="text-[10px] font-mono" style={{ color: 'var(--text-muted)' }}>{active + 1} / {total}</span>
                </div>
                <h3 className="text-sm font-bold leading-tight shrink-0" style={{ color: 'var(--text-main)' }}>{c.title}</h3>
                <div className="rounded-lg overflow-hidden shrink-0" style={{ height: '80px', backgroundColor: c.color + '0d', border: `1px solid ${c.color}33` }}>
                  {c.diagram(c.color)}
                </div>
                <ul className="space-y-1">
                  {c.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-1.5 text-[10.5px] leading-snug" style={{ color: 'var(--text-body)' }}>
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: c.color }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-center gap-1.5 mt-auto pt-1">
                  {CARDS.map((_, i) => (
                    <button key={i} onClick={() => setActive(i)}
                      className="rounded-full transition-all duration-300"
                      style={{ width: i === active ? '18px' : '6px', height: '6px', backgroundColor: i === active ? c.color : 'var(--border-main)' }}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="p-4">
                <span className="text-[9px] font-mono font-bold uppercase tracking-wider" style={{ color: c.color }}>{c.label}</span>
                <p className="text-xs font-bold mt-1 leading-tight" style={{ color: 'var(--text-main)' }}>{c.title}</p>
              </div>
            )}
          </motion.div>
        );
      })}

      {/* Arrow buttons */}
      <button onClick={() => go(-1)} className="absolute z-10 w-7 h-7 rounded-full flex items-center justify-center border shadow-sm hover:scale-110 transition-all" style={{ left: '2px', bottom: '8px', backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-main)', color: 'var(--text-muted)' }}>
        <ChevronLeft className="w-3.5 h-3.5" />
      </button>
      <button onClick={() => go(1)} className="absolute z-10 w-7 h-7 rounded-full flex items-center justify-center border shadow-sm hover:scale-110 transition-all" style={{ right: '2px', bottom: '8px', backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-main)', color: 'var(--text-muted)' }}>
        <ChevronRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);

  const copyEmail = (e: React.MouseEvent) => {
    navigator.clipboard.writeText(CANDIDATE_PROFILE.email);
    setCopied(true);
    const rect = e.currentTarget.getBoundingClientRect();
    triggerConfetti((rect.left + rect.width / 2) / window.innerWidth, (rect.top + rect.height / 2) / window.innerHeight);
    setTimeout(() => setCopied(false), 2400);
  };

  const techIcons = [
    { name: 'Node.js', color: '#539e43' }, { name: 'TypeScript', color: '#3178c6' },
    { name: 'React.js', color: '#00d8ff' }, { name: 'Next.js', color: '#000000' },
    { name: 'PostgreSQL', color: '#336791' }, { name: 'MongoDB', color: '#47a248' },
    { name: 'Redis', color: '#dc382d' }, { name: 'RabbitMQ', color: '#ff6600' },
    { name: 'Kubernetes (K3s)', color: '#326ce5' }, { name: 'Docker', color: '#2496ed' },
    { name: 'Google Gemini', color: '#1a73e8' }, { name: 'Pinecone RAG', color: '#10b981' },
    { name: 'Socket.IO', color: '#010101' }, { name: 'Tailwind CSS', color: '#06b6d4' },
  ];

  return (
    <section id="hero" className="pt-6 pb-10 sm:pt-10 sm:pb-14 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">

          {/* Left Column */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-[#ccc5b9] bg-white px-3 py-1 rounded-full border border-gray-200">
                <span className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" />
                <span>FULL STACK DEVELOPER &amp; BACKEND ENGINEER</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-serif font-normal leading-[1.15] text-gray-900 tracking-tight">
                {CANDIDATE_PROFILE.name}
              </h1>
              <div className="text-lg sm:text-xl font-sans font-semibold text-[#ccc5b9]">
                TypeScript · React · Next.js · Node.js · Microservices · Generative AI
              </div>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-xl">
                3+ years of experience building scalable applications across Retail, E-commerce, Loyalty &amp; Merchant Management, and AI using distributed microservices, event-driven architectures, Kubernetes, and Google Gemini RAG.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 font-mono">
              <span className="flex items-center space-x-1 bg-white px-2.5 py-1 rounded-md border border-gray-200">
                <MapPin className="w-3 h-3 text-[#ccc5b9]" /><span>{CANDIDATE_PROFILE.location}</span>
              </span>
              <a href={`tel:${CANDIDATE_PROFILE.phone.replace(/[^+\d]/g, '')}`} className="flex items-center space-x-1 bg-white px-2.5 py-1 rounded-md border border-gray-200 hover:text-gray-900 transition-colors">
                <Phone className="w-3 h-3 text-[#ccc5b9]" /><span>{CANDIDATE_PROFILE.phone}</span>
              </a>
              <button onClick={copyEmail} className="flex items-center space-x-1 bg-white px-2.5 py-1 rounded-md border border-gray-200 hover:text-gray-900 transition-colors cursor-pointer">
                <Mail className="w-3 h-3 text-[#ccc5b9]" /><span>{copied ? 'Copied Email!' : CANDIDATE_PROFILE.email}</span>
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a href={`mailto:${CANDIDATE_PROFILE.email}?subject=Job%20Opportunity%20-%20Full%20Stack%20/%20Backend%20Engineer`} onClick={() => triggerSubtleSparks(0.3, 0.4)} className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#ccc5b9] hover:bg-[#b5aea8] text-gray-900 rounded-lg text-xs font-bold shadow-sm transition-all cursor-pointer">
                <Mail className="w-4 h-4" /><span>Contact Rohit</span><ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
              </a>
              {onOpenResume && (
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={onOpenResume} className="inline-flex items-center space-x-2 px-5 py-2.5 bg-white hover:bg-gray-50 text-gray-800 rounded-lg text-xs font-bold border border-gray-200 shadow-sm transition-all cursor-pointer">
                  <FileText className="w-4 h-4 text-[#ccc5b9]" /><span>View Verified Resume</span>
                </motion.button>
              )}
              <a href={CANDIDATE_PROFILE.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-1.5 px-4 py-2.5 bg-white hover:bg-gray-50 text-gray-600 rounded-lg text-xs font-semibold border border-gray-200 transition-colors">
                <Github className="w-3.5 h-3.5" /><span>GitHub</span>
              </a>
              <a href={CANDIDATE_PROFILE.linkedinUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-1.5 px-4 py-2.5 bg-white hover:bg-gray-50 text-gray-600 rounded-lg text-xs font-semibold border border-gray-200 transition-colors">
                <Linkedin className="w-3.5 h-3.5 text-[#0a66c2]" /><span>LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Card Carousel */}
          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="lg:col-span-5">
            <CardCarousel />
          </motion.div>
        </div>

        {/* Tech Strip */}
        <div className="pt-4 pb-2 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="text-xs font-bold uppercase tracking-wider text-gray-400 font-sans">Technical Stack From Resume</div>
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            {techIcons.map((tech) => (
              <div key={tech.name} className="flex items-center space-x-1.5 px-3 py-1.5 bg-white hover:bg-gray-50 rounded-full border border-gray-200 text-gray-600 text-xs font-semibold shadow-sm whitespace-nowrap transition-colors">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: tech.color }} />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
