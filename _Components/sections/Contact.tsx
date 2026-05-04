import ContactCards from "../Contact/ContactCards";
import ContactForm from "../Contact/ContactForm";


const contacts = [
  {
    label: "GitHub",
    value: "HossamMohammed2000",
    link: "https://github.com/HossamMohammed2000",
    icon: "💻",
  },
  {
    label: "LinkedIn",
    value: "hossam-mohamed",
    link: "https://linkedin.com/in/hossam-mohamed-15157822a",
    icon: "🔗",
  },
  { label: "Phone", value: "+20 111 821 956 3", icon: "📞" },
];

export default function Contact() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-20 space-y-16">
      <div className="text-center text-white">
        <h1 className="text-3xl font-bold">Get In Touch</h1>
      </div>

      <ContactCards contacts={contacts} />

      <ContactForm />
    </section>
  );
}
