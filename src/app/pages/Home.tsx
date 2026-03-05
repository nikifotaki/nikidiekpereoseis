import { Link } from "react-router";
import { CheckCircle, Award, Users, Clock, Shield, Star } from "lucide-react";
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
            src="https://images.unsplash.com/photo-1540137360092-f65d9856ce35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcml2aW5nJTIwc2Nob29sJTIwY2FyJTIwc3R1ZGVudHxlbnwxfHx8fDE3NzIwNDE0MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Driving School"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Μάθετε να Οδηγείτε με Αυτοπεποίθηση
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Επαγγελματική εκπαίδευση οδήγησης για μαθητές όλων των επιπέδων. 
              Αποκτήστε την άδειά σας με τους έμπειρους εκπαιδευτές της ΣωστάΟδηγώ.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-brand text-white px-8 py-4 rounded-lg hover:bg-brand-hover transition text-center"
              >
                Κλείστε το Πρώτο σας Μάθημα
              </Link>
              <Link
                to="/courses"
                className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-center"
              >
                Δείτε τα Μαθήματα
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Γιατί να Επιλέξετε την ΣωστάΟδηγώ;</h2>
            <p className="text-xl text-gray-600">Η κορυφαία σχολή οδηγών στην περιοχή σας</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-brand" />
              </div>
              <h3 className="text-xl font-bold mb-3">Πιστοποιημένοι Εκπαιδευτές</h3>
              <p className="text-gray-600">
                Όλοι οι εκπαιδευτές μας είναι πιστοποιημένοι με χρόνια εμπειρίας διδασκαλίας
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-brand" />
              </div>
              <h3 className="text-xl font-bold mb-3">Εξατομικευμένη Εκπαίδευση</h3>
              <p className="text-gray-600">
                Ατομική διδασκαλία προσαρμοσμένη στον δικό σας ρυθμό εκμάθησης
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-brand" />
              </div>
              <h3 className="text-xl font-bold mb-3">Ευέλικτο Πρόγραμμα</h3>
              <p className="text-gray-600">
                Κλείστε μαθήματα σε ώρες που σας εξυπηρετούν, συμπεριλαμβανομένων απογευμάτων και Σαββατοκύριακων
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-brand" />
              </div>
              <h3 className="text-xl font-bold mb-3">Ασφάλεια Πρώτα</h3>
              <p className="text-gray-600">
                Σύγχρονα οχήματα εξοπλισμένα με διπλά χειριστήρια και χαρακτηριστικά ασφαλείας
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-brand" />
              </div>
              <h3 className="text-xl font-bold mb-3">Υψηλό Ποσοστό Επιτυχίας</h3>
              <p className="text-gray-600">
                Το 95% των μαθητών μας περνούν τις εξετάσεις οδήγησης στην πρώτη προσπάθεια
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-brand" />
              </div>
              <h3 className="text-xl font-bold mb-3">5 Αστέρια</h3>
              <p className="text-gray-600">
                Σταθερά αξιολογημένοι ως άριστοι από τους μαθητές μας και τις οικογένειές τους
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
                src="https://images.unsplash.com/photo-1630406144797-821be1f35d75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN0cnVjdG9yJTIwdGVhY2hpbmclMjBkcml2aW5nfGVufDF8fHx8MTc3MjA0MTQzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Driving Instructor"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Εξειδικευμένη Εκπαίδευση από το 2011
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Η Σχολή Οδηγών ΣωστάΟδηγώ βοηθά τους μαθητές να επιτύχουν τους στόχους οδήγησής τους εδώ και πάνω από 15 χρόνια. 
                Η ομάδα έμπειρων και υπομονετικών εκπαιδευτών μας είναι αφοσιωμένη στην παροχή της υψηλότερης ποιότητας 
                εκπαίδευσης οδηγών σε ένα ασφαλές και υποστηρικτικό περιβάλλον.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Πιστοποιημένοι εκπαιδευτές</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Σύγχρονα οχήματα με διπλά χειριστήρια</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Δωρεάν υπηρεσία παραλαβής και επιστροφής</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Προετοιμασία για τις εξετάσεις περιλαμβάνεται</span>
                </li>
              </ul>
              <Button asChild className="bg-brand hover:bg-brand-hover">
                <Link to="/about">Μάθετε Περισσότερα για Εμάς</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Τι Λένε οι Μαθητές μας</h2>
            <p className="text-xl text-gray-600">Πραγματικές κριτικές από πραγματικούς μαθητές</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                «Οι εκπαιδευτές στη ΣωστάΟδηγώ είναι καταπληκτικοί! Με έκαναν να νιώθω άνετα και σίγουρη 
                στο τιμόνι. Πέρασα τις εξετάσεις μου στην πρώτη προσπάθεια!»
              </p>
              <p className="font-bold">- Σάρα Μ.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                «Εξαιρετική εξυπηρέτηση! Το ευέλικτο πρόγραμμα με διευκόλυνε να χωρέσω τα μαθήματα στο γεμάτο πρόγραμμά μου. 
                Συνιστώ ανεπιφύλακτα τη ΣωστάΟδηγώ!»
              </p>
              <p className="font-bold">- Γιάννης Τ.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                «Η κόρη μου ήταν νευρική για την οδήγηση, αλλά ο εκπαιδευτής της ήταν τόσο υπομονετικός και ενθαρρυντικός. 
                Τώρα είναι σίγουρη οδηγός χάρη στη ΣωστάΟδηγώ!»
              </p>
              <p className="font-bold">- Λίντα Π.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Είστε Έτοιμοι να Ξεκινήσετε το Ταξίδι της Οδήγησης;
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Κλείστε το πρώτο σας μάθημα σήμερα και κάντε το πρώτο βήμα για να πάρετε την άδειά σας!
          </p>
          <Button asChild size="lg" className="bg-white text-brand hover:bg-gray-100">
            <Link to="/contact">Κλείστε Μάθημα Τώρα</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}