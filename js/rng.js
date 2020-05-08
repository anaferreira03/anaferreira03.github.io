const inicio = ["inicio1.png", "inicio2.png", "inicio3.png", "inicio4.png", "inicio5.png", "inicio6.png"];
const local = ["local1.png", "local2.png", "local3.png", "local4.png", "local5.png", "local6.png"];
const heroi = ["heroi1.png", "heroi2.png", "heroi3.png", "heroi4.png", "heroi5.png", "heroi6.png"];
const vilao = ["vilao1.png", "vilao2.png", "vilao3.png", "vilao4.png", "vilao5.png", "vilao6.png"];
const outras = ["outras1.png", "outras2.png", "outras3.png", "outras4.png", "outras5.png", "outras6.png"];
const aderecos = ["aderecos1.png", "aderecos2.png", "aderecos3.png", "aderecos4.png", "aderecos5.png", "aderecos6.png"];
const final = ["final1.png", "final2.png", "final3.png", "final4.png", "final5.png", "final6.png"];

let images = new Map();
images.set("inicio", inicio);
images.set("local", local);
images.set("heroi", heroi);
images.set("vilao", vilao);
images.set("outras", outras);
images.set("aderecos", aderecos);
images.set("final", final);

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

<!-- Custom RNG -->
function rng(value) {
    let imgValues = images.get(value);
    let imgSrc = imgValues[getRandomInt(imgValues.length)];

    $('#placeholder').html('');
    $('#placeholder').addClass("loader");

    setTimeout(function () {
        $('#placeholder').removeClass("loader");

        let html = '<img src="images/' + imgSrc + '" class="img-thumbnail img-responsive mw-100">';
        $('#placeholder').html(html)
    }, 1000);
}
