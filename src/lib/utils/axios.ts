import axios from "axios";

const instance = axios.create({
    baseURL: "https://oa-helper-server-1.onrender.com/api/",
});

export default instance;