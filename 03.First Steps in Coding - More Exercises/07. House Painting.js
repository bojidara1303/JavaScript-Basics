function housePainting(data) {

    let x = Number(data[0]);
    let y = Number(data[1]);
    let h = Number(data[2]);

    let literGreenPaintPerSqMeters = 3.4;
    let literRedPaintPerSqMeters = 4.3;

    let doorSize = 1.2 * 2;
    let windowSize = 1.5 * 1.5;

    let frontWalls = 2 * (x * x) - doorSize;
    let sideWalls = (2 * x * y) - (2 * windowSize);
    let frontRoof = 2 * (x * h/2);
    let sideRoof = 2 * (x * y);

    let totalWalls = frontWalls + sideWalls;
    let totalRoof = frontRoof + sideRoof;
    let redPaint = totalRoof / literRedPaintPerSqMeters;
    let greenPaint = totalWalls / literGreenPaintPerSqMeters;

    console.log(greenPaint.toFixed(2))
    console.log(redPaint.toFixed(2))

}
housePainting(["6", "10", "5.2"])