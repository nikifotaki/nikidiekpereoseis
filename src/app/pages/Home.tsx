import { Link } from "react-router";
import { CheckCircle, Award, Users, Clock, Shield, Star, FileText, Car } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gray-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N1bWVudHMlMjBvZmZpY2V8ZW58MXx8fHwxNzQxNDU0ODAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Γραφείο Διεκπεραιώσεων"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Διεκπεραιώσεις Οχημάτων με Ασφάλεια
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Αναλαμβάνουμε όλες τις διαδικασίες για το όχημά σας. 
              Γρήγορη, αξιόπιστη και επαγγελματική εξυπηρέτηση.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-brand text-white px-8 py-4 rounded-lg hover:bg-brand-hover transition text-center"
              >
                Επικοινωνήστε Μαζί μας
              </Link>
              <Link
                to="/courses"
                className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-center"
              >
                Δείτε τις Υπηρεσίες
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Γιατί να Επιλέξετε το Γραφείο μας;</h2>
            <p className="text-xl text-gray-600">Η καλύτερη επιλογή για τις διεκπεραιώσεις σας</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-brand" />
              </div>
              <h3 className="text-xl font-bold mb-3">Πολυετής Εμπειρία</h3>
              <p className="text-gray-600">
                Χρόνια εμπειρίας στο χώρο των διεκπεραιώσεων οχημάτων
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-brand" />
              </div>
              <h3 className="text-xl font-bold mb-3">Γρήγορη Εξυπηρέτηση</h3>
              <p className="text-gray-600">
                Άμεση διεκπεραίωση των υποθέσεών σας χωρίς καθυστερήσεις
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-brand" />
              </div>
              <h3 className="text-xl font-bold mb-3">Αξιοπιστία</h3>
              <p className="text-gray-600">
                Ασφαλής διαχείριση των εγγράφων και των διαδικασιών σας
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-brand" />
              </div>
              <h3 className="text-xl font-bold mb-3">Ολοκληρωμένες Υπηρεσίες</h3>
              <p className="text-gray-600">
                Αναλαμβάνουμε όλες τις διαδικασίες από την αρχή έως το τέλος
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-brand" />
              </div>
              <h3 className="text-xl font-bold mb-3">Εξατομικευμένη Προσέγγιση</h3>
              <p className="text-gray-600">
                Κάθε υπόθεση αντιμετωπίζεται με προσωπική φροντίδα
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-brand" />
              </div>
              <h3 className="text-xl font-bold mb-3">Άριστη Εξυπηρέτηση</h3>
              <p className="text-gray-600">
                Εξυπηρέτηση υψηλού επιπέδου με ευγένεια και επαγγελματισμό
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1686771416282-3888ddaf249b?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="High Rise Buildings"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Εμπειρία & Υπευθυνότητα στον Χώρο των Διεκπεραιώσεων
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Με πολυετή εμπειρία στον χώρο των διεκπεραιώσεων, παρέχουμε ολοκληρωμένες υπηρεσίες για όλες τις διοικητικές διαδικασίες που αφορούν οχήματα και άδειες οδήγησης, με υπευθυνότητα και συνέπεια.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Πολυετής εμπειρία στο χώρο</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Γνώση όλων των νομικών διαδικασιών</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Άμεση και αξιόπιστη εξυπηρέτηση</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Ανταγωνιστικές τιμές</span>
                </li>
              </ul>
              <Button asChild className="bg-brand hover:bg-brand-hover">
                <Link to="/about">Μάθετε Περισσότερα</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Τι Λένε οι Πελάτες μας</h2>
            <p className="text-xl text-gray-600">Πραγματικές κριτικές από ικανοποιημένους πελάτες</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                «Εξαιρετική εξυπηρέτηση! Διεκπεραίωσαν τη μεταβίβαση του αυτοκινήτου μου 
                σε χρόνο μηδέν. Πολύ επαγγελματίες!»
              </p>
              <p className="font-bold">- Γιώργος Κ.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                «Με βοήθησαν με την ανανέωση του διπλώματός μου. Πολύ γρήγοροι και με 
                πολύ καλές τιμές. Τους συνιστώ ανεπιφύλακτα!»
              </p>
              <p className="font-bold">- Μαρία Π.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                «Εξαιρετικό γραφείο! Ανέλαβαν τον εκτελωνισμό του οχήματός μου και τα 
                κατάφεραν όλα άψογα. Ευχαριστώ πολύ!»
              </p>
              <p className="font-bold">- Δημήτρης Σ.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Χρειάζεστε Διεκπεραιώσεις για το Όχημά σας;
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Επικοινωνήστε μαζί μας σήμερα και αναλαμβάνουμε εμείς όλες τις διαδικασίες!
          </p>
          <Button asChild size="lg" className="bg-white text-brand hover:bg-gray-100">
            <Link to="/contact">Επικοινωνήστε Τώρα</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
