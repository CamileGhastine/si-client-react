export default function News() {
    const news = [0, 1, 2, 3, 4, 5, 6]

    return (
        <section className="card text-white bg-secondary border-warning mb-3 row ms-5">
            <h2 className="card-header text-center">Actualité</h2>
            { news.map((key) =>
                < div className="card-body row" key={ key }>
                    <div className="col-2 text-center d-flex align-items-center"><img src="/img/post.jpg" alt="stop" className="img-thumbnail" /></div>
                    <div className="col-10 card-title d-flex align-items-center ps-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dolores?</div>
                </div>
            )
            }
        </section >
    )
}