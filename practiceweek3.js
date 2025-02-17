let birds = [
    {Type: 'parrot',
     Price: 20000,
     color: 'Green'},
    {Type: 'sparrow',
    Price: 3000 ,
    color: 'brown' },
    {Type: 'Pigeons',
    Model: 2200,
    color: 'white'}  
    
];

let newbirds=birds.map((a)=>{
   console.log(a.Type)
});