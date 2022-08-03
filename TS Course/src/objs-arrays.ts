// const person: {
//     name : string;
//     age : number;
// } = {
//     name : 'Luis',
//     age : 20
// };

// const ADMIN = 0;
// const READ_ONLYE = 1;
// const AUTHOR = 2;

enum Role {ADMIN = 5, READ_ONLYE, AUTHOR}

const person = {
    name : 'Luis',
    age : 20,
    hobbies:['Sports','Cooking'],
    role: Role.ADMIN,
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person)

for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
}

if(person.role === Role.AUTHOR){
    console.log('is author');
}