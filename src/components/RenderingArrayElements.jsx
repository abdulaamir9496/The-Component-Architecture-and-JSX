
// const RenderingArrayElements = () => {
//     let fruits = ['Persimmon', 'Malta', 'DragonFruit', 'BlueBerries', 'Dates']
//     return (
//         <div>
//             <h1>Rendering Array of Elements</h1>
//             <h1>{fruits}</h1>
//         </div>
//     )
// }

//export default RenderingArrayElements

//If we directly try to access Array. 
//All the Array elements are showing together like: PersimmonMaltaDragonFruitBlueBerriesDates
//So, to avoid this We will use HOM (Higher Order Method)
// What HOM we are going to use ?
// We are going to use Map() Higher Order Method.
    

function RenderingArrayElements() {
    let fruits = ['Persimmon', 'Malta', 'DragonFruit', 'BlueBerries', 'Dates'];

    return ( 
        <> 
            <div> 
                <ol>
                    {fruits.map((fruit) => {
                        <li>{fruit}</li>
                    })}
                </ol>
            </div>
        </>
    );
}

export default RenderingArrayElements;