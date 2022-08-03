import React from "react";
import { useState, useRef } from 'react';
import {
    MDBFooter,
    MDBContainer
  } from 'mdb-react-ui-kit';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';


  export default function Footer(){
      const [show, setShow] = useState(false);
      const target = useRef(null);
    return (
        <MDBFooter className='bg-light text-center text-white'>
          <MDBContainer className='pt-1 bg-gray'>
        <section className='mb-2'>
          <MDBBtn
            rippleColor="light"
            link
            floating
            size="sm"
            className='text-light m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>
          <MDBBtn
            rippleColor="dark"
            link
            floating
            size="sm"
            style={{ backgroundColor: '#dd4b39' }}
            className='text-light m-1'
            href='https://www.instagram.com/trustivaa/'
            role='button'
          >
            <MDBIcon fab className='fa-instagram' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            link
            floating
            style={{ backgroundColor: '#ac2bac',color:'white'}}
            size="sm"
            className='text-light m-1'
            href='#!'
            role='button'
            ref={target} 
            onClick={() => setShow(!show)}
          >
          <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
          trustivaa@gmail.com
          </Tooltip>
        )}
      </Overlay>
            <MDBIcon fab className='fa-google' />
          </MDBBtn>
        </section>
      </MDBContainer>

    
          <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2022 Copyright:
            <a className='text-white' href='/'>
              Trustiva.com
            </a>
          </div>
        </MDBFooter>
      );
    }