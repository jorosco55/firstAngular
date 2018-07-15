import { Injectable } from '@angular/core';
import { Skill } from '../models/skill';
import { Level } from '../types/level.enum';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  skills: Skill[] = [
    {
      id: 0,
      name: 'Light Saberness',
      level: Level.Advanced
    },
    {
      id: 1,
      name: 'Mind Reading',
      level: Level.Expert
    },
    {
      id: 2,
      name: 'Being One with the Force',
      level: Level.Intermediate
    }
  ];

  getSkills = (): Observable<Skill[]> => {
    return of(this.skills);
  }
}
