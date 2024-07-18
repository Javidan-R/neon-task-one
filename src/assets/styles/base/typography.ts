import nunitoLight from '../../fonts/Nunito/NunitoSans-Light.ttf';
import nunitoThin from '../../fonts/Nunito/NunitoSans-ExtraLight.ttf';
import nunitoXBlack from '../../fonts/Nunito/NunitoSans-ExtraBold.ttf';

import WestTrialBold  from '../../fonts/West/WestTrial-Bold.otf';
import WestTrialRegular  from '../../fonts/West/WestTrial-Regular.otf';
import WestTrialMedium  from '../../fonts/West/WestTrial-Medium.otf';


const typography = {
  '@font-face': [
    {
      fontFamily: 'Went Bold',
      src: `url("${WestTrialBold}")`,
    },
    {
      fontFamily: 'Went Light',
      src: `url("${nunitoLight}")`,
    },
    {
      fontFamily: 'Went Medium',
      src: `url("${WestTrialMedium}")`,
    },
    {
      fontFamily: 'Went Regular',
      src: `url("${WestTrialRegular}")`,
    },
    {
      fontFamily: 'Went Thin',
      src: `url("${nunitoThin}")`,
    },
    {
      fontFamily: 'Went XBlack',
      src: `url("${nunitoXBlack}")`,
    }
  ],
};

export default typography;
