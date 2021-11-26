import axios from "axios";

const conn = axios.create({

    baseURL: 'http://192.168.29.110:3333',
});

export default conn;