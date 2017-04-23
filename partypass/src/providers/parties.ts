// import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';


//   Generated class for the Parties provider.

//   See https://angular.io/docs/ts/latest/guide/dependency-injection.html
//   for more info on providers and Angular 2 DI.

// @Injectable()
// export class Parties {

//   constructor(public http: Http) {
//     console.log('Hello Parties Provider');
//   }

// }


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
 
    if (this.data) {
      return Promise.resolve(this.data);
    }
 
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
 
    this.http.post('http://localhost:8080/api/parties', JSON.stringify(party), {headers: headers})
      .subscribe(res => {
        console.log(res.json());
      });
 
  }
 
  deleteParty(id){
 
    this.http.delete('http://localhost:8080/api/parties/' + id).subscribe((res) => {
      console.log(res.json());
    });    
 
  }
 
}
