!(function () {
  function x(code) {
    let oMain = document.querySelector('#main')
    let oPre = document.querySelector('#Code_part');
    let count = 0;
    let arr = [15, 40, 100]
    let speed = 40
    let time = null
    let aBtn = document.querySelectorAll('button')

    let Pikachu = function () {
      count += 1;
      oMain.innerHTML = code.substring(0, count)
      oPre.innerHTML = code.substring(0, count)
      
      oPre.scrollTop = oPre.scrollHeight;
      if (count == code.length) {
        clearInterval(time)
      }
    }

    for (let i in aBtn) {
      aBtn[i].onclick = function () {
        speed = arr[i]
        clearInterval(time)
        time = setInterval(Pikachu, speed);
      }
    }

    time = setInterval(Pikachu, speed);
  }
  let code = `/*开始写一只皮卡丘*/
/*
*首先给一个背景色
*/
#Pikachu{
  background-color:#FEE433;
}
/*
*然后让我们先画一个鼻子
*/
.nose{
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 12px;
  border-color: black transparent transparent;
  border-radius: 11px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left:-10px ;
}
/*
*现在开始画眼睛
*/
.eye {
  position: absolute;
  width: 49px;
  height: 49px;
  border-radius: 50%;
  border: 5px solid rgb(24, 24, 24);
  background-color: black;
  top:40%;
}
.eye::before {
  content: '';
  width: 24px;
  height: 24px;
  background-color: white;
  display: block;
  border-radius: 50%;
}
/*
*将眼睛放到对应位置
*/
.eye.eye_right {
  right:50%;
  margin-right:50px;
}
.eye.eye_left {
  left:50%;
  margin-left:50px ;
}
/*
*现在让我们来画俩个红红的脸颊
*/
.cheek {
  position: absolute;
  width: 68px;
  height: 68px;
  background-color: #Fc0D1c;
  border-radius: 50%;
  border: 3px solid black;
  top: 54%;
}

.cheek_left {
  left: 50%;
  margin-left: 18%;
}

.cheek_right {
  right: 50%;
  margin-right: 18%;
}
/*
*接下来让我们开始画嘴唇
*/
.Lips {
  position: absolute;
  width: 83px;
  height: 25px;
  background-color: #FEE433;
  border: 2px solid black;
  border-top: none;
  top: 53%;
  z-index: 1;
}
/*
*将左边嘴唇放到对应位置
*/
.Lips-left {
  border-right: none;
  border-bottom-left-radius: 40px;
  right: 50%;
  transform: rotate(-20deg);
  margin-right: -2px;
}
/*
*将右边嘴唇放到对应位置
*/
.Lips-right {
  border-left: none;
  border-bottom-right-radius: 40px;
  left: 50%;
  transform: rotate(20deg);
  margin-left: 2px;
}
/*
*最后让我们来画皮卡丘的嘴巴
*/
.mouth-wrapper {
  transform: rotate(180deg);
  position: absolute;
  width: 110px;
  height: 120px;
  overflow: hidden;
  top: 54%;
  left: 50%;
  margin-left: -53px;
}
/*
*给嘴巴进行上色
*/
.mouth {
  height: 330px;
  width: 110px;
  border:2px solid black;
  background-color: #990513;
  border-radius: 100px/250px;
  position: absolute;
  overflow: hidden;    
}
/*
*最后一步给皮卡丘添加上舌头
*/
.mouth::after {
  content: '';
  position: absolute;
  top: -10px;
  width: 120px;
  height: 100px;
  background-color: #FC4A62;
  border-radius: 50%;
  right: -3px;
}
/*这样就完成了一只可爱的皮卡丘*/
`

  x(code);
  
})()