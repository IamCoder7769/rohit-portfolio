import React from 'react';
import {
  Code2,
  Cpu,
  Database,
  Globe,
  Layers,
  Radio,
  Server,
  Shield,
  Zap,
  Terminal,
  Sparkles,
  Activity,
  Cloud,
} from 'lucide-react';

interface TechBadge {
  name: string;
  icon: any;
  category: string;
  highlight?: boolean;
}

const TECH_ITEMS: TechBadge[] = [
  { name: 'Node.js Microservices', icon: Server, category: 'Backend', highlight: true },
  { name: 'TypeScript (Strict)', icon: Code2, category: 'Core', highlight: true },
  { name: 'React.js & Next.js', icon: Globe, category: 'Frontend', highlight: true },
  { name: 'Google Gemini & RAG', icon: Sparkles, category: 'AI', highlight: true },
  { name: 'Pinecone Vector DB', icon: Database, category: 'AI', highlight: true },
  { name: 'Kubernetes (K3s) & HPA', icon: Cloud, category: 'DevOps', highlight: true },
  { name: 'RabbitMQ & BullMQ', icon: Radio, category: 'Queues', highlight: true },
  { name: 'Redis Pub/Sub & Caching', icon: Zap, category: 'Data', highlight: true },
  { name: 'PostgreSQL & Drizzle ORM', icon: Database, category: 'Data' },
  { name: 'MongoDB Aggregations', icon: Database, category: 'Data' },
  { name: 'gRPC (Sub-50ms Latency)', icon: Cpu, category: 'Architecture', highlight: true },
  { name: 'Socket.IO Real-Time Sync', icon: Radio, category: 'WebSockets' },
  { name: 'Prometheus & Grafana', icon: Activity, category: 'Observability' },
  { name: 'RBAC / PBAC Authorization', icon: Shield, category: 'Security', highlight: true },
  { name: 'Docker & NGINX Ingress', icon: Terminal, category: 'Cloud' },
];

export const TechMarquee: React.FC = () => {
  // Duplicate list to create seamless infinite loop
  const marqueeItems = [...TECH_ITEMS, ...TECH_ITEMS];

  return (
    <div className="w-full py-4 bg-zinc-950 text-white overflow-hidden border-y border-zinc-800/80 relative">
      {/* Left/right fade gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

      <div className="flex items-center">
        <div className="animate-marquee flex items-center space-x-3 sm:space-x-4 pl-4">
          {marqueeItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-xl border text-xs font-mono transition-all shrink-0 cursor-default ${
                  item.highlight
                    ? 'bg-zinc-900 border-zinc-700 text-zinc-100 shadow-xs'
                    : 'bg-zinc-900/40 border-zinc-800/80 text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${item.highlight ? 'text-emerald-400' : 'text-zinc-400'}`} />
                <span className="font-medium tracking-tight">{item.name}</span>
                <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-zinc-800/80 text-zinc-400 font-sans">
                  {item.category}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
