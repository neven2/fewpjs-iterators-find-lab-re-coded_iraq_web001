const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(record) {

  const result = record.find(({result}) => result === 'W')

  if(!!result){
    return result.year + ''
  }else{
    return undefined
  }

}