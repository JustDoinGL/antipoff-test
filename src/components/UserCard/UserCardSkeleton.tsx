import { Skeleton } from "../../ui/skeleton/Skeleton";
import styles from "./UserCard.module.scss";

const UserCardSkeleton = () => {
  return (
    <div className={styles.container}>
      <Skeleton width={124} height={124} radius={100} />

      <Skeleton width={139} height={23}></Skeleton>

      <div className={styles.heart}>
        <Skeleton width={12} height={14}></Skeleton>
      </div>
    </div>
  );
};

export default UserCardSkeleton;
