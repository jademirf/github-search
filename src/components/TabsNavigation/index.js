import React from 'react';
import * as S from './Styled'
import Repositories from '../Repositories'
import Starred from '../Starred'

export const TabsNavigation = (props) => {
  return (
    <S.WrapperTabs
      selectedTabClassName='is-selected'
      selectedTabPanelClassName='is-selected'
    >
      <S.WrapperTabsList>
        <S.WrapperTab>Repositories</S.WrapperTab>
        <S.WrapperTab>Starred</S.WrapperTab>
      </S.WrapperTabsList>
      <S.WrapperTabPanel>
        <Repositories />
      </S.WrapperTabPanel>
      <S.WrapperTabPanel>
        <Starred />
      </S.WrapperTabPanel>
    </S.WrapperTabs>
  );
};


export default TabsNavigation;
