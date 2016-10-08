import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';

export default class BottomTabs extends React.Component{
  render () {
    const bottomStyle = {
      position: 'fixed',
      width: '100%',
      bottom: '0px'
    }
    return (
      <Tabs id="BottomTabs" style={bottomStyle}>
        <Tab
          icon={<MapsPersonPin />}
          label="折扣"
        />
        <Tab
          icon={<MapsPersonPin />}
          label="上新"
        />
        <Tab
          icon={<MapsPersonPin />}
          label="总汇"
        />
      </Tabs>
    )
  }
}