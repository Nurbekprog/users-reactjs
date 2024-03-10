import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
const Galery = () => {
  const { id } = useParams();
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/photos${id}`.then((id)=> {
      console.log(id);
    }));
  })
  return (
    <div>
      Galery
    </div>
  )
}

export default Galery
