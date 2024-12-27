import SadLight from '../assets/avatars/svg/light/ava-sad-light.svg';
import SadLDark from '../assets/avatars/svg/dark/ava-sad-dark.svg';
import SmileLight from '../assets/avatars/svg/light/ava-smile-light.svg';
import SmileLDark from '../assets/avatars/svg/dark/ava-smile-dark.svg';
import { AvatarIconType } from './type.constant';

const AvatarIcons = {
  light: {
    [AvatarIconType.SAD]: SadLight,
    [AvatarIconType.SMILE]: SmileLight
  },
  dark: {
    [AvatarIconType.SAD]: SadLDark,
    [AvatarIconType.SMILE]: SmileLDark
  }
};

export default AvatarIcons;
