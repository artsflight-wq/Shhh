import { Link } from 'wouter';

export function Footer() {
  return (
    <footer className="pt-4 pb-12 sm:pt-6 sm:pb-10 md:pt-8 md:pb-12 border-t border-white/5 bg-black/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Cool Typography */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-[10rem] sm:text-[clamp(9rem,20vw,14rem)] font-heading font-bold tracking-tighter leading-none select-none drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500">
              YELL
            </span>
          </h2>
        </div>

        {/* Footer Links and Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 border-t border-white/5 pt-6 md:pt-8">
          <div className="text-sm text-muted-foreground">
            &copy; 2024 YELL. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/tos">
              <span className="text-sm text-muted-foreground hover:text-white transition-colors cursor-pointer" data-testid="link-footer-tos">Terms & Privacy</span>
            </Link>
            <a href="https://discord.gg/yell" className="text-sm text-muted-foreground hover:text-white transition-colors" data-testid="link-footer-contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
