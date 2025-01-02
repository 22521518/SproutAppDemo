import SadLight from '@/assets/avatars/svg/light/ava-sad-light.svg';
import SadLDark from '@/assets/avatars/svg/dark/ava-sad-dark.svg';
import SmileLight from '@/assets/avatars/svg/light/ava-smile-light.svg';
import SmileLDark from '@/assets/avatars/svg/dark/ava-smile-dark.svg';
import { AvatarIconTypeEnum } from '@/models/enum.model';

const AvatarIcons = {
  light: {
    [AvatarIconTypeEnum.SAD]: SadLight,
    [AvatarIconTypeEnum.SMILE]: SmileLight
  },
  dark: {
    [AvatarIconTypeEnum.SAD]: SadLDark,
    [AvatarIconTypeEnum.SMILE]: SmileLDark
  }
};

export default AvatarIcons;
