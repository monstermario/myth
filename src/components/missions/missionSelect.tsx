import { useState } from 'react';
import { IconChevronLeft, IconChevronRight } from '../../utils/icons';
import styles from './Missions.module.scss';

type TypeMission = {
  title: string;
  eta: number;
  score: number;
};

type PageProps = {
  possibleMission: number;
  selectHandler: (mission: number) => void;
};

export const MissionSelect = ({
  possibleMission,
  selectHandler,
}: PageProps) => {
  const paths = ['Alpha', 'Beta', 'Delta'];
  const [currentPath, setCurrentPath] = useState<number>(0);
  const [missions, setMissions] = useState<TypeMission[]>([
    {
      title: 'Mission 1',
      eta: 20,
      score: 5500,
    },
    {
      title: 'Mission 2',
      eta: 30,
      score: 7500,
    },
    {
      title: 'Mission 3',
      eta: 60,
      score: 10500,
    },
  ]);

  return (
    <div className={styles.selectPage}>
      <h1>Mission Select</h1>
      <div className={styles.path}>
        <p>Path {currentPath + 1}</p>
        <p>{paths[currentPath]}</p>
        <div className={styles.arrow}>
          <button
            disabled={currentPath === 0}
            onClick={() => {
              setCurrentPath(currentPath - 1);
            }}
          >
            <IconChevronLeft />
          </button>
          <button
            disabled={currentPath === paths.length - 1}
            onClick={() => {
              setCurrentPath(currentPath + 1);
            }}
          >
            <IconChevronRight />
          </button>
        </div>
      </div>
      <div className={styles.missions}>
        {missions.map((mission, index) => (
          <div
            className={`${styles.missionBox} ${
              index > possibleMission ? styles.disabled : ''
            }`}
            key={`mission-box-${index}`}
            onClick={() => {
              if (index <= possibleMission) selectHandler(index);
            }}
          >
            <h3>{mission.title}</h3>
            <p>
              ETA: {mission.eta}mins <span>*{mission.score}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
