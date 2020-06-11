

export default function sketch(p) {
  var data = [];
  var piedata = [], piecolor = []
  let canvas = null
  let jsonObj = {}
  let xAxis
  p.setup = () => {
    canvas = p.createCanvas(640, 480);

  }

  p.draw = () => {
    p.clear();
    for (var i = 0, dx = 0, dy = 0; i < piedata.length; i++, dx = 0, dy = 0) {
      p.fill(piecolor[i % data.length]);
      //if (mouseAngle >= piedata[i][0] && mouseAngle < piedata[i][1]) {
        //dx = Math.cos((piedata[i][0] + piedata[i][1]) / 2) * 10;
        //dy = Math.sin((piedata[i][0] + piedata[i][1]) / 2) * 10;
      //}
      p.arc(320 + dx, 200 + dy, 300, 300, piedata[i][0], piedata[i][1], Math.PIE);
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
      data = getCountObj(jsonObj, xAxis)
      
      for (let i = 0; i < data.length; i++) {
        piecolor.push(p.color(Math.floor((Math.random() * 254)),Math.floor((Math.random() * 254)),Math.floor((Math.random() * 254))))
      }
      let total = data.reduce(function (a, b) { return a + b; }, 0);
      for (var i = 0, count = 0; i < data.length; i++) {
        piedata.push([Math.PI * 2 * count / total, Math.PI * 2 * (count + data[i]) / total]);
        count += data[i];
      }

    }

  };

}
