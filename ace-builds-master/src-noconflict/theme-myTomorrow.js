ace.define("ace/theme/myTomorrow",["require","exports","module","ace/lib/dom"], function(require, exports, module) {

exports.isDark = false;
exports.cssClass = "ace-myTomorrow";
exports.cssText = ".ace-myTomorrow .ace_gutter {\
background: #f6f6f6;\
color: #7D7D7A\
}\
.ace-myTomorrow .ace_print-margin {\
width: 1px;\
background: #f0f0f0\
}\
.ace-myTomorrow {\
background-color: #f7f7f7;\
color: #2d2d2c\
}\
.ace-myTomorrow .ace_cursor {\
color: #9E9F9D\
}\
.ace-myTomorrow .ace_marker-layer .ace_selection {\
background: #dadaea\
}\
.ace-myTomorrow.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #FFFFFF;\
}\
.ace-myTomorrow .ace_marker-layer .ace_step {\
background: rgb(255, 255, 0)\
}\
.ace-myTomorrow .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
/*border: 1px solid #D1D1D1;*/\
border-radius: 0;\
background-color: #dde\
}\
.ace-myTomorrow .ace_marker-layer .ace_active-line {\
background: #EFEFEF\
}\
.ace-myTomorrow .ace_gutter-active-line {\
background-color : #dcdcdc\
}\
.ace-myTomorrow .ace_marker-layer .ace_selected-word {\
border: 1px solid #D6D6D6\
}\
.ace-myTomorrow .ace_invisible {\
color: #D1D1D1\
}\
.ace-myTomorrow .ace_keyword,\
.ace-myTomorrow .ace_meta,\
.ace-myTomorrow .ace_storage,\
.ace-myTomorrow .ace_storage.ace_type,\
.ace-myTomorrow .ace_support.ace_type {\
color: #009922\
}\
.ace-myTomorrow .ace_keyword.ace_operator {\
color: #dd44ee\
}\
.ace-myTomorrow .ace_constant.ace_character,\
.ace-myTomorrow .ace_constant.ace_language,\
.ace-myTomorrow .ace_constant.ace_numeric,\
.ace-myTomorrow .ace_keyword.ace_other.ace_unit,\
.ace-myTomorrow .ace_support.ace_constant,\
.ace-myTomorrow .ace_variable.ace_parameter {\
color: #5577ff\
}\
.ace-myTomorrow .ace_constant.ace_other {\
color: #666969\
}\
.ace-myTomorrow .ace_invalid {\
color: #FFFFFF;\
background-color: #C82829\
}\
.ace-myTomorrow .ace_invalid.ace_deprecated {\
color: #FFFFFF;\
background-color: #8959A8\
}\
.ace-myTomorrow .ace_fold {\
background-color: #4271AE;\
border-color: #4D4D4C\
}\
.ace-myTomorrow .ace_entity.ace_name.ace_function,\
.ace-myTomorrow .ace_support.ace_function,\
.ace-myTomorrow .ace_variable {\
color: #aa9900\
}\
.ace-myTomorrow .ace_support.ace_class,\
.ace-myTomorrow .ace_support.ace_type {\
color: #C99E00\
}\
.ace-myTomorrow .ace_heading,\
.ace-myTomorrow .ace_markup.ace_heading,\
.ace-myTomorrow .ace_string {\
color: #dd5533\
}\
.ace-myTomorrow .ace_entity.ace_name.ace_tag,\
.ace-myTomorrow .ace_entity.ace_other.ace_attribute-name,\
.ace-myTomorrow .ace_meta.ace_tag,\
.ace-myTomorrow .ace_string.ace_regexp,\
.ace-myTomorrow .ace_variable {\
color: #C82829\
}\
.ace-myTomorrow .ace_comment {\
color: #8E908C;\
font-style:italic\
}\
.ace-myTomorrow .ace_indent-guide {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bdu3f/BwAlfgctduB85QAAAABJRU5ErkJggg==) right repeat-y\
}";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});                (function() {
                    ace.require(["ace/theme/myTomorrow"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            