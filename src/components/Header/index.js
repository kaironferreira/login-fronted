import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


function Header() {

  const { auth } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">API Login</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" href="/">Home</a>
            <a className="nav-link" href="/login">Login</a>
            <a className="nav-link" href="/register">Registre-se</a>
          </div>
        </div>

        {auth.user && <span className="text-white">Seja bem vindo(a)! <strong>{auth.user?.name}</strong></span>}
        
      </div>

    </nav>
  );
}

export default Header;