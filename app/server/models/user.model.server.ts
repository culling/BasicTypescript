const fs = require('fs');

export class User {
    name: string;
    constructor(name){
        this.name = name;
    };

    speakIntroduction():string{
        return "Hello I am " + this.name
    }

    save(){
        fs.writeFile('/nodeOutput/test - '+ this.name + '.txt', JSON.stringify(this, null, "\t" ) , function(err){
            if(err){
                return console.log(err);
            };

            console.log('The file was Saved');
        });
    };

}