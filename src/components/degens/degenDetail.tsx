import { useState } from 'react';
import { TypeDegen, TypeInventory } from '../../pages/degens';
import { getRegNumber, STATUS } from '../../utils';
import styles from './Degens.module.scss';
import { InventoryDetail } from './inventoryDetail';

type PageProps = {
  selectedDegen: TypeDegen;
};

export const DegenDetail = ({ selectedDegen }: PageProps) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<TypeInventory | null>(null);

  return (
    <div className={styles.detailPage}>
      <div className={styles.detailInfo}>
        <h2>
          {selectedDegen.name} <span>{selectedDegen.role}</span>
        </h2>
        <div className={styles.degenInfo}>
          <img src={selectedDegen.img} alt="" />
          <div className={styles.stats}>
            <h4>STATS:</h4>
            <div className={styles.values}>
              <div>
                <h4>CORE SCORE</h4>
                <p>{getRegNumber(selectedDegen.state.score)}</p>
              </div>
              <div>
                <h4>MAX DAMAGE PER HIT</h4>
                <p>{getRegNumber(selectedDegen.state.maxDamage)}</p>
              </div>
            </div>
            <div className={styles.values}>
              <div>
                <h4>DAMAGE CAP</h4>
                <p>
                  {selectedDegen.state.damageCap}%
                  <span>{selectedDegen.state.damageCap}k/100k</span>
                </p>
              </div>
              <div>
                <h4>STATUS</h4>
                <p>{STATUS[selectedDegen.state.status]}</p>
              </div>
            </div>
          </div>
        </div>
        <h5>GEAR (EQUIPPED):</h5>
        <div className={styles.inventories}>
          {selectedDegen.inventory
            .filter((x) => x.equipped)
            .map((item, index) => (
              <div
                className={styles.equipped}
                key={`equ-${index}`}
                onClick={() => {
                  setSelectedItem(item);
                }}
              >
                <div className={styles.equImg}>
                  <img src={item.img} alt="" />
                </div>
                <p>{item.title}</p>
              </div>
            ))}
        </div>
        <h5>COSMETICS:</h5>
        <div className={styles.cosmetics}></div>
        <h5>SKINS:</h5>
        <div className={styles.skins}></div>
      </div>
      <div className={styles.inventoryList}>
        <h3>INVENTORY</h3>
        <div className={styles.inventories}>
          {Array(
            showMore
              ? Math.max(20, Math.round(selectedDegen.inventory.length / 5) * 5)
              : 20
          )
            .fill(0)
            .map((u, index) =>
              selectedDegen.inventory[index] ? (
                <div
                  className={styles.inventoryItem}
                  key={`inven-${index}`}
                  onClick={() => {
                    setSelectedItem(selectedDegen.inventory[index]);
                  }}
                >
                  <img src={selectedDegen.inventory[index].img} alt="" />
                  {selectedDegen.inventory[index].amount !== -1 && (
                    <span>x{selectedDegen.inventory[index].amount}</span>
                  )}
                </div>
              ) : (
                <div
                  className={`${styles.inventoryItem} ${styles.blank}`}
                  key={`inven-${index}`}
                />
              )
            )}
        </div>
        {selectedDegen.inventory.length > 20 && (
          <p
            className={styles.viewMore}
            onClick={() => {
              setShowMore(!showMore);
            }}
          >
            {showMore ? 'VIEW LESS' : 'VEIW MORE'}
          </p>
        )}

        <div className={styles.actions}>
          <h2>ACTIONS</h2>
          <div className={styles.btns}>
            <button>UNEQUIP ALL</button>
            <button>SWITCH DEGEN</button>
            <button>STAKE</button>
            <button>UPGRADE</button>
          </div>
        </div>
      </div>
      {selectedItem && (
        <InventoryDetail
          inventory={selectedItem}
          closeHandler={() => {
            setSelectedItem(null);
          }}
        />
      )}
    </div>
  );
};
