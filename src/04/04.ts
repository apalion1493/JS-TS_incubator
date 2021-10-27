const ages = [12, 243, 23, 89, 56, 100];

export const predicate = (age: number) => age > 90;

const oldAges = [];

const courses = [
    {title: 'css', price: 100},
    {title: 'js', price: 200},
    {title: 'react', price: 150}
]

type CourseType = {
    title: string
    price: number
}

export const cheapPredicate = (course: CourseType) => course.price < 160

const chipCourses = [
    {title: 'css', price: 100},
    {title: 'react', price: 150}
]
