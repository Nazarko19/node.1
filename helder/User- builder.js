const createBuilder = (name,age) => {
return {
   name,
   age,
   greeting:()=>{
      console.log('hello')
   }

}

}

module.exports = {
   createBuilder
}