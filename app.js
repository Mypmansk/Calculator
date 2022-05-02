let calculate = {
  result: '',
  opereting: function (result) {
    let numberTag=document.getElementsByTagName('td')
    for (let i=0; i<numberTag.length; i++) {
      numberTag[i].onclick=function () {
        let bbk=Number(numberTag[i].innerHTML)
        calculate.result=calculate.result+bbk
        let result=document.getElementById('result')
        result.innerHTML=calculate.result
        console.log (calculate.result, typeof calculate.result)
      }
    }
  }
}
calculate.opereting ()

  let divide=document.getElementById('divide')
  let multiply=document.getElementById('multiply')
  let fold=document.getElementById('fold')
  let subtract=document.getElementById('subtract')
  let equals=document.getElementById('equals')
  let result=document.getElementById('result')

    divide.onclick=function () {
      let bbk=(divide.innerHTML)
      calculate.result=calculate.result+bbk
      result.innerHTML=calculate.result
      console.log (calculate.result)
    }

    multiply.onclick=function () {
      let bbk=(multiply.innerHTML)
      calculate.result=calculate.result+bbk
      result.innerHTML=calculate.result
      console.log (calculate.result)
    }

    fold.onclick=function () {
      let bbk=(fold.innerHTML)
      calculate.result=calculate.result+bbk
      result.innerHTML=calculate.result
      console.log (calculate.result)
    }

    subtract.onclick=function () {
      let bbk=(subtract.innerHTML)
      calculate.result=calculate.result+bbk
      result.innerHTML=calculate.result
      console.log (calculate.result)
    }

    equals.onclick=function () {
      calculate.result=eval(calculate.result)
      result.innerHTML=calculate.result
      console.log (calculate.result)
    }
чваричватвпто
