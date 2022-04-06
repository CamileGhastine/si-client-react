import './css/homepageStyle.css'
import Promotion from './Promotion'
import News from './News'

export default function Homepage() {
    return (
        <div className="row mb-5 pb-5">
            <h1 className="simplexHomepage col-12 d-flex align-items-end justify-content-center py-3">
                <img src="/img/logoContoure.png" className="logoHeader" alt="logo Simplex-Immo" />
                <span className="pb-1"><span className="hidden">S</span>implex-Immo</span>

            </h1>
            <div className="col-8"><Promotion /></div>
            <div className="col-4"><News /></div>
        </div>
    )
}