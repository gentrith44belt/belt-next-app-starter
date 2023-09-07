import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://api.beltdev.com",
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptors

// Response interceptors
