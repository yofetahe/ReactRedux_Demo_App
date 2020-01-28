import React from 'react';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

 const MenuTabs = (props) => {

  const handleChange = (event, newValue) => {
    console.log(newValue);
    
  };
 console.log(props.page);
  return (
   
    <Paper square style={{marginBottom: "20px"}}>
      <Tabs
        value={props.page}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Home" />
        <Tab label="Posts" />
        <Tab label="Album" />
        <Tab label="ToDo's" />
        <Tab label="User" />
      </Tabs>
    </Paper>
  );
}

export default MenuTabs