import React, { useState } from 'react';
import Content from '../Content/Content';
import fakedata from '../fakeData/index'
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    const style = {
        display: 'flex',
        margin: '40px',
        justifyContent: 'space-between'
    }
    const volunteerContent = fakedata;
    const [volunteerCard , setVolunteerContent] = useState(volunteerContent);

    return (
        <div >
            <br/>
            <h1 style={{textAlign:'center',marginTop:'3%'}}>I GROW BY HELPING PEOPLE IN NEED.</h1> 
            
            <br/>
            <form className="form-inline search searchform">
                <input className="form-control mr-sm-3 custom-input p-3" type="search" placeholder="Search.." aria-label="search" a/>
                <Link className="btn btn-primary">Search</Link>
            </form>
            <div style={style}>
                <div className="row container-fluid">
                    {
                        volunteerCard.map(volunteercontentcard => <Content volunteercontentcard={volunteercontentcard} ></Content>)
                    }
                </div>  
            </div>
        </div>
    );
};

// style={{textAlign:'center'}}

export default Home;



            