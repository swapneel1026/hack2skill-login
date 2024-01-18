import { user } from "../constants/user";

export const useUser=(currentUser)=>{

    const loggedinUser = user.find((obj) => obj.username=== currentUser);

      return {name:loggedinUser?.name,username:loggedinUser?.username,city:loggedinUser?.city}

  }