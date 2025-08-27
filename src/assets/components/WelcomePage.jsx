import styles from "./WelcomePage.module.css"
import {useNavigate} from "react-router-dom"
function WelcomePage(){
    const navigate = useNavigate();
    return (
        <div className={styles.welcome}>
        <h1>WELCOME TO </h1>
        <h1>NEWSNOVA</h1>
          <h2>Access a diverse collection of papers in one click and stay informed effortlessly</h2>
          <button type="button" className={styles.btn} onClick={()=>navigate("../NewsPage")}>Read Now</button>
        </div>
        
      )
}
export default WelcomePage