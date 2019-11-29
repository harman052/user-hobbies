export interface hobbies {
  userId: number;
  passionLevel: string;
  hobbyName: string;
  year: number;
}

export interface MyStore {
  isHobbiesPanelActive: boolean;
  userList: string[];
  activeUserId: number;
  hobbyList: hobbies[];
}
