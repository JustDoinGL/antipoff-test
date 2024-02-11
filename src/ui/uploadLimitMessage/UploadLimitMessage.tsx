import styles from './UploadLimitMessage.module.scss';

const UploadLimitMessage = () => {
  return (
    <div className={styles.limit}>
      <p>Сервер позволяет загрузить только 12 человек.</p>
    </div>
  );
};

export default UploadLimitMessage;