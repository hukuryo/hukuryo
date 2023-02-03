const type = document.getElementById('type');
const type2 = document.getElementById("type2");
const username = document.getElementById("username");
const url = 'https://api.github.com/repos/hukuryo/Book-Memory-Spring-Boot/contents/';
const url3 = "https://api.github.com/users/hukuryo";

/*フォルダ、ファイル一覧を表示*/
fetch(url)
        .then(response => response.json())
        .then(data => {
                let array = [];
                console.log(data);
                for(let i = 0; i < data.length; i++){
                        /*ファイルの数だけ要素作成*/
                        const newElement = document.createElement("p");
                        /*作成した要素にIDをつける*/
                        newElement.setAttribute("class", "nameLink")
                        /*APIからとってきたファイル名を取得し、作成したHTMLに挿入*/
                        const repo = data[i].name;
                        newElement.innerHTML = repo;
                        array.push(repo);
                        type.appendChild(newElement);
                        /*arrayに挿入した名前をURLに挿入*/
                        const url7 = `https://api.github.com/repos/hukuryo/Book-Memory-Spring-Boot/contents/${array[i]}`;
                        /*作成したクラス名.nameLinkの内容を取得*/
                        const nameListItem = document.querySelectorAll('.nameLink');
                        /*作成したURLを各リンクに挿入*/
                        nameListItem[i].href = url7;
                }
                /*作成した一覧のクラス名から内容を取得*/
                const autoLink = document.querySelectorAll('.nameLink');
                /*取得した内容野中のURLを変数に格納*/
                const newLink = autoLink[1].href;
                let ddd = "https://api.github.com/repos/hukuryo/Book-Memory-Spring-Boot/contents/src";
                /*変数の中に入れたＵＲＬをfetch*/
                fetch(ddd)
                        .then(response => response.json())
                        .then(data => {
                                let array2 = [];
                                for(let i = 0; i < data.length; i++){
                                        /*ファイルの数だけ要素作成*/
                                        const newElement = document.createElement("a");
                                        /*作成した要素にIDをつける*/
                                        newElement.setAttribute("class", "nameLink2")
                                        /*APIからとってきたファイル名を取得し、作成したHTMLに挿入*/
                                        const repo2 = data[i].name;
                                        newElement.innerHTML = repo2;
                                        array2.push(repo2);
                                        type.appendChild(newElement);
                                }
                        })
        });

        
/**/
/*ユーザー名の表示*/
fetch(url3)
.then(response => response.json())
.then(data2 => {
        usernameElement = document.createElement("h3");
        usernameElement.innerHTML = data2.login;
        username.appendChild(usernameElement);
});
/**/





fetch(fileList)
.then(response => {
        // レスポンスステータスのチェック。200以外でもresponseが返ればここへ来る。ネットワークエラー等の場合、then()にはこないでcatch()へ行く。
        if (response.status !== 200) {
                // 200以外ならばエラーメッセージを投げる
                throw `response.status = ${response.status}, response.statusText = ${response.statusText}`;
        }
        return response.json(); // jsonデータの取得結果をPromiseで返す。
        })
        .then(direData => {
        let direArray = [];
        for(let i = 0; i<direData.length; i++){
                const  fileElement = document.createElement("p");
                fileElement.setAttribute("class", 'fileName');
                type.appendChild(fileElement);
                const file = direData[i].name;
                fileElement.innerHTML = direData[i].name;
                direArray.push(file);
        }
})
.catch(e => { 
        let errorText = '現在ファイルが取得出来ません。担当メンターへご連絡お願いします。';
        let errorElement = document.createElement("div");
        errorElement.setAttribute("class", 'errorName');
        errorElement.innerHTML = errorText;
        errorContents.appendChild(errorElement);
});







