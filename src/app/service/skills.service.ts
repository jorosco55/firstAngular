import { Injectable } from '@angular/core';
import { Skill } from '../models/skill';
import { Level } from '../types/level.enum';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  skills: Skill[] = [
    {
      id: 0,
      name: 'Angular',
      level: Level.Advanced
    },
    {
      id: 1,
      name: 'Eating cat food',
      level: Level.Expert
    },
    {
      id: 2,
      name: 'Sitting on laps',
      level: Level.Intermediate
    }
  ];

  constructor() { }
}
