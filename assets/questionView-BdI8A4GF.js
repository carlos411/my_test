import{f,c as T,n as y,r as g,g as S,d as l,F as c,h as H,a as t,l as P,w as o,b as v,e as i,u as B,v as V}from"./index-BwN4AHa2.js";import{_ as u}from"./dogbox-B6x7_clU.js";import{a as e,_ as O}from"./MainHeader-vbCPyveU.js";import{_ as r}from"./DropdownMenu-BfcmTDG8.js";import{_ as x}from"./InputText-DuIRnArM.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";const E={__name:"PopUp",props:{isPopUp:{type:Boolean,required:!0}},setup(b){return(p,m)=>(f(),T(c,null,[b.isPopUp?(f(),T("div",{key:0,class:y(["popUp",{clicked:b.isPopUp}])},[g(p.$slots,"default",{},void 0,!0)],2)):S("",!0),l("div",{class:y(["popBlackCover",{clicked:b.isPopUp}])},null,2)],64))}},Q=I(E,[["__scopeId","data-v-1c3c33ed"]]),L={class:"box firstBox"},k={class:"questionContainer"},C={class:"options"},U={class:"first"},_={class:"box"},$={class:"questionContainer"},q={class:"options"},A={class:"box"},z={class:"questionContainer"},D={class:"options"},N={class:"box"},w={class:"questionContainer"},M={class:"options"},F={class:"box"},X={class:"questionContainer"},Y={class:"options date"},j={class:"birthday"},G={class:"year"},J={class:"month"},K={class:"date"},R={class:"box"},W={class:"questionContainer"},Z={class:"options"},h={class:""},ss={class:"quickLogin"},ls={class:"boxSub"},ts={class:"questionContainer"},is={class:"subBtn"},os={class:"boxSub"},es={class:"questionContainer"},ns={class:"subBtn"},as={class:"box"},ds={class:"questionContainer"},rs={class:"options date"},ps={class:"ship"},ms={class:"year"},us={class:"month"},vs={class:"date"},xs={class:"boxPayment"},bs={class:"questionContainer"},fs={class:"options"},Ts={class:"infoBox"},ys={class:"cardInfo"},cs={class:"info"},gs={class:"info"},Ss={class:"info"},Hs={class:"boxFinish"},Ps={class:"finishBox"},Bs={class:""},Vs={class:"boxFinish"},Os={class:"finishBox"},Is={class:"policy"},_s={__name:"questionView",setup(b){let p=H(!1);function m(){p.value=!p.value,p.value?document.body.classList.add("clicked"):document.body.classList.remove("clicked")}const a={menu1:{placeHolder:"我的毛孩品種是",options:[{id:0,name:"柴犬"},{id:1,name:"拉布拉多"},{id:2,name:"哈士奇"},{id:3,name:"黃金獵犬"},{id:4,name:"德國牧羊犬"},{id:5,name:"法國鬥牛犬"},{id:6,name:"貴賓犬（泰迪）"},{id:7,name:"臘腸犬"},{id:8,name:"比熊犬"},{id:9,name:"邊境牧羊犬"},{id:10,name:"雪納瑞"},{id:11,name:"西施犬"},{id:12,name:"約克夏"},{id:13,name:"柯基犬"},{id:14,name:"馬爾濟斯"},{id:15,name:"秋田犬"},{id:16,name:"松獅犬"},{id:17,name:"沙皮狗"},{id:18,name:"牛頭梗"},{id:19,name:"羅威納犬"},{id:20,name:"大丹犬"},{id:21,name:"杜賓犬"},{id:22,name:"博美犬"},{id:23,name:"喜樂蒂牧羊犬"},{id:24,name:"阿拉斯加雪橇犬"},{id:25,name:"巴哥犬"},{id:26,name:"狐狸犬"},{id:27,name:"愛斯基摩犬"},{id:28,name:"大白熊犬"},{id:29,name:"巴吉度犬"},{id:30,name:"比格犬"}]},year:{placeHolder:"年份",options:Array.from({length:21},(n,s)=>({id:s,name:`${2025-s} 年`}))},month:{placeHolder:"月份",options:Array.from({length:12},(n,s)=>({id:s+1,name:`${s+1} 月`}))},day:{placeHolder:"日期",options:Array.from({length:31},(n,s)=>({id:s+1,name:`${s+1} 日`}))},country:{placeHolder:"送貨地點",options:[{id:0,name:"台灣"},{id:1,name:"香港"},{id:2,name:"澳門"}]},shipPlace:{placeHolder:"送貨地點",options:[{id:0,name:"台灣"},{id:1,name:"香港"},{id:2,name:"澳門"}]},payment:{placeHolder:"送貨地點",options:[{id:0,name:"台灣"},{id:1,name:"香港"},{id:2,name:"澳門"}]},visaYear:{placeHolder:"年份",options:Array.from({length:21},(n,s)=>({id:s,name:`${2025-s} 年`}))},visaMonth:{placeHolder:"月份",options:Array.from({length:12},(n,s)=>({id:s+1,name:`${s+1} 月`}))}};return(n,s)=>(f(),T(c,null,[t(O,{theme:"red",bgc:""}),l("div",L,[l("div",k,[s[10]||(s[10]=l("h4",{class:"title bold"},"您的毛孩叫什麼名字？",-1)),P(l("div",C,[l("div",U,[t(x,{placeHolder:"毛孩姓名",errorMsg:"Invalid Input",modelValue:n.inputValue,"onUpdate:modelValue":s[0]||(s[0]=d=>n.inputValue=d),hasError:n.inputError},null,8,["modelValue","hasError"])]),t(e,{btnType:"form",btnStyle:"option"},{default:o(()=>s[5]||(s[5]=[i("女生 狗狗")])),_:1}),t(e,{btnType:"form",btnStyle:"option"},{default:o(()=>s[6]||(s[6]=[i("男生 狗狗")])),_:1}),t(e,{btnType:"form",btnStyle:"option"},{default:o(()=>s[7]||(s[7]=[i("女生 貓貓")])),_:1}),t(e,{btnType:"form",btnStyle:"option"},{default:o(()=>s[8]||(s[8]=[i("男生 貓貓")])),_:1})],512),[[V,!0]]),t(e,{btnType:"form",btnStyle:"nextQ"},{default:o(()=>s[9]||(s[9]=[i("下一題")])),_:1})]),s[11]||(s[11]=v('<div class="progressBarContainer"><div class="progressBar"><div class="progressSegment filled"></div><div class="progressSegment"></div><div class="progressSegment"></div><div class="progressSegment"></div><div class="progressSegment"></div><div class="progressSegment"></div><div class="progressSegment"></div><div class="progressSegment"></div><div class="progressSegment"></div></div></div>',1))]),l("div",_,[l("div",$,[s[16]||(s[16]=l("h4",{class:"title bold"},"您的毛孩是哪種體型？",-1)),l("div",q,[t(e,{btnType:"form",btnStyle:"option"},{default:o(()=>s[12]||(s[12]=[i("幼貓")])),_:1}),t(e,{btnType:"form",btnStyle:"option"},{default:o(()=>s[13]||(s[13]=[i("成貓")])),_:1})]),t(e,{btnType:"form",btnStyle:"nextQ"},{default:o(()=>s[14]||(s[14]=[i("下一題")])),_:1}),t(e,{class:"borderBottom",btnType:"form",btnStyle:"lastQ"},{default:o(()=>s[15]||(s[15]=[i("上一題")])),_:1})])]),l("div",A,[l("div",z,[s[22]||(s[22]=l("h4",{class:"title bold"},"您的毛孩是哪種體型？",-1)),l("div",D,[t(e,{btnType:"form",btnStyle:"option"},{default:o(()=>s[17]||(s[17]=[i("小型犬")])),_:1}),t(e,{btnType:"form",btnStyle:"option"},{default:o(()=>s[18]||(s[18]=[i("中型犬")])),_:1}),t(e,{btnType:"form",btnStyle:"option"},{default:o(()=>s[19]||(s[19]=[i("大型犬")])),_:1})]),t(e,{btnType:"form",btnStyle:"nextQ"},{default:o(()=>s[20]||(s[20]=[i("下一題")])),_:1}),t(e,{class:"borderBottom",btnType:"form",btnStyle:"lastQ"},{default:o(()=>s[21]||(s[21]=[i("上一題")])),_:1})])]),l("div",N,[l("div",w,[s[25]||(s[25]=l("h4",{class:"title bold"},"您的毛孩是什麼品種？",-1)),l("div",M,[t(r,{size:"large",placeHolder:a.menu1.placeHolder,options:a.menu1.options},null,8,["placeHolder","options"])]),t(e,{btnType:"form",btnStyle:"nextQ"},{default:o(()=>s[23]||(s[23]=[i("下一題")])),_:1}),t(e,{class:"borderBottom",btnType:"form",btnStyle:"lastQ"},{default:o(()=>s[24]||(s[24]=[i("上一題")])),_:1})])]),l("div",F,[l("div",X,[s[29]||(s[29]=l("h4",{class:"title bold"},"您的毛孩生日是？",-1)),l("div",Y,[s[26]||(s[26]=l("div",{class:"smallText"},[i("領養的日期也可以喔！"),l("br"),i(" 我們希望可以幫您的毛孩一起慶祝這特別的日子！")],-1)),l("div",j,[l("div",G,[t(r,{size:"large",placeHolder:a.year.placeHolder,options:a.year.options},null,8,["placeHolder","options"])]),l("div",J,[t(r,{size:"large",placeHolder:a.month.placeHolder,options:a.month.options},null,8,["placeHolder","options"])]),l("div",K,[t(r,{size:"large",placeHolder:a.day.placeHolder,options:a.day.options},null,8,["placeHolder","options"])])])]),t(e,{btnType:"form",btnStyle:"nextQ"},{default:o(()=>s[27]||(s[27]=[i("下一題")])),_:1}),t(e,{class:"borderBottom",btnType:"form",btnStyle:"lastQ"},{default:o(()=>s[28]||(s[28]=[i("上一題")])),_:1})])]),l("div",R,[l("div",W,[s[34]||(s[34]=l("h4",{class:"title bold"},"請輸入您的Email",-1)),l("div",Z,[l("div",h,[t(x,{placeHolder:"Email",errorMsg:"Invalid Input",modelValue:n.inputValue,"onUpdate:modelValue":s[1]||(s[1]=d=>n.inputValue=d),hasError:n.inputError},null,8,["modelValue","hasError"])]),l("div",ss,[s[31]||(s[31]=l("div",{class:""},"已經有帳號？",-1)),t(e,{class:"check",btnStyle:"baseline small"},{default:o(()=>s[30]||(s[30]=[i("查看")])),_:1})])]),t(e,{btnType:"form",btnStyle:"nextQ"},{default:o(()=>s[32]||(s[32]=[i("下一題")])),_:1}),t(e,{class:"borderBottom",btnType:"form",btnStyle:"lastQ"},{default:o(()=>s[33]||(s[33]=[i("上一題")])),_:1})])]),l("div",ls,[l("div",ts,[s[37]||(s[37]=v('<h4 class="title bold">為您的毛孩選擇一個方案等級</h4><div class="container"><div class="card"><div class="content"><h6 class="title">銀卡</h6><div class="boxDivider"></div><ul class="planItems"><li class="smallText">精選功能玩具 x1</li><li class="smallText">天然原肉零食 x1</li><li class="smallText">必備日用品<span class="xsText">（如便攜式飲水器或小型毛巾）</span></li></ul><ul class="planText"><li class="smallText">適合對象：</li><li class="smallText">初次體驗者，讓毛孩嘗試 Sploot Box 的基本樂趣！</li></ul></div><div class="image"><img src="'+u+'" alt=""></div></div><div class="card"><div class="content"><h6 class="title">金卡</h6><div class="boxDivider"></div><ul class="planItems"><li class="smallText">高互動功能玩具 x2</li><li class="smallText">原肉健康零食 x2</li><li class="smallText">必備日用品<span class="xsText">（如寵物洗毛精、耳朵清潔用品）</span></li><li class="smallText">免費加入會員獨享活動資格</li></ul><ul class="planText"><li class="smallText">適合對象：</li><li class="smallText">需要更多寵物用品、愛好玩具的活潑毛孩！</li></ul></div><div class="image"><img src="'+u+'" alt=""></div></div><div class="card popular"><div class="content"><h6 class="title">白金卡</h6><div class="boxDivider"></div><ul class="planItems"><li class="smallText">全套高互動玩具 x3</li><li class="smallText">豪華版原肉零食組 x3</li><li class="smallText">高級寵物日用品<span class="xsText">如牙膏牙刷組、耳護清潔液）</span></li><li class="smallText">獨家驚喜禮物 x1</li><li class="smallText red">專屬服務：免費諮詢小幫手專區</li></ul><ul class="planText"><li class="smallText">適合對象：</li><li class="smallText">追求全方位照護及豐富體驗的毛孩與飼主！</li></ul></div><div class="image"><img src="'+u+'" alt=""></div></div></div>',2)),l("div",is,[t(e,{btnType:"form",btnStyle:"nextQ"},{default:o(()=>s[35]||(s[35]=[i("下一題")])),_:1}),t(e,{class:"borderBottom",btnType:"form",btnStyle:"lastQ"},{default:o(()=>s[36]||(s[36]=[i("上一題")])),_:1})])])]),l("div",os,[l("div",es,[s[40]||(s[40]=v('<h4 class="title bold">為您的毛孩選擇一個方案等級</h4><div class="container"><div class="card"><div class="content"><h6 class="title">銀卡</h6><div class="boxDivider"></div><ul class="planItems"><li class="smallText">精選功能玩具 x1</li><li class="smallText">天然原肉零食 x1</li><li class="smallText">必備日用品<span class="xsText">（如便攜式飲水器或小型毛巾）</span></li></ul><ul class="planText"><li class="smallText">適合對象：</li><li class="smallText">初次體驗者，讓毛孩嘗試 Sploot Box 的基本樂趣！</li></ul></div><div class="image"><img src="'+u+'" alt=""></div></div><div class="card"><div class="content"><h6 class="title">金卡</h6><div class="boxDivider"></div><ul class="planItems"><li class="smallText">高互動功能玩具 x2</li><li class="smallText">原肉健康零食 x2</li><li class="smallText">必備日用品<span class="xsText">（如寵物洗毛精、耳朵清潔用品）</span></li><li class="smallText">免費加入會員獨享活動資格</li></ul><ul class="planText"><li class="smallText">適合對象：</li><li class="smallText">需要更多寵物用品、愛好玩具的活潑毛孩！</li></ul></div><div class="image"><img src="'+u+'" alt=""></div></div><div class="card popular"><div class="content"><h6 class="title">白金卡</h6><div class="boxDivider"></div><ul class="planItems"><li class="smallText">全套高互動玩具 x3</li><li class="smallText">豪華版原肉零食組 x3</li><li class="smallText">高級寵物日用品<span class="xsText">如牙膏牙刷組、耳護清潔液）</span></li><li class="smallText">獨家驚喜禮物 x1</li><li class="smallText red">專屬服務：免費諮詢小幫手專區</li></ul><ul class="planText"><li class="smallText">適合對象：</li><li class="smallText">追求全方位照護及豐富體驗的毛孩與飼主！</li></ul></div><div class="image"><img src="'+u+'" alt=""></div></div></div>',2)),l("div",ns,[t(e,{btnType:"form",btnStyle:"nextQ"},{default:o(()=>s[38]||(s[38]=[i("下一題")])),_:1}),t(e,{class:"borderBottom",btnType:"form",btnStyle:"lastQ"},{default:o(()=>s[39]||(s[39]=[i("上一題")])),_:1})])])]),l("div",as,[l("div",ds,[s[47]||(s[47]=l("h4",{class:"title bold"},"選擇付款與運送方式",-1)),l("div",rs,[l("div",ps,[s[41]||(s[41]=l("div",{class:"xsText left"},"收貨地點",-1)),l("div",ms,[t(r,{size:"large",placeHolder:a.country.placeHolder,options:a.country.options},null,8,["placeHolder","options"])]),s[42]||(s[42]=l("div",{class:"xsText left"},"取貨方式",-1)),l("div",us,[t(r,{size:"large",placeHolder:a.shipPlace.placeHolder,options:a.shipPlace.options},null,8,["placeHolder","options"])]),s[43]||(s[43]=l("div",{class:"xsText left"},"付款方式",-1)),l("div",vs,[t(r,{size:"large",placeHolder:a.payment.placeHolder,options:a.payment.options},null,8,["placeHolder","options"])]),s[44]||(s[44]=l("div",{class:"xsText"}," *目前僅提供信用卡付款",-1))])]),t(e,{btnType:"form",btnStyle:"nextQ"},{default:o(()=>s[45]||(s[45]=[i("下一題")])),_:1}),t(e,{class:"borderBottom",btnType:"form",btnStyle:"lastQ"},{default:o(()=>s[46]||(s[46]=[i("上一題")])),_:1})])]),l("div",xs,[l("div",bs,[s[55]||(s[55]=l("h4",{class:"title bold"},"完成購買程序",-1)),l("div",fs,[s[49]||(s[49]=v('<div class="paymentBox"><div class="textBox"><p>SPLOOT BOX 三個月方案 - 白金卡(Platinum)</p><p>$3,597</p></div><div class="boxDivider"></div><div class="textBox"><p>月費</p><p>$3,597</p></div><div class="boxDivider"></div><div class="textBox"><p>今日應付金額</p><p>$3,597</p></div></div>',1)),l("div",Ts,[s[48]||(s[48]=l("div",{class:"xsText left"},"信用卡付款",-1)),t(x,{textAlign:"textLeft",placeHolder:"卡號",errorMsg:"Invalid Input",modelValue:n.inputValue,"onUpdate:modelValue":s[2]||(s[2]=d=>n.inputValue=d),hasError:n.inputError},null,8,["modelValue","hasError"]),t(x,{textAlign:"textLeft",placeHolder:"持卡人姓名",errorMsg:"Invalid Input",modelValue:n.inputValue,"onUpdate:modelValue":s[3]||(s[3]=d=>n.inputValue=d),hasError:n.inputError},null,8,["modelValue","hasError"]),l("div",ys,[l("div",cs,[t(r,{size:"",placeHolder:a.visaYear.placeHolder,options:a.visaYear.options},null,8,["placeHolder","options"])]),l("div",gs,[t(r,{size:"",placeHolder:a.visaMonth.placeHolder,options:a.visaMonth.options},null,8,["placeHolder","options"])]),l("div",Ss,[t(x,{textAlign:"textLeft",placeHolder:"安全碼",errorMsg:"Invalid Input",modelValue:n.inputValue,"onUpdate:modelValue":s[4]||(s[4]=d=>n.inputValue=d),hasError:n.inputError},null,8,["modelValue","hasError"])])])])]),s[56]||(s[56]=l("ul",{class:"planItems"},[l("li",{class:"xsText"},"SHOPLINE將會使用本次交易資訊作為後續定期扣款，點擊提交即同意 《SHOPLINE Payments 支付服務條款》及《SHOPLINE Payments 隱私權政策》。"),l("li",{class:"xsText"},"本金流服務由 SHOPLINE Payments 提供，通過 PCI-DSS 國際信用卡組織最高等級認證，提供安全的交易服務，支援國內外信用卡刷卡。")],-1)),l("li",{class:"checkBox"},[l("div",{class:"boxAlign"},[s[52]||(s[52]=l("input",{type:"checkbox"},null,-1)),l("p",{class:"xsText"},[s[50]||(s[50]=i(" 我同意 ")),l("span",{class:"xsText link",onClick:m,href:""},"網站服務條款"),s[51]||(s[51]=i(" 及 ")),l("span",{class:"xsText link",onClick:m,href:""},"隱私權政策")])]),s[53]||(s[53]=v('<div class="boxAlign"><input type="checkbox"><p class="xsText">我同意成為 SPLOOT 的會員</p></div><div class="boxAlign"><input type="checkbox"><p class="xsText">我願意接收 SPLOOT 的最新消息、優惠及服務推廣相關資訊</p></div>',2))]),t(e,{btnType:"form",btnStyle:"nextQ"},{default:o(()=>s[54]||(s[54]=[i("開始訂閱SPLOOT BOX")])),_:1})])]),l("div",Hs,[l("div",Ps,[s[59]||(s[59]=l("h4",{class:"title bold"},"感謝您的訂閱",-1)),l("div",Bs,[s[58]||(s[58]=l("p",null,"您已成功訂閱SPLOOT BOX 白金卡(Platinum)三個月方案 ",-1)),t(e,{class:"padding",btnType:"form",btnStyle:"nextQ"},{default:o(()=>s[57]||(s[57]=[i("回到首頁")])),_:1})])])]),l("div",Vs,[l("div",Os,[s[61]||(s[61]=l("h4",{class:"title bold"},"感謝您的訂閱",-1)),s[62]||(s[62]=l("p",null,"您已成功訂閱SPLOOT BOX 白金卡(Platinum)三個月方案",-1)),s[63]||(s[63]=l("p",null,"請至信箱查閱訂單詳情",-1)),t(e,{class:"padding top",btnType:"form",btnStyle:"nextQ"},{default:o(()=>s[60]||(s[60]=[i("回到首頁")])),_:1})])]),s[69]||(s[69]=l("div",{class:"circleQuestion"},null,-1)),t(Q,{"is-pop-up":B(p),onToggle:m},{default:o(()=>[l("div",{class:"close",onClick:m}),l("div",Is,[s[65]||(s[65]=l("h6",null,"隱私權政策",-1)),s[66]||(s[66]=l("p",null,"在您開始使用 SPLOOT布魯家 所經營之網站之前，請詳細閱讀以下所有服務條款： 當您成為 SPLOOT布魯家 網站的會員時，即表示您已詳細閱讀、明確瞭解並同意接受本服務條款之所有內容。 若您不同意所列之服務條款，則請您立即離開此網站或者不使用任何網站之任何服務提供。 帳號\u2028當您向我們註冊新帳號時，請務必確保您所提供的資料皆是最準確、完整並且時常保持更新狀態。違反所列之條款者，將有可能導致被立即停止您的帳號以及網站所提供的所有服務。此外，在使用任何服務以及活動上，您有義務責任確保您的密碼安全、無論該密碼是透過使用我們服務而管理或者第三方服務。您必須立即通知我們，一旦您的密碼被盜用或者處於不安全狀態。 連結到其他網站\u2028我們的服務可能含有部份連結，將連結到第三方網站或者服務。該些服務將不會處於我們的控制、操作以及擁有管轄權限的範圍內，所以本網站沒有承擔任何內容、隱私政策或者任何第三方網站所提供的服務之義務責任。您同意本網站不需要承擔任何責任、因使用該第三方網站所提供之內容、服務與商品而所導致的；直接或者間接性損失與破壞。我們強烈建議您必須詳細閱讀清楚有關您所造訪的第三方網站之服務條款以及隱私政策，以確保您自身的權益。 終止服務\u2028在不需要任何事前通知以下，我們有可能隨時終止您使用我們網站服務的權限；以上終止服務決定並不需要任何理由即可即時生效，包括但不限於您違反本服務條款。終止服務適用於所有條款的規定，包括但不限於所有權規定、擔保聲明、賠款以及有限責任。在不需要任何事前通知以下，我們有可能隨時終止您所持有的登入帳號；以上終止服務決定並不需要任何理由即可即時生效，包括但不限於您違反本服務條款。一旦確定終止，您將會立即無法繼續使用所有服務。若您希望終止您的帳號，您可以隨時終止服務。終止服務適用於所有條款的規定，包括但不限於所有權規定、擔保聲明、賠款以及有限責任。 政府法律\u2028以上所有條款將會會遵從（國家之法律）無論是否其條款衝突於法律服務條款。若我們未擁有執行以上條款之部份權益，並不等同於我們放棄所有條款的執行權益。若有以上有部份條款不適用於所指定之法庭，其其他之所有條款依然有效。以上所有條款達致雙方在服務使用上的一致性同意與協議，任何事前的協議將有可能影響雙方對於以上所有服務條款的取代或者更改。 我們保留所有條款的更改、取代之權益，並所做出更改、取代之內容可自行決定。若有任何的更改涉及任何內容，我們將會嘗試提供最少30天的事前通知；該通知將會在新條款正式起效之前公布。至於任何內容的制定則由我們自行決定。若您欲繼續使用網站服務，請務必同意所有新條款；若您不同意新條款，將會要求停止使用網站所有服務。 若您有任何問題與疑慮，煩請與 SPLOOT布魯家 進行聯繫。",-1)),s[67]||(s[67]=l("h6",null,"隱私權政策",-1)),s[68]||(s[68]=l("p",null,"歡迎您使用 SPLOOT布魯家（以下簡稱「本公司」）係依據本服務條款提供 SPLOOT布魯家 (http://www.sploot.co) 服務（以下簡稱「本服務」），為了讓您能夠安心的使用本網站的各項服務與資訊，特此向您說明本網站的隱私權保護政策，以保障您的權益，請您詳閱下列內容： 一、隱私權保護政策的適用範圍 隱私權保護政策內容，包括本網站如何處理您在使用網站服務時收集到的個人識別資料。隱私權保護政策不適用於其他相關連結的網站，也不適用於非本網站所委託或參與管理的人員。 二、個人資料的蒐集、處理及利用方式 當您造訪本網站或使用本網站所提供之功能服務時，我們將視該服務功能性別，請您提供必要的個人資料，並於特定目的範圍內處理及使用您的個人資料；未經您的書面同意，將不會將個人資料用於其他用途。 本網站在您使用服務信箱、填寫問卷、參加活動時，會保存您所提供的姓名、電子郵件信箱、聯絡方式及使用時間等。 於一般瀏覽時，伺服器會自行記錄相關行為，包括您使用連線設備之IP位址、使用時間、瀏覽器及點擊紀錄等，做為我們增進網站服務的參考依據，此記錄為內部應用，決不對外公開。 三、資料之保護 本網站主機均設有防火牆、反病毒系統及其他相關的資訊安全設備及必要的安全防護措施，對於本網站及您的個人資料加以嚴格保護。 未經授權之人員不得接觸您的個人資料，且所有接觸之人員均經簽署保密契約，違反保密義務者將受到相關法律處分。",-1)),t(e,{onClick:m,class:"padding",btnType:"form",btnStyle:"nextQ"},{default:o(()=>s[64]||(s[64]=[i("同意")])),_:1})])]),_:1},8,["is-pop-up"])],64))}};export{_s as default};
