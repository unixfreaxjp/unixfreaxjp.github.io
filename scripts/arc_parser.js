// blogger a-kaibuno kakikomi pa-sa- (unixfreaxjp)
function archiving_jikkou(entry_subete) 
{ var entry_taitoru = new Array();var entry_url = new Array();var entry_toshi = new Array();
  var entry_gatu = new Array();var entry_hinichi = new Array();
// parser
   if("entry" in entry_subete.feed) 
    { var post_entry=entry_subete.feed.entry.length;
      for(var post_bangou=0; post_bangou < post_entry; post_bangou++) 
       { var hon_post = entry_subete.feed.entry[post_bangou];
         entry_taitoru.push(hon_post.title.$t);
         entry_toshi.push(hon_post.published.$t.substring(0,4));
         entry_gatu.push(hon_post.published.$t.substring(5,7));
         entry_hinichi.push(hon_post.published.$t.substring(8,10));
// url no seiri
         var post_url;
         for(var url_bangou=0; url_bangou < hon_post.link.length; url_bangou++) 
          { if(hon_post.link[url_bangou].rel == "alternate") 
              { post_url = hon_post.link[url_bangou].href;
                break 
              }
          } 
         entry_url.push(post_url);
       }
    }
    toc_keisan(entry_taitoru,entry_url,entry_toshi,entry_gatu,entry_hinichi);
}
// keisan
function toc_keisan(entry_taitoru,entry_url,entry_toshi,entry_gatu,entry_hinichi)
{ var tsuki=["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];
  var entry_number=entry_taitoru.length;
  var hon_getu = "";  var hon_toshi = "";
  for(var entry_bangou = 0; entry_bangou < entry_number; entry_bangou++)
    { getu_me = tsuki[parseInt(entry_gatu[entry_bangou],10)-1]
// kakikomi
      if (hon_getu != getu_me || hon_toshi != entry_toshi[entry_bangou]) 
       { hon_getu = getu_me; hon_toshi = entry_toshi[entry_bangou];
         document.write("<br><div class='dateStyle'>" +"【"+hon_toshi+"年"+" "+hon_getu+"】</div>"); 
       }
      var hinichi_parsed = parseInt(entry_hinichi[entry_bangou],10) > 9 ? "" + parseInt(entry_hinichi[entry_bangou],10): "0" + parseInt(entry_hinichi[entry_bangou],10);
       document.write("<div class='dayStyle'>" + hinichi_parsed + "日｜&nbsp;&nbsp;</div><a href='" + entry_url[entry_bangou] + "'>" + entry_taitoru[entry_bangou] + "</a><br>");
    }
}
