import { useForm } from "../../../hooks";

export const NewContentForm = ({initialFormState,onCreateContent,onCancel}) => {

  const {form,onFormUpdate}=useForm(initialFormState);

  return (
      <form className="mx-auto border border-dark rounded h-75 w-50 p-3 mt-3">
      <h3>Crear capítulo</h3>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Titulo del capítulo</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese el titulo del capítulo"
            name="titulo_capitulo"
            onChange={onFormUpdate}
            />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Titulo del material</label>
          <input 
              type="text" 
              className="form-control" 
              placeholder="URL"
              name="titulo_material"
              onChange={onFormUpdate} />
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">
            Ingrese la descripción del material
          </label>
          <textarea
            className="form-control"
            rows="3"
            placeholder="Escriba una descripcion del material subido"
            name="descripcion_material"
            onChange={onFormUpdate}></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">
            Ingrese el enlace del material
          </label>
          <input 
              type="text" 
              className="form-control" 
              placeholder="URL"
              name="enlace_material"
              onChange={onFormUpdate}
              />
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Titulo del foro </label>
          <input
            type="text"
            className="form-control"
            placeholder="ingrese el titulo que llevara el foro"
            name="titulo_foro"
            onChange={onFormUpdate}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">
            Ingrese la descripción del foro
          </label>
          <textarea
            className="form-control"
            rows="3"
            placeholder="Escriba una descripcion del foro"
            name="descrpcion_foro"
            onChange={onFormUpdate}
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Estado del foro</label>
          <select className="form-control" id="exampleFormControlSelect1" name="forum_state" onChange={onFormUpdate}>
            <option >Activo</option>
            <option>Inactivo</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Titulo del Ejemplo</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese el titulo del ejemplo"
            name="titulo_ejemplo"
            onChange={onFormUpdate}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">
            Ingrese la descripción del ejemplo
          </label>
          <textarea
            className="form-control"
            rows="3"
            placeholder="Escriba una descripcion del ejemplo subido"
            name="descripcion_ejemplo"
            onChange={onFormUpdate}
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">
            Ingrese el codigo del ejemplo
          </label>
          <textarea 
              className="form-control" 
              rows="3"
              name="codigo_ejemplo"
              onChange={onFormUpdate}></textarea>
        </div>

        <br />
        <button className="btn btn-primary mb-3 me-5">
          Crear capítulo
        </button>
        <button  className="btn btn-danger mb-3">
          Regresar
        </button>
        <br />
      </form>
  );
};
