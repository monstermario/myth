import { TypeDegen } from '../../pages/degens';
import { IconPlus } from '../../utils/icons';
import styles from './Degens.module.scss';

type PageProps = {
  degens: TypeDegen[];
  selectHandler: (degen: TypeDegen) => void;
};

export const DegenList = ({ degens, selectHandler }: PageProps) => {
  return (
    <div className={styles.page}>
      <h3>START YOUR JOURNEY</h3>
      <p>Acquire or Select a Degen to get started.</p>

      <div className={styles.degens}>
        <div className={styles.degensItem}>
          <div className={`${styles.avatar} ${styles.plus}`}>
            <IconPlus />
          </div>
        </div>
        {degens.map((degen, index) => (
          <div
            className={styles.degensItem}
            key={`degen-item-${index}`}
            onClick={() => selectHandler(degen)}
          >
            <div className={styles.avatar}>
              <img src={degen.img} alt="" />
            </div>
            <div className={styles.info}>
              <h4>
                {degen.name} <span>{degen.role}</span>
              </h4>
              <p>{degen.state.score} Core</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
