import styles from "./CatalogHeader.module.scss";

interface IHeaderInfo {
  title: string;
  description: string;
}

const headerInfo: IHeaderInfo = {
  title: "Наша команда",
  description:
    "Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.",
};

const CatalogHeader = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className="title">{headerInfo.title}</h1>
        <p className={`description__grayLight`}>{headerInfo.description}</p>
      </div>
    </>
  );
};

export default CatalogHeader;
