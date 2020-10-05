import React from 'react';
import { useHistory,Link } from 'react-router-dom';

export default function Content({volunteercontentcard}){
  const history = useHistory()
    const handleBook = (contenttype) => {
        history.push(`/registration/${contenttype}`);
    }
  return (
    <div style={{textAlign:'center'}} className="col-md-3">
      <Link onClick={() => handleBook(volunteercontentcard.name)} >
        <br/>
        <img style={{height: '400px'},{width:'300px'}} src={volunteercontentcard.pic_url}></img>
        <br/>
        <h2>{volunteercontentcard.name}</h2>
      </Link>
    </div>
  );
}
