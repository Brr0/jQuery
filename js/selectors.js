
$(function () {

    $(".btn-danger").on("click", () => {
        $("body").css({ "background-color": "white", "color": "white" });
        $("h1, h2, h3, h4, h5, h6").css({ "color": "red", "font-size": "60px" });
        $("h1, h2, h3, h4, h5, h6").text("Dáš mi sušenku ?");
        $("img").attr("src", "susenka.jpg");
        $("a").html("<b>Jako první si dejte předehřát troubu na 175 stupňů a utřete si oba cukry s máslem do hladké pěny. Poté přidejte vejce a pár kapek vanilkového aroma. Poté si rozpusťte jedlou sodu v 5 ml horké vody a společně se solí přidejte do směsi. Nyní přidejte hladkou mouku a nakrájenou čokoládu. Směs nechte asi na 15 minut vychladit v lednici, poté z ní vytvarujte kuličky, vyskládejte na plech a dejte péct asi na 5 až 10 minut. A máme hotovo! Dobrou chuť!</b>");
        $("a").css({"color": "black"});
        jQuery("aside").hide(1000);
    });
})