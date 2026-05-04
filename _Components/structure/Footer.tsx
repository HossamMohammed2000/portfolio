export default function Footer() {
  return (
    <footer className="py-6 text-center text-white/50 border-t border-white/10">
      © {new Date().getFullYear()} Portfolio
      {/* some social links */}
      <div className="mt-2 space-x-4">
        <a href="https://github.com/HossamMohammed2000" target="_blank">
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/hossam-mohamed-15157822a"
          target="_blank"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
