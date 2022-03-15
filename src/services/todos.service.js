import axiosInstance from "../axiosInstance";
class TodosService {
  getAll() {
    return axiosInstance.get("/todos");
  }
  get(id) {
    return axiosInstance.get(`/todos/${id}`);
  }
  create(data) {
    return axiosInstance.post("/todos", data);
  }
  update(id, data) {
    return axiosInstance.put(`/todos/${id}`, data);
  }
  delete(id) {
    return axiosInstance.delete(`/todos/${id}`);
  }
  deleteAll() {
    return axiosInstance.delete(`/todos`);
  }
  findByTitle(title) {
    return axiosInstance.get(`/todos?title=${title}`);
  }
}
export default new TodosService();