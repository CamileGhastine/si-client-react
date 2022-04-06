import './css/navStyle.css'

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="/img/logo.png" className="logoNav" alt="logo Simplex-Immo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav me-auto" key="news">
                        <li className="nav-item" key="news">
                            <a className="nav-link active" href="#">Actualité
                                <span className="visually-hidden">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item" key="posts">
                            <a className="nav-link" href="#">Artciles &amp; Tutoriels</a>
                        </li>
                        <li className="nav-item" key="forum">
                            <a className="nav-link" href="#">Forum</a>
                        </li>
                        <li className="nav-item" key="prices">
                            <a className="nav-link" href="#">Nos tarifs</a>
                        </li>
                    </ul>
                    <ul className="">
                        <li className="nav-item d-flex" key="connection">
                            <a className="nav-link" href="#">Connexion</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
