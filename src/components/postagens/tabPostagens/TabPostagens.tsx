import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';

function TabPostagens() {
    const classes = useStyles();
    const [value, setValue] = React.useState('1');
  
    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
      setValue(newValue);
    };

  return (
    <TabContext value={value}>
      <AppBar position="static">
        <TabList onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Item One" value="1" />
          <Tab label="Item Two" value="2" />
          <Tab label="Item Three" value="3" />
        </TabList>
      </AppBar>
      <TabPanel value="1">Item One</TabPanel>
      <TabPanel value="2">Item Two</TabPanel>
      <TabPanel value="3">Item Three</TabPanel>
    </TabContext>
  );
}

export default TabPostagens;
function useStyles() {
    throw new Error("Function not implemented.");
}

