var isError = err_Top = err_Left = iCliCKWidth = iCliCKHeight = 0,overColor = '#FFFFE0',outColor = '#FFFFFF',web_address = 'http://www.bloggerads.net/',_sessionId = '240675953.foFr3aKm',_blogId = '20090103000375',_formatId = '1',_adsId = '',_ads_title = 'BloggerAds 廣告',_ads_stats = 'BloggerAds部落客廣告',_ads_readme = '更多訊息..',_fb_readme = '　',_fb_text = '分享這個廣告給更多Facebook好友',_fb_connection = 'http://author.bloggerads.net/pusher/bloggerads.aspx',iclickTimeoutHide = null,iclickHidden = true,_fb_countShow = true;function adClick(url){window.open(url);}function extraadClick(url){pasueFlash();window.open(url);}aryBloggerAds.push(new Array("20110119000002","flash","爽健QttO俏臀美人冬季美臀大作戰","性感U弧線 X SHAPE UP心機密，冬季限定睡眠專用機能美腿襪提臀型褲襪，讓妳俏臀再現","http://piccdn.bloggerads.net/BA/BA_145_120_110118_QttO.swf","http://js1.bloggerads.net/240675953.foFr3aKm/20090103000375/20110119000002/1/5405/click.aspx","145","120","","0","0","0","0","5405", "0", "0"));function dotxn() {var html;var conn = 10;var i = 0;for (var i=0; i<10; i++) {html = init();if (html.length > 0) {document.getElementById(strBody).innerHTML = html;setTimeout("BA_SyncAdImpr();", 1 * 1000);break;}}}function init() {var html = '';assignHTML(_ads_title, _ads_stats);html += strAdsHeader;for (var i=0; i < aryBloggerAds.length; i++) {html += BuildAdsArea(i, _ads_readme);}html += strAdsFooter;html += strImprDiv;return html;}function BA_SyncAdImpr() {var rt = [];var ad_area;for (var i=0; i < aryBloggerAds.length; i++) {if ((ad_area = document.getElementById('area_'+i)) != null) {rt.push(aryBloggerAds[i][13] + '=' + getAdHeight(ad_area));}}if(getPVId() == ''){syncDIV('<img src="http://js1.bloggerads.net/'+iCliCK_SD+'/20090103000375/1/' + rt.join(',') + '/impr.aspx?rdm=' + Math.random() * 5 + '" border="0" width="1" heigh="1" onError="this.width=0;this.height=0;"/>');}}setTimeout("dotxn();",100);