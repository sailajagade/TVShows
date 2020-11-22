import Axios from "axios";

export function getData(FETCHALL_SHOWS){
    return Axios.get(FETCHALL_SHOWS)
}