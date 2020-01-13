import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="grid-wrapper">
        <div className="grid-container">
          <h2>福岡景點</h2>
          <Grid
            container
            justify="space-evenly"
            alignItems="center"
            spacing={3}
            alignContent="stretch">
            <Grid item xs={12} sm={6} md={4}>
              <Paper className="paper">
                <div className="grid-content">
                  <div className="grid-content--image">
                    <div className="grid-content--image__mask">
                      <img src="https://3.bp.blogspot.com/-yq8DMhR89SI/W2mSBcAT9AI/AAAAAAACW24/alb4IOJXtbMz_5ThczVQ2VS13nbZ4xYQQCKgBGAs/s400/IMG_7776.JPG" />
                    </div>

                    <div className="edge">
                      <svg>
                        <rect
                          x="7"
                          y="0"
                          width="10"
                          height="2"
                          fill="#000000"
                          transform="rotate(45)"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="grid-content--detail">
                    <p className="grid-content--title">
                      全国地酒日本選抜大名店
                    </p>
                    <p className="grid-content--address">
                      地址：
                      <a href="https://goo.gl/maps/WykCf4vUoYDtEUu4A">
                        <span>
                          福岡縣福岡市中央區大名 2-10-1 シャンボール大名
                        </span>
                      </a>
                    </p>
                    <p className="grid-content--ref">
                      地址：
                      <a href="https://lifestyle.fanpiece.com/foodie-smashingpumkins/%E7%A6%8F%E5%B2%A1-%E7%A8%8D%E6%81%AF%E7%AB%8B%E6%AD%A3%E7%AB%99%E5%A5%BD%E9%A3%B2%E6%B8%85%E9%85%92%EF%BC%A0%E5%85%A8%E5%9B%BD%E5%9C%B0%E9%85%92-%E6%97%A5%E6%9C%AC%E9%81%B8%E6%8A%9C-%E5%A4%A7%E5%90%8D%E5%BA%97-c1326914.html">
                        <span>參考網站</span>
                      </a>
                    </p>
                    <p>
                      清酒立飲酒場，¥1,000左右一杯（500ml)，同場還有一些小食可供選購
                    </p>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper className="paper">
                <div className="grid-content">
                  <div className="grid-content--image">
                    <div className="grid-content--image__mask">
                      <img src="https://fastly.4sqi.net/img/general/width960/28781914_wT-HYYa1SHAX9oMiMeiR7NCa2PZlv4TGeF6anwJuIho.jpg" />
                    </div>
                    <div className="edge">
                      <svg>
                        <rect
                          x="7"
                          y="0"
                          width="10"
                          height="2"
                          fill="#000000"
                          transform="rotate(45)"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="grid-content--detail">
                    <p className="grid-content--title">
                      【糸島】櫻井二見浦夫婦岩
                      <br />
                      <span className="small">（桜井二見ヶ浦夫婦岩）</span>
                    </p>
                    <p className="text--small text--green">
                      <u>前往糸島的交通有點麻煩，建議是自駕的方式</u>
                    </p>
                    <p className="grid-content--address">
                      地址：
                      <a href="https://goo.gl/maps/xgvY8xiVCQjUs63G7">
                        <span>福岡縣糸島市志摩櫻井二見ケ浦</span>
                      </a>
                    </p>
                    <p className="grid-content--ref">
                      <a href="https://serendidi.me/2018/11/11/fukouka_2/">
                        <span>參考網站 1</span>
                      </a>
                      <br />
                      <a href="http://hokiyu.tw/blog/post/227364530-futamigaura">
                        <span>參考網站 2</span>
                      </a>
                    </p>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper className="paper">
                <div className="grid-content">
                  <div className="grid-content--image">
                    <div className="grid-content--image__mask">
                      <img src="http://yanyanw.tw/wp-content/uploads/2-9.jpg" />
                    </div>
                    <div className="edge">
                      <svg>
                        <rect
                          x="7"
                          y="0"
                          width="10"
                          height="2"
                          fill="#000000"
                          transform="rotate(45)"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="grid-content--detail">
                    <p className="grid-content--title">
                      【糸島】櫻井神社・櫻井大神宮
                    </p>

                    <p className="grid-content--address">
                      地址：
                      <a href="https://goo.gl/maps/Ns9UhcMChRMCtp1D6">
                        <span>福岡県糸島市志摩桜井4227</span>
                      </a>
                    </p>
                    <p className="grid-content--ref">
                      <a href="http://yanyanw.tw/2018/09/30/yanfukuoka-itoshima-sakuraishrine/">
                        <span>參考網站</span>
                      </a>
                    </p>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper className="paper">
                <div className="grid-content">
                  <div className="grid-content--image">
                    <div className="grid-content--image__mask">
                      <img src="https://pic.pimg.tw/peterorz/1548335027-58324073_n.jpg" />
                    </div>
                    <div className="edge">
                      <svg>
                        <rect
                          x="7"
                          y="0"
                          width="10"
                          height="2"
                          fill="#000000"
                          transform="rotate(45)"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="grid-content--detail">
                    <p className="grid-content--title">【糸島】芥屋の大門</p>

                    <p className="grid-content--address">
                      地址：
                      <a href="https://goo.gl/maps/iTouMVDr82aTUphk9">
                        <span>福岡縣絲島市志摩芥屋</span>
                      </a>
                    </p>
                    <p className="grid-content--ref">
                      <a href="https://journalist01.pixnet.net/blog/post/329083065">
                        <span>參考網站</span>
                      </a>
                    </p>
                    <p>
                      日本三大玄武洞中最大的洞穴之一，搭船在海上觀賞，若海面平靜的話可以入內10m觀賞。
                    </p>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper className="paper">
                <div className="grid-content">
                  <div className="grid-content--image">
                    <div className="grid-content--image__mask">
                      <img src="https://yanyanw.tw/wp-content/uploads/3-33.jpg" />
                    </div>
                    <div className="edge">
                      <svg>
                        <rect
                          x="7"
                          y="0"
                          width="10"
                          height="2"
                          fill="#000000"
                          transform="rotate(45)"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="grid-content--detail">
                    <p className="grid-content--title">【糸島】手作花塩布丁</p>

                    <p className="grid-content--address">
                      地址：
                      <a href="https://goo.gl/maps/jys6oj95GbhgYJBY8">
                        <span>福岡縣糸島市志摩芥屋3757</span>
                      </a>
                    </p>
                    <p className="grid-content--ref">
                      <a href="https://yanyanw.tw/2019/03/03/yanfukuoka-food-itoshima-mataichi/">
                        <span>參考網站</span>
                      </a>
                    </p>
                    <p>
                      「工房とったん」在一處偏僻的海角，開了一間叫「またいちの塩」的鹽味布丁店。
                      布丁以及布丁上使用的鹽，都是他們自己做的。
                      <br />
                      ※布丁價格：
                      <br />
                      鹽味布丁￥400、鹽味焦糖布丁￥450
                    </p>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper className="paper">
                <div className="grid-content">
                  <div className="grid-content--image">
                    <div className="grid-content--image__mask">
                      <img src="http://www.japan-tour.jp/sites/default/files/styles/max_640_480/public/8567_0.jpg?itok=88ICKWuC&slideshow=true&slideshowAuto=true&slideshowSpeed=4000&speed=350&transition=elastic" />
                    </div>
                    <div className="edge">
                      <svg>
                        <rect
                          x="7"
                          y="0"
                          width="10"
                          height="2"
                          fill="#000000"
                          transform="rotate(45)"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="grid-content--detail">
                    <p className="grid-content--title">
                      【糸島】白絲瀑布
                      <br />
                      <span className="small"> (白糸の滝)</span>
                    </p>

                    <p className="grid-content--address">
                      地址：
                      <a href="https://goo.gl/maps/EyxgnbW2cpEqQYvd7">
                        <span>福岡縣絲島市白絲460-1</span>
                      </a>
                    </p>
                    <p className="grid-content--ref">
                      <a href="https://chiatrue.pixnet.net/blog/post/350576719">
                        <span>參考網站</span>
                      </a>
                    </p>
                    <p>
                      白絲瀑布四季皆有美景：春天賞櫻、夏天賞繡球花、秋天賞楓、冬天也偶有雪景。
                      <br />
                      美景之外，白絲瀑布春天至秋天，還有流水麵與釣魚等活動可做，一旁的販賣部也有販賣許多餐點，美食配美景絕對是最佳享受。
                    </p>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper className="paper">
                <div className="grid-content">
                  <div className="grid-content--image">
                    <div className="grid-content--image__mask">
                      <img src="https://pic.pimg.tw/peterorz/1570264492-3668164757_n.jpg" />
                    </div>
                    <div className="edge">
                      <svg>
                        <rect
                          x="7"
                          y="0"
                          width="10"
                          height="2"
                          fill="#000000"
                          transform="rotate(45)"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="grid-content--detail">
                    <p className="grid-content--title">【糸島】箱島神社</p>

                    <p className="grid-content--address">
                      地址：
                      <a href="https://goo.gl/maps/EBGTNw35nbrwMsXU8">
                        <span>〒819-1614 福岡県糸島市二丈浜窪86</span>
                      </a>
                    </p>
                    <p className="grid-content--ref">
                      <a href="https://pocketjapan.tw/5742/">
                        <span>參考網站</span>
                      </a>
                    </p>
                    <p>
                      箱島在大正、昭和年代時，整個島其實是一座日式餐廳，但昭和18年一個颱風把餐廳摧毀之後，一直到現在島上就只留下了一個箱島神社。
                      <br />
                      現在唯一留下的餐廳遺跡，就是入口的這座石橋了。
                    </p>
                  </div>
                </div>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Paper className="paper">
                <div className="grid-content">
                  <div className="grid-content--image">
                    <div className="grid-content--image__mask">
                      <img src="https://d2e7nuz2r6mjca.cloudfront.net/2017/5/1494960757_nc-1280w.jpg" />
                    </div>
                    <div className="edge">
                      <svg>
                        <rect
                          x="7"
                          y="0"
                          width="10"
                          height="2"
                          fill="#000000"
                          transform="rotate(45)"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="grid-content--detail">
                    <p className="grid-content--title">【糸島】椰子樹之韆鞦</p>

                    <p className="grid-content--address">
                      地址：
                      <a href="https://goo.gl/maps/Bno7XciLcohn2hmv9">
                        <span>
                          福岡市西區79-06 尾田819-0203
                          (北崎地區海釣り公園附近的沙灘)
                        </span>
                      </a>
                    </p>
                    <p className="grid-content--ref">
                      <a href="https://travel.ulifestyle.com.hk/spot/detail/41933/%E7%B3%B8%E5%B3%B6-%E6%A4%B0%E5%AD%90%E6%A8%B9%E4%B9%8B%E9%9F%86%E9%9E%A6">
                        <span>參考網站</span>
                      </a>
                    </p>
                    <p>
                      椰子樹鞦韆位於一個燒烤店Harbour
                      House的海灘，夏天熱門時段停車需要付費，春、秋、冬的時間停車場則無人管理，可短暫將車子停在停車場內，但不要停留太久喔。
                    </p>
                  </div>
                </div>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Paper className="paper">
                <div className="grid-content">
                  <div className="grid-content--image">
                    <div className="grid-content--image__mask">
                      <img src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/erta7plwx77jy8pdysci/.jpg" />
                    </div>
                    <div className="edge">
                      <svg>
                        <rect
                          x="7"
                          y="0"
                          width="10"
                          height="2"
                          fill="#000000"
                          transform="rotate(45)"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="grid-content--detail">
                    <p className="grid-content--title">河內藤園 紫藤花海</p>

                    <p className="grid-content--address">
                      地址：
                      <a href="https://goo.gl/maps/HwsCAiTQzzTU5XUk6">
                        <span>〒805-0045福岡県北九州市八幡東区河内2-2-48</span>
                      </a>
                    </p>
                    <p className="grid-content--ref">
                      <a href="https://www.travelclassroom.net/2019/03/kawachi-wisteria-garden.html">
                        <span>參考網站</span>
                      </a>
                    </p>
                    <p>
                      河內藤園紫藤的開花時間一般在4月中開始，盛開期通常在4月尾至5月初的一個星期，每年的時間未必相同，今年由於天氣較暖，所以2019年的盛開期同樣會在4月尾。
                    </p>
                    <p>
                      交通方面，這裡沒有交通工具直接前往，建議大家自駕，倘若不是自駕，可以從JR「八幡站」乘搭的士前往，車程約19分鐘。從福岡出發至JR「八幡站」，可以從「博多站」乘搭JR鹿兒島本線至「八幡站」，車程約1小時3分鐘，再轉乘的士前往。
                    </p>
                    <p>花期：4月中旬～5月上旬</p>
                    <p>入場費：500円～1,500円(依開花狀況而變動)</p>
                  </div>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>

        <div className="grid-container">
          <h2>長崎景點</h2>
          <Grid container spacing={2} alignContent="stretch">
            <Grid item xs={12} sm={6} md={4}>
              <Paper className="paper">
                <div className="grid-content">
                  <div className="grid-content--image">
                    <div className="grid-content--image__mask">
                      <img src="https://3.bp.blogspot.com/-swuNGz9PTno/XKo31X5ORzI/AAAAAAABEL0/GoLO0zqpAKUAzhMjhYXr_zh9r4k9pDvRACEwYBhgL/s640/2019-01-29%2B09.44.52.jpg" />
                    </div>
                    <div className="edge">
                      <svg>
                        <rect
                          x="7"
                          y="0"
                          width="10"
                          height="2"
                          fill="#000000"
                          transform="rotate(45)"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="grid-content--detail">
                    <p className="grid-content--title">軍艦島</p>
                    <p className="grid-content--address">
                      地址：
                      <a href="https://goo.gl/maps/pUToHHaJV2hmuQ8w5">
                        <span>日本長崎半島以西約4.5公里</span>
                      </a>
                    </p>
                    <p className="grid-content--ref">
                      交通：
                      <span>於JR長崎站下車後步行約10分鐘到長崎港乘船</span>
                    </p>
                    <p className="grid-content--ref">
                      <a href="http://www.gunkan-jima.net/tc/">
                        <span>網上預約</span>
                      </a>
                    </p>
                    <p className="grid-content--ref">
                      <a href="https://blog.goflyla.com/%E4%B9%9D%E5%B7%9E%E9%95%B7%E5%B4%8E%E8%87%AA%E7%94%B1%E8%A1%8C-%E7%AB%AF%E5%B3%B6%E8%BB%8D%E8%89%A6%E5%B3%B6%E7%99%BB%E5%B3%B6%E4%B9%8B%E6%97%85-%E7%B6%B2%E4%B8%8A%E9%A0%90%E7%B4%84%E6%95%99%E5%AD%B8/">
                        <span>參考網站</span>
                      </a>
                    </p>
                    <p>
                      海岸線長1200公尺，過去曾被日本當局封鎖超過35年的軍艦島，直至1974年島上礦場全數關閉，居民才得以撤離，其後軍艦島更被列入世界遺產名錄，並開放給遊客參觀，不過大家要留意有些瀕臨崩塌的建築物是禁止任何人進入的！
                    </p>
                    <p>
                      每日通常會有兩團出發，分別是上午9時至11時及下午1時至3時。
                    </p>
                    <p>
                      不要以為報名完畢事情就完了，還需要於出發前留意天氣及電郵。如果當天天氣惡劣情況，例如風速太急、浪潮太高或視野能見度太低等都有機會取消行程或改為環島一週遊而未能登島。根據過往紀錄，每年平均大約只有100天能夠成行。
                    </p>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper className="paper">
                <div className="grid-content">
                  <div className="grid-content--image">
                    <div className="grid-content--image__mask">
                      <img src="https://tw.bring-you.info/imgs/2018/04/nagasaki.jpg" />
                    </div>
                    <div className="edge">
                      <svg>
                        <rect
                          x="7"
                          y="0"
                          width="10"
                          height="2"
                          fill="#000000"
                          transform="rotate(45)"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="grid-content--detail">
                    <p className="grid-content--title">
                      Amu Plaza長崎購物中心
                      <br />
                      <span className="small">（アミュプラザ長崎）</span>
                    </p>

                    <p className="grid-content--address">
                      地址：
                      <a href="https://goo.gl/maps/ySbn57anAH52Y3ib6">
                        <span>〒850-0058 長崎県長崎市尾上町１−1</span>
                      </a>
                    </p>
                    <p className="grid-content--ref">
                      <a href="https://drugs.pixnet.net/blog/post/45748663">
                        <span>參考網站</span>
                      </a>
                    </p>
                    <p>
                      進出長崎的門戶「JR長崎站」有一個與之相通的購物中心「Amu
                      Plaza長崎（アミュプラザ長崎）」，若是來長崎玩，白天逛完景點，推薦晚上就來這AMU
                      Plaza購物中心逛逛，各種長崎伴手禮、長崎海綿蛋糕老字號店鋪「福砂屋」、「松翁軒」、「文明堂」在這裡也都有設櫃。
                    </p>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper className="paper">
                <div className="grid-content">
                  <div className="grid-content--image">
                    <div className="grid-content--image__mask">
                      <img src="https://tw.bring-you.info/imgs/2018/04/nagasaki-67.jpg" />
                    </div>
                    <div className="edge">
                      <svg>
                        <rect
                          x="7"
                          y="0"
                          width="10"
                          height="2"
                          fill="#000000"
                          transform="rotate(45)"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="grid-content--detail">
                    <p className="grid-content--title">
                      【松山町站】長崎原爆資料館
                    </p>
                    <p className="grid-content--address">
                      地址：
                      <a href="https://goo.gl/maps/aAXt241zV55SyU816">
                        <span>長崎県長崎市平野町７−８</span>
                      </a>
                    </p>
                    <p className="grid-content--ref">
                      開放時間：
                      <span>8：30 ～ 17：30</span>
                    </p>
                    <p className="grid-content--ref">
                      門票：
                      <span>大人日幣￥200</span>
                    </p>
                    <p className="grid-content--ref">
                      <a href="https://tw.bring-you.info/nagasaki-atomic-bomb-museum">
                        <span>參考網站</span>
                      </a>
                    </p>
                    <p>
                      長崎原爆景點主要有原爆資料館、原爆中心地紀念碑、平和公園等景點，都分佈在長崎路面電車「松山町站」與「濱口町站」周遭，從哪邊開始逛都可以，飄兒這次是從濱口町下車，從原爆資料館一路逛去平和公園，聽說這樣會有上坡比較累，但實際走起來也還好，且都有手扶梯可以搭，就看大家自己選擇。
                    </p>
                    <p>
                      路面電車「濱口町站」下車，步行5分鐘 → 原爆資料館 →
                      下階梯過橋到「原爆中心地紀念碑」 → 搭手扶梯上「平和公園」→
                      步行約3分鐘到路面電車「松山町站」
                    </p>
                  </div>
                </div>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Paper className="paper">
                <div className="grid-content">
                  <div className="grid-content--image">
                    <div className="grid-content--image__mask">
                      <img src="https://tw.bring-you.info/imgs/2018/01/Kyushu-feature-68.jpg" />
                    </div>
                    <div className="edge">
                      <svg>
                        <rect
                          x="7"
                          y="0"
                          width="10"
                          height="2"
                          fill="#000000"
                          transform="rotate(45)"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="grid-content--detail">
                    <p className="grid-content--title">【松山町站】原爆公園</p>
                    <p className="grid-content--ref">
                      <a href="https://tw.bring-you.info/nagasaki-atomic-bomb-museum">
                        <span>參考網站</span>
                      </a>
                    </p>
                    <p>
                      而原爆資料館旁便是「原爆公園」，這裡便是長崎原爆中心地，如今被改成公園，除了可以看到被爆當時的地層，浦上天主堂的遺跡也被遷移至此。
                    </p>
                  </div>
                </div>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Paper className="paper">
                <div className="grid-content">
                  <div className="grid-content--image">
                    <div className="grid-content--image__mask">
                      <img src="https://a1.bbkz.net/forum/attachment.php?attachmentid=2270331&thumb=1&d=1516498992" />
                    </div>
                    <div className="edge">
                      <svg>
                        <rect
                          x="7"
                          y="0"
                          width="10"
                          height="2"
                          fill="#000000"
                          transform="rotate(45)"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="grid-content--detail">
                    <p className="grid-content--title">【松山町站】平和公園</p>
                    <p className="grid-content--ref">
                      <a href="https://tw.bring-you.info/nagasaki-atomic-bomb-museum">
                        <span>參考網站</span>
                      </a>
                    </p>
                    <p>
                      從原爆公園一路散步約莫10分鐘不到，便到了遭到原子彈攻擊後，為了祈求世界和平所建的公園，這裡有一尊長崎縣出身北村西望創作的「和平祈念像」，指天的右手象徵著「原子彈的威脅」，水平伸展的左手象徵「和平」，輕閉的雙眼是「為原爆犧牲者祈福」。
                    </p>
                  </div>
                </div>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Paper className="paper">
                <div className="grid-content">
                  <div className="grid-content--image">
                    <div className="grid-content--image__mask">
                      <img src="https://tw.bring-you.info/imgs/2017/12/nagasaki-chaidelica-1.jpg" />
                    </div>
                    <div className="edge">
                      <svg>
                        <rect
                          x="7"
                          y="0"
                          width="10"
                          height="2"
                          fill="#000000"
                          transform="rotate(45)"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="grid-content--detail">
                    <p className="grid-content--title">【築町站】新地中華街</p>
                    <p className="grid-content--address">
                      地址：
                      <a href="https://goo.gl/maps/mKwEW2XasapynZV46">
                        <span>長崎県長崎市新地町10-13</span>
                      </a>
                    </p>
                    <p className="grid-content--ref">
                      開放時間：
                      <span>10:00 ～ 21：00</span>
                    </p>

                    <p className="grid-content--ref">
                      <a href="https://handler.travel/japan-kyushu/%E9%95%B7%E5%B4%8E%E4%B8%80%E6%97%A5%E9%81%8A-%E9%95%B7%E5%B4%8E%E9%9B%BB%E8%BB%8A-%E9%95%B7%E5%B4%8E%E6%99%AF%E9%BB%9E-%E9%95%B7%E5%B4%8E%E7%BE%8E%E9%A3%9F/#C4">
                        <span>參考網站</span>
                      </a>
                    </p>
                    <p>
                      與橫浜中華街、神戸南京町並稱為「日本三大中華街」的長崎新地中華街，以福建通前的十字路口為中心，東南西北四個方位都有入口處，並矗立著醒目的朱紅色中式牌樓，整條唐人街全長250米，共有40家店鋪，包括中華料理店、中國雜貨、中式糕點等
                    </p>
                  </div>
                </div>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Paper className="paper">
                <div className="grid-content">
                  <div className="grid-content--image">
                    <div className="grid-content--image__mask">
                      <img src="https://tw.bring-you.info/imgs/2017/12/Kyushu-feature-33.jpg" />
                    </div>
                    <div className="edge">
                      <svg>
                        <rect
                          x="7"
                          y="0"
                          width="10"
                          height="2"
                          fill="#000000"
                          transform="rotate(45)"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="grid-content--detail">
                    <p className="grid-content--title">
                      【大浦天主堂下站】大浦天主堂
                    </p>
                    <p className="grid-content--address">
                      地址：
                      <a href="https://goo.gl/maps/63S5AF73h97hSuGm8">
                        <span>〒850-0931 長崎県長崎市南山手町５−3</span>
                      </a>
                    </p>
                    <p className="grid-content--ref">
                      <a href="https://tw.bring-you.info/omura-tenshudo">
                        <span>參考網站</span>
                      </a>
                    </p>
                    <p>
                      這裡可以沿著大浦天主堂商店街一路上坡逛上大浦天主教堂，沿途有四海樓
                      強棒麵、岩崎本舗
                      角煮饅頭等長崎必吃美食，還有和泉屋、文明堂等長崎蛋糕名店。
                    </p>
                  </div>
                </div>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Paper className="paper">
                <div className="grid-content">
                  <div className="grid-content--image">
                    <div className="grid-content--image__mask">
                      <img src="https://tw.bring-you.info/imgs/2017/09/Kyushu-feature-7.jpg" />
                    </div>
                    <div className="edge">
                      <svg>
                        <rect
                          x="7"
                          y="0"
                          width="10"
                          height="2"
                          fill="#000000"
                          transform="rotate(45)"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="grid-content--detail">
                    <p className="grid-content--title">【石橋站】哥拉巴公園</p>
                    <p className="grid-content--address">
                      地址：
                      <a href="https://goo.gl/maps/63S5AF73h97hSuGm8">
                        <span>〒850-0931 長崎県長崎市南山手町５−3</span>
                      </a>
                    </p>

                    <p className="grid-content--ref">
                      <a href="https://vip9854.pixnet.net/blog/post/460944611-%E3%80%90%E9%95%B7%E5%B4%8E%E6%99%AF%E9%BB%9E%E3%80%91%E5%93%A5%E6%8B%89%E5%B7%B4%E5%85%AC%E5%9C%92(%E3%82%B0%E3%83%A9%E3%83%90%E3%83%BC%E5%85%AC%E5%9C%92)-%E6%8C%91%E6%9C%9B">
                        <span>參考網站</span>
                      </a>
                    </p>
                    <p>
                      大浦天主教堂旁的哥拉巴公園，有日本最古老的木造洋館，這是19世紀蘇格蘭商人哥拉巴在長崎居住時建造的住宅，來到這裡，可以從山丘上眺望長崎港灣美景。
                    </p>
                  </div>
                </div>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Paper className="paper">
                <div className="grid-content">
                  <div className="grid-content--image">
                    <div className="grid-content--image__mask">
                      <img src="https://p.cutebox.org/var/resizes/travel-outside/2016%E4%B9%9D%E5%B7%9E%E8%87%AA%E7%94%B1%E8%A1%8C/glasses/DSC_7280.jpg?m=1469239448" />
                    </div>
                    <div className="edge">
                      <svg>
                        <rect
                          x="7"
                          y="0"
                          width="10"
                          height="2"
                          fill="#000000"
                          transform="rotate(45)"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="grid-content--detail">
                    <p className="grid-content--title">【賑町站】眼鏡橋</p>
                    <p className="grid-content--address">
                      地址：
                      <a href="https://goo.gl/maps/sQ3K3SyPqbZe8pSp8">
                        <span>〒850-0874 長崎県長崎市魚の町</span>
                      </a>
                    </p>

                    <p className="grid-content--ref">
                      <a href="https://blog.cutebox.org/%E9%95%B7%E5%B4%8E%E6%99%AF%E9%BB%9E-%E7%9C%BC%E9%8F%A1%E6%A9%8B-%E4%B8%AD%E5%B3%B6%E5%B7%9D%E7%9F%B3%E6%A9%8B%E7%BE%A4">
                        <span>參考網站</span>
                      </a>
                    </p>
                    <p>
                      眼鏡橋建於西元1634年建造，是日本最古老的石橋
                      <br />
                      因為橋的倒影在水面就像眼鏡一樣，因此被稱為眼鏡橋
                    </p>
                  </div>
                </div>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Paper className="paper">
                <div className="grid-content">
                  <div className="grid-content--image">
                    <div className="grid-content--image__mask">
                      <img src="https://tw.bring-you.info/imgs/2017/12/Kyushu-feature-35.jpg" />
                    </div>
                    <div className="edge">
                      <svg>
                        <rect
                          x="7"
                          y="0"
                          width="10"
                          height="2"
                          fill="#000000"
                          transform="rotate(45)"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="grid-content--detail">
                    <p className="grid-content--title">稻佐山夜景</p>
                    <p className="grid-content--address">
                      地址：
                      <a href="https://goo.gl/maps/sQ3K3SyPqbZe8pSp8">
                        <span>〒850-0874 長崎県長崎市魚の町</span>
                      </a>
                    </p>

                    <p className="grid-content--ref">
                      <a href="https://tw.bring-you.info/nagasaki-night-view-on-mt-inasa">
                        <span>參考網站</span>
                      </a>
                    </p>
                    <p>
                      標高333公尺的稻佐山公園，有著與神戶、函館並稱日本三大夜景的稻佐山展望台，2012年與摩納哥、香港被選為世界新三大夜景，更有「千萬美金夜景」之稱，搭乘長崎纜車到山頂可以眺望長崎全市景色
                    </p>
                  </div>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
