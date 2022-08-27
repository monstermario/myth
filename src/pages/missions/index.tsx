import { useState } from 'react';
import { MissionDetail } from '../../components/missions/missionDetail';
import { MissionSelect } from '../../components/missions/missionSelect';
import { MissionsList } from '../../components/missions/missionsList';
import { MissionSuccess } from '../../components/missions/missionSuccess';

export type TypeMission = {
  title: string;
  type: string;
  description: string;
};

export const MissionsPage: React.FC = () => {
  const [missions, setMissions] = useState<TypeMission[]>([
    {
      title: 'EXPEDITION',
      type: 'EXPEDITION',
      description: 'GO ON MISSIONS TO FIND RESOURCES AND MATERIALS.',
    },
    {
      title: 'BOUNTY',
      type: 'BOUNTY',
      description: `Someone in the city has a bounty on their head. Let's pay them a visit.`,
    },
  ]);
  const [selectedMission, setSelectedMission] = useState<TypeMission | null>(
    null
  );
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [currentMission, setCurrentMission] = useState<number>(-1);
  const [possibleMission, setPossibleMission] = useState<number>(0);

  return !selectedMission ? (
    <MissionsList
      missions={missions}
      selectHandler={(mission: TypeMission) => {
        setSelectedMission(mission);
      }}
    />
  ) : isSuccess ? (
    <MissionSuccess
      credits={1500}
      claimList={[
        {
          amount: 25,
          title: 'ALLOY PLATES',
        },
        {
          amount: 14,
          title: 'BLACK METAL FRAGMENTS',
        },
        {
          amount: 6,
          title: 'CIRCUITS',
        },
      ]}
      continueHandler={() => {
        setIsSuccess(false);
        setCurrentMission(-1);
      }}
    />
  ) : currentMission > -1 ? (
    <MissionDetail
      mission={selectedMission}
      closeHandler={() => {
        setSelectedMission(null);
      }}
      resultHandler={() => {
        setIsSuccess(true);
        setPossibleMission(possibleMission + 1);
        setCurrentMission(-1);
      }}
    />
  ) : (
    <MissionSelect
      possibleMission={possibleMission}
      selectHandler={(mission: number) => {
        setCurrentMission(mission);
      }}
    />
  );
};
