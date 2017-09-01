jQuery(window).load(function(){jQuery(".entry-content").fitVids();jQuery('#content-masonry').masonry({itemSelector:'article',columnWidth:'article',percentPosition:true});});jQuery(document).ready(function(){verbosa_mobilemenu_init();verbosa_initnav('#access');verbosa_initnav('#mobile-menu');jQuery('.searchform .s').focus(function(){jQuery(this).parent().addClass('focused');});jQuery('.searchform .s').blur(function(){jQuery(this).parent().removeClass('focused');});jQuery(window).scroll(function(){if(jQuery(this).scrollTop()>500){jQuery('#toTop').addClass('show2top');}
else{jQuery('#toTop').removeClass('show2top');}});jQuery(window).trigger('scroll');jQuery('#toTop').click(function(event){event.preventDefault();jQuery('html, body').animate({scrollTop:0},500);return false;});jQuery(".socials a").each(function(){jQuery(this).attr('title',jQuery(this).children().html());jQuery(this).html('');});if(navigator.userAgent.indexOf('Safari')!=-1&&navigator.userAgent.indexOf('Chrome')==-1){jQuery('body').addClass('safari');}
if(jQuery('#content-masonry').length>0){jQuery('body').addClass('with-masonry');}
jQuery('figure img').load(function(){jQuery(this).wrap(function(){return'<span class="image-wrap" />';});});});function verbosa_mobilemenu_init(){jQuery("#nav-toggle").click(function(){jQuery("#mobile-menu").show().animate({left:"0"},500);jQuery('body').addClass("noscroll");});jQuery("#nav-cancel").click(function(){jQuery("#mobile-menu").animate({left:"100%"},500,function(){jQuery(this).css("left","-100%").hide();});jQuery('body').removeClass("noscroll");});}
function verbosa_initnav(selector){container=jQuery(selector);container.find('.menu-item-has-children > a').after('<button class="dropdown-toggle" aria-expanded="false"></button>');container.find('.page_item_has_children > a').after('<button class="dropdown-toggle" aria-expanded="false"></button>');container.find('.current-menu-ancestor > button, .current-page-ancestor > button').addClass('toggle-on');container.find('.current-menu-ancestor > .sub-menu, .current-page-ancestor > .sub-menu, .current-menu-ancestor .children, .current-page-ancestor .children').show(0).addClass('toggled-on');container.find('.dropdown-toggle').click(function(e){var _this=jQuery(this);e.preventDefault();_this.toggleClass('toggle-on');if(_this.hasClass('toggle-on')){_this.next('.children, .sub-menu').show(0).addClass('toggled-on');}
else{_this.next('.children, .sub-menu').removeClass('toggled-on');}
_this.attr('aria-expanded',_this.attr('aria-expanded')==='false'?'true':'false');});};
/*!
* FitVids 1.1
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
*/
(function($){'use strict';$.fn.fitVids=function(options){var settings={customSelector:null,ignore:null};if(!document.getElementById('fit-vids-style')){var head=document.head||document.getElementsByTagName('head')[0];var css='.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';var div=document.createElement("div");div.innerHTML='<p>x</p><style id="fit-vids-style">'+css+'</style>';head.appendChild(div.childNodes[1]);}
if(options){$.extend(settings,options);}
return this.each(function(){var selectors=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]','object','embed'];if(settings.customSelector){selectors.push(settings.customSelector);}
var ignoreList='.fitvidsignore';if(settings.ignore){ignoreList=ignoreList+', '+settings.ignore;}
var $allVideos=$(this).find(selectors.join(','));$allVideos=$allVideos.not('object object');$allVideos=$allVideos.not(ignoreList);$allVideos.each(function(count){var $this=$(this);if($this.parents(ignoreList).length>0){return;}
if(this.tagName.toLowerCase()==='embed'&&$this.parent('object').length||$this.parent('.fluid-width-video-wrapper').length){return;}
if((!$this.css('height')&&!$this.css('width'))&&(isNaN($this.attr('height'))||isNaN($this.attr('width'))))
{$this.attr('height',9);$this.attr('width',16);}
var height=(this.tagName.toLowerCase()==='object'||($this.attr('height')&&!isNaN(parseInt($this.attr('height'),10))))?parseInt($this.attr('height'),10):$this.height(),width=!isNaN(parseInt($this.attr('width'),10))?parseInt($this.attr('width'),10):$this.width(),aspectRatio=height/width;if(!$this.attr('id')){var videoID='fitvid'+count;$this.attr('id',videoID);}
$this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top',(aspectRatio*100)+'%');$this.removeAttr('height').removeAttr('width');});});};})(window.jQuery||window.Zepto);function getInternetExplorerVersion()
{var rv=-1;if(navigator.appName=='Microsoft Internet Explorer')
{var ua=navigator.userAgent;var re=new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");if(re.exec(ua)!=null)
rv=parseFloat(RegExp.$1);}
return rv;};