export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__copyright">
        &copy; {year} Sydney
      </p>
      <p className="footer__tagline">
        &lt;designed &amp; developed with precision /&gt;
      </p>
    </footer>
  );
}
