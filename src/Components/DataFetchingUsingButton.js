import axios from 'axios'
import React, {useState, useEffect} from 'react'

function DataFetchingUsingButton() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const handleClick = ()=>{
        setIdFromButtonClick(id)
    }
    
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res =>{
           
            setPost(res.data)
            console.log(res)
        })
        .catch(err=>{
            console.log(err);
        })
    },[idFromButtonClick])

  return (
    <div>
        <input type="text" value={id}  onChange={e => setId(e.target.value)} />
        <button type='button' onClick={handleClick}>Fetch Post</button>
        <div>{post.title}</div>
        {/* <ul>
            {
                posts.map(post => <li key={post.id}>{post.title}</li>)                  //code for all map array of Posts
            }
        </ul> */}
    </div>
  )
}

export default DataFetchingUsingButton