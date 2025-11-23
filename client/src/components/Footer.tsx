export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-black/20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm text-muted-foreground">
          &copy; 2024 YELL. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Terms</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Privacy</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
