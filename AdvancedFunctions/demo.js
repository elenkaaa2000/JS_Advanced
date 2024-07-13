function register(input){
    let array = [];
   input.map((x)=>{
    if(x!==''){
     let [name,level,items] = x.split(' / ');
     array.push({name, level: Number(level), items: items ? items.split(', '):[]})}
  })
  console.log(JSON.stringify(array))
  }
register(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara', ''
])