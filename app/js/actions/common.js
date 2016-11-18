'use strict';

module.exports = {
  types: {
    setDrawer: 'setDrawer',
    setLists: 'setLists',
    setBrandType: 'setBrandType'
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
  setBrandType: function(brand){
    return {
      type: this.types.setBrandType,
      brand: brand
    }
  }
};