import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';


function Reviews() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = React.useState(0);

  const nextSlide = () => {
    setIndex((oldIndex) => {
      const result = (oldIndex + 1) % people.length;
      return result;
    });
  };
  const prevSlide = () => {
    setIndex((oldIndex) => {
      const result = (oldIndex - 1 + people.length) % people.length;
      return result;
    });
  };

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        const result = (oldIndex + 1) % people.length;
        return result;
      });
    }, 20000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className='section'>
        <h2 style={{fontSize:"50px",color:"white",}}>What
          <span style={{color:"purple"}}> People say About Us</span> 
        </h2><hr style={{width:"30%",color:"yellow", margin:"0px 0px 0px 450px",}}/>
      <div className='section-center'>
        {people.map((person, personIndex) => {
          const { id, src, name, quote } = person;

          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            <article className={position} key={id}>
              <img src={src} alt={name} className='person-img' />
              <h4>{name}</h4>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' style={{color:"white",}} />
            </article>
          );
        })}
        <button className='prev' onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={nextSlide}>
          <FiChevronRight />
        </button>
        </div>
    </section>
  );
}

export default Reviews;