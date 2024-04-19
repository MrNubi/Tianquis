/* eslint-disable prettier/prettier */
export interface estateItems {
  id: string;
  imageUrl: string;
  deposit: number;
  price: number;
  location: string;
  size: string;
  condition: string;
  zzimed: boolean;
  Explanation: string;
  document: string;
  picture: string;
}
export interface userData {
  id: string;
  nickname: string;
  profileImg: string | undefined;
  location: string | undefined;
  phone: string | undefined;
}

export interface messageData {
  sendUser: userData;
  destinationUser: userData;
  message: string;
  mDate: Date;
  attatchedUrl: string | undefined;
}
