var player1;
function onYouTubeIframeAPIReady() {
    player1 = new YT.Player('player1', {
        videoId: '6fAh_PaIMMM',
        playerVars: {
            autoplay: true,
            loop: true,
            //loop:true일때는 반복할 목록을 다시한번 적어야한다
            playlist: '6fAh_PaIMMM', //반복재생할 유튜브영상 id를 다시적음
        },
        events: {
            //영상이 준비되면 함수가 실행됨
            'onReady': function (event) {
                event.target.mute() //음소거 target는 영상자체
            },
        }
    }); // YT.Player

    var player2;
        player2 = new YT.Player('player2', {//html의 id와 동일
            videoId: '1UZ012FTnbE',
            height: '650px',
            width: '800px',
            playerVars: {
                autoplay: true,
                loop: true,
                //loop:true일때는 반복할 목록을 다시한번 적어야한다
                playlist: '1UZ012FTnbE', //반복재생할 유튜브영상 id를 다시적음
            },
            events: {
                //영상이 준비되면 함수가 실행됨
                'onReady': function (event) {
                    event.target.mute() //음소거 target는 영상자체
                },
            }
        }); // YT.Player

} //player1 function


