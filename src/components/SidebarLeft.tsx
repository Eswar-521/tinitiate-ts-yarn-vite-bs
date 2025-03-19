import { List } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="nav flex-column">
      <h4><List /> Menu</h4>
      <Link to="/" className="nav-link">🏠 Home</Link>
      <Link to="/about" className="nav-link">ℹ️ About</Link>
      <Link to="/services" className="nav-link">💼 Services</Link>
      <Link to="/contact" className="nav-link">📞 Contact</Link>
      <Link to="/profile" className="nav-link">👤 Profile</Link>
    </nav>
  );
};

export default Sidebar;
