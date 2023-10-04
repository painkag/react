import { useNavigate } from 'react-router-dom'
import './NewPostt.css'
import { useState } from 'react'


const NewPostt = () => {

const navigate = useNavigate()
const [title, setTitle] = useState('')
const[body , setBody ]=useState('');

const createPost = (e) => {
  e.preventDefault()
  console.log('teste')
}

  return (
    <div className="newpost">
      <h2>Inserir novo post</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Título:</label><br />
          <textarea name="body" id="body" placeholder="Digite o titulo"></textarea>
          <label htmlFor="body">Conteudo:</label>
          <textarea name="body" id="body" placeholder="Digite o conteudo"></textarea>
        </div>
        <input type="submit" value="Criar card" className="btn" />
      </form>
    </div>
  )
}

export default NewPostt