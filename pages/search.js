import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'; 
import { format } from "date-fns"
import {searchResults} from '../data/data'
import InfoCard from '../components/InfoCard';


export default function Search() {
    const router = useRouter();
    const {location, startDate, endDate, numOfGuests} = router.query;
    // const formattedStartDate = format(new Date(startDate),"dd MMMM yy");
    // const formattedEndDate = format(new Date(endDate),"dd MMMM yy");
    // const range =  `${formattedStartDate} - ${formattedEndDate} `
   
  return (
    <div>
        <Header placeholder={`${location} | ${numOfGuests}`} />
        <main className='flex'>
            <section className='flex-grow pt-14 px-6'>
                <p className='tex-xs font-semibold'>300+ stays for {numOfGuests} guest</p>
                <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>
                <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                    <p className='button'>Cancellation Flexibility</p>
                    <p className='button'>Type of Place</p>
                    <p className='button'>Beds and Rooms</p>
                    <p className='button'>Price</p>
                </div>
                <div className='flex flex-col'>
                    {searchResults.map(item=>(
                        <InfoCard 
                            key={item.location}
                            title={item.title}
                            img={item.img}
                            location={item.location}
                            description={item.description}
                            star={item.star}
                            price={item.price}
                            total={item.total}
                        />
                    ))}
                </div>
            </section>
        </main>
        <Footer />
    </div>
  )
}



// export async function getServerSideProps(){
//     const searchResults = await fetch('https://links.papareact.com/isz').then((res)=>res.json());
//     return {
//         props: {
//             searchResults
//         }
//     }
// }