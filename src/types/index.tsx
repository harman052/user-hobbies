export interface MyStore {
  isHobbiesPanelActive: boolean;
  userList: user[];
  activeUserId: number;
  hobbyList: hobbies[];
}

export interface user {
  userId: number;
  name: string;
}

export interface hobbies {
  userId: number;
  passionLevel: string;
  hobbyName: string;
  year: number;
}
