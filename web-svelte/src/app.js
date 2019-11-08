export class Application {
    constructor(server_url){
        this.server_url = server_url;
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
        .then(res=>res.json());
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
        .then(res=>res.json());
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
    update_mana(user) {
        user.mana_per_day
        let charged_mana = (user.mana_charge_per_day * ((now - new Date(user.mana_updated_at)).num_milliseconds() as f64 / (1000*3600*24) as f64)) as i32;
    }
    create_character(game_data) {
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
