export const CreateClassForm = () => {
  return (
    <>
    <h3> Crear una nueva clase</h3>
    <form className="register-form border border-dark rounded  w-75 p-3 mx-auto">
    <div className="form-group mb-4">
      <label className="mb-1"> <b>Nombre de la clase:</b> </label>
      <input
        type="text"
        className="form-control"
        placeholder="Nombre"
      />
    </div>
    <button type="submit" className="btn btn-dark mx-auto d-block">
      Crear clase
    </button>
  </form>
</>
  )
}
