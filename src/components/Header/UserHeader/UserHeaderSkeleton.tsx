import { Skeleton } from "../../../ui/skeleton/Skeleton";
import styles from "./UserHeader.module.scss";
const UserHeaderSkeleton = () => {
  return (
    <div className={styles.container}>
      <Skeleton width={187} height={187} radius={100} />
      <div className={styles.info}>
        <Skeleton width={300} height={40} />
        <p style={{ marginTop: "10px" }}>
          <Skeleton className={styles.text} width={200} height={40} />
        </p>
      </div>
    </div>
  );
};

export default UserHeaderSkeleton;
