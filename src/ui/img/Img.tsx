import styles from "./Img.module.scss";
import { ImgProps } from "./Img.type";

export const Img = ({ url, width, height, alt }: ImgProps) => {
  return (
    <img
      style={{ width: width, height: height }}
      src={url}
      alt={alt}
      className={styles.img}
      width={width}
      height={height}
    />
  );
};
