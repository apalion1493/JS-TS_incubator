type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: Address
    technologies: Array<Technologies>
}
type LocalCityType = {
    title: string
    country: string
}
type Technologies = {
    id: number
    title: string
}
type Address = {
    city: LocalCityType,
    streetTitle: string
}

const man: StudentType = {
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