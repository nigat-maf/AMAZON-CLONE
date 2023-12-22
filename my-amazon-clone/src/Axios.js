import axios from "axios";
const instance = axios.create({
	// baseURL: "http://localhost:10000",
	baseURL: "https://nigat-amazone-backend.cyclic.app",
});
export default instance;
