import React from 'react';
import { Link } from 'react-router';

const Home = () => (
  <div className='row body_width home_page'>
    <div className='col s6 home_title'>
      <h1 className='center'><b className='home_title'>T R A M</b></h1><br />
      <div>
      </div>
    </div>
    <div className='col s6 home_slogan'>
      <div>
        <h3 className='center'><b>Getting You First Chair</b></h3>
        <Link to='sign_up' className='btn-large blue-grey darken-3 home_signup_btn'>S I G N  U P</Link>
      </div>
    </div>
  </div>
)


export default Home;
