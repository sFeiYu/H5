var u = navigator.userAgent,
    app = navigator.appVersion;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
//if(!isAndroid&&!isiOS){
//window.location.href="../error.html";
//}
var isWK = getQueryString("isWK");



function jumptoApp(cmd, parameter1, Title, Content, ShareUrl, ShareImageUrl, ShareType) {
	if (isiOS) {
		cmd = trim(cmd);
		
		if (isWK != null) {
			switch (cmd) {
				case "InviteFriends":
					window.webkit.messageHandlers.InviteFriends.postMessage(null);
					break;
				case "InviteByQr":
					window.webkit.messageHandlers.InviteByQr.postMessage(null);
					break;
				case "InvitedPeople":
					window.webkit.messageHandlers.InvitedPeople.postMessage(null);
					break;
				case "MyWallet":
					window.webkit.messageHandlers.MyWallet.postMessage(null);
					break;
				case "PersonalCredit":
					window.webkit.messageHandlers.PersonalCredit.postMessage(null);
					break;
				case "MakeMoney":
					window.webkit.messageHandlers.MakeMoney.postMessage(null);
					break;
				case "Feedback":
					window.webkit.messageHandlers.Feedback.postMessage(null);
					break;
				case "ProvidechatComment":
					window.webkit.messageHandlers.ProvidechatComment.postMessage(null);
					break;
				case "DynamicPublish":
					window.webkit.messageHandlers.DynamicPublish.postMessage(null);
					break;
				case "Mine":
					window.webkit.messageHandlers.Mine.postMessage(null);
					break;
				case "ProvidechatPublish":
					window.webkit.messageHandlers.ProvidechatPublish.postMessage(null);
					break;
				case "MemberCertificate":
					window.webkit.messageHandlers.MemberCertificate.postMessage(null);
					break;
				case "TaskDeal":
					window.webkit.messageHandlers.TaskDeal.postMessage(parameter1);
					break;
				case "BindingTel":
					window.webkit.messageHandlers.BindingTel.postMessage(null);
					break;
				case "BindingWeChat":
					window.webkit.messageHandlers.BindingWeChat.postMessage(null);
					break;
				case "BindingQQ":
					window.webkit.messageHandlers.BindingQQ.postMessage(null);
					break;
				case "HomepageHot":
					window.webkit.messageHandlers.HomepageHot.postMessage(null);
					break;
				case "MemberCertificateAudit":
					window.webkit.messageHandlers.MemberCertificateAudit.postMessage(null);
					break;
				case "BuyVIP":
					window.webkit.messageHandlers.BuyVIP.postMessage(null);
					break;
				case "HonorApply":
					window.webkit.messageHandlers.HonorApply.postMessage(null);
					break;
				case "HonorApplySubmit":
					window.webkit.messageHandlers.HonorApplySubmit.postMessage(null);
					break;
				case "HonorApplySubmitNew":
					window.webkit.messageHandlers.HonorApplySubmit.postMessage(parameter1);
					break;
				case "ProvideChatHall":
					window.webkit.messageHandlers.ProvideChatHall.postMessage(null);
					break;
				case "ConsumeChatHall":
					window.webkit.messageHandlers.ConsumeChatHall.postMessage(null);
					break;
				case "AcquireChatHall":
					window.webkit.messageHandlers.AcquireChatHall.postMessage(null);
					break;
				case "Recharge":
					window.webkit.messageHandlers.Recharge.postMessage(null);
					break;
				case "RankList":
					window.webkit.messageHandlers.RankList.postMessage(null);
					break;
				case "PersonalPage":
					window.webkit.messageHandlers.PersonalPage.postMessage(null);
					break;
				case "BuyVIPPopup":
					window.webkit.messageHandlers.BuyVIPPopup.postMessage(null);
					break;
				case "H5SharePopup":
					window.webkit.messageHandlers.H5SharePopup.postMessage({ "Title": Title, "Content": Content, "ShareUrl": ShareUrl, "ShareImageUrl":ShareImageUrl});
					break;
				case "MemberPage":
					window.webkit.messageHandlers.MemberPage.postMessage(parameter1);
					break;
				case "MyInvitedList":
					window.webkit.messageHandlers.MyInvitedList.postMessage(null);
					break;
				case "DoInvited":
					window.webkit.messageHandlers.DoInvited.postMessage(null);
					break;
				case "InviteToShare":
					window.webkit.messageHandlers.InviteToShare.postMessage(parameter1);
					break;
				case "InviteToShareV1":
					window.webkit.messageHandlers.InviteToShareV1.postMessage(parameter1);
					break;
				case "InviteToAwardList":
					window.webkit.messageHandlers.InviteToAwardList.postMessage(parameter1);
					break;
				case "InviteToAwardListV1":
					window.webkit.messageHandlers.InviteToAwardListV1.postMessage(null);
					break;
				case "InviteToWithdraw":
					window.webkit.messageHandlers.InviteToWithdraw.postMessage(null);
					break;
				case "InviteToConvert":
					window.webkit.messageHandlers.InviteToConvert.postMessage(null);
					break;
				case "H5SharePopupNew":
					window.webkit.messageHandlers.H5SharePopupNew.postMessage({ "ShareType": ShareType, "Title": Title, "Content": Content, "ShareUrl": ShareUrl, "ShareImageUrl": ShareImageUrl });
					break;
				case "RechargePopup":
					window.webkit.messageHandlers.RechargePopup.postMessage(null);
			
					break;
				case "GetHelpFinish":
					var t = window.webkit.messageHandlers.GetHelpFinish.postMessage(parameter1);
					//return t;
					break;
				case "ReadImgData":
					window.webkit.messageHandlers.ReadImgData.postMessage(parameter1);
					//return appdata;
					break;
				case "WriterImgData":
					var data = parameter1;
					var jsonStrdata = JSON.stringify(parameter1);
					window.webkit.messageHandlers.WriterImgData.postMessage({ "imgdata": jsonStrdata, "Title": Title});
					data = null;
					jsonStrdata = null;
					
					break;
			}
		}
		else {

			switch (cmd) {
				case "InviteFriends":
					InviteFriends();
					break;
				case "InviteByQr":
					InviteByQr();
					break;
				case "InvitedPeople":
					InvitedPeople();
					break;
				case "MyWallet":
					MyWallet();
					break;
				case "PersonalCredit":
					PersonalCredit();
					break;
				case "MakeMoney":
					MakeMoney();
					break;
				case "Feedback":
					Feedback();
					break;
				case "ProvidechatComment":
					ProvidechatComment();
					break;
				case "DynamicPublish":
					DynamicPublish();
					break;
				case "Mine":
					Mine();
					break;
				case "ProvidechatPublish":
					ProvidechatPublish();
					break;
				case "MemberCertificate":
					MemberCertificate();
					break;
				case "TaskDeal":
					TaskDeal(parameter1);
					break;
				case "BindingTel":
					BindingTel();
					break;
				case "BindingWeChat":
					BindingWeChat();
					break;
				case "BindingQQ":
					BindingQQ();
					break;
				case "HomepageHot":
					HomepageHot();
					break;
				case "MemberCertificateAudit":
					MemberCertificateAudit();
					break;
				case "BuyVIP":
					BuyVIP();
					break;
				case "HonorApply":
					HonorApply();
					break;
				case "HonorApplySubmit":
					HonorApplySubmit();
					break;
				case "HonorApplySubmitNew":
					HonorApplySubmit(parameter1);
					break;
				case "ProvideChatHall":
					ProvideChatHall();
					break;
				case "ConsumeChatHall":
					ConsumeChatHall();
					break;
				case "AcquireChatHall":
					AcquireChatHall();
					break;
				case "Recharge":
					Recharge();
					break;
				case "RankList":
					RankList();
					break;
				case "PersonalPage":
					PersonalPage();
					break;
				case "BuyVIPPopup":
					BuyVIPPopup();
					break;
				case "H5SharePopup":
					H5SharePopup(Title, Content, ShareUrl, ShareImageUrl);
					break;
				case "MemberPage":
					MemberPage(parameter1);
					break;
				case "MyInvitedList":
					MyInvitedList();
					break;
				case "DoInvited":
					DoInvited();
					break;
				case "InviteToShare":
					InviteToShare(parameter1);
					break;
				case "InviteToShareV1":
					InviteToShareV1(parameter1);
					break;
				case "InviteToAwardList":
					InviteToAwardList(parameter1);
					break;
				case "InviteToAwardListV1":
					InviteToAwardListV1();
					break;
				case "InviteToWithdraw":
					InviteToWithdraw();
					break;
				case "InviteToConvert":
					InviteToConvert();
					break;
				case "H5SharePopupNew":
					H5SharePopupNew(ShareType, Title, Content, ShareUrl, ShareImageUrl);
					break;
				case "RechargePopup":
					RechargePopup();
					break;
				case "GetHelpFinish":
					var t = GetHelpFinish(parameter1);
					return t;
					break;
				case "ReadImgData":
					var appdata = ReadImgData(parameter1);
					return appdata;
					break;
				case "WriterImgData":
					WriterImgData(parameter1);
					break;
			}
		}

      
       
    }
    if (isAndroid) {
        cmd = trim(cmd);
        switch (cmd) {
            case "InviteFriends":
                window.jumpjava.InviteFriends();
                break;
            case "InviteByQr":
                window.jumpjava.InviteByQr();
                break;
            case "InvitedPeople":
                window.jumpjava.InvitedPeople();
                break;
            case "MyWallet":
                window.jumpjava.MyWallet();
                break;
            case "PersonalCredit":
                window.jumpjava.PersonalCredit();
                break;
            case "MakeMoney":
                window.jumpjava.MakeMoney();
                break;
            case "Feedback":
                window.jumpjava.Feedback();
                break;
            case "ProvidechatComment":
                window.jumpjava.ProvidechatComment();
                break;
            case "DynamicPublish":
                window.jumpjava.DynamicPublish();
                break;
            case "Mine":
                window.jumpjava.Mine();
                break;
            case "ProvidechatPublish":
                window.jumpjava.ProvidechatPublish();
                break;
            case "MemberCertificate":
                window.jumpjava.MemberCertificate();
                break;
            case "TaskDeal":
                window.jumpjava.TaskDeal(parameter1);
                break;
            case "BindingTel":
                window.jumpjava.BindingTel();
                break;
            case "BindingWeChat":
                window.jumpjava.BindingWeChat();
                break;
            case "BindingQQ":
                window.jumpjava.BindingQQ();
                break;
            case "HomepageHot":
                window.jumpjava.HomepageHot();
                break;
            case "MemberCertificateAudit":
                window.jumpjava.MemberCertificateAudit();
                break;
            case "BuyVIP":
                window.jumpjava.BuyVIP();
                break;
            case "HonorApply":
                window.jumpjava.HonorApply();
                break;
            case "ProvideChatHall":
                window.jumpjava.ProvideChatHall();
                break;
            case "ConsumeChatHall":
                window.jumpjava.ConsumeChatHall();
                break;
            case "AcquireChatHall":
                window.jumpjava.AcquireChatHall();
                break;
            case "Recharge":
                window.jumpjava.Recharge();
                break;
            case "RankList":
                window.jumpjava.RankList();
                break;
            case "PersonalPage":
                window.jumpjava.PersonalPage();
                break;
            case "BuyVIPPopup":
                window.jumpjava.BuyVIPPopup();
                break;
            case "HonorApplySubmit":
                window.jumpjava.HonorApplySubmit();
                break;
            case "HonorApplySubmitNew":
                window.jumpjava.HonorApplySubmit(parameter1);
                break;
            case "H5SharePopup":
                window.jumpjava.H5SharePopup(Title, Content, ShareUrl, ShareImageUrl);
                break;
            case "MemberPage":
                window.jumpjava.MemberPage(parameter1);
                break;
            case "MyInvitedList":
                window.jumpjava.MyInvitedList();
                break;
            case "DoInvited":
                window.jumpjava.DoInvited();
                break;
            case "InviteToShare":
                window.jumpjava.InviteToShare(parameter1);
                break;
            case "InviteToAwardList":
                window.jumpjava.InviteToAwardList(parameter1);
                break;
            case "InviteToShareV1":
                window.jumpjava.InviteToShareV1(parameter1);
                break;
            case "InviteToAwardListV1":
                window.jumpjava.InviteToAwardListV1();
                break;
            case "InviteToWithdraw":
                window.jumpjava.InviteToWithdraw();
                break;
            case "InviteToConvert":
                window.jumpjava.InviteToConvert();
                break;
            case "H5SharePopupNew":
                window.jumpjava.H5SharePopupNew(ShareType, Title, Content, ShareUrl, ShareImageUrl);
                break;
            case "RechargePopup":
                window.jumpjava.RechargePopup();
                /*BindingTel: 跳转到”绑定手机”的界面
                BindingWeChat: 跳转到”绑定微信”的界面
                BindingQQ 跳转到”绑定QQ”的界面
                */
                break;
            case "GetHelpFinish":
                var t = window.jumpjava.GetHelpFinish(parameter1);
                return t;
                break;
            case "ReadImgData":
                var srtdata = window.jumpjava.ReadImgData(parameter1);
                var appdata = JSON.parse(srtdata);
                return appdata;
                break;
            case "WriterImgData":
                var data = parameter1;
                var jsonStrdata = JSON.stringify(parameter1);
                window.jumpjava.WriterImgData(jsonStrdata, Title);
                data = null;
                jsonStrdata = null;
                break;
        }
    }
}

function jumptoPage(url) {
    window.location.href = url;
}

function trim(str) { //删除左右两端的空格 
    return str.replace(/(^\s*)|(\s*$)/g, "");
}

function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]);
	return null;
}