import {StudentType} from "../02/02";
import {addSkill} from "./03";

let man: StudentType;
beforeEach(() => {
    man = {
        id: 1,
        name: 'Alex',
        age: 24,
        isActive: true,
        address: {
            city: {
                title: 'Bender',
                country: 'Moldova',
            },
            streetTitle: 'Halturina',

        },
        technologies: [
            {
                id: 1,
                title: 'HTML',
            },
            {
                id: 2,
                title: 'CSS',
            },
            {
                id: 3,
                title: 'JS',
            },
            {
                id: 4,
                title: 'React',
            }
        ]
    }
})

test('new tech skill should be added to student', () => {
    addSkill(man, 'PHP');
    expect(man.technologies.length).toBe(5);
    expect(man.technologies[4].title).toBe('PHP');
    expect(man.technologies[4].id).toBeDefined();
})