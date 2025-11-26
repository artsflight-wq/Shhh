import { Link } from 'wouter';

export function Footer() {
  return (
    <footer className="py-8 md:py-12 border-t border-white/5 bg-black/20">
      <div className="container mx-auto px-6">
        {/* Cool Typography */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-5xl md:text-6xl font-heading font-bold tracking-tighter select-none drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]">
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
