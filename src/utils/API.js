import axios from "axios";

const BASEURL = "https://www.omdbapi.com/?s="
const APIKEY = "&apikey=9f572b90";

//export search method to query movie API for movie that is entered by user
export default {
    search: function(query) {
      console.log("API query in progress");
        return axios.get(BASEURL + query + APIKEY)
          }
        };
