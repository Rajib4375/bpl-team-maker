/* eslint-disable react/jsx-key */

import { useEffect, useState } from 'react';
import './Home.css';
import Cart from './Cart/Cart';

const Home = () => {
   const [AllActors, setAllActors] =useState([]);
   const [selectedActores, setSelectedActores]=useState([]);
   const [reamining, setRemining] = useState(0);
   const [totalCost, setTotalCost] =useState(0)


   useEffect(()=>{
    fetch('data.json')
    .then(res =>res.json())
    .then(data => setAllActors(data))
   },[])

   const handleSelectorActore =(actor) =>{
    const isExist = selectedActores.find(item => item.id == actor.id);
    let count = actor.salary;
    if(isExist){
       return alert('already booked')
    }else{
        selectedActores.forEach(item =>{
            count = count + item.salary;
        });
        const totalRemaining = 20000- count;
        
        if(count >  20000){
            return alert('taka sesh ar hobe nha')
        }
        else{
            setTotalCost(count);
        setRemining(totalRemaining);
        setSelectedActores([...selectedActores, actor]);
        }
    }
    
     
   }
   console.log(selectedActores)

    return (
        <div className="container">
            <div className="home-container">
                <div className='card-container'>
                {
                    AllActors.map(actor =>(
                        <div key={actor.id} className="card">
                    <div className='card-img'>
                        <img className='potho' src={actor.image} alt="" />
                      </div>
                      <h3>{actor.name}</h3>
                      <p><small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, nostrum!</small></p>
                     <div className='info'>
                        <p>slary :{actor.salary}$</p>
                        <p>{actor.role}</p>
                   </div>
                   <button onClick={()=>handleSelectorActore(actor)} className='card-btn'>Select</button>
                </div>
                    ))
                }
                </div>
                <div className='cart'>
   
                    <Cart selectedActores={selectedActores} reamining={reamining} totalCost={totalCost}></Cart>
                </div>

                </div>
            </div>
            
        
    );
};

export default Home;