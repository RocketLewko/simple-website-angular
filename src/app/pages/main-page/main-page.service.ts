import { Injectable, inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ImageModel } from '../../models/image';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainPageService {
  private readonly http = inject(HttpClient);
  private readonly api_url = 'https://picsum.photos/v2/list?limit=10';

  getImages(): Observable<ImageModel[]> {
    return this.http.get<ImageModel[]>(this.api_url);
  }
}
