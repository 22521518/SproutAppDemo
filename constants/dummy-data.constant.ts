import { AvatarIconType, User } from './type.constant';

export const user: User = {
  username: 'chim se di nan',
  usernameId: 'Peo',
  avatar: AvatarIconType.SMILE,
  isOnline: true
};

export const offlineUser: User = {
  username: 'chim se di nan',
  usernameId: 'Peo',
  avatar: AvatarIconType.SAD,
  isOnline: false
};
