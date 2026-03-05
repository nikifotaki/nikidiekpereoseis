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
            Είμαστε εδώ για να σας εξυπηρετήσουμε με κάθε διεκπεραίωση που χρειάζεστε
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
                  <Label htmlFor="service">Υπηρεσία που σας Ενδιαφέρει</Label>
                  <Select>
                    <SelectTrigger id="service">
                      <SelectValue placeholder="Επιλέξτε υπηρεσία" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="renewal">Ανανέωση Διπλώματος</SelectItem>
                      <SelectItem value="extension">Επεκτάσεις - Π.Ε.Ι. - Ε.Α.Τ.</SelectItem>
                      <SelectItem value="tachograph">Ψηφιακοί Ταχογράφοι - Κ.Τ.Ε.Ο.</SelectItem>
                      <SelectItem value="transfer">Μεταβίβαση Οχήματος</SelectItem>
                      <SelectItem value="transport">Άδεια Οδικού Μεταφορέα</SelectItem>
                      <SelectItem value="adr">Επικίνδυνα Φορτία (A.D.R.)</SelectItem>
                      <SelectItem value="lost">Απώλεια/Φθορά Διπλώματος</SelectItem>
                      <SelectItem value="eok">Μετατροπή σε Ε.Ο.Κ.</SelectItem>
                      <SelectItem value="customs">Εκτελωνισμός</SelectItem>
                      <SelectItem value="plates">Πινακίδες Ανάριθμων</SelectItem>
                      <SelectItem value="other">Άλλο</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Μήνυμα</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Περιγράψτε τι χρειάζεστε..."
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Στοιχεία Επικοινωνίας</h2>
              <p className="text-lg text-gray-600 mb-8">
                Επικοινωνήστε μαζί μας με οποιονδήποτε τρόπο σας εξυπηρετεί καλύτερα. 
                Είμαστε πάντα στη διάθεσή σας για να απαντήσουμε σε κάθε σας ερώτηση.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Τηλέφωνα</h3>
                    <p className="text-gray-600">2104901994</p>
                    <p className="text-gray-600">6945262001</p>
                    <p className="text-sm text-gray-500 mt-1">Δευ-Παρ: 8:00-17:00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">fotaki71@gmail.com</p>
                    <p className="text-sm text-gray-500">Απαντάμε εντός 24 ωρών</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Διεύθυνση Γραφείου</h3>
                    <p className="text-gray-600">Θηβών 145</p>
                    <p className="text-gray-600">Πειραιάς</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Ώρες Λειτουργίας</h3>
                    <p className="text-gray-600">Δευτέρα - Παρασκευή: 8:00 - 17:00</p>
                    <p className="text-gray-600">Σάββατο - Κυριακή: Κλειστά</p>
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
                <h3 className="font-bold text-lg mb-2">Τι έγγραφα χρειάζομαι για ανανέωση διπλώματος;</h3>
                <p className="text-gray-600">
                  Θα χρειαστείτε την αστυνομική σας ταυτότητα, το παλιό σας δίπλωμα, δύο φωτογραφίες και 
                  ιατρική βεβαίωση. Εμείς αναλαμβάνουμε όλη τη διαδικασία για εσάς.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-2">Πόσο χρόνο χρειάζεται μια μεταβίβαση;</h3>
                <p className="text-gray-600">
                  Μια τυπική μεταβίβαση ολοκληρώνεται σε 3-5 εργάσιμες ημέρες. Σε επείγουσες περιπτώσεις 
                  μπορούμε να επιταχύνουμε τη διαδικασία.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-2">Προσφέρετε υπηρεσίες για επαγγελματικά οχήματα;</h3>
                <p className="text-gray-600">
                  Ναι, εξειδικευόμαστε σε όλες τις διαδικασίες για επαγγελματικά οχήματα, φορτηγά, 
                  ταξί και λεωφορεία. Αναλαμβάνουμε άδειες μεταφορέα, Π.Ε.Ι., και όλες τις σχετικές διαδικασίες.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-2">Τι γίνεται αν έχασα το δίπλωμά μου;</h3>
                <p className="text-gray-600">
                  Μην ανησυχείτε! Αναλαμβάνουμε άμεσα την έκδοση αντιγράφου. Η διαδικασία είναι γρήγορη 
                  και θα έχετε το νέο σας δίπλωμα σε λίγες ημέρες.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-2">Πρέπει να έρθω στο γραφείο προσωπικά;</h3>
                <p className="text-gray-600">
                  Για ορισμένες υπηρεσίες μπορεί να χρειαστεί μια σύντομη επίσκεψη για υπογραφές. 
                  Ωστόσο, μπορούμε να διεκπεραιώσουμε πολλές υποθέσεις και εξ αποστάσεως. 
                  Επικοινωνήστε μαζί μας για να δούμε τις επιλογές.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
