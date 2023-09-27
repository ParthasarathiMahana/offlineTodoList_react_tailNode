import styles from './styles/mainApp.module.css';

function App() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.addForm}>
        <div className={styles.formContainer}>
          <div className={styles.form}>
            <input type='text'></input>
            <button>Add Todo</button>
          </div>
        </div>
        <div className={styles.resetButton}>
          <button>Reset</button>
        </div>
      </div>
      <div className={styles.todoListContainer}>
        <div className={styles.list}>
          <div className={styles.listItem}>
            <div className={styles.name}>Go to gym at 6</div>
            <div className={styles.status}>Not Done</div>
          </div>
          <div className={styles.listItem}>
            <div className={styles.name}>Do DSA problems</div>
            <div className={styles.status}>Not Done</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
