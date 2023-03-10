console.log('upee ads');

var el = document.getElementsByClassName("adupee");


for (let i = 0; i < el.length; i++) {


    if (el[i].getAttribute("data-ad-slot-select") == null) {

        el[i].setAttribute("data-ad-slot-select", "true");
        // var slot = elemento[i].getAttribute("data-ad-slot");
        elemento = el[i];
        break;
    }
}


var cli = elemento.getAttribute("data-ad-client");
var slot = elemento.getAttribute("data-ad-slot");
var display = elemento.getAttribute("data-ad-display");
var responsive = elemento.getAttribute("data-ad-responsive");
// var style = elemento.getAttribute("style");

// var width = elemento.offsetWidth;
var width = elemento.clientWidth;
//var width = elemento.parentNode.clientWidth;


//var height = elemento.offsetheight;
//var height = elemento.style.height;
//var height = elemento.parentNode.clientheight;
var height = elemento.clientHeight;

if (width > 1200) {
    width = 1200;
}

if (display == 'horizontal') {


    if (width > 970){
        width = 970;
    }

    if (height == 0 || typeof height === 'undefined') {
        height = 90;
    }
    // if (height > 90) {
    //     height = 90;
    // }


    if (width == 0 || typeof width === 'undefined') {
        width = '100';
        widthMed = '%';
    } else {
        widthMed = 'px';
    }


}

if (display == 'square') {

    if (height == 0 || typeof height === 'undefined') {
        height = 280;
    }
    if (height < 200) {
        height = 200;
    }

    if (width == 0 || typeof width === 'undefined') {
        width = 280;
    }
    if (width < 200) {
        width = 200;
    }
    if (width > 336) {
        width = 336;
    }

    height = width;

    widthMed = 'px';

}

if (display == 'vertical') {

    height = 600;

    if (width == 0 || typeof width === 'undefined') {
        width = 160;
    }

    if (width > 300) {
        width = 300;
    }

    widthMed = 'px';

}


var href = window.location.href;
var hostname = window.location.hostname;

// Is mobile
var isMobile = false; //initiate as false
// device detection
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
    isMobile = true;
}


// Screen and window

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

var screenWidth = screen.width;
var screenHeight = screen.height;

var dataForPost = JSON.stringify({
    client: cli,
    slot: slot,
    display: display,
    responsive: responsive,
    href: href,
    hostname: hostname,
    isMobile: isMobile,
    userAgent: navigator.userAgent,
    windowWidth: windowWidth,
    windowHeight: windowHeight,
    screenWidth: screenWidth,
    screenHeight: screenHeight,
    width: width,
    height: height,
    palco: calcLengthForPalco(isMobile, display, height, width)
});

function calcLengthForPalco(isMobile, display, height, width) {
    var palco = '0';
    if (!isMobile) {
        if (display == 'horizontal') {
            if (height > 111) {
                height = 111;
            }

            if (width <= 1200 && width >= 970) {
                palco = '1';
            }

            if (width <= 968 && width >= 645) {
                palco = '2';
            }

            if (width <= 644 && width >= 468) {
                palco = '3';
            }

        }

        if (display == 'vertical') {
            if (width >= 300) {
                palco = '1';
            }

            if (width <= 160) {
                palco = '2';
            }
        }

        if (display == 'square') {
            if (width >= 300) {
                palco = '1';
            } else {
                palco = '2';
            }

        }
    }

    return palco;
}

function calcPalcos(display, height, width) {

}

// Create 1 ins


var insExpand = document.createElement("ins");

insExpand.setAttribute("id", "upee_expand_"+slot);

insExpand.setAttribute("style", "display:inline-table;border:none;height:" + height + "px;margin:0;padding:0;position:relative;visibility:visible;width:" + width + widthMed + ";background-color:transparent;");


elemento.appendChild(insExpand);


// Create 2 ins


var insAnchor = document.createElement("ins");

insAnchor.setAttribute("id", "upee_anchor_"+slot);

