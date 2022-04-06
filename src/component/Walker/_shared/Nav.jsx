import './css/navStyle.css'

export default function Nav() {
    return (
        <div>


            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src="/img/logo.png" className="logoNav" alt="logo Simplex-Immo" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarColor02">
                        <ul class="navbar-nav me-auto">
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Actualité
                                    <span class="visually-hidden">(current)</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Artciles &amp; Tutoriels</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Forum</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Nos tarifs</a>
                            </li>
                        </ul>
                        <ul class="">
                            <li class="nav-item d-flex">
                                <a class="nav-link" href="#">Connexion</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </div>
    );
}
