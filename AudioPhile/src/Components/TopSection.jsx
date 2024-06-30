import styles from './TopSection.module.css';
const TopSection = ({value})=>{
  return <>
  <div className={styles['top-div']}>
      <div className={styles['top-div-text']}><h1>{value}</h1>
      </div>
    </div>
  </>
}
export default TopSection;