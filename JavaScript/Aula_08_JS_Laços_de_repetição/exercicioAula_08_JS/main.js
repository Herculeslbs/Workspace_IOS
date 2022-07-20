alert(`Conferir Console`)
function tabuada0 ( base )
{
    for ( let i = 1; i <= 10; i ++ )
    {
        console.log( `${base} X ${i} = ${i * base}` );
    }
}

function tabuada1 ( base )
{
    let i = 1;

    while ( i <= 10 )
    {
        console.log( `${base} X ${i} = ${i * base}` );
        i ++;
    }
}

tabuada0( 8 );
tabuada1( 6 );