import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Layers,
  Server,
  ShieldCheck,
  Radio,
  Database,
  Monitor,
  CheckCircle2,
  Cpu,
  ArrowRight,
  Terminal,
  Sparkles,
  Zap,
  Cloud,
  Activity,
} from 'lucide-react';
import { triggerSubtleSparks } from '../utils/confetti';

interface ArchitectureNode {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  icon: any;
  techs: string[];
  responsibilities: string[];
  productionPatterns: string;
  appliedProjects: string;
  color: string;
  borderColor: string;
  tagColor: string;
}

const ARCHITECTURE_NODES: ArchitectureNode[] = [
  {
    id: 'frontend',
    category: 'Layer 1: Client & Presentation',
    title: 'Modern Client Interfaces',
    subtitle: 'Next.js, React.js, Redux Toolkit & Tailwind CSS SPAs',
    icon: Monitor,
    techs: ['Next.js', 'React.js', 'TypeScript', 'Redux Toolkit', 'React Query', 'Tailwind CSS'],
    responsibilities: [
      'Responsive SPAs with client-side routing, skeleton loaders, and lazy-loaded modules',
      'Optimistic state updates via Redux Toolkit and React Query cache invalidation',
      'Multi-tenant merchant and admin interfaces with granular role views',
    ],
    productionPatterns: 'Component modularity, Relay/React Query data normalization, and strict TypeScript types.',
    appliedProjects: 'SkipQ Portals, NexTalk Chat, Tring Merchant Dashboards',
    color: 'from-blue-900/30 via-slate-900 to-zinc-950',
    borderColor: 'border-blue-500/40 hover:border-blue-400',
    tagColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  },
  {
    id: 'microservices',
    category: 'Layer 2: Microservices & API Gateway',
    title: 'Node.js, Express & gRPC Microservices',
    subtitle: 'High-throughput services with sub-50ms inter-service latency',
    icon: Server,
    techs: ['Node.js', 'TypeScript', 'Express.js', 'Fastify', 'gRPC', 'REST APIs', 'GraphQL'],
    responsibilities: [
      'Independent microservices for auth, catalog, cart, events, devices, and notifications',
      'High-speed RPC communication via gRPC achieving sub-50ms latency across internal clusters',
      'Centralized ingress gateway handling token verification and route delegation',
    ],
    productionPatterns: 'Microservice domain isolation, centralized error middleware, and stateless controller pipelines.',
    appliedProjects: 'Qualibytes IT Microservices, SkipQ Retail Engine',
    color: 'from-emerald-900/30 via-slate-900 to-zinc-950',
    borderColor: 'border-emerald-500/40 hover:border-emerald-400',
    tagColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  },
  {
    id: 'messaging',
    category: 'Layer 3: Messaging & Distributed Events',
    title: 'RabbitMQ, BullMQ & Redis Pub/Sub',
    subtitle: 'Asynchronous task queues & decoupled event-driven workflows',
    icon: Radio,
    techs: ['RabbitMQ', 'BullMQ', 'Redis Pub/Sub', 'Event-Driven Architecture', 'Socket.IO'],
    responsibilities: [
      'Asynchronous batch CSV ingestion processing 10,000+ product records without blocking APIs',
      'Decoupled inter-service event publishing for order processing and notifications',
      'Bi-directional real-time communication via Socket.IO for kiosk cart sync and live QR rewards',
    ],
    productionPatterns: 'Dead-letter queues, idempotent consumer workers, and Redis distributed lock guards.',
    appliedProjects: 'SkipQ 10K CSV Importer, Qualibytes IT Background Jobs, Tring QR Engine',
    color: 'from-amber-900/30 via-slate-900 to-zinc-950',
    borderColor: 'border-amber-500/40 hover:border-amber-400',
    tagColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  },
  {
    id: 'ai-rag',
    category: 'Layer 4: Generative AI & Semantic RAG',
    title: 'Google Gemini & Pinecone Vector Engine',
    subtitle: 'Context-aware conversational retrieval with vector search',
    icon: Sparkles,
    techs: ['Google Gemini LLM', 'Pinecone Vector DB', 'RAG Pipelines', 'Vector Embeddings'],
    responsibilities: [
      'Cosine similarity semantic retrieval fetching contextual conversational history before synthesis',
      'Prompt structuring and context injection delivering personalized LLM responses',
      'Low-latency token streaming delivering instant conversational feedback over sockets',
    ],
    productionPatterns: 'Top-k semantic ranking, vector chunk caching, and defensive fallback prompt guards.',
    appliedProjects: 'NexTalk AI Chat & Conversational Assistant',
    color: 'from-indigo-900/30 via-slate-900 to-zinc-950',
    borderColor: 'border-indigo-500/40 hover:border-indigo-400',
    tagColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
  },
  {
    id: 'database',
    category: 'Layer 5: Data Access & In-Memory Cache',
    title: 'PostgreSQL, Drizzle ORM, MongoDB & Redis',
    subtitle: 'High-speed caching & query optimization reducing latency by ~40%',
    icon: Database,
    techs: ['PostgreSQL', 'Drizzle ORM', 'MongoDB', 'Redis Caching', 'Aggregation Pipelines'],
    responsibilities: [
      'Drizzle ORM schema definitions ensuring strict compile-time SQL type safety',
      'Compound index tuning and MongoDB aggregation pipelines cutting query time by 40%',
      'Redis sub-millisecond in-memory caching for session tokens and live retail carts',
    ],
    productionPatterns: 'Connection pooling, ACID multi-document transactions, and read-replica offloading.',
    appliedProjects: 'Gsquare Database Optimization, SkipQ Catalog DB, Qualibytes Services',
    color: 'from-teal-900/30 via-slate-900 to-zinc-950',
    borderColor: 'border-teal-500/40 hover:border-teal-400',
    tagColor: 'bg-teal-500/20 text-teal-300 border-teal-500/30',
  },
  {
    id: 'devops',
    category: 'Layer 6: Orchestration & Observability',
    title: 'Kubernetes (K3s), Prometheus & Grafana',
    subtitle: 'Horizontal pod autoscaling, centralized Loki logging & metrics',
    icon: Cloud,
    techs: ['Kubernetes (K3s)', 'Docker', 'HPA', 'Prometheus', 'Grafana', 'Loki', 'CI/CD'],
    responsibilities: [
      'Dynamic workload scaling using Horizontal Pod Autoscaling (HPA) based on CPU/RAM saturation',
      'Real-time metrics scraping via Prometheus with operational dashboards in Grafana',
      'Centralized application log aggregation via Loki and automated CI/CD pipeline deployments',
    ],
    productionPatterns: 'Zero-downtime rolling updates, container resource constraints, and health probes.',
    appliedProjects: 'Qualibytes Production Infrastructure, SkipQ Cluster Mesh',
    color: 'from-rose-900/30 via-slate-900 to-zinc-950',
    borderColor: 'border-rose-500/40 hover:border-rose-400',
    tagColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
  },
];

