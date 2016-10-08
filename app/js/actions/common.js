'use strict';

module.exports = {
  types: {
    setDrawer: 'setDrawer',
    setLists: 'setLists',
  },
  setLists: function(lists){
    return {
      type: this.types.setLists,
      lists: lists
    }
  },
  setDrawer: function(status){
    return {
      type: this.types.setDrawer,
      status: status
    };
  },
};