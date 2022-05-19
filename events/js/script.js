let shoppingCart = {
    total: {
        amount: 91.6,
        currency: 'CZK'
    },
    items: [
        {
            name: 'Apples',
            amount: '2kg',
            price: 62.6
        },
        {
            name: 'Cinnamon',
            amount: 1,
            price: 29
        }
    ]
}

for (let key in shoppingCart) {

    console.log(shoppingCart[key]); // the value behind the current key

}



for (let value of Object.values(shoppingCart)) {

    console.log(value); // the value behind the current key

}

Object.keys(shoppingCart).forEach((key) => {
    console.log(shoppingCart[key]); // the value behind the current key
})

Object.values(shoppingCart).forEach((value) => {
    console.log(value); // the value behind the current key
})


let object1 = {
    foo: 'bar'
}

let json_string1 = JSON.stringify(object1);


let json_string2 = '{"foo":"bar"}';

let object2 = JSON.parse(json_string2);

console.log(object2);


//////////

const myFunc1 = () => {
    return typeof (myFunc1);
}

const myFunc2 = {

    first: () => { console.log('first') },
    second: () => { console.log('second') }

}

myFunc2.first();

const higherOrderReturn = () => {
    return () => {
        console.log('wharever');
    }
}

const func = higherOrderReturn();

func();

// const func2 =

//     () => {
//         return () => {
//             console.log('wharever and other');
//         }
//     }

// func2()();

const myButton = document.getElementById('myBtn')

const handleClick = (e) => {
    console.log(e);
    //setTimeout(() => { e.target.innerHTML = "CLICKED"; }, 3000)

    const intervalId = setInterval(() => {
        console.log(Math.random());
    }, 1000);

    setTimeout(() => { clearInterval(intervalId) }, 5000)


}

myButton.addEventListener('click', handleClick);
