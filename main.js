
let getActual = document.querySelector('.actual')
let getTarget = document.querySelector('.target')
let getBW = document.querySelector('.bw')
let getEnterFFA= document.querySelector('.ffa')
let getEnterActivity = document.querySelector('.activity')
let getDelivery = document.querySelector('.delivery')
let getSample = document.querySelector('.sample')
let getCaustic50 = document.querySelector('.caustic-text50')
let getCaustic25 = document.querySelector('.caustic-text25')
let getSulfuric50 = document.querySelector('.caustic-text50')
let getSulfuric25 = document.querySelector('.caustic-text25')
let getSulfuric20 = document.querySelector('.caustic-text20')








let getResult = document.querySelector('.adjustment-result')


let inputA = []
let inputB = []
let inputC = []
let inputD = []
let toggleMenu =[]



function ffaAdjustment(){
    //storing input values into an array

    inputA.push(Number(getActual.value))
    inputA.push(Number(getTarget.value))
    inputA.push(Number(getBW.value))

    console.log(inputA)
    
    //.apply uses array as parameter
    fatAdjustment.apply(null,inputA) 
    inputA = [] 
}



function activeAdjustment(){
    //storing input values into an array

    inputB.push(Number(getActual.value))
    inputB.push(Number(getTarget.value))
    inputB.push(Number(getBW.value))

    //.apply uses array as parameter

    activity.apply(null,inputB) 
    inputB = []
}

function casuticAdjustment(){

  inputC.push(Number(getDelivery.value))
  inputC.push(Number(getSample.value))
  inputC.push(Number(getBW.value))


  caustic.apply(null,inputC)
  
  inputC = []

}

function sulfuricAdjustment(){

  inputD.push(Number(getDelivery.value))
  inputD.push(Number(getSample.value))
  inputD.push(Number(getBW.value))


  sulfuric.apply(null,inputD)
  
  inputD = []

}
   


function clear01(){

  console.log('running')
  getActual.value = ""
  getTarget.value = ""
  getBW.value = ""
  getResult.value = ""
}

function clearPH(){



  console.log('running')
  getDelivery.value = ""
  getSample.value = ""
  getBW.value = ""
  getResult.value = ""
  getCaustic25.innerHTML = "25% Caustic: "
  getCaustic50.innerHTML = "50% Caustic: "
}

function clearPH2(){



  console.log('running')
  getDelivery.value = ""
  getSample.value = ""
  getBW.value = ""
  getResult.value = ""
  getSulfuric25.innerHTML = "25% Sulfuric: "
  getSulfuric50.innerHTML = "50% Sulfuric: "
  getSulfuric20.innerHTML = "20% Sulfuric: "
}






function fatAdjustment(actual,target,bW){

    let fullA =  Math.round(((actual-target)/100)*bW)
    let fullB =  Math.round(((target-actual)/100)*bW)


    let getRadio = document.querySelector('.percent-add').checked

    let getResult = document.querySelector('.adjustment-result')

    if((actual) > (target)){
      getResult.value = 'Strip: ' + fullA + ' pounds'
    } 
    
    else if ((target) > (actual)){
      console.log(target)
      getResult.value = 'Add: ' + fullB + ' pounds'
    }

    if(getRadio === true && (actual) > (target)){
      getResult.value = 'Strip: ' + (Math.round(fullA*0.8)) + ' pounds'
    } else if (getRadio === true && (actual) < (target)){
      getResult.value = 'Add: ' + (Math.round(fullB*0.8)) + ' pounds'
    }
}

function activity(actual,target,bW){
    let result =  Math.round((((actual/target)*bW)-bW))
    let percent = Math.round((((actual/target)*bW)-bW)*0.8)
    console.log('running')
    let getRadio = document.querySelector('.percent-add').checked

    let getResult = document.querySelector('.adjustment-result')
    
    if(getRadio === true){
        getResult.value = "Strip: " + percent + " pounds"
    } else getResult.value = "Strip: " + result + " pounds"
}


function caustic(delivery,sample,bW){
  let result;
  let getResult = document.querySelector('.adjustment-result')
  let getNormality5 = document.querySelector('.fifty').checked
  let getNormality1 = document.querySelector('.ten').checked
  let getCaustic50 = document.querySelector('.caustic-text50')
  let getCaustic25 = document.querySelector('.caustic-text25')

  if(getNormality5 === true){
    result = Math.round((delivery*0.5*bW)/(sample*25))
    getResult.value = "Add: " + result + " pounds"
    getCaustic50.innerHTML = "50% Caustic: " + '<p class="caustic50">' + result*2 + ' pounds </p>'
    getCaustic25.innerHTML = "25% Caustic: " + '<p class="caustic25">' + result*4 + ' pounds </p>'
  } else if(getNormality1 === true){
    result = Math.round((delivery*0.1*bW)/(sample*25))
    getResult.value = "Add: " + result + " pounds"
    getCaustic50.innerHTML = "50% Caustic: " + '<p class="caustic50">' + result*2 + ' pounds </p>'
    getCaustic25.innerHTML = "25% Caustic: " + '<p class="caustic25">' + result*4 + ' pounds </p>'
  } 
  console.log('running caustic..')
  console.log(result)

}


function sulfuric(delivery,sample,bW){
  let result;
  let getResult = document.querySelector('.adjustment-result')
  let getNormality5 = document.querySelector('.fifty').checked
  let getNormality1 = document.querySelector('.ten').checked
  let getSulfuric50 = document.querySelector('.sulfuric-text50')
  let getSulfuric25 = document.querySelector('.sulfuric-text25')
  let getSulfuric20 = document.querySelector('.sulfuric-text20')


  if(getNormality5 === true){
    result = Math.round((delivery*0.5*bW)/(sample*20))
    getResult.value = "Add: " + result + " pounds"
    getSulfuric50.innerHTML = "50% Sulfuric: " + '<p class="sulfuric50">' + result*2 + ' pounds </p>'
    getSulfuric25.innerHTML = "25% Sulfuric: " + '<p class="sulfuric25">' + result*4 + ' pounds </p>'
    getSulfuric20.innerHTML = "20% Sulfuric: " + '<p class="sulfuric20">' + result*5 + ' pounds </p>'

  } else if(getNormality1 === true){
    result = Math.round((delivery*0.1*bW)/(sample*20))
    getResult.value = "Add: " + result + " pounds"
    getSulfuric50.innerHTML = "50% Sulfuric: " + '<p class="sulfuric50">' + result*2 + ' pounds </p>'
    getSulfuric25.innerHTML = "25% Sulfuric: " + '<p class="sulfuric25">' + result*4 + ' pounds </p>'
    getSulfuric20.innerHTML = "20% Sulfuric: " + '<p class="sulfuric20">' + result*5 + ' pounds </p>'

  } 
  console.log('running caustic..')
  console.log(result)
}

