import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:4200/api/words';
  constructor(private http: HttpClient) {}

  // GET method to fetch apple data
  // Fetch details of the word (e.g., apple)
  getWordDetails(word: string): Observable<any> {
    console.log('>>>>>>');
    return this.http.get(`${this.apiUrl}/${word}`);
  }

  // POST method to add apple data
  addWord(wordData: any): Observable<any> {
    return this.http.post(this.apiUrl, wordData);
  }
}