export const SystemArchitectureVisualizer: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('frontend');

  const selectedNode =
    ARCHITECTURE_NODES.find((node) => node.id === selectedNodeId) || ARCHITECTURE_NODES[0];

  const NodeIcon = selectedNode.icon;

  const handleSelectNode = (id: string) => {
    setSelectedNodeId(id);
    triggerSubtleSparks(0.5, 0.6);
  };

  return (
    <section id="architecture" className="py-14 sm:py-20 px-4 sm:px-6 bg-zinc-950 text-zinc-100 rounded-3xl mx-2 sm:mx-6 my-10 shadow-2xl overflow-hidden relative border border-zinc-800">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-grid-slate opacity-20 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="max-w-6xl mx-auto space-y-10 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30">
              <Cpu className="w-3.5 h-3.5 text-emerald-400" />
              <span>Full-Stack &amp; Microservices Architecture</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Distributed System Blueprint
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-2xl">
              Production blueprints spanning client SPAs, gRPC microservices, asynchronous RabbitMQ queues, Google Gemini RAG, and Kubernetes (K3s). Select any layer below to inspect architecture patterns and live project deployments.
            </p>
          </div>

          <div className="hidden md:flex items-center space-x-3 text-xs font-mono text-zinc-400 bg-zinc-900/90 px-4 py-2 rounded-xl border border-zinc-800">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Interactive Architecture Map</span>
          </div>
        </div>

        {/* 6-Layer Architecture Pipeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
          {ARCHITECTURE_NODES.map((node, index) => {
            const Icon = node.icon;
            const isSelected = node.id === selectedNodeId;

            return (
              <motion.button
                key={node.id}
                onClick={() => handleSelectNode(node.id)}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className={`p-3.5 rounded-2xl border text-left flex flex-col justify-between transition-all relative overflow-hidden group cursor-pointer ${
                  isSelected
                    ? `${node.borderColor} bg-gradient-to-b ${node.color} ring-2 ring-emerald-400/30 shadow-lg`
                    : 'border-zinc-800/90 bg-zinc-900/60 hover:bg-zinc-900 hover:border-zinc-700'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-zinc-500 group-hover:text-zinc-400">
                      0{index + 1}
                    </span>
                    <div
                      className={`p-1.5 rounded-lg border ${
                        isSelected
                          ? 'bg-white/10 border-white/20 text-white'
                          : 'bg-zinc-800/80 border-zinc-700/60 text-zinc-400'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <div className="text-[11px] font-mono text-emerald-400 font-semibold truncate">
                      {node.category.split(':')[1] || node.category}
                    </div>
                    <div className="text-xs font-bold text-zinc-200 mt-0.5 leading-snug line-clamp-2">
                      {node.title}
                    </div>
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-zinc-800/60 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                  <span>{node.techs.length} technologies</span>
                  <ArrowRight
                    className={`w-3 h-3 transition-transform ${
                      isSelected ? 'text-emerald-400 translate-x-0.5' : 'text-zinc-600'
                    }`}
                  />
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Selected Layer Deep Dive Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedNode.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="bg-gradient-to-b from-zinc-900/95 to-zinc-950 rounded-2xl border border-zinc-800 p-6 sm:p-8 shadow-2xl relative overflow-hidden"
          >
            {/* Ambient inner glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              {/* Header of selected layer */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800">
                <div className="space-y-1">
                  <div className="inline-flex items-center space-x-2 text-xs font-mono font-medium text-emerald-400">
                    <NodeIcon className="w-4 h-4 text-emerald-400" />
                    <span>{selectedNode.category}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {selectedNode.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400">
                    {selectedNode.subtitle}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className={`text-xs font-mono px-3 py-1 rounded-full border ${selectedNode.tagColor}`}>
                    Production Verified
                  </span>
                  <span className="text-xs font-mono px-3 py-1 rounded-full border border-zinc-700 bg-zinc-800/80 text-zinc-300">
                    Applied in: {selectedNode.appliedProjects}
                  </span>
                </div>
              </div>

              {/* Grid with Responsibilities, Patterns, and Techs */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Left 7 cols: Responsibilities & Patterns */}
                <div className="md:col-span-7 space-y-5">
                  <div className="space-y-3">
                    <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold">
                      Core Responsibilities &amp; Workflows
                    </div>
                    <div className="space-y-2.5">
                      {selectedNode.responsibilities.map((resp, i) => (
                        <div key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-zinc-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 bg-zinc-900/90 rounded-xl border border-zinc-800 space-y-1.5">
                    <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 font-bold">
                      <Terminal className="w-3.5 h-3.5" />
                      <span>Production Implementation Standard</span>
                    </div>
                    <p className="text-xs text-zinc-300 font-mono leading-relaxed">
                      {selectedNode.productionPatterns}
                    </p>
                  </div>
                </div>

                {/* Right 5 cols: Technologies Used */}
                <div className="md:col-span-5 space-y-4">
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold">
                    Technologies &amp; Libraries
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {selectedNode.techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-zinc-900 border border-zinc-700/80 rounded-lg text-xs font-mono text-zinc-200 shadow-2xs hover:border-emerald-500/40 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-zinc-800 text-xs font-mono text-zinc-400 flex items-center justify-between">
                    <span>Applied to:</span>
                    <span className="text-zinc-200 font-semibold">{selectedNode.appliedProjects}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
