import { Link } from 'wouter';
import { ArrowLeft, Scale, Shield, Users, Lock, FileText } from 'lucide-react';

export default function ToS() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/95 relative overflow-x-hidden">
      {/* Back to Home */}
      <div className="fixed top-6 left-6 z-50">
        <Link href="/">
          <a className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/10 rounded-xl transition-all duration-300 text-foreground hover:text-primary" data-testid="link-back-home">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </a>
        </Link>
      </div>

      {/* Content */}
      <div className="container max-w-5xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent" data-testid="heading-tos">
            Terms of Service
          </h1>
          <p className="text-muted-foreground text-lg">Last Updated: November 25, 2025</p>
        </div>

        {/* Table of Contents */}
        <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-12 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6 text-primary" />
            Table of Contents
          </h2>
          <nav className="grid md:grid-cols-2 gap-4">
            <a href="#source-code" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors" data-testid="link-toc-source">
              <Lock className="w-4 h-4" />
              Source Code Notice
            </a>
            <a href="#bot-usage" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors" data-testid="link-toc-bot">
              <Shield className="w-4 h-4" />
              Bot Usage Terms
            </a>
            <a href="#community" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors" data-testid="link-toc-community">
              <Users className="w-4 h-4" />
              Community Participation
            </a>
            <a href="#privacy" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors" data-testid="link-toc-privacy">
              <Scale className="w-4 h-4" />
              Privacy Policy
            </a>
            <a href="#guidelines" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors" data-testid="link-toc-guidelines">
              <Users className="w-4 h-4" />
              Community Guidelines
            </a>
          </nav>
        </div>

        {/* Source Code Notice */}
        <section id="source-code" className="mb-16">
          <div className="bg-gradient-to-br from-red-500/10 via-red-500/5 to-transparent backdrop-blur-xl border border-red-500/20 rounded-2xl p-8 shadow-[inset_0_1px_0_0_rgba(255,100,100,0.2)]">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Lock className="w-8 h-8 text-red-400" />
              Source Code - Completely Private
            </h2>
            <div className="space-y-4 text-foreground/80 prose prose-invert max-w-none">
              <div className="bg-black/30 border border-red-500/20 rounded-xl p-6">
                <p className="font-bold text-red-400 mb-2">STATUS: Completely Private</p>
                <p className="font-bold text-red-400 mb-2">ACCESS: None (Proprietary Code)</p>
                <p className="font-bold text-red-400">DISTRIBUTION: Restricted</p>
              </div>

              <h3 className="text-xl font-semibold text-white mt-8">NOTICE</h3>
              <p>The source code for this Discord Bot is completely private and proprietary.</p>

              <h3 className="text-xl font-semibold text-white mt-6">YOU MAY NOT:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>View, copy, or distribute the source code</li>
                <li>Modify the source code or create derivative works</li>
                <li>Reverse engineer or decompile the Bot</li>
                <li>Attempt to access or share source code</li>
                <li>Publish source code or use it for any purpose</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6">INTELLECTUAL PROPERTY</h3>
              <p>All source code, including Python code, configuration files, data models, API integrations, database queries, algorithms, and documentation are the exclusive intellectual property of the Bot operator. All rights are reserved.</p>

              <h3 className="text-xl font-semibold text-white mt-6">VIOLATIONS</h3>
              <p>Violation of these restrictions may result in immediate Bot removal, legal action for copyright infringement, claims for damages, injunctive relief, and criminal prosecution if applicable.</p>
            </div>
          </div>
        </section>

        {/* Bot Usage Terms */}
        <section id="bot-usage" className="mb-16">
          <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8 text-primary" />
              Bot Usage Terms
            </h2>
            <div className="space-y-6 text-foreground/80 prose prose-invert max-w-none">
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                <p className="font-bold mb-1">STATUS: Invite Only</p>
                <p className="font-bold mb-1">ACCESS: Private - Bot invitations by approval only</p>
                <p className="font-bold">SCOPE: Terms governing use of the Discord Bot itself</p>
              </div>

              <p className="text-sm italic border-l-4 border-primary/50 pl-4">
                This section governs your use of the Discord Bot. Separate terms apply to participation in our public community spaces. By inviting and using this Bot, you accept these terms in their entirety.
              </p>

              <h3 className="text-2xl font-semibold text-white mt-8">1. Who We Are</h3>
              <p>The Bot is maintained and operated by us (the "Operator"). We are a private operation providing bot services for Discord communities.</p>

              <h3 className="text-2xl font-semibold text-white mt-8">2. Bot Invitations and Access</h3>
              <h4 className="text-xl font-semibold text-white/90 mt-4">2.1 Invite-Only Basis</h4>
              <p>The Bot is provided on an invite-only basis. Access requires explicit approval, a valid Discord server, agreement to these terms, and compliance with all policies.</p>

              <h4 className="text-xl font-semibold text-white/90 mt-4">2.2 Eligibility</h4>
              <p>By inviting the Bot, you confirm that you are the server owner or authorized, at least 13 years old, your server complies with Discord's Terms of Service, and you will enforce these terms within your server.</p>

              <h4 className="text-xl font-semibold text-white/90 mt-4">2.3 Revocation of Access</h4>
              <p>We reserve the right to revoke Bot access at any time for violations, misuse, server activity violating laws, or inactivity.</p>

              <h3 className="text-2xl font-semibold text-white mt-8">3. Prohibited Activity</h3>
              <p>You agree not to use the Bot to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Violate Discord's Terms of Service or Community Guidelines</li>
                <li>Engage in harassment, threats, hate speech, or discrimination</li>
                <li>Share illegal content or promote illegal activity</li>
                <li>Engage in fraud, scams, or deceptive practices</li>
                <li>Distribute malware, viruses, or malicious code</li>
                <li>Spam, flood, or abuse the Bot's features</li>
                <li>Reverse engineer, decompile, or modify the Bot</li>
                <li>Process personal data in violation of privacy laws</li>
              </ul>

              <h3 className="text-2xl font-semibold text-white mt-8">4. Bot Functionality and Data</h3>
              <h4 className="text-xl font-semibold text-white/90 mt-4">4.1 Features</h4>
              <p>The Bot provides engagement tracking (XP, levels, streaks), moderation tools, social media lookups, voice management, ticket systems, and utility functions.</p>

              <h4 className="text-xl font-semibold text-white/90 mt-4">4.2 Data Collection</h4>
              <p>When you use the Bot, it collects Discord user IDs, usernames, server IDs, channel IDs, message content (when applicable), command usage, timestamps, and engagement metrics.</p>

              <h4 className="text-xl font-semibold text-white/90 mt-4">4.3 Data Retention & Deletion</h4>
              <p>Data is retained while the Bot is active in your server and in backups for up to 90 days. Upon removal, most data is deleted within 7 days, with some cached data persisting up to 30 days.</p>

              <h3 className="text-2xl font-semibold text-white mt-8">5. Third-Party Services</h3>
              <p>The Bot integrates with YouTube, Spotify, GitHub, Roblox, Google Search APIs, MongoDB Atlas, and Upstash Redis. You are subject to their respective terms and responsible for compliance.</p>

              <h3 className="text-2xl font-semibold text-white mt-8">6. Warranties and Disclaimers</h3>
              <p>The Bot is provided "AS IS" without warranties. We make no warranties regarding operation, fitness for purpose, uninterrupted service, accuracy, or freedom from errors.</p>

              <h3 className="text-2xl font-semibold text-white mt-8">7. Limitation of Liability</h3>
              <p>We are not liable for loss of profits, revenue, data, business interruption, or any indirect damages. Total liability is capped at $0 USD.</p>

              <h3 className="text-2xl font-semibold text-white mt-8">8. Termination</h3>
              <p>You may remove the Bot at any time. We may terminate access immediately for violations. Upon termination, your right to use ceases and all data may be deleted.</p>
            </div>
          </div>
        </section>

        {/* Community Participation */}
        <section id="community" className="mb-16">
          <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Users className="w-8 h-8 text-primary" />
              Community Participation Terms
            </h2>
            <div className="space-y-6 text-foreground/80 prose prose-invert max-w-none">
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                <p className="font-bold mb-1">STATUS: Public Community Spaces</p>
                <p className="font-bold mb-1">ACCESS: Open to all Discord users</p>
                <p className="font-bold">SCOPE: Terms for our public community Discord server</p>
              </div>

              <p className="text-sm italic border-l-4 border-primary/50 pl-4">
                This section governs your participation in our public community Discord server and other public social media spaces. Separate terms apply to Bot Usage.
              </p>

              <h3 className="text-2xl font-semibold text-white mt-8">1. Age Requirements</h3>
              <p>You must be at least 13 years old. If under 18, parental/guardian consent is required. Parents are responsible for monitoring participation and may request content removal.</p>

              <h3 className="text-2xl font-semibold text-white mt-8">2. Community Culture</h3>
              <p>We strive to maintain a community that is welcoming, inclusive, respectful, safe for all ages, and focused on meaningful connections.</p>

              <h3 className="text-2xl font-semibold text-white mt-8">3. Content Rules</h3>
              <h4 className="text-xl font-semibold text-white/90 mt-4">Your Content</h4>
              <p>You are responsible for your text messages, images, videos, media, links, and all content you share. You must have the right to share it and ensure legality.</p>

              <h4 className="text-xl font-semibold text-white/90 mt-4">Content Removal</h4>
              <p>We may remove content that violates terms, is illegal, infringes rights, is defamatory or threatening, contains violence or CSAM, is spam, or creates risk.</p>

              <h3 className="text-2xl font-semibold text-white mt-8">4. Enforcement</h3>
              <p>For violations, we may issue warnings, temporarily suspend access, permanently remove accounts, delete content, or report illegal activity to authorities.</p>

              <h3 className="text-2xl font-semibold text-white mt-8">5. Appeals</h3>
              <p>You may appeal enforcement actions by contacting moderators through DM with an explanation. Appeals are not guaranteed to succeed.</p>

              <h3 className="text-2xl font-semibold text-white mt-8">6. Zero Tolerance</h3>
              <p>Immediate permanent removal for: child sexual abuse material, serious threats or violence, illegal activity, and multiple policy violations.</p>
            </div>
          </div>
        </section>

        {/* Privacy Policy */}
        <section id="privacy" className="mb-16">
          <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Scale className="w-8 h-8 text-primary" />
              Privacy Policy
            </h2>
            <div className="space-y-6 text-foreground/80 prose prose-invert max-w-none">
              <p>This Privacy Policy describes how we collect, use, process, and protect your information when you use the Bot. By using the Bot, you consent to the collection and use of information as outlined here.</p>

              <h3 className="text-2xl font-semibold text-white mt-8">1. Information We Collect</h3>
              <h4 className="text-xl font-semibold text-white/90 mt-4">Automatic Collection</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Discord user ID, username, server ID, channel ID</li>
                <li>Command execution timestamps and parameters</li>
                <li>Message content (when applicable to functionality)</li>
                <li>User profile information and usage statistics</li>
              </ul>

              <h4 className="text-xl font-semibold text-white/90 mt-4">Voluntary Information</h4>
              <p>Server configuration settings, custom preferences, user-generated content through commands, and support/feedback information.</p>

              <h3 className="text-2xl font-semibold text-white mt-8">2. How We Use Your Information</h3>
              <p>We use collected information to provide and improve Bot functionality, personalize experience, process commands, store engagement data (XP, levels, streaks), enforce Terms of Service, protect against abuse, comply with legal obligations, and analyze usage patterns.</p>

              <h3 className="text-2xl font-semibold text-white mt-8">3. Data Storage and Retention</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Command history and logs: Up to 90 days</li>
                <li>User profile data (XP, levels): While Bot is active in your server</li>
                <li>Server configuration: Until deleted or Bot removal</li>
                <li>Engagement data: Retained indefinitely unless deleted</li>
              </ul>

              <h3 className="text-2xl font-semibold text-white mt-8">4. Data Security</h3>
              <p>We implement encryption of sensitive data (TLS/SSL), secure database connections with authentication, limited access by authorized personnel, regular security updates, and monitoring for unauthorized access.</p>

              <h3 className="text-2xl font-semibold text-white mt-8">5. Data Sharing</h3>
              <p><strong className="text-white">We do not sell your data.</strong> We may share information with service providers (under data processing agreements), Discord and related services, third-party APIs (only necessary data), legal authorities if required, and other users in your server (public data).</p>

              <h3 className="text-2xl font-semibold text-white mt-8">6. User Rights</h3>
              <p>You have the right to access your personal data, request correction of inaccurate information, request deletion (subject to legal requirements), and request data in a portable format. Contact us through support channels to exercise these rights.</p>

              <h3 className="text-2xl font-semibold text-white mt-8">7. Children's Privacy</h3>
              <p>The Bot is not directed toward children under 13. We do not knowingly collect information from children under 13. If we become aware of such collection, we will delete the information and terminate the account.</p>

              <h3 className="text-2xl font-semibold text-white mt-8">8. International Data Transfers</h3>
              <p>Your information may be transferred to, stored in, and processed in countries other than your country of residence. By using the Bot, you consent to such transfers.</p>

              <h3 className="text-2xl font-semibold text-white mt-8">9. Data Protection Compliance</h3>
              <p>We strive to comply with GDPR (for EU users), CCPA (for California residents), and other applicable privacy laws.</p>
            </div>
          </div>
        </section>

        {/* Community Guidelines */}
        <section id="guidelines" className="mb-16">
          <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Users className="w-8 h-8 text-primary" />
              Community Guidelines
            </h2>
            <div className="space-y-6 text-foreground/80 prose prose-invert max-w-none">
              <p>These Community Guidelines define behavioral standards for our community, ensuring everyone can express themselves and find community without compromising safety or well-being.</p>

              <h3 className="text-2xl font-semibold text-white mt-8">Section 1: Respect Each Other</h3>
              
              <h4 className="text-xl font-semibold text-white/90 mt-6">1. Harassment and Bullying</h4>
              <p><strong>DO NOT:</strong> Engage in targeted harassment, participate in bullying campaigns, coordinate harassment, make repeated unwanted contact, spread rumors, publicly mock members, or make targeted personal attacks.</p>

              <h4 className="text-xl font-semibold text-white/90 mt-6">2. Threats and Violence</h4>
              <p><strong>DO NOT:</strong> Make threats against individuals or groups, make threats of violence or illegal action, encourage harm, share plans to commit violence, glorify violence, or issue death/rape/assault threats.</p>

              <h4 className="text-xl font-semibold text-white/90 mt-6">3. Doxxing (Personal Information)</h4>
              <p><strong>DO NOT:</strong> Share someone's personal information without consent, including addresses, phone numbers, real names, workplace, school, financial information, or social media accounts.</p>

              <h4 className="text-xl font-semibold text-white/90 mt-6">4. Hate Speech and Hateful Conduct</h4>
              <p><strong>DO NOT:</strong> Use hate speech targeting race, ethnicity, national origin, religion, sexual orientation, gender identity, disability, health status, or political beliefs. Do not use slurs, dehumanizing language, hate symbols, or deny historical atrocities.</p>

              <h4 className="text-xl font-semibold text-white/90 mt-6">5. Violent Extremism</h4>
              <p><strong>DO NOT:</strong> Promote, coordinate, or participate in violent extremism, share manifestos from violent groups, glorify violence, encourage extremist ideology, coordinate violent acts, or recruit for extremist causes.</p>

              <h4 className="text-xl font-semibold text-white/90 mt-6">6. Child Sexual Abuse Material (CSAM)</h4>
              <p className="text-red-400 font-bold">ABSOLUTELY PROHIBITED:</p>
              <p>Any images, videos, text, drawings, or animations depicting child sexual abuse. Any CSAM (real, fictional, or AI-generated), grooming behavior toward minors, or solicitation/distribution of CSAM. We report all suspected CSAM to law enforcement.</p>

              <h4 className="text-xl font-semibold text-white/90 mt-6">7. Teen and Child Safety</h4>
              <p><strong>If under 18:</strong> Do not engage in sexual conduct, share sexual content, participate in dating spaces, or share personal information with strangers. Report adults attempting sexual contact.</p>
              <p><strong>If an adult:</strong> Do not engage sexually with anyone under 18, solicit sexual content from minors, groom/exploit minors, or create dating spaces for teens.</p>

              <h4 className="text-xl font-semibold text-white/90 mt-6">8. Self-Harm and Suicide</h4>
              <p><strong>DO NOT:</strong> Share content encouraging self-harm, provide self-harm instructions, glorify suicide, normalize eating disorders, or use self-harm as manipulation.</p>
              <p><strong>DO:</strong> Take suicide threats seriously, report concerning discussions, share mental health resources (National Suicide Prevention Lifeline: 988, Crisis Text Line: HOME to 741741).</p>

              <h3 className="text-2xl font-semibold text-white mt-8">Section 2: Respect the Community</h3>

              <h4 className="text-xl font-semibold text-white/90 mt-6">9. Spam and Unwanted Messages</h4>
              <p><strong>DO NOT:</strong> Send bulk messages, spam channels with repetitive content, promote products/services repeatedly, send phishing/scam messages, create spam bots, or hijack conversations for advertising.</p>

              <h4 className="text-xl font-semibold text-white/90 mt-6">10. Impersonation and Identity Fraud</h4>
              <p><strong>DO NOT:</strong> Pretend to be someone else, impersonate staff/moderators, create fake profiles, use misleading usernames, claim to represent organizations falsely, or use deceptive practices.</p>

              <h4 className="text-xl font-semibold text-white/90 mt-6">11. Misinformation and Disinformation</h4>
              <p><strong>DO NOT:</strong> Spread false information knowingly, share misleading content, spread harmful conspiracy theories, distribute health/election misinformation, or create panic with false claims.</p>
              <p><strong>DO:</strong> Check sources before sharing, fact-check surprising claims, correct misinformation when discovered, and share from reputable sources.</p>

              <h4 className="text-xl font-semibold text-white/90 mt-6">12. Scams and Security</h4>
              <p><strong>DO NOT:</strong> Attempt scams or fraud, engage in phishing, create fake opportunities, distribute malware, attempt unauthorized access, or compromise server security.</p>

              <h3 className="text-2xl font-semibold text-white mt-8">Section 3: Follow Applicable Laws</h3>
              <p>All members must comply with local, state, national, and international laws, including laws prohibiting harassment, protecting children, prohibiting fraud, intellectual property laws, and laws against illegal goods/services.</p>

              <h3 className="text-2xl font-semibold text-white mt-8">Enforcement</h3>
              <p>Violations may result in warnings, temporary suspension, permanent removal, content deletion, or reporting to authorities. Some violations (CSAM, serious threats, illegal activity) result in immediate permanent removal.</p>

              <p className="mt-8 text-sm italic">If you observe violations, report to community moderators with clear descriptions and evidence. Do not abuse the report system.</p>
            </div>
          </div>
        </section>

        {/* Footer Notice */}
        <div className="text-center text-muted-foreground text-sm border-t border-white/10 pt-8">
          <p>By using the Bot or participating in our community, you acknowledge that you have read, understood, and agree to these Terms of Service, Privacy Policy, and Community Guidelines.</p>
          <p className="mt-4">Last Updated: November 25, 2025</p>
        </div>
      </div>
    </div>
  );
}
