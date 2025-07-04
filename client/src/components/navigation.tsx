import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "/blog", label: "Blog", isRoute: true },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavigation = (item: any) => {
    if (item.isRoute) {
      // Handle route navigation
      window.location.href = item.href;
    } else {
      // Handle scroll to section
      const element = document.querySelector(item.href);
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-slate-900/80 backdrop-blur-md" : "bg-slate-900/80"
    } border-b border-slate-800`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            {/* Mini profile avatar */}
            <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full p-0.5">
              <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full"></div>
              </div>
            </div>
            <div className="text-xl font-bold text-blue-400">Muhammad Arslan</div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              item.isRoute ? (
                <Link key={item.href} href={item.href}>
                  <button className="hover:text-blue-400 transition-colors">
                    {item.label}
                  </button>
                </Link>
              ) : (
                <button
                  key={item.href}
                  onClick={() => handleNavigation(item)}
                  className="hover:text-blue-400 transition-colors"
                >
                  {item.label}
                </button>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-blue-400"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                item.isRoute ? (
                  <Link key={item.href} href={item.href}>
                    <button className="block w-full text-left px-3 py-2 text-slate-300 hover:text-blue-400 transition-colors">
                      {item.label}
                    </button>
                  </Link>
                ) : (
                  <button
                    key={item.href}
                    onClick={() => handleNavigation(item)}
                    className="block w-full text-left px-3 py-2 text-slate-300 hover:text-blue-400 transition-colors"
                  >
                    {item.label}
                  </button>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
