import styles from "./NewsPage.module.css"
import Pages from "./Pages"
import {useNavigate} from "react-router-dom"
function NewsPage(){
    let newspapers = [
    { id: "toi", name: "The Times of India" },
    { id: "hindu", name: "The Hindu" },
    { id: "ht", name: "Hindustan Times" }
  ];
    const navigate = useNavigate();
    return(
        <div className={styles.newsPage}>
            <div className={styles.heading}>
            <h3>A newspaper is a window to the world—read daily to stay informed, aware, and ahead. Knowledge is power, and every page you turn adds to your wisdom!</h3>
            </div>
            <div className={styles.container}>
            {newspapers.map((paper) => (
                <Pages key={paper.id} id={paper.id} name={paper.name} />
            ))}
        </div>
        <button type="button" className={styles.btn} onClick={()=>window.open(`/Notes`, "_blank", "noopener,noreferrer")}>+NOTES</button>
        </div>
    )
}
export default NewsPage