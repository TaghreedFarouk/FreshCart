import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import LoadingScreen from '../loadingScrean/loadingScrean';


function CategorySection() {
  const [categories, setCategories] = useState([]);
  const [isLoading , setIsLoading] = useState(false)


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows:false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 955,
        settings: {
          slidesToShow: 4,
          slidesToScroll:1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll:1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  async function  gategories(){
    setIsLoading(true)
   const {data} = await axios.get('https://ecommerce.routemisr.com/api/v1/categories')
   console.log(data.data);
   setCategories(data?.data)
   setIsLoading(false)

   
  }

  useEffect(() => {
    
    gategories()
    return () => {
      
    }
  }, [])
  
  if(categories.length == 0){
    return <span className="loader"></span>
  }
  if (isLoading) return <LoadingScreen />;

  return (
   <>
  <Slider {...settings} className='px=2 my-10 py-8  dark:bg-gray-950 '>
    {
      categories.map((c)=>(
        <div key={c.id} className='grid sm:grid-cols-2 dark:bg-gray-950 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6'>
          <img className='h-[250px] w-full object-cover ' src={c.image} alt="categoryImage" />
          <h3 className='text-lg my-3 dark:text-white'>{c.name} </h3>
        </div>
      ))
    }
    </Slider>
   </>
  )
}

export default CategorySection