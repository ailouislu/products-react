import React, { Fragment, useState, useEffect } from 'react'
import 'h8k-components'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { image1, image2, image3, image4 } from '../images'
import Thumbs from "./Thumbs";
import Viewer from "./Viewer";
import "../styles/CatalogViewer.css";

const title = 'Catalog Viewer'

function CatalogViewer() {
  const catalogsList = [
    {
      thumb: image1,
      image: image1
    },
    {
      thumb: image2,
      image: image2
    },
    {
      thumb: image3,
      image: image3
    },
    {
      thumb: image4,
      image: image4
    }
  ]

  const [ catalogs ] = useState([...catalogsList])
  const [ activeIndex, setActiveIndex ] = useState(0)
  const [ slideTimer, setSlideTimer ] = useState(null)
  const [ slideDuration ] = useState(3000)

  useEffect(() => {
    if(slideTimer !== null){
      setInterval(
        () => {
          handelNextSlide();
        },
        slideDuration
      );
    }
  }, [slideTimer, slideDuration]);

  const handelClickImage = (event) => {
    console.log(event.target.value);
    setActiveIndex(event.target.value);
  }

  const handelPreviousSlide = () =>{
    let index = Number(activeIndex - 1);
    if(index < 0)
       index = 3;
    setActiveIndex(index);
  }

  const handelNextSlide = () => {
    let index = Number(activeIndex + 1);
    if(index  >= 4){
      index = 0;
    }
    setActiveIndex(index);
  }


  const handelSlideTimer = (event) => {
    if(event.target.value){
      setSlideTimer(1);
    }
  }

  return (
    <Fragment>
      <div>
          <Breadcrumb>
            <Breadcrumb.Item active>Catalog Viewer</Breadcrumb.Item>
          </Breadcrumb>
      </div>
      <h8k-navbar header={ title }></h8k-navbar>
      <div className='layout-column justify-content-center mt-75'>
        <div className='layout-row justify-content-center'>
          <div className='card pt-25'>
            <Viewer catalogImage={ catalogs[activeIndex].image }
             onClick={handelClickImage}/>
            <div className='layout-row justify-content-center align-items-center mt-20'>
            <button 
              className="icon-only outlined"
              data-testid="prev-slide-btn"
              onClick={handelPreviousSlide}
            >
              <i className="material-icons">arrow_back</i>
            </button>
              <Thumbs 
                items={ catalogs } 
                currentIndex={ activeIndex } 
              />
            <button 
              className="icon-only outlined"
              data-testid="next-slide-btn"
              onClick={handelNextSlide}
            >
              <i className="material-icons">arrow_forward</i>
            </button>
            </div>
          </div>
        </div>
        <div className='layout-row justify-content-center mt-25'>
          <input 
            type='checkbox'
            data-testid='toggle-slide-show-button'
            onChange={handelSlideTimer}
          /> 
          <label className='ml-6'>Start Slide Show</label>
        </div>
      </div>
    </Fragment>
  )
}

export default CatalogViewer

