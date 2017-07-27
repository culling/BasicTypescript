import {User} from "./../models/user.model.server";

export class IndexController{
    constructor(){

    }

    greet(name: string = "stranger"){
        let user = new User(name);
        user.save();
        return user.speakIntroduction();
    }
}