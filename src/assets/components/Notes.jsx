import styles from "./Notes.module.css";
import NotesTextarea from "./NotesTextarea";
function Notes() {
  return (
    <div className={styles.main}>
  <p className={styles.heading}>Notes</p>
  <NotesTextarea></NotesTextarea>
  </div>
  );
}
export default Notes;
