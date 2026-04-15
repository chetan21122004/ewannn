const Footer = () => {
  return (
    <footer className="py-6 relative overflow-hidden border-t border-foreground/5" style={{ background: "linear-gradient(180deg, hsl(40 20% 96%) 0%, hsl(40 15% 95%) 100%)" }}>
      {/* Grid bg */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--navy)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--navy)) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="container mx-auto px-6 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-xl font-serif font-bold text-foreground tracking-wider">EWAN</span>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-foreground transition-colors">Cookies Notice</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
