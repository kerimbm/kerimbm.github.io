ace.define("ace/theme/mytheme",["require","exports","module","ace/lib/dom"], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-mytheme";
exports.cssText = ".ace-mytheme .ace_gutter {\
background: #343434;\
color: #a2a2a2\
}\
.ace-mytheme .ace_print-margin {\
width: 1px;\
background: #232323\
}\
.ace-mytheme {\
background-color: #191919;\
color: #a2a2a2\
}\
.ace-mytheme .ace_xml-pe {\
    color: #444;\
    font-style: italic;\
}\
.ace-mytheme .ace_constant {\
    color: #57a;\
    }\
.ace-mytheme .ace_cursor {\
color: #7DA5DC\
}\
.ace-mytheme .ace_marker-layer .ace_selection {\
background: #113355\
}\
.ace-mytheme.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #191919;\
}\
.ace-mytheme .ace_marker-layer .ace_step {\
background: rgb(102, 82, 0)\
}\
.ace-mytheme .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #375\
}\
.ace-mytheme .ace_marker-layer .ace_active-line {\
background: rgba(215, 215, 215, 0.031)\
}\
.ace-mytheme .ace_gutter-active-line {\
background-color: rgba(215, 215, 215, 0.031)\
}\
.ace-mytheme .ace_marker-layer .ace_selected-word {\
border: 1px solid #357\
}\
.ace-mytheme .ace_invisible {\
color: #666\
}\
.ace-mytheme .ace_keyword,\
.ace-mytheme .ace_meta,\
.ace-mytheme .ace_support.ace_constant.ace_property-value {\
color: #927C5D\
}\
.ace-mytheme .ace_keyword.ace_operator {\
color: #4B4B4B\
}\
.ace-mytheme .ace_keyword.ace_other.ace_unit {\
color: #366F1A\
}\
.ace-mytheme .ace_constant.ace_language {\
color: #39946A\
}\
.ace-mytheme .ace_constant.ace_numeric {\
color: #46A609\
}\
.ace-mytheme .ace_constant.ace_character.ace_entity {\
color: #A165AC\
}\
.ace-mytheme .ace_invalid {\
color: #FFFFFF;\
background-color: #E92E2E\
}\
.ace-mytheme .ace_fold {\
background-color: #927C5D;\
border-color: #929292\
}\
.ace-mytheme .ace_storage,\
.ace-mytheme .ace_support.ace_class,\
.ace-mytheme .ace_support.ace_function,\
.ace-mytheme .ace_support.ace_other,\
.ace-mytheme .ace_support.ace_type {\
color: #b48\
}\
.ace-mytheme .ace_string {\
color: #5D90CD\
}\
.ace-mytheme .ace_comment {\
color: #3C403B;\
font-style: italic;\
}\
.ace-mytheme .ace_entity.ace_name.ace_tag,\
.ace-mytheme .ace_entity.ace_other.ace_attribute-name {\
color: #b48\
}\
.ace-mytheme .ace_indent-guide {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYHB3d/8PAAOIAdULw8qMAAAAAElFTkSuQmCC) right repeat-y\
}";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});                (function() {
                    ace.require(["ace/theme/mytheme"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            