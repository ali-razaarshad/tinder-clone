import axios from "axios";

const instance = axios.create({
    baseURL: "https://tinder-backend-nxb.herokuapp.com/",
});

export default instance;