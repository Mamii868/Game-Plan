export type Quest = {
  id: number;
  questName: string;
  completed: boolean;
  created_at: Date;
  questDesc: string | null;
  categoryEXP: number | null;
  rewardID: number | null;
  deadline: string | null;
  hidden: boolean;
};

export type Skill = {
  id: number;
  skillName: string;
  skillLevel: number;
  skillEXP: number;
  skillDesc: string | null;
  skillColor: string;
}