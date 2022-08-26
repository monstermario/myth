import { useEffect, useState } from 'react';
import { Blueprints } from '../../components/crafting/blueprints';
import { NoBlueprints } from '../../components/crafting/noBlueprints';

export type TypeBluePrints = {
  title: string;
  type: string;
  description: string;
  img: string;
  stats: {
    core: number;
    damageCap: number;
  };
  required: {
    title: string;
    amount: number;
    img: string;
  }[];
};

export const CraftingPage: React.FC = () => {
  const [bluePrints, setBluePrints] = useState<TypeBluePrints[]>([]);

  useEffect(() => {
    setBluePrints([
      {
        title: 'Thermal Heat Sensor',
        type: 'EQUIPMENT',
        description:
          'ALLOWS THE USER TO SEE HEAT SIGNATURES FROM GREAT DISTANCES.',
        img: '/img/crafting/1.png',
        stats: {
          core: 5000,
          damageCap: 2,
        },
        required: [
          {
            title: 'Metal Bars',
            amount: 50,
            img: '/img/item/8.png',
          },
          {
            title: 'Copper Wire',
            amount: 20,
            img: '/img/item/6.png',
          },
          {
            title: 'Circuits',
            amount: 3,
            img: '/img/item/7.png',
          },
        ],
      },
    ]);
  }, []);

  return bluePrints.length === 0 ? (
    <NoBlueprints />
  ) : (
    <Blueprints blueprints={bluePrints} />
  );
};
