'use strict'

{
  const selectPattern = document.querySelectorAll('.menu li a');
  const hitokomaFoundations = document.querySelectorAll('.hitokomaFoundation');

  selectPattern.forEach(clickedItem => {
    clickedItem.addEventListener('click', e => {
      e.preventDefault();

      // selectPattern.forEach(item => {
      //   item.classList.remove('active');
      // });
      // clickedItem.classList.add('active');

      hitokomaFoundations.forEach(content => {
        content.classList.remove('active');
      });
      document.getElementById(clickedItem.dataset.id).classList.add('active');
    });
  });


  (function(){

    //要素の取得
    let elements = document.getElementsByClassName("hitokomaFoundationChara-drag");

    //要素内のクリックされた位置を取得するグローバル（のような）変数
    var x;
    var y;

    //マウスが要素内で押されたとき、又はタッチされたとき発火
    for(var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("mousedown", mdown, false);
        elements[i].addEventListener("touchstart", mdown, false);
    }

    //マウスが押された際の関数
    function mdown(e) {

        //クラス名に .drag を追加
        this.classList.add("drag");

        //タッチデイベントとマウスのイベントの差異を吸収
        if(e.type === "mousedown") {
            var event = e;
        } else {
            var event = e.changedTouches[0];
        }

        //要素内の相対座標を取得
        x = event.pageX - this.offsetLeft;
        y = event.pageY - this.offsetTop;

        //ムーブイベントにコールバック
        document.body.addEventListener("mousemove", mmove, false);
        document.body.addEventListener("touchmove", mmove, false);
    }

    //マウスカーソルが動いたときに発火
    function mmove(e) {

        //ドラッグしている要素を取得
        var drag = document.getElementsByClassName("drag")[0];

        //同様にマウスとタッチの差異を吸収
        if(e.type === "mousemove") {
            var event = e;
        } else {
            var event = e.changedTouches[0];
        }

        //フリックしたときに画面を動かさないようにデフォルト動作を抑制
        e.preventDefault();

        //マウスが動いた場所に要素を動かす
        drag.style.top = event.pageY - y + "px";
        drag.style.left = event.pageX - x + "px";

        //マウスボタンが離されたとき、またはカーソルが外れたとき発火
        drag.addEventListener("mouseup", mup, false);
        document.body.addEventListener("mouseleave", mup, false);
        drag.addEventListener("touchend", mup, false);
        document.body.addEventListener("touchleave", mup, false);

    }

    //マウスボタンが上がったら発火
    function mup(e) {
        var drag = document.getElementsByClassName("drag")[0];

        //ムーブベントハンドラの消去
        document.body.removeEventListener("mousemove", mmove, false);
        drag.removeEventListener("mouseup", mup, false);
        document.body.removeEventListener("touchmove", mmove, false);
        drag.removeEventListener("touchend", mup, false);

        //クラス名 .drag も消す
        drag.classList.remove("drag");
    }

  })()

  var plainCharaLarge = document.getElementById('plainCharaLarge');
  var plainCharaSmalle = document.getElementById('plainCharaSmalle');
  var plainCharaDefault = document.getElementById('plainCharaDefault');

  var plainCharcterImage = document.getElementById('plainCharcterImage') 
  var plainCharcterWidth = plainCharcterImage.width;
  var plainCharcterHeight = plainCharcterImage.height;


  function plainCharcterresize() {
 
    plainCharcterHeight = plainCharcterHeight * (plainCharcterImage.width / plainCharcterWidth);
  }
  plainCharaDefault.addEventListener('click', () =>{
    plainCharcterImage.width = 120;
 
    plainCharcterresize();
  });

  plainCharaLarge.addEventListener('click', () =>{

    plainCharcterImage.width += 50;
    console.log(plainCharcterWidth );
    plainCharcterresize();
  });
  plainCharaSmalle.addEventListener('click', () =>{
    plainCharcterImage.width -= 50;
    plainCharcterresize();
  });

  var patternOnecharaLarge = document.getElementById('patternOnecharaLarge');
  var patternOnecharasmalle = document.getElementById('patternOnecharasmalle');
  var patternOnecharaDefault = document.getElementById('patternOnecharaDefault');

  var patternOneCharcterImg = document.getElementById('patternOneCharcterImage') 
  var patternOneCharcterWidth = patternOneCharcterImg.width;
  var patternOneCharcterHeight = patternOneCharcterImg.height;


  function patternOneCharacterresize() {
 
    patternOneCharcterHeight = patternOneCharcterHeight * (patternOneCharcterImg.width / patternOneCharcterWidth);
  }
  patternOnecharaDefault.addEventListener('click', () =>{
    patternOneCharcterImg.width = 329;
 
    patternOneCharacterresize();
  });

  patternOnecharaLarge.addEventListener('click', () =>{

    patternOneCharcterImg.width += 50;
    console.log(patternOneCharcterWidth );
    patternOneCharacterresize();
  });
  patternOnecharasmalle.addEventListener('click', () =>{
    patternOneCharcterImg.width -= 50;
    patternOneCharacterresize();
  });


  var patternTwoCharaLarge = document.getElementById('patternTwoCharaLarge');
  var patternTwoCharasmalle = document.getElementById('patternTwoCharasmalle');
  var patternTwoCharaDefault = document.getElementById('patternTwoCharaDefault');

  var patternTwoCharcterImg = document.getElementById('patternTwoCharcterImage') 
  var patternTwoCharcterWidth = patternTwoCharcterImg.width;
  var patternTwoCharcterHeight = patternTwoCharcterImg.height;


  function patternTwoCharacterresize() {
 
    patternTwoCharcterHeight = patternTwoCharcterHeight * (patternTwoCharcterImg.width / patternTwoCharcterWidth);
  }
  patternTwoCharaDefault.addEventListener('click', () =>{
    patternTwoCharcterImg.width = 329;
 
    patternTwoCharacterresize();
  });

  patternTwoCharaLarge.addEventListener('click', () =>{

    patternTwoCharcterImg.width += 50;
    console.log(patternTwoCharcterWidth );
    patternTwoCharacterresize();
  });
  patternTwoCharasmalle.addEventListener('click', () =>{
    patternTwoCharcterImg.width -= 50;
    patternTwoCharacterresize();
  });


  
  
  var plainbubbleLarge = document.getElementById('plainbubbleLarge');
  var plainbubblesmalle = document.getElementById('plainbubblesmalle');
  var plainbubbleDefault = document.getElementById('plainbubbleDefault');
  var plainBubbleImg = document.getElementById('plain-bubbleImg') 
  var plainWidth = plainBubbleImg.width;
  var plainHeight = plainBubbleImg.height;
  plainWidth = 300 ;

  function plainResize() {
    console.log(plainWidth)
    plainHeight = plainHeight * (plainBubbleImg.width / plainWidth);
  }

  plainbubbleDefault.addEventListener('click', () =>{
    plainBubbleImg.style.width = "300px";
    plainResize();
  });
  plainbubbleLarge.addEventListener('click', () =>{

    plainWidth += 20;
    plainBubbleImg.style.width = plainWidth + "px";
    plainResize();
  });
  plainbubblesmalle.addEventListener('click', () =>{
    plainWidth -= 20;
    plainBubbleImg.style.width = plainWidth + "px";
    plainResize();
  });
  
  var patternOnebubbleLarge = document.getElementById('patternOnebubbleLarge');
  var patternOnebubblesmalle = document.getElementById('patternOnebubblesmalle');
  var patternOnebubbleDefault = document.getElementById('patternOnebubbleDefault');
  var patternOneBubbleImg = document.getElementById('patternOne-bubbleImg') 
  var patternOneWidth = patternOneBubbleImg.width;
  var patternOneHeight = patternOneBubbleImg.height;
  patternOneWidth = 300 ;
  
  function patternOneResize() {
    patternOneHeight = patternOneHeight * (patternOneBubbleImg.width / patternOneWidth);
  }
  patternOnebubbleDefault.addEventListener('click', () =>{
    patternOneBubbleImg.style.width = "300px";
    patternOneResize();
  });
  patternOnebubbleLarge.addEventListener('click', () =>{
    patternOneWidth += 20;
    patternOneBubbleImg.style.width = patternOneWidth + "px";
    patternOneResize();
  });
  patternOnebubblesmalle.addEventListener('click', () =>{
    patternOneWidth -= 20;
    patternOneBubbleImg.style.width = patternOneWidth + "px";
    patternOneResize();
  });

  var patternTwobubbleLarge = document.getElementById('patternTwobubbleLarge');
  var patternTwobubblesmalle = document.getElementById('patternTwobubblesmalle');
  var patternTwobubbleDefault = document.getElementById('patternTwobubbleDefault');
  var patternTwoBubbleImg = document.getElementById('patternTwo-bubbleImg') 
  var patternTwoWidth = patternTwoBubbleImg.width;
  var patternTwoHeight = patternTwoBubbleImg.height;
  patternTwoWidth = 300 ;

  function patternTwoResize() {
    patternTwoHeight = patternTwoHeight * (patternTwoBubbleImg.width / patternTwoWidth);
  }

  patternTwobubbleDefault.addEventListener('click', () =>{
    patternTwoBubbleImg.style.width = "300px";
    patternTwoResize();
  });
  patternTwobubbleLarge.addEventListener('click', () =>{
    patternTwoWidth += 20;
    patternTwoBubbleImg.style.width = patternTwoWidth + "px";
    patternTwoResize();
  });
  patternTwobubblesmalle.addEventListener('click', () =>{
    patternTwoWidth -= 20;
    patternTwoBubbleImg.style.width = patternTwoWidth + "px";
    patternTwoResize();
  });
  
  


  
  document.addEventListener('DOMContentLoaded', function(){
    let plainTextElement = document.getElementsByClassName('plainText-primary')[0];
    let patternOneTextElement = document.getElementsByClassName('patternOneText-primary')[0];
    let patternTwoTextElement = document.getElementsByClassName('patternTwoText-primary')[0];
  
    const plainPrimaryText = "プレーンテキスト";
    const patternOnePrimaryText = "１キャラテキスト";
    const patternTwoPrimaryText = "２キャラテキスト";

    plainTextElement.textContent = plainPrimaryText;
    patternOneTextElement.textContent = patternOnePrimaryText;
    patternTwoTextElement.textContent = patternTwoPrimaryText;
  });
  window.onload = function () {
 
    // textarea要素を取得
    var plainGetText = document.getElementById("plain-textarea");
    var patternOneGetText = document.getElementById("patternOne-textarea");
    var patternTwoGetText = document.getElementById("patternTwo-textarea");
    // 表示用
    var plainTextElement = document.getElementsByClassName('plainText-primary')[0];
    var patternOneTextElement = document.getElementsByClassName('patternOneText-primary')[0];
    var patternTwoTextElement = document.getElementsByClassName('patternTwoText-primary')[0];

   
    

   
    // 入力時に発生
    plainGetText.addEventListener('input', (event) => {
      //　入力された値を表示
      plainTextElement.textContent = plainGetText.value;
    });
    patternOneGetText.addEventListener('input', (event) => {
      patternOneTextElement.textContent = patternOneGetText.value;
    });
    patternTwoGetText.addEventListener('input', (event) => {
      patternTwoTextElement.textContent = patternTwoGetText.value;
    });
    // フォーカスが外れた時に発生
    // patternOneGetText.addEventListener('change', (event) => {
    //   // クリア
    //   patternOneGetText.value = '';
    //   patternOneTextElement.textContent = '';
    // });
 
  }
  let plainfontSmall = document.getElementById('plainfontSmall');
  let plainfontLarge = document.getElementById('plainfontLarge');

  let patternOnefontSmall = document.getElementById('patternOnefontSmall');
  let patternOnefontLarge = document.getElementById('patternOnefontLarge');

  let patternTwofontSmall = document.getElementById('patternTwofontSmall');
  let patternTwofontLarge = document.getElementById('patternTwofontLarge');
  
  var hitokomaFontSize = 100;
  
  plainfontSmall.addEventListener('click', () => {
    hitokomaFontSize /= 1.2; document.getElementById('plainFontResisable').style.fontSize = hitokomaFontSize + '%';
  });
  plainfontLarge.addEventListener('click', () => {
    hitokomaFontSize *= 1.2; document.getElementById('plainFontResisable').style.fontSize = hitokomaFontSize + '%';
  });


  patternOnefontSmall.addEventListener('click', () => {
    hitokomaFontSize /= 1.2; document.getElementById('patternOnefontResizable').style.fontSize = hitokomaFontSize + '%';
  });
  patternOnefontLarge.addEventListener('click', () => {
    hitokomaFontSize *= 1.2; document.getElementById('patternOnefontResizable').style.fontSize = hitokomaFontSize + '%';
  });


  patternTwofontSmall.addEventListener('click', () => {
    hitokomaFontSize /= 1.2; document.getElementById('patternTwofontResizable').style.fontSize = hitokomaFontSize + '%';
  });
  patternTwofontLarge.addEventListener('click', () => {
    hitokomaFontSize *= 1.2; document.getElementById('patternTwofontResizable').style.fontSize = hitokomaFontSize + '%';
  });
}