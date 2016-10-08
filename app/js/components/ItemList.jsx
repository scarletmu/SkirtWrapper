import React from 'react';
//MUI
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

//Style
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
  },
};

export default class ItemList extends React.Component {
  render () {
    let {GridLists} = this.props;
    return (
      <div style={styles.root}>
        <GridList style={styles.gridList}>
          <Subheader>上新列表</Subheader>
          {GridLists.map((tile) => (
            <GridTile
              key={tile.Url}
              title={tile.Name}
              subtitle={<span><b>{tile.SalePrice}</b></span>}
              actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
            >
              <img src={tile.Avatar} />
            </GridTile>
          ))}
        </GridList>
      </div>
    )
  }
}

