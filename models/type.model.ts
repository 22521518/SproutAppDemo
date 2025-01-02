import {
  AvatarIconTypeEnum,
  EmotionTypeEnum,
  EmotionTypeEnum,
  TreeColorTypeEnum,
  TreeTypeEnum
} from './enum.model';
import { EmotionsGroup } from './interface.model';

export type UserType = {
  username: string;
  usernameId: string;
  avatar: AvatarIconTypeEnum;
  isOnline: boolean;
};

export type TreeType = {
  id: string;
  type: TreeTypeEnum;
  color: TreeColorTypeEnum;
  parts: TreePartType[];
  month: number;
  year: number;
};

export type TreePartType = {
  id: string;
  level: number;
  type: TreeTypeEnum;
  color: TreeColorTypeEnum;
  fruit: FruitType[];
};

export type FruitType = {
  id: string;
  type: EmotionTypeEnum;
  created_at: Date;
  emotions?: EmotionsGroup;
};

export type EmotionType = {
  type: EmotionTypeEnum;
  indicators: number;
};
