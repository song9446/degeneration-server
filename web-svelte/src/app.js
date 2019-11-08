export class Application {
    constructor(server_url){
        this.server_url = server_url;
        this._gamedata = null;
    }
    gamedata(){
        return this._gamedata;
    }
	update(){
        return fetch(this.server_url + "/update", {
		})
		.then(res => {
		});
	}
    reload_session(){
        return fetch(this.server_url + "/session", {
            method: 'get',
            //credentials: 'same-origin',
        })
        .then(res=>res.json())
        .then(res=>this._gamedata = res);
    }
    login(id, password){
        return fetch(this.server_url + "/session", {
            method: 'post',
            //credentials: 'same-origin',
            body:JSON.stringify({"id": id, "password": password}),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res=>res.json());
    }
    logout(){
        return fetch(this.server_url + "/session", {
            method: 'delete',
            //credentials: 'same-origin',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(res=>this._gamedata = res);
    }
    join(id, password, nickname, email){
        return fetch(this.server_url + "/accounts", {
            method: 'post',
            //credentials: 'same-origin',
            body:JSON.stringify({
                "id": id,
                "password": password,
                "nickname": nickname,
                "email": email
            }),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res=>res.json());
    }
    update_mana() {
        let user = this._gamedata.user.mana;
        let charged_mana = user.mana_charge_per_day * ((Date.now() - new Date(user.mana_updated_at)).getTime() / (1000*3600*24));
        let new_mana = Math.min(user.mana + charged_mana, user.max_mana);
        user.mana = Math.min(charged_mana, user.max_mana);
        return user.mana;
    }
    summon_character() {
        let user = this._gamedata.user.mana;
        if(update_mana() - user.summon_mana_cost < 0)
            return Promise.reject();
        return fetch(this.server_url + "/characters", {
            method: 'post',
            //credentials: 'same-origin',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(res=>{
            user.mana -= user.summom_mana_cost;
            return res;
        })
    }
    dummy_gamedata(){
        return {
            user:{
                nickname:"dummy"
            },
            characters:[
            {
                "id": 1,
                "firstname": "개똥",
                "surname": "김",
                "imageurl": "https://www.adorama.com/alc/wp-content/uploads/2016/04/2-4-256x256.jpg",
                "partnerid": 2,
            },
            {
                "id": 2,
                "firstname": "숙자",
                "surname": "말",
                "imageurl": "https://www.nationalgallery.org.uk/server.iip?FIF=/fronts/N-0299-00-000027-WZ-PYR.tif&CNT=1&JTL=2,0",
            },
            {
                "id": 3,
                "firstname": "아무개",
                "surname": "김",
                "matherid": 1,
                "fatherid": 2,
                "imageurl": "https://news.artnet.com/app/news-upload/2018/02/PA_NPG_18_55-Obama-R-1-256x256.jpg",
            },
            {
                "id": 4,
                "firstname": "소똥",
                "surname": "김",
                "matherid": 1,
                "fatherid": 2,
                "imageurl": "https://news.artnet.com/app/news-upload/2016/04/Prince-Warhol--256x256.jpg",
            },
            {
                "id": 8,
                "firstname": "말똥",
                "surname": "김",
                "matherid": 1,
                "fatherid": 2,
                "partnerid": 9,
                "imageurl": "https://www.adorama.com/alc/wp-content/uploads/2016/04/2-4-256x256.jpg",
            },
            {
                "id": 9,
                "firstname": "진",
                "surname": "이",
                "imageurl": "https://news.artnet.com/app/news-upload/2016/04/Prince-Warhol--256x256.jpg",
            },
            {
                "id": 10,
                "firstname": "아무아무개",
                "surname": "김",
                "matherid": 8,
                "fatherid": 9,
                "imageurl": "https://www.nationalgallery.org.uk/server.iip?FIF=/fronts/N-0299-00-000027-WZ-PYR.tif&CNT=1&JTL=2,0",
            },
            {
                "id": 11,
                "firstname": "아무아무개",
                "surname": "송",
                "imageurl": "https://www.nationalgallery.org.uk/server.iip?FIF=/fronts/N-0299-00-000027-WZ-PYR.tif&CNT=1&JTL=2,0",
            },
            {
                "id": 12,
                "firstname": "아무아무개",
                "surname": "최",
                "imageurl": "https://www.nationalgallery.org.uk/server.iip?FIF=/fronts/N-0299-00-000027-WZ-PYR.tif&CNT=1&JTL=2,0",
            }
        ],
    };
    }
};
export const app = new Application("http://127.0.0.1:3000");
