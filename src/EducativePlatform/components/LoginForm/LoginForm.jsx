import { Link, useNavigate } from "react-router-dom";
import {useForm, useLogin } from "../../../hooks";

export const LoginForm = () => {

  const navigate = useNavigate();
  const {form,onFormUpdate} = useForm({ email: "", password: "" });
  const {fetchData} = useLogin("http://142.93.203.113:3001/api/login",form);

  const login = () => {
     fetchData()
     navigate("/clases")
  };

  return (
    <form className="border border-dark rounded h-75 w-50 p-3">
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="ingresa tu correo electronico"
          onChange={onFormUpdate}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Contraseña</label>
        <input
          type="password"
          name="password"
          className="form-control mb-2"
          id="exampleInputPassword1"
          placeholder="ingresa tu contraseña"
          onChange={onFormUpdate}
        />
      </div>
      <button
        className="btn btn-dark mb-3"
        onClick={(e) => {
          e.preventDefault();
          
          login();
        }}
      >
        Ingresar
      </button>
      <br />
      <span>
        ¿No tienes una cuenta? <Link to="/registro">Crear cuenta</Link>.
      </span>
    </form>
  );
};
