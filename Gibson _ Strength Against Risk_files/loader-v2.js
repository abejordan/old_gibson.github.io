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

(function() {

    var __hs_cta_json = {"css":"a#cta_button_360304_93880906-c691-4dc2-b97c-ceb63d5c70b7 {\n  cursor:pointer !important; \n}\na#cta_button_360304_93880906-c691-4dc2-b97c-ceb63d5c70b7:hover {\n}\na#cta_button_360304_93880906-c691-4dc2-b97c-ceb63d5c70b7:active, #cta_button_360304_93880906-c691-4dc2-b97c-ceb63d5c70b7:active:hover {\n}\n\n","css_links":[],"image_html":"<a id=\"cta_button_360304_93880906-c691-4dc2-b97c-ceb63d5c70b7\" class=\"cta_button\" href=\"https://www.thegibsonedge.com/cs/c/?cta_guid=93880906-c691-4dc2-b97c-ceb63d5c70b7&signature=AAH58kGditCpF61WK5u_k2H2Q5VALBN5nQ&placement_guid=3dc66db9-a31d-413f-aead-68230f1a3581&click=e0810b94-49f0-4173-8a4c-c47fc30d4783&hsutk=c7a0000018ea1fad1803016d49b69361&canon=https%3A%2F%2Fwww.gibsonins.com%2F&portal_id=360304&redirect_url=APefjpHt56GovjeF47FwREdM5vAfgt39kzOulZHu3Law8rvvJRTx2dq34nY5CKy3QHb4LWe5r_NE-_SEeBUCWbzcuj2-xNGOrYwGJnj_ATyQsNyQE2UDUJkbm6oV6dHYyNoPV1C1GPJO_xuzzG7gZbjD-R-WeHd8-g\"  target=\"_blank\"  cta_dest_link=\"https://recruiting.paylocity.com/Recruiting/Jobs/List/2520\"><img id=\"hs-cta-img-3dc66db9-a31d-413f-aead-68230f1a3581\" class=\"hs-cta-img \" style=\"border-width: 0px; /*hs-extra-styles*/\" mce_noresize=\"1\" alt=\"View Openings\" src=\"http://cdn2.hubspot.net/hubshot/18/07/23/83b65cd1-8a95-4a6a-8090-f4e94b880551.png\" srcset=\"https://cdn2.hubspot.net/hubshot/18/07/23/f8fb1b11-f56c-401f-ba18-4cfb68a7b139.png 4x, https://cdn2.hubspot.net/hubshot/18/07/23/a88e53a7-8cdd-4aca-9b1e-0300791e9bc3.png 3x, https://cdn2.hubspot.net/hubshot/18/07/23/6c1609de-edf2-4201-904e-57d520a791f9.png 2x\"/></a>","is_image":false,"placement_element_class":"hs-cta-3dc66db9-a31d-413f-aead-68230f1a3581","raw_html":"<a id=\"cta_button_360304_93880906-c691-4dc2-b97c-ceb63d5c70b7\" class=\"cta_button \" href=\"https://www.thegibsonedge.com/cs/c/?cta_guid=93880906-c691-4dc2-b97c-ceb63d5c70b7&signature=AAH58kGditCpF61WK5u_k2H2Q5VALBN5nQ&placement_guid=3dc66db9-a31d-413f-aead-68230f1a3581&click=e0810b94-49f0-4173-8a4c-c47fc30d4783&hsutk=c7a0000018ea1fad1803016d49b69361&canon=https%3A%2F%2Fwww.gibsonins.com%2F&portal_id=360304&redirect_url=APefjpHt56GovjeF47FwREdM5vAfgt39kzOulZHu3Law8rvvJRTx2dq34nY5CKy3QHb4LWe5r_NE-_SEeBUCWbzcuj2-xNGOrYwGJnj_ATyQsNyQE2UDUJkbm6oV6dHYyNoPV1C1GPJO_xuzzG7gZbjD-R-WeHd8-g\" target=\"_blank\" style=\"/*hs-extra-styles*/\" cta_dest_link=\"https://recruiting.paylocity.com/Recruiting/Jobs/List/2520\" title=\"View Openings\">View Openings</a>"};
    var __hs_cta = {};

    __hs_cta.drop = function() {
        var is_legacy = document.getElementById('hs-cta-ie-element') && true || false,
            html = __hs_cta_json.image_html,
            tags = __hs_cta.getTags(),
            is_image = __hs_cta_json.is_image,
            parent, _style;

        if (!is_legacy && !is_image) {
            parent = (document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]);

            _style = document.createElement('style');
            parent.insertBefore(_style, parent.childNodes[0]);
            try {
                default_css = ".hs-cta-wrapper p, .hs-cta-wrapper div { margin: 0; padding: 0; }";
                cta_css = default_css + " " + __hs_cta_json.css;
                // http://blog.coderlab.us/2005/09/22/using-the-innertext-property-with-firefox/
                _style[document.all ? 'innerText' : 'textContent'] = cta_css;
            } catch (e) {
                // addressing an ie9 issue
                _style.styleSheet.cssText = cta_css;
            }
            
            html = __hs_cta_json.raw_html;

        }
         

        for (var i = 0; i < tags.length; ++i) {

            var tag = tags[i];
            var images = tag.getElementsByTagName('img');
            var cssText = "";
            var align = "";
            for (var j = 0; j < images.length; j++) {
                align = images[j].align;
                images[j].style.border = '';
                images[j].style.display = '';
                cssText = images[j].style.cssText;
            }

            if (align == "right") {
                tag.style.display = "block";
                tag.style.textAlign = "right";
            } else if (align == "middle") {
                tag.style.display = "block";
                tag.style.textAlign = "center";
            }

            tag.innerHTML = html.replace('/*hs-extra-styles*/', cssText);
            tag.style.visibility = 'visible';
            tag.setAttribute('data-hs-drop', 'true');
            window.hbspt && hbspt.cta && hbspt.cta.afterLoad && hbspt.cta.afterLoad('3dc66db9-a31d-413f-aead-68230f1a3581');
        }

        return tags;
    };

    __hs_cta.getTags = function() {
        var allTags, check, i, divTags, spanTags,
            tags = [];
            if (document.getElementsByClassName) {
                allTags = document.getElementsByClassName(__hs_cta_json.placement_element_class);
                check = function(ele) {
                    return (ele.nodeName == 'DIV' || ele.nodeName == 'SPAN') && (!ele.getAttribute('data-hs-drop'));
                };
            } else {
                allTags = [];
                divTags = document.getElementsByTagName("div");
                spanTags = document.getElementsByTagName("span");
                for (i = 0; i < spanTags.length; i++) {
                    allTags.push(spanTags[i]);
                }
                for (i = 0; i < divTags.length; i++) {
                    allTags.push(divTags[i]);
                }

                check = function(ele) {
                    return (ele.className.indexOf(__hs_cta_json.placement_element_class) > -1) && (!ele.getAttribute('data-hs-drop'));
                };
            }
            for (i = 0; i < allTags.length; ++i) {
                if (check(allTags[i])) {
                    tags.push(allTags[i]);
                }
            }
        return tags;
    };

    // need to do a slight timeout so IE has time to react
    setTimeout(__hs_cta.drop, 10);
    
    window._hsq = window._hsq || [];
    window._hsq.push(['trackCtaView', '3dc66db9-a31d-413f-aead-68230f1a3581', '93880906-c691-4dc2-b97c-ceb63d5c70b7']);
    

}());


}
/*
     FILE ARCHIVED ON 17:27:39 Nov 06, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:27:52 Nov 06, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  load_resource: 240.849
  PetaboxLoader3.resolve: 260.909 (2)
  RedisCDXSource: 0.7
  esindex: 0.016
  PetaboxLoader3.datanode: 1527.915 (3)
  LoadShardBlock: 1843.46 (3)
  exclusion.robots.policy: 0.14
  exclusion.robots: 0.151
  captures_list: 1873.902
  CDXLines.iter: 25.509 (3)
*/