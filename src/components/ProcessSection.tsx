import React from 'react';
import { motion } from 'motion/react';
import { Layers, Server, ShieldCheck, Database, Radio, Github, Download, ArrowUpRight, Sparkles, Cloud } from 'lucide-react';
import { CANDIDATE_PROFILE } from '../data/portfolioData';
import { triggerSubtleSparks } from '../utils/confetti';

interface ProcessSectionProps {
  onOpenResume?: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenResume }) => {
  const steps = [
    { num: '01', title: 'Frontend Architecture', icon: Layers,
      desc: 'Building responsive, scalable web interfaces and merchant portals with React.js, Next.js, Redux Toolkit, and atomic state handling.',
      tags: ['React.js', 'Next.js', 'Redux Toolkit', 'Tailwind CSS', 'React Query'] },
    { num: '02', title: 'Microservices & gRPC', icon: Server,
      desc: 'Engineering decoupled Node.js and TypeScript microservices communicating with gRPC to maintain sub-50ms inter-service latency.',
      tags: ['Node.js', 'Express.js', 'gRPC', 'Fastify', 'Sub-50ms RPC'] },
    { num: '03', title: 'Distributed Queues & Events', icon: Radio,
      desc: 'Asynchronous event architecture powered by RabbitMQ, BullMQ, and Redis Pub/Sub to process 10,000+ CSV batch imports without blocking.',
      tags: ['RabbitMQ', 'BullMQ', 'Redis Pub/Sub', 'Batch Jobs'] },
    { num: '04', title: 'Generative AI & Semantic RAG', icon: Sparkles,
      desc: 'Context-aware conversational pipelines integrating Google Gemini LLMs and Pinecone vector databases for semantic retrieval and response synthesis.',
      tags: ['Google Gemini', 'Pinecone Vector DB', 'RAG Pipelines', 'Embeddings'] },
    { num: '05', title: 'Databases & Performance', icon: Database,
      desc: 'Designing typed PostgreSQL schemas with Drizzle ORM and optimizing MongoDB aggregations to reduce query times by ~40%.',
      tags: ['PostgreSQL', 'Drizzle ORM', 'MongoDB Aggregations', 'Redis Caching'] },
    { num: '06', title: 'Kubernetes & Observability', icon: Cloud,
      desc: 'Container orchestration on Kubernetes (K3s) with Horizontal Pod Autoscaling (HPA), Prometheus metrics, Grafana dashboards, and Loki logs.',
      tags: ['Kubernetes (K3s)', 'Docker', 'Prometheus', 'Grafana', 'Loki'] },
  ];

  return (
    <section id="process" className="py-8 sm:py-14 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-8">
          <div className="space-y-1.5 max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-[#ccc5b9] font-mono">
              From My Resume • Core Competencies
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              Full-Stack Architecture &amp; Delivery Pillars
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              Hands-on engineering across all 6 core pillars of modern distributed systems, Generative AI, and production platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  whileHover={{ y: -4, boxShadow: '0 14px 36px -8px rgba(0,0,0,0.11)' }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-200 flex flex-col justify-between space-y-4 group cursor-default"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#ccc5b9] transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-gray-400 bg-white border border-gray-200 px-2.5 py-1 rounded-md">
                        Pillar {step.num}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-[#ccc5b9] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-gray-100 flex flex-wrap gap-1.5">
                    {step.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded text-[11px] bg-white text-gray-600 border border-gray-200 font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-xs text-gray-500 font-medium flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-[#ccc5b9]" />
              <span>Full software development lifecycle: clean code, microservices, containerization &amp; production support.</span>
            </p>
            <div className="flex items-center space-x-3">
              <a
                href={CANDIDATE_PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => triggerSubtleSparks(0.7, 0.7)}
                className="inline-flex items-center space-x-1.5 px-4 py-2 bg-gray-900 hover:bg-gray-700 text-white rounded-lg text-xs font-semibold shadow-sm transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub {CANDIDATE_PROFILE.githubHandle}</span>
                <ArrowUpRight className="w-3 h-3 ml-0.5" />
              </a>
              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center space-x-1.5 px-4 py-2 bg-white hover:bg-gray-50 text-gray-800 rounded-lg text-xs font-semibold border border-gray-200 shadow-sm transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-[#ccc5b9]" />
                  <span>Download Verified Resume</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
