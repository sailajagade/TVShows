
import { FETCHALL_SHOWS,SEARCH_RESULTS,SHOW_SELECT} from "../Api/Url";
import { getData } from "../Api/Api";



export function  fetchShow ()  {
    if (document.getElementById("searchbox"))
      document.getElementById("searchbox").value = "";
  let ans=  getData(FETCHALL_SHOWS)
        return ans
  };
  
export function  onSelect  (event)  {
    const { id } = event;
    return getData(SHOW_SELECT + id)
     
  };
   export function onShowSearchData (event) {
    const { value } = event.target;
     let ans=   getData(SEARCH_RESULTS + value)
     return ans
     
  };