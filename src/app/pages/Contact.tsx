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
import React, { useState } from "react";
import emailjs from '@emailjs/browser';

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      service: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration - Replace with your actual IDs
      const serviceId = 'service_237skbg';
      const templateId = 'template_nencndb';
      const publicKey = 'PYAXthzFcO3jzqgDT';
      console.log('Sending email with data:', formData);

      const templateParams = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        to_email: 'sgta52015@gmail.com' // Your email address to receive the message
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Όνομα</Label>
                    <Input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Γιάννης"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Επώνυμο</Label>
                    <Input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Παπαδόπουλος"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Διεύθυνση Email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="giannis.papadopoulos@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Τηλέφωνο</Label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="210 123 4567"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Υπηρεσία που σας Ενδιαφέρει</Label>
                  <Select value={formData.service} onValueChange={handleSelectChange}>
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
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Περιγράψτε τι χρειάζεστε..."
                    required
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                    <p className="text-green-800">Το μήνυμά σας στάλθηκε επιτυχώς! Θα επικοινωνήσουμε μαζί σας σύντομα.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                    <p className="text-red-800">Υπήρξε πρόβλημα με την αποστολή του μηνύματος. Παρακαλώ δοκιμάστε ξανά ή επικοινωνήστε μαζί μας τηλεφωνικά.</p>
                  </div>
                )}

                <Button type="submit" className="w-full bg-brand hover:bg-brand-hover" disabled={isSubmitting}>
                  {isSubmitting ? 'Αποστολή...' : 'Αποστολή Μηνύματος'}
                  <Send className="w-5 h-5 ml-2" />
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
                    <a
                    href="tel:+302104901994"
                    className="text-gray-600 hover:text-brand transition"
                  >
                    210 4901994
                  </a>
                  <br />
                                      <a
                    href="tel:+306945262001"
                    className="text-gray-600 hover:text-brand transition"
                  >
                    694 5262001
                  </a>
                    {/* <p className="text-sm text-gray-500 mt-1">Δευ-Παρ: 8:00-17:00</p> */}
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                    <a
                    href="mailto:fotaki71@gmail.com"
                    className="text-gray-600 hover:text-brand transition"
                  >
                    fotaki71@gmail.com
                  </a>
                    <p className="text-sm text-gray-500">Απαντάμε εντός 24 ωρών</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Διεύθυνση Γραφείου</h3>
                                      <a
                    href="https://www.google.com/maps/search/?api=1&query=Θηβών+145+Πειραιάς+18542"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-brand transition"
                  >
                    Θηβών 145<br />
                    TK 18542 Πειραιάς<br />
                    Ελλάδα
                  </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Ώρες Λειτουργίας</h3>
                    <p className="text-gray-600">Δευτέρα & Τετάρτη: 9:00 - 17:00</p>
                    <p className="text-gray-600">Τρίτη - Πέμπτη - Παρασκευή: 9:00 - 14:00 & 17:00 - 20:00</p>
                    <p className="text-gray-600">Σάββατο - Κυριακή: Κλειστά</p>
                  </div>
                </div>
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
                  Θα χρειαστείτε την αστυνομική σας ταυτότητα, το παλιό σας δίπλωμα, δύο φωτογραφίες έγχρωμες διαβατηρίου και 
                  ιατρικές βεβαιώσεις. Εμείς αναλαμβάνουμε όλη τη διαδικασία για εσάς.
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
