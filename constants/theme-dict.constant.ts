import {
  TreeTypeEnum,
  TreeColorTypeEnum,
  FruitTypeEnum
} from '@/constants/enum.constant';
import TreeIcons from '@/components/icons/TreeIcons';
import FruitIcons from '@/components/icons/FruitIcons';
import TreePartIcons from '@/components/icons/TreePartIcons';

export const TreeIconsTypeMap = {
  [TreeTypeEnum.TRIANGLE]: TreeIcons.TriangleTree,
  [TreeTypeEnum.SQUARE]: TreeIcons.SquareTree,
  [TreeTypeEnum.SEMI_CIRCLE]: TreeIcons.SemiCircleTree,
  [TreeTypeEnum.CIRCLE]: TreeIcons.CircleTree
};
export const ColorIconTypeMap = {
  [TreeColorTypeEnum.SPRING24]: 'spring-tree',
  [TreeColorTypeEnum.SUMMER24]: 'summer-tree',
  [TreeColorTypeEnum.FALL24]: 'fall-tree',
  [TreeColorTypeEnum.WINTER24]: 'winter-tree'
};

export const ColorTreeTypeMap = {
  [TreeColorTypeEnum.SPRING24]: 'spring-tree-dark',
  [TreeColorTypeEnum.SUMMER24]: 'summer-tree-dark',
  [TreeColorTypeEnum.FALL24]: 'fall-tree-dark',
  [TreeColorTypeEnum.WINTER24]: 'winter-tree-dark'
};

export const FillFruitTypeMap = {
  [FruitTypeEnum.ANGRY]: FruitIcons.FillAngryStrawberry,
  [FruitTypeEnum.SAD]: FruitIcons.FillSadPear,
  [FruitTypeEnum.HAPPY]: FruitIcons.FillHappyPeach,
  [FruitTypeEnum.DISGUSTED]: FruitIcons.FillDisgustOrange,
  [FruitTypeEnum.FEARFUL]: FruitIcons.FillFearPineapple,
  [FruitTypeEnum.NEURAL]: FruitIcons.FillNeutralApple
};

export const OutlineFruitTypeMap = {
  [FruitTypeEnum.ANGRY]: FruitIcons.OutlineAngryStrawberry,
  [FruitTypeEnum.SAD]: FruitIcons.OutlineSadPear,
  [FruitTypeEnum.HAPPY]: FruitIcons.OutlineHappyPeach,
  [FruitTypeEnum.DISGUSTED]: FruitIcons.OutlineDisgustOrange,
  [FruitTypeEnum.FEARFUL]: FruitIcons.OutlineFearPineapple,
  [FruitTypeEnum.NEURAL]: FruitIcons.OutlineNeutralApple
};

export const TreeTypeSvgMap = {
  [TreeTypeEnum.TRIANGLE]: {
    lv1: TreePartIcons.Triangle.Lv1,
    lv2: TreePartIcons.Triangle.Lv2,
    lv3: TreePartIcons.Triangle.Lv3,
    lv4: TreePartIcons.Triangle.Lv4
  },
  [TreeTypeEnum.SQUARE]: {
    lv1: TreePartIcons.Square.Lv1,
    lv2: TreePartIcons.Square.Lv2,
    lv3: TreePartIcons.Square.Lv3,
    lv4: TreePartIcons.Square.Lv4
  },
  [TreeTypeEnum.CIRCLE]: {
    lv1: TreePartIcons.Circle.Lv1,
    lv2: TreePartIcons.Circle.Lv2,
    lv3: TreePartIcons.Circle.Lv3,
    lv4: TreePartIcons.Circle.Lv4
  },
  [TreeTypeEnum.SEMI_CIRCLE]: {
    lv1: TreePartIcons.SemiCircle.Lv1,
    lv2: TreePartIcons.SemiCircle.Lv2,
    lv3: TreePartIcons.SemiCircle.Lv3,
    lv4: TreePartIcons.SemiCircle.Lv4
  }
};

export const MonthDictions: { [key: number]: string } = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December'
};
