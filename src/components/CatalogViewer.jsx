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

/***
 * 
 * # React: Catalog Viewer

Complete a partially completed React catalog viewer application. Certain core React functionalities 
have already been implemented. Complete the application as shown below in order to pass all the unit tests.

![](https://hrcdn.net/s3_pub/istreet-assets/mllhJWhWckgDu7PqJo6HVw/catalog-viewer-new.gif)

The application has 2 components:

*   The Viewer component, which displays the selected product in a large size.
*   The Thumbs component, which presents a full list of product thumbnails. The list of images is passed to the Thumbs component.


The application has the following functionalities:

*   Initially, the catalog displays the first image in the Viewer.
*   Clicking on the _previous_ or _next_ button displays the previous or next image respectively. The thumbnail list is circular:
    *   Clicking the _next_ button when the last image is showing should display the first image.
    *   Clicking the _previous_ button when the first image is showing should display the last image.
*   Clicking on any thumbnail loads the appropriate image in the Viewer.
*   The checkbox with the label "Start Slide Show" has the following features:
    *   When checked, starts the automatic display of images in the Viewer, beginning with the currently 
    * displayed image and cycling to the next every 3 seconds
    *   When unchecked, stops the automatic cycling of images
    *   During cycling, the user can interact as before (click any thumbnail or the _next_ or _previous_ buttons),
    *  after which cycling continues from that image


The following data-testid attributes are required in the component for the tests to pass:

*   The Viewer component should have the data-testid attribute 'catalog-view'.
*   The _previous_ button should have the data-testid attribute 'prev-slide-btn'.
*   The _next_ button should have the data-testid attribute 'next-slide-btn'.
*   The thumbnail buttons should have the data-testid attributes 'thumb-button-0', 'thumb-button-1', 
'thumb-button-2', and 'thumb-button-3'.
*   The "Start Slide Show" checkbox should have the data-testid attribute 'toggle-slide-show-button'.

Please note that the component has the above data-testid attributes for test cases and certain classes 
and ids for rendering purposes. It is advised not to change them.

## Environment 

- React Version: 16.13.1
- Node Version: 14(LTS)
- Default Port: 8000

## Project Specifications 

**Read-Only Files**
- `src/App.test.js`

**Commands**
- run: 
```bash
npm start
```
- install: 
```bash
npm install
```
- test: 
```bash
npm test
```

 */

