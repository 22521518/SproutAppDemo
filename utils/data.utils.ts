import { tree24, user } from '@/constants/dummy-data.constant';

export const getUser = (userId: string) => {
  return user;
};

export const getTree = (treeId: string) => {
  return tree24.find((tree) => tree.id === treeId);
};
