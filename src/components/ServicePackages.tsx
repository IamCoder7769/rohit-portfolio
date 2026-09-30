import React from 'react';
import { motion } from 'motion/react';
import { Check, ShoppingCart, Sparkles, QrCode, Server } from 'lucide-react';

export const ServicePackages: React.FC = () => {
  const domains = [
    {
      id: 'workforce-crm-retail', category: 'Production Domain 01',
      title: 'Workforce, CRM & Retail Systems', icon: ShoppingCart,
      description: 'Enterprise operational portals, sales CRM engines, and self-checkout microservices with real-time sync.',
      features: [
        'Live attendance clock-in/out, multi-shift tracking & activity indicators',
        'Interactive DnD calendar follow-up matrix with bulk CSV lead ingestion',
        'Granular Role-Based Access Control (RBAC) securing distinct enterprise views',
        'Socket.IO real-time presence updates, instant alerts & hardware cart sync',
        'Prisma ORM transactional queries & centralized Redux state synchronization',
      ],
      projectRef: 'TimeOS, INF CRM & SkipQ (Live)',
    },
    {
      id: 'genai', category: 'Production Domain 02',
      title: 'Generative AI & Conversational RAG', icon: Sparkles,
      description: 'AI chat and context retrieval pipelines powered by Google Gemini and vector databases.',
      features: [
        'Google Gemini LLM integration for context-aware conversations',
        'Pinecone vector database semantic retrieval (RAG workflow)',
        'Low-latency socket streaming for conversational token delivery',
        'Stateless REST APIs with JWT refresh & Google OAuth 2.0',
        'AWS S3 scalable asset storage and responsive React UI',
      ],
      projectRef: 'NexTalk AI Chat & RAG',
    },
    {
      id: 'ecommerce', category: 'Production Domain 03',
      title: 'E-Commerce & Merchant Platforms', icon: QrCode,
      description: 'Full-stack e-commerce and merchant portals with payment gateways, logistics APIs, and loyalty systems.',
      features: [
        'Full e-commerce lifecycle: cart, wishlist, checkout, orders & auto-cancellations',
        'Razorpay & Stripe checkout gateways with webhook transaction verification',
        'Shiprocket API for dynamic real-time shipping calculation based on pincodes',
        'Promotional bundling engines & free-shipping eligibility thresholds',
        'Relational MySQL schema with Prisma ORM and Next.js SSR / ISR',
      ],
      projectRef: 'CarAuto Labs & Tring (Live)',
    },
    {
      id: 'microservices', category: 'Production Domain 04',
      title: 'Distributed Microservices & Queues', icon: Server,
      description: 'High-throughput microservices achieving sub-50ms latency with asynchronous event pipelines.',
      features: [
        'Node.js & TypeScript microservices communicating via gRPC',
        'RabbitMQ, BullMQ & Redis Pub/Sub for background jobs',
        'Kubernetes (K3s) orchestration with Horizontal Pod Autoscaling',
        'MongoDB database query optimization reducing execution time by ~40%',
        'Full observability stack with Prometheus, Grafana & Loki logging',
      ],
      projectRef: 'Qualibytes IT & Gsquare',
    },
  ];

  return (
    <section id="services" className="py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="space-y-1">
          <div className="text-xs font-bold uppercase tracking-wider text-[#ccc5b9] font-mono">From My Resume • Engineering Domains</div>
          <h2 className="text-2xl sm:text-3xl font-serif text-gray-900 tracking-tight">Domains &amp; Production Systems Delivered</h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-xl">Hands-on full-stack development across core enterprise domains, verified in live client and production deployments.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {domains.map((domain) => {
            const Icon = domain.icon;
            return (
              <motion.div
                key={domain.id}
                whileHover={{ y: -4, boxShadow: '0 16px 40px -8px rgba(0,0,0,0.12)' }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200 shadow-sm flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-[#ccc5b9] bg-white px-2.5 py-1 rounded-md border border-gray-200 uppercase">{domain.category}</span>
                    <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-[#ccc5b9]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 tracking-tight">{domain.title}</h3>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">{domain.description}</p>
                  </div>
                  <div className="space-y-2 pt-1">
                    {domain.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-gray-600">
                        <Check className="w-3.5 h-3.5 text-[#ccc5b9] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-mono">
                  <span className="text-gray-400">Verified in:</span>
                  <span className="font-bold text-gray-800">{domain.projectRef}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
