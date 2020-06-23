var marginTop = 150;
var marginLeft = 40;
var graphWidth = 900;
var graphHeight = 500;
var scale;
let yTick;
let xAxis;
let yAxis;
let labelX;
let jsonObj;

export default function sketch(p) {
    let canvas;

    p.setup = () => {
        canvas = p.createCanvas(1200, 800);
        p.noStroke();
    };

    p.draw = () => {
        p.background(220);
        p.fill(0);

        p.textSize(20);
        p.text(
            `Histogram for categorical variable: ${labelX}`,
            p.width / 2 + marginLeft,
            marginTop / 2
        );
        //draw vertical axis
        scale = 10;
        p.stroke(0)
        p.line(
            marginLeft + 50,
            marginTop,
            marginLeft + 50,
            marginTop + 20 + graphHeight
        );
        //10 ticks, spaced 50px apart
        var vTickScale = scale / 10; //each tick translates to this much increase in rating
        p.textAlign(p.CENTER, p.CENTER);

        for (var t = 0; t <= 10; t += 1) {
            yTick = p.map(t, 0, 10, Math.min(...yAxis), Math.max(...yAxis));
            p.stroke(0)
            p.line(
                marginLeft + 50 - 5,
                marginTop + graphHeight - 50 * t,
                marginLeft + 50 + 5,
                marginTop + graphHeight - 50 * t
            );
            p.noStroke()
            p.text(Math.floor(yTick), marginLeft + 50 - 25, marginTop + graphHeight - 50 * t);
        }

        //draw horizontal axis
        p.stroke(0)
        p.line(
            marginLeft + 50,
            marginTop + 20 + graphHeight,
            marginLeft + 50 + graphWidth,
            marginTop + 20 + graphHeight
        );
        var hTickInt = graphWidth / xAxis.length;
        for (let t = 0; t < xAxis.length; t++) {
            p.fill(0);
            p.stroke(0)
            p.line(
                marginLeft + 50 + t * hTickInt + hTickInt / 2,
                marginTop + 20 + graphHeight,
                marginLeft + 50 + t * hTickInt + hTickInt / 2,
                marginTop + 20 + graphHeight + 5
            );
            p.noStroke()
            p.text(
                [...xAxis[t]].join("\n"),
                marginLeft + 50 + t * hTickInt + hTickInt / 2,
                marginTop + 50 + graphHeight + 25
            );

            p.fill(180, 0, 100, 255);
            yTick = p.map(
                yAxis[t],
                Math.min(...yAxis),
                Math.max(...yAxis),
                0,
                10
            );

            p.rect(
                marginLeft + 50 + t * hTickInt - (0.8 * hTickInt) / 2 + hTickInt / 2,
                marginTop + 20 + graphHeight,
                0.8 * hTickInt,
                -50 * yTick / vTickScale - 20
            );
        }
        p.noLoop()
    };

    function getCountObj(jsonObj){
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
            yAxis = getCountObj(jsonObj,xAxis)
            labelX = props.labelX;
            
        }

    };
}
