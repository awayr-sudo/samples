import { ApiService } from "./api.service";

export default class ClientService extends ApiService {

    template = 'one'
    template2 = 'two'
    gemItems = [{
        callback: function () {
            console.log("call back")
        },
        title: "Add Gem",
        icon: "gems icon"
    }]
    constructor() {
        super();
    }

    // tempalet() {
    //     return this.temaplate
    // }
    // tempalet2() {
    //     return this.temaplate2
    // }


}