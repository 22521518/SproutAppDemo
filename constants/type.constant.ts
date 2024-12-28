import {
  AvatarIconTypeEnum,
  FruitTypeEnum,
  TreeColorTypeEnum,
  TreeTypeEnum
} from './enum.constant';

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
  type: FruitTypeEnum;
  created_at: Date;
};
