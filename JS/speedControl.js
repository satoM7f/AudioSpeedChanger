//オーディオの再生速度を変更する
const SpeedChange = (RATE) => {
  var MyVideo_TAG = document.getElementsByTagName("audio");
  //console.log(MyVideo_TAG);
  for (let vid of MyVideo_TAG) {
    vid.playbackRate = RATE;
  }
};

//再生速度を反映させる
const setCurrentValue = (val) => {
  speedElm.innerText = Number(val).toFixed(1);
};

//イベント時に値をセットする
const rangeOnChange = (e) => {
  setCurrentValue(e.target.value);
  SpeedChange(e.target.value);
};

let speedSlider = document.getElementById("speedSlider");
let speedElm = document.getElementById("speed_range");

window.onload = () => {
  //変更に合わせてイベントを発火する
  speedSlider.addEventListener("input", rangeOnChange);

  //ページ読み込み時の値をセット
  setCurrentValue(speedSlider.value);
};
