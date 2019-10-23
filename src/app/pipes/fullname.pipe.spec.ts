import { FullnamePipe } from './fullname.pipe';
import { Person } from '../model/person';

describe('Pipe: FullnamePipe', () => {
    let fullname;
    let p: Person = { name: 'Maja', lastname: 'Reissner', mail: 'ja', editMode: false }

    beforeEach(() => {
        fullname = new FullnamePipe();
    })

    it('should return the complete name', () => {
        expect(fullname.transform(p)).toBe(`${p.name} ${p.lastname}`);
    })
})