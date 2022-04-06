import './css/headerStyle.css'

export default function Header() {
    return (
        <header class="row text-center pb-5">
            <p className="simplexHeader col-12 d-flex align-items-end justify-content-center py-3">
                <img src="/img/logoContoure.png" className="logoHeader" alt="logo Simplex-Immo" />
                <span><span class="hidden">S</span>implex-Immo</span>

            </p>
            <p class="sentenceHeader col-12">Pourquoi payer ce que vous pouvez ne pas faire à la place d'un autre ?</p>
            <div className="col-12"><a role="button" class="btn btn-warning">Voir une démo</a></div>
        </header>
    );
}
