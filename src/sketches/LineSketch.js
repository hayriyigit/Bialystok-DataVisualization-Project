var marginTop = 40;
var marginLeft = 50;
var graphWidth = 1100;
var graphHeight = 800;
var yTick;
var xTick;
var NyTick;
var NxTick;
var data;
var label;
var yLength = graphHeight - 100;

export default function sketch(p) {
  let canvas;

  p.setup = () => {
    // graphWidth = p.max(data.length * 25, 800);
    canvas = p.createCanvas(graphWidth, graphHeight);
    // console.log(Math.min(...data));
    p.noStroke();
  };

  p.draw = () => {
    p.background(200);
    // p.fill(0);
    p.textSize(20);
    p.text(`${label} Line Graph`, p.width / 2 - marginLeft, marginTop / 2);
    p.textSize(15);

    p.stroke(0);
    p.line(50, 50, 50, p.height - 50);
    p.line(p.width - 50, p.height - 50, 50, p.height - 50);

    for (let i = 0; i < 20; i++) {
      yTick = p.floor(p.map(i, 0, 20, Math.max(...data), Math.min(...data)));
      p.strokeWeight(0.3);
      p.line(
        45,
        50 + i * p.floor(yLength / 20),
        p.width - 50,
        50 + i * p.floor(yLength / 20)
      );
      p.strokeWeight(1);
      p.text(yTick, 20, 57 + i * p.floor(yLength / 20));
    }

    for (let i = 0; i < data.length; i++) {
      yTick = p.floor(
        p.map(data[i], Math.max(...data), Math.min(...data), 50, p.height - 50)
      );
      xTick = i * ((0.95 / data.length) * (p.width - 100)) + 70;

      if (data[i + 1] || data[i + 1] === 0) {
        NyTick = p.floor(
          p.map(
            data[i + 1],
            Math.max(...data),
            Math.min(...data),
            50,
            p.height - 50
          )
        );
        NxTick = (i + 1) * ((0.95 / data.length) * (p.width - 100)) + 70;

        p.strokeWeight(2);
        p.stroke("blue");
        p.line(xTick, yTick, NxTick, NyTick);
        p.stroke(0);
        p.strokeWeight(1);
      }
      p.line(xTick, p.height - 45, xTick, p.height - 55);
      p.strokeWeight(0.1);
      p.text(i, xTick - 4, p.height - 25);
      p.strokeWeight(1);
      // text(i, xTick, yTick);

      p.strokeWeight(8);
      p.stroke("purple");
      p.point(xTick, yTick);
      p.stroke(0);
      p.strokeWeight(1);
    }

    p.noLoop();
  };

  p.myCustomRedrawAccordingToNewPropsHandler = (props) => {
    if (canvas)
      //Make sure the canvas has been created
      p.fill(props.color);
    data = props.data;
    label = props.label;
  };
}
