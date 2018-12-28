import React from 'react';
import flagEn from '../../i18n/flags/flag_en.png';
import {
  LanguageChooserWrap,
  CurrentFlag,
} from './LanguageChooserStyles';

const LanguageChooser = () => (
  <LanguageChooserWrap>
    <CurrentFlag>
      <img src={flagEn} alt="flag" style={{ verticalAlign: 'middle' }} />
    </CurrentFlag>
  </LanguageChooserWrap>
);

export default LanguageChooser;
