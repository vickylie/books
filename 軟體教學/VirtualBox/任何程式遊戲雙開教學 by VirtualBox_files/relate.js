var pix=pix||{};pix.f=pix.f||{};pix.f.blog=pix.f.blog||{};pix.f.blog.relate=pix.f.blog.relate||{};(function(b,c){var a=pix.f.blog.relate;a.onscroll=function(i){var h=b(window);var g=h.scrollTop();var d=h.height();var f=g+d;b.each(a.articles,function(k,o){var n=b(o).parents(".article");var m=n.offset().top;var j=m+n.height();if(f-m>0&&g-j<0){var l=o.id.split("-");if(l.length>3&&!b(o).hasClass("show-recommend")){var p=l[1];a.showRecommend(p)}}})};a.init=function(f,e,d){a.vip=f;a.type=d;a.li_width=120;a.articles=b("#article-box div.article > .article-head > .title");a.box_width=b(".article-body:first").width();a.num=Math.max(3,Math.min(5,Math.floor(b(".article-body:first").width()/a.li_width)));a.blog_owner=a.getOwner(document.location.href);if(e||!a.isBlogPage()){b(window).scroll(this.onscroll)}};a.showRecommend=function(i){var f=new RegExp("^article-"+i+"-[0-9]-[0-9]+");var e=a.articles.filter(function(){return this.id.match(f)});e.addClass("show-recommend");var h=e.attr("id").split("-")[3];var g=e.parents(".article");var d="/blog/relate/"+i+"/"+a.num;b.get(d,function(n){g.find(".article-content:first").append(n);var j=b('<div class="recommended-posts3">');g.find(".article-content:first").append(j);var o=b(".recommended-posts3").css("display");j.remove();if(o=="none"){b(".recommended-posts").css("display","none");if(a.debug){b(".recommended-posts").css("display","block")}}if(n!==""){var l=new Image(1,1);var k=new Date();var m=-1;if(g.find(".recommended-posts1").hasClass("recommended-posts1")){m=1}else{if(g.find(".recommended-posts3").hasClass("recommended-posts3")){m=3}}l.src="http://www.pixanalytics.com/relate.gif?t=total_3&referer="+encodeURI(document.referrer)+"&vip="+a.vip+"&type="+a.type+"&display="+o+"&template="+m+"&cat="+h+"&v="+k.getTime();b(".recommended-posts > ul > li a",g).each(function(p,q){b(q).click(function(u){var t=new Image(1,1);var r=this.id==a.blog_owner?"true":"false";var s=new Date();t.src="http://www.pixanalytics.com/relate.gif?t=relate_3&referer="+encodeURI(document.referrer)+"&self="+r+"&vip="+a.vip+"&type="+a.type+"&template="+m+"&cat="+h+"&v="+s.getTime()})})}b(".recommended-posts1 > ul > li").hover(function(){var p=b(this).parents(".recommended-posts1");b("ul > li a.selected",p).removeClass("selected");b("a",this).addClass("selected");var q=b(this).attr("meta");b("img",p).attr("src",q)},function(){})})};a.getOwner=function(){return b("meta[name=author]").attr("content").match(/\((.*)\)$/)[1]};a.isBlogPage=function(){if(b("#blog-main,#category-main").length>0){return true}return false}})(jQuery);