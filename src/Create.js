import { useState } from "react";
import {useHistory} from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [ispending, setispending]=useState(false);
  const history = useHistory();

  const handleSubmit=(e)=>{
    e.preventDefault();
    const blog={title, body, author};
    setispending(true);
    fetch('http://localhost:8000/blogs', {
      method:'POST',
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify(blog)
      
    }).then(()=>{
      console.log("new bolg added");
      setispending(false);
      history.push("/");
    })
  }
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <input 
          type="text" 
          required 
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      {!ispending&&<button>Add blog</button>}
      {ispending&&<button disabled>Adding blog</button>}
      </form>
    </div>
  );
}
 
export default Create;