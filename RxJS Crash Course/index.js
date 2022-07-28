const { Observable } = require('rxjs')
const { map, pluck,filter } = require('rxjs/operators')


const users = {
    data: [
        {
            id: 1,
            status: "active",
            age: 14,
        },
        {
            id: 1,
            status: "inactive",
            age: 12,
        },
        {
            id: 1,
            status: "active",
            age: 42,
        },
        {
            id: 1,
            status: "inactive",
            age: 42,
        },
        {
            id: 1,
            status: "active",
            age: 13,
        },
        {
            id: 1,
            status: "inactive",
            age: 75,
        },
        {
            id: 1,
            status: "inactive",
            age: 43,
        },
        {
            id: 1,
            status: "inactive",
            age: 54,
        },
        {
            id: 1,
            status: "active",
            age: 7,
        },
        {
            id: 1,
            status: "active",
            age: 17,
        },
    ]
}

const users2 = {
    data: [
        {
            id: 1,
            status: "active",
            age: 14,
        },
        {
            id: 1,
            status: "inactive",
            age: 12,
        },
        {
            id: 1,
            status: "active",
            age: 42,
        },
        {
            id: 1,
            status: "inactive",
            age: 42,
        },
        {
            id: 1,
            status: "active",
            age: 13,
        },
        {
            id: 1,
            status: "inactive",
            age: 75,
        },
        {
            id: 1,
            status: "inactive",
            age: 43,
        },
        {
            id: 1,
            status: "inactive",
            age: 54,
        },
        {
            id: 1,
            status: "active",
            age: 7,
        },
        {
            id: 1,
            status: "active",
            age: 17,
        },
    ]
}


const observable = new Observable((suscriber)=>{
    //* Emitir datos
    // suscriber.next(10)
    // suscriber.next(11)
    // suscriber.next(12)
    suscriber.next(users2)
    suscriber.next(users)
    suscriber.next(users2)
}).pipe( //! Tubería de filtros
    //* Aquí están los chefs
    pluck("data"),
    filter((value)=> value.length >= 5),
    map((value)=>{
        // console.log("2. Got data from first operator", value)
        return value.filter(user => user.status === "active")
    }),
    map((value)=>{
        // console.log("3. Got data from second operator", value)
        return value.reduce((sum, user)=> sum + user.age, 0) / value.length
    }),
    map((value)=>{
        // console.log("4. Got data from third operator", value)
        if(value < 18){
            throw new Error("Average age is too young")
        }else{
            return value
        }
    }),
)


//* Capturar datos y aplicar lógica
const observer = {
    next : (value) => {
        console.log("Observer got a value of " + value)
    },
    error : (error) => {
        console.log("Observer got an error of "+error)
    },
    complete : () => {
        console.log("Observer got a complete notificaction")
    }
}

//* Conección entre el observable y el observador
observable.subscribe(observer)