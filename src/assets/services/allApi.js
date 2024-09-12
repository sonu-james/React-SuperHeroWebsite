import { commonApi } from "./commonApi";
import { serverUrl } from "./serverUrl";


//grievance registration 
export const grievanceApi=async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/complaint`,reqBody,"")
}