insAnchor.setAttribute("style", "display:block;border:none;height:" + height + "px;margin:0;padding:0;position:relative;visibility:visible;width:" + width + widthMed + ";background-color:transparent;");


document.getElementById("upee_expand_"+slot).appendChild(insAnchor);



// Create the XHR object.
function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
        // XHR for Chrome/Firefox/Opera/Safari.
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
        // XDomainRequest for IE.
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        // CORS not supported.
        xhr = null;
    }
    return xhr;
}


// Make the actual CORS request.
function makeCorsRequest(dataForPost, slot, width, height, display) {
    // This is a sample server that supports CORS.
    var url = 'https://app.upee.online/ad/make';


    var xhr = createCORSRequest('POST', url);
    if (!xhr) {
        console.log('CORS not supported');
        return;
    }

    xhr.setRequestHeader("Content-Type", "application/json");

    // Response handlers.
    xhr.onload = function () {
        var text = xhr.responseText;
        var obj = JSON.parse(text);
        var src = obj.url;

        var iframe = document.createElement("iframe");


        // Calculo novamente
        elementoBase = document.querySelector('ins[data-ad-slot="' + slot + '"]');
        var width = elementoBase.clientWidth;

        var height = elementoBase.clientHeight;

        if (width > 1200) {
            width = 1200;
        }

        if (display == 'horizontal') {

            widthMed = 'px';

            if (width > 970) {
                width = 970;
            }

            if (height == 0 || typeof height === 'undefined') {
                height = 90;
            }

            if (height > 90) {
                height = 90;
            }

            if (width == 0 || typeof width === 'undefined') {
                width = '100';
                widthMed = '%';
            }

            // ss
            if (typeof (window.innerWidth) == 'number')
                WidthT = window.innerWidth;
            else if (document.documentElement && document.documentElement.clientWidth)
                WidthT = document.documentElement.clientWidth;
            else
                WidthT = document.body.clientWidth;

            //console.log(WidthT);
        }

        if (display == 'square') {
            widthMed = 'px';

            if (height == 0 || typeof height === 'undefined') {
                height = 280;
            }
            if (height < 200) {
                height = 200;
            }

            if (width == 0 || typeof width === 'undefined') {
                width = 280;
            }
            if (width < 200) {
                width = 200;
            }
            if (width > 336) {
                width = 336;
            }

            height = width;

        }

        if (display == 'vertical') {
            widthMed = 'px';

            height = 600;

            if (width == 0 || typeof width === 'undefined') {
                width = 160;
            }

            if (width > 300) {
                width = 300;
            }

        }
        /////

        var anchor = document.getElementById("upee_anchor_" + slot);
        anchor.style.width = width + widthMed;
        anchor.style.height = height;

        var expand = document.getElementById("upee_expand_" + slot);
        expand.style.width = width + widthMed;
        expand.style.height = height;


        iframe.setAttribute("src", src);

        if (widthMed == 'px') {
            iframe.setAttribute("width", width);
        }

        if (widthMed == '%') {
            iframe.style.width = width + widthMed;
        }

        iframe.setAttribute("height", height);
        iframe.setAttribute("id", "upee_iframe_" + slot);
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("vspace", "0");
        iframe.setAttribute("hspace", "0");
        iframe.setAttribute("allowtransparency", "true");
        iframe.setAttribute("scrolling", "no");
        iframe.setAttribute("allowfullscreen", "true");
        iframe.setAttribute("marginwidth", "0");
        iframe.setAttribute("marginheight", "0");
        iframe.setAttribute("margin", "0");
        iframe.setAttribute("padding", "0");
        iframe.setAttribute("paddingwidth", "0");
        iframe.setAttribute("paddingheight", "0");
        // iframe.setAttribute("style", "display:block;");


        //document.getElementsByClassName("adupee")[0].appendChild(iframe);
        document.getElementById("upee_anchor_" + slot).appendChild(iframe);


    };

    xhr.onerror = function () {
        console.log('Woops, there was an error making the request.');
        return;
    };

    xhr.send(dataForPost);
}

makeCorsRequest(dataForPost, slot, width, height, display);
