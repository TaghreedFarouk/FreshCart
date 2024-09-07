import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import HeroSection from "../../Components/HeroSection/HeroSection";
import BrandsSlider from "../../Components/BrandsSlider/BrandsSlider";
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts";
import CategorySection from "../../Components/CategorySection/CategorySection";
import LoadingScreen from "../../Components/loadingScrean/loadingScrean";
import axios from "axios";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/products');
        setProducts(data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const userToken = localStorage.getItem('token');

  return (
    <>
      <Helmet>
        <title>FreshCart</title>
      </Helmet>
        <section className=" dark:bg-gray-950">
      {isLoading ? <LoadingScreen /> :       <HeroSection />
      }
    </section>
    <section className=" dark:bg-gray-950">
      {isLoading ? <LoadingScreen /> :         <CategorySection />
      }
    </section>
   
      <FeaturedProducts userToken={userToken} products={products} isLoading={isLoading} />

    <section className=" dark:bg-gray-950">
      {isLoading ? <LoadingScreen /> : <BrandsSlider />}
    </section>

    </>
  );
}


