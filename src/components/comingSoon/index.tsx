import { IconSoon } from '../../utils/icons';
import styles from './ComingSoon.module.scss';

type PageProps = {
  title: string;
};

export const ComingSoon = ({ title }: PageProps) => {
  return (
    <div className={styles.soonPage}>
      <p>{title}</p>
      <h1>COMING SOON</h1>
      <IconSoon />
    </div>
  );
};
