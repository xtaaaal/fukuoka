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
                    <img src="https://3.bp.blogspot.com/-yq8DMhR89SI/W2mSBcAT9AI/AAAAAAACW24/alb4IOJXtbMz_5ThczVQ2VS13nbZ4xYQQCKgBGAs/s400/IMG_7776.JPG" />
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
                    <p className="grid-content--address">
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
                    <img src="https://www.city.itoshima.lg.jp/s026/s040/010/020/010/050/photo_futamigaura1.jpg" />
                  </div>
                  <div className="grid-content--detail">
                    <p className="grid-content--title">
                      糸島市 - 櫻井二見ヶ浦夫婦岩 + 白木神社（潤神社）
                    </p>
                    <p className="grid-content--address">
                      地址：
                      <a href="https://goo.gl/maps/xgvY8xiVCQjUs63G7">
                        <span>福岡縣糸島市志摩櫻井二見ケ浦</span>
                      </a>
                    </p>
                    <p className="grid-content--address">
                      地址：
                      <a href="https://serendidi.me/2018/11/11/fukouka_2/">
                        <span>參考網站</span>
                      </a>
                    </p>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper className="paper">xs=6 sm=3</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper className="paper">xs=6 sm=3</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper className="paper">xs=6 sm=3</Paper>
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
                    <img src="https://3.bp.blogspot.com/-swuNGz9PTno/XKo31X5ORzI/AAAAAAABEL0/GoLO0zqpAKUAzhMjhYXr_zh9r4k9pDvRACEwYBhgL/s640/2019-01-29%2B09.44.52.jpg" />
                  </div>
                  <div className="grid-content--detail">
                    <p className="grid-content--title">軍艦島</p>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper className="paper">豪斯登堡</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper className="paper">
                長崎市區（稻佐山夜景、平和公園、眼鏡橋）
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Paper className="paper">佐世保九十九島</Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
