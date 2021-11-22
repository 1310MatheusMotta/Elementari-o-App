import axios from "axios";

const conn = axios.create({

    baseURL: 'http://192.168.43.154:3333/',
});

export default conn;