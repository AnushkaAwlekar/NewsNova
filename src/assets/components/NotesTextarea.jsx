import styles from "./NotesTextarea.module.css"
function NotesTextarea(){
return(
    <div className={styles.noteArea}>
    <textarea  className={styles.textarea} placeholder="Write your notes here..."></textarea>
    <div className={styles.footer}>
    <button className={styles.btnS}>Save</button>
    <button className={styles.btnE}>Edit</button>
    <button className={styles.btnD}>Delete</button>
    </div> 
    </div>
);
}
export default NotesTextarea;