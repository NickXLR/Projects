

class EventBoy{
    constructor(){
        this._list = {};
    }
    on(event_name,...functions){
        if(event_name in this._list){
            for (const func of functions) {
                this._list[event_name].push(func);
            }
        }else{
            this._list[event_name] = functions;
        }
    }

    fire(event_name,...data){
        if(event_name in this._list){
            for (const func of this._list[event_name]) {
                func(...data);
            }
        }else{
            throw new Error("fired an event that doesnt exist");
        }
    }

}

module.exports = EventBoy;