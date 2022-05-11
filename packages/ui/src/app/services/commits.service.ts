import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBALS } from '../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class CommitsService {

  constructor(
    private http: HttpClient
  ) {}
  
  public getByOwnerAndRepo(owner: string, repo:string){
    return this.http.get(`${GLOBALS.UrlApi}${GLOBALS.Commits}${owner}/${repo}`);
  }
}
