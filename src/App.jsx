import {useState} from 'react';
import people from "./data";
import {FaChevronCircleLeft,FaChevronCircleRight,FaQuoteRight} from 'react-icons/fa'
 function App() {
  const [index,setIndex]= useState(0);
  const { name,job, image, text}= people[index];
 
  
const nextPerson =() => {
  setIndex((currentIndex) =>{
    let newIndex=( currentIndex +1) % people.length
    return newIndex;
  })
}
const prevPerson =() => {
  setIndex((currentIndex) =>{
    let newIndex= (currentIndex -1+people.length) % people.length
    return newIndex;
  })
};
const randomPerson =() =>{
 let randomNumber =Math.floor(Math.random() * people.length);
 if(randomNumber === index){
  randomNumber = index +1;
 }
 const newInex=randomNumber % people.length;
 setIndex(newInex);
}
  return (
    <main>
      <article className='review'>
          <div className='img-container'>
            <img src={image} alt={name} className='person-img'/>
            <span className='quote-icon'>
              <FaQuoteRight/>
            </span>
          </div>
          <h4 className='author'>{name}</h4>
          <p className='job'>{job}</p>
          <p className='info'>{text}</p>
          <div className='btn-container'>
            <button className='prev-btn' onClick={prevPerson}><FaChevronCircleLeft/></button>
             <button className='next-btn' onClick={nextPerson}><FaChevronCircleRight/></button>  
              
            </div>
            <button className='btn btn-hipster' onClick={randomPerson}>
                 surprise me
             </button>
      </article>
      
    </main>
     
      
   
  
  )
}

export default App
