import { useState } from 'react';
import './home.css';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import blogFetch from '../../axios/config';

const Home = () => {
const [posts,setPosts] = useState([])

const getPosts = async() => {
  try {
    const response = await blogFetch.get()
    const data  = response.data
    console.log(data)
setPosts(data) 
 } catch (error) {
    console.log(error)
  }
}
useEffect(() => {
  getPosts();
},[])
  return (
    <div className='home'>
      <h1>Ultimos posts</h1>
      {posts.length === 0 ? <p>Carregando</p> : (
        posts.map(post => (
          <div key={post.id} className="post">
            <h2>
            {post.title}  
            </h2>
            <p>{post.body}</p>
            <Link className='btn' to={`/post/${post.id}`}>Ler mais</Link>
          </div>
        ))
      )}
    </div>
  )
}

export default Home