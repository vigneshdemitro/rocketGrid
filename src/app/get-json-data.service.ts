import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetJsonDataService {

  private _jsonLoc = 'assets/json/MOCK_DATA.json';
  private _colLoc = 'assets/json/column.json'

  constructor(private http: HttpClient) { }

  getJson(){
    return this.http.get<any>(this._jsonLoc)
  }

  getColumn(){
    return this.http.get<any>(this._colLoc)
  }
}
