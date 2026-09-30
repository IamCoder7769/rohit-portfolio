import React from 'react';
import {
  ShoppingCart,
  Clock,
  Sparkles,
  QrCode,
  Layers,
  Database,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Radio,
  Server,
  Terminal,
  Zap,
  Truck,
  CreditCard,
  Package,
  Users,
  Calendar,
  BarChart3,
  TrendingUp,
  FileSpreadsheet,
  MessageCircle,
  Search,
  MapPin,
  Car,
  FileText,
  Camera,
  Building2,
  Calculator,
  PieChart,
} from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectMockupProps {
  project: ProjectItem;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ project }) => {
  switch (project.id) {
    case 'investagon':
      return (
        <div className="w-full h-48 sm:h-56 bg-gradient-to-br from-zinc-950 via-slate-900 to-indigo-950 p-4 text-zinc-100 flex flex-col justify-between relative overflow-hidden select-none border-b border-zinc-800">
          {/* Top Bar */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-[11px] font-mono text-zinc-400 ml-2">investagon.com/en</span>
            </div>
            <span className="inline-flex items-center text-[10px] font-mono font-medium bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded border border-indigo-500/30">
              <Building2 className="w-3 h-3 mr-1 text-indigo-300" /> PropTech SaaS · FinTech
            </span>
          </div>

          {/* Center 3 Cards / FinTech Real Estate Modules */}
          <div className="grid grid-cols-3 gap-2 my-auto z-10">
            <div className="bg-zinc-900/85 p-2 rounded-lg border border-indigo-500/30 backdrop-blur-sm relative">
              <div className="absolute -top-1.5 -right-1.5 bg-indigo-500 text-[9px] font-bold text-white px-1.5 rounded-full">
                Live
              </div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] text-zinc-400 font-medium">Fin Calculations</span>
                <Calculator className="w-3.5 h-3.5 text-indigo-400" />
              </div>
              <div className="text-xs font-bold text-indigo-300">Yield &amp; Cash Flow</div>
              <div className="text-[9px] text-zinc-400 font-mono mt-1">Tax &amp; Asset Growth</div>
            </div>

            <div className="bg-zinc-900/85 p-2 rounded-lg border border-zinc-800 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] text-zinc-400 font-medium">Property Sales</span>
                <Building2 className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div className="text-xs font-bold text-zinc-100">Reservations &amp; Docs</div>
              <div className="text-[9px] text-emerald-400 font-mono mt-1">Availability Tracking</div>
            </div>

            <div className="bg-zinc-900/85 p-2 rounded-lg border border-zinc-800 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] text-zinc-400 font-medium">Partner Portal</span>
                <PieChart className="w-3.5 h-3.5 text-cyan-400" />
              </div>
              <div className="text-xs font-bold text-zinc-100">Commissions &amp; CRM</div>
              <div className="text-[9px] text-cyan-400 font-mono mt-1">Advisor Workflow</div>
            </div>
          </div>

          {/* Bottom stats banner */}
          <div className="flex items-center justify-between pt-2 border-t border-zinc-800 text-[11px] text-zinc-400 z-10 font-mono">
            <span className="flex items-center text-indigo-400">
              <Sparkles className="w-3.5 h-3.5 mr-1" /> Angular Reactive Forms &amp; REST APIs
            </span>
            <span className="text-zinc-400">Real-Estate Investment SaaS</span>
          </div>

          {/* Background glow */}
          <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-indigo-600/15 rounded-full blur-2xl pointer-events-none" />
        </div>
      );

    case 'blvd-connect':
      return (
        <div className="w-full h-48 sm:h-56 bg-gradient-to-br from-zinc-950 via-zinc-900 to-red-950 p-4 text-zinc-100 flex flex-col justify-between relative overflow-hidden select-none border-b border-zinc-800">
          {/* Top Bar */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-[11px] font-mono text-zinc-400 ml-2">blvdconnect.com/home</span>
            </div>
            <span className="inline-flex items-center text-[10px] font-mono font-medium bg-red-500/20 text-red-300 px-2 py-0.5 rounded border border-red-500/30">
              <Car className="w-3 h-3 mr-1 text-red-300" /> Angular · 5+ Portals
            </span>
          </div>

          {/* Center 3 Cards / Automotive Community Modules */}
          <div className="grid grid-cols-3 gap-2 my-auto z-10">
            <div className="bg-zinc-900/85 p-2 rounded-lg border border-red-500/30 backdrop-blur-sm relative">
              <div className="absolute -top-1.5 -right-1.5 bg-red-500 text-[9px] font-bold text-white px-1.5 rounded-full">
                Live
              </div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] text-zinc-400 font-medium">Auto Ecosystem</span>
                <Car className="w-3.5 h-3.5 text-red-400" />
              </div>
              <div className="text-xs font-bold text-red-300">Car &amp; Rentals</div>
              <div className="text-[9px] text-zinc-400 font-mono mt-1">Events &amp; Vendors</div>
            </div>

            <div className="bg-zinc-900/85 p-2 rounded-lg border border-zinc-800 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] text-zinc-400 font-medium">Media Uploads</span>
                <Camera className="w-3.5 h-3.5 text-amber-400" />
              </div>
              <div className="text-xs font-bold text-zinc-100">Gallery &amp; Video</div>
              <div className="text-[9px] text-amber-400 font-mono mt-1">PDF &amp; Portfolios</div>
            </div>

            <div className="bg-zinc-900/85 p-2 rounded-lg border border-zinc-800 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] text-zinc-400 font-medium">Architecture</span>
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
              </div>
              <div className="text-xs font-bold text-zinc-100">Modular Routing</div>
              <div className="text-[9px] text-cyan-400 font-mono mt-1">Reactive Forms</div>
            </div>
          </div>

          {/* Bottom stats banner */}
          <div className="flex items-center justify-between pt-2 border-t border-zinc-800 text-[11px] text-zinc-400 z-10 font-mono">
            <span className="flex items-center text-red-400">
              <Sparkles className="w-3.5 h-3.5 mr-1" /> Reusable Angular Components
            </span>
            <span className="text-zinc-400">Responsive Community Portal</span>
          </div>

          {/* Background glow */}
          <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-red-600/15 rounded-full blur-2xl pointer-events-none" />
        </div>
      );

    case 'horse-marketplace':
      return (
        <div className="w-full h-48 sm:h-56 bg-gradient-to-br from-zinc-950 via-slate-900 to-amber-950 p-4 text-zinc-100 flex flex-col justify-between relative overflow-hidden select-none border-b border-zinc-800">
          {/* Top Bar */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-[11px] font-mono text-zinc-400 ml-2">portal/classifieds</span>
            </div>
            <span className="inline-flex items-center text-[10px] font-mono font-medium bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">
              <Radio className="w-3 h-3 mr-1 text-amber-300 animate-pulse" /> Live Socket.IO Chat
            </span>
          </div>

          {/* Center 3 Cards / Classifieds & Discovery Flow */}
          <div className="grid grid-cols-3 gap-2 my-auto z-10">
            <div className="bg-zinc-900/85 p-2 rounded-lg border border-amber-500/30 backdrop-blur-sm relative">
              <div className="absolute -top-1.5 -right-1.5 bg-amber-500 text-[9px] font-bold text-black px-1.5 rounded-full">
                Verified
              </div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] text-zinc-400 font-medium">Listings &amp; Pedigree</span>
                <Package className="w-3.5 h-3.5 text-amber-400" />
              </div>
              <div className="text-xs font-bold text-amber-300">Owner Showcase</div>
              <div className="text-[9px] text-zinc-400 font-mono mt-1">Pedigree Records</div>
            </div>

            <div className="bg-zinc-900/85 p-2 rounded-lg border border-zinc-800 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] text-zinc-400 font-medium">Radius Discovery</span>
                <Search className="w-3.5 h-3.5 text-cyan-400" />
              </div>
              <div className="text-xs font-bold text-zinc-100">Saved Filters</div>
              <div className="text-[9px] text-cyan-400 font-mono mt-1">Geographic Search</div>
            </div>

            <div className="bg-zinc-900/85 p-2 rounded-lg border border-zinc-800 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] text-zinc-400 font-medium">Buyer-Seller</span>
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div className="text-xs font-bold text-zinc-100">Instant Messaging</div>
              <div className="text-[9px] text-emerald-400 font-mono mt-1">Direct Inquiries</div>
            </div>
          </div>

          {/* Bottom stats banner */}
          <div className="flex items-center justify-between pt-2 border-t border-zinc-800 text-[11px] text-zinc-400 z-10 font-mono">
            <span className="flex items-center text-amber-400">
              <Server className="w-3.5 h-3.5 mr-1" /> PHP &amp; WebSocket Server
            </span>
            <span className="text-zinc-400">Angular + MySQL</span>
          </div>

          {/* Background glow */}
          <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-amber-600/15 rounded-full blur-2xl pointer-events-none" />
        </div>
      );
    case 'inf-crm':
      return (
        <div className="w-full h-48 sm:h-56 bg-gradient-to-br from-zinc-950 via-slate-900 to-amber-950 p-4 text-zinc-100 flex flex-col justify-between relative overflow-hidden select-none border-b border-zinc-800">
          {/* Top Bar */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-[11px] font-mono text-zinc-400 ml-2">sales.infrcm.com/login</span>
            </div>
            <span className="inline-flex items-center text-[10px] font-mono font-medium bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">
              <Calendar className="w-3 h-3 mr-1 text-amber-300" /> DnD Calendar · Redux
            </span>
          </div>

          {/* Center 3 Cards / DnD Schedule Pipeline */}
          <div className="grid grid-cols-3 gap-2 my-auto z-10">
            <div className="bg-zinc-900/85 p-2 rounded-lg border border-amber-500/30 backdrop-blur-sm relative">
              <div className="absolute -top-1.5 -right-1.5 bg-amber-500 text-[9px] font-bold text-black px-1.5 rounded-full">
                Drag &amp; Drop
              </div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] text-zinc-400 font-medium">Follow-Up Matrix</span>
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
              </div>
              <div className="text-xs font-bold text-amber-300">DnD Calendar</div>
              <div className="text-[9px] text-zinc-400 font-mono mt-1">Instant Reschedule</div>
            </div>

            <div className="bg-zinc-900/85 p-2 rounded-lg border border-zinc-800 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] text-zinc-400 font-medium">Batch Data Intake</span>
                <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div className="text-xs font-bold text-zinc-100">Bulk CSV Ingestion</div>
              <div className="text-[9px] text-emerald-400 font-mono mt-1">Admin Approval Flow</div>
            </div>

            <div className="bg-zinc-900/85 p-2 rounded-lg border border-zinc-800 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] text-zinc-400 font-medium">Sales KPIs</span>
                <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
              </div>
              <div className="text-xs font-bold text-zinc-100">Live Pipelines</div>
              <div className="text-[9px] text-cyan-400 font-mono mt-1">Role-Restricted Financials</div>
            </div>
          </div>

          {/* Bottom stats banner */}
          <div className="flex items-center justify-between pt-2 border-t border-zinc-800 text-[11px] text-zinc-400 z-10 font-mono">
            <span className="flex items-center text-amber-400">
              <Layers className="w-3.5 h-3.5 mr-1" /> Centralized Redux
            </span>
            <span className="text-zinc-400">Laravel REST APIs + Token Refresh</span>
          </div>

          {/* Background glow */}
          <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-amber-600/15 rounded-full blur-2xl pointer-events-none" />
        </div>
      );
    case 'timeos':
      return (
        <div className="w-full h-48 sm:h-56 bg-gradient-to-br from-zinc-950 via-slate-900 to-emerald-950 p-4 text-zinc-100 flex flex-col justify-between relative overflow-hidden select-none border-b border-zinc-800">
          {/* Top Bar */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-[11px] font-mono text-zinc-400 ml-2">timeosbyinf.com/login</span>
            </div>
            <span className="inline-flex items-center text-[10px] font-mono font-medium bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">
              <Radio className="w-3 h-3 mr-1 text-emerald-300 animate-pulse" /> Socket.IO · Granular RBAC
            </span>
          </div>

          {/* Center 3 Cards */}
          <div className="grid grid-cols-3 gap-2 my-auto z-10">
            <div className="bg-zinc-900/85 p-2 rounded-lg border border-emerald-500/30 backdrop-blur-sm relative">
              <div className="absolute -top-1.5 -right-1.5 bg-emerald-500 text-[9px] font-bold text-black px-1.5 rounded-full">
                Active
              </div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] text-zinc-400 font-medium">Live Attendance</span>
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div className="text-xs font-bold text-emerald-300">Clock-In / Out</div>
              <div className="text-[9px] text-zinc-400 font-mono mt-1">Multi-Shift Tracking</div>
            </div>

            <div className="bg-zinc-900/85 p-2 rounded-lg border border-zinc-800 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] text-zinc-400 font-medium">Role Access (RBAC)</span>
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              </div>
              <div className="text-xs font-bold text-zinc-100">4-Tier Hierarchy</div>
              <div className="text-[9px] text-cyan-400 font-mono mt-1">Admin · HR · Staff</div>
            </div>

            <div className="bg-zinc-900/85 p-2 rounded-lg border border-zinc-800 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] text-zinc-400 font-medium">Broadcast &amp; Alerts</span>
                <Users className="w-3.5 h-3.5 text-amber-400" />
              </div>
              <div className="text-xs font-bold text-zinc-100">Live Presence</div>
              <div className="text-[9px] text-zinc-400 font-mono mt-1">Leave Approval Chains</div>
            </div>
          </div>

          {/* Bottom stats banner */}
          <div className="flex items-center justify-between pt-2 border-t border-zinc-800 text-[11px] text-zinc-400 z-10 font-mono">
            <span className="flex items-center text-emerald-400">
              <Database className="w-3.5 h-3.5 mr-1" /> MySQL + Prisma ORM
            </span>
            <span className="text-zinc-400">React + Vite + Redux</span>
          </div>

          {/* Background glow */}
          <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-emerald-600/15 rounded-full blur-2xl pointer-events-none" />
        </div>
      );

    case 'carauto':
      return (
        <div className="w-full h-48 sm:h-56 bg-gradient-to-br from-zinc-950 via-slate-900 to-blue-950 p-4 text-zinc-100 flex flex-col justify-between relative overflow-hidden select-none border-b border-zinc-800">
          {/* Top Bar */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-[11px] font-mono text-zinc-400 ml-2">carautolabs.com/shop</span>
            </div>
            <span className="inline-flex items-center text-[10px] font-mono font-medium bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-500/30">
              <CreditCard className="w-3 h-3 mr-1 text-blue-300" /> Razorpay · Shiprocket
            </span>
          </div>

          {/* Center 3 Cards */}
          <div className="grid grid-cols-3 gap-2 my-auto z-10">
            <div className="bg-zinc-900/85 p-2 rounded-lg border border-zinc-800 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] text-zinc-400 font-medium">E-Commerce Flow</span>
                <ShoppingCart className="w-3.5 h-3.5 text-blue-400" />
              </div>
              <div className="text-xs font-bold text-zinc-100">Cart &amp; Orders</div>
              <div className="text-[9px] text-blue-400 font-mono mt-1">Catalogue · Wishlist</div>
            </div>

            <div className="bg-zinc-900/85 p-2 rounded-lg border border-blue-500/30 backdrop-blur-sm relative">
              <div className="absolute -top-1.5 -right-1.5 bg-emerald-500 text-[9px] font-bold text-black px-1.5 rounded-full">
                Verified
              </div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] text-zinc-400 font-medium">Razorpay Webhooks</span>
                <CreditCard className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div className="text-xs font-bold text-emerald-300">Live Checkout</div>
              <div className="text-[9px] text-zinc-400 font-mono mt-1">Auto Refunds &amp; Sync</div>
            </div>

            <div className="bg-zinc-900/85 p-2 rounded-lg border border-zinc-800 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] text-zinc-400 font-medium">Shiprocket API</span>
                <Truck className="w-3.5 h-3.5 text-cyan-400" />
              </div>
              <div className="text-xs font-bold text-zinc-100">Live Pincode Rates</div>
              <div className="text-[9px] text-zinc-400 font-mono mt-1">Dimensional Weight</div>
            </div>
          </div>

          {/* Bottom stats banner */}
          <div className="flex items-center justify-between pt-2 border-t border-zinc-800 text-[11px] text-zinc-400 z-10 font-mono">
            <span className="flex items-center text-blue-400">
              <Database className="w-3.5 h-3.5 mr-1" /> MySQL + Prisma ORM
            </span>
            <span className="text-zinc-400">Next.js SSR + ISR</span>
          </div>

          {/* Background glow */}
          <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-blue-600/15 rounded-full blur-2xl pointer-events-none" />
        </div>
      );

    case 'skipq':
      return (
        <div className="w-full h-48 sm:h-56 bg-gradient-to-br from-zinc-950 via-slate-900 to-teal-950 p-4 text-zinc-100 flex flex-col justify-between relative overflow-hidden select-none border-b border-zinc-800">
          {/* Top Bar */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-[11px] font-mono text-zinc-400 ml-2">skipq.retail/kiosk-sync</span>
            </div>
            <span className="inline-flex items-center text-[10px] font-mono font-medium bg-teal-500/20 text-teal-300 px-2 py-0.5 rounded border border-teal-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-1.5" />
              K3s · Sub-50ms gRPC
            </span>
          </div>

          {/* Center Mockup UI Content */}
          <div className="grid grid-cols-3 gap-2 my-auto z-10">
            <div className="bg-zinc-900/85 p-2 rounded-lg border border-zinc-800 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] text-zinc-400 font-medium">Self-Checkout</span>
                <ShoppingCart className="w-3.5 h-3.5 text-teal-400" />
              </div>
              <div className="text-xs font-bold text-zinc-100">Live Cart Synced</div>
              <div className="text-[9px] text-teal-400 font-mono mt-1">Socket.IO Event Stream</div>
            </div>

            <div className="bg-zinc-900/85 p-2 rounded-lg border border-teal-500/30 backdrop-blur-sm relative">
              <div className="absolute -top-1.5 -right-1.5 bg-emerald-500 text-[9px] font-bold text-black px-1.5 rounded-full">
                10K Batch
              </div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] text-zinc-400 font-medium">RabbitMQ &amp; Bull</span>
                <Radio className="w-3.5 h-3.5 text-amber-400" />
              </div>
              <div className="text-xs font-bold text-emerald-300">CSV Worker Active</div>
              <div className="text-[9px] text-zinc-400 font-mono mt-1">Async Queue Processing</div>
            </div>

            <div className="bg-zinc-900/85 p-2 rounded-lg border border-zinc-800 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] text-zinc-400 font-medium">RBAC Gateway</span>
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div className="text-xs font-bold text-zinc-100">6 Roles · 30+ Perms</div>
              <div className="text-[9px] text-zinc-400 font-mono mt-1">Store-Level Auth</div>
            </div>
          </div>

          {/* Bottom stats banner */}
          <div className="flex items-center justify-between pt-2 border-t border-zinc-800 text-[11px] text-zinc-400 z-10 font-mono">
            <span className="flex items-center text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> Kubernetes K3s + OpenSearch
            </span>
            <span className="text-zinc-400">PostgreSQL + Redis</span>
          </div>

          {/* Background glow */}
          <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-teal-600/15 rounded-full blur-2xl pointer-events-none" />
        </div>
      );

    case 'nextalk':
      return (
        <div className="w-full h-48 sm:h-56 bg-gradient-to-br from-zinc-950 via-slate-900 to-indigo-950 p-4 text-zinc-100 flex flex-col justify-between relative overflow-hidden select-none border-b border-zinc-800">
          {/* Top Bar */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-[11px] font-mono text-zinc-400 ml-2">nextalk.ai/chat-rag</span>
            </div>
            <span className="inline-flex items-center text-[10px] font-medium bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded border border-indigo-500/30">
              <Sparkles className="w-3 h-3 mr-1 text-indigo-300 animate-spin" /> Gemini + Pinecone RAG
            </span>
          </div>

          {/* Center Chat & Vector preview */}
          <div className="bg-zinc-900/90 rounded-lg p-2.5 border border-zinc-800/90 my-auto z-10 shadow-lg space-y-2">
            <div className="flex items-center justify-between text-[10px] font-mono text-indigo-300 bg-indigo-950/40 px-2 py-1 rounded border border-indigo-500/20">
              <span>Vector Similarity Retrieval: Pinecone</span>
              <span className="text-emerald-400 font-bold">Cosine Score: 0.96</span>
            </div>

            <div className="space-y-1.5 text-[11px]">
              <div className="bg-zinc-800/80 p-1.5 rounded text-zinc-300 max-w-[85%]">
                User: &quot;Summarize our customer conversation logs and query history&quot;
              </div>
              <div className="bg-indigo-950/50 p-1.5 rounded text-indigo-200 border border-indigo-500/30 ml-auto max-w-[90%] flex items-center justify-between">
                <span>Gemini: Context-aware response synthesized with RAG</span>
                <span className="text-[9px] font-mono text-emerald-400">Streamed</span>
              </div>
            </div>
          </div>

          {/* Bottom stats banner */}
          <div className="flex items-center justify-between pt-2 border-t border-zinc-800 text-[11px] text-zinc-400 z-10 font-mono">
            <span className="text-indigo-400 flex items-center">
              <Zap className="w-3.5 h-3.5 mr-1 text-amber-400" /> React + Redux + Node/Express
            </span>
            <span className="text-zinc-500">AWS S3 + Firebase</span>
          </div>

          <div className="absolute -top-10 -left-10 w-36 h-36 bg-indigo-500/15 rounded-full blur-2xl pointer-events-none" />
        </div>
      );

    case 'tring':
    default:
      return (
        <div className="w-full h-48 sm:h-56 bg-gradient-to-br from-zinc-950 via-slate-900 to-amber-950 p-4 text-zinc-100 flex flex-col justify-between relative overflow-hidden select-none border-b border-zinc-800">
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-[11px] font-mono text-zinc-400 ml-2">tring.loyalty.app/merchant</span>
            </div>
            <span className="inline-flex items-center text-[10px] font-medium bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">
              <QrCode className="w-3 h-3 mr-1" /> Real-Time QR Stamps
            </span>
          </div>

          {/* Merchant Loyalty preview */}
          <div className="grid grid-cols-3 gap-2 my-auto z-10">
            <div className="bg-zinc-900/85 p-2 rounded border border-zinc-800 text-[10px]">
              <div className="text-zinc-400 font-medium">Merchant Branches</div>
              <div className="text-xs font-bold text-zinc-100 mt-0.5">Multi-Location</div>
              <div className="text-[9px] text-amber-400 font-mono mt-1">Google Maps API</div>
            </div>

            <div className="bg-zinc-900/85 p-2 rounded border border-amber-500/30 text-[10px]">
              <div className="text-zinc-400 font-medium">QR Reward Engine</div>
              <div className="text-xs font-bold text-amber-300 mt-0.5">Live Stamp Award</div>
              <div className="text-[9px] text-emerald-400 font-mono mt-1">Socket.IO Broadcast</div>
            </div>

            <div className="bg-zinc-900/85 p-2 rounded border border-zinc-800 text-[10px]">
              <div className="text-zinc-400 font-medium">Subscriptions</div>
              <div className="text-xs font-bold text-zinc-100 mt-0.5">Stripe Integrated</div>
              <div className="text-[9px] text-zinc-400 font-mono mt-1">Tier Billing Active</div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-zinc-800 text-[11px] text-zinc-400 z-10 font-mono">
            <span className="flex items-center text-zinc-300">
              <ShieldCheck className="w-3.5 h-3.5 mr-1 text-amber-400" /> Admin · Merchant · Employee RBAC
            </span>
            <span className="text-zinc-500">Next.js + Redux Toolkit</span>
          </div>

          <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-amber-600/15 rounded-full blur-2xl pointer-events-none" />
        </div>
      );
  }
};
