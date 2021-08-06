import React, { useState } from "react"
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
  TextField
} from "@material-ui/core";

// put this in a css file?
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


function App() {
  const classes = useStyles();

  //initial states 
  const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <Card>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="outlined-basic" label="From" variant="outlined" />
          <TextField id="outlined-basic" label="To" variant="outlined" />

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date picker inline"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
            <KeyboardTimePicker
              margin="normal"
              id="time-picker"
              label="Time picker"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change time',
              }}
            />
          </MuiPickersUtilsProvider>
        </form>
      
      </Card>
     
    </div>

  );
}

export default App;
