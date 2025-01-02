import {
  TreeTypeEnum,
  TreeColorTypeEnum,
  EmotionTypeEnum
} from '@/models/enum.model';
import TreeIcons from '@/components/icons/TreeIcons';
import FruitIcons from '@/components/icons/FruitIcons';
import TreePartIcons from '@/components/icons/TreePartIcons';
import { EmotionType } from '@/models/type.model';
import SproutIcons from '@/components/icons/SproutIcons';
import { SvgProps } from 'react-native-svg';
import { FC } from 'react';
import EmotionShapeIcons from '@/components/icons/EmotionShapeIcons';
// import TreeSvgIcons from '@/components/svg/TreeSvgIcons';
// import FruitSvgIcons from '@/components/svg/FruitSvgIcons';

// export const TreeSvgIconsTypeMap = {
//   [TreeTypeEnum.TRIANGLE]: TreeSvgIcons.TriangleTree,
//   [TreeTypeEnum.SQUARE]: TreeSvgIcons.SquareTree,
//   [TreeTypeEnum.SEMI_CIRCLE]: TreeSvgIcons.SemiCircleTree,
//   [TreeTypeEnum.CIRCLE]: TreeSvgIcons.CircleTree
// };

// export const FillFruitSvgIconsTypeMap = {
//   [EmotionTypeEnum.ANGRY]: FruitSvgIcons.FillAngryStrawberry,
//   [EmotionTypeEnum.SAD]: FruitSvgIcons.FillSadPear,
//   [EmotionTypeEnum.HAPPY]: FruitSvgIcons.FillHappyPeach,
//   [EmotionTypeEnum.DISGUSTED]: FruitSvgIcons.FillDisgustOrange,
//   [EmotionTypeEnum.FEARFUL]: FruitSvgIcons.FillFearPineapple,
//   [EmotionTypeEnum.NEURAL]: FruitSvgIcons.FillNeutralApple
// };

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
  [EmotionTypeEnum.ANGRY]: FruitIcons.FillAngryStrawberry,
  [EmotionTypeEnum.SAD]: FruitIcons.FillSadPear,
  [EmotionTypeEnum.HAPPY]: FruitIcons.FillHappyPeach,
  [EmotionTypeEnum.DISGUSTED]: FruitIcons.FillDisgustOrange,
  [EmotionTypeEnum.FEARFUL]: FruitIcons.FillFearPineapple,
  [EmotionTypeEnum.NEURAL]: FruitIcons.FillNeutralApple
};

export const OutlineFruitTypeMap = {
  [EmotionTypeEnum.ANGRY]: FruitIcons.OutlineAngryStrawberry,
  [EmotionTypeEnum.SAD]: FruitIcons.OutlineSadPear,
  [EmotionTypeEnum.HAPPY]: FruitIcons.OutlineHappyPeach,
  [EmotionTypeEnum.DISGUSTED]: FruitIcons.OutlineDisgustOrange,
  [EmotionTypeEnum.FEARFUL]: FruitIcons.OutlineFearPineapple,
  [EmotionTypeEnum.NEURAL]: FruitIcons.OutlineNeutralApple
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

export const EmotionTypeSvgMap = (
  emotion: EmotionTypeEnum,
  level: number
): FC<SvgProps> => {
  switch (emotion) {
    case EmotionTypeEnum.HAPPY:
      return SproutIcons[`HappyLv${level}` as keyof typeof SproutIcons];
    case EmotionTypeEnum.SAD:
      return SproutIcons[`SadLv${level}` as keyof typeof SproutIcons];
    case EmotionTypeEnum.ANGRY:
      return SproutIcons[`AngryLv${level}` as keyof typeof SproutIcons];
    case EmotionTypeEnum.DISGUSTED:
      return SproutIcons[`DisgustLv${level}` as keyof typeof SproutIcons];
    case EmotionTypeEnum.FEARFUL:
      return SproutIcons[`FearLv${level}` as keyof typeof SproutIcons];
    case EmotionTypeEnum.NEUTRAL:
      return SproutIcons[`NeuralLv${level}` as keyof typeof SproutIcons];
    default:
      throw new Error('Invalid EmotionTypeEnum value');
  }
};

export const EmotionTypeNameMap = {
  [EmotionTypeEnum.HAPPY]: 'Happy',
  [EmotionTypeEnum.SAD]: 'Sad',
  [EmotionTypeEnum.ANGRY]: 'Angry',
  [EmotionTypeEnum.DISGUSTED]: 'Disgust',
  [EmotionTypeEnum.FEARFUL]: 'Fear',
  [EmotionTypeEnum.NEUTRAL]: 'Neutral'
};

export const EmotionTypeColorMap = (
  emotion: EmotionTypeEnum,
  color: { [key: string]: string }
) => {
  switch (emotion) {
    case EmotionTypeEnum.HAPPY:
      return color['happy-emotion'];
    case EmotionTypeEnum.SAD:
      return color['sad-emotion'];
    case EmotionTypeEnum.ANGRY:
      return color['angry-emotion'];
    case EmotionTypeEnum.NEUTRAL:
      return color['neutral-emotion'];
    case EmotionTypeEnum.FEARFUL:
      return color['fear-emotion'];
    case EmotionTypeEnum.DISGUSTED:
      return color['disgust-emotion'];
    default:
      return color['text'];
  }
};

export const EmotionTypeShapeMap = {
  [EmotionTypeEnum.HAPPY]: EmotionShapeIcons.HappyShape,
  [EmotionTypeEnum.SAD]: EmotionShapeIcons.SadShape,
  [EmotionTypeEnum.ANGRY]: EmotionShapeIcons.AngryShape,
  [EmotionTypeEnum.DISGUSTED]: EmotionShapeIcons.DisgustShape,
  [EmotionTypeEnum.FEARFUL]: EmotionShapeIcons.FearShape,
  [EmotionTypeEnum.NEUTRAL]: EmotionShapeIcons.NeutralShape
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
