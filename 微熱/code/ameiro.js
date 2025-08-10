function a(){var result = window.prompt("パスワードを入力してください(3桁-英数字)");
    if( result == "232") {
        window.alert("-Success-");
        window.alert("警告\n");
        window.open("https://twitter.com/XOt960040?ref_src=twsrc%5Etfw");
    }else if(result == null){
    }else {
        window.alert("パスワードが違います");
        var result = confirm("ヒントが欲しいですか?");
        if( result ) {
            window.alert("ヒント:somunia-飴色の微熱の再生時間");
        }else {}
    }
}