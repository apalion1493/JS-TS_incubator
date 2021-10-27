import {cheapPredicate, predicate} from "./04";

test('should take old men older then 90', () => {
    const ages = [12, 1, 23, 89, 56, 100];
    const oldAges =  ages.filter(predicate);
    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
});

test('should take courses chipper 160', () => {
    const courses = [
        {title: 'css', price: 100},
        {title: 'js', price: 200},
        {title: 'react', price: 150}
    ]

    const chipCourses =  courses.filter(cheapPredicate);
    expect(chipCourses.length).toBe(2);
    expect(chipCourses[0].title).toBe('css');
    expect(chipCourses[1].title).toBe('react');
});

test('Get only completed tasks', () => {
  const tasks = [
      {
          id: 1,
          title: 'bread',
          isDone: false
      },
      {
          id: 2,
          title: 'milk',
          isDone: true
      },
      {
          id: 3,
          title: 'tv',
          isDone: false
      },
      {
          id: 4,
          title: 'internet',
          isDone: true
      },
  ];

  const completedTasks = tasks.filter(task => task.isDone);

  expect(completedTasks.length).toBe(2);
  expect(completedTasks[0].id).toBe(2);
  expect(completedTasks[1].title).toBe('internet');
});