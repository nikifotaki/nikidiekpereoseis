import { Link } from "react-router";
import { CheckCircle, Clock, DollarSign, Users, MapPin, Shield } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";

export function Courses() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20" style={{ background: `linear-gradient(to right, var(--brand-primary-gradient-from), var(--brand-primary-gradient-to))` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Τα Μαθήματα Οδήγησής μας</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Επιλέξτε το τέλειο μάθημα για τις ανάγκες σας και ξεκινήστε το ταξίδι σας για να γίνετε σίγουρος οδηγός
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Beginner Package */}
            <Card className="border-2 border-gray-200 hover:border-brand transition">
              <CardContent className="pt-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Πακέτο Αρχαρίων</h3>
                  <div className="text-4xl font-bold text-brand mb-2">399€</div>
                  <p className="text-gray-600">Ιδανικό για νέους οδηγούς</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-0.5" />
                    <span className="text-gray-700">10 ώρες μαθημάτων οδήγησης</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-0.5" />
                    <span className="text-gray-700">Θεωρία και διδασκαλία κανόνων οδήγησης</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-0.5" />
                    <span className="text-gray-700">Εκπαίδευση βασικών ελιγμών</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-0.5" />
                    <span className="text-gray-700">Δωρεάν παραλαβή και επιστροφή</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-0.5" />
                    <span className="text-gray-700">Εκπαιδευτικό υλικό περιλαμβάνεται</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link to="/contact">Ξεκινήστε</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Standard Package */}
            <Card className="border-2 border-brand relative transform md:-translate-y-4 shadow-xl">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand text-white px-4 py-1 rounded-full text-sm">
                Πιο Δημοφιλές
              </div>
              <CardContent className="pt-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Βασικό Πακέτο</h3>
                  <div className="text-4xl font-bold text-brand mb-2">699€</div>
                  <p className="text-gray-600">Ολοκληρωμένη εκπαίδευση</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-0.5" />
                    <span className="text-gray-700">20 ώρες μαθημάτων οδήγησης</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-0.5" />
                    <span className="text-gray-700">Πλήρες θεωρητικό μάθημα</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-0.5" />
                    <span className="text-gray-700">Εκπαίδευση προηγμένων ελιγμών</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-0.5" />
                    <span className="text-gray-700">Εξάσκηση οδήγησης σε αυτοκινητόδρομο</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-0.5" />
                    <span className="text-gray-700">Προετοιμασία για εξετάσεις</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-0.5" />
                    <span className="text-gray-700">Δωρεάν παραλαβή και επιστροφή</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-0.5" />
                    <span className="text-gray-700">Όλο το εκπαιδευτικό υλικό</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-brand hover:bg-brand-hover">
                  <Link to="/contact">Ξεκινήστε</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Premium Package */}
            <Card className="border-2 border-gray-200 hover:border-brand transition">
              <CardContent className="pt-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Πακέτο Premium</h3>
                  <div className="text-4xl font-bold text-brand mb-2">999€</div>
                  <p className="text-gray-600">Πλήρης κυριαρχία</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-0.5" />
                    <span className="text-gray-700">30 ώρες μαθημάτων οδήγησης</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-0.5" />
                    <span className="text-gray-700">Όλα όσα περιλαμβάνει το Βασικό Πακέτο</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-0.5" />
                    <span className="text-gray-700">Τεχνικές αμυντικής οδήγησης</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-0.5" />
                    <span className="text-gray-700">Εξάσκηση νυχτερινής οδήγησης</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-0.5" />
                    <span className="text-gray-700">Οδήγηση σε δύσκολες καιρικές συνθήκες</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-0.5" />
                    <span className="text-gray-700">Προτεραιότητα στον προγραμματισμό</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-0.5" />
                    <span className="text-gray-700">1 δωρεάν επανεξέταση (αν χρειαστεί)</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link to="/contact">Ξεκινήστε</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Πρόσθετες Υπηρεσίες</h2>
            <p className="text-xl text-gray-600">Προσαρμοσμένες λύσεις για συγκεκριμένες ανάγκες</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Μεμονωμένα Μαθήματα</h3>
                  <p className="text-gray-600 mb-4">
                    Μονά μαθήματα οδήγησης για όσους χρειάζονται ανανέωση ή επιπλέον εξάσκηση.
                  </p>
                  <div className="text-2xl font-bold text-brand">45€/ώρα</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Πακέτο Εξετάσεων</h3>
                  <p className="text-gray-600 mb-4">
                    Εντατική προετοιμασία για τις επερχόμενες εξετάσεις σας, συμπεριλαμβανομένης εξάσκησης στη διαδρομή.
                  </p>
                  <div className="text-2xl font-bold text-brand">199€</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Μάθημα Ανανέωσης</h3>
                  <p className="text-gray-600 mb-4">
                    Για κατόχους άδειας που δεν έχουν οδηγήσει για κάποιο διάστημα και χρειάζονται να ξαναχτίσουν την αυτοπεποίθησή τους.
                  </p>
                  <div className="text-2xl font-bold text-brand">299€</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Μάθημα για Ηλικιωμένους</h3>
                  <p className="text-gray-600 mb-4">
                    Εξειδικευμένη διδασκαλία για ηλικιωμένους οδηγούς που θέλουν να βελτιώσουν τις δεξιότητές τους.
                  </p>
                  <div className="text-2xl font-bold text-brand">349€</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Τι Περιλαμβάνεται σε Κάθε Πακέτο</h2>
            <p className="text-xl text-gray-600">Τυπικά χαρακτηριστικά σε όλα τα μαθήματα</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-brand" />
              </div>
              <h3 className="font-bold mb-2">Πιστοποιημένοι Εκπαιδευτές</h3>
              <p className="text-gray-600">Πιστοποιημένοι, έμπειροι επαγγελματίες</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-brand" />
              </div>
              <h3 className="font-bold mb-2">Υπηρεσία Παραλαβής</h3>
              <p className="text-gray-600">Δωρεάν παραλαβή και επιστροφή για όλα τα μαθήματα</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-brand" />
              </div>
              <h3 className="font-bold mb-2">Ευέλικτες Ώρες</h3>
              <p className="text-gray-600">Προγραμματίστε μαθήματα όποτε σας βολεύει</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-brand" />
              </div>
              <h3 className="font-bold mb-2">Σχέδια Πληρωμής</h3>
              <p className="text-gray-600">Ευέλικτες επιλογές πληρωμής διαθέσιμες</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Είστε Έτοιμοι να Επιλέξετε το Μάθημά σας;
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Επικοινωνήστε μαζί μας σήμερα για να εγγραφείτε ή να μάθετε περισσότερα για τα μαθήματά μας
          </p>
          <Button asChild size="lg" className="bg-white text-brand hover:bg-gray-100">
            <Link to="/contact">Επικοινωνήστε Τώρα</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
