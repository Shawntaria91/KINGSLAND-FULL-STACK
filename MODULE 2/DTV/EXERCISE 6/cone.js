function main(radius, height) {
    let volume = Math.PI * Math.pow(radius, 2) * (height / 3);

    //A=πr(r+h2+r2)
    let totalSurfaceArea = Math.PI * radius * (radius + Math.sqrt(Math.pow(height, 2) + Math.pow(radius, 2)));
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${totalSurfaceArea.toFixed(4)}`);

}
main(3, 5);