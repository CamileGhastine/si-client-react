import axios from 'axios'
import { useEffect, useState } from 'react'

export default function News() {
    const [posts, setPosts] = useState([])

    useEffect(() => getNews(), [])

    const getNews = () => {
        axios.get(`https://127.0.0.1:8001/api/posts`)
            .then(function (response) {
                setPosts(response.data["hydra:member"])
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    return (
        <section className="card text-white bg-secondary border-warning mb-3 row ms-5">
            <h2 className="card-header text-center">Actualité</h2>
            {
                posts.map((post) =>
                    <a href="" className="newsLink" key={ 'post' + post.id }>
                        < div className="card-body row">
                            <div className="col-2 text-center d-flex align-items-center"><img src="/img/post.jpg" alt="stop" className="img-thumbnail" /></div>
                            <div className="col-10 card-title d-flex align-items-center ps-2">{ post.title }</div>
                        </div>
                    </a>
                )
            }
        </section >
    )
}