import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  public isConnceted : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() {}
}
