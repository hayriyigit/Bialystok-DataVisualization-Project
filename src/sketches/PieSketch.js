import roundMe from '../Tools/Utils';

export default function sketch(p) {
  var data = [];
  var piedata = [], piecolor = []
  var keys = []
  let canvas = null
  let jsonObj = {}
  let xAxis
  let label
  p.setup = () => {
    canvas = p.createCanvas(1000, 480);
  }

  p.draw = () => {
    p.background(200);
    p.textSize(20);
    p.text(`Pie Chart for variable: ${label}`, p.width / 2 - 50, 30);
    p.textSize(15);
    for (var i = 0; i < keys.length; i++) {
      p.fill(piecolor[i]);
      console.log(piedata[i]);
      p.arc(320, 250, 300, 300, piedata[i][0], piedata[i][1]);
    }

    for (let i = 0; i < keys.length; i++) {
      p.fill(piecolor[i][0],piecolor[i][1],piecolor[i][2])
      p.noStroke();
      p.rect(550, 75+(i*20), 15, 15);
      p.fill(0);
      let angle = roundMe((piedata[i][1]-piedata[i][0])*180/Math.PI,2)
      p.text(`${keys[i]} : %${angle}`,575,87+(i*20))
    }

    p.noLoop();
  }
  function getCountObj(jsonObj) {
    let keys = Object.keys(jsonObj)
    let result = []
    for (let i = 0; i < keys.length; i++) {
      result.push(jsonObj[keys[i]])
    }
    return result
  }
  p.myCustomRedrawAccordingToNewPropsHandler = (props) => {
    if (canvas) {
      //Make sure the canvas has been created
      p.fill(props.color);
      xAxis = props.dataX;
      jsonObj = props.jsonObject
      keys = Object.keys(jsonObj)
      label = props.label
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

      let count = 0;
      for (let i = 0; i < data.length; i++) {
        piedata.push([Math.PI * 2 * count / (total), Math.PI * 2 * (count + data[i]) / (total)]);
        count += data[i]
      }

    }

  };

}
