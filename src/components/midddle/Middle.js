import React from 'react';
import { UncontrolledCarousel, Carousel } from 'reactstrap';

const items = [
  {
    src: 'https://d397bfy4gvgcdm.cloudfront.net/135474-HL_0224.jpeg',
    altText: '',
    caption: 'WedlockZ',
   caption: <h1  style={{fontSize:'50px',textAlign:'center',color:'#ffff',position:'relative'}}>Make your Wedding Easier Here!!!</h1>,
    header: <h1 style={{fontSize:'90px',textAlign:'center',marginTop:'90px ',marginBottom:'490px ',color:'#ffff'}}>Wedding Halls</h1>,
  
    key: '1'
    


  },
  {
    src:'https://i.pinimg.com/originals/5d/42/32/5d4232f073f6dbd8d30742197ff820cf.jpg',
    altText: '',
    caption: 'WedlockZ',
    caption: <h1  style={{fontSize:'50px',textAlign:'center',color:'#ffff'}}>Make your Wedding Easier Here!!!</h1>,
    header: <h1 style={{fontSize:'90px',textAlign:'center',marginTop:'90px ',marginBottom:'490px ',color:'#333'}}>Wedding Halls</h1>,
    key: '2'
  },
  {
    src: 'https://www.hamaraevent.com/uploads/blog/0672224001472108867.jpeg',
    altText: '',
    caption: 'WedlockZ',
    caption: <h1  style={{fontSize:'50px',textAlign:'center',color:'#ffff'}}>Make your Wedding Easier Here!!!</h1>,
    header: <h1 style={{fontSize:'90px',textAlign:'center',marginTop:'90px ',marginBottom:'490px ',color:'#fff'}}>Wedding Halls</h1>,
    key: '3'
  }
];

const Middle = () => <UncontrolledCarousel items={items} />;

export default Middle;