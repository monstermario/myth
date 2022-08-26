import { getRegNumber } from '../../utils';
import styles from './Missions.module.scss';
import { IconArrowLeft } from '../../utils/icons';

type PageProps = {
  claimList: { title: string; amount: number }[];
  credits: number;
  continueHandler: () => void;
};
export const MissionSuccess = ({
  claimList,
  credits,
  continueHandler,
}: PageProps) => {
  return (
    <div className={styles.successPage}>
      <h3>MISSION SUCCESS:</h3>

      {claimList.map((item, index) => (
        <div className={styles.claimItem} key={`mission-success-item-${index}`}>
          <p>
            {getRegNumber(item.amount)}x<br />
            <span>{item.title}</span>
          </p>
        </div>
      ))}
      <div className={styles.claimItem}>
        <p className={styles.credits}>
          {getRegNumber(credits)}x<br />
          <span>CREDITS</span>
        </p>
      </div>
      <button>CLAIM ALL</button>
      <div className={styles.continue} onClick={continueHandler}>
        <IconArrowLeft /> CONTINUE
      </div>
    </div>
  );
};
