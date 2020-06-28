

export default function sketch(p) {
  var data = [];
  var piedata = [], piecolor = []
  var keys = []
  let canvas = null
  let jsonObj = {}
  let xAxis
  p.setup = () => {
    canvas = p.createCanvas(1000, 480);
  }

  p.draw = () => {
    p.background(200);
    for (var i = 0, dx = 0, dy = 0; i < keys.length; i++, dx = 0, dy = 0) {
      p.fill(piecolor[i % keys.length]);
      //if (mouseAngle >= piedata[i][0] && mouseAngle < piedata[i][1]) {
        //dx = Math.cos((piedata[i][0] + piedata[i][1]) / 2) * 10;
        //dy = Math.sin((piedata[i][0] + piedata[i][1]) / 2) * 10;
      //}
      p.arc(320 + dx, 200 + dy, 300, 300, piedata[i][0], piedata[i][1], Math.PIE);
    }

    for (let i = 0; i < keys.length; i++) {
      p.fill(piecolor[i][0],piecolor[i][1],piecolor[i][2])
      p.noStroke();
      p.rect(550, 50+(i*20), 15, 15);
      p.fill(0);
      p.text(keys[i],575,62+(i*20))
    }
  }
  function getCountObj(jsonObj) {
    let keys = Object.keys(jsonObj)
    let result = []
    for (let i = 0; i < keys.length; i++) {
      result.push(jsonObj[keys[i]])
    }
    //last value is trash..
    result.pop(result.length - 1)
    return result
  }
  p.myCustomRedrawAccordingToNewPropsHandler = (props) => {
    if (canvas) {
      //Make sure the canvas has been created
      p.fill(props.color);
      xAxis = props.dataX;
      jsonObj = props.jsonObject
      keys = Object.keys(jsonObj)
      
      data = getCountObj(jsonObj, xAxis)
      
      let r = 0
      let g = 0
      let b = 0
      for (let i = 0; i < data.length; i++) {
        r = p.random(255-(i*5))
        g = p.random(255-(i*5))
        b = p.random(255-(i*5))
        piecolor.push([r,g,b])
      }
      let total = data.reduce(function (a, b) { return a + b; }, 0);
      for (var i = 0, count = 0; i < data.length; i++) {
        piedata.push([Math.PI * 2 * count / total, Math.PI * 2 * (count + data[i]) / total]);
        count += data[i];
      }

    }

  };

}
