import './css/footerStyle.css'

export default function Footer() {
    return (
        <footer className="row text-center navbar-dark bg-dark py-2 d-flex align-items-center">
            <div className="col-5 ">
                <a href="">Mentions légales</a></div>
            <div className="col-2">
                <a className="navbar-brand" href="#">
                    <img src="/img/logo.png" className="logoFooter" alt="logo Simplex-Immo" />
                </a>
            </div>
            <div className="col-5">
                <a href="">Contactez-nous</a>
            </div>
        </footer>
    );
}

