

//De objeto a arreglo
//3 Formas de transformarlo

const programador = {
    nombre : 'Sergie Code',
    instagram: '@sergiecode',
    mail: 'sergiecode@gmail.com',
    linkedin: 'in/sergiecode'
}

let keys = Object.keys(programador)
//  keys va a dar ['nombre', 'instagram', 'mail', 'linkedin']
let values = Object.values(programador)
/*  values va a dar ['Sergie Code', '@sergiecode', 
    'sergiecode@gmail.com', 'in/sergiecode'] */
let entries = Object.entries(programador)
/*  entries va a dar un array de arrays (listo para recorrer)
    [
        ['nombre', 'Sergie Code'],
        ['instagram', '@sergiecode'],
        ['mail', 'sergiecode@gmail.com'],
        ['linkedin', 'in/sergiecode']
    ]
*/ 

