import { TreeType, UserType } from './type.constant';
import {
  AvatarIconTypeEnum,
  FruitTypeEnum,
  TreeColorTypeEnum,
  TreeTypeEnum
} from './enum.constant';
import { DummyTreesList } from '@/utils/dummy-data.utils';

export const user: UserType = {
  username: 'chim se di nan',
  usernameId: 'Peo',
  avatar: AvatarIconTypeEnum.SMILE,
  isOnline: true
};

export const offlineUser: UserType = {
  username: 'chim se di nan',
  usernameId: 'Peo',
  avatar: AvatarIconTypeEnum.SAD,
  isOnline: false
};

export const tree24: TreeType[] = Array.from({ length: 12 }, (_, i) => i).map(
  (i) => {
    if (i < 3) {
      return {
        id: i.toString(),
        type: TreeTypeEnum.TRIANGLE,
        color: TreeColorTypeEnum.SPRING24,
        parts: [],
        month: i + 1,
        year: 2024
      };
    }
    if (i < 6) {
      return {
        id: i.toString(),
        type: TreeTypeEnum.SQUARE,
        color: TreeColorTypeEnum.SUMMER24,
        parts: [],
        month: i + 1,
        year: 2024
      };
    }
    if (i < 9) {
      return {
        id: i.toString(),
        type: TreeTypeEnum.SEMI_CIRCLE,
        color: TreeColorTypeEnum.FALL24,
        parts: [],
        month: i + 1,
        year: 2024
      };
    }
    return {
      id: i.toString(),
      type: TreeTypeEnum.CIRCLE,
      color: TreeColorTypeEnum.WINTER24,
      parts: [],
      month: i + 1,
      year: 2024
    };
  }
);

// export const tree24: TreeType[] = DummyTreesList(2024);
export const tree3: TreeType[] = DummyTreesList(3);
