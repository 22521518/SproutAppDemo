import { FruitType, TreeType, UserType } from '../models/type.model';
import {
  AvatarIconTypeEnum,
  EmotionTypeEnum,
  TreeColorTypeEnum,
  TreeTypeEnum
} from '../models/enum.model';
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

export const dummyFearFruit: FruitType = {
  id: '1',
  type: EmotionTypeEnum.FEARFUL,
  created_at: new Date(),
  emotions: {
    happyEmotion: { type: EmotionTypeEnum.HAPPY, indicators: 2 },
    sadEmotion: { type: EmotionTypeEnum.SAD, indicators: 2 },
    angryEmotion: { type: EmotionTypeEnum.ANGRY, indicators: 2 },
    neutralEmotion: { type: EmotionTypeEnum.NEUTRAL, indicators: 2 },
    fearEmotion: { type: EmotionTypeEnum.FEARFUL, indicators: 90 },
    disgustedEmotion: { type: EmotionTypeEnum.DISGUSTED, indicators: 2 }
  }
};

export const dummyTree2k: TreeType[][] = Array.from(
  { length: 100 },
  (_, i) => i
).map((i) => DummyTreesList(2000 + i));

// export const tree24: TreeType[] = Array.from({ length: 12 }, (_, i) => i).map(
//   (i) => {
//     if (i < 3) {
//       return {
//         id: i.toString(),
//         type: TreeTypeEnum.TRIANGLE,
//         color: TreeColorTypeEnum.SPRING24,
//         parts: [],
//         month: i + 1,
//         year: 2024
//       };
//     }
//     if (i < 6) {
//       return {
//         id: i.toString(),
//         type: TreeTypeEnum.SQUARE,
//         color: TreeColorTypeEnum.SUMMER24,
//         parts: [],
//         month: i + 1,
//         year: 2024
//       };
//     }
//     if (i < 9) {
//       return {
//         id: i.toString(),
//         type: TreeTypeEnum.SEMI_CIRCLE,
//         color: TreeColorTypeEnum.FALL24,
//         parts: [],
//         month: i + 1,
//         year: 2024
//       };
//     }
//     return {
//       id: i.toString(),
//       type: TreeTypeEnum.CIRCLE,
//       color: TreeColorTypeEnum.WINTER24,
//       parts: [],
//       month: i + 1,
//       year: 2024
//     };
//   }
// );
