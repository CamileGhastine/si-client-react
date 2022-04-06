import './css/headerStyle.css'

export default function Header() {
    return (
        <header className="row text-center pb-5">
            <p className="simplexHeader col-12 d-flex align-items-end justify-content-center py-3">
                <img src="/img/logoContoure.png" className="logoHeader" alt="logo Simplex-Immo" />
                <span><span className="hidden">S</span>implex-Immo</span>

            </p>
            <p className="sentenceHeader col-12">Pourquoi payer ce que vous pouvez ne pas faire à la place d'un autre ?</p>
            <div className="col-12"><a role="button" className="btn btn-warning">Voir une démo</a></div>
        </header>
    );
}
