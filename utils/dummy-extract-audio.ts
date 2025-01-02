import { EmotionTypeEnum } from '@/models/enum.model';
import { EmotionsGroup } from '@/models/interface.model';

export const extractAudioAnalysis = (audioAnalysis?: any): EmotionsGroup => {
  return {
    happyEmotion: { type: EmotionTypeEnum.ANGRY, indicators: 0.2 },
    sadEmotion: { type: EmotionTypeEnum.SAD, indicators: 0.2 },
    angryEmotion: { type: EmotionTypeEnum.ANGRY, indicators: 0.2 },
    neutralEmotion: { type: EmotionTypeEnum.NEUTRAL, indicators: 0.3 },
    fearEmotion: { type: EmotionTypeEnum.FEARFUL, indicators: 25 },
    disgustedEmotion: { type: EmotionTypeEnum.DISGUSTED, indicators: 0 }
  };
};
