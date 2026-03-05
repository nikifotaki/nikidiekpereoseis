import { Link, Outlet } from "react-router";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, X } from "lucide-react";
import { useState } from "react";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-bold">ΓΔ</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Νίκη Φωτάκη</h1>
                <p className="text-xs text-gray-600">Γραφείο Διεκπεραιώσεων</p>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-brand transition">
                Αρχική
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-brand transition">
                Σχετικά με Εμάς
              </Link>
              <Link to="/courses" className="text-gray-700 hover:text-brand transition">
                Υπηρεσίες
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-brand transition">
                Επικοινωνία
              </Link>
            </nav>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="hidden md:block bg-brand text-white px-6 py-3 rounded-lg hover:bg-brand-hover transition"
            >
              Επικοινωνία
            </Link>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200">
              <nav className="py-4 space-y-2">
                <Link 
                  to="/" 
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-brand transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Αρχική
                </Link>
                <Link 
                  to="/about" 
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-brand transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Σχετικά mε Εμάς
                </Link>
                <Link 
                  to="/courses" 
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-brand transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Υπηρεσίες
                </Link>
                <Link 
                  to="/contact" 
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-brand transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Επικοινωνία
                </Link>
                <div className="px-4 pt-2">
                  <Link
                    to="/contact"
                    className="block w-full bg-brand text-white px-6 py-3 rounded-lg hover:bg-brand-hover transition text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Επικοινωνία
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">ΓΔ</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Νίκη Φωτάκη</h3>
                  <p className="text-xs text-gray-400">Γραφείο Διεκπεραιώσεων</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Ο αξιόπιστος συνεργάτης σας για όλες τις διεκπεραιώσεις οχημάτων. 
                Πολυετής εμπειρία και επαγγελματική εξυπηρέτηση.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold mb-4">Γρήγοροι Σύνδεσμοι</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white transition">
                    Αρχική
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-white transition">
                    Σχετικά με Εμάς
                  </Link>
                </li>
                <li>
                  <Link to="/courses" className="text-gray-400 hover:text-white transition">
                    Υπηρεσίες
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-white transition">
                    Επικοινωνία
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-bold mb-4">Επικοινωνήστε Μαζί Μας</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-brand mt-0.5" />
                  <span className="text-gray-400">2104901994 - 6945262001</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-brand mt-0.5" />
                  <span className="text-gray-400">fotaki71@gmail.com</span>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-brand mt-0.5" />
                  <span className="text-gray-400">Θηβών 145<br />Πειραιάς</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Γραφείο Διεκπεραιώσεων Νίκη Φωτάκη. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}