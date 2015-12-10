var V = module.require('./Vector.js');
var CV = module.require('./CompositeVector.js');

function main()
{
    var v1 = new V.Vector(50, 60, +1, +1);
    console.log("X1 ", v1.getXComp());
    console.log("Y1 ", v1.getYComp());

    var v2 = new V.Vector(60, 40, +1, +1);
    console.log("X2 ", v2.getXComp());
    console.log("Y2 ", v2.getYComp());

    var cv1 = new CV.CompositeVector();
    cv1.add(v1);
    cv1.add(v2);

    console.log("CV1X ", cv1.getXComp());
    console.log("CV1Y ", cv1.getYComp());
    console.log("CV1Mag ", cv1.getMagnitude());

    var cv2 = new CV.CompositeVector();
    cv2.add(v1);
    cv2.add(v2);
    cv2.add(cv1);

    console.log("CV2X ", cv2.getXComp());
    console.log("CV2Y ", cv2.getYComp());
    console.log("CV2Mag ", cv2.getMagnitude());

}


main();
