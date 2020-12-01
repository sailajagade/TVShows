import { FETCHALL_SHOWS, SEARCH_RESULTS, SHOW_SELECT } from "../Api/Url";
import { getData } from "../Api/Api";

export function fetchShow() {
  if (document.getElementById("searchbox"))
    document.getElementById("searchbox").value = "";
  let ans = getData(FETCHALL_SHOWS);
  return ans;
}

export function onSelect(id) {
  return getData(SHOW_SELECT + id);
}
export function onShowSearchData(value) {
  let ans = getData(SEARCH_RESULTS + value);
  return ans;
}
