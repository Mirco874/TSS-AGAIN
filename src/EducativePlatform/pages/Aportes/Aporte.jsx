import { useParams } from "react-router-dom";
import { useFetch } from "../../../hooks";
import { PracticeCard } from "../../components";
import { Link } from "react-router-dom";
import styles from "./Aporte.module.css";
import PerfilU from "../MisAportes/foto/PerfilUsuario.jpg";
export const Aporte = () => {
    return (
      <div className={styles.Titulo}>
        <h1>Aporte Reciente</h1>
        <div className={styles.Class}>
          <img src={PerfilU} alt="" className={styles.foto} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe totam
            obcaecati voluptas veniam dicta sed quasi commodi omnis unde. Aliquam
            explicabo quas quibusdam perferendis sit impedit eum debitis pariatur
            iusto!
          </p>
        </div>
    </div>
      
    );
  };
