import axios from "axios";
const baseUrl = "http://api.epicai.com/";
export class ApiService {
  endpoint = baseUrl;
  context = null;

  // constructor
  constructor(moduleNode) {
    this.endpoint += moduleNode;
  }

  getAge() {
    return 52;
  }
  get() {
    return axios
      .get(`${this.endpoint}`, {
        headers: {
          Authorization: "Bearer JBluEz7CEoEtX-kpumSAOgpnXhz4oryV",
        },
      })
      .then((res) => res.data);
  }
  delete(id) {
    return axios
      .delete(`${this.endpoint}${id}`, {
        headers: {
          Authorization: "Bearer JBluEz7CEoEtX-kpumSAOgpnXhz4oryV",
        },
      })
      .then((res) => res.data);
  }
  post(payload) {
    return axios.post(`${this.endpoint}`, payload);
  }
  put(payload) {
    return axios.put(`${this.endpoint}`, payload);
  }

 
}
