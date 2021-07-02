import axios from 'axios';
const baseUrl = 'http://api.epicai.com/';
export class ApiService {
    endpoint = baseUrl;


    // constructor
    constructor(moduleNode) {
        this.endpoint += moduleNode;
    }
  
    getAge() {
        return 52
      }
    get() {
        return axios.get(`${this.endpoint}`, {
            headers: {
                Authorization: "Bearer JBluEz7CEoEtX-kpumSAOgpnXhz4oryV",
            },
        }).then((res => res.data));
    }
    delete(id) {
        return axios.delete(`${this.endpoint}${id}`, {
            headers: {
                Authorization: "Bearer JBluEz7CEoEtX-kpumSAOgpnXhz4oryV",
            },
        }).then(res => res.data);
    }
    post(payload) {
        return axios.post(`${this.endpoint}`, payload)
    }
    put(payload) {
        return axios.put(`${this.endpoint}`, payload)
    }


    // auth services
    // logout() {
    //     return axios.get("/auth/logout");
    // }
    // register(payload) {
    //     return axios.post("/auth/register", payload);
    // }
    // login(email, password) {
    //     return axios.post("/auth/login", { email, password });
    // }
    // resetPassword(password, passwordConfirmation, resetToken) {
    //     return axios.post("/auth/password/reset", {
    //         password: password,
    //         password_confirmation: passwordConfirmation,
    //         token: resetToken
    //     });
    // }
    // forgotPassword(email) {
    //     return axios.post("/auth/password/forgot", { email });
    //     }

}

