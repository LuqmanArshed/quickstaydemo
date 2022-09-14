import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Banner from  '../components/Banner'
import {exlporedata,cardsData} from '../data/data'
import SmallCard from '../components/SmallCard'
import MediumCard from  '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'

function Home(){

  return (
    <div className="">
      <Head>
        <title>EaseMyRental</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* { Header } */}
      <Header />
      
      {/* { Banner } */}
      <Banner />

      {/* main */}
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {exlporedata?.map((item,key) =>(
              <SmallCard key={item.distance} image={item.image} location={item.location} distance={item.distance} />
            ))}
          </div>
          
        </section>

        <section>
        <h2 className='text-4xl font-semibold pb-5 py-5'>Live Anywhere</h2>
        <div className='flex space-x-3 overflow-scroll scrollbar-hide mb-20 p-3 -ml-3'>
          {cardsData.map((item,key)=>(
            <MediumCard key={item.title} title={item.title} img={item.image} />
          ))} 
        </div>
        </section>
            <LargeCard 
              title="The Greatest Outdoors"
              description="Wishlist curated by QuickStay"
              buttonText="Get Inspired"
              img='https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=600' 
            />
      </main>
      <Footer />
    </div>
  )
}

export default Home


// export async function getStaticProps(){
//   // const exploreData = await fetch("https://links.papareact.com/pyp").then(
//   //   (res)=> res.json()
//   //   );
//     const cardsData = await fetch("https://links.papareact.com/zp1").then(
//       (res)=> res.json()
//       );
//     return {
//       props:{
//         cardsData
//       }
//     }
// }