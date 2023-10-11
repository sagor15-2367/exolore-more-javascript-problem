const names=['abul,','babul','kabul','abul','sagor','babul','ratan','rimon','abul'];

function removeDuplicate(names){
    const unique=[ ];
    for(let i=0;i<names.length;i++){
        const name=names[i];
        // console.log(name);
        if(unique.includes(name)===false){
            unique.push(name);
        }
        
    }
    return unique;
}

const uniqueName=removeDuplicate(names);
console.log(uniqueName);