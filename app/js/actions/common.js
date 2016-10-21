'use strict';

module.exports = {
  types: {
    setDrawer: 'setDrawer',
    setLists: 'setLists',
    setListType: 'setListType'
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
  setListType: function(brand){
    return {
      type: this.types.setListType,
      status: status
    }
  }
};