import { useEffect, useState } from 'react';
import { TypeBluePrints } from '../../pages/crafting';
import styles from './Crafting.module.scss';
import { DetailBlueprint } from './detailBlueprint';

type PageProps = {
  blueprints: TypeBluePrints[];
};
type TypeCrafting = {
  img: string;
  title: string;
  type: string;
  percent: number;
  remainTime: number;
};
export const Blueprints = ({ blueprints }: PageProps) => {
  const [craftingItem, setCraftingItem] = useState<TypeCrafting | null>(null);

  const [selectedPrint, setSelectedPrint] = useState<TypeBluePrints | null>(
    null
  );

  // useEffect(() => {
  //   setCraftingItem({
  //     img: '/img/crafting/2.png',
  //     title: 'Thermal Heat Sensor',
  //     type: 'EQUIPMENT',
  //     percent: 14,
  //     remainTime: 36,
  //   });
  // }, []);

  return (
    <div className={styles.blueprintsContainer}>
      <h3>BLUEPRINTS</h3>
      <div className={styles.prints}>
        {blueprints.map((item, index) => (
          <div
            className={styles.printItem}
            key={`prints-${index}`}
            onClick={() => {
              setSelectedPrint(item);
            }}
          >
            <img src={item.img} alt="" width="100%" />
          </div>
        ))}
      </div>
      <div className={styles.crafting}>
        <h3>CRAFTING</h3>
        {craftingItem ? (
          <div className={styles.processing}>
            <img src={craftingItem.img} alt="" />
            <div className={styles.info}>
              <h3>{craftingItem.title}</h3>
              <p>{craftingItem.type}</p>
              <span className={styles.remainTime}>
                {craftingItem.remainTime}mins
              </span>
              <div className={styles.process}>
                <div
                  className={styles.processBar}
                  style={{ width: craftingItem.percent + '%' }}
                />
              </div>
              <span>{craftingItem.percent}%</span>
            </div>
          </div>
        ) : (
          <p>
            Nothing is currently being crafted.
            <br />
            Click on a blueprint to see if you have enough resources to craft
            the item.
          </p>
        )}
      </div>
      {selectedPrint && (
        <DetailBlueprint
          item={selectedPrint}
          closeHandler={() => {
            setSelectedPrint(null);
          }}
        />
      )}
    </div>
  );
};
