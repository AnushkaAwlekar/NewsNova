// import styles from "./Pages.module.css";
// import { useNavigate } from "react-router-dom"; 

// function Pages({ id, name }) {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     window.open(`/News`, "_blank", "noopener,noreferrer");
//   };

//   return (
//     <div className={styles.page} onClick={handleClick}>
//       <span className={styles.text}>{name}</span>
//     </div>
//   );
// }

// export default Pages;
import styles from "./Pages.module.css";
import { useNavigate } from "react-router-dom"; 

function Pages({ id, name }) {
  const navigate = useNavigate();

  const handleClick = () => {
    window.open(`/News/${id}`, "_blank", "noopener,noreferrer"); 
  };

  return (
    <div className={styles.page} onClick={handleClick}>
      <span className={styles.text}>{name}</span>
    </div>
  );
}

export default Pages;
