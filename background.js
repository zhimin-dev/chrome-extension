// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Global variables only exist for the life of the page, so they get reset
// each time the page is unloaded.
var counter = 1;

var lastTabId = -1;

// function sendMessageToContentScript(message, callback)
// {
// 	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//       chrome.tabs.sendMessage(tabs[0].id, message, (response) => {
//           if (callback) {
//               callback(response)
//           }
//       })
//   })
// }

// sendMessageToContentScript({cmd:'test', value:'你好，我是popup！'}, response => {
// 	console.log('来自content的回复：'+response);
// });

// chrome.runtime.onInstalled.addListener(function() {
//   chrome.declarativeContent.onPageChanged.removeRules(undefined, function(){
// 		chrome.declarativeContent.onPageChanged.addRules([
// 			{
// 				conditions: [
// 					new chrome.declarativeContent.PageStateMatcher({pageUrl: {urlContains: 'zmis.me'}})
// 				],
// 				actions: [new chrome.declarativeContent.ShowPageAction()]
// 			}
// 		]);
// 	});
// });

// //右键菜单
// chrome.contextMenus.create({
//   type: 'normal',
//   id: '1',
//   title: '去除CSDN烦人登录遮罩',
//   visible: true,
// }, () => {
// });

chrome.browserAction.setBadgeText({text: "ON"});

// chrome.runtime.onMessage.addListener(function(msg, _, sendResponse) {
//   if (msg.setAlarm) {
//     // For testing only.  delayInMinutes will be rounded up to at least 1 in a
//     // packed or released extension.
//     chrome.alarms.create({delayInMinutes: 0.1});
//   } else if (msg.delayedResponse) {
//     // Note: setTimeout itself does NOT keep the page awake. We return true
//     // from the onMessage event handler, which keeps the message channel open -
//     // in turn keeping the event page awake - until we call sendResponse.
//     setTimeout(function() {
//       sendResponse("Got your message.");
//     }, 5000);
//     return true;
//   } else if (msg.getCounters) {
//     sendResponse({counter: counter++,
//                   persistentCounter: localStorage.counter++});
//   }
//   // If we don't return anything, the message channel will close, regardless
//   // of whether we called sendResponse.
// });