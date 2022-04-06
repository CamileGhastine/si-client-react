import Header from './_shared/Header'
import Nav from './_shared/Nav'
import Footer from './_shared/Footer'
import Page from './Pages/Page'

export default function Walker_base() {
    return (
        <div >
            <Header />
            <Nav />
            <div className="container"><Page /></div>
            <Footer />
        </div>
    );
}
