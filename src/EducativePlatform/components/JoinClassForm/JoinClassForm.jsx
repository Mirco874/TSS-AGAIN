export const JoinClassForm = () => {
  return (
    <>
    <h3>Unirse a una clase</h3>
    <form className="register-form border border-dark rounded w-75 p-3 mx-auto">
    <div className="form-group mb-4">
      <label className="mb-1"> <b>Ingresa el codigo de la clase:</b> </label>
      <input
        type="text"
        className="form-control"
        placeholder="codigo"
      />
    </div>
    <button type="submit" className="btn btn-dark mx-auto d-block">
      unirse
    </button>
  </form>
    </>
  )
}
