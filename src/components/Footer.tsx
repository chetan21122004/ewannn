const Footer = () => {
  return (
    <footer className="py-10 bg-black border-t border-white/10">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-lg font-serif font-bold tracking-[0.25em] text-on-dark">
            EWAN
          </span>
          <div className="flex items-center gap-6 text-xs text-on-dark-muted">
            <a href="#" className="hover:text-gold transition-colors">Privacy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms</a>
            <a href="#" className="hover:text-gold transition-colors">Cookies</a>
          </div>
          <span className="text-xs text-white/30">
            © 2024 EWAN. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
