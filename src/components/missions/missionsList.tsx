import { useState } from 'react';
import { TypeMission } from '../../pages/missions';
import styles from './Missions.module.scss';

type PageProps = {
  missions: TypeMission[];
  selectHandler: (value: TypeMission) => void;
};
export const MissionsList = ({ missions, selectHandler }: PageProps) => {
  const [hoverMission, setHoverMission] = useState<TypeMission | null>(null);

  return (
    <div className={styles.missionPage}>
      <div className={styles.missionList}>
        {missions.map((mission, index) => (
          <div
            className={styles.mission}
            key={`mission-${index}`}
            onClick={() => selectHandler(mission)}
            onMouseEnter={() => setHoverMission(mission)}
            onMouseLeave={() => setHoverMission(null)}
          >
            {mission.title}
          </div>
        ))}
      </div>
      <div className={styles.explanation}>
        {hoverMission && (
          <>
            <p>{hoverMission.title}:</p>
            <h4>{hoverMission.description}</h4>
          </>
        )}
      </div>
    </div>
  );
};
