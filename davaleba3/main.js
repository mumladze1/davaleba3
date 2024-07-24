// davaleba 1

function numb1( ...numbers) { if( numbers.length <= 2) 
{ return 'More than 2 numbers are required'; }
 const sft = numbers[ 0] + numbers[1];
 const pr  = numbers
 .slice(2)
 .reduce((acc,curr) => acc * curr, 1);
 return[sft,pr];


}
const result = numb1( 5,2,1,3,1);
console.log ("Result", result);


// davaleba 2

const user = {
    banks : [ 
        {},
        {},
        { addres : { city:'lagodekhi'}}


    ]



};
function fromuser (user) { const{banks} = user;
if ( banks&& banks[2] && banks[2].addres )
{ return city;}
 return undefined;
}


// davaleba3

const orignal={ 
    name:'elguji',
    age : 99,
    address:{
        vollage:'zemo broliketi',
        street: 'mamuka ampartavanis N1'
    },
    status:['tamada','ojakhis kaci'],
    nestedobject: { 
        prop1:'val1',
        prop2:'val2'
    }

};


function deepcopy(orignal) {
    const copobj={
        ...orignal,
        address:{...orignal.address},
        status: [...orignal.status],
        nestedobject:{...orignal.nestedobject}
    };
    return copobj;


}


