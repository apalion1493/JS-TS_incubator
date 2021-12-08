import {ManType} from "./05";

let people: Array<ManType> = [];

beforeEach(() => {
    people = [
        {name: 'name1 lastname1', age: 33},
        {name: 'name2 lastname2', age: 23},
        {name: 'name3 lastname3', age: 13},
        {name: 'name4 lastname4', age: 53},
    ]
});

test('should get array of greetings messages', () => {
    const messages = people.map(man => `hello ${man.name.split(' ')[0]}`);

    expect(messages.length).toBe(4);
    expect(messages[0]).toBe('hello name1');
    expect(messages[1]).toBe('hello name2');
    expect(messages[2]).toBe('hello name3');
    expect(messages[3]).toBe('hello name4');
});
