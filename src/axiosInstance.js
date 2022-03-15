import axios from "axios";
export default axios.create({
  baseURL: "https://crudcrud.com/api/59fbc6346c54482daa41241d4e9b6e5f",
  headers: {
    "Content-type": "application/json"
  }
});