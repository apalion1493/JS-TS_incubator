export type ManType = {
    name: string
    age: number
};

const people: Array<ManType> = [
    {name: 'name1 lastname1', age: 33},
    {name: 'name2 lastname2', age: 23},
    {name: 'name3 lastname3', age: 13},
    {name: 'name4 lastname4', age: 53},
];

const dyimychTransformator = (man: ManType) => ({
    stack: ['css', 'js', 'html', 'tdd', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[2],
});

const dev2 = [
    dyimychTransformator(people[0]),
    dyimychTransformator(people[1]),
    dyimychTransformator(people[2])
];

const dev3 = people.map(dyimychTransformator);

const dev4 = people.map(man => ({
        stack: ['css', 'js', 'html', 'tdd', 'react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[2],
    })
);

const messages = people.map(man => `hello ${man.name.split(' ')[0]}`)
