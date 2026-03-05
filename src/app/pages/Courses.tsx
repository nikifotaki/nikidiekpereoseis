import { Link } from "react-router";
import { CheckCircle, Clock, FileText, Users, Car, Shield, Truck, Package } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export function Courses() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20" style={{ background: `linear-gradient(to right, var(--brand-primary-gradient-from), var(--brand-primary-gradient-to))` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Οι Υπηρεσίες μας</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Ολοκληρωμένες λύσεις για κάθε διοικητική διαδικασία οχήματος
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Κύριες Υπηρεσίες</h2>
            <p className="text-xl text-gray-600">Αναλαμβάνουμε όλες τις διεκπεραιώσεις</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Ανανεώσεις Διπλωμάτων */}
            <Card className="border-2 border-gray-200 hover:border-brand transition">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-brand" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Ανανεώσεις Διπλωμάτων</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Ανανέωση διπλώματος οδήγησης</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Γρήγορη διεκπεραίωση</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Όλα τα απαραίτητα έγγραφα</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link to="/contact">Επικοινωνήστε</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Επεκτάσεις - ΠΕΙ - ΕΑΤ */}
            <Card className="border-2 border-gray-200 hover:border-brand transition">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-brand" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Επεκτάσεις - Π.Ε.Ι. - Ε.Α.Τ.</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Πιστοποιητικό Επαγγελματικής Ικανότητας</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Ειδική Άδεια Ταξί</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Επεκτάσεις κατηγοριών</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link to="/contact">Επικοινωνήστε</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Ψηφιακοί Ταχογράφοι - ΚΤΕΟ */}
            <Card className="border-2 border-gray-200 hover:border-brand transition">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-brand" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Ψηφιακοί Ταχογράφοι - Κ.Τ.Ε.Ο.</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Εγκατάσταση ψηφιακών ταχογράφων</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Διαδικασίες Κ.Τ.Ε.Ο.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Τεχνικός έλεγχος οχημάτων</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link to="/contact">Επικοινωνήστε</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Μεταβιβάσεις */}
            <Card className="border-2 border-gray-200 hover:border-brand transition">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-8 h-8 text-brand" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Μεταβιβάσεις Ι.Χ.Ε. / Φ.Ι.Χ.</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Μεταβίβαση αυτοκινήτων</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Μεταβίβαση φορτηγών</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Πλήρη νομική υποστήριξη</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link to="/contact">Επικοινωνήστε</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Άδειες Οδικού Μεταφορέα */}
            <Card className="border-2 border-gray-200 hover:border-brand transition">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-brand" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Άδειες Οδικού Μεταφορέα</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Έκδοση αδειών μεταφορέα</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Ανανεώσεις αδειών</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Τροποποιήσεις αδειών</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link to="/contact">Επικοινωνήστε</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Επικίνδυνα Φορτία A.D.R. */}
            <Card className="border-2 border-gray-200 hover:border-brand transition">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-brand" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Επικίνδυνα Φορτία (A.D.R.)</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Πιστοποίηση A.D.R.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Άδειες μεταφοράς επικίνδυνων φορτίων</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Πλήρης συμβουλευτική υποστήριξη</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link to="/contact">Επικοινωνήστε</Link>
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
            <p className="text-xl text-gray-600">Εξειδικευμένες λύσεις για κάθε ανάγκη</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Απώλειες Διπλωμάτων - Φθορές</h3>
                  <p className="text-gray-600 mb-4">
                    Άμεση αντικατάσταση χαμένων ή φθαρμένων διπλωμάτων οδήγησης με γρήγορη διαδικασία.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Car className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Μετατροπές σε Ε.Ο.Κ.</h3>
                  <p className="text-gray-600 mb-4">
                    Μετατροπή οχημάτων σύμφωνα με τις προδιαγραφές της Ευρωπαϊκής Ένωσης.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Truck className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Εκτελωνισμοί Ι.Χ.Ε. - Τρέιλερ</h3>
                  <p className="text-gray-600 mb-4">
                    Ολοκληρωμένες υπηρεσίες εκτελωνισμού για αυτοκίνητα και ρυμουλκούμενα από το εξωτερικό.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Πινακίδες σε Ανάριθμα Ι.Χ.Ε.</h3>
                  <p className="text-gray-600 mb-4">
                    Έκδοση πινακίδων κυκλοφορίας για ανάριθμα οχήματα με γρήγορη διεκπεραίωση.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Γιατί να μας Εμπιστευτείτε</h2>
            <p className="text-xl text-gray-600">Τα πλεονεκτήματα του γραφείου μας</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-brand" />
              </div>
              <h3 className="font-bold mb-2">Εμπειρία</h3>
              <p className="text-gray-600">Πολυετής εμπειρία στο χώρο</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-brand" />
              </div>
              <h3 className="font-bold mb-2">Ταχύτητα</h3>
              <p className="text-gray-600">Γρήγορη διεκπεραίωση όλων των υποθέσεων</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-brand" />
              </div>
              <h3 className="font-bold mb-2">Προσωπική Εξυπηρέτηση</h3>
              <p className="text-gray-600">Εξατομικευμένη φροντίδα για κάθε πελάτη</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-brand" />
              </div>
              <h3 className="font-bold mb-2">Ολοκληρωμένες Λύσεις</h3>
              <p className="text-gray-600">Αναλαμβάνουμε όλη τη διαδικασία</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Χρειάζεστε κάποια από τις Υπηρεσίες μας;
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Επικοινωνήστε μαζί μας σήμερα για περισσότερες πληροφορίες
          </p>
          <Button asChild size="lg" className="bg-white text-brand hover:bg-gray-100">
            <Link to="/contact">Επικοινωνήστε Τώρα</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
