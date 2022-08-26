import styles from './Crafting.module.scss';

export const NoBlueprints: React.FC = () => {
  return (
    <div className={styles.noBlueprintsPage}>
      <div className={styles.noBox}>You currently have 0 Blueprints.</div>
      <p>
        Blueprints are required to craft items.
        <br />
        They can be acquired through missions, or you can buy them with{' '}
        <span>credits</span>.
      </p>
    </div>
  );
};
