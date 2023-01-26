import React from "react";
import {useState} from 'react';
//import { Button} from "react-bootstr
import Carousel from 'react-bootstrap/Carousel';
import multi from "../../Assets/multi.jpg";
import neat from "../../Assets/neat.jpg";
import residence from "../../Assets/residence.jpg";
import house from "../../Assets/house.jpg";





const Landing =()=>{

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
      setIsHovering(true);
    };
    
    const handleMouseLeave = () => {
      setIsHovering(false);
    };

return(
    <div className="secone">
        <div style={{
			display:"inline-flexbox",
			margin:"-80px 0px 0px 0px",
			 }}>
            <Carousel >  
                <Carousel.Item interval={5000} >
                    <img className="" src={multi} alt="images"
					style={{
			width:"100%",
			
			 }}/>
                    <Carousel.Caption>
                        <h3>label one slide</h3>
                        <p>wait for me.....</p>
                        <button className='submit-btn' type='submit'style={{
                        width: '150px',
                        height: '40px',
                        padding: '10px',
                        backgroundColor: isHovering ? 'red' : 'purple',
                        color: isHovering ? 'blue' : 'white',
                        borderRadius:"10px",
                      }}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                  Contact Us
                </button>   
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={5000} >
                    <img className="" src={neat} alt="images" 
					style={{
			width:"100%",
			 }}/>
                    <Carousel.Caption>
                        <h3>label one slide</h3>
                        <p>wait for me.....</p>
                        <button className='submit-btn' type='submit'style={{
                        width: '150px',
                        height: '40px',
                        padding: '10px',
                        backgroundColor: isHovering ? 'red' : 'purple',
                        color: isHovering ? 'blue' : 'white',
                        borderRadius:"10px",
                      }}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                  Contact Us
                </button>    
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={5000} >
                    <img className="" src={residence} alt="images" 
					style={{
			width:"100%",
			
			 }}/>
                    <Carousel.Caption>
                        <h3>label one slide</h3>
                        <p>wait for me.....</p>
                        <button className='submit-btn' type='submit'style={{
                        width: '150px',
                        height: '40px',
                        padding: '10px',
                        backgroundColor: isHovering ? 'red' : 'purple',
                        color: isHovering ? 'blue' : 'white',
                        borderRadius:"10px",
                      }}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                  Contact Us
                </button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={5000}>
                    <img className="" src={house} alt="images" 
					style={{
			width:"100%",
			
			 }}/>
                    <Carousel.Caption>
                        <h3>label one slide</h3>
                        <p>wait for me.....</p>
                        <button className='submit-btn' type='submit'style={{
                        width: '150px',
                        height: '40px',
                        padding: '10px',
                        backgroundColor: isHovering ? 'red' : 'purple',
                        color: isHovering ? 'blue' : 'white',
                        borderRadius:"10px",
                      }}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                  Contact Us
                </button> 
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    </div>
)
}
export default Landing;
