import {PipeTransform, Pipe} from '@angular/core';
import { Person } from '../model/person';

@Pipe({name: 'fullname'})
export class FullnamePipe implements PipeTransform {
    transform(p: Person) {
        return `${p.name} ${p.lastname}`;
    }
}