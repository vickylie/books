﻿var _BlogAD_docHeight = document.documentElement.clientHeight > 0 ? document.documentElement.clientHeight : document.body.clientHeight;if(!window._BlogAD_AD_Final){}var _BlogAD_AD_Final = new Array();var _BlogAD_RichFinal = new Array();var _BlogAD_RichNowDiv;var _BlogAD_RichNowHtml = "";var _BlogAD_IsSetBoard = 0;var _BlogAD_IsNowPlayKeyAD = 0;var _BlogAD_a;var _BlogAD_bbbb;var _BlogAD_cccc;var _BlogAD_BusinessCont=0;var _BlogAD_K = 1;var _BCACount = 0;var _BlogAD_NowRich_Zone = 0;if(!window._BlogAD_RichPlay){var _BlogAD_RichPlay = 0;}if(!window._BlogAD_allreadyPlayRichMedia){var _BlogAD_allreadyPlayRichMedia = 0;}if(!window._BlogAD_JsCount){var _BlogAD_JsCount = 1;}else{_BlogAD_JsCount ++;}if(!window._BlogAD_LoadJs){var _BlogAD_LoadJs = 0;}document.write("<iframe id='BlogADIframe' style='position:absolute;width:1px;height:1px;left:-1000px;overflow:hidden'></iframe>");document.write("<img id='BlogADPic1' style='position:absolute;width:1px;height:1px;left:-10px;' />");document.write("<img id='BlogADPic2' style='position:absolute;width:1px;height:1px;left:-20px;' />");document.write("<img id='BlogADPic3' style='position:absolute;width:1px;height:1px;left:-30px;' />");document.write("<span id='BlogAD_DisplayAD_"+_BlogAD_JsCount+"'></span>");if(!window._BlogAD_FirstPlayRichMedia){var _BlogAD_FirstPlayRichMedia = 0;}var _BlogAD_Brower = "";if(navigator.userAgent.indexOf("MSIE")>0) {_BlogAD_Brower = "IE";}else{_BlogAD_Brower = "Ano";}var _BlogAD_tmpKeywordList = new Array();var _BlogAD_saveKeywordList = new Array();var _BlogAD_reportKeyword = new Array();var _BlogAD_reportClickKeyword = new Array();var _BlogAD_AD_Final = new Array();var _BlogAD_Date = new Date();if(!window._BlogAD_bodyContent){var _BlogAD_bodyContent = "";}var _BlogAD_sendUrl = "";var _BlogAD_IsSurePlayRichMedia = 0;var _BlogAD_NowUrl = location.href;if(_BlogAD_NowUrl.indexOf("http://js.wretch.yahoo.net/iframe.php") == -1){_BlogAD_IsSurePlayRichMedia = 1;_BlogAD_sendUrl = location.href;}else{_BlogAD_sendUrl = document.referrer;}var ADSpec;if(_BlogAD_BSpec == 124){ADSpec = 9;}else if(_BlogAD_BSpec == 600){ADSpec = 19;}else{ADSpec = 10;}if(_BlogAD_LoadJs == 0){if(window._BlogAD_Key_AD && _BlogAD_Key_AD.length > 0 && _BlogAD_Save_KeyList() == 1 && _BlogAD_IsNowPlayKeyAD ==0){if(_BlogAD_IsSurePlayRichMedia == 1){/*_BlogAD_Key_Onload();*/_BlogAD_AI_AD();}else{var _BlogAD_Hour = _BlogAD_Date.getHours();if(_BlogAD_Hour >=2 && _BlogAD_Hour <= 12 ){var _BlogAD_PreUrl = document.referrer;/*document.write("<script id='_BlogAD_Key' language='javascript' src='http://best.blogad.com.tw/Transfer/GetBody.aspx?U="+_BlogAD_PreUrl+"'></scr"+"ipt>");*/if(_BlogAD_CheckUrl(_BlogAD_PreUrl) == 1){_BlogAD_bodyContent = "";}else{_BlogAD_bodyContent = "";}/*_BlogAD_AI_AD();*/_BlogAD_Load();}else{_BlogAD_Load();}}}else{_BlogAD_Load();}_BlogAD_LoadJs = 1;}function _BlogAD_CheckUrl(url){var u = "http://www.wretch.cc/blog/kate81512/13279968http://www.wretch.cc/blog/sweet30ing/29920378http://www.wretch.cc/blog/sweet30ing/29920378";if(u.indexOf(url) > -1){return 1;}else{return 0;}}function _BlogAD_Save_KeyList(){var isPass = 0;for(i=0;i<_BlogAD_Key_AD.length;i++){if(_BlogAD_Key_AD[i][0] == ADSpec){_BlogAD_tmpKeywordList[_BlogAD_tmpKeywordList.length] = i;}}if(_BlogAD_tmpKeywordList.length == 0){return 0;}else{return 1;}}function _BlogAD_AI_AD(){if(_BlogAD_IsSurePlayRichMedia == 1){var tmpTime = setTimeout(function(){_BlogAD_bodyContent = document.body.innerText;_BlogAD_StartIndex();},500);}else{var sec = 1;var interval = setInterval(function() {sec ++;if (_BlogAD_bodyContent != '') {clearInterval(interval);_BlogAD_StartIndex();}else{if(sec > 200){clearInterval(interval);_BlogAD_Load();}}}, 10);}}function _BlogAD_StartIndex(){for(b=0;b<_BlogAD_tmpKeywordList.length;b++){var cont = _BlogAD_indexKeyword(_BlogAD_Key_AD[_BlogAD_tmpKeywordList[b]][3],_BlogAD_tmpKeywordList[b]);var j = _BlogAD_saveKeywordList.length; _BlogAD_saveKeywordList[j] = new Array(2);_BlogAD_saveKeywordList[j][0] = cont;_BlogAD_saveKeywordList[j][1] = _BlogAD_tmpKeywordList[b];}_BlogAD_saveKeywordList.sort(function(a, b){return a[0]-b[0];});    _BlogAD_saveKeywordList.reverse();    var ha = 0;    for(i=0;i<_BlogAD_saveKeywordList.length;i++){    var C = _BlogAD_AD_Final.length;    if(_BlogAD_saveKeywordList[i][0] >= _BlogAD_K){    var ID = _BlogAD_saveKeywordList[i][1];    _BlogAD_AD_Final[C] = new Array(4);_BlogAD_AD_Final[C][0] = _BlogAD_Key_AD[ID][1];_BlogAD_AD_Final[C][1] = _BlogAD_Key_AD[ID][2];_BlogAD_AD_Final[C][2] = 0;_BlogAD_AD_Final[C][3] = _BlogAD_Key_AD[ID][4];_BlogAD_AD_Final[C][6] = _BlogAD_Key_AD[ID][5];_BlogAD_AD_Final[C][7] = _BlogAD_Key_AD[ID][6];_BlogAD_IsNowPlayKeyAD = 1;_BlogAD_Js = 1;    ha = 1;   }    }        if(ha == 0){    _BlogAD_Load();    }else{    if(_BlogAD_AD_Final.length < 3 && _BlogAD_AD_B.length > 0){    var B_Tmp = new Array();    for(j=0;j<_BlogAD_AD_B.length ;j++){    if(_BlogAD_IsSurePlayRichMedia == 0 && _BlogAD_AD_B[j][5]){continue;}    if(_BlogAD_AD_B[j][0] == ADSpec){    B_Tmp[B_Tmp.length] = j;    }    }    if(B_Tmp.length>0){    var B_Tmp2 = _BlogAD_getRandomArray(B_Tmp,2);        for(i=0;i<2;i++){    if(B_Tmp2[i] != undefined){    C = _BlogAD_AD_Final.length;    _BlogAD_AD_Final[C] = new Array(7);_BlogAD_AD_Final[C][0] = _BlogAD_AD_B[B_Tmp[B_Tmp2[i]]][1];_BlogAD_AD_Final[C][1] = _BlogAD_AD_B[B_Tmp[B_Tmp2[i]]][2];_BlogAD_AD_Final[C][6] = _BlogAD_AD_B[B_Tmp[B_Tmp2[i]]][7];_BlogAD_AD_Final[C][7] = _BlogAD_AD_B[B_Tmp[B_Tmp2[i]]][8];if(_BlogAD_AD_B[B_Tmp[B_Tmp2[i]]][5]){_BlogAD_AD_Final[C][2] = _BlogAD_AD_B[B_Tmp[B_Tmp2[i]]][5];_BlogAD_AD_Final[C][3] = _BlogAD_AD_B[B_Tmp[B_Tmp2[i]]][6];_BlogAD_AD_Final[C][4] = _BlogAD_AD_B[B_Tmp[B_Tmp2[i]]][0];}else{_BlogAD_AD_Final[C][2] = 0;}    }}    if(_BlogAD_AD_Final.length < _BlogAD_AdCont){   _BlogAD_getFreeAD(_BlogAD_AdCont - _BlogAD_AD_Final.length);    }}else{    _BlogAD_getFreeAD(_BlogAD_AdCont-1);}}_BlogAD_ShowAD(_BlogAD_AdCont,_BlogAD_BSpec,BlogAD_C,BlogAD_BS,ID);}}function _BlogAD_indexKeyword(str,id){var resultCont = 0;var sp = str.split(',');for(i=0;i<sp.length;i++){var find = sp[i];var ssp2 = find.split(" ");var _BlogAD_Group = 1;var _BlogAD_Group_Count = new Array();for(j=0;j<ssp2.length;j++){var reg = new RegExp(ssp2[j],"g");var cont = _BlogAD_bodyContent.match(reg);_BlogAD_Group_Count[j] = cont?cont.length:0;if(_BlogAD_Group_Count[j] == 0){_BlogAD_Group = 0;}}if(_BlogAD_Group == 1){var keyCont = _BlogAD_Group_Count[0];for(n=0;n<_BlogAD_Group_Count.length;n++){if(_BlogAD_Group_Count[n] <= keyCont){keyCont = _BlogAD_Group_Count[n];}}resultCont += keyCont;if(!_BlogAD_reportKeyword[id]){_BlogAD_reportKeyword[id] = "";}_BlogAD_reportKeyword[id] += sp[i] +",";if(!_BlogAD_reportClickKeyword[id]){_BlogAD_reportClickKeyword[id] = "";} _BlogAD_reportClickKeyword[id] += sp[i] + "="+ keyCont+",";}}return resultCont;}function _BlogAD_SendSomethingBack(_url,c){if(!document.getElementById("BlogADPic1")){var BlogAD_objNode = document.body;var BlogAD_newframe = document.createElement("img");BlogAD_newframe.id = "BlogADPic1";BlogAD_newframe.style.position = "absolute";BlogAD_newframe.style.left = -1000 + "px";if(_BlogAD_Brower == "IE"){document.onreadystatechange=function(){    if(document.readyState=="complete"){        BlogAD_objNode.appendChild(BlogAD_newframe);}}}}if(!c){document.getElementById("BlogADPic1").src = _url.replace(/\&amp;/g,'&');}else{document.getElementById("BlogADPic" + c).src = _url.replace(/\&amp;/g,'&');}}function _BlogAD_reportKey(key,url,id){var _sendurl = "http://best.blogad.com.tw/Transfer/SaveClickKeywordLog.aspx?AID="+id+"&K="+escape(key)+"&U="+escape(url); _BlogAD_SendSomethingBack(_sendurl);}(function (bool) {function setInnerText(o, s) {while (o.childNodes.length != 0) {o.removeChild(o.childNodes[0]);}o.appendChild(document.createTextNode(s));}function getInnerText(o) {var sRet = "";for (var i = 0; i < o.childNodes.length; i ++) {if (o.childNodes[i].childNodes.length != 0) {sRet += getInnerText(o.childNodes[i]);}if (o.childNodes[i].nodeValue) {if (o.currentStyle.display == "block") {sRet += o.childNodes[i].nodeValue + "\n";} else {sRet += o.childNodes[i].nodeValue;}}}return sRet;}if (bool) {HTMLElement.prototype.__defineGetter__("currentStyle", function () {return this.ownerDocument.defaultView.getComputedStyle(this, null);});HTMLElement.prototype.__defineGetter__("innerText", function () {return getInnerText(this);});HTMLElement.prototype.__defineSetter__("innerText", function(s) {setInnerText(this, s);});}})(/Firefox/.test(window.navigator.userAgent));function _BlogAD_Load(){if(_BlogAD_Ft== 1 && _BlogAD_Mt== 1 && _BlogAD_Fr ==0){_BlogAD_BusinessCont = _BlogAD_getBusinessAD(_BlogAD_Btype);if(_BlogAD_BusinessCont < _BlogAD_AdCont){_BlogAD_getFreeAD(_BlogAD_AdCont-_BlogAD_BusinessCont);}}else{_BlogAD_getFreeAD(_BlogAD_AdCont);}if(_BlogAD_AD_Final.length < _BlogAD_AdCont){_BlogAD_AdCont = _BlogAD_AD_Final.length;}if(_BlogAD_AdCont == 0){}_BlogAD_ShowAD(_BlogAD_AdCont,_BlogAD_BSpec,BlogAD_C,BlogAD_BS);_BlogAD_Js = 1;}function _BlogAD_getBusinessAD(_BlogAD_Btype){var B = 0;var tmpArray = new Array();for (i=0;i<_BlogAD_Btype.length;i++){var M = ","+_BlogAD_Btype[i]+",";for(j=0;j<_BlogAD_AD_B.length ;j++){if(_BlogAD_IsSurePlayRichMedia == 0 && _BlogAD_AD_B[j][5]){continue;}var ADType = "," + _BlogAD_AD_B[j][3];if(ADType.indexOf(M)>-1 && _BlogAD_AD_B[j][0] == ADSpec){var isIntmpArray = 0;if(tmpArray.length > 0){for(k=0;k<tmpArray.length;k++){if(tmpArray[k]==j){isIntmpArray = 1;}}}B = _BlogAD_AD_Final.length;if(isIntmpArray == 0){tmpArray[tmpArray.length] = j;_BlogAD_AD_Final[B] = new Array(8);_BlogAD_AD_Final[B][0] = _BlogAD_AD_B[j][1];_BlogAD_AD_Final[B][1] = _BlogAD_AD_B[j][2];_BlogAD_AD_Final[B][6] = _BlogAD_AD_B[j][7];_BlogAD_AD_Final[B][7] = _BlogAD_AD_B[j][8];if(_BlogAD_AD_B[j][5]){_BlogAD_AD_Final[B][2] = _BlogAD_AD_B[j][5];_BlogAD_AD_Final[B][3] = _BlogAD_AD_B[j][6];_BlogAD_AD_Final[B][4] = _BlogAD_AD_B[j][0];}else{_BlogAD_AD_Final[B][2] = 0;}B ++;}}}}return B;}function _BlogAD_getFreeAD(_BlogAD_AdCont){var S = _BlogAD_AD_Final.length;var ADType;var FreeAD;if(_BlogAD_BSpec == 124){ADType = 9;FreeAD = _BlogAD_getRandomArray(_BlogAD_AD_F120,_BlogAD_AdCont);if(FreeAD.length >0){for(i=0;i<FreeAD.length;i++){_BlogAD_AD_Final[S] = new Array(2);_BlogAD_AD_Final[S][0] = _BlogAD_AD_F120[i][1];_BlogAD_AD_Final[S][1] = _BlogAD_AD_F120[i][2];_BlogAD_AD_Final[S][2] = 0;_BlogAD_AD_Final[S][6] = _BlogAD_AD_F120[i][3];_BlogAD_AD_Final[S][7] = "";S++;}}}else if(_BlogAD_BSpec == 600){ADType = 19;}else{ADType = 10;FreeAD = _BlogAD_getRandomArray(_BlogAD_AD_F160,_BlogAD_AdCont);if(FreeAD.length >0){for(i=0;i<FreeAD.length;i++){_BlogAD_AD_Final[S] = new Array(2);_BlogAD_AD_Final[S][0] = _BlogAD_AD_F160[FreeAD[i]][1];_BlogAD_AD_Final[S][1] = _BlogAD_AD_F160[FreeAD[i]][2];_BlogAD_AD_Final[S][6] = _BlogAD_AD_F160[FreeAD[i]][3];_BlogAD_AD_Final[S][7] = "";_BlogAD_AD_Final[S][2] = 0;S++;}}}}function _BlogAD_GetRichMediaList(){if(_BlogAD_AD_Final.length > 0){for(i=0;i<_BlogAD_AD_Final.length;i++){if(_BlogAD_AD_Final[i][2] && _BlogAD_AD_Final[i][4] == ADSpec){/* && _BlogAD_AD_Final[i][4] == ADSpec*/if(_BlogAD_getCookie("BlogAD_RichMedia_"+_BlogAD_AD_Final[i][3]) == null){var aa = new Array();aa[0] = i;return aa;break;}}}}else{return 'aaa';}return 'aaa';}function _BlogAD_getRandomArray(arrayName,cont,num){var it = new Array();var result = new Array();var TmpArray = new Array();if(num){TmpArray = arrayName;for(i=0;i<TmpArray.length;i++){if(i >= num){if(i < TmpArray.length-1){TmpArray[i] = TmpArray[i+1];}else{TmpArray[i] = null;}}}}else{TmpArray = arrayName;}if(TmpArray.length < cont){cont = TmpArray.length;}for(i=0;i<TmpArray.length;i++){if(TmpArray){it[i] = Math.floor((Math.random()*TmpArray.length));for(j=0;j<i;j++){if(it[j]==it[i]){i--;continue;}}}}for(k=0;k<cont;k++){result[k] = it[k];}return result;}function _BlogAD_AjaxKey(ID){if(_BlogAD_reportKeyword[ID]){_BlogAD_SendSomethingBack("http://best.blogad.com.tw/Transfer/SaveADKeyCount.aspx?AID="+_BlogAD_Key_AD[ID][4]+"&BMID="+_BlogAD_BMid+"&K="+encodeURIComponent(_BlogAD_reportKeyword[ID])+"&U="+encodeURIComponent(_BlogAD_sendUrl));_BlogAD_reportClickKeyword[20000] = _BlogAD_reportClickKeyword[ID];}}function _BlogAD_ShowAD(_BlogAD_AdCont,_BlogAD_BSpec,BlogAD_C,BlogAD_BS,ID){var K_ID = -1;var AD_List = _BlogAD_GetRichMediaList();var _BlogAD_WantFirstPlayRichmedia = 0;/* && _BlogAD_IsNowPlayKeyAD == 0*/if(_BlogAD_RichMedia == 1 && _BlogAD_allreadyPlayRichMedia == 0 & AD_List != 'aaa' & _BlogAD_IsSurePlayRichMedia == 1 && _BlogAD_AD_Final.length > 0){_BlogAD_RichID = _BlogAD_AD_Final[AD_List[0]][3];_BlogAD_allreadyPlayRichMedia = 1;_BlogAD_FirstPlayRichMedia = 1;_BlogAD_RichNowDiv = document.getElementById("BlogADADZone_" + _BlogAD_JsCount);_BlogAD_RichNowHtml = _BlogAD_AD_Final[AD_List[0]][2];_BlogAD_WantFirstPlayRichmedia = 1;if(_BlogAD_AdCont > 1){var TmpAD_List = _BlogAD_getRandomArray(_BlogAD_AD_Final,_BlogAD_AdCont-1,AD_List[0]);if(TmpAD_List.length>0){for(i=0;i<TmpAD_List.length;i++){AD_List[AD_List.length] = TmpAD_List[i];}}}}else{AD_List= _BlogAD_getRandomArray(_BlogAD_AD_Final,_BlogAD_AdCont);}var html = "";var bc_color = "";if(BlogAD_C == "B"){bc_color = "#000000";}else{bc_color = "#cccccc";}if(_BlogAD_BSpec == 180){if(_BlogAD_NowUrl.indexOf("http://js.wretch.yahoo.net/iframe.php") != -1){$.each($("a"), function(i,item){if($(item).get(0).title == ""){$(item).get(0).onclick="return false;";$(item).get(0).target="";};});}html += "<span align='"+BlogAD_BA+"' id='_BlogADBannerSpan_"+_BlogAD_JsCount+"'>";html += "<table border='0' cellpadding='0' style=\"border-collapse: collapse;background-image:url('http://blogad02.myweb.hinet.net/AdBack/180_"+BlogAD_C.toUpperCase()+"_Back.gif');\" width='180' id='BlogAD180Table' height='310'>";html += "<tr>";html += "<td height='25' style='height:25px;margin:0px;padding:0px;cursor:pointer;' onclick=\"window.open('http://www.blogad.com.tw/');\"></td>";html += "</tr>";html += "<tr>";html += "<td height='258' style='margin:0px;padding:0px;cursor:pointer;' align='center' bgcolor='"+ bc_color +"'>";html += "<table border='2' cellpadding='0' style='border-collapse: collapse;margin:0px;padding:0px;' width='176' id='BlogAD180ADZoneOut' bordercolor='"+BlogAD_getBackColor(BlogAD_C)+"'>";for(a=0;a<_BlogAD_AdCont;a++){var Tdh = "";if(a<_BlogAD_AdCont-1){Tdh = " height='256' valign='top'";}var b = a+1;var ThisAD = _BlogAD_AD_Final[AD_List[a]];html += "<tr>";html += "<td "+ Tdh +" style='margin:0px;padding:0px;cursor:pointer;'>";html += "<table border='1' cellpadding='5' style='border-style:"+BlogAD_BS+";border-collapse: collapse;margin:0px;padding:0px;' bordercolor='"+ BlogAD_BC +"' width='100%' cellspacing='0'>";html += "<tr>";html += "<td style='margin:0px;padding:0px;text-align:center;background-color:#ffffff;' align='center' height='251' bgcolor='#FFFFFF' valign='middle'>";var DivMouseOver = "";if(ThisAD[2] != 0 &&_BlogAD_IsSurePlayRichMedia == 1){_BlogAD_RichNowHtml = ThisAD[2];_BlogAD_RichID = ThisAD[3];DivMouseOver = " onmouseover=\"_BlogAD_replayAD('BlogADADZone_"+ b +"',"+ThisAD[3]+","+ b +");\" ";}if(!ThisAD[2] && ThisAD[3]){for(cc=0;cc<_BlogAD_Key_AD.length;cc++){if(_BlogAD_Key_AD[cc][4] == ThisAD[3]){K_ID = cc;}}if(K_ID != -1){_BlogAD_AjaxKey(K_ID);}}var _BlogAD_PlayTxt = "";var _BlogAD_AdHeight = 245;if(ThisAD[2] && _BlogAD_IsSurePlayRichMedia == 1){_BlogAD_PlayTxt = "<br /><a href=\"javascript:void(0);\" onmouseover=\"_BlogAD_replayAD('BlogADADZone_"+ b +"',"+ThisAD[3]+","+ b +")\">觀看動畫</a>";_BlogAD_AdHeight = 260;}html += "<div style='height:"+_BlogAD_AdHeight+"px;'><div "+ DivMouseOver + " id='BlogADADZone_"+ b +"' style='margin:2px 0px;padding:0px;font-size: 8pt'>"+BlogADCreAD(ThisAD[0],ThisAD[1],160,240,0,ID);html += _BlogAD_PlayTxt;html += "</div>";if(ThisAD[7] != ""){_BlogADFbLikeCode = "<iframe src='http://adtag.blogad.com.tw/ShowFansLike.aspx?ID="+ThisAD[6]+"' scrolling='no' frameborder='0' style='margin:0px;padding:0px;border:none; overflow:hidden; width:80px; height:21px;' allowTransparency='true'></iframe>";}else{_BlogADFbLikeCode = "<iframe src='http://www.facebook.com/plugins/like.php?href="+escape("http://www.blogad.com.tw/Transfer/TranLike.aspx?ID="+ThisAD[6]+"&M=Like")+"&amp;layout=button_count&amp;show_faces=true&amp;width=80&amp;action=like&amp;font=verdana&amp;colorscheme=light&amp;height=21' scrolling='no' frameborder='0' style='margin:0px;padding:0px;border:none; overflow:hidden; width:80px; height:21px;' allowTransparency='true'></iframe>";}html += "<div id='BlogADShareZone_"+ b +"' style='display:none;height:0px;' onmouseover=\"_BlogADShare_Like("+ b +",1,'like',0)\" onmouseout='_BlogADShare_Like("+ b +",2)'></div></div>";html += "<div style='margin:0px;padding:0px;'><span style='margin:0px;padding:0px;' onmouseover=\"_BlogADShare_Like("+ b +",1,'like',"+ThisAD[6]+")\" onmouseout='_BlogADShare_Like("+ b +",2)'>"+ _BlogADFbLikeCode +"</span>  <span style='margin:0px;padding:0px;' onmouseover=\"_BlogADShare_Like("+ b +",1,'store',"+ThisAD[6]+")\" onmouseout='_BlogADShare_Like("+ b +",2)'><iframe style='margin:0px;padding:0px;border:none; overflow:hidden; width:76px; height:21px;' src='http://adtag.blogad.com.tw/StoreBtn.aspx?ID="+ThisAD[6]+"' height='19' width='76' scrolling='no' border='0' frameborder='0'></iframe></span></div>";html += "</td></tr>";html += "</table>";html += "</td>";html += "</tr>";}html += "</table>";html += "</td>";html += "</tr>";html += "<tr>";html += "<td height='25' bgcolor='#000000' background='http://blogad02.myweb.hinet.net/AdBack/DownBack_"+BlogAD_C.toUpperCase()+".gif' style='cursor:pointer;margin:0px;padding:0px;' onclick='window.open(\"http://www.blogad.com.tw/\");'></td>";html += "</tr>";html += "</table>";html += "</span>";}else{var ThisAD = _BlogAD_AD_Final[AD_List[0]];html += "<div align='"+BlogAD_BA+"'>";html += "<table border='0' cellpadding='0' style='border-collapse: collapse;margin:0px;padding:0px;width:124px;height:284px;' width='124' id='BlogAD124Table' background='http://blogad02.myweb.hinet.net/AdBack/124_"+BlogAD_C.toUpperCase()+"_Back.gif' height='284'>";html += "<tr>";html += "<td height='22' style='cursor:pointer;margin:0px;padding:0px;' onclick='window.open(\"http://www.blogad.com.tw/\");'>";html += "</td>";html += "</tr>";html += "<tr>";html += "<td style='margin:0px;padding:0px;' height='244'>";html += "<table border='2' cellpadding='0' style='border-collapse: collapse;margin:0px;padding:0px;' width='100%' id='BlogAD124ADZone' bordercolor='"+BlogAD_getBackColor(BlogAD_C)+"' cellspacing='0'>";html += "<tr>";html += "<td style='margin:0px;padding:0px;'>";var DivMouseOver = "";if(ThisAD[2] && _BlogAD_IsSurePlayRichMedia == 1){_BlogAD_RichNowHtml = ThisAD[2];_BlogAD_RichID = ThisAD[3];DivMouseOver = " onmouseover=\"_BlogAD_replayAD('BlogADADZone_"+ _BlogAD_JsCount +"',"+ThisAD[3]+","+ _BlogAD_JsCount +");\"";}if(!ThisAD[2] && ThisAD[3]){for(cc=0;cc<_BlogAD_Key_AD.length;cc++){if(_BlogAD_Key_AD[cc][4] == ThisAD[3]){ID = cc;}}if(ID){_BlogAD_AjaxKey(ID);}}html += "<div "+ DivMouseOver +" id='BlogADADZone_"+ _BlogAD_JsCount +"' style='margin:0px;padding:0px;'>"+ BlogADCreAD(ThisAD[0],ThisAD[1],120,240,0,ID) +"</div></td>";html += "</tr>";html += "</table>";html += "</td>";html += "</tr>";html += "<tr>";html += "<td height='18' style='cursor:pointer;margin:0px;padding:0px;' onclick='window.open(\"http://www.blogad.com.tw/\");'>";html += "</td>";html += "</tr>";html += "</table>";html += "</div>";}document.getElementById("BlogAD_DisplayAD_"+_BlogAD_JsCount).innerHTML = html;if(_BlogAD_WantFirstPlayRichmedia == 1){_BlogAD_setCookie("BlogAD_RichMedia_"+_BlogAD_RichID,"1");if(_BlogAD_RichID != 3778 && _BlogAD_RichID != 3786 && _BlogAD_RichID != 3811 && _BlogAD_RichID != 3812 && _BlogAD_RichID != 3813){_BlogAD_replayAD("BlogADADZone_1",_BlogAD_RichID,1);}}if(_BlogAD_NowUrl.indexOf("http://js.wretch.yahoo.net/iframe.php") != -1){setTimeout(function(){_BlogAD_fitwindow();},2000);}}var _BlogADShareEvent = 0;var _BlogADSetTimeout;var _BlogADNowLikeNum = 0;var _BlogADNowLikeMode = 0;function _BlogADShare_Like(num,m,h,pid){var _U = "";if(h == "like"){_U = "http://www.blogad.com.tw/Transfer/ShowLike.aspx?ID="+pid;}else{_U = "http://adtag.blogad.com.tw/ShowStore.aspx?ID="+pid;}clearTimeout(_BlogADSetTimeout);_BlogADSetTimeout = setTimeout(function(){if(m == 1){if(_BlogADNowLikeNum != 0 && pid != 0){if(_BlogADNowLikeNum == num){if(_BlogADNowLikeMode != h){_BlogADShareEvent = 0;jQuery("#BlogADShareZone_"+num).hide();}}else{_BlogADShareEvent = 0;jQuery("#BlogADShareZone_"+_BlogADNowLikeNum).hide();jQuery("#BlogADADZone_"+_BlogADNowLikeNum).show("900",function(){ _BlogADShareEvent = 0});}}if(_BlogADShareEvent == 0){_BlogADNowLikeNum = num;_BlogADNowLikeMode = h;_BlogADShareEvent = 1;jQuery("#BlogADADZone_"+num).hide("900");jQuery("#BlogADShareZone_"+num).html("<iframe id='dd' name='dd' src='"+ _U +"' height='240' width='160' scrolling='no' border='0' frameborder='0'></iframe>").show("900");}}else{jQuery("#BlogADShareZone_"+num).hide();jQuery("#BlogADADZone_"+num).show("900",function(){ _BlogADShareEvent = 0});}},200);}function _BlogADKeepShareDiv(){clearTimeout(_BlogADSetTimeout);}function _BlogAD_RichSetPlay(num){if(num){_BlogAD_RichPlay = 0;}if(_BlogAD_RichPlay == 0){_BlogAD_aaa();_BlogAD_RichPlay = 1;}}function _BlogAD_replayAD(obj,num,ADZoneNum){jQuery().ready(function (){_BlogAD_NowRich_Zone = ADZoneNum;if(_BlogAD_RichPlay == 0){for(i=0;i<_BlogAD_AD_B.length;i++){if(_BlogAD_AD_B[i][6] && _BlogAD_AD_B[i][6] == num){/*_BlogAD_RichNowHtml = _BlogAD_AD_B[i][5];*/var htm = _BlogAD_AD_B[i][5];htm = htm.replace("$Link",escape(_BlogAD_AD_B[i][2]));htm = htm.replace(escape("$Link"),escape(_BlogAD_AD_B[i][2]));_BlogAD_RichNowHtml = htm;break;}}_BlogAD_RichNowDiv = document.getElementById(obj);_BlogAD_alwaysONup()}});}function _BlogAD_aaa(){jQuery("#BlogAD_Board").css({'width':'600px','height':'450px'}).html(_BlogAD_RichNowHtml);}function _BlogAD_alwaysONup(){var xy = _BlogAD_GetDomXy(_BlogAD_RichNowDiv);var xy3 = new Array(_BlogAD_RichNowDiv.offsetLeft,_BlogAD_RichNowDiv.offsetTop);var adheight = xy[1];if(_BlogAD_IsSetBoard == 0){var BlogAD_objNewDiv = document.createElement("Div");BlogAD_objNewDiv.id = "BlogAD_Board";BlogAD_objNewDiv.style.position = "absolute";BlogAD_objNewDiv.style.overflow = "hidden";BlogAD_objNewDiv.style.width = 1+ "px";BlogAD_objNewDiv.style.height = 1 + "px";BlogAD_objNewDiv.style.left = -1000 + "px";BlogAD_objNewDiv.style.top = -1000 + "px";BlogAD_objNewDiv.style.zIndex = 88888888;BlogAD_objNewDiv.style.textAlign = "right";var BlogAD_objNode = document.body;BlogAD_objNode.appendChild(BlogAD_objNewDiv);_BlogAD_IsSetBoard = 1;}var d = document.getElementById("BlogAD_Board");var xx,yy;if(xy[0]>500) {d.style.textAlign = "right";xx = xy[0]-605;yy = xy[1]+0;if(_BlogAD_RichID == 1219 || _BlogAD_RichID == 1220){_BlogAD_RichNowHtml = _BlogAD_RichNowHtml.replace("1219_M.swf","1219_R.swf");_BlogAD_RichNowHtml = _BlogAD_RichNowHtml.replace("1220_M.swf","1220_R.swf");}}else{d.style.textAlign = "left";if(_BlogAD_BSpec == 180){xx = xy[0]+180;yy = xy[1]-80;}else{xx = xy[0]+124;yy = xy[1]-80;}if(_BlogAD_RichID == 1219 || _BlogAD_RichID == 1220){_BlogAD_RichNowHtml = _BlogAD_RichNowHtml.replace("1219_M.swf","1219_L.swf");_BlogAD_RichNowHtml = _BlogAD_RichNowHtml.replace("1220_M.swf","1220_L.swf");}}d.style.left = xx + 'px';d.style.top = yy + 'px';var scrollTop = document.documentElement.scrollTop > 0 ? document.documentElement.scrollTop : document.body.scrollTop;if(adheight>scrollTop){if(adheight-scrollTop+200 < _BlogAD_docHeight && _BlogAD_RichPlay==0){_BlogAD_RichSetPlay();_BlogAD_RichPlay = 1;if(_BlogAD_getCookie("BlogAD_RichMedia_"+_BlogAD_RichID) == null){_BlogAD_setCookie("BlogAD_RichMedia_"+_BlogAD_RichID,"1");if(_BlogAD_FirstPlayRichMedia == 1){if(_BlogAD_Brower == "IE"){setTimeout("_BlogAD_HideRichAD()",4000);}else{setTimeout(_BlogAD_HideRichAD,4000);}_BlogAD_FirstPlayRichMedia = 0;}}}}if(_BlogAD_Brower == "IE"){_BlogAD_a = setTimeout("_BlogAD_alwaysONup()",200);}else{_BlogAD_a = setTimeout(_BlogAD_alwaysONup,200);}}function _BlogAD_HideRichAD(){BlogADStopTime();clearTimeout(_BlogAD_a);if(document.getElementById("BlogAD_Board").style.width == 600 + 'px'){var xy = _BlogAD_GetDomXy(_BlogAD_RichNowDiv);_BlogAD_setMotion("BlogAD_Board",1,1,xy[0]+120,xy[1]+120,5,"clear");}}function _BlogAD_setMotion(obj,w,h,x,y,t,c){jQuery("#"+obj).animate({width:w+"px",height:h+"px",left:x+"px",top:y+"px"},500,function(){jQuery("#"+obj).css({'left':'-1000px','top':'-1000px'}).html("");_BlogAD_RichPlay = 0;});}function _BlogaD_clearCreayAD(oobj){}function _BlogAD_right(str,num){return str.substr(str.length - num);}function _BlogAD_setCookie(Key,value) {var today = new Date();var expireDay = new Date();var month1 = 7*24*60*60*1000;expireDay.setTime(today.getTime() + month1);document.cookie = Key + "=" + value +";expires=" + expireDay.toGMTString();}function _BlogAD_getCookie(Key){var search = Key + "=";begin = document.cookie.indexOf(search);if (begin != -1){begin += search.length;end = document.cookie.indexOf(";",begin);if (end == -1) end = document.cookie.length;return document.cookie.substring(begin,end);}}function _BlogAD_GetDomXy(el){var ReturnValue;var xy = jQuery(el).offset();ReturnValue = [xy.left,xy.top];return ReturnValue;  }function BlogAD_getBackColor(str){if(str=="B"){return "#000000";}else{return "#e6e6e6";}}function BlogADCreAD(Url,Link,W,H,Board,ID){var BlogADZoneHtml="";var OnclickText = "";if(_BlogAD_IsNowPlayKeyAD == 1){OnclickText = "KeyG="+encodeURIComponent(_BlogAD_reportClickKeyword[20000])+"&AID="+_BlogAD_Key_AD[ID][4]+"&U="+encodeURIComponent(_BlogAD_sendUrl)+"&";}var TUrl = "";if(Url.indexOf("???") == -1){TUrl = Url;}else{var na = Url.split("???");TUrl = na[0];if(TUrl.indexOf("http://") == -1){TUrl = "http://blogad02.myweb.hinet.net/AdPic/" + TUrl;}setTimeout(function(){_BCACount ++;_BlogAD_SendSomethingBack(_BlogAD_ReplaceUrl(na[1]),_BCACount);},3000);}if(_BlogAD_right(TUrl,3)=="swf"){if(Board=="1"){BlogADZoneHtml = "<embed wmode='window' style=\"margin:0px;padding:0px;\" allowScriptAccess='always' src='"+_BlogAD_ReplaceUrl(TUrl)+"' FlashVars='"+OnclickText+"AdLink="+escape(Link)+"' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash' name='BlogAD_Banner_"+ _BlogAD_JsCount +"' id='BlogAD_Banner_"+ _BlogAD_JsCount +"' width='"+W+"' height='"+H+"' quality='High' ></embed>"; }else{BlogADZoneHtml = "<embed wmode='window' style=\"margin:0px;padding:0px;\" allowScriptAccess='always' src='"+_BlogAD_ReplaceUrl(TUrl)+"' FlashVars='"+OnclickText+"AdLink="+escape(Link)+"' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash' name='BlogAD_Banner_"+ _BlogAD_JsCount +"' id='BlogAD_Banner_"+ _BlogAD_JsCount +"' width='"+W+"' height='"+H+"' quality='High' ></embed>";}}else{if(Board=="1"){BlogADZoneHtml = "<a onmouseover=\"javascript:status='';return true;\" onmouseout=\"javascript:status='';return true;\" href='"+_BlogAD_ReplaceUrl(Link)+"' target='_blank' style='border:0px;padding:0px;margin:0px;'>";BlogADZoneHtml += "<img id='BlogAD_Banner_"+ _BlogAD_JsCount +"' border='0' style='border:0px;margin:0px;padding:0px;' src='"+_BlogAD_ReplaceUrl(TUrl)+"' width='"+W+"' height='"+H+"'></a>";}else{BlogADZoneHtml = "<a onmouseover=\"javascript:status='';return true;\" onmouseout=\"javascript:status='';return true;\" href='"+_BlogAD_ReplaceUrl(Link)+"' target='_blank' style='border:0px;padding:0px;margin:0px;'>";BlogADZoneHtml += "<img id='BlogAD_Banner_"+ _BlogAD_JsCount +"' border='0' style='border:0px;margin:0px;padding:0px;' src='"+_BlogAD_ReplaceUrl(TUrl)+"' width='"+W+"' height='"+H+"'></a>";}}return BlogADZoneHtml;}function _BlogAD_ReplaceUrl(str){var newStr = str;newStr = newStr.replace("$F_ID",_BlogAD_Fid);newStr = newStr.replace("$F_LoginName",_BlogAD_P);newStr = newStr.replace("$BM_ID",_BlogAD_BMid);return newStr;}if(!window.BlogADTime){var BlogADTime = 0;}var BlogADTimer;var BlogADIsCountTime = false;function BlogADSetStartTime(){BlogADTime ++;BlogADIsCountTime = true;if(_BlogAD_Brower == "IE"){BlogADTimer = setTimeout("BlogADSetStartTime()", 1000);}else{BlogADTimer = setTimeout(BlogADSetStartTime, 1000);}}function BlogADStopTime(){if(BlogADIsCountTime==true){clearTimeout(BlogADTimer);var url = "http://www.blogad.com.tw/Transfer/VideoTime.aspx?AID="+_BlogAD_RichID+"&Count="+BlogADTime;document.getElementById("BlogADIframe").src=url;BlogADTime = 0;BlogADIsCountTime = false;}}function _BlogAD_fitwindow(){ w=document.body.clientWidth;   h=document.body.scrollHeight+20;   window.resizeTo(w,h); }var _BlogAD_TestKeyword = new Array('kitty','kittykitty');_BlogAD_SearchK();function _BlogAD_SearchK(){var a = setTimeout(function(){var body = document.body.innerText;body = body.toLowerCase();var testStr = "";if(window._BlogAD_TestKeyword){for(i=0;i<_BlogAD_TestKeyword.length-1;i++){if(body.indexOf(_BlogAD_TestKeyword[i])>-1){testStr += _BlogAD_TestKeyword[i] + ",";}}if(testStr != ""){var ss = location.href;ss.replace("&","$");/*document.getElementById("BlogADPic").src = "http://www.blogad.com.tw/Transfer/TrackKeyword.aspx?K="+escape(testStr)+"&U="+escape(ss);*/}}},2000);}/*_BlogAD_aaa() _BlogAD_alwaysONup() _BlogAD_setMotion(obj,w,h,x,y,t,c) _BlogAD_GetDomXy(el) _BlogaD_clearCreayAD(oobj) _BlogAD_GetBoardXy*/