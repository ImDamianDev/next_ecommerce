import styles from '@/styles/SectionTitle.module.css';

const SectionTitle = ({ titleSection }) => {
  return (
    <div className={styles.titleWrapper}>
      <h1 className={styles.title}>
        {titleSection}
      </h1>
      <hr className={styles.hr}/>
    </div>
  );
};

export default SectionTitle;