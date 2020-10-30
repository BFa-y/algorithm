function fun(a,b,c,d) {
    console.log(arguments);
    // [Arguments] { '0': 'tom', '1': [ 1, 2, 3 ], '2': { name: 'Janny' } }
    console.log(typeof(arguments))
    // object
}
fun('tom',[1,2,3],{name:'Janny'});
