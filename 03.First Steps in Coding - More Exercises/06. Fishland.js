function fishland(data) {

    let mackerelPricePerKg = Number(data[0]);
    let spratPricePerKg = Number(data[1]);
    let bonitoPricePerKg = mackerelPricePerKg + (mackerelPricePerKg * 0.6);
    let safridPricePerKg = spratPricePerKg + (spratPricePerKg * 0.8);
    let musselsPricePerKg = 7.50;

    let bonitoKg = Number(data[2]);
    let safridKg = Number(data[3]);
    let musselsKg = Number(data[4]);

    let totalPrice = (bonitoPricePerKg * bonitoKg) + (safridPricePerKg * safridKg) + (musselsPricePerKg * musselsKg);
    console.log(totalPrice.toFixed(2))
}
fishland(["6.90", "4.20", "1.50", "2.50", "1"])