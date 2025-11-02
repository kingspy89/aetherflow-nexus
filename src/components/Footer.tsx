const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Malav Patel. Built with passion for AI innovation.
          </p>
          <p className="text-sm text-muted-foreground">
            BSc AI & ML • Gujarat University
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
