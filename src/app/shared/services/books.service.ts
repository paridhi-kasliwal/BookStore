import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BookService {
  backend_url = environment.backend_url;
  constructor(private httpClient: HttpClient) { }

  getBookListByTopic(paramsObj) {
    let params;
    if (paramsObj !== null && paramsObj !== undefined) {
      params = new HttpParams()
      .set('page', paramsObj.page)
      .set('topic', paramsObj.topic)
      .set('mime_type', paramsObj.mime_type)
      .set('search', paramsObj.search)
    }
    return this.httpClient.get(this.backend_url + 'books/', {params});
  }
}
