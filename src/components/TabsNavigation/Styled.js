import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
`;

export const WrapperTabsList = styled(TabList)`
  padding: 4px;
  display: flex;
  margin: 0;
`;

WrapperTabsList.tabsRole = 'TabList';

export const WrapperTab = styled(Tab)`
  border-radius: 5px;
  border-bottom: 1px solid #ccc;
  padding: 8px;
  cursor: pointer;
  user-select: none;
  margin-right: 5px;
  &.is-selected {
    background-color: #AAA;
    color: white;
  }
`;

WrapperTab.tabsRole = 'Tab';

export const WrapperTabPanel = styled(TabPanel)`
  width: 100%;
`;

WrapperTabPanel.tabsRole = 'TabPanel';
