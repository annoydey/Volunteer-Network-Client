import React from 'react';
import imagev from '../../images/icons/users-alt 1.png'
import imageplus from '../../images/icons/plus 1.png'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Form } from 'react-bootstrap';
import 'date-fns';
import TextField from '@material-ui/core/TextField';
import upload from '../../images/icons/cloud-upload-outline 1.png'
import './Adminaddevent.css'



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      marginLeft:'5%',
      padding: theme.spacing(2),
      maxWidth: 500,
    },
    button: {
        margin: theme.spacing(1),
    },
  }));

const Adminaddevent = () => {
    const classes = useStyles();
    return (
        <div>
            <section id="main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 text-center">
                            <Link to="/admin">
                                <div id="vregimg">
                                    <img src={imagev} className="icon" alt=""/>
                                    <h5>Volunteer Register List</h5>
                                </div>
                            </Link>
                            <Link to="/addevent">
                                <div  id="vplusimg">
                                    <img src={imageplus} className="icon" alt=""/>
                                    <h5>Add Event</h5>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-9">
                            <table className="table table-striped">
                                <thead> 
                                    <div className="row container-fluid mt-5">
                                            <div className="col-md-2" className={classes.root}>
                                                <Paper className={classes.paper}>
                                                <Grid container spacing={2}>
                                                    <Grid item>
                                                        <Form>
                                                            <div class="d-flex">
                                                                <div className="ml-5">
                                                                    <label>Event Title</label>
                                                                    <form>
                                                                        <input className="form-control mr-sm-3 custom-input p-3" type="text" placeholder="Event Name" a/>
                                                                    </form>
                                                                </div>
                                                                <div className="ml-5">
                                                                    <label>Event Date</label>
                                                                    <form className={classes.container} noValidate>
                                                                        <TextField
                                                                            id="date"
                                                                            type="date"
                                                                            defaultValue="2017-05-24"
                                                                            className={classes.textField}
                                                                            InputLabelProps={{
                                                                            shrink: true,
                                                                            }}
                                                                        />
                                                                    </form>
                                                                </div>
                                                            </div>
                                                            <div class=" mt-3 d-flex">
                                                                <div  className="ml-5">
                                                                    <label>Description</label>
                                                                    <form>
                                                                        <input className="form-control mr-sm-3 custom-input p-3" type="text" placeholder="Description" a/>
                                                                    </form>
                                                                </div>
                                                                <div id="uploadbutton" className="ml-5">
                                                                    <label>Banner</label>
                                                                    <Link className="btn btn-outline-primary "><img className="icon" src={upload} alt=""/>Upload Image</Link>
                                                                </div>
                                                            </div>
                                                        </Form>                    
                                                    </Grid>
                                                    </Grid>
                                                </Paper>
                                                <button id="submitbutton" className="btn btn-primary mt-2">Submit</button> 
                                            </div> 
                                        </div>  
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Adminaddevent;