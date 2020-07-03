import React from 'react';
import { Jumbotron } from 'reactstrap';
import { FaFacebook, FaInstagram} from 'react-icons/fa'

const  Footer= (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Contact US</h1>
        <p className="lead">WedLockZ</p>
        <p className="lead">Email:wedlockz@gmail.com</p>
        <p className="lead">ContactNumber:912873645</p>
        <p className="lead">Address:#234 4th main 5th cross rajajinagar bangaluru</p>
        <hr className="my-2" />
        <p>You can follow us Here!</p>
        <a href="http://www.facebook.com/profile.php?id="><FaFacebook color="Blue" size="3rem"/></a>
                        <a  href="http://www.instagram.com/in/"><FaInstagram color="#e75480" size="3rem"/></a>
      </Jumbotron>
    </div>
  );
};

export default Footer;