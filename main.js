
//trying to make it global
var forEach = function(arr, func){
  for (var i = 0; i < arr.length; i++){
    func(arr[i], i, arr)
  }
}

document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1
  var answerBoxEl = document.querySelector('#inject-html .answer-box')
  answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>"
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var answerPTagWithValue = document.querySelector('#compoundInvestment')
  var stringNumber = answerPTagWithValue.textContent
  var initialValElement = parseInt(stringNumber)

  answerPTagWithValue.innerHTML = initialValElement * 2

})

document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
  var circle = document.querySelector('#circle-bw')
  var circleStyleProp = window.getComputedStyle(circle)
  var color = circleStyleProp.backgroundColor

  if (color === 'rgb(255, 255, 255)'){
    circle.style.background = 'black'
  }else if (color === 'rgb(0, 0, 0)'){
    circle.style.background = 'white'
  }

})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
  var circle = document.querySelector('.circle-red')
  var circleStyleProp = window.getComputedStyle(circle)
  var circleWidthStr = circleStyleProp.width
  var circleWidthNum = parseInt(circleWidthStr)
  var circleHeightStr = circleStyleProp.height
  var circleHeightNum = parseInt(circleHeightStr)

  if (circleWidthNum <= 320){
    circleWidthNum = circleWidthNum * 2
    circleHeightNum = circleHeightNum * 2
    circle.style.width = circleWidthNum + "px"
    circle.style.height = circleHeightNum + "px"
  }if (circleWidthNum > 320){
    circle.style.width = "40px"
    circle.style.height = "40px"
  }
})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5

  var userList = document.querySelector('#user-list')
  var activeUsers = document.querySelectorAll('#user-list li')


  forEach(activeUsers, function(userElement, index){
    if (userElement.className !== 'active'){
      userList.removeChild(userElement)
    }
  })


})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
  var squaresOrderEl = document.querySelectorAll('.answer-box span')
  var squaresEl = document.querySelector('.squares-container')

  var newArray = []
  var newStr = ""

  forEach(squaresOrderEl, function(order, index){
    newArray.push(squaresOrderEl[index].outerHTML)
  })

  newArray.reverse()

  forEach(newArray, function(arrayElement, index){
        // console.log(arrayElement)
        newStr += arrayElement
  })
  squaresEl.innerHTML = newStr
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
  var listOrderEl = document.querySelectorAll('#tasks li')
  var listEl = document.querySelector('#tasks')

  var newStr = ""
  var newListStr = ""

  forEach(listOrderEl, function(orderElement, index){
    orderElement = orderElement.innerHTML
    newStr = orderElement.split('').reverse().join('')
    // console.log(newStr)
    newListStr += '<li>' + newStr + '</li>'
  })
  listEl.innerHTML = newListStr
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
   //TASK #8
   var imageEl = document.querySelector('#city-img')
   var imgSrc = parseInt(imageEl.outerHTML.split("-")[4].split('.')[0])
   imgSrc++

    if (imgSrc <= 10){
        var newStr = './images/' + "city-photo-" + imgSrc.toString() + ".jpg"
    }else{
      newStr = './images/city-photo-1.jpg'
    }

  imageEl.src = newStr

})
