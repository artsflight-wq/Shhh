import { Link } from 'wouter';
import { ArrowLeft, Scale, Shield, Users, Lock, FileText, AlertTriangle, ChevronRight, BookOpen, Eye, Database, UserCheck, MessageSquare } from 'lucide-react';
import { useState, useEffect } from 'react';

const sections = [
  { id: 'guidelines', label: 'Community Guidelines', icon: Users },
  { id: 'source-code', label: 'Source Code', icon: Lock },
  { id: 'bot-usage', label: 'Bot Usage', icon: Shield },
  { id: 'community', label: 'Community', icon: MessageSquare },
  { id: 'privacy', label: 'Privacy Policy', icon: Eye },
];

export default function ToS() {
  const [activeSection, setActiveSection] = useState('guidelines');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    if (typeof window === 'undefined') return;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Subtle gradient background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-[96px]" />
      </div>

      {/* Back button */}
      <div className="fixed top-6 left-6 z-50">
        <Link href="/">
          <span className="flex items-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-200 text-sm font-medium cursor-pointer group" data-testid="link-back-home">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Back
          </span>
        </Link>
      </div>

      {/* Floating navigation sidebar */}
      <nav className="hidden lg:block fixed left-6 top-1/2 -translate-y-1/2 z-40">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-2 space-y-1">
          {sections.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeSection === id 
                  ? 'bg-primary/20 text-primary border border-primary/30' 
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
              data-testid={`nav-${id}`}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              <span className="whitespace-nowrap">{label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Main content */}
      <main className="relative max-w-4xl mx-auto px-6 py-24 lg:ml-64">
        {/* Header */}
        <header className="mb-16">
          <div className="flex items-center gap-3 text-primary/80 text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            <span>Legal Documentation</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight" data-testid="heading-tos">
            Terms of Service
          </h1>
          <p className="text-white/50 text-lg">Last updated November 25, 2025</p>
        </header>

        {/* Quick navigation for mobile */}
        <div className="lg:hidden mb-12 overflow-x-auto pb-2">
          <div className="flex gap-2">
            {sections.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeSection === id 
                    ? 'bg-primary text-white' 
                    : 'bg-white/5 text-white/60 hover:bg-white/10'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Community Guidelines */}
        <section id="guidelines" className="mb-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 bg-primary/10 rounded-xl">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold">Community Guidelines</h2>
          </div>

          <p className="text-white/70 text-lg leading-relaxed mb-10">
            These guidelines ensure everyone can express themselves and find community without compromising safety or well-being.
          </p>

          {/* Respect Each Other */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-white/90 mb-6 flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-primary" />
              Section 1: Respect Each Other
            </h3>

            <div className="space-y-4">
              <div className="bg-white/[0.03] border border-white/5 rounded-xl p-5 hover:border-white/10 transition-colors">
                <h4 className="font-semibold text-white mb-2">Harassment and Bullying</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  Do not engage in targeted harassment, bullying campaigns, coordinate harassment, make repeated unwanted contact, spread rumors, publicly mock members, or make targeted personal attacks.
                </p>
              </div>

              <div className="bg-white/[0.03] border border-white/5 rounded-xl p-5 hover:border-white/10 transition-colors">
                <h4 className="font-semibold text-white mb-2">Threats and Violence</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  Do not make threats against individuals or groups, threats of violence or illegal action, encourage harm, share plans to commit violence, glorify violence, or issue death/rape/assault threats.
                </p>
              </div>

              <div className="bg-white/[0.03] border border-white/5 rounded-xl p-5 hover:border-white/10 transition-colors">
                <h4 className="font-semibold text-white mb-2">Doxxing (Personal Information)</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  Do not share someone's personal information without consent, including addresses, phone numbers, real names, workplace, school, financial information, or social media accounts.
                </p>
              </div>

              <div className="bg-white/[0.03] border border-white/5 rounded-xl p-5 hover:border-white/10 transition-colors">
                <h4 className="font-semibold text-white mb-2">Hate Speech and Hateful Conduct</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  Do not use hate speech targeting race, ethnicity, national origin, religion, sexual orientation, gender identity, disability, health status, or political beliefs. Avoid slurs, dehumanizing language, hate symbols, or denial of historical atrocities.
                </p>
              </div>

              <div className="bg-white/[0.03] border border-white/5 rounded-xl p-5 hover:border-white/10 transition-colors">
                <h4 className="font-semibold text-white mb-2">Violent Extremism</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  Do not promote, coordinate, or participate in violent extremism, share manifestos from violent groups, glorify violence, encourage extremist ideology, or recruit for extremist causes.
                </p>
              </div>

              {/* CSAM Warning */}
              <div className="bg-red-500/10 border-2 border-red-500/30 rounded-xl p-6">
                <div className="flex gap-4">
                  <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-red-400 mb-2">Child Sexual Abuse Material (CSAM)</h4>
                    <p className="text-white/70 text-sm leading-relaxed mb-3">
                      Absolutely prohibited with zero tolerance. Any CSAM (real, fictional, or AI-generated), grooming behavior toward minors, or solicitation/distribution of such material.
                    </p>
                    <p className="text-red-400/80 text-sm font-medium">
                      We report all suspected CSAM to the National Center for Missing & Exploited Children and law enforcement immediately.
                    </p>
                  </div>
                </div>
              </div>

              {/* Teen Safety */}
              <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6">
                <div className="flex gap-4">
                  <Shield className="w-6 h-6 text-orange-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-orange-400 mb-3">Teen and Child Safety</h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="text-white font-medium mb-1">If you are under 18:</p>
                        <p className="text-white/60">Do not engage in sexual conduct, share sexual content, participate in dating spaces, or share personal information with strangers. Report adults attempting sexual contact immediately.</p>
                      </div>
                      <div>
                        <p className="text-white font-medium mb-1">If you are an adult:</p>
                        <p className="text-white/60">Do not engage sexually with anyone under 18, solicit sexual content from minors, groom/exploit minors, or create dating spaces for teens.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Self-Harm */}
              <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6">
                <div className="flex gap-4">
                  <AlertTriangle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-purple-400 mb-3">Self-Harm and Suicide</h4>
                    <div className="space-y-3 text-sm">
                      <p className="text-white/60">Do not share content encouraging self-harm, provide instructions, glorify suicide, normalize eating disorders, or use self-harm as manipulation.</p>
                      <p className="text-white/60">Do take suicide threats seriously, report concerning discussions, and share mental health resources.</p>
                      <div className="bg-black/30 rounded-lg p-4 mt-3">
                        <p className="text-purple-300 font-medium mb-2">Crisis Resources:</p>
                        <p className="text-white/70">National Suicide Prevention: <span className="text-white font-mono">988</span></p>
                        <p className="text-white/70">Crisis Text Line: Text <span className="text-white font-mono">HOME</span> to <span className="text-white font-mono">741741</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Respect the Community */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-white/90 mb-6 flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-primary" />
              Section 2: Respect the Community
            </h3>

            <div className="space-y-4">
              <div className="bg-white/[0.03] border border-white/5 rounded-xl p-5 hover:border-white/10 transition-colors">
                <h4 className="font-semibold text-white mb-2">Spam and Unwanted Messages</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  Do not send bulk messages, spam channels, promote products repeatedly, send phishing/scam messages, create spam bots, or hijack conversations for advertising.
                </p>
              </div>

              <div className="bg-white/[0.03] border border-white/5 rounded-xl p-5 hover:border-white/10 transition-colors">
                <h4 className="font-semibold text-white mb-2">Impersonation and Identity Fraud</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  Do not pretend to be someone else, impersonate staff/moderators, create fake profiles, use misleading usernames, claim to represent organizations falsely, or use deceptive practices.
                </p>
              </div>

              <div className="bg-white/[0.03] border border-white/5 rounded-xl p-5 hover:border-white/10 transition-colors">
                <h4 className="font-semibold text-white mb-2">Misinformation and Disinformation</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  Do not spread false information knowingly, share misleading content, spread harmful conspiracy theories, distribute health/election misinformation, or create panic with false claims. Always check sources and fact-check surprising claims.
                </p>
              </div>

              <div className="bg-white/[0.03] border border-white/5 rounded-xl p-5 hover:border-white/10 transition-colors">
                <h4 className="font-semibold text-white mb-2">Scams and Security</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  Do not attempt scams or fraud, engage in phishing, create fake opportunities, distribute malware, attempt unauthorized access, or compromise server security.
                </p>
              </div>
            </div>
          </div>

          {/* Follow Laws */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-white/90 mb-6 flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-primary" />
              Section 3: Follow Applicable Laws
            </h3>
            <p className="text-white/60 leading-relaxed">
              All members must comply with local, state, national, and international laws, including laws prohibiting harassment, protecting children, prohibiting fraud, intellectual property laws, and laws against illegal goods/services.
            </p>
          </div>

          {/* Enforcement */}
          <div className="bg-white/[0.02] border border-white/5 rounded-xl p-6">
            <h4 className="font-semibold text-white mb-3">Enforcement</h4>
            <p className="text-white/60 text-sm leading-relaxed mb-3">
              Violations may result in warnings, temporary suspension, permanent removal, content deletion, or reporting to authorities.
            </p>
            <p className="text-white/50 text-sm italic">
              Some violations (CSAM, serious threats, illegal activity) result in immediate permanent removal. Report violations to community moderators with clear descriptions and evidence.
            </p>
          </div>
        </section>

        {/* Source Code Notice */}
        <section id="source-code" className="mb-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 bg-red-500/10 rounded-xl">
              <Lock className="w-6 h-6 text-red-400" />
            </div>
            <h2 className="text-2xl font-bold">Source Code Notice</h2>
          </div>

          <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-6 mb-8">
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="px-3 py-1.5 bg-red-500/20 rounded-lg text-red-400 font-medium">Status: Completely Private</div>
              <div className="px-3 py-1.5 bg-red-500/20 rounded-lg text-red-400 font-medium">Access: None (Proprietary)</div>
              <div className="px-3 py-1.5 bg-red-500/20 rounded-lg text-red-400 font-medium">Distribution: Restricted</div>
            </div>
          </div>

          <p className="text-white/70 leading-relaxed mb-8">
            The source code for this Discord Bot is completely private and proprietary.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-white mb-3">You May Not:</h3>
              <ul className="space-y-2 text-white/60 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">-</span>
                  View, copy, or distribute the source code
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">-</span>
                  Modify the source code or create derivative works
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">-</span>
                  Reverse engineer or decompile the Bot
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">-</span>
                  Attempt to access or share source code
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">-</span>
                  Publish source code or use it for any purpose
                </li>
              </ul>
            </div>

            <div className="bg-white/[0.03] border border-white/5 rounded-xl p-5">
              <h4 className="font-semibold text-white mb-2">Intellectual Property</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                All source code, including Python code, configuration files, data models, API integrations, database queries, algorithms, and documentation are the exclusive intellectual property of the Bot operator.
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/5 rounded-xl p-5">
              <h4 className="font-semibold text-white mb-2">Violations</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Violation may result in immediate Bot removal, legal action for copyright infringement, claims for damages, injunctive relief, and criminal prosecution if applicable.
              </p>
            </div>
          </div>
        </section>

        {/* Bot Usage Terms */}
        <section id="bot-usage" className="mb-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 bg-primary/10 rounded-xl">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold">Bot Usage Terms</h2>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="px-3 py-1.5 bg-primary/20 rounded-lg text-primary font-medium">Status: Invite Only</div>
              <div className="px-3 py-1.5 bg-primary/20 rounded-lg text-primary font-medium">Access: Private Approval</div>
            </div>
          </div>

          <p className="text-white/50 text-sm italic border-l-2 border-primary/50 pl-4 mb-10">
            This section governs your use of the Discord Bot. Separate terms apply to participation in our public community spaces.
          </p>

          <div className="space-y-10">
            <div>
              <h3 className="font-semibold text-white text-lg mb-4">1. Who We Are</h3>
              <p className="text-white/60 leading-relaxed">
                The Bot is maintained and operated by us (the "Operator"). We are a private operation providing bot services for Discord communities.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white text-lg mb-4">2. Bot Invitations and Access</h3>
              <div className="space-y-4">
                <div className="bg-white/[0.03] border border-white/5 rounded-xl p-5">
                  <h4 className="font-medium text-white mb-2">Invite-Only Basis</h4>
                  <p className="text-white/60 text-sm">Access requires explicit approval, a valid Discord server, agreement to these terms, and compliance with all policies.</p>
                </div>
                <div className="bg-white/[0.03] border border-white/5 rounded-xl p-5">
                  <h4 className="font-medium text-white mb-2">Eligibility</h4>
                  <p className="text-white/60 text-sm">You must be the server owner or authorized, at least 13 years old, and your server must comply with Discord's Terms of Service.</p>
                </div>
                <div className="bg-white/[0.03] border border-white/5 rounded-xl p-5">
                  <h4 className="font-medium text-white mb-2">Revocation of Access</h4>
                  <p className="text-white/60 text-sm">We reserve the right to revoke Bot access at any time for violations, misuse, server activity violating laws, or inactivity.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-white text-lg mb-4">3. Prohibited Activity</h3>
              <div className="bg-white/[0.03] border border-white/5 rounded-xl p-5">
                <p className="text-white/60 text-sm leading-relaxed">
                  You agree not to use the Bot to: violate Discord's Terms of Service, engage in harassment or hate speech, share illegal content, engage in fraud or scams, distribute malware, spam or abuse features, reverse engineer the Bot, or process personal data in violation of privacy laws.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-white text-lg mb-4">4. Bot Functionality and Data</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-white/[0.03] border border-white/5 rounded-xl p-5">
                  <h4 className="font-medium text-white mb-2 flex items-center gap-2">
                    <Database className="w-4 h-4 text-primary" />
                    Features
                  </h4>
                  <p className="text-white/60 text-sm">Engagement tracking (XP, levels, streaks), moderation tools, social media lookups, voice management, ticket systems, and utility functions.</p>
                </div>
                <div className="bg-white/[0.03] border border-white/5 rounded-xl p-5">
                  <h4 className="font-medium text-white mb-2 flex items-center gap-2">
                    <Eye className="w-4 h-4 text-primary" />
                    Data Collection
                  </h4>
                  <p className="text-white/60 text-sm">Discord IDs, usernames, server/channel IDs, message content (when applicable), command usage, timestamps, and engagement metrics.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-white text-lg mb-4">5. Data Retention</h3>
              <p className="text-white/60 leading-relaxed text-sm">
                Data is retained while the Bot is active in your server and in backups for up to 90 days. Upon removal, most data is deleted within 7 days, with some cached data persisting up to 30 days.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white text-lg mb-4">6. Third-Party Services</h3>
              <p className="text-white/60 leading-relaxed text-sm">
                The Bot integrates with YouTube, Spotify, GitHub, Roblox, Google Search APIs, MongoDB Atlas, and Upstash Redis. You are subject to their respective terms.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-white/[0.03] border border-white/5 rounded-xl p-5">
                <h4 className="font-medium text-white mb-2">Warranties & Disclaimers</h4>
                <p className="text-white/60 text-sm">The Bot is provided "AS IS" without warranties regarding operation, fitness for purpose, or freedom from errors.</p>
              </div>
              <div className="bg-white/[0.03] border border-white/5 rounded-xl p-5">
                <h4 className="font-medium text-white mb-2">Limitation of Liability</h4>
                <p className="text-white/60 text-sm">We are not liable for loss of profits, revenue, data, or any indirect damages. Total liability is capped at $0 USD.</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-white text-lg mb-4">7. Termination</h3>
              <p className="text-white/60 leading-relaxed text-sm">
                You may remove the Bot at any time. We may terminate access immediately for violations. Upon termination, your right to use ceases and all data may be deleted.
              </p>
            </div>
          </div>
        </section>

        {/* Community Participation */}
        <section id="community" className="mb-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 bg-primary/10 rounded-xl">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold">Community Participation</h2>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="px-3 py-1.5 bg-primary/20 rounded-lg text-primary font-medium">Status: Public Community</div>
              <div className="px-3 py-1.5 bg-primary/20 rounded-lg text-primary font-medium">Access: Open to All</div>
            </div>
          </div>

          <p className="text-white/50 text-sm italic border-l-2 border-primary/50 pl-4 mb-10">
            This section governs your participation in our public community Discord server. Separate terms apply to Bot Usage.
          </p>

          <div className="space-y-8">
            <div className="bg-white/[0.03] border border-white/5 rounded-xl p-5">
              <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-primary" />
                Age Requirements
              </h3>
              <p className="text-white/60 text-sm">You must be at least 13 years old. If under 18, parents are responsible for monitoring participation. You may request content removal at any time with probable cause.</p>
            </div>

            <div className="bg-white/[0.03] border border-white/5 rounded-xl p-5">
              <h3 className="font-semibold text-white mb-3">Community Culture</h3>
              <p className="text-white/60 text-sm">We strive to maintain a community that is welcoming, inclusive, respectful, safe for all ages, and focused on meaningful connections.</p>
            </div>

            <div>
              <h3 className="font-semibold text-white text-lg mb-4">Content Rules</h3>
              <div className="space-y-4">
                <div className="bg-white/[0.03] border border-white/5 rounded-xl p-5">
                  <h4 className="font-medium text-white mb-2">Your Content</h4>
                  <p className="text-white/60 text-sm">You are responsible for all content you share. You must have the right to share it and ensure legality.</p>
                </div>
                <div className="bg-white/[0.03] border border-white/5 rounded-xl p-5">
                  <h4 className="font-medium text-white mb-2">Content Removal</h4>
                  <p className="text-white/60 text-sm">We may remove content that violates terms, is illegal, infringes rights, is threatening, contains violence or CSAM, is spam, or creates risk.</p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-white/[0.03] border border-white/5 rounded-xl p-5">
                <h4 className="font-medium text-white mb-2">Enforcement</h4>
                <p className="text-white/60 text-sm">Violations may result in warnings, temporary suspension, permanent removal, content deletion, or reporting to authorities.</p>
              </div>
              <div className="bg-white/[0.03] border border-white/5 rounded-xl p-5">
                <h4 className="font-medium text-white mb-2">Appeals</h4>
                <p className="text-white/60 text-sm">You may appeal enforcement actions by contacting moderators through DM with an explanation. Appeals are not guaranteed.</p>
              </div>
            </div>

            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-5">
              <h4 className="font-semibold text-red-400 mb-2">Zero Tolerance</h4>
              <p className="text-white/60 text-sm">Immediate permanent removal for: child sexual abuse material, serious threats or violence, illegal activity, and multiple policy violations.</p>
            </div>
          </div>
        </section>

        {/* Privacy Policy */}
        <section id="privacy" className="mb-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 bg-primary/10 rounded-xl">
              <Eye className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold">Privacy Policy</h2>
          </div>

          <p className="text-white/70 leading-relaxed mb-10">
            This Privacy Policy describes how we collect, use, process, and protect your information when you use the Bot.
          </p>

          <div className="space-y-10">
            <div>
              <h3 className="font-semibold text-white text-lg mb-4">1. Information We Collect</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-white/[0.03] border border-white/5 rounded-xl p-5">
                  <h4 className="font-medium text-white mb-3">Automatic Collection</h4>
                  <ul className="space-y-1.5 text-white/60 text-sm">
                    <li>- Discord user ID, username, server ID, channel ID</li>
                    <li>- Command execution timestamps and parameters</li>
                    <li>- Message content (when applicable)</li>
                    <li>- User profile and usage statistics</li>
                  </ul>
                </div>
                <div className="bg-white/[0.03] border border-white/5 rounded-xl p-5">
                  <h4 className="font-medium text-white mb-3">Voluntary Information</h4>
                  <ul className="space-y-1.5 text-white/60 text-sm">
                    <li>- Server configuration settings</li>
                    <li>- Custom preferences</li>
                    <li>- User-generated content</li>
                    <li>- Support/feedback information</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-white text-lg mb-4">2. How We Use Your Information</h3>
              <p className="text-white/60 leading-relaxed text-sm">
                We use collected information to provide and improve Bot functionality, personalize experience, process commands, store engagement data (XP, levels, streaks), enforce Terms of Service, protect against abuse, comply with legal obligations, and analyze usage patterns.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white text-lg mb-4">3. Data Storage and Retention</h3>
              <div className="bg-white/[0.03] border border-white/5 rounded-xl p-5">
                <ul className="space-y-2 text-white/60 text-sm">
                  <li className="flex justify-between"><span>Command history and logs</span><span className="text-white/40">Up to 90 days</span></li>
                  <li className="flex justify-between"><span>User profile data (XP, levels)</span><span className="text-white/40">While Bot is active</span></li>
                  <li className="flex justify-between"><span>Server configuration</span><span className="text-white/40">Until deleted or removal</span></li>
                  <li className="flex justify-between"><span>Engagement data</span><span className="text-white/40">Retained indefinitely</span></li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-white text-lg mb-4">4. Data Security</h3>
              <p className="text-white/60 leading-relaxed text-sm">
                We implement encryption of sensitive data (TLS/SSL), secure database connections with authentication, limited access by authorized personnel, regular security updates, and monitoring for unauthorized access.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white text-lg mb-4">5. Data Sharing</h3>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 mb-4">
                <p className="text-primary font-medium">We do not sell your data.</p>
              </div>
              <p className="text-white/60 leading-relaxed text-sm">
                We may share information with service providers, Discord and related services, third-party APIs (only necessary data), legal authorities if required, and other users in your server (public data).
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white text-lg mb-4">6. User Rights</h3>
              <p className="text-white/60 leading-relaxed text-sm">
                You have the right to access your personal data, request correction of inaccurate information, request deletion (subject to legal requirements), and request data in a portable format. Contact us through support channels to exercise these rights.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">
              <div className="flex gap-4">
                <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-yellow-400 mb-2">7. Children's Privacy</h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    The Bot is not directed toward children under 13. We do not knowingly collect information from children under 13. If we become aware of such collection, we will delete the information and terminate the account immediately.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-white/[0.03] border border-white/5 rounded-xl p-5">
                <h4 className="font-medium text-white mb-2">International Transfers</h4>
                <p className="text-white/60 text-sm">Your information may be transferred to and processed in countries other than your country of residence.</p>
              </div>
              <div className="bg-white/[0.03] border border-white/5 rounded-xl p-5">
                <h4 className="font-medium text-white mb-2">Data Protection Compliance</h4>
                <p className="text-white/60 text-sm">We strive to comply with GDPR (for EU users), CCPA (for California residents), and other applicable privacy laws.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Discord Links */}
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 mb-12">
          <div className="text-center mb-6">
            <p className="text-white font-semibold mb-2">This service operates on Discord's platform</p>
            <p className="text-white/50 text-sm">By using this bot and community, you also agree to Discord's policies</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://discord.com/terms" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 bg-primary/20 hover:bg-primary/30 border border-primary/30 rounded-lg transition-all duration-200 hover:scale-[1.02] text-center"
              data-testid="link-discord-tos"
            >
              <div className="flex items-center gap-2 justify-center">
                <FileText className="w-4 h-4 text-primary" />
                <span className="text-white font-medium">Terms of Service</span>
              </div>
            </a>
            <a 
              href="https://discord.com/guidelines" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 bg-primary/20 hover:bg-primary/30 border border-primary/30 rounded-lg transition-all duration-200 hover:scale-[1.02] text-center"
              data-testid="link-discord-guidelines"
            >
              <div className="flex items-center gap-2 justify-center">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-white font-medium">Community Guidelines</span>
              </div>
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center border-t border-white/5 pt-8">
          <p className="text-white/40 text-sm mb-2">
            By using the Bot or participating in our community, you acknowledge that you have read, understood, and agree to these Terms of Service, Privacy Policy, and Community Guidelines.
          </p>
          <p className="text-white/30 text-sm">Last Updated: November 25, 2025</p>
        </footer>
      </main>
    </div>
  );
}
