$(function(){

    let count = 0;
    let point = 0;
    const list = [
        {
            "title":"【質問1】どんな雰囲気のアイドルが好き？",
            "answer":[
                "真面目でしっかりとしたアイドル",
                "不思議系でおっとりとしたアイドル"
            ],
            "score":[
                1,
                2
            ]
        },
        {
            "title":"【質問2】どんな顔立ちのアイドルが好き？",
            "answer":[
                "大人な感じのキレイ系",
                "おさなさが残るかわいい系"
            ],
            "score":[
                10,
                20
            ]
        },
        {
            "title":"【質問3】好きな髪の長さは？",
            "answer":[
                "ロング",
                "セミロング",
                "ボブ"
            ],
            "score":[
                100,
                200,
                300
            ]
        },
        {
            "title":"【質問4】どんな性格のアイドルが好き？",
            "answer":[
                "外交的で活発",
                "内向的でインドア"
            ],
            "score":[
                1000,
                2000
            ]
        },
        {
            "title":"【質問5】アイドルに求める理想の身長は？",
            "answer":[
                "150cm以上~155cm未満",
                "155cm以上~160cm未満",
                "160cm以上~165cm未満",
                "165cm以上"
            ],
            "score":[
                10000,
                20000,
                30000,
                40000
            ]
        }
    ];

    function render(count){
        $("li").remove();
        $("h1").text(list[count]["title"]);
        list[count]["answer"].forEach(function(text){
            const li = `<li>${text}</li>`;
            $("ul").append(li);
        });
    }
    render(0);

    function point_text(point){
        switch( point ){
            case 41211:
                return '佐々木 久美';
                break
            case 21212:
                return '森本 茉莉';
                break
            case 31112:
                return '加藤 史帆';
                break
            case 31112:
                return '加藤 史帆';
                break
            case 21112:
                return '潮 紗理菜';
                break
            case 41222:
                return '佐々木 美玲';
                break
            case 32222:
                return '高本 彩花';
                break
            case 12222:
                return '東村 芽依';
                break
            case 31122:
                return '上村 ひなの';
                break
            case 21122:
                return '丹生 明里';
                break
            case 42122:
                return '濱岸 ひより';
                break
            case 12122:
                return '河田 陽菜';
                break
            case 31211:
                return '金村 美玖';
                break
            case 21211:
                return '影山 優佳';
                break
            case 32211:
                return '小坂 菜緒';
                break
            case 21111:
                return '宮田 愛萌';
                break
            case 22111:
                return '高瀬 愛奈';
                break
            case 41221:
                return '髙橋 未来虹';
                break
            case 21221:
                return '渡邉 美穂';
                break
            case 41321:
                return '富田 鈴花';
                break
            case 21321:
                return '松田 好花';
                break
            case 21121:
                return '齊藤 京子';
                break
            case 12121:
                return '山口 陽世';
                break
            default:
                return 'あなたは箱推しとなり得る素質があります！';
            };
    };
    

    $("body").on("click", "li", function(){
        var i = $(this).index();
        point += list[count]["score"][i];
        console.log(point);
        if( count < list.length -1){
            count ++;
            render(count);
        }else{
            $("span").text(point_text(point));
            $("ul, h1").hide();
            $(".result").fadeIn();
        };
    });
    

});