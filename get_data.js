const data_1= require('./data.json')
const data_2= require('./data_2.json')
const full_data= ()=>[...data_1, ...data_2]

function get_random(){
  //full data size
  const full_size= 20
  const random=Math.floor(Math.random()* 20)
  return full_data()[random]
  
}

module.exports= get_random