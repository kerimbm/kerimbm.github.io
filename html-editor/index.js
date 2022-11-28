var main_div = document.getElementById("main-div");
var editors = document.getElementById("editors");
var html_div = document.getElementById("html-div");
var css_div = document.getElementById("css-div");
var js_div = document.getElementById("js-div");
var html_header = document.getElementById("html-header");
var css_header = document.getElementById("css-header");
var js_header = document.getElementById("js-header");
var html_body = document.getElementById("html-body");
var css_body = document.getElementById("css-body");
var js_body = document.getElementById("js-body");
var splitter = document.getElementById("splitter");
var output = document.getElementById("output");
var mask_output = document.getElementById("mask-output");
var mask_editors = document.getElementById("mask-editors");
var editor1 = document.getElementById('editor1');
var editor2 = document.getElementById('editor2');
var editor3 = document.getElementById('editor3');
var size = document.getElementById("size");

// Paramètres
var totalwidth = document.documentElement.clientWidth;
var totalheight = document.documentElement.clientHeight - 20;
var minwidth = 150;
var header_height = 20;
var css_header_drag = false;
var js_header_drag = false;
var fontsize = '14px';           // taille du texte
var readonly1 = false;           // editeurs html en lecture seul
var readonly2 = false;           // editeurs css en lecture seul
var readonly3 = false;           // editeurs javascript en lecture seul
var code1 = '';                  // code html initiale
var code2 = '';                  // code css initiale
var code3 = '';                  // code javascript initiale
var basicAutocompletion = true;  // autocomplétion basique
var snippets = true;             // snippets
var liveAutocompletion = true;   // autocomplétion live

// corrigé de bug !!!! essayer de le commenter et voir le résultat.
var iframedocument = document.getElementById("iframe").contentWindow.document;
iframedocument.open();
iframedocument.write('<html><head></head><body></body></html>');
iframedocument.close();

main_div.style.width = totalwidth + "px";
main_div.style.height = totalheight + "px";
editors.style.width = totalwidth * 0.4 + "px";
editors.style.height = totalheight + "px";
html_body.style.height = totalheight / 2 - header_height >= 0 ? totalheight / 2 - header_height + "px": 0 + "px";
css_body.style.height = totalheight / 4 - header_height >= 0 ? totalheight / 4 - header_height + "px": 0 + "px";
js_body.style.height = totalheight / 4 - header_height >= 0 ? totalheight / 4 - header_height + "px": 0 + "px";
splitter.style.left = totalwidth * 0.4 - 5 + "px";
output.style.width = totalwidth * 0.6 + "px";
output.style.height = totalheight + "px";

size.onfocus = function(){
    let selection = window.getSelection();
    let range = document.createRange();
    range.selectNodeContents(size);
    selection.removeAllRanges();
    selection.addRange(range);
    size.focus();
}

size.onkeydown = function(e){
    if(e.code == "Enter" || e.code == "NumpadEnter"){
        let s = parseInt(size.innerText);
        if(!Number.isInteger(s)){
            s = 14;
        }
        else if(s < 10){
            s = 10
        }
        else if(s > 36){
            s = 36
        }
        size.innerText = s;
        fontsize = s + "px";
        editor1.style.fontSize = fontsize;
        editor2.style.fontSize = fontsize;
        editor3.style.fontSize = fontsize;

        size.blur();
    }
}

splitter.onmousedown = function(){
    mask_output.style.display = "block";
}

mask_output.onmousemove = function(e){
    if(e.clientX >= minwidth && e.clientX <= totalwidth - minwidth){
        splitter.style.left = e.clientX - 5 + "px";
        editors.style.width = e.clientX + "px";
    }
    else if(e.clientX < minwidth){
        splitter.style.left = minwidth - 5 + "px";
        editors.style.width = minwidth + "px";
    }
    else{
        splitter.style.left = totalwidth - minwidth - 5 + "px";
        editors.style.width = totalwidth - minwidth + "px";
    }
    output.style.width = main_div.offsetWidth - editors.offsetWidth + "px";

    ace1.resize();
    ace2.resize();
    ace3.resize();
}

css_header.onmousedown = function(){
    mask_editors.style.display = "block";
    css_header_drag = true;
}

js_header.onmousedown = function(){
    mask_editors.style.display = "block";
    js_header_drag = true;
}

mask_editors.onmousemove = function(e){
    if(css_header_drag){
        let newheight = e.clientY - header_height * 1.5;
        if(newheight >= 0 && newheight <= totalheight - header_height * 3){
            html_body.style.height = newheight + "px";
        }
        else if(newheight < 0){
            html_body.style.height = 0 + "px";
        }
        else{
            html_body.style.height = totalheight - header_height * 3 + "px";
        }
        newheight = totalheight - html_body.offsetHeight - js_body.offsetHeight - header_height*3;
        css_body.style.height = newheight >= 0 ? newheight + "px" : 0 + "px";
        newheight = totalheight - html_div.offsetHeight - css_div.offsetHeight - header_height;
        js_body.style.height = newheight >= 0 ? newheight + "px" : 0 + "px";
    }
    else if(js_header_drag){
        y = e.clientY;
        if(y < header_height * 2.5){
            y = header_height * 2.5;
        }
        let newheight = totalheight - y - header_height * 0.5;
        if(newheight >= 0 && newheight <= totalheight - header_height * 3){
            js_body.style.height =  newheight + "px";
        }
        else if(newheight < 0){
            js_body.style.height = 0 + "px";
        }
        else/* if(newheight > totalheight - header_height * 3)*/{
            js_body.style.height = totalheight + "px";
        }
        newheight = totalheight - js_body.offsetHeight - html_body.offsetHeight - header_height * 3;
        css_body.style.height = newheight >= 0 ? newheight + "px" : 0 + "px";
        newheight = totalheight - css_body.offsetHeight - js_body.offsetHeight - header_height * 3;
        html_body.style.height = newheight >= 0 ? newheight + "px" : 0 + "px";
    }
    ace1.resize();
    ace2.resize();
    ace3.resize();
}

