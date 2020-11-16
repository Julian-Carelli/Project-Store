import {FILTER_PRODUCTS} from '../constants/productsTypes'

import coat1 from '../../assets/images/coat/coat1.jpg';
import coat2 from '../../assets/images/coat/coat2.jpg';
import coat3 from '../../assets/images/coat/coat3.jpg';
import coat4 from '../../assets/images/coat/coat4.jpg';
import shoes1 from '../../assets/images/shoes/shoes1.jpg';
import shoes2 from '../../assets/images/shoes/shoes2.jpg';
import shoes3 from '../../assets/images/shoes/shoes3.jpg';
import shoes4 from '../../assets/images/shoes/shoes4.jpg';
import shoes5 from '../../assets/images/shoes/shoes5.jpg';
import shoes6 from '../../assets/images/shoes/shoes6.jpg';
import shirt1 from '../../assets/images/t-shirt/shirt1.jpg';
import shirt2 from '../../assets/images/t-shirt/shirt2.jpg';
import shirt3 from '../../assets/images/t-shirt/shirt3.jpg';
import shirt4 from '../../assets/images/t-shirt/shirt4.jpg';
import shirt5 from '../../assets/images/t-shirt/shirt5.jpg';
import shirt6 from '../../assets/images/t-shirt/shirt6.jpg';




const INITIAL_STATE = {
    products:[
        {
            id:1,
            name:"Producto 1",
            description: "Lorem ipsum dolor sit amet, sir le pasiui moshle",
            price:1999,
            img:shirt1,
            type:'remeras'
        },
        {
            id:2,
            name:"Producto 2",
            description: "Lorem ipsum dolor sit amet, sir le pasiui moshle",
            price:1999,
            img:shirt2,
            type:'remeras'
        },
        {
            id:3,
            name:"Producto 3",
            description: "Lorem ipsum dolor sit amet, sir le pasiui moshle",
            price:1999,
            img:shoes1,
            type:'zapatillas'
        },
        {
            id:4,
            name:"Producto 4",
            description: "Lorem ipsum dolor sit amet, sir le pasiui moshle",
            price:1999,
            img:shoes2,
            type:'zapatillas'
        },
        {
            id:5,
            name:"Producto 5",
            description: "Lorem ipsum dolor sit amet, sir le pasiui moshle",
            price:1999,
            img:shoes3,
            type:'zapatillas'
        },
        {
            id:6,
            name:"Producto 6",
            description: "Lorem ipsum dolor sit amet, sir le pasiui moshle",
            price:1999,
            img:coat1,
            type:'abrigos'
        },
        {
            id:7,
            name:"Producto 7",
            description: "Lorem ipsum dolor sit amet, sir le pasiui moshle",
            price:1999,
            img:coat2,
            type:'abrigos'
        },
        {
            id:8,
            name:"Producto 8",
            description: "Lorem ipsum dolor sit amet, sir le pasiui moshle",
            price:1999,
            img:shoes4,
            type:'zapatillas'
        },
        {
            id:9,
            name:"Producto 9",
            description: "Lorem ipsum dolor sit amet, sir le pasiui moshle",
            price:1999,
            img:shoes5,
            type:'abrigos'
        },
        {
            id:10,
            name:"Producto 10",
            description: "Lorem ipsum dolor sit amet, sir le pasiui moshle",
            price:1999,
            img:shirt3,
            type:'remeras'
        },
        {
            id:11,
            name:"Producto 11",
            description: "Lorem ipsum dolor sit amet, sir le pasiui moshle",
            price:1999,
            img:shirt4,
            type:'remeras'
        },
        {
            id:12,
            name:"Producto 12",
            description: "Lorem ipsum dolor sit amet, sir le pasiui moshle",
            price:1999,
            img:shirt5,
            type:'remeras'
        },
        {
            id:13,
            name:"Producto 13",
            description: "Lorem ipsum dolor sit amet, sir le pasiui moshle",
            price:1999,
            img:shirt6,
            type:'remeras'
        },
        {
            id:14,
            name:"Producto 14",
            description: "Lorem ipsum dolor sit amet, sir le pasiui moshle",
            price:1999,
            img:coat3,
            type:'remeras'
        },
        {
            id:15,
            name:"Producto 15",
            description: "Lorem ipsum dolor sit amet, sir le pasiui moshle",
            price:1999,
            img:coat4,
            type:'abrigos'
        },
        {
            id:16,
            name:"Producto 16",
            description: "Lorem ipsum dolor sit amet, sir le pasiui moshle",
            price:1999,
            img:shoes6,
            type:'zapatillas'
        }
    ],
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type){

        case FILTER_PRODUCTS:{
            return {
                ...state,
                products:[...state.products.filter(item => item.type === action.payload)]
            }
        }

        default: return state
    }
}


