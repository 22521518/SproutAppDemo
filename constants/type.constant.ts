import { AvatarIconType, FruitType, TreeColorType } from './enum.constant';

export type User = {
  username: string;
  usernameId: string;
  avatar: AvatarIconType;
  isOnline: boolean;
};

export type Tree = {
  id: string;
  color: TreeColorType;
  parts: TreePart[];
  month: number;
  year: number;
};

export type TreePart = {
  id: string;
  level: number;
  color: TreeColorType;
  size: number;
  fruit: Fruit[];
};

export type Fruit = {
  id: string;
  type: FruitType;
  created_at: Date;
};