document.onmouseup = function(){
    mask_output.style.display = "none";
    mask_editors.style.display = "none";
    css_header_drag = false;
    js_header_drag = false;
}

window.onresize = function(){
    totalwidth = document.documentElement.clientWidth;
    if(totalwidth - minwidth < editors.offsetWidth){
        editors.style.width = totalwidth - minwidth + "px";
        splitter.style.left = totalwidth - minwidth - 5 + "px";
    }
    main_div.style.width = totalwidth + "px";
    output.style.width = totalwidth - editors.offsetWidth - 1 + "px";

    totalheight = document.documentElement.clientHeight - 20;
    if(totalheight < js_body.offsetTop){
        let newheight = totalheight - css_body.offsetTop - header_height;
        css_body.style.height = newheight >= 0 ? newheight + "px" : 0 + "px";
    }
    if(totalheight < js_body.offsetTop){
        let newheight = totalheight - header_height * 3;
        html_body.style.height = newheight >= 0 ? newheight + "px" : 0 + "px";
    }
    main_div.style.height = totalheight + "px";
    editors.style.height = totalheight + "px";
    js_body.style.height = totalheight - html_div.offsetHeight - css_div.offsetHeight - header_height + "px";
    output.style.height = totalheight + "px";

    ace1.resize();
    ace2.resize();
    ace3.resize();
}



editor1.style.fontSize = fontsize;
editor2.style.fontSize = fontsize;
editor3.style.fontSize = fontsize;




// trigger extension
ace.require("ace-builds-master/src-noconflict/language_tools");
var ace1 = ace.edit("editor1");
ace1.session.setMode("ace/mode/html");
ace1.setTheme("ace/theme/mytheme");    // 'mytheme' or 'chrome' or 'clouds_midnight' or 'eclipse' or 'xcode'
ace1.setReadOnly(readonly1);
ace1.setValue(code1);
// enable autocompletion and snippets
ace1.setOptions({
    enableBasicAutocompletion: basicAutocompletion,
    enableSnippets: snippets,
    enableLiveAutocompletion: liveAutocompletion
});

var ace2 = ace.edit("editor2");
ace2.session.setMode("ace/mode/css");
ace2.setTheme("ace/theme/mytheme");    // rechercher plus de theme sur internet
ace2.setReadOnly(readonly2);
ace2.setValue(code2);
// enable autocompletion and snippets
ace2.setOptions({
    enableBasicAutocompletion: basicAutocompletion,
    enableSnippets: snippets,
    enableLiveAutocompletion: liveAutocompletion
});

var ace3 = ace.edit("editor3");
ace3.session.setMode("ace/mode/javascript");
ace3.setTheme("ace/theme/mytheme");
ace3.setReadOnly(readonly3);
ace3.setValue(code3);
// enable autocompletion and snippets
ace3.setOptions({
    enableBasicAutocompletion: basicAutocompletion,
    enableSnippets: snippets,
    enableLiveAutocompletion: liveAutocompletion
});

ace1.session.on('change', function(delta) {
    update();
});

ace2.session.on('change', function(delta) {
    update();
});

ace3.session.on('change', function(delta) {
    update();
});

update = function(){
    // document.getElementById('inneroutput').innerHTML = '<iframe frameborder="0" id="iframe" style="width: 100%; height: 100%;background-color: #eee;"></iframe>\
    //         <div id="mask  style="display: none; opacity: 0; background-color: red; width: 100%; height: 100%;position: relative; top: calc(-100% - 5px);"></div>';
    mask = document.getElementById('mask');

    var iframedocument = document.getElementById("iframe").contentWindow.document;
    iframedocument.open();
    iframedocument.write(ace1.getValue());
    iframedocument.close();
    
    document.title = iframedocument.title;
    
    let headElms = iframedocument.getElementsByTagName('head');
    var tagstyle = iframedocument.createElement('style');
    var textcss = ace2.getValue();
    var codecss = iframedocument.createTextNode(textcss);
    tagstyle.appendChild(codecss);
    if(headElms[0])
        headElms[0].appendChild(tagstyle);
    

    let bodyElms = iframedocument.getElementsByTagName('body');
    var tagscript = iframedocument.createElement('script');
    var textscript = ace3.getValue();
    var codescript = iframedocument.createTextNode(textscript);
    tagscript.appendChild(codescript);
    if(bodyElms[0])
    bodyElms[0].appendChild(tagscript);
}
