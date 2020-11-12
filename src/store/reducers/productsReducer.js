import ropa1 from '../../assets/images/ropa1.jpg';

const INITIAL_STATE = {
    products:[
        {
            id:1,
            name:"Producto 1",
            description: "Lorem ipsum dolor sit amet, sir le pasiui moshle",
            price:1999,
            img:ropa1,
            type:'t-shirt'
        },
        {
            id:2,
            name:"Producto 2",
            description: "Lorem ipsum dolor sit amet, sir le pasiui moshle",
            price:1999,
            img:ropa1,
            type:'t-shirt'
        },
        {
            id:3,
            name:"Producto 3",
            description: "Lorem ipsum dolor sit amet, sir le pasiui moshle",
            price:1999,
            img:ropa1,
            type:'shoes'
        },
        {
            id:4,
            name:"Producto 4",
            description: "Lorem ipsum dolor sit amet, sir le pasiui moshle",
            price:1999,
            img:ropa1,
            type:'shoes'
        },
        {
            id:5,
            name:"Producto 5",
            description: "Lorem ipsum dolor sit amet, sir le pasiui moshle",
            price:1999,
            img:ropa1,
            type:'shoes'
        },
        {
            id:6,
            name:"Producto 6",
            description: "Lorem ipsum dolor sit amet, sir le pasiui moshle",
            price:1999,
            img:ropa1,
            type:'coat'
        },
        {
            id:7,
            name:"Producto 7",
            description: "Lorem ipsum dolor sit amet, sir le pasiui moshle",
            price:1999,
            img:ropa1,
            type:'coat'
        },
        {
            id:8,
            name:"Producto 8",
            description: "Lorem ipsum dolor sit amet, sir le pasiui moshle",
            price:1999,
            img:ropa1,
            type:'shoes'
        }
    ],
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type){

        case 'FILTER_PRODUCTS':{
            return {
                ...state,
                products:[...state.products.filter(item => item.type === action.payload)]
            }
        }

        default: return state
    }
}


