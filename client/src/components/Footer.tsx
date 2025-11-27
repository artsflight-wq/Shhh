import { Link } from 'wouter';

export function Footer() {
  return (
    <footer className="py-6 border-t border-white/5 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-muted-foreground">
            &copy; 2025 FLIGHT MEDIA / ZETRO
          </div>
          <div className="flex items-center gap-6">
            <Link href="/tos">
              <span className="text-sm text-muted-foreground hover:text-white transition-colors cursor-pointer" data-testid="link-footer-tos">Terms & Privacy</span>
            </Link>
            <a href="https://discord.gg/while" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-white transition-colors" data-testid="link-footer-discord">
              Discord
            </a>
            <a href="mailto:reach@yell.rest" className="text-sm text-muted-foreground hover:text-white transition-colors" data-testid="link-footer-contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
