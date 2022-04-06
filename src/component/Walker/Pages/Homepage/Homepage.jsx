import Promotion from './Promotion'
import News from './News'

export default function Homepage() {
    return (
        <div class="row">
            <div className="col-8"><Promotion /></div>
            <div className="col-4"><News /></div>
        </div>
    )
}