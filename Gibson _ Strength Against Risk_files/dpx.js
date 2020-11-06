var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function(win){var hostname_as_int=parseInt((location.hostname||"local").substring(0,10),36);var fn_name="sifi_att_"+hostname_as_int;if(typeof win[fn_name]!="undefined"){win[fn_name].run();return}var dpx={pixels_url:"//web.archive.org/web/20190919133802/https://i.simpli.fi/p?",pixels:[],matching_pixels:[],protocol:"https:",pixels_to_drop:[],dropping_pixels:false,rescue_pixel:null,company_id:"",run:function(){dpx.drop_pixels()},drop_pixels:function(){var sifi_pixels=[];if(!dpx.already_dropped_matching&&!dpx.url_contains_email_address()){dpx.get_matching_pixels()}else{dpx._drop_matching_pixels()}},get_matching_pixels:function(){var script=document.createElement("script");script.src=dpx.protocol+dpx.pixels_url+"cid="+dpx.company_id+"&cb="+fn_name+"._hp";document.body.appendChild(script)},_hp:function(pixels){dpx.matching_pixels=pixels&&pixels["pixels"]||[];dpx._drop_matching_pixels()},_drop_matching_pixels:function(){if(!dpx.already_dropped_matching){for(var i=dpx.matching_pixels.length-1;i>=0;i--){dpx.pixels_to_drop.push(dpx.matching_pixels[i])}dpx.already_dropped_matching=true}dpx._next_pixel()},_next_pixel:function(){if(dpx.pixels_to_drop.length===0)return;var src=dpx.pixels_to_drop.shift(),img=new Image;img.onload=img.onerror=function(){dpx.rescue_pixel=null;dpx._next_pixel()};img.src=dpx.protocol+src;dpx.rescue_pixel=setTimeout(function(){img.onload=img.onerror=null;dpx._next_pixel()},1e3)},url_contains_email_address:function(){var re=/(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;return re.test(dpx.unescaped_url())},unescaped_url:function(){var url=document.location.href;var escaped_url=decodeURIComponent(url);while(url!==escaped_url){url=escaped_url;escaped_url=decodeURIComponent(url)}return url}};win[fn_name]=dpx;if(!document.body){if(window.addEventListener){window.addEventListener("load",dpx.run,false)}else if(window.attachEvent){window.attachEvent("onload",dpx.run)}}else{dpx.run()}})(window);


}
/*
     FILE ARCHIVED ON 13:38:02 Sep 19, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:27:37 Nov 06, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots.policy: 0.19
  esindex: 0.007
  CDXLines.iter: 19.341 (3)
  PetaboxLoader3.datanode: 2213.027 (5)
  PetaboxLoader3.resolve: 497.861 (4)
  RedisCDXSource: 155.772
  captures_list: 1909.407
  exclusion.robots: 0.205
  load_resource: 1591.212 (2)
  LoadShardBlock: 1730.785 (3)
*/