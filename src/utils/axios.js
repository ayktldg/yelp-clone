import axios from "axios";

const httpService = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3'
  });

export default httpService;