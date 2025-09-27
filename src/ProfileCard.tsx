import { CheckBadgeIcon } from "@heroicons/react/16/solid"
import type { User } from "./types"

type CardProps = {
    userProfile: User;
}
const ProfileCard = ({userProfile}: CardProps) => {
  return (
    <div className="p-14 h-45 bg-white rounded-3xl flex  shadow-lg items-center w-md ">
      <div className=" flex relative items-end ">
        <img
          src={`${userProfile.pic || "https://placehold.co/100"}`}
          alt=""
          className=" rounded-full object-cover"
        /> 
        {userProfile.verified && ( <CheckBadgeIcon className="absolute right-3 size-6 text-blue-500 " />)}      
        
                
      </div>
      <div className="flex flex-col items-left justify-center ml-4 ">
        <h1 className="font-semibold text-left ">{userProfile.name}</h1>
        

            {/* short circuiting */}
        <span className="pt-1">{userProfile.title}</span> 
      </div>
    </div>
  )
}

export default ProfileCard
