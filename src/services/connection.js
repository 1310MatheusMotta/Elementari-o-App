import axios from "axios";

const conn = axios.create({

    baseURL: 'http://192.168.1.119:3333/',
});

export default conn;