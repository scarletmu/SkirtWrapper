module.exports = {
    types: {
      setDrawer: 'setDrawer',
    },
    setDrawer: function(status){
        return {
            type: this.types.setDrawer,
            status: status
        };
    }
};