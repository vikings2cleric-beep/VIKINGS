import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  Swords, 
  Users, 
  Trophy, 
  MessageSquare, 
  Calendar, 
  Target, 
  ChevronRight, 
  Menu,
  X,
  Skull,
  Award,
  Crown
} from 'lucide-react';

const DISCORD_URL = "#discord";
const APPLY_URL = "#apply";

// --- Components ---

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? 'bg-brand-charcoal/90 backdrop-blur-md border-white/10 py-4' : 'bg-transparent border-transparent py-6'}`}>
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="text-accent-ice w-8 h-8" />
          <span className="font-display font-bold text-2xl tracking-widest text-white uppercase">Vikings</span>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm font-medium text-gray-300 hover:text-white uppercase tracking-wider transition-colors">Identity</a>
          <a href="#offerings" className="text-sm font-medium text-gray-300 hover:text-white uppercase tracking-wider transition-colors">Progression</a>
          <a href="#requirements" className="text-sm font-medium text-gray-300 hover:text-white uppercase tracking-wider transition-colors">Rules</a>
          <a href="#join" className="text-sm font-medium text-gray-300 hover:text-white uppercase tracking-wider transition-colors">How to Join</a>
          <a href={APPLY_URL} className="bg-accent-blood hover:bg-red-700 text-white px-6 py-2 rounded font-display font-bold uppercase tracking-wider transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(220,38,38,0.4)]">
            Apply Now
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-charcoal border-b border-white/10 flex flex-col items-center py-6 gap-6 md:hidden shadow-2xl"
          >
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-white uppercase tracking-widest">Identity</a>
            <a href="#offerings" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-white uppercase tracking-widest">Progression</a>
            <a href="#requirements" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-white uppercase tracking-widest">Rules</a>
            <a href={APPLY_URL} onClick={() => setMobileMenuOpen(false)} className="bg-accent-blood text-white px-8 py-3 rounded font-display font-bold uppercase tracking-wider w-11/12 text-center">
              Apply Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

const fadeInOut = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

// --- Sections ---

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax-like feeling */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542228262-3d663b306a53?q=80&w=2071&auto=format&fit=crop" 
          alt="Dark snowy mountain peaks" 
          className="w-full h-full object-cover object-bottom"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/80 to-brand-blue/60 mixing-blend-multiply"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-ice/10 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-5xl text-center mt-20">
        <motion.div initial="hidden" animate="visible" variants={fadeInOut} className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-ice/30 bg-accent-ice/10 text-accent-ice text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-accent-ice animate-pulse"></span>
            Recruitment Open: Rank 1 Server
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white uppercase tracking-tighter leading-none text-shadow-xl">
            Conquer <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-200 to-gray-500">Without</span> <br className="hidden md:block" /> Compromise
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
            We are <span className="font-bold text-white">VIKINGS</span>. An elite, hyper-competitive collective focused on server dominance, progression raiding, and ruthless PvP. No drama. Just results.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <a href={APPLY_URL} className="w-full sm:w-auto px-8 py-4 bg-accent-blood hover:bg-red-700 text-white font-display font-bold uppercase tracking-wider rounded transition-all transform hover:-translate-y-1 shadow-[0_10px_20px_rgba(220,38,38,0.3)] flex items-center justify-center gap-2">
              <Swords className="w-5 h-5" /> Apply Now
            </a>
            <a href={DISCORD_URL} className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/20 font-display font-bold uppercase tracking-wider rounded transition-all backdrop-blur-sm flex items-center justify-center gap-2">
              <MessageSquare className="w-5 h-5" /> Join Discord
            </a>
          </div>
          
          {/* Social Proof Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 border-t border-white/10 pt-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-white">150+</div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-accent-ice">Rank 1</div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Server Progression</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-white">4</div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Weekly Raids</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-accent-gold">99%</div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Clear Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Identity() {
  return (
    <section id="about" className="py-24 bg-brand-charcoal border-b border-white/5 relative">
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-5 pointer-events-none transform translate-x-1/4">
        <Shield className="w-full h-full" />
      </div>
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInOut} className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-tight mb-6">Honor Through <span className="text-accent-blood">Blood</span></h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              VIKINGS isn't just a tag above your head. It's a commitment to excellence. We were forged in the fires of hardcore progression and built on the foundation of unbreakable community.
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              We look for players who value their time, respect their team, and always push to be the absolute best in their class mechanics.
            </p>
            
            <ul className="space-y-4">
              {[
                { icon: Crown, text: "Organized, transparent leadership" },
                { icon: Calendar, text: "Scheduled and structured progression events" },
                { icon: Target, text: "Data-driven competitive mindset" },
                { icon: Users, text: "Toxicity-free, tight-knit adult community" }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-white font-medium">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent-ice">
                    <item.icon className="w-5 h-5" />
                  </div>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden border border-white/10 shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=1968&auto=format&fit=crop" 
                alt="Warrior identity" 
                className="w-full h-full object-cover grayscale opacity-60 mix-blend-screen"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent"></div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-8 -left-8 bg-brand-charcoal border border-white/10 rounded-lg p-6 shadow-2xl backdrop-blur-md hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent-gold/20 rounded-full flex items-center justify-center text-accent-gold">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl font-display font-bold text-white uppercase">Est. 2018</div>
                  <div className="text-sm font-medium text-gray-400">Multiple Realm Firsts</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Offerings() {
  const offerings = [
    {
      title: "Progression PvE",
      desc: "Speed clears, hard modes, and world first races. We parse heavy and require optimal gear setups.",
      icon: Skull,
      color: "text-accent-blood",
      bg: "bg-accent-blood/10"
    },
    {
      title: "Dominant PvP",
      desc: "Node wars, arena ranking pushes, and open-world domination. Coordinated shot-calling only.",
      icon: Swords,
      color: "text-accent-gold",
      bg: "bg-accent-gold/10"
    },
    {
      title: "Strong Network",
      desc: "Active voice comms, alt-runs, crafting networks, and out-of-game community activities.",
      icon: Shield,
      color: "text-accent-ice",
      bg: "bg-accent-ice/10"
    }
  ];

  return (
    <section id="offerings" className="py-24 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInOut} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-tight mb-4">What We Offer</h2>
          <p className="text-gray-400 text-lg">We provide an environment where top-tier players can thrive without carrying dead weight.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {offerings.map((off, i) => (
            <motion.div 
              key={i}
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-50px" }} 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }
              }}
              className="bg-brand-charcoal border border-white/5 rounded-xl p-8 hover:border-white/20 transition-all hover:-translate-y-2 group"
            >
              <div className={`w-14 h-14 ${off.bg} ${off.color} rounded-lg flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform`}>
                <off.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white uppercase mb-3">{off.title}</h3>
              <p className="text-gray-400 leading-relaxed">{off.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Progression() {
  return (
    <section className="py-24 bg-brand-charcoal overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInOut} className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-tight mb-4">Current Progression</h2>
              <p className="text-gray-400 text-lg">We don't just clear content; we farm it. Our expectations for raid execution are absolute.</p>
            </div>

            <div className="space-y-6">
              {[
                { name: "Icecrown Citadel (Heroic)", percent: 100, status: "Farmed" },
                { name: "Obsidian Sanctum", percent: 100, status: "Farmed" },
                { name: "Ulduar (Algalon)", percent: 100, status: "Farmed" },
                { name: "New Raid Tier: Abyss", percent: 65, status: "Progression" },
              ].map((raid, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm uppercase tracking-wide font-bold mb-2">
                    <span className="text-white">{raid.name}</span>
                    <span className={raid.percent === 100 ? "text-accent-gold" : "text-accent-ice"}>{raid.status}</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${raid.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className={`h-full ${raid.percent === 100 ? 'bg-accent-gold' : 'bg-accent-ice'}`}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>

            <a href={APPLY_URL} className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest hover:text-accent-blood transition-colors group">
              View All Logs <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-accent-ice/5 blur-3xl rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=1974&auto=format&fit=crop" 
              alt="Raid environment" 
              className="relative z-10 w-full rounded-xl border border-white/10 shadow-2xl object-cover aspect-video grayscale opacity-80"
              referrerPolicy="no-referrer"
            />
            {/* Overlay badge */}
            <div className="absolute top-4 right-4 z-20 bg-brand-charcoal/90 backdrop-blur-sm border border-white/10 px-4 py-2 rounded flex items-center gap-2 shadow-xl">
              <Award className="w-5 h-5 text-accent-gold" />
              <span className="text-white font-bold font-display uppercase tracking-wider text-sm">Server First</span>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

function Requirements() {
  const reqs = [
    { title: "Attendance", detail: "90% mandatory attendance for main raid days (Tues, Thurs, Sun 8PM-11PM EST)." },
    { title: "Optimization", detail: "Max level, pre-BiS minimum, fully enchanted, full consumables required for every run." },
    { title: "Knowledge", detail: "Must research encounters before stepping into the raid. Do not learn on our time." },
    { title: "Attitude", detail: "Thick skin required. Constructive criticism will be given. Toxicity will be kicked." },
    { title: "Communication", detail: "Discord and a working microphone are strictly required. Ability to listen to calls." }
  ];

  return (
    <section id="requirements" className="py-24 bg-[#0a0a0a] border-y border-white/5">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInOut} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-tight mb-4">Minimum <span className="text-accent-blood">Requirements</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">We don't bend rules. If you cannot meet these standards, do not waste our time or yours.</p>
        </motion.div>

        <div className="space-y-4">
          {reqs.map((req, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex bg-brand-charcoal border border-white/5 rounded-lg overflow-hidden group hover:border-white/20 transition-colors"
            >
              <div className="w-16 flex-shrink-0 bg-white/5 flex items-center justify-center font-display font-bold text-2xl text-gray-500 group-hover:text-white group-hover:bg-accent-blood/20 transition-all border-r border-white/5">
                0{i + 1}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-white uppercase mb-2 group-hover:text-accent-blood transition-colors">{req.title}</h3>
                <p className="text-gray-400">{req.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    {
      quote: "Joined as a trial, got pushed to perform at my absolute best. The organization here is unparalleled.",
      author: "Valkyrie",
      role: "Class Leader / Healer"
    },
    {
      quote: "Zero drama, pure progression. If you want to log in and kill bosses efficiently, this is the only guild on the server.",
      author: "Bloodfury",
      role: "Main Tank"
    },
    {
      quote: "The PvP shotcalling is insane. We constantly punch above our weight class and hold the best farm spots.",
      author: "Shadowstep",
      role: "Core Raider"
    }
  ];

  return (
    <section className="py-24 bg-brand-charcoal relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-center text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-tight mb-16">The Brotherhood</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <motion.div 
              key={i}
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1, transition: { delay: i * 0.15 } }
              }}
              className="bg-[#0f0f0f] p-8 border border-white/10 rounded-xl relative"
            >
              <div className="text-accent-ice text-6xl font-serif absolute top-4 left-4 opacity-20">"</div>
              <p className="text-gray-300 italic relative z-10 mb-8 pt-4">"{rev.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20 text-xl font-bold text-white">
                  {rev.author.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-bold uppercase tracking-wider">{rev.author}</div>
                  <div className="text-accent-gold text-xs uppercase tracking-widest font-bold">{rev.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowToJoin() {
  const steps = [
    { num: "1", title: "Join Discord", desc: "Jump into our server and read the #guild-rules channel to ensure we're a fit." },
    { num: "2", title: "Submit App", desc: "Fill out the formal application with your logs, spec, and availability." },
    { num: "3", title: "Trial Period", desc: "A 2-week trial evaluating attendance, performance, and cultural fit." }
  ];

  return (
    <section id="join" className="py-32 relative bg-[#050505]">
      {/* Background visual */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInOut}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-tight mb-4">Path to <span className="text-accent-ice">Glory</span></h2>
            <p className="text-gray-400 text-lg">Follow the steps below to begin your initiation into VIKINGS.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line desktop */}
            <div className="hidden md:block absolute top-[40px] left-10 right-10 h-[2px] bg-white/10 z-0"></div>

            {steps.map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-brand-charcoal border-4 border-accent-ice flex items-center justify-center text-3xl font-display font-bold text-white mb-6 shadow-[0_0_20px_rgba(0,212,255,0.3)]">
                  {step.num}
                </div>
                <h3 className="text-2xl font-display font-bold text-white uppercase mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
                {i === 0 && (
                  <a href={DISCORD_URL} className="mt-6 px-6 py-2 bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold rounded flex items-center gap-2 transition-colors">
                    <MessageSquare size={18} /> Connect Discord
                  </a>
                )}
                {i === 1 && (
                  <a href={APPLY_URL} className="mt-6 px-6 py-2 bg-transparent border border-white hover:bg-white hover:text-black text-white font-bold rounded uppercase tracking-wider transition-colors">
                    Open Form
                  </a>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-32 bg-brand-charcoal relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1542385262-cdf06b2f483c?q=80&w=2070&auto=format&fit=crop" 
          alt="Dark landscape" 
          className="w-full h-full object-cover grayscale opacity-20 mix-blend-screen" 
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000] via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-accent-blood/5 mix-blend-overlay"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInOut}>
          <Shield className="w-20 h-20 text-accent-blood mx-auto mb-8" />
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white uppercase tracking-tighter mb-6 text-shadow-xl">
            Join the Raid.
            <br />
            Earn Your Place.
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-medium">
            We are currently looking for exceptional Healers and Ranged DPS. All exceptional players considered regardless of recruitment status.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href={APPLY_URL} className="w-full sm:w-auto px-10 py-5 bg-accent-blood hover:bg-red-700 text-white font-display font-bold uppercase tracking-widest text-lg rounded transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(220,38,38,0.5)]">
              Submit Application
            </a>
            <a href={DISCORD_URL} className="w-full sm:w-auto px-10 py-5 bg-[#5865F2]/20 hover:bg-[#5865F2]/40 text-white font-display font-bold uppercase tracking-widest text-lg rounded border border-[#5865F2]/50 transition-all backdrop-blur-md">
              Enter Discord Server
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/10 text-center md:text-left">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Shield className="text-gray-500 w-6 h-6" />
          <span className="font-display font-bold text-xl tracking-widest text-white uppercase">Vikings <span className="text-gray-600 font-normal">| NA-East</span></span>
        </div>
        
        <div className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} VIKINGS Guild. Reaching greatness since 2018. Not affiliated with any official game studio.
        </div>

        <div className="flex items-center gap-6">
          <a href={DISCORD_URL} className="text-gray-400 hover:text-white transition-colors">Discord</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitch</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">YouTube</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="bg-brand-charcoal min-h-screen text-gray-200 selection:bg-accent-blood/30 selection:text-white font-sans overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <Identity />
        <Offerings />
        <Progression />
        <Requirements />
        <Testimonials />
        <HowToJoin />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

