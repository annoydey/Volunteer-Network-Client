import React, { useContext, useState } from 'react';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import { Container, Form, FormControl } from 'react-bootstrap';
import './Book.css'

const Book = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {volunteerType} = useParams();
    const [selectedDate, setSelectedDate] = useState({
        datefill: new Date()
    });

    const handleDate = (date) => {
        const newDates = {...selectedDate}
        newDates.datefill = date;
        setSelectedDate(newDates);
    };

    const handleregistration = () => {
        const newRegistration = {...loggedInUser, ...selectedDate,volunteerType};
        fetch('https://limitless-waters-90437.herokuapp.com/addRegistration', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newRegistration)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })

    }
 
    return (
        <div style={{textAlign: 'center'}}>

            <Container className="text-center text-white">
                <div id="login" className="mx-auto p-3 rounded" style={{textAlign: 'center'}}>
                    <Form>
                        <h3>Register as a Volunteer</h3>
                        <div>
                            <FormControl name="name" type="text" placeholder="Full Name" defaultValue={loggedInUser.name} className="my-3 bg-light" required />
                            <FormControl name="name" type="text" placeholder="Email" defaultValue={loggedInUser.email} className="my-3 bg-light" required />
                            <Form className="my-3 bg-light" required>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <Grid container justify="space-around">
                                    <KeyboardDatePicker
                                        margin="normal"
                                        id="date-picker-dialog"
                                        label="Date"
                                        format="MM/dd/yyyy"
                                        defaultValue={selectedDate.datefill}
                                        onChange={handleDate}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                        />
                                    </Grid>
                                </MuiPickersUtilsProvider>
                            </Form>
                            <FormControl name="name" type="text" placeholder="Description" className="my-3 bg-light" required />
                            <FormControl name="name" type="text" placeholder="Organize books at the library" defaultValue={volunteerType} className="my-3 bg-light" required /> 
                        </div>
                        <Link to="/registered">
                            <button onClick={handleregistration} variant="light" className="btn btn-outline-primary my-3 rounded-pill regbutton">
                                <h6 style={{paddingTop:'2px'}}>Registration</h6>
                            </button>
                        </Link>
                    </Form>
                </div>
            </Container>             
        </div>
    );
};

export default Book;