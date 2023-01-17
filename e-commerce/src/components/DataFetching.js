import React, {useState, useEffect} from "react";
import axios from "axios";

function DataFetching(){
    const [post, setPost] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:9000/api/v1/products')
        .then(res => {
            console.log(res);
            setPost(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }, [])
    return (
        <div>
            {
                post.map(post => (
                    <h1 key={post.id}>{post.name}</h1>
                ))
            }
            <ul>
                {
                    post.map(post => (
                        <li key={post.id}>{post.brand} {post.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}
export default DataFetching