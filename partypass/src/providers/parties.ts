import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Parties {

  data: any;

  constructor(public http: Http) {
    this.data = null;
  }

  getParties(){

    return new Promise(resolve => {

      this.http.get('http://localhost:8080/api/parties')
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      });
    });

  }

  createParty(party){

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new Promise(resolve =>{
      this.http.post('http://localhost:8080/api/parties', JSON.stringify(party), {headers: headers})
      .subscribe(res => {
        console.log("create party");
        resolve("ok");
      });
    });

  }

  deleteParty(id){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new Promise(resolve =>{
      this.http.delete('http://localhost:8080/api/parties/' + id, {headers: headers})
      .map(res => res.json())
      .subscribe(data => {
        resolve("delete party!");
      });
    });
  }

}
