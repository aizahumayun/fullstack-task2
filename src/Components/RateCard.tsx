import type { UserCard } from '../types'
interface RateProps  {
    ratingCard: UserCard, 
}
const RateCard = ({ratingCard}: RateProps) => {
  return (
    <div className='flex flex-col bg-white rounded-md h-80 w-65 items-center justify-center mt-10 mb-10'>
      <img src={ratingCard.picture} className='rounded-full object-cover h-25 w-25 border-3 border-gray-200 p-0.5 ' alt="" />
      <div className='text-center'>
       <h2 className='font-bold mt-1.5 '>{ratingCard.name}</h2>
       <div className='border-b-4 border-blue-500 w-16 mx-auto mt-1'></div>  
      <p>{ratingCard.id}</p>
      <p className='text-stone-300 font-medium'>{ratingCard.designation}</p>
      </div>
      <div><p className={` h-5 w-[70px] text-center text-black font-bold rounded-l-3xl text-sm -mt-48 ml-[190px] ${ratingCard.rate < 40 ? "bg-yellow-400" : "bg-green-400"}`}>$ {ratingCard.rate}/hr </p></div>
      <div>     
         <button type="button" className='font-bold text-white py-2 px-4 bg-blue-500 hover:bg-blue-700 rounded-4xl h-10 w-40 mt-11  '>View Profile</button>
</div>
    </div>
  )
}

export default RateCard
