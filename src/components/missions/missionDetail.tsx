import { useState } from 'react';
import { TypeMission } from '../../pages/missions';
import { mockupDegens } from '../../utils/mockup';
import styles from './Missions.module.scss';

type PageProps = {
  mission: TypeMission;
  closeHandler: () => void;
};

type TypeDialogue = {
  avatar: string;
  name: string;
  text: string;
};

export const MissionDetail = ({ mission, closeHandler }: PageProps) => {
  const degen = mockupDegens[0];
  const [chats, setChats] = useState<TypeDialogue[]>([
    {
      avatar: '/img/avatar/1.png',
      name: 'Perculeez',
      text: 'So you’re telling me that the Madame runs a highly sophisticated criminal organization in the heart of the city... AND an orphanage?',
    },
    {
      avatar: '/img/avatar/2.png',
      name: 'Caesar',
      text: 'Yep... wanna go meet her?',
    },
  ]);
  return (
    <div className={styles.detailPage}>
      <div className={styles.info}>
        <div className={styles.detailBg} />
        <div className={styles.topInfo}>
          <div className={styles.degens}>
            <h2>
              {degen.name}
              <span>{degen.role}</span>
            </h2>
            <p>
              CURRENT MISSION
              <br />1 - 1 - 1
            </p>
          </div>
          <div className={styles.missionInfo}>
            <h1>MISSION INFO</h1>
            <p>
              TYPE: {mission.type}
              <br />
              Floor: 20,000
            </p>
          </div>
        </div>
        <div className={styles.bottomInfo}>
          <h3>{mission.title}</h3>
          <p>
            <span>POTENTIAL DROPS:</span>
            <br />
            ALLOY, BLACK METAL, VIEW 5+ MORE
          </p>
        </div>
      </div>
      <div className={styles.borderBar} />
      <div className={styles.dialogue}>
        <p className={styles.eta}>ETA: 400 mins</p>
        <h3>DIALOGUE</h3>
        {chats.map((chat, index) => (
          <div className={styles.dialogueBox} key={`chat-${index}`}>
            <img src={chat.avatar} alt="" />
            <p>
              <span>
                {chat.name.toLowerCase() === degen.name.toLowerCase()
                  ? 'YOU'
                  : chat.name.toUpperCase()}
                :{' '}
              </span>
              {chat.text}
            </p>
          </div>
        ))}
        <button onClick={closeHandler}>ABORT MISSION</button>
      </div>
    </div>
  );
};
