//次のオーディオを再生
const playNext = (id) => {
    console.log("clickNext, id=" + id);
    nextId = id + 1;
    var audioElm = document.getElementById("aud" + nextId);
    var radioelm = document.getElementById("rad" + nextId);
    audioElm.play();
    radioelm.checked = true;
}

var allAudioElm = document.getElementsByTagName("audio");

//すべてのオーディオを一時停止させる
const pauseAllAudio = () => {
    for(var i = 0; i < allAudioElm.length; i++){
        allAudioElm[i].pause();
    }
}

//すべてのオーディオの再生位置を0にする
const resetAllAudio = () => {
    for(var i = 0; i < allAudioElm.length; i++){
        allAudioElm[i].currentTime = 0;
    }
};

//ラジオボタンが押されたら発動
//一連の動作
const playFunc = (radId) => {
    //console.log(radId);
    id = Number(radId.slice(3));
    var audId = "aud" + id;
    var audioElm = document.getElementById(audId);
    pauseAllAudio();
    audioElm.play();

    audioElm.onended = () => {
        playNext(id);
        //再起して次のオーディオを繰り返し再生
        playFunc("rad" + (id+1));
    }
};