import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

function Post({id, title, content, date, author, removeFunc}) {
  return (
    <li className="row my-1 p-3 border rounded border-2 d-flex justify-content-between">
      <div className="col-2 d-flex flex-column justify-content-around">
        <span><strong>Autore:</strong><br/>{author}</span>
        <span><strong>Data:</strong><br/>{date}</span>
      </div>
      <div className="col-9 d-flex flex-column justify-content-around">
        <h4>{title}</h4>
        <span>{content}</span>
      </div>
      <div className="col-1 d-flex flex-column justify-content-around">
        <button type="button" className="btn btn-primary btn-sm"><FontAwesomeIcon icon={faEdit} /></button>
        <button type="button" className="btn btn-danger btn-sm" onClick={() => removeFunc(id)}><FontAwesomeIcon icon={faTrash} /></button>
      </div>
    </li>
  )
}

export default Post