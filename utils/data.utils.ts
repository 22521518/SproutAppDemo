import { dummyFearFruit, dummyTree2k, user } from '@/data/dummy-data.constant';
import { TreeType } from '@/models/type.model';
import { DummyFruit } from './dummy-data.utils';

export const getUser = (userId: string) => {
  return user;
};

export const getTree = (treeId: string) => {
  const tree: TreeType | undefined = dummyTree2k
    .find((treeList) => treeList.some((tree) => tree.id === treeId))
    ?.find((tree) => tree.id === treeId);

  return tree;
};

export const getHomieTree = (userId: string) => {
  const tree: TreeType = dummyTree2k[0][0];

  return tree;
};

export const getFruit = (fruitId: string) => {
  return dummyFearFruit;
};
