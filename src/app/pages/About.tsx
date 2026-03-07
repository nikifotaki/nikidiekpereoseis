import { Award, Users, Car, TrendingUp, Shield, Heart, FileText, Clock } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

export function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20" style={{ background: `linear-gradient(to right, var(--brand-primary-gradient-from), var(--brand-primary-gradient-to))` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Σχετικά με το Γραφείο μας</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Παρέχουμε ποιοτικές υπηρεσίες διεκπεραίωσης οχημάτων, με πολυετή εμπειρία στον χώρο.
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
                Στο Γραφείο Διεκπεραιώσεων Νίκη Φωτάκη, η αποστολή μας είναι να παρέχουμε ολοκληρωμένες, 
                υψηλής ποιότητας υπηρεσίες που καλύπτουν κάθε ανάγκη που σχετίζεται με τη διοικητική 
                διαχείριση των οχημάτων σας.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Πιστεύουμε ότι η εξυπηρέτηση των πελατών μας είναι κάτι περισσότερο από την απλή 
                διεκπεραίωση εγγράφων – πρόκειται για τη δημιουργία σχέσεων εμπιστοσύνης και την 
                παροχή λύσεων που διευκολύνουν την καθημερινότητά τους.
              </p>
              <p className="text-lg text-gray-600">
                Με πολυετή εμπειρία, έχουμε εξυπηρετήσει χιλιάδες πελάτες, και είμαστε αφοσιωμένοι 
                να συνεχίσουμε αυτή την παράδοση αριστείας και επαγγελματισμού.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB3b3JrfGVufDF8fHx8MTc0MTQ1NDgwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Επαγγελματικό Περιβάλλον"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-[clamp(1.5rem,5vw,2.5rem)] font-bold text-brand mb-2 break-words">
                Πολυετής
              </div>
              <div className="text-gray-600 break-words">Εμπειρία</div>
            </div>

            <div>
              <div className="text-[clamp(1.5rem,5vw,2.5rem)] font-bold text-brand mb-2 break-words">
                Εκατοντάδες
              </div>
              <div className="text-gray-600 break-words">Ικανοποιημένοι Πελάτες</div>
            </div>

            <div>
              <div className="text-[clamp(1.5rem,5vw,2.5rem)] font-bold text-brand mb-2 break-words">
                Απόλυτος
              </div>
              <div className="text-gray-600 break-words">Επαγγελματισμός</div>
            </div>

            <div>
              <div className="text-[clamp(1.5rem,5vw,2.5rem)] font-bold text-brand mb-2 break-words">
                Άμεση
              </div>
              <div className="text-gray-600 break-words">Εξυπηρέτηση</div>
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
              <h3 className="text-xl font-bold mb-3">Αξιοπιστία</h3>
              <p className="text-gray-600">
                Διαχειριζόμαστε τα έγγραφά σας με απόλυτη ασφάλεια και εμπιστευτικότητα, 
                διασφαλίζοντας την ομαλή διεκπεραίωση κάθε υπόθεσης.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-brand" />
              </div>
              <h3 className="text-xl font-bold mb-3">Εξατομικευμένη Εξυπηρέτηση</h3>
              <p className="text-gray-600">
                Κάθε πελάτης είναι μοναδικός για εμάς. Προσφέρουμε εξατομικευμένες λύσεις 
                που ανταποκρίνονται στις συγκεκριμένες ανάγκες σας.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-brand" />
              </div>
              <h3 className="text-xl font-bold mb-3">Επαγγελματισμός</h3>
              <p className="text-gray-600">
                Είμαστε αφοσιωμένοι στη διατήρηση των υψηλότερων προτύπων στις υπηρεσίες μας 
                και στη συνεχή βελτίωση της εξυπηρέτησής μας.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Το Εύρος των Υπηρεσιών μας</h2>
            <p className="text-xl text-gray-600">Καλύπτουμε κάθε σας ανάγκη</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Διπλώματα Οδήγησης</h3>
                    <p className="text-gray-600">
                      Ανανεώσεις, απώλειες, φθορές και όλες οι σχετικές διαδικασίες για τα διπλώματά σας.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <Car className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Μεταβιβάσεις Οχημάτων</h3>
                    <p className="text-gray-600">
                      Πλήρης διαχείριση μεταβιβάσεων Ι.Χ.Ε. και Φ.Ι.Χ. με ταχύτητα και ασφάλεια.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Επαγγελματικές Άδειες</h3>
                    <p className="text-gray-600">
                      Άδειες οδικού μεταφορέα, επικίνδυνα φορτία (A.D.R.) και Π.Ε.Ι.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Εκτελωνισμοί</h3>
                    <p className="text-gray-600">
                      Εκτελωνισμοί Ι.Χ.Ε. και τρέιλερ, μετατροπές σε Ε.Ο.Κ. και πινακίδες.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Βρείτε μας</h2>
              <p className="text-lg text-gray-600 mb-6">
                Το γραφείο μας βρίσκεται σε κεντρικό σημείο του Πειραιά, εύκολα προσβάσιμο 
                για την εξυπηρέτησή σας. Επισκεφθείτε μας για άμεση εξυπηρέτηση.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Car className="w-6 h-6 text-brand" />
                  <span className="text-gray-700">Εύκολη πρόσβαση με αυτοκίνητο</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Car className="w-6 h-6 text-brand" />
                  <span className="text-gray-700">Κεντρική τοποθεσία</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Car className="w-6 h-6 text-brand" />
                  <span className="text-gray-700">Άνετος χώρος αναμονής</span>
                </li>
              </ul>
            </div>

              {/* Map Embed */}
              <iframe
                className="w-full h-64 rounded-lg"
                src="https://www.google.com/maps?q=Θηβών+145+18542+Πειραιάς+Ελλάδα&output=embed"
                allowFullScreen
                loading="lazy"
              ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
