function getCookie(t) {
    for (var e = t + "=", n = decodeURIComponent(document.cookie).split(";"), o = 0; o < n.length; o++) {
        for (var i = n[o];
            " " == i.charAt(0);) i = i.substring(1);
        if (0 == i.indexOf(e)) return i.substring(e.length, i.length)
    }
    return ""
}
getCookie("hostinger") && (document.cookie = "hostinger=;expires=Thu, 01 Jan 1970 00:00:01 GMT;", location.reload());
var wordpressAdminBody = document.getElementsByClassName("wp-admin")[0],
    notification = document.getElementsByClassName("notice notice-success is-dismissible"),
    hostingerLogo = document.getElementsByClassName("hlogo"),
    mainContent = document.getElementsByClassName("notice_content")[0];
if (null != wordpressAdminBody && notification.length > 0 && null != mainContent) {
    var googleFont = document.createElement("link");
    googleFontHref = document.createAttribute("href"), googleFontRel = document.createAttribute("rel"), googleFontHref.value = "https://fonts.googleapis.com/css?family=Roboto:300,400,600", googleFontRel.value = "stylesheet", googleFont.setAttributeNode(googleFontHref), googleFont.setAttributeNode(googleFontRel);
    var css = "@media only screen and (max-width: 576px) {#main_content {max-width: 320px !important;} #main_content h1 {font-size: 30px !important;} #main_content h2 {font-size: 40px !important; margin: 20px 0 !important;} #main_content p {font-size: 14px !important;} #main_content .content-wrapper {text-align: center !important;}} @media only screen and (max-width: 781px) {#main_content {margin: auto; justify-content: center; max-width: 445px;}} @media only screen and (max-width: 1325px) {.web-hosting-90-off-image-wrapper {position: absolute; max-width: 95% !important;} .notice_content {justify-content: center;} .web-hosting-90-off-image {opacity: 0.3;}} @media only screen and (min-width: 769px) {.notice_content {justify-content: space-between;} #main_content {margin-left: 5%; max-width: 445px;} .web-hosting-90-off-image-wrapper {position: absolute; right: 0; display: flex; padding: 0 5%}} .web-hosting-90-off-image {max-width: 90%;} .content-wrapper {z-index: 5} .notice_content {display: flex; align-items: center;} * {-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;} .upgrade_button_red_sale{box-shadow: 0 2px 4px 0 rgba(255, 69, 70, 0.2); max-width: 350px; border: 0; border-radius: 3px; background-color: #ff4546 !important; padding: 15px 55px !important;  margin-bottom: 48px; font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 600; color: #ffffff;} .upgrade_button_red_sale:hover{color: #ffffff !important; background: #d10303 !important;}",
        style = document.createElement("style"),
        sheet = window.document.styleSheets[0];
    style.styleSheet ? style.styleSheet.cssText = css : style.appendChild(document.createTextNode(css)), document.getElementsByTagName("head")[0].appendChild(style), document.getElementsByTagName("head")[0].appendChild(googleFont);
    var button = document.getElementsByClassName("upgrade_button_red")[0],
        link = button.parentElement;
    link.setAttribute("href", "https://www.hostinger.com/hosting-starter-offer?utm_source=000webhost&utm_medium=panel&utm_campaign=000-wp"), link.innerHTML = '<button class="upgrade_button_red_sale">TRANSFER NOW</button>', (notification = notification[0]).setAttribute("style", "padding-bottom: 0; padding-top: 5px; background-color: #313134; background-size: cover; background-repeat: no-repeat; color: #ffffff; border-color: #ff123a; border-width: 8px;"), notification.className = "notice notice-error is-dismissible";
    var mainContentHolder = document.getElementById("main_content");
    mainContentHolder.setAttribute("style", "padding: 0;"), hostingerLogo[0].remove();
    var h1Tag = notification.getElementsByTagName("H1")[0];
    h1Tag.className = "000-h1", h1Tag.innerHTML = "Black Friday Sale", h1Tag.setAttribute("style", 'color: white;  margin-top: 48px; font-family: "Roboto", sans-serif; font-size: 48px; font-weight: 600;');
    var h2Tag = document.createElement("H2");
    h2Tag.innerHTML = "Get 90% Off!", h2Tag.setAttribute("style", 'color: white; margin: 45px 0; font-family: "Roboto", sans-serif; font-size: 80px; font-weight: 600;'), h1Tag.parentNode.insertBefore(h2Tag, h1Tag.nextSibling);
    var paragraph = notification.getElementsByTagName("p")[0];
    paragraph.innerHTML = "Don’t miss the opportunity to enjoy up to <strong>4x WordPress Speed, Free SSL and all premium features</strong> available for a fraction of the price!", paragraph.setAttribute("style", 'font-family: "Roboto", sans-serif; font-size: 18px; font-weight: 300;');
    var list = notification.getElementsByTagName("UL")[0];
    list.remove();
    var org_html = mainContent.innerHTML,
        new_html = '<div class="content-wrapper">' + mainContent.innerHTML + '</div><div class="web-hosting-90-off-image-wrapper"><img class="web-hosting-90-off-image" src="https://cdn.000webhost.com/000webhost/promotions/black-friday-2019-wordpress.png"></div>';
    mainContent.innerHTML = new_html;
    var saleImage = mainContent.getElementsByClassName("web-hosting-90-off-image")[0]
}

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 1;
    document.documentElement.scrollTop = 1;
    slowdown
}