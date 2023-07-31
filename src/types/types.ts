export type Quest = {
  id: number;
  questName: string;
  completed: boolean;
  created_at: string; //may need to update to Date
  questDesc: string | null;
  categoryEXP: number | null;
  rewardID: number | null;
  deadline: string | null;
  hidden: boolean;
};