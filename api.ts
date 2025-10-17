import { axios } from "axios";
import * as dotenv from "dotenv";

dotenv.config();

const api = axios.create({
    baseURL: process.env.API_URL,
})