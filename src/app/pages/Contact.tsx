import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Card, CardContent } from "../components/ui/card";

export function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20" style={{ background: `linear-gradient(to right, var(--brand-primary-gradient-from), var(--brand-primary-gradient-to))` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Επικοινωνήστε Μαζί μας</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Επικοινωνήστε μαζί μας για να κλείσετε τα μαθήματά σας ή να κάνετε οποιεσδήποτε ερωτήσεις
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Στείλτε μας Μήνυμα</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Όνομα</Label>
                    <Input
                      type="text"
                      id="firstName"
                      placeholder="Γιάννης"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Επώνυμο</Label>
                    <Input
                      type="text"
                      id="lastName"
                      placeholder="Παπαδόπουλος"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Διεύθυνση Email</Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="giannis.papadopoulos@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Τηλέφωνο</Label>
                  <Input
                    type="tel"
                    id="phone"
                    placeholder="210 123 4567"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="course">Ενδιαφέρομαι για</Label>
                  <Select>
                    <SelectTrigger id="course">
                      <SelectValue placeholder="Επιλέξτε μάθημα" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Πακέτο Αρχαρίων</SelectItem>
                      <SelectItem value="standard">Βασικό Πακέτο</SelectItem>
                      <SelectItem value="premium">Πακέτο Premium</SelectItem>
                      <SelectItem value="individual">Μεμονωμένα Μαθήματα</SelectItem>
                      <SelectItem value="road-test">Πακέτο Εξετάσεων</SelectItem>
                      <SelectItem value="refresher">Μάθημα Ανανέωσης</SelectItem>
                      <SelectItem value="senior">Μάθημα για Ηλικιωμένους</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Μήνυμα</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Πείτε μας για τις ανάγκες σας και το προτιμώμενο πρόγραμμά σας..."
                  />
                </div>

                <Button type="submit" className="w-full bg-brand hover:bg-brand-hover">
                  <Send className="w-5 h-5" />
                  Αποστολή Μηνύματος
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Επικοινωνία</h2>
              <p className="text-lg text-gray-600 mb-8">
                Θα χαρούμε να ακούσουμε από εσάς! Επικοινωνήστε μαζί μας μέσω οποιασδήποτε από τις παρακάτω μεθόδους, 
                και θα σας απαντήσουμε το συντομότερο δυνατόν.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Τηλέφωνο</h3>
                    <p className="text-gray-600">210 123 4567</p>
                    <p className="text-sm text-gray-500">Δευ-Παρ: 8πμ-8μμ, Σαβ-Κυρ: 9πμ-5μμ</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@sostaodigο.gr</p>
                    <p className="text-sm text-gray-500">Απαντάμε εντός 24 ωρών</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Γραφεία</h3>
                    <p className="text-gray-600">Λεωφόρος Αθηνών 123</p>
                    <p className="text-gray-600">Αθήνα, 104 42</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Ώρες Λειτουργίας</h3>
                    <p className="text-gray-600">Δευτέρα - Παρασκευή: 8:00 πμ - 8:00 μμ</p>
                    <p className="text-gray-600">Σάββατο: 9:00 πμ - 5:00 μμ</p>
                    <p className="text-gray-600">Κυριακή: 9:00 πμ - 5:00 μμ</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <MapPin className="w-16 h-16 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Συχνές Ερωτήσεις</h2>
            <p className="text-xl text-gray-600">Γρήγορες απαντήσεις σε κοινές ερωτήσεις</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-2">Πώς κλείνω το πρώτο μου μάθημα;</h3>
                <p className="text-gray-600">
                  Απλά συμπληρώστε τη φόρμα επικοινωνίας παραπάνω ή τηλεφωνήστε μας. Θα συζητήσουμε τις ανάγκες σας και 
                  θα προγραμματίσουμε μια βολική ώρα για το πρώτο σας μάθημα.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-2">Τι πρέπει να φέρω στο πρώτο μου μάθημα;</h3>
                <p className="text-gray-600">
                  Φέρτε την άδεια μαθητευόμενου οδηγού ή την άδεια οδήγησής σας, άνετα παπούτσια και θετική διάθεση! 
                  Εμείς παρέχουμε όλο το απαραίτητο εκπαιδευτικό υλικό.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-2">Μπορώ να επιλέξω τον εκπαιδευτή μου;</h3>
                <p className="text-gray-600">
                  Ναι! Ενώ θα κάνουμε την καλύτερη επιλογή για τις ανάγκες σας, μπορείτε να ζητήσετε συγκεκριμένο 
                  εκπαιδευτή βάσει διαθεσιμότητας.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-2">Προσφέρετε σχέδια πληρωμής;</h3>
                <p className="text-gray-600">
                  Ναι, προσφέρουμε ευέλικτα σχέδια πληρωμής για όλα τα πακέτα μας. Συζητήστε τις επιλογές μαζί μας όταν 
                  κλείσετε τα μαθήματά σας.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-2">Ποια είναι η πολιτική ακύρωσης;</h3>
                <p className="text-gray-600">
                  Απαιτούμε ειδοποίηση 24 ωρών για ακυρώσεις. Μαθήματα που ακυρώνονται με μικρότερη προειδοποίηση μπορεί να 
                  χρεωθούν το 50% της αξίας του μαθήματος.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
