function Post({id, title, content, date, author, removeFunc}) {
  return (
    <li className="row my-1 p-3 border rounded border-2 d-flex justify-content-between">
      <div className="col-2 d-flex flex-column justify-content-around">
        <span><strong>Autore:</strong> {author}</span>
        <span><strong>Data:</strong> {date}</span>
      </div>
      <div className="col-9 d-flex flex-column justify-content-around">
        <h3>{title}</h3>
        <span>{content}</span>
      </div>
      <div className="col-1 d-flex flex-column justify-content-around">
        <button type="button" className="btn btn-primary btn-sm">Modifica</button>
        <button type="button" className="btn btn-danger btn-sm" onClick={() => removeFunc(id)}>Rimuovi</button>
      </div>
    </li>
  )
}

export default Post