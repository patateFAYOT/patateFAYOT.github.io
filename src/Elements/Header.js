import 'bootstrap/dist/css/bootstrap.css';
import './Header.css';

function Header() {
  return (
    <header className="Header">
      <nav class="navbar navbar-dark p-3">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1 ms-5">Claire Saba</span>
          <a class="nav-link active" aria-current="page" href="#footer">Contact</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
