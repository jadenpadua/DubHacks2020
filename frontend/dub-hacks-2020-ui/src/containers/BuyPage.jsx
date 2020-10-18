import React from 'react';
import BuyPage from '../components/BuyPage';
import Navbar from '../components/Navbar';


const BuyPageContainer = () => {
  return (
    <>
    <Navbar />
    <BuyPage
      image="https://i.imgur.com/67Owitk.jpeg"
      price="$1.20/oz"
      title="Omomo's Coffee Beans"
      current={60}
      goal={66}
      description={
        'Bali Blue Moon has the same spicy, complex notes and backbone as Sumatra, just a bit finer. With less of the earthy, herbal punch, it starts and ends with smooth. Weighty in the cup, with dark chocolate and caramel notes and a syrupy body, it’s a great complement to blustery weather, an ideal mug to cradle in your hands as the weather starts to turn.'
      }
    />
    </>
  );
};

export default BuyPageContainer;
