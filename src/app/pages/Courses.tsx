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
            <p className="text-xl text-gray-600">Ολοκληρωμένες λύσεις για όλες τις ανάγκες σας</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Υπηρεσίες Διπλωμάτων */}
            <Card className="border-2 border-gray-200 hover:border-brand transition h-full">
              <CardContent className="pt-8 pb-8 flex flex-col h-full">
                <div className="w-14 h-14 bg-brand-light rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-7 h-7 text-brand" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Υπηρεσίες Διπλωμάτων</h3>
                <ul className="space-y-3 flex-grow">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Ανανεώσεις Διπλωμάτων</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Απώλειες Διπλωμάτων & Φθορές</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Μετατροπές σε Κοινοτικού Τύπου (ΕΟΚ)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Προσθήκη (121) Μοτοσυκλέτας Ανευ Εξετάσεων</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Ανανεώσεις Διπλωμάτων Ταχυπλού</span>
                  </li>
                </ul>
                <Button asChild className="w-full mt-6">
                  <Link to="/contact">Επικοινωνήστε</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Επαγγελματικές Πιστοποιήσεις */}
            <Card className="border-2 border-gray-200 hover:border-brand transition h-full">
              <CardContent className="pt-8 pb-8 flex flex-col h-full">
                <div className="w-14 h-14 bg-brand-light rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-7 h-7 text-brand" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Επαγγελματικές Πιστοποιήσεις</h3>
                <ul className="space-y-3 flex-grow">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Π.Ε.Ι. (Κατηγ. Γ' & Δ')</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Έκδοση ειδικής άδειας ταξί & ανανεώση</span>
                  </li>
                </ul>
                <Button asChild className="w-full mt-6">
                  <Link to="/contact">Επικοινωνήστε</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Μεταβιβάσεις & Τροποποιήσεις */}
            <Card className="border-2 border-gray-200 hover:border-brand transition h-full">
              <CardContent className="pt-8 pb-8 flex flex-col h-full">
                <div className="w-14 h-14 bg-brand-light rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Car className="w-7 h-7 text-brand" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Μεταβιβάσεις & Τροποποιήσεις</h3>
                <ul className="space-y-3 flex-grow">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Μεταβιβάσεις Ι.Χ.Ε. / Φ.Ι.Χ. / Μοτο</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Αλλαγή Χρώματος</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Αλλαγή Κινητήρα</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Τρέιλερ</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Διαγραφή & Κληρονομικό</span>
                  </li>
                </ul>
                <Button asChild className="w-full mt-6">
                  <Link to="/contact">Επικοινωνήστε</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Εκτελωνισμοί & Πινακίδες */}
            <Card className="border-2 border-gray-200 hover:border-brand transition h-full">
              <CardContent className="pt-8 pb-8 flex flex-col h-full">
                <div className="w-14 h-14 bg-brand-light rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-7 h-7 text-brand" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Εκτελωνισμοί & Πινακίδες</h3>
                <ul className="space-y-3 flex-grow">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Εκτελωνισμοί Ι.Χ.Ε.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Πινακίδες σε Ανάριθμα</span>
                  </li>
                </ul>
                <Button asChild className="w-full mt-6">
                  <Link to="/contact">Επικοινωνήστε</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Άδειες Μεταφορέα & ADR */}
            <Card className="border-2 border-gray-200 hover:border-brand transition h-full">
              <CardContent className="pt-8 pb-8 flex flex-col h-full">
                <div className="w-14 h-14 bg-brand-light rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Package className="w-7 h-7 text-brand" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Άδειες & Ειδικές Υπηρεσίες</h3>
                <ul className="space-y-3 flex-grow">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Άδειες Οδικού Μεταφορέα</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Επικίνδυνα Φορτία (A.D.R.)</span>
                  </li>
                                    <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">ΚΤΕΟ - Αναλαμβάνουμε την παραλαβή του οχήματος σας από το χώρο σας</span>
                  </li>
                </ul>
                <Button asChild className="w-full mt-6">
                  <Link to="/contact">Επικοινωνήστε</Link>
                </Button>
              </CardContent>
            </Card>

            {/* ΨΗΦΙΑΚΟΙ ΤΑΧΟΓΡΑΦΟΙ */}
            <Card className="border-2 border-gray-200 hover:border-brand transition h-full">
              <CardContent className="pt-8 pb-8 flex flex-col h-full">
                <div className="w-14 h-14 bg-brand-light rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-7 h-7 text-brand" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Ψηφιακοί Ταχογράφοι</h3>
                <ul className="space-y-3 flex-grow">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Έκδοση Ψηφιακών Ταχογράφων</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Ανανεώσεις</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Απώλειες</span>
                  </li>
                </ul>
                <Button asChild className="w-full mt-6">
                  <Link to="/contact">Επικοινωνήστε</Link>
                </Button>
              </CardContent>
            </Card>


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
