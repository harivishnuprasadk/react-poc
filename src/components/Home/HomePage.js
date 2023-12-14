import React from "react";
import MainHeader from "./MainHeader";
import Cover from "./Cover";
import Carousel from "./Carousel";

function HomePage() {
  const images = [
    'https://occ-0-5452-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABaFu0k5qNKL47Kn3urrZwvIn1V3IOWM9z3L2Mq4h6ZyoEpKoLvSKfflzA1Mc63xn960AOSlNKIewu2_0jHtaaE8qSqkh1XYs15TF.png?r=5fd',
    'https://occ-0-2484-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABR7GBzHNeGCVNky_Hk1aST16wOCCdPJJmbDA81kML6mu60veAEDdhPgJmILK-hlPCDgULvxtEAqegEdHro6gTeMqt4uexdWvp5Ah.png?r=54d',
    'https://thumb.ac-illust.com/35/35df4f40a8e742121238c0fcd12cd384_t.jpeg',
    'https://occ-0-5452-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABaFu0k5qNKL47Kn3urrZwvIn1V3IOWM9z3L2Mq4h6ZyoEpKoLvSKfflzA1Mc63xn960AOSlNKIewu2_0jHtaaE8qSqkh1XYs15TF.png?r=5fd',
    'https://occ-0-2484-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABR7GBzHNeGCVNky_Hk1aST16wOCCdPJJmbDA81kML6mu60veAEDdhPgJmILK-hlPCDgULvxtEAqegEdHro6gTeMqt4uexdWvp5Ah.png?r=54d',
    'https://thumb.ac-illust.com/35/35df4f40a8e742121238c0fcd12cd384_t.jpeg',
    'https://occ-0-5452-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABaFu0k5qNKL47Kn3urrZwvIn1V3IOWM9z3L2Mq4h6ZyoEpKoLvSKfflzA1Mc63xn960AOSlNKIewu2_0jHtaaE8qSqkh1XYs15TF.png?r=5fd',
    'https://occ-0-2484-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABR7GBzHNeGCVNky_Hk1aST16wOCCdPJJmbDA81kML6mu60veAEDdhPgJmILK-hlPCDgULvxtEAqegEdHro6gTeMqt4uexdWvp5Ah.png?r=54d',
    'https://thumb.ac-illust.com/35/35df4f40a8e742121238c0fcd12cd384_t.jpeg',
    'https://occ-0-5452-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABaFu0k5qNKL47Kn3urrZwvIn1V3IOWM9z3L2Mq4h6ZyoEpKoLvSKfflzA1Mc63xn960AOSlNKIewu2_0jHtaaE8qSqkh1XYs15TF.png?r=5fd',
    'https://occ-0-2484-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABR7GBzHNeGCVNky_Hk1aST16wOCCdPJJmbDA81kML6mu60veAEDdhPgJmILK-hlPCDgULvxtEAqegEdHro6gTeMqt4uexdWvp5Ah.png?r=54d',
    'https://thumb.ac-illust.com/35/35df4f40a8e742121238c0fcd12cd384_t.jpeg',
  ];
  return (
    <div className="home-page">
      <MainHeader />
      <Cover/>
      <Carousel images={images} title='My List'/>
      <Carousel images={images} title='TV Shows'/>
      <Carousel images={images} title='Movies'/>
    </div>
  );
}

export default HomePage;
