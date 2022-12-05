document.getElementById("file").addEventListener("change", (ev) => {
  //連番のidを持つfigureタグを生成
  for (let i = 1; i < ev.target.files.length + 1; i++) {
    var figure = document.createElement("figure");
    //ファイル番号をidとして付与
    figure.id = `${i}`;
    document.getElementById("list").insertBefore(figure, null);
  }

  for (let i = 0; i < ev.target.files.length; i++) {
    let file = ev.target.files[i];
    let fileReader = new FileReader();
    
    fileReader.onload = (function (theFile) {
      return function (e) {
        //ファイルネームと対応するidの要素にデータを格納
        figure_temp = document.getElementById(
          `${theFile.name.substr(5).split(".")[0]}`
        );
        figure_temp.innerHTML = `
          <input type="radio" name="playlist" class="playlist" id="rad${
            theFile.name.substr(5).split(".")[0]
          }" onclick="playFunc(this.id);">
          <audio controls class="thumb" id="aud${
            theFile.name.substr(5).split(".")[0]
          }" src="${e.target.result}"></audio>
          <figcaption>${theFile.name}</figcaption>
          <br>
         `;
      };
    })(file);

    fileReader.readAsDataURL(file);
  }
});
