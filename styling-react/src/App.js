import SassComponent from "./SassComponent";
import CSSModule from "./CSSModule";
import styles from "./CSSModule.module.scss";
import "./App.css";

function App() {
  return (
    <>
      <SassComponent></SassComponent>
      <div className={styles.box}>
        <CSSModule></CSSModule>
        <CSSModule></CSSModule>
        <CSSModule></CSSModule>
        <CSSModule></CSSModule>
      </div>
    </>
  );
}

export default App;
