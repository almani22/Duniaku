﻿window.globalProvideData('slide', '{"title":"Drag and Drop","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":5,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide5","width":960,"height":540,"resume":true,"background":{"type":"swf","imagedata":{"assetId":84,"url":"","type":"normal","width":0,"height":0,"mobiledx":0,"mobiledy":0}},"id":"6g7QmizLQ84","actionGroups":{"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6F9qrd1nmDE.#ItemWasDragged","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"5cqlCrGzxuL.#ItemWasDragged","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"5VFggaK3LnL.#ItemWasDragged","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"6PbX2FUTyna.#ItemWasDragged","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"6G7DNrgsXZA.#ItemWasDragged","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"eval_interaction","id":"_this.6YqPYX77pN1"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6GygTLCBTQg","typea":"string","valueb":"_this.6F9qrd1nmDE.$DropTargetId","typeb":"property"}}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5lZ9fX4yW6s","typea":"string","valueb":"_this.5cqlCrGzxuL.$DropTargetId","typeb":"property"}}}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_6mUX2CJ1BJq.InvalidPromptSlide"}}]}]},"ReviewInt_5bQfhiNJXlK":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6PbX2FUTyna"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5VFggaK3LnL"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5cqlCrGzxuL"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6F9qrd1nmDE"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6G7DNrgsXZA"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6YqPYX77pN1.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5bQfhiNJXlK_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5bQfhiNJXlK_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5bQfhiNJXlK","typea":"var","valueb":"65K4ukJ406I","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000001"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.65K4ukJ406I.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5bQfhiNJXlK"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.65K4ukJ406I.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5bQfhiNJXlK"}]}]}]},"ReviewIntCorrectIncorrect_5bQfhiNJXlK":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6PbX2FUTyna"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5VFggaK3LnL"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5cqlCrGzxuL"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6F9qrd1nmDE"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6G7DNrgsXZA"},"enabled":{"type":"boolean","value":false}}]},"AnsweredInt_5bQfhiNJXlK":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_5bQfhiNJXlK"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"DisableChoices_5bQfhiNJXlK":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6PbX2FUTyna"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5VFggaK3LnL"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5cqlCrGzxuL"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6F9qrd1nmDE"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6G7DNrgsXZA"},"enabled":{"type":"boolean","value":false}}]},"5bQfhiNJXlK_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6YqPYX77pN1.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.65K4ukJ406I.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5bQfhiNJXlK"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6YqPYX77pN1.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6YqPYX77pN1.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5bQfhiNJXlK"}]}]}]}]},"SetLayout_pxabnsnfns00000000001":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"NavigationRestrictionNextSlide_6g7QmizLQ84":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.5t4f5rraC0g"}}]},"NavigationRestrictionPreviousSlide_6g7QmizLQ84":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_playerVars.#hasPrevHistory","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"enable_window_control","name":"previous","enable":false,"affectTabStop":true}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.65K4ukJ406I.$QuizComplete","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"starttimer","id":"_player.65K4ukJ406I_timer"},{"kind":"showtimer","id":"_player.65K4ukJ406I_timer"}]}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbsnfns00000000001"}]}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_6mUX2CJ1BJq","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_6mUX2CJ1BJq","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5bQfhiNJXlK","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_5bQfhiNJXlK"}],"elseActions":[{"kind":"exe_actiongroup","id":"5bQfhiNJXlK_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5bQfhiNJXlK","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5bQfhiNJXlK","typea":"var","valueb":"65K4ukJ406I","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.65K4ukJ406I"},"completed_slide_ref":{"type":"string","value":"_player.5VCdd44TbPL.6SgJ3AUftYs"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_5bQfhiNJXlK","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5bQfhiNJXlK","typea":"var","valueb":"65K4ukJ406I","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.65K4ukJ406I"},"completed_slide_ref":{"type":"string","value":"_player.5VCdd44TbPL.6SgJ3AUftYs"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6g7QmizLQ84"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6g7QmizLQ84"}]}],"slideLayers":[{"audiolib":[{"kind":"audio","assetId":91,"id":"67azyfIvpF5"},{"kind":"audio","assetId":92,"id":"5twllT6CFjb"}],"enableSeek":true,"enableReplay":true,"timeline":{"duration":777984,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6gphKz9f9wH"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5ggMmFQusJQ"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5lZ9fX4yW6s"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6GygTLCBTQg"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5cqlCrGzxuL"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6F9qrd1nmDE"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6PbX2FUTyna"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5VFggaK3LnL"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5neBSsb5Hwq"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5iFxpsNgDE0"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6G7DNrgsXZA"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6BtIKIzWZWV"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6KPLTQfo0aO"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5pPuXUSifux"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6gphKz9f9wH_-921526408","id":"01","linkId":"txt__default_6gphKz9f9wH","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":236,"height":50,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"SOAL 4","style":{"fontFamily":"\\"Times New RomanBoldBold3F3ED7D4\\",\\"Times New Roman\\"","fontSize":32,"fontIsBold":false,"foregroundColor":"#FFFFFF","linkColor":"#FFFFFF","ascent":38.021,"descent":9.229,"leading":1.813,"underlinePosition":-4.646,"underlineThickness":4.063,"xHeight":19.479}}],"style":{"justification":"center","tagType":"P"},"runs":[{"idx":0,"len":6,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":201,"bottom":56,"pngfb":false,"pr":{"l":"Lib","i":104}}}],"shapemaskId":"","xPos":192,"yPos":22,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":128,"rotateYPos":30,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":256,"bottom":60,"altText":"SOAL 4","pngfb":false,"pr":{"l":"Lib","i":74}},"html5data":{"xPos":0,"yPos":0,"width":256,"height":60,"strokewidth":0}},"width":256,"height":60,"resume":true,"useHandCursor":true,"id":"6gphKz9f9wH"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5ggMmFQusJQ_-2104985896","id":"01","linkId":"txt__default_5ggMmFQusJQ","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":900,"height":31,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Manakah yang merupakan jaring-jaring dari kedua bangun ruang dibawah ini !","style":{"fontFamily":"\\"Times New Roman Charset70F17049\\",\\"Times New Roman\\"","fontSize":20,"ascent":23.763,"descent":5.768,"leading":1.133,"underlinePosition":-2.904,"underlineThickness":1.302,"xHeight":11.927}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":74,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":852,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":106}}}],"shapemaskId":"","xPos":48,"yPos":118,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":460,"rotateYPos":20.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":920,"bottom":41,"altText":"Manakah yang merupakan jaring-jaring dari kedua bangun ruang dibawah ini !","pngfb":false,"pr":{"l":"Lib","i":105}},"html5data":{"xPos":0,"yPos":0,"width":920,"height":41,"strokewidth":0}},"width":920,"height":41,"resume":true,"useHandCursor":true,"id":"5ggMmFQusJQ"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":85,"id":"01","url":"story_content/6Lv7mJCT6hd_FFFFFF_P_92_268_896_512.png","type":"normal","altText":"Desain tanpa judul (3).png","width":896,"height":512,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":104,"yPos":166,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":175,"rotateYPos":100,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":false,"dropenabled":true,"dragoverenabled":true,"snapx":175,"snapy":100,"dragreturn":true,"multidrop":true,"droptype":"stackrandom","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_5bQfhiNJXlK"],"dragoverids":["_drop_5bQfhiNJXlK"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":350,"bottom":200,"altText":"Desain tanpa judul (3).png","pngfb":false,"pr":{"l":"Lib","i":107}},"html5data":{"xPos":0,"yPos":0,"width":350,"height":200,"strokewidth":0}},"width":350,"height":200,"resume":true,"useHandCursor":true,"id":"5lZ9fX4yW6s"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":85,"id":"01","url":"story_content/6Lv7mJCT6hd_FFFFFF_P_92_268_896_512.png","type":"normal","altText":"Desain tanpa judul (3).png","width":896,"height":512,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":512,"yPos":166,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":175,"rotateYPos":100,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":false,"dropenabled":true,"dragoverenabled":true,"snapx":175,"snapy":100,"dragreturn":true,"multidrop":true,"droptype":"stackrandom","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_5bQfhiNJXlK"],"dragoverids":["_drop_5bQfhiNJXlK"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":350,"bottom":200,"altText":"Desain tanpa judul (3).png","pngfb":false,"pr":{"l":"Lib","i":107}},"html5data":{"xPos":0,"yPos":0,"width":350,"height":200,"strokewidth":0}},"width":350,"height":200,"resume":true,"useHandCursor":true,"id":"6GygTLCBTQg"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":86,"id":"01","url":"story_content/5fMETngxGPN_FFFFFF_P_159_218_651_548.png","type":"normal","altText":"WhatsApp Image 2024-07-09 at 17.39.41 (2).jpg","width":652,"height":548,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":244,"yPos":378,"tabIndex":9,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":71.5,"rotateYPos":60,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":true,"dropenabled":false,"dragoverenabled":false,"snapx":71,"snapy":60,"dragreturn":true,"multidrop":false,"droptype":"snap","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_5bQfhiNJXlK"],"dragoverids":["_drop_5bQfhiNJXlK"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":143,"bottom":120,"altText":"WhatsApp Image 2024-07-09 at 17.39.41 (2).jpg","pngfb":false,"pr":{"l":"Lib","i":108}},"html5data":{"xPos":0,"yPos":0,"width":143,"height":120,"strokewidth":0}},"width":143,"height":120,"resume":true,"useHandCursor":true,"id":"5cqlCrGzxuL","variables":[{"kind":"variable","name":"ItemWasDragged","type":"boolean","value":false,"resume":true}],"events":[{"kind":"ondragstart","actions":[{"kind":"adjustvar","variable":"ItemWasDragged","operator":"set","value":{"type":"boolean","value":true}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":87,"id":"01","url":"story_content/5vikKG1lBxj_FFFFFF_P_390_129_224_192.png","type":"normal","altText":"WhatsApp Image 2024-07-09 at 17.39.42.jpg","width":224,"height":192,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":613,"yPos":378,"tabIndex":10,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":65.5,"rotateYPos":56,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":true,"dropenabled":false,"dragoverenabled":false,"snapx":65,"snapy":56,"dragreturn":true,"multidrop":false,"droptype":"snap","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_5bQfhiNJXlK"],"dragoverids":["_drop_5bQfhiNJXlK"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":131,"bottom":112,"altText":"WhatsApp Image 2024-07-09 at 17.39.42.jpg","pngfb":false,"pr":{"l":"Lib","i":109}},"html5data":{"xPos":0,"yPos":0,"width":131,"height":112,"strokewidth":0}},"width":131,"height":112,"resume":true,"useHandCursor":true,"id":"6F9qrd1nmDE","variables":[{"kind":"variable","name":"ItemWasDragged","type":"boolean","value":false,"resume":true}],"events":[{"kind":"ondragstart","actions":[{"kind":"adjustvar","variable":"ItemWasDragged","operator":"set","value":{"type":"boolean","value":true}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":88,"id":"01","url":"story_content/6hzuxBJINoW_FFFFFF_P_29_0_243_284.png","type":"normal","altText":"7170335101862bd032b8bc2de5a03f02.jpg","width":243,"height":284,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":770,"yPos":362,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":58,"rotateYPos":68,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":true,"dropenabled":false,"dragoverenabled":false,"snapx":58,"snapy":68,"dragreturn":true,"multidrop":false,"droptype":"snap","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_5bQfhiNJXlK"],"dragoverids":["_drop_5bQfhiNJXlK"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":116,"bottom":136,"altText":"7170335101862bd032b8bc2de5a03f02.jpg","pngfb":false,"pr":{"l":"Lib","i":110}},"html5data":{"xPos":0,"yPos":0,"width":116,"height":136,"strokewidth":0}},"width":116,"height":136,"resume":true,"useHandCursor":true,"id":"6PbX2FUTyna","variables":[{"kind":"variable","name":"ItemWasDragged","type":"boolean","value":false,"resume":true}],"events":[{"kind":"ondragstart","actions":[{"kind":"adjustvar","variable":"ItemWasDragged","operator":"set","value":{"type":"boolean","value":true}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":89,"id":"01","url":"story_content/5uCtlJ9HEP0_FEFEF6_P_16_24_192_184.png","type":"normal","altText":"images.jpg","width":192,"height":184,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":84,"yPos":378,"tabIndex":8,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":67,"rotateYPos":64,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":true,"dropenabled":false,"dragoverenabled":false,"snapx":66,"snapy":64,"dragreturn":true,"multidrop":false,"droptype":"snap","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_5bQfhiNJXlK"],"dragoverids":["_drop_5bQfhiNJXlK"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":134,"bottom":128,"altText":"images.jpg","pngfb":false,"pr":{"l":"Lib","i":111}},"html5data":{"xPos":0,"yPos":0,"width":134,"height":128,"strokewidth":0}},"width":134,"height":128,"resume":true,"useHandCursor":true,"id":"5VFggaK3LnL","variables":[{"kind":"variable","name":"ItemWasDragged","type":"boolean","value":false,"resume":true}],"events":[{"kind":"ondragstart","actions":[{"kind":"adjustvar","variable":"ItemWasDragged","operator":"set","value":{"type":"boolean","value":true}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5neBSsb5Hwq_-1192651546","id":"01","linkId":"txt__default_5neBSsb5Hwq","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":148,"height":31,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Balok","style":{"fontFamily":"\\"Times New RomanBoldBold3F3ED7D4\\",\\"Times New Roman\\"","fontSize":20,"fontIsBold":false,"foregroundColor":"#632523","linkColor":"#632523","ascent":23.763,"descent":5.768,"leading":1.133,"underlinePosition":-2.904,"underlineThickness":2.539,"xHeight":12.174}}],"style":{"justification":"center","tagType":"P"},"runs":[{"idx":0,"len":5,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":118,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":113}}}],"shapemaskId":"","xPos":128,"yPos":166,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":84,"rotateYPos":20.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":9,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":168,"bottom":41,"altText":"Balok","pngfb":false,"pr":{"l":"Lib","i":112}},"html5data":{"xPos":0,"yPos":0,"width":168,"height":41,"strokewidth":0}},"width":168,"height":41,"resume":true,"useHandCursor":true,"id":"5neBSsb5Hwq"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5iFxpsNgDE0_1015176625","id":"01","linkId":"txt__default_5iFxpsNgDE0","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":148,"height":31,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Kubus","style":{"fontFamily":"\\"Times New RomanBoldBold3F3ED7D4\\",\\"Times New Roman\\"","fontSize":20,"fontIsBold":false,"foregroundColor":"#632523","linkColor":"#632523","ascent":23.763,"descent":5.768,"leading":1.133,"underlinePosition":-2.904,"underlineThickness":2.539,"xHeight":12.174}}],"style":{"justification":"center","tagType":"P"},"runs":[{"idx":0,"len":5,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":122,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":114}}}],"shapemaskId":"","xPos":536,"yPos":166,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":84,"rotateYPos":20.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":10,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":168,"bottom":41,"altText":"Kubus","pngfb":false,"pr":{"l":"Lib","i":112}},"html5data":{"xPos":0,"yPos":0,"width":168,"height":41,"strokewidth":0}},"width":168,"height":41,"resume":true,"useHandCursor":true,"id":"5iFxpsNgDE0"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":90,"id":"01","url":"story_content/6IcOEZkggrm_P_128_117_768_315.png","type":"normal","altText":"png_rakh9w_5950.png","width":768,"height":316,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":416,"yPos":382,"tabIndex":11,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":87.5,"rotateYPos":36,"scaleX":100,"scaleY":100,"alpha":100,"depth":11,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":true,"dropenabled":false,"dragoverenabled":false,"snapx":87,"snapy":36,"dragreturn":true,"multidrop":false,"droptype":"snap","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_5bQfhiNJXlK"],"dragoverids":["_drop_5bQfhiNJXlK"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":175,"bottom":72,"altText":"png_rakh9w_5950.png","pngfb":false,"pr":{"l":"Lib","i":115}},"html5data":{"xPos":0,"yPos":0,"width":175,"height":72,"strokewidth":0}},"width":175,"height":72,"resume":true,"useHandCursor":true,"id":"6G7DNrgsXZA","variables":[{"kind":"variable","name":"ItemWasDragged","type":"boolean","value":false,"resume":true}],"events":[{"kind":"ondragstart","actions":[{"kind":"adjustvar","variable":"ItemWasDragged","operator":"set","value":{"type":"boolean","value":true}}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":5,"id":"01","url":"story_content/6NkwgcMXg0d_FFFFFF.png","type":"normal","altText":"MATERI (4).png","width":268,"height":268,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":20,"yPos":482,"tabIndex":12,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":29,"rotateYPos":29,"scaleX":100,"scaleY":100,"alpha":100,"depth":12,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":58,"bottom":58,"altText":"MATERI (4).png","pngfb":false,"pr":{"l":"Lib","i":116}},"html5data":{"xPos":0,"yPos":0,"width":58,"height":58,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":61,"bottom":61,"altText":"MATERI (4).png","pngfb":false,"pr":{"l":"Lib","i":117}},"html5data":{"xPos":0,"yPos":0,"width":61,"height":61,"strokewidth":0}}}],"width":58,"height":58,"resume":true,"useHandCursor":true,"id":"6BtIKIzWZWV","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}}]},"ActGrpSetStatesFinal":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"#_hover","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"_parent.67azyfIvpF5"}},{"kind":"media_play","objRef":{"type":"string","value":"_parent.67azyfIvpF5"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"_parent.67azyfIvpF5"}}],"elseActions":[{"kind":"media_pause","objRef":{"type":"string","value":"_parent.67azyfIvpF5"}},{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"_parent.67azyfIvpF5"}}]}]}},"events":[{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"_this.ActGrpClearHoverState"},{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.5aosSDOpJm8.66rmqkZxuY9"}}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":15,"id":"01","url":"story_content/6NG1mM2qwyA_FFFFFF.png","type":"normal","altText":"MATERI (6).png","width":272,"height":272,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":848,"yPos":494,"tabIndex":13,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":20,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":13,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":40,"bottom":40,"altText":"MATERI (6).png","pngfb":false,"pr":{"l":"Lib","i":118}},"html5data":{"xPos":0,"yPos":0,"width":40,"height":40,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":44,"bottom":44,"altText":"MATERI (6).png","pngfb":false,"pr":{"l":"Lib","i":119}},"html5data":{"xPos":0,"yPos":0,"width":44,"height":44,"strokewidth":0}}}],"width":40,"height":40,"resume":true,"useHandCursor":true,"id":"6KPLTQfo0aO","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}}]},"ActGrpSetStatesFinal":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"#_hover","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"_parent.5twllT6CFjb"}},{"kind":"media_play","objRef":{"type":"string","value":"_parent.5twllT6CFjb"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"_parent.5twllT6CFjb"}}],"elseActions":[{"kind":"media_pause","objRef":{"type":"string","value":"_parent.5twllT6CFjb"}},{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"_parent.5twllT6CFjb"}}]}]}},"events":[{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"_this.ActGrpClearHoverState"},{"kind":"history_prev_scene"}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":2,"id":"01","url":"story_content/6nurRraEz9j_FFFFFF.png","type":"normal","altText":"MATERI (5).png","width":156,"height":156,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":892,"yPos":494,"tabIndex":14,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":20,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":14,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":40,"bottom":40,"altText":"MATERI (5).png","pngfb":false,"pr":{"l":"Lib","i":120}},"html5data":{"xPos":0,"yPos":0,"width":40,"height":40,"strokewidth":0}},"width":40,"height":40,"resume":true,"useHandCursor":true,"id":"5pPuXUSifux","events":[{"kind":"onrelease","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.5VCdd44TbPL.5t4f5rraC0g"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5bQfhiNJXlK_CorrectReview","id":"01","linkId":"5bQfhiNJXlK_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":514,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":77}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":15,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":480,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":15,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":960,"bottom":40,"altText":"Benar","pngfb":false,"pr":{"l":"Lib","i":76}},"html5data":{"xPos":1,"yPos":1,"width":957,"height":37,"strokewidth":2}},"width":960,"height":40,"resume":false,"useHandCursor":true,"id":"5bQfhiNJXlK_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5bQfhiNJXlK_IncorrectReview","id":"01","linkId":"5bQfhiNJXlK_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":511,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":79}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":16,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":480,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":16,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":960,"bottom":40,"altText":"Salah","pngfb":false,"pr":{"l":"Lib","i":78}},"html5data":{"xPos":1,"yPos":1,"width":957,"height":37,"strokewidth":2}},"width":960,"height":40,"resume":false,"useHandCursor":true,"id":"5bQfhiNJXlK_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');