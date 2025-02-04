import "../styles/footer.css";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>© {new Date().getFullYear()} Rajasthan Bartenders. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
