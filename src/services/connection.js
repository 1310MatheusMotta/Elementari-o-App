import axios from "axios";

const conn = axios.create({

    baseURL: 'http://192.168.1.53:3333/',
});

export default conn;