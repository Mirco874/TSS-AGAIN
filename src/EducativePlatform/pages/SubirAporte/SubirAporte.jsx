import { useState } from "react";
import styles from "./SubirAporte.module.css";
import AceEditor from "react-ace";
import { useParams } from "react-router-dom";
import { useFetch, useForm } from "../../../hooks";
import { PracticeCard } from "../../components";
import { Link } from "react-router-dom";
import { CodeEditor } from "../../../UI/components/CodeEditor/CodeEditor";
export const SubirAporte = () => {
  const [titulocap, setTitulocap] = useState("");

  const [DescripEjem, setDescripEjem] = useState("");
  const [CodigoEjem, setCodigoEjem] = useState("");
  const formularioSubir = {id_usuario:"",
  titulo:"",
  descripcion:"",
  className:"",
  codigo:""}
  const {form,onFormUpdate} = useForm(formularioSubir)
  const [codigo, setCodigo] = useState()
  const onCodeChange=(newValue)=>{
    console.log(newValue)
    setCodigo(newValue)}
  const subirContrib = () =>{
    post ("http://142.93.203.113:3001/api/contributions", {...form,codigo: codigo})
  }
  return (
    <div className={styles.Titulo}>
      <p>Crear un nuevo aporte</p>
      <div className={styles.Class}>
        <br />
        <h1>Nueva Contribución</h1>
        <br />
        <form>
          <label htmlFor="titulocap" className={styles.textform}>
            Titulo:{" "}
          </label>
          <input
            type="text"
            id="titulocap"
            name="titulo"
            placeholder="Ingrese nombre del capitulo"
            onChange={onFormUpdate}
            className={styles.box}
          />

          <br />
          <br />
          <label htmlFor="DescripEjem" className={styles.textform}>
            Descripción:
          </label>
          <input
            type="text"
            id="DescripEjem"
            name="descripcion"
            onChange={onFormUpdate}
            className={styles.box}
          /><label htmlFor="className" className="">
            Ingrese el ClassName: 
          </label>
          <input
          type="text"
          onChange={onFormUpdate}
          name ="className"></input>
          <br />
          <br />
          <label htmlFor="CodigoEjem" className={styles.textform}>
            Codigo del ejemplo:{" "}
          </label>
          <AceEditor mode={"Java"}
                
                value={codigo}
                fontSize={14}
                setOptions={{
                  enableLiveAutocompletion: true,
                  showLineNumbers: true,
                  }}
                editorProps={{ $blockScrolling: false }}
                onChange={onCodeChange}
                />
        </form>
        <br />
        <br />
        <button id="botonNuevoCap" type="button" className={styles.button}>
          Subir{" "}
        </button>
        <br />
        <br />
      </div>
    </div>
  );
};
