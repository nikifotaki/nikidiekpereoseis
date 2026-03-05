import { Award, Users, Car, TrendingUp, Shield, Heart } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

export function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20" style={{ background: `linear-gradient(to right, var(--brand-primary-gradient-from), var(--brand-primary-gradient-to))` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Σχετικά με τη ΣωστάΟδηγώ</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Παρέχουμε ποιοτική εκπαίδευση οδηγών και δημιουργούμε σίγουρους, ασφαλείς οδηγούς από το 2011
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Η Αποστολή μας</h2>
              <p className="text-lg text-gray-600 mb-4">
                Στη Σχολή Οδηγών ΣωστάΟδηγώ, η αποστολή μας είναι να παρέχουμε ολοκληρωμένη, υψηλής ποιότητας 
                εκπαίδευση οδηγών που δίνει τη δυνατότητα στους μαθητές να γίνουν ασφαλείς, σίγουροι και υπεύθυνοι οδηγοί.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Πιστεύουμε ότι η εκμάθηση οδήγησης είναι κάτι περισσότερο από το να περάσεις μια εξέταση – πρόκειται για την 
                ανάπτυξη δεξιοτήτων και συνηθειών που θα σε κρατήσουν εσένα και τους άλλους ασφαλείς στο δρόμο.
              </p>
              <p className="text-lg text-gray-600">
                Με πάνω από 15 χρόνια εμπειρίας, έχουμε βοηθήσει χιλιάδες μαθητές να επιτύχουν τους στόχους οδήγησής τους, 
                και είμαστε αφοσιωμένοι να συνεχίσουμε αυτή την παράδοση αριστείας.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1764547169175-9b7d2736324e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkcml2aW5nJTIwaW5zdHJ1Y3RvcnxlbnwxfHx8fDE3NzIwNDE0MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Επαγγελματίας Εκπαιδευτής"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-brand mb-2">15+</div>
              <div className="text-gray-600">Χρόνια Εμπειρίας</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-brand mb-2">10.000+</div>
              <div className="text-gray-600">Εκπαιδευμένοι Μαθητές</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-brand mb-2">95%</div>
              <div className="text-gray-600">Επιτυχία Πρώτης Φοράς</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-brand mb-2">20+</div>
              <div className="text-gray-600">Έμπειροι Εκπαιδευτές</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Οι Βασικές μας Αξίες</h2>
            <p className="text-xl text-gray-600">Αυτό που μας ξεχωρίζει</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-brand" />
              </div>
              <h3 className="text-xl font-bold mb-3">Ασφάλεια Πρώτα</h3>
              <p className="text-gray-600">
                Δίνουμε προτεραιότητα στην ασφάλεια σε κάθε πτυχή της εκπαίδευσής μας, διασφαλίζοντας ότι οι μαθητές 
                μαθαίνουν αμυντικές τεχνικές οδήγησης και αναπτύσσουν ασφαλείς συνήθειες.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-brand" />
              </div>
              <h3 className="text-xl font-bold mb-3">Υπομονή & Υποστήριξη</h3>
              <p className="text-gray-600">
                Καταλαβαίνουμε ότι κάθε μαθητής μαθαίνει με τον δικό του ρυθμό. Οι εκπαιδευτές μας παρέχουν υπομονετική, 
                ενθαρρυντική καθοδήγηση καθ' όλη τη διάρκεια της μαθησιακής διαδικασίας.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-brand" />
              </div>
              <h3 className="text-xl font-bold mb-3">Αριστεία</h3>
              <p className="text-gray-600">
                Είμαστε αφοσιωμένοι στη διατήρηση των υψηλότερων προτύπων στην εκπαίδευση οδηγών και στη συνεχή 
                βελτίωση των υπηρεσιών μας.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Η Ομάδα των Ειδικών μας</h2>
            <p className="text-xl text-gray-600">Γνωρίστε τους πιστοποιημένους εκπαιδευτές οδήγησής μας</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-8">
                <div className="h-64 bg-gray-300 flex items-center justify-center mb-6 rounded-lg">
                  <Users className="w-24 h-24 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Μιχάλης Ιωάννου</h3>
                <p className="text-brand mb-4">Αρχικός Εκπαιδευτής</p>
                <p className="text-gray-600">
                  15+ χρόνια εμπειρίας. Ειδικεύεται σε νευρικούς αρχάριους και αμυντική οδήγηση.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-8">
                <div className="h-64 bg-gray-300 flex items-center justify-center mb-6 rounded-lg">
                  <Users className="w-24 h-24 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Ελένη Δημητρίου</h3>
                <p className="text-brand mb-4">Ανώτερη Εκπαιδεύτρια</p>
                <p className="text-gray-600">
                  12+ χρόνια εμπειρίας. Ειδική στην εκπαίδευση εφήβων οδηγών και προετοιμασία για εξετάσεις.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-8">
                <div className="h-64 bg-gray-300 flex items-center justify-center mb-6 rounded-lg">
                  <Users className="w-24 h-24 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Δημήτρης Παπαδόπουλος</h3>
                <p className="text-brand mb-4">Ανώτερος Εκπαιδευτής</p>
                <p className="text-gray-600">
                  10+ χρόνια εμπειρίας. Ειδικεύεται σε οδήγηση αυτοκινητόδρομου και προηγμένες τεχνικές.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Σύγχρονα, Ασφαλή Οχήματα</h2>
              <p className="text-lg text-gray-600 mb-6">
                Ο στόλος μας αποτελείται από σύγχρονα οχήματα εξοπλισμένα με τα πιο πρόσφατα χαρακτηριστικά ασφαλείας και 
                διπλά χειριστήρια για μέγιστη ασφάλεια κατά τη διάρκεια της εκπαίδευσης.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Car className="w-6 h-6 text-brand" />
                  <span className="text-gray-700">Διπλά χειριστήρια φρένου και επιταχυντή</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Car className="w-6 h-6 text-brand" />
                  <span className="text-gray-700">Προηγμένα χαρακτηριστικά ασφαλείας (ABS, αερόσακοι κ.λπ.)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Car className="w-6 h-6 text-brand" />
                  <span className="text-gray-700">Τακτική συντήρηση και επιθεωρήσεις</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Car className="w-6 h-6 text-brand" />
                  <span className="text-gray-700">Καθαρά, άνετα εσωτερικά</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <Car className="w-32 h-32 text-gray-400" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
