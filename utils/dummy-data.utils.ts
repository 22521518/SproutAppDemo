import {
  EmotionTypeEnum,
  TreeColorTypeEnum,
  TreeTypeEnum
} from '@/models/enum.model';
import { TreeType } from '@/models/type.model';

export function RandomEmotionTypeEnum(): EmotionTypeEnum {
  const enumValues = Object.values(EmotionTypeEnum).filter(
    (value) => typeof value === 'number'
  ) as number[];
  const randomIndex = Math.floor(Math.random() * enumValues.length);
  return enumValues[randomIndex];
}

export function DummyFruit(type?: EmotionTypeEnum) {
  let typeFruit = type || RandomEmotionTypeEnum();
  return {
    id: (Math.random() * 100).toString() + new Date().getTime().toString(),
    type: typeFruit,
    created_at: new Date()
  };
}

export function DummyTreePart(
  level: number,
  type: TreeTypeEnum,
  color: TreeColorTypeEnum,
  randomFruit: boolean = true,
  fullFruit: boolean = true
) {
  const fruitList = Array.from(
    { length: fullFruit ? 16 : Math.floor(Math.random() * 17) },
    (_, i) => i
  ).map(() => {
    return DummyFruit();
  });

  return {
    id: (Math.random() * 100).toString() + new Date().getTime().toString(),
    level:
      level >= 1 && level <= 4
        ? level
        : level <= 0
        ? 4 - (level % 4)
        : level % 4,
    type: type,
    color: color,
    size: 1,
    fruit: randomFruit ? fruitList : []
  };
}

export function DummyTreesList(year: number = 2024): TreeType[] {
  return Array.from({ length: 12 }, (_, i) => i).map((i) => {
    // const getRandomLevel = () => Math.floor(Math.random() * 4) + 1; // Random level between 1 and 4
    const getRandomLevel = () => 4; // Random level between 1 and 4

    if (i < 3) {
      return {
        id:
          i.toString() +
          (Math.random() * 100).toString() +
          new Date().getTime().toString(),
        type: TreeTypeEnum.TRIANGLE,
        color: TreeColorTypeEnum.SPRING24,
        parts: Array.from({ length: getRandomLevel() }, (_, i) => i).map(
          (index) => {
            return DummyTreePart(
              index + 1,
              TreeTypeEnum.TRIANGLE,
              TreeColorTypeEnum.SPRING24
            );
          }
        ),
        month: i + 1,
        year: year
      };
    }
    if (i < 6) {
      return {
        id:
          i.toString() +
          (Math.random() * 100).toString() +
          new Date().getTime().toString(),
        type: TreeTypeEnum.SQUARE,
        color: TreeColorTypeEnum.SUMMER24,
        parts: Array.from({ length: getRandomLevel() }, (_, i) => i).map(
          (index) => {
            return DummyTreePart(
              index + 1,
              TreeTypeEnum.SQUARE,
              TreeColorTypeEnum.SUMMER24
            );
          }
        ),
        month: i + 1,
        year: year
      };
    }
    if (i < 9) {
      return {
        id:
          i.toString() +
          (Math.random() * 100).toString() +
          new Date().getTime().toString(),
        type: TreeTypeEnum.SEMI_CIRCLE,
        color: TreeColorTypeEnum.FALL24,
        parts: Array.from({ length: getRandomLevel() }, (_, i) => i).map(
          (index) => {
            return DummyTreePart(
              index + 1,
              TreeTypeEnum.SEMI_CIRCLE,
              TreeColorTypeEnum.FALL24
            );
          }
        ),
        month: i + 1,
        year: year
      };
    }
    return {
      id:
        i.toString() +
        (Math.random() * 100).toString() +
        new Date().getTime().toString(),
      type: TreeTypeEnum.CIRCLE,
      color: TreeColorTypeEnum.WINTER24,
      parts: Array.from({ length: getRandomLevel() }, (_, i) => i).map(
        (index) => {
          return DummyTreePart(
            index + 1,
            TreeTypeEnum.CIRCLE,
            TreeColorTypeEnum.WINTER24
          );
        }
      ),
      month: i + 1,
      year: year
    };
  });
}
