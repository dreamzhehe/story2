window.wp=window.wp||{},function(a,b){function c(){function c(){!j&&window.tinymce&&(j=window.tinymce,k=j.$,k(document).on("click",function(a){var b,c,d=k(a.target);d.hasClass("wp-switch-editor")&&(b=d.attr("data-wp-editor-id"),c=d.hasClass("switch-tmce")?"tmce":"html",e(b,c))}))}function d(a){var b=k(".mce-toolbar-grp",a.getContainer())[0],c=b&&b.clientHeight;return c&&c>10&&c<200?parseInt(c,10):30}function e(a,b){a=a||"content",b=b||"toggle";var c,e,f,g=j.get(a),h=k("#wp-"+a+"-wrap"),i=k("#"+a),l=i[0];if("toggle"===b&&(b=g&&!g.isHidden()?"html":"tmce"),"tmce"===b||"tinymce"===b){if(g&&!g.isHidden())return!1;"undefined"!=typeof window.QTags&&window.QTags.closeAllTags(a),c=parseInt(l.style.height,10)||0,g?(g.show(),!j.Env.iOS&&c&&(e=d(g),c=c-e+14,c>50&&c<5e3&&g.theme.resizeTo(null,c))):j.init(window.tinyMCEPreInit.mceInit[a]),h.removeClass("html-active").addClass("tmce-active"),i.attr("aria-hidden",!0),window.setUserSetting("editor","tinymce")}else if("html"===b){if(g&&g.isHidden())return!1;g?(j.Env.iOS||(f=g.iframeElement,c=f?parseInt(f.style.height,10):0,c&&(e=d(g),c=c+e-14,c>50&&c<5e3&&(l.style.height=c+"px"))),g.hide()):i.css({display:"",visibility:""}),h.removeClass("tmce-active").addClass("html-active"),i.attr("aria-hidden",!1),window.setUserSetting("editor","html")}}function f(a){var b="blockquote|ul|ol|li|dl|dt|dd|table|thead|tbody|tfoot|tr|th|td|h[1-6]|fieldset|figure",c=b+"|div|p",d=b+"|pre",e=!1,f=!1,g=[];return a?(a.indexOf("<script")===-1&&a.indexOf("<style")===-1||(a=a.replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/g,function(a){return g.push(a),"<wp-preserve>"})),a.indexOf("<pre")!==-1&&(e=!0,a=a.replace(/<pre[^>]*>[\s\S]+?<\/pre>/g,function(a){return a=a.replace(/<br ?\/?>(\r\n|\n)?/g,"<wp-line-break>"),a=a.replace(/<\/?p( [^>]*)?>(\r\n|\n)?/g,"<wp-line-break>"),a.replace(/\r?\n/g,"<wp-line-break>")})),a.indexOf("[caption")!==-1&&(f=!0,a=a.replace(/\[caption[\s\S]+?\[\/caption\]/g,function(a){return a.replace(/<br([^>]*)>/g,"<wp-temp-br$1>").replace(/[\r\n\t]+/,"")})),a=a.replace(new RegExp("\\s*</("+c+")>\\s*","g"),"</$1>\n"),a=a.replace(new RegExp("\\s*<((?:"+c+")(?: [^>]*)?)>","g"),"\n<$1>"),a=a.replace(/(<p [^>]+>.*?)<\/p>/g,"$1</p#>"),a=a.replace(/<div( [^>]*)?>\s*<p>/gi,"<div$1>\n\n"),a=a.replace(/\s*<p>/gi,""),a=a.replace(/\s*<\/p>\s*/gi,"\n\n"),a=a.replace(/\n[\s\u00a0]+\n/g,"\n\n"),a=a.replace(/(\s*)<br ?\/?>\s*/gi,function(a,b){return b&&b.indexOf("\n")!==-1?"\n\n":"\n"}),a=a.replace(/\s*<div/g,"\n<div"),a=a.replace(/<\/div>\s*/g,"</div>\n"),a=a.replace(/\s*\[caption([^\[]+)\[\/caption\]\s*/gi,"\n\n[caption$1[/caption]\n\n"),a=a.replace(/caption\]\n\n+\[caption/g,"caption]\n\n[caption"),a=a.replace(new RegExp("\\s*<((?:"+d+")(?: [^>]*)?)\\s*>","g"),"\n<$1>"),a=a.replace(new RegExp("\\s*</("+d+")>\\s*","g"),"</$1>\n"),a=a.replace(/<((li|dt|dd)[^>]*)>/g," \t<$1>"),a.indexOf("<option")!==-1&&(a=a.replace(/\s*<option/g,"\n<option"),a=a.replace(/\s*<\/select>/g,"\n</select>")),a.indexOf("<hr")!==-1&&(a=a.replace(/\s*<hr( [^>]*)?>\s*/g,"\n\n<hr$1>\n\n")),a.indexOf("<object")!==-1&&(a=a.replace(/<object[\s\S]+?<\/object>/g,function(a){return a.replace(/[\r\n]+/g,"")})),a=a.replace(/<\/p#>/g,"</p>\n"),a=a.replace(/\s*(<p [^>]+>[\s\S]*?<\/p>)/g,"\n$1"),a=a.replace(/^\s+/,""),a=a.replace(/[\s\u00a0]+$/,""),e&&(a=a.replace(/<wp-line-break>/g,"\n")),f&&(a=a.replace(/<wp-temp-br([^>]*)>/g,"<br$1>")),g.length&&(a=a.replace(/<wp-preserve>/g,function(){return g.shift()})),a):""}function g(a){var b=!1,c=!1,d="table|thead|tfoot|caption|col|colgroup|tbody|tr|td|th|div|dl|dd|dt|ul|ol|li|pre|form|map|area|blockquote|address|math|style|p|h[1-6]|hr|fieldset|legend|section|article|aside|hgroup|header|footer|nav|figure|figcaption|details|menu|summary";return a=a.replace(/\r\n|\r/g,"\n"),a.indexOf("\n")===-1?a:(a.indexOf("<object")!==-1&&(a=a.replace(/<object[\s\S]+?<\/object>/g,function(a){return a.replace(/\n+/g,"")})),a=a.replace(/<[^<>]+>/g,function(a){return a.replace(/[\n\t ]+/g," ")}),a.indexOf("<pre")===-1&&a.indexOf("<script")===-1||(b=!0,a=a.replace(/<(pre|script)[^>]*>[\s\S]*?<\/\1>/g,function(a){return a.replace(/\n/g,"<wp-line-break>")})),a.indexOf("<figcaption")!==-1&&(a=a.replace(/\s*(<figcaption[^>]*>)/g,"$1"),a=a.replace(/<\/figcaption>\s*/g,"</figcaption>")),a.indexOf("[caption")!==-1&&(c=!0,a=a.replace(/\[caption[\s\S]+?\[\/caption\]/g,function(a){return a=a.replace(/<br([^>]*)>/g,"<wp-temp-br$1>"),a=a.replace(/<[^<>]+>/g,function(a){return a.replace(/[\n\t ]+/," ")}),a.replace(/\s*\n\s*/g,"<wp-temp-br />")})),a+="\n\n",a=a.replace(/<br \/>\s*<br \/>/gi,"\n\n"),a=a.replace(new RegExp("(<(?:"+d+")(?: [^>]*)?>)","gi"),"\n\n$1"),a=a.replace(new RegExp("(</(?:"+d+")>)","gi"),"$1\n\n"),a=a.replace(/<hr( [^>]*)?>/gi,"<hr$1>\n\n"),a=a.replace(/\s*<option/gi,"<option"),a=a.replace(/<\/option>\s*/gi,"</option>"),a=a.replace(/\n\s*\n+/g,"\n\n"),a=a.replace(/([\s\S]+?)\n\n/g,"<p>$1</p>\n"),a=a.replace(/<p>\s*?<\/p>/gi,""),a=a.replace(new RegExp("<p>\\s*(</?(?:"+d+")(?: [^>]*)?>)\\s*</p>","gi"),"$1"),a=a.replace(/<p>(<li.+?)<\/p>/gi,"$1"),a=a.replace(/<p>\s*<blockquote([^>]*)>/gi,"<blockquote$1><p>"),a=a.replace(/<\/blockquote>\s*<\/p>/gi,"</p></blockquote>"),a=a.replace(new RegExp("<p>\\s*(</?(?:"+d+")(?: [^>]*)?>)","gi"),"$1"),a=a.replace(new RegExp("(</?(?:"+d+")(?: [^>]*)?>)\\s*</p>","gi"),"$1"),a=a.replace(/(<br[^>]*>)\s*\n/gi,"$1"),a=a.replace(/\s*\n/g,"<br />\n"),a=a.replace(new RegExp("(</?(?:"+d+")[^>]*>)\\s*<br />","gi"),"$1"),a=a.replace(/<br \/>(\s*<\/?(?:p|li|div|dl|dd|dt|th|pre|td|ul|ol)>)/gi,"$1"),a=a.replace(/(?:<p>|<br ?\/?>)*\s*\[caption([^\[]+)\[\/caption\]\s*(?:<\/p>|<br ?\/?>)*/gi,"[caption$1[/caption]"),a=a.replace(/(<(?:div|th|td|form|fieldset|dd)[^>]*>)(.*?)<\/p>/g,function(a,b,c){return c.match(/<p( [^>]*)?>/)?a:b+"<p>"+c+"</p>"}),b&&(a=a.replace(/<wp-line-break>/g,"\n")),c&&(a=a.replace(/<wp-temp-br([^>]*)>/g,"<br$1>")),a)}function h(b){var c={o:l,data:b,unfiltered:b};return a&&a("body").trigger("beforePreWpautop",[c]),c.data=f(c.data),a&&a("body").trigger("afterPreWpautop",[c]),c.data}function i(b){var c={o:l,data:b,unfiltered:b};return a&&a("body").trigger("beforeWpautop",[c]),c.data=g(c.data),a&&a("body").trigger("afterWpautop",[c]),c.data}var j,k,l={};return a?a(document).ready(c):document.addEventListener?(document.addEventListener("DOMContentLoaded",c,!1),window.addEventListener("load",c,!1)):window.attachEvent&&(window.attachEvent("onload",c),document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&c()})),b.editor.autop=i,b.editor.removep=h,l={go:e,wpautop:i,pre_wpautop:h,_wp_Autop:g,_wp_Nop:f}}b.editor=b.editor||{},window.switchEditors=new c,b.editor.initialize=function(c,d){var e,f;if(a&&c&&b.editor.getDefaultSettings){if(f=b.editor.getDefaultSettings(),d||(d={tinymce:!0}),d.tinymce&&d.quicktags){var g=a("#"+c),h=a("<div>").attr({"class":"wp-core-ui wp-editor-wrap tmce-active",id:"wp-"+c+"-wrap"}),i=a('<div class="wp-editor-container">'),j=a("<button>").attr({type:"button","data-wp-editor-id":c});h.append(a('<div class="wp-editor-tools">').append(a('<div class="wp-editor-tabs">').append(j.clone().attr({id:c+"-tmce","class":"wp-switch-editor switch-tmce"}).text(window.tinymce.translate("Visual"))).append(j.attr({id:c+"-html","class":"wp-switch-editor switch-html"}).text(window.tinymce.translate("Text")))).append(i)),g.after(h),i.append(g)}window.tinymce&&d.tinymce&&("object"!=typeof d.tinymce&&(d.tinymce={}),e=a.extend({},f.tinymce,d.tinymce),e.selector="#"+c,a(document).trigger("wp-before-tinymce-init",e),window.tinymce.init(e),window.wpActiveEditor||(window.wpActiveEditor=c)),window.quicktags&&d.quicktags&&("object"!=typeof d.quicktags&&(d.quicktags={}),e=a.extend({},f.quicktags,d.quicktags),e.id=c,a(document).trigger("wp-before-quicktags-init",e),window.quicktags(e),window.wpActiveEditor||(window.wpActiveEditor=e.id))}},b.editor.remove=function(b){var c,d,e=a("#wp-"+b+"-wrap");window.tinymce&&(c=window.tinymce.get(b),c&&(c.isHidden()||c.save(),c.remove())),window.quicktags&&(d=window.QTags.getInstance(b),d&&d.remove()),e.length&&(e.after(a("#"+b)),e.remove())},b.editor.getContent=function(b){var c;if(a&&b)return window.tinymce&&(c=window.tinymce.get(b),c&&!c.isHidden()&&c.save()),a("#"+b).val()}}(window.jQuery,window.wp);