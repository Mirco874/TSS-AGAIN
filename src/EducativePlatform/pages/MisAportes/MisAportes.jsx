import { useParams } from "react-router-dom";
import { useFetch } from "../../../hooks";
import { Loading } from "../../../UI";
import { MaterialCard } from "../../components";
import styles from "./MisAportes.module.css";
import PerfilU from "../MisAportes/foto/PerfilUsuario.jpg";
export const MisAportes = () => {
  return (
    <div className={styles.Titulo}>
      <h1>Mis aportes</h1>
      <div className={styles.Class}>
        <img src={PerfilU} alt="" className={styles.foto} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe totam
          obcaecati voluptas veniam dicta sed quasi commodi omnis unde. Aliquam
          explicabo quas quibusdam perferendis sit impedit eum debitis pariatur
          iusto!
        </p>

        <button id="botonNuevoCap" type="button" className={styles.button}>
          Eliminar{" "}
        </button>
      </div>
      <div className={styles.Class}>
        <img src={PerfilU} alt="" className={styles.foto} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe totam
          obcaecati voluptas veniam dicta sed quasi commodi omnis unde. Aliquam
          explicabo quas quibusdam perferendis sit impedit eum debitis pariatur
          iusto!
        </p>

        <button className={styles.button}>Eliminar </button>
      </div>
    </div>
  );
};
