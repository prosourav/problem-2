import React, { useEffect, useState } from 'react';
import Cards from '../Card/Cards';
const Home = () => {
   const [pageOne,setpageOne] = useState([]);
   const [pageTwo,setpageTwo] = useState([]);
   const [page,setpage]=useState('Page-1');
   useEffect(()=>{
      fetch('https://reqres.in/api/users?page=1')
      .then(res=>res.json())
      .then(data=>setpageOne(data.data));
      fetch('https://reqres.in/api/users?page=2')
      .then(res=>res.json())
      .then(data=>setpageTwo(data.data));
   },[]);
  

   
   console.log({pageOne});
   console.log({pageTwo});
   console.log(page);
   

   return (
      <div className='container d-flex justify-content-center'>
     
      <div className='row mt-5 '>
      <h6 className='text-center'>{page}</h6>
         {page==='Page-1'?
         pageOne.map(page=><Cards page={page} key={page.id} ></Cards>):
         pageTwo.map(page=><Cards page={page} key={page.id} ></Cards>)
   }
  -       <div className='text-center mt-3'>
         <button className='mx-1 bg-primary text-white' onClick={()=>setpage('Page-1')}>page1</button>
         <button className='mx-1 bg-primary text-white' onClick={()=>setpage('Page-2')}>page2</button>
         </div>
         
      </div>
      </div>
   );
};

export default Home;