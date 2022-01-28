(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"marshmellowmed_ordered_atlas_1", frames: [[0,0,1000,986],[1002,0,1000,810],[0,988,1266,752]]},
		{name:"marshmellowmed_ordered_atlas_2", frames: [[876,1495,1000,529],[0,0,1000,803],[1002,0,1000,730],[1002,732,745,761],[0,805,972,582],[0,1389,874,624]]},
		{name:"marshmellowmed_ordered_atlas_3", frames: [[639,227,70,70],[711,227,70,70],[216,228,70,70],[986,95,24,23],[584,93,111,111],[499,279,44,42],[976,0,44,59],[545,279,44,42],[162,233,44,59],[591,279,44,42],[0,232,79,59],[0,293,44,42],[81,233,79,59],[46,294,44,42],[288,240,79,59],[92,294,44,42],[369,240,79,59],[138,294,44,41],[948,270,44,59],[109,126,105,105],[821,0,153,97],[986,120,24,23],[347,120,230,50],[788,99,98,119],[493,206,144,71],[873,221,110,47],[347,0,235,118],[327,172,164,66],[788,220,83,98],[216,126,109,100],[0,0,345,124],[697,93,89,132],[584,0,235,91],[873,270,73,39],[0,126,107,104],[888,99,96,120],[976,61,32,32],[450,279,47,47]]},
		{name:"marshmellowmed_ordered_atlas_4", frames: [[1335,1869,339,155],[1676,1809,311,164],[1335,1622,219,245],[1556,1562,219,245],[502,0,581,420],[1422,1456,531,104],[1492,1278,549,176],[1057,1837,276,203],[502,1856,366,160],[502,1165,323,232],[1152,1388,268,232],[1004,1126,486,260],[1057,1622,271,213],[502,1399,313,208],[502,1609,283,220],[1506,836,328,440],[1587,0,351,419],[827,1388,323,232],[1777,1562,192,229],[787,1622,268,232],[502,898,500,265],[502,422,500,474],[0,0,500,500],[0,502,500,500],[0,1004,500,500],[1004,487,500,360],[1085,0,500,485],[0,1506,500,500],[1004,849,500,275],[1506,487,500,347]]},
		{name:"marshmellowmed_ordered_atlas_5", frames: [[0,0,651,668],[653,0,647,617],[0,1090,941,399],[0,883,1840,205],[0,670,1839,211],[0,1491,500,500],[502,1491,500,500],[1302,0,500,500],[1004,1090,500,500],[1506,1090,500,500]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_75 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_74 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_73 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_72 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_71 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_70 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_69 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_68 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_67 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_66 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_81 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_80 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_63 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_4"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_62 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_61 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_60 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_59 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_4"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_58 = function() {
	this.initialize(img.CachedBmp_58);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3073,1979);


(lib.CachedBmp_57 = function() {
	this.initialize(img.CachedBmp_57);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5674,1552);


(lib.CachedBmp_56 = function() {
	this.initialize(img.CachedBmp_56);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5936,1995);


(lib.CachedBmp_55 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_54 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_53 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_4"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_52 = function() {
	this.initialize(img.CachedBmp_52);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2513,914);


(lib.CachedBmp_51 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_50 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_3"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_49 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_3"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_48 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_3"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_47 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_3"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_46 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_3"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_45 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_3"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_44 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_3"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_43 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_3"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_42 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_3"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_41 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_3"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_40 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_3"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_39 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_3"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_38 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_3"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_37 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_3"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_36 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_3"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_35 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_3"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_34 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_33 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_3"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_32 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_3"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_31 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_3"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_30 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_4"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_29 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_3"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_28 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_4"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_27 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_3"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_26 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_3"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_25 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_3"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_24 = function() {
	this.initialize(img.CachedBmp_24);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6083,3102);


(lib.CachedBmp_23 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_3"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_22 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_4"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_21 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_4"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_20 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_3"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_4"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_5"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_4"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_4"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_4"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_3"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_5"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_5"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_4"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_4"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_3"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_3"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_3"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_3"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_4"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_4"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_4"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.albireo = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_5"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.g0_q01 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_4"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.ComboBox = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_3"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.g0_q02 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_5"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CSS = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_3"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.g0_q03 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_5"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.g0_q04 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_4"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.g0_q05 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_5"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.g0_q06 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_5"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.g0_q07 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_4"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.g0_q08 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_4"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.g0_q09 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_4"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.g0_q10 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_4"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.g0_q11 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_4"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.g0_q12 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_4"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.g0_q13 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_4"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.g0_q14 = function() {
	this.initialize(ss["marshmellowmed_ordered_atlas_4"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.titleBG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.gameInstruction = new cjs.Text("העבירו את העכבר על המרשמלו כדי לעצור ולהגדיל אותו", "normal 400 11px 'Assistant'", "#342666");
	this.gameInstruction.name = "gameInstruction";
	this.gameInstruction.textAlign = "center";
	this.gameInstruction.lineHeight = 21;
	this.gameInstruction.lineWidth = 412;
	this.gameInstruction.parent = this;
	this.gameInstruction.setTransform(0,65.4);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.gameInstruction);
	}

	this.gameInstruction_1 = new cjs.Text("לחצו על השיפוד המתאים בשביל למיין את המרשמלו", "normal 400 18px 'Assistant'", "#342666");
	this.gameInstruction_1.name = "gameInstruction_1";
	this.gameInstruction_1.textAlign = "center";
	this.gameInstruction_1.lineHeight = 30;
	this.gameInstruction_1.lineWidth = 412;
	this.gameInstruction_1.parent = this;
	this.gameInstruction_1.setTransform(0,40.25);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.gameInstruction_1);
	}

	this.gameName = new cjs.Text("שם המשחק", "normal 700 28px 'Assistant'", "#342666");
	this.gameName.name = "gameName";
	this.gameName.textAlign = "center";
	this.gameName.lineHeight = 44;
	this.gameName.lineWidth = 410;
	this.gameName.parent = this;
	this.gameName.setTransform(0,8.5);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.gameName);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.gameName},{t:this.gameInstruction_1},{t:this.gameInstruction}]}).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["#DED6EB","#E2DAED","#AC93C5","#FFFFFF","#F9F7FB","#E8E2F0","#CDBEDD","#BCA9D2"],[0,0.22,0.459,0.812,0.839,0.898,0.969,1],-306.7,0,306.8,0).ss(6.6).p("EgmJgJRMBMTAAAQD1AACuCuQCuCuAAD1QAAD2iuCtQiuCvj1AAMhMTAAAQj1AAiuivQiuitAAj2QAAj1CuiuQCuiuD1AAg");
	this.shape.setTransform(0,42.8065,0.7718,0.7364);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgmJAJSQj1gBiuitQiuiuAAj2QAAj1CuiuQCuiuD1AAMBMTAAAQD1AACuCuQCuCuAAD1QAAD2iuCuQiuCtj1ABg");
	this.shape_1.setTransform(0,42.8065,0.7718,0.7364);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.titleBG, new cjs.Rectangle(-237.5,-13,475,111.6), null);


(lib.timertxt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.timertxt = new cjs.Text("123", "normal 700 34px 'Assistant'", "#FFFFFF");
	this.timertxt.name = "timertxt";
	this.timertxt.textAlign = "center";
	this.timertxt.lineHeight = 50;
	this.timertxt.lineWidth = 240;
	this.timertxt.parent = this;
	this.timertxt.setTransform(122,2);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.timertxt);
	}

	this.timeline.addTween(cjs.Tween.get(this.timertxt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.timertxt, new cjs.Rectangle(0,0,244.1,56.1), null);


(lib.skewForSmore = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D68D60").s().p("AgUJYQgGgDAAgDQABkBAHlSIADoJIAAgBIAXhOIASBNIABACIgDIJQgGFPgCEEQAAAIgUAAQgJAAgHgCg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.skewForSmore, new cjs.Rectangle(-2.7,-60.1,5.4,120.30000000000001), null);


(lib.singleMarshForSmore = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_72();
	this.instance.setTransform(-17.85,-20.9,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_73();
	this.instance_1.setTransform(-17.85,-20.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.8,-20.9,35,35);


(lib.singleMarshForEndSmore = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_71();
	this.instance.setTransform(-17.85,-20.9,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7E5D4").s().p("AgeFsQi3gHhjgVQhjgWgRgXQBRAoCRgBQDHAAB5gsQBPgZA8g4QA8g5AehNQAjhjAIhwQAKhKAEgmQAHhCgFgvQAMANACAKQALAfgDAgIgOEpIgNEmQgGAuh5AGQg8AChNAAQhMAAhbgCg");
	this.shape.setTransform(-0.1328,-0.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	// Layer_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7E5D4").s().p("AhqgCQgEgBABgEQABgFAEABQBpAXBogOQAFAAAAAEQABAEgEABQglAFgsAAQhCAAhCgOg");
	this.shape_1.setTransform(0.4323,-35.0893,2.5112,2.5112);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2));

	// Layer_5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F9D6D7").s().p("AAIBEQgFgBhVgXQg2gPgjAJIgBgwQAbgFAyAMQA1AOAuAFQA5AGAvgdQANgJAUgWQAVgXALgIIgEBPQgUATgXARQgkAYgyAAQgPAAgRgCg");
	this.shape_2.setTransform(-1.043,-6.2142,2.5112,2.5112);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(2));

	// Layer_6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9D6D7").s().p("AmWA6QgKg4ArgeQAtggBggEQCxgGA4AgIAdAWQANAJAVgBQANAAANgYQALgVAkAFICHAPQBOAJA7AOQg5ADg8AIQgxAHgRgBQgngEhIAOQhMARgcAEQidAciCAAQhFAAg9gIg");
	this.shape_3.setTransform(-3.536,-36.7086);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(2));

	// Layer_7
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8EEE5").s().p("AgGGMQixgGi+giQgcgFgSghQgIgUABgSIgKluQgFiJAMhcQAFglBFgXQA9gUBSgBQCUgBAeAfQAJAQAFAFQAJAMAXAAQArAAAOgNQAHgGAHgRQAYgZDFAjQA0AKASAGQAvANAKAUQAKAggEAfIgOEpIgMEmQgEAUgXANQgSAMgXABQijAHhtAAIhNgBg");
	this.shape_4.setTransform(-1.0804,-3.7194);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.9,-43.4,87.69999999999999,79.5);


(lib.Path_330 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3F3F3").s().p("AsBAiQAKgKBPg5IVzAAIA3BDg");
	this.shape.setTransform(77,3.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_330, new cjs.Rectangle(0,0,154,6.8), null);


(lib.marshQ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9D6D7").s().p("AgwKGQk8gOkbhwQg3gWgVgkQBPAoBtAQQBSAMBxAAQCegBB0gNQCXgSBzgqQCKgzBhhZQBnheAyiDQAehOAShiQANhGALhwQAQh+AHhAQAMhwgIhOQAQASAJAWQAJAWACAeQABASgBAmQgHCngRFOIgJEKQgIDQgFAWQgHAgglAVQgWAMgvANQkCBIkKAAQgrAAgtgCg");
	this.shape.setTransform(3.52,6.9255);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9D6D7").s().p("AAkEfQhOgMhzghQiAgmhAgRQjmg+iXAlIgFjOQBHgNBgAMQA7AHBmAXIDTAxQB7AbBZAGQB9AJBrgWQB6gaBbg/QA1gkBVhfQBYhfAxgkIgQFTIhaBPQg0AsgrAdQiYBojOAAQhEAAhJgLg");
	this.shape_1.setTransform(1.9,-5.8624);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F9D6D7").s().p("AqLBTQAjhBCAgpQBSgaBxgOQD/ghDkANQEWAPC4BRQjAgkhmgKQiigPiJAZQg+ALhuAaQiDAggxAKQiZAgh0AAQgwAAgpgFg");
	this.shape_2.setTransform(-4.5,-66.7062);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F8EEE5").s().p("AggLdQk9gNkahxQg9gYgTgoQgMgfABgiIgPprQgFkCAPiAQAKhTCNg0QBXggCDgRQEEghDmANQEZARC5BVQAwAWAcAWQAnAdAPAlQAJAWACAeQABAVgCAiQgGCogRFOIgKEJQgIDQgEAWQgHAhgmAVQgWAMgvANQkBBHkKAAQgsAAgsgCg");
	this.shape_3.setTransform(1.9696,-1.9434);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.marshQ, new cjs.Rectangle(-72,-75.5,147.9,147.2), null);


(lib.Tween20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CC7F3C","#E0A744"],[0,1],-16.1,0,16.1,0).s().p("AgwA9IhwgHIBJhUIgchuIBoAsIBeg9IgJBxIBXBHIhuAZIgpBqg");
	this.shape.setTransform(2.25,1.55,0.7719,0.7719,0,0,0,2.9,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.4,-12.1,24.9,24.299999999999997);


(lib.Tween19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CC7F3C","#E0A744"],[0,1],-16.1,0,16.1,0).s().p("AgwA9IhwgHIBJhUIgchuIBoAsIBeg9IgJBxIBXBHIhuAZIgpBqg");
	this.shape.setTransform(2.25,1.55,0.7719,0.7719,0,0,0,2.9,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.4,-12.1,24.9,24.299999999999997);


(lib.Tween18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CC7F3C","#E0A744"],[0,1],-16.1,0,16.1,0).s().p("AgwA9IhwgHIBJhUIgchuIBoAsIBeg9IgJBxIBXBHIhuAZIgpBqg");
	this.shape.setTransform(2.25,1.55,0.7719,0.7719,0,0,0,2.9,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.4,-12.1,24.9,24.299999999999997);


(lib.Tween17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CC7F3C","#E0A744"],[0,1],-16.1,0,16.1,0).s().p("AgwA9IhwgHIBJhUIgchuIBoAsIBeg9IgJBxIBXBHIhuAZIgpBqg");
	this.shape.setTransform(2.25,1.55,0.7719,0.7719,0,0,0,2.9,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.4,-12.1,24.9,24.299999999999997);


(lib.Tween16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_70();
	this.instance.setTransform(-54.8,-61.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.8,-61.1,109.5,122.5);


(lib.Tween15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_69();
	this.instance.setTransform(-54.75,-61.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.7,-61.1,109.5,122.5);


(lib.Tween13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#EADAC1","#EAC191","#EAC292","#EAC598","#CC7F3C"],[0.024,0.29,0.322,0.514,1],0,70.7,0,-70.6).s().p("AgfLBQkwgNkPhsIgVgKIgBAAQgkgTgPgaIgBAAIgDgHQgKgUgBgqIgOpUQgDhZAChgQACh3AIhDQACgSAKgRQAuhWDQgpIAggGIACAAIA3gIQBQgLBZgGIAdgCIAVgBIAIAAQDEgJCnAVQDAAYCIA+QArAUAaATQAjAZAQAfIAAABIAFAKQAJAWACAdQABATgBAiQgHChgQFBIgKD/QgHDIgEAVQgHAfgkAUQgVAMgtAMQj4BFj/AAQgrAAgqgCg");
	this.shape.setTransform(0.0181,0.0245);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71,-70.6,142.1,141.3);


(lib.Group = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AjfLAQgcgCgNgpQgLgoAPgUQANgQgEgqQgDghgLgaQgJgYgYgUQgagWgCAVQgCASgIAXIgKAfQgKApgVAAQgTgBAEgWQARhaAFgwQADgiggg6QgYgegTgbQgEgCgCAAQgbABgOAIQgbAOAHAkQAIAlgWgLQgUgKgIgTQgEgIAGhXQAHhZgEgQQgHgcgUgSQgWgUgMAYQgHANgPgFQgOgEgMgQQgggpAfgeQAbgbAHg0QgGgcAGgVIACgFQAHgPAYgXIFOk0QAxguA6gwQBFg7AqgdQAMgIAOgDQBHgRCBBjIATAPIABABIAhAbQAuApAxAwIAfAgQBoBsBIBqQBTB7AhBtQAXBJgRArIAAAAIgEAIQgNAagpAgIgtAlQhpBViKBtIiXB7Qh3BggOAIQgVAMgdgKQgRgHgegTQgRgLgOgKIAAAAQgagKgbgDQg1gGACAiIAEBKQgCAegZAAIgEgBgAnmIqQgBgrATg5QAKgcAKgUQAGAZgGA1QgEAgAIAYIALAiQACAJgIAHQgIAIgKABIgCAAQgaAAgBgtgAqYDYQgLgSAFgaQAEgSAVgUQAKgKAKgHQAJAZAFAZQAKA0gYAIQgIADgHAAQgQAAgIgOg");
	this.shape.setTransform(67.2492,70.4657);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,134.6,140.9), null);


(lib.SingleMarshBarColor = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8EEE5").s().p("Ah1ByQgKgDgFgJQgCgGAAgHIgDhzQgBgkADgkQADgbBCgIQAxgGAqADQA0ADAjAQQAPAFAJAPQADAJgBALIgEBdIgCAyQgBAngBAEQgCAJgUAGQgyAOgxAAQg/AAg/gYg");
	this.shape.setTransform(13.8375,13.7674);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SingleMarshBarColor, new cjs.Rectangle(0,0,27.7,27.6), null);


(lib.progressBarSpike = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D68D60").s().p("EgARAmZQgFgKAAghMAAAhJeIAbiwIARCwUAACAI+gACBAhQAAAigEAJQgDAHgOAAQgNAAgFgIg");
	this.shape.setTransform(0.0125,-246.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.progressBarSpike, new cjs.Rectangle(-2.3,-493,4.6,493), null);


(lib.logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_59();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,0,265.5,52), null);


(lib.g0_q = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
	}
	this.frame_13 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_15 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(1).call(this.frame_13).wait(1).call(this.frame_14).wait(1).call(this.frame_15).wait(1));

	// Layer_1
	this.instance = new lib.albireo();
	this.instance.setTransform(-250,-250);

	this.instance_1 = new lib.g0_q01();
	this.instance_1.setTransform(-250,-133);

	this.instance_2 = new lib.g0_q02();
	this.instance_2.setTransform(-250,-250);

	this.instance_3 = new lib.g0_q03();
	this.instance_3.setTransform(-250,-250);

	this.instance_4 = new lib.g0_q04();
	this.instance_4.setTransform(-250,-237);

	this.instance_5 = new lib.g0_q05();
	this.instance_5.setTransform(-250,-250);

	this.instance_6 = new lib.g0_q06();
	this.instance_6.setTransform(-250,-250);

	this.instance_7 = new lib.g0_q07();
	this.instance_7.setTransform(-250,-250);

	this.instance_8 = new lib.g0_q08();
	this.instance_8.setTransform(-250,-250);

	this.instance_9 = new lib.g0_q09();
	this.instance_9.setTransform(-250,-250);

	this.instance_10 = new lib.g0_q10();
	this.instance_10.setTransform(-250,-180);

	this.instance_11 = new lib.g0_q11();
	this.instance_11.setTransform(-250,-243);

	this.instance_12 = new lib.g0_q12();
	this.instance_12.setTransform(-250,-250);

	this.instance_13 = new lib.g0_q13();
	this.instance_13.setTransform(-250,-138);

	this.instance_14 = new lib.g0_q14();
	this.instance_14.setTransform(-250,-174);

	this.text = new cjs.Text("גרם שמיים דמוי-כדור המורכב מחומר במצב צבירה פלזמה וגז, מפיק קרינה משל עצמו על ידי היתוך גרעיני ופולט אותה לחלל החיצון", "normal 700 50px 'Assistant'", "#25224C");
	this.text.textAlign = "center";
	this.text.lineHeight = 67;
	this.text.lineWidth = 528;
	this.text.parent = this;
	this.text.setTransform(0.05,-222);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCEBEB").s().p("EgqjAjvMAAAhHdMBVHAAAMAAABHdg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.shape},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-272.4,-250,544.9,500);


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqzKMQAWg5AcgwQBdihCkjLQBuiHCkhUQBNgpBTgZQAlgLBigZQBXgaAhgpQAPgUAAgfQAAgUgHgmQgXh0APhaQAUhxBQg9QAngfAygLQAygLAxALQBAAPAgAsQARAYACAdQADAfgPAYQgSAdgzAWQg9AagRAPQghAegGAzQgFAtAQAuQAaBLAHAeQANA8gIAwQgRBghBBiQgwBKhYBaQiwC1i8A+Qi1A7iYAhQhMAQgoAFIgIAKQgJALgOAOQgdAdgqAbQgIAGgHgBQgDgBgCgDQgCgEACgDQgTAXgdAIQgIACgFgDQgFgEAEgHQgNAPgOABIgDAAQgoAAAjhag");
	mask.setTransform(70.7958,84.6297);

	// Layer_3
	this.instance = new lib.CachedBmp_60();
	this.instance.setTransform(1.65,0,0.2031,0.2031);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E4DACD").s().p("AqzKMQAWg5AcgwQBdihCkjLQBuiHCkhUQBNgpBTgZQAlgLBigZQBXgaAhgpQAPgUAAgfQAAgUgHgmQgXh0APhaQAUhxBQg9QAngfAygLQAygLAxALQBAAPAgAsQARAYACAdQADAfgPAYQgSAdgzAWQg9AagRAPQghAegGAzQgFAtAQAuQAaBLAHAeQANA8gIAwQgRBghBBiQgwBKhYBaQiwC1i8A+Qi1A7iYAhQhMAQgoAFIgIAKQgJALgOAOQgdAdgqAbQgIAGgHgBQgDgBgCgDQgCgEACgDQgTAXgdAIQgIACgFgDQgFgEAEgHQgNAPgOABIgDAAQgoAAAjhag");
	this.shape.setTransform(70.7958,84.6297);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,10.4,141.7,148.5), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnuLqQBcimCvjXQApg0A1guQgKgRAGgRQgMACgEgOQgEgNAHgJQgOgEgDgRQgDgRAJgKQgMgIgGgLQgGgPAKgKQgPgJgCgRQgCgQAMgNQgNgNgEgPQgFgRALgMQgNgJgEgSQgEgUANgJQgJgEgEgNQgDgLACgLQABgNAGgBIgKgFQgNgMAFgRIABgFQABgBAAgBQAAAAABgBQAAAAABAAQAAgBAAABQgCgCgEABIgHAAQgUgDgMgTQgEgIABgMQAAgNAJgBQgVABgKgCQgZgEgEgQQgDgIAFgJQAEgJAIAAQgZgCgZgPQgfgTAGgXQABgHAGgDQAGgEAGACIgZgNQgPgIgHgJQgHgIgCgKQgDgLADgIQACgHAGgHQAHgHAGABQgagFgUgXQgUgWgDgSQgEgXAcgDIgfgYQgRgPgKgPQgKgPgEgUQgGgaAMgIQAGgEAKAEQAHADAGAFQgfgdgRgrQgJgXgCgOQgDgWALgNQAEgFAIAAQAHgBAFAFQgHgLgKgUQgMgagKgjIgHgaQgCgQAGgJQAJgOAXAJQAKADAWAPIAkAcIAkAbQBBAuB0AeQCoArAXAIQByAqBdBXQA0AwAYAuQAaAxALBSIASCKQAMBFAZA9QAeBHApAqQAVAXApAmQAjAjARAfQAMAVAIAXQAOAtABAvQACA1gQAmQgNAdghAkIg6A5QiWCViZAyQi0A8iZAgQhMARgoAEIg1A4QhFA5hMAJIgHAAQhIAABjizg");
	mask.setTransform(66.7197,100.2945);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8CBB8").s().p("ADjKXQgFgGgEgKIgIgCQgEgCgEgFQgGgHABgLQgEADgFgDQgFgCgDgFQgDgFAAgGIAAgCIgIgHIAAAAQgEgEgGAAIgMABQgHABgEgCQgQgHgSgWQgLgOgRgdQgSgegKgNIhPhrQhjiDgthFQhMhzgqhkQgyh5gJh3QgKiDArhuQAjhcA+geQBIgcA5AQQAlALBLAyQBAArBiA7ICjBiQALAGACAGQADAHgEAIQgEAIgHADQgHADgJABIgQAAQhQgCg6AbQghAPgZAZQgaAbgLAhQgUA6AXBIQAPAwAqBHIBHB4QAmBFAUA5QAwCIgGCkQgBAfgFAUQgIAcgQAQQgLAKgOAEIgJABQgLAAgHgHg");
	this.shape.setTransform(35.669,67.0493);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(11.3,7.8,60.10000000000001,126.3), null);


(lib.startGameBTN = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_4
	this.text = new cjs.Text("!בואו נתחיל", "normal 400 30px 'Assistant'", "#777777");
	this.text.textAlign = "center";
	this.text.lineHeight = 45;
	this.text.lineWidth = 147;
	this.text.parent = this;
	this.text.setTransform(0,-14.95);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#342666"},0).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E4E4E4","#D1D1D1","#D4D4D4","#999998"],[0.024,0.29,0.514,1],-103.6,0,103.7,0).s().p("AsFEHQhtAAhMhNQhOhNAAhtQAAhsBOhNQBNhNBsAAIYKAAQBuAABMBNQBOBNAABsQAABthOBNQhMBNhuAAg");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#EADAC1","#EAC191","#EAC292","#EAC598","#CC7F3C"],[0.024,0.29,0.322,0.514,1],-104.8,0,104.9,0).s().p("AsFEHQhtAAhMhNQhOhNAAhtQAAhsBOhNQBNhNBsAAIYKAAQBuAABMBNQBOBNAABsQAABthOBNQhMBNhuAAg");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.6,-26.2,207.3,52.5);


(lib.gameChoiceWindowBG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#25224C","#383E87"],[0,1],-262.5,0,262.6,0).s().p("EgkhAQqQh3ABhUhUQhUhVgBh3IAA4VQABh3BUhVQBUhUB3AAMBJDAAAQB3AABVBUQBUBVAAB3IAAYVQAAB3hUBVQhVBUh3gBg");
	this.shape.setTransform(262.55,106.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.gameChoiceWindowBG, new cjs.Rectangle(0,0,525.1,213.3), null);


(lib.gameChoiceBGtrees = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_58();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.gameChoiceBGtrees, new cjs.Rectangle(0,0,1536.5,989.5), null);


(lib.gameChoiceBGground = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#303A7F").s().p("AyaPPQkchAkji0Qj3iYisi2QihirAPhKQAPhFCEgmQB/gkDcgDQHQgGJ0CCQJ0CDGmC/QDIBaBmBVQBqBXgOBFQgNA+htAHQguADjsgNQjlgNioAOQj7AVjcBSQiiA9i2AAQiDAAiPgggAJTiEQkWgEkyhwQkDhejDiJQi3iAAAhHQAAhDB0g9QBvg7DMgtQGvhgJiAAQJjAAGwBgQDMAtBvA7QB0A9AABDQAAA8hlAcQgqAMjeAhQjYAgiaAuQjnBEi8B4QjpCTk/AAIgTAAg");
	this.shape.setTransform(500.1321,148.9834);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#272F69").s().p("AMQOnQkbhBjdh1QjQhvgJhKQgIhGBxhOQBthMDPhJQG1ibJ9hPQJ8hNHPArQDaAVB8AvQCBAxAIBFQAIA/hmArQgqARjkA/QjdA+ibBDQjnBli1CVQjmC9laAlQhUAKhYAAQjXAAjtg3gA87hHQkkgElCh1QkRhjjNiQQjBiGAAhMQAAhGB6hAQB2g9DWgwQHFhlKCAAQKBAAHFBlQDXAwB1A9QB6BAAABGQAAA/hqAeQgsAMjqAjQjjAiiiAwQjyBIjGB+Qj0CalOAAIgVAAg");
	this.shape_1.setTransform(1349.2758,124.4573);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#28316E","#1D1938"],[0,1],-883.8,0,883.9,0).s().p("EBB3Ae9Ql1AAnMg4Qn8hHkKgcQnKgxmfANQjDAGkcgNIpngjQvug4xlAAQ1AAHsCgBQ12gBp/gkQ4ahZslm3QqQlliJpDQhlmlC0oPQA4imBbi/QBVirAQgpQAziBEYhMQDkg+G/gqQBegIMIg5QI3gpFfgwQHchBIFAIQFZAGQKAtQBkADSpBFQPLA4DXgMQE4gQFXglQDGgWF3gtQK7hSJWAAQIAAAFdARQI8AcG6BPQFEA6GdgrQD5gaHeheQHThdDTgUQFigiDwBIQDPA+EEA6QCUAiENA4QDhAyCJArQCzA5B+BJQI1FJD3HKQDfGehIG7QhEGmk1FHQk7FNnNB7QrJDKk0BLQnQByuRCVQopBanxAAIgFAAgEhYdgHkQjcACh/AlQiEAmgPBEQgPBKChCrQCsC1D3CZQEjC0EcBAQFUBLEWhoQDchTD7gVQCpgODlANQDsAOAugDQBtgIANg+QAOhEhqhYQhmhUjIhZQmni/p0iDQpXh9nBAAIgsABgEBhEgK6Qp8BOm2CcQjPBJhtBMQhxBOAJBFQAJBLDQBtQDcB1EcBBQFNBNEjgfQFZgmDmi8QC2iUDnhlQCbhEDdg9QDjg/ArgSQBlgqgHg/QgJhGiAgwQh8gvjbgVQingQi+AAQlQAAmWAygEg/AgV5QjMAthvA7Qh0A9AABCQAABIC3CAQDDCIEEBfQEyBvEWAEQFLAFDwiYQC8h3DnhFQCagtDYghQDeghAqgMQBlgcAAg8QAAhCh0g9Qhvg7jMgtQmwhgpjAAQpiAAmwBggAez5YQjWAvh2A+Qh5BAAABGQAABLDACHQDNCPESBjQFBB1EkAEQFcAFD7ifQDHh9DxhIQCigwDkgiQDpgjAsgMQBqgeAAg/QAAhGh5hAQh2g+jWgvQnGhlqBAAQqBAAnGBlg");
	this.shape_2.setTransform(883.8485,198.1299);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.gameChoiceBGground, new cjs.Rectangle(0,0,1767.7,396.3), null);


(lib.an_ComboBox = function(options) {
	this.initialize();
	this._element = new $.an.ComboBox(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.BGtrees = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_56();
	this.instance.setTransform(0,0,0.2337,0.2337);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BGtrees, new cjs.Rectangle(0,0,1387,466.2), null);


(lib.BGsky = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#0B4789","#0F4889","#184C89","#194C89","#1D4D89","#29508A","#3A568B","#4E5D8C","#66688C","#82778D","#9E888D","#A78E8C"],[0,0.118,0.18,0.184,0.286,0.353,0.412,0.467,0.514,0.561,0.604,0.616],-1.7,-378.1,-1.7,378.1).s().p("Ehm+A52MAAAhzrMDN9AAAMAAABzrg");
	this.shape.setTransform(659.1,370.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BGsky, new cjs.Rectangle(0,0,1318.2,740.3), null);


(lib.BGmountainsFront = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_57();
	this.instance.setTransform(0,0,0.2337,0.2337);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BGmountainsFront, new cjs.Rectangle(0,0,1325.8,362.7), null);


(lib.Path_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EBADA5").s().p("EhjpAa3QBNgxCIhLQEQiUEnh8QOumJMpAPQD5AFGeBMIFSBBQDEAjCKATQF1AwEAgtQE+g5DbjPQJupNQcgxQFCgQG8AkIEwAbQCXAMBOgDQNpgXfvzNQJ6mAKjnMQFRjmDSiYIAAKxQiZCWmnEoQnGE+oaFHQprF3ouEYQqIFHniCaQmEB9nzACQllABn/hDImJg2QjbgeiBgLQlgggiYBCQiBA4juC5QkmDliGBUQkQCpkLA5QlMBIlwhaQmBhcn8gJQoFgImGBUQlFBHuHFBQnEChmCCTg");
	this.shape.setTransform(638.825,217.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,1277.7,435.4), null);


(lib.Path_2_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EBADA5").s().p("Eg/iAa5QBJieBvixQDfljDEhdIDth0QCThCCGgcQFthMHqCkQClA4ExAiQFWAnFZgLQGYgNFAhRQF0hfDXi1QB1hhKwpUQKrpPBXhPQDKi1INpJQEGkmDekAIODAAQjQD4kwFBQpgJ+nhFkQijB4lhETIpxHnQsCJViBAwQpmDhvIgWQnVgLqrhXQkigmleB7QiiA6h8BOQiCBTg/BZQhsCakKEEQiFCChwBjg");
	this.shape.setTransform(406.675,211.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_0, new cjs.Rectangle(0,0,813.4,423.2), null);


(lib.Path_1_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EBADA5").s().p("Ehk0AOyQJ7maM4hfQLlhVNhCqQF+BMEWgaQDogVELhrQCjhBGFi0QGTivGih8QHbiPI/gPQHWgNJQBIQFKApKuB0QJqBoEkAdQK8BEU0tqQGhkRGulPQDXinCDhxIgcEgIBJPhQh5A9kbCcQo0E2siHbQm/EIn7AaQmiAVnsiNQk8hbn+jaQkjh9hNgfQjEhQiJgoQoOic1xGOQnBCApcDOQpFDLipA2QjlBJlBgfQjegVmFhbQnohziXgaQlqhAkMAVQn/AppEFoQkiCzi8Csg");
	this.shape.setTransform(645.325,159.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_2, new cjs.Rectangle(0,0,1290.7,320), null);


(lib.Group_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_52();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,1256.5,457), null);


(lib.Group_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_53();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0,274.5,88), null);


(lib.redX = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E52A27").s().p("AB2ChQgNAAgIgKIjvkFQgIgKAAgMQABgMAJgIQAKgJANABQANAAAIAKIDvEEQAIAKAAANQgBAMgKAJQgIAHgMAAIgCAAg");
	this.shape.setTransform(40.875,-33.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E52A27").s().p("AiSCSQgJgIAAgMQAAgNAJgJID5j6QAJgIANgBQANAAAJAJQAJAJAAANQAAAMgJAIIj5D6QgJAJgNAAQgNABgJgKg");
	this.shape_1.setTransform(39.1487,-34);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.redX, new cjs.Rectangle(23.6,-50,32.4,32.2), null);


(lib.endscreenSpike = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D28148","#E3AB7A","#D4874F"],[0,0.463,1],-7.8,-3.1,11.8,-3.1).s().p("AALdyQgLAAgFgCQgFgFgHgEQgUgKgBgPIAEttQABg3ACALMgAIgldQgCgBAAgEIADkIIAli8IAnC8IgEEBIAABCMAAIAraIgCHmQAAAPgUAKQgHAEAFAFQADACgKAAg");
	this.shape.setTransform(1,-190.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.endscreenSpike, new cjs.Rectangle(-3.2,-381,8.4,381.2), null);


(lib.an_CSS = function(options) {
	this.initialize();
	this._element = new $.an.CSS(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.speed = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1));

	// Layer_1
	this.text = new cjs.Text("x", "normal 700 15px 'Assistant'", "#332666");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 18;
	this.text.parent = this;
	this.text.setTransform(-5.45,-9.7);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.text_1 = new cjs.Text("1", "normal 700 23px 'Assistant'", "#332666");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 32;
	this.text_1.lineWidth = 18;
	this.text_1.parent = this;
	this.text_1.setTransform(5.5,-14.95);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_1);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1,p:{color:"#332666",x:5.5,text:"1",lineWidth:18}},{t:this.text,p:{color:"#332666",x:-5.45}}]}).to({state:[{t:this.text_1,p:{color:"#D4C8D3",x:5.5,text:"1",lineWidth:18}},{t:this.text,p:{color:"#D4C8D3",x:-5.45}}]},1).to({state:[{t:this.text_1,p:{color:"#332666",x:5,text:"0.5",lineWidth:36}},{t:this.text,p:{color:"#332666",x:-14.25}}]},1).to({state:[{t:this.text_1,p:{color:"#D4C8D3",x:5,text:"0.5",lineWidth:36}},{t:this.text,p:{color:"#D4C8D3",x:-14.25}}]},1).to({state:[{t:this.text_1,p:{color:"#332666",x:5,text:"1.5",lineWidth:36}},{t:this.text,p:{color:"#332666",x:-14.25}}]},1).to({state:[{t:this.text_1,p:{color:"#D4C8D3",x:5,text:"1.5",lineWidth:36}},{t:this.text,p:{color:"#D4C8D3",x:-14.25}}]},1).to({state:[{t:this.text_1,p:{color:"#332666",x:5.5,text:"2",lineWidth:18}},{t:this.text,p:{color:"#332666",x:-5.45}}]},1).to({state:[{t:this.text_1,p:{color:"#D4C8D3",x:5.5,text:"2",lineWidth:18}},{t:this.text,p:{color:"#D4C8D3",x:-5.45}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.2,-16.9,50,33.8);


(lib.skiptonext = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// _Group_
	this.text = new cjs.Text("דלגי לשלב הבא\n!לא לשכוח למחוק אותי", "normal 700 15px 'Assistant'", "#332666");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 135;
	this.text.parent = this;
	this.text.setTransform(1.25,-22);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#9A819E","#F7E5D4"],[0.11,0.769],-86.1,0,86.2,0).s().p("ApgC6Qj9hNAAhtQAAhrD9hOQD+hNFjAAQFkAAD8BNQD9BNAABsQAABtj9BNQj6BNlmAAQllAAj8hNg");
	this.shape.setTransform(0.075,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.skiptonext, new cjs.Rectangle(-86.1,-26.2,172.39999999999998,88.7), null);


(lib.skip = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.text = new cjs.Text("דלגו", "normal 700 23px 'Assistant'", "#332666");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.lineWidth = 50;
	this.text.parent = this;
	this.text.setTransform(0,-15.05);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#FCEBEB"},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-17,53.5,34.1);


(lib.playagain = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#53529E","#352768"],[0.259,1],0,0,0,0,0,6.6).s().p("Ag4BEQgFgDAAgGIAAh1QAAgGAFgDQAGgDAFADIBlA7QAGADAAAFQAAAGgGADIhlA7IgFACIgGgCg");
	this.shape.setTransform(1.425,0);

	this.text = new cjs.Text("שחקו שוב", "normal 400 15px 'Assistant'", "#F7C7CB");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 86;
	this.text.parent = this;
	this.text.setTransform(-22.45,57.25);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#53529E","#352768"],[0.259,1],0,0,0,0,0,43.4).s().p("Ak4DyQgcAAgVgUQgUgVAAgcIAAidQAAgcAUgUQAVgUAcAAIFXAAIBti9IAbC9ICSAAQAdAAAUAUQAUAUAAAcIAACdQAAAcgUAVQgUAUgdAAg");
	this.shape_1.setTransform(-22.45,54.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#F7E5D4","#9A819E"],[0,1],0,0,0,0,0,6.6).s().p("Ag4BEQgFgDAAgGIAAh1QAAgGAFgDQAGgDAFADIBlA7QAGADAAAFQAAAGgGADIhlA7IgFACIgGgCg");
	this.shape_2.setTransform(1.425,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.text}]},1).wait(1));

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#53529E","#352768"],[0.259,1],0,0,0,0,0,18.5).s().p("Ag/CuQgjgOgbgcQgagagPgjQgOgiAAglQAAglAOgiQAPgjAagaQA3g3BNAAQBNAAA3A2IATgTQAAgBABAAQAAgBABAAQAAAAABAAQABAAAAAAQACABABADIAGA9QAAAEgCACQgCACgEAAIg9gGQgDgBgBgCQgBAAAAgBQABAAAAgBQAAAAAAgBQABAAABgBIATgUQgvgthBAAQhBAAgvAvQgvAvAABBQAABCAvAvQAuAuBAABQAyAAApgbQAngaATgsQADgGAGgCQAGgCAFADQAFADABAFQACAFgCAFQgOAggaAaQgaAaghAPQgiAOgkABIgFAAQgkAAghgOg");
	this.shape_3.setTransform(-0.0056,0.0032);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#F7E5D4","#9A819E"],[0,1],0,0,0,0,0,18.5).s().p("Ag/CuQgjgOgbgcQgagagPgjQgOgiAAglQAAglAOgiQAPgjAagaQA3g3BNAAQBNAAA3A2IATgTQAAgBABAAQAAgBABAAQAAAAABAAQABAAAAAAQACABABADIAGA9QAAAEgCACQgCACgEAAIg9gGQgDgBgBgCQgBAAAAgBQABAAAAgBQAAAAAAgBQABAAABgBIATgUQgvgthBAAQhBAAgvAvQgvAvAABBQAABCAvAvQAuAuBAABQAyAAApgbQAngaATgsQADgGAGgCQAGgCAFADQAFADABAFQACAFgCAFQgOAggaAaQgaAaghAPQgiAOgkABIgFAAQgkAAghgOg");
	this.shape_4.setTransform(-0.0056,0.0032);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.6,-18.8,90.3,98.5);


(lib.pause = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#53529E","#352768"],[0.259,1],0,0,0,0,0,7.2).s().p("AgTBjIAAjFIAnAAIAADFg");
	this.shape.setTransform(-5.7,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#53529E","#352768"],[0.259,1],0,0,0,0,0,7.2).s().p("AgTBjIAAjFIAnAAIAADFg");
	this.shape_1.setTransform(5.7,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#9B839F","#F8E5D5"],[0.106,0.765],-2,0,2,0).s().p("AgTBjIAAjFIAnAAIAADFg");
	this.shape_2.setTransform(-5.7,0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#9B839F","#F8E5D5"],[0.106,0.765],-2,0,2,0).s().p("AgTBjIAAjFIAnAAIAADFg");
	this.shape_3.setTransform(5.7,0.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#53529E","#352768"],[0.259,1],0,0,0,0,0,16.5).s().p("Ahrh7IDXB8IjXB7g");
	this.shape_4.setTransform(2.525,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#9B839F","#F8E5D5"],[0.106,0.765],-10.7,0,10.8,0).s().p("Ahrh7IDXB8IjXB7g");
	this.shape_5.setTransform(2.525,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.2,-12.4,21.5,24.9);


(lib.muteBTN = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_37();
	this.instance.setTransform(-26.25,-26.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.muteBTN, new cjs.Rectangle(-26.2,-26.3,52.5,52.5), null);


(lib.mute = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#53529E","#352768"],[0.259,1],0,0,0,0,0,6.3).s().p("AgVBRQgFgEgBgGQAAgHAEgFQAVgZAAgiQABgggUgbIgBgBQgEgFABgGQACgHAFgDQAFgEAGACQAHABACAFQAbAjgBArQgBAsgbAiQgEAFgIAAQgGAAgDgDg");
	this.shape.setTransform(6.224,0.3025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#53529E","#352768"],[0.259,1],0,0,0,0,0,9.2).s().p("AgeB6QgFgEAAgHQgBgGAFgFQAkgqABg5QAAg4gjgsQgEgFABgGQAAgGAFgEQAFgFAGABQAGAAAFAFIgBABQArA0gBBDQgBBEgsAzQgEAFgHAAIgBAAQgFAAgEgDg");
	this.shape_1.setTransform(11.1228,0.3753);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#53529E","#352768"],[0.259,1],0,0,0,0,0,10.6).s().p("AA7CBIg4g2QgKgPgTADIgiAAQgEAAgDgDQgDgDAAgEIAAhpQAAgEADgDQADgDAEAAIAiAAQATADAKgPIA4g2QAEgEAEABQAEABAAAIIAAD1QAAAHgDACIgCAAQgDAAgEgDg");
	this.shape_2.setTransform(-5.6,0.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#9B839F","#F8E5D5"],[0.106,0.765],-5.4,3.1,8.2,3.1).s().p("AgKB6QgEgEgBgHQAAgGAEgFQAkgqABg5QABg4gjgsQgEgFAAgGQAAgGAFgEQAFgFAFABQAHAAAEAFIAAABQArA0AABDQgBBEgtAzQgFAFgGAAIgBAAQgFAAgEgDgAgyBQQgFgDAAgHQgBgGAEgFQAVgaABghQAAghgUgaIgBgBQgDgGABgGQABgGAFgEQAGgDAGABQAGACAEAFQAZAjAAArQgBAsgbAhQgFAGgHAAQgGAAgEgEg");
	this.shape_3.setTransform(9.0975,0.3253);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#F8E5D5","#9B839F"],[0,1],-11.5,0,11.6,0).s().p("AA7CAIg4g1QgKgPgTADIgiAAQgEAAgDgDQgDgDAAgEIAAhpQAAgEADgDQADgDAEAAIAiAAQATAEAKgQIA4g1QAEgGAEACQAEACAAAGIAAD3QAAAGgDACIgCAAQgDAAgEgEg");
	this.shape_4.setTransform(-5.6,0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#53529E","#352768"],[0.259,1],0,0,0,0,0,3.9).s().p("AATA2IhJh/Ig6hlIASgKIA3BfIA6BkIAYAqIAPAZIA3BhIgSALg");
	this.shape_5.setTransform(-0.375,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#53529E","#352768"],[0.259,1],0,0,0,0,0,9.2).s().p("AgeB6QgFgEAAgHQgBgGAFgFQAJgKAHgMQAUgiABgrQAAgygbgoIgIgKQgEgFABgGQAAgGAFgEQAFgFAGABQAGAAAFAFIgBABQALAOAIAPQAYApgBAxQAAAqgRAjQgLAXgRATQgEAFgHAAIgBAAQgFAAgEgDg");
	this.shape_6.setTransform(11.1228,0.3253);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#53529E","#352768"],[0.259,1],-0.1,0.1,0,-0.1,0.1,6.3).s().p("AgXA6QAUgZAAggQABghgUgaIgBgBQgEgGABgGQACgGAFgEQAFgDAGABQAHACACAFQAbAjgBArQgBAsgbAhQgDAEgEABg");
	this.shape_7.setTransform(6.3157,0.2275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#53529E","#352768"],[0.259,1],0,0,0,0,0,10.6).s().p("AA7CAIg4g1QgKgPgTADIgiAAQgEAAgDgDQgDgDAAgEIAAhpQAAgEADgDQADgDAEAAIAiAAQAPADAJgJIBJB/IAABBQAAAGgDACIgCAAQgDAAgEgEgAANhUIAugrQAEgGAEACQAEACAAAGIAACLg");
	this.shape_8.setTransform(-5.6,0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#F8E5D5","#9B839F"],[0,1],-11.3,0,11.3,0).s().p("AATA2IhJh/Ig6hlIASgKIA3BfIA6BkIAYAqIAPAZIA3BhIgSALg");
	this.shape_9.setTransform(-0.375,0.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#9B839F","#F8E5D5"],[0.106,0.765],-5.5,3.1,8.1,3.1).s().p("AgLB6QgEgEgBgHQAAgGAEgFQAkgqABg5QABg4gjgsQgEgFAAgGQAAgGAFgEQAFgFAFABQAHAAAEAFIAAABQArA0AABDQgBBEgtAzQgFAFgGAAIgBAAQgEAAgFgDgAg0A5QAUgZABggQAAghgUgaIgBgBQgDgGABgGQABgGAFgEQAGgDAGABQAGACAEAFQAaAjgBArQgBAsgbAhQgDAEgFABg");
	this.shape_10.setTransform(9.1892,0.3253);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#F8E5D5","#9B839F"],[0,1],-11.5,0,11.6,0).s().p("AA7CAIg4g1QgKgPgTADIgiAAQgEAAgDgDQgDgDAAgEIAAhpQAAgEADgDQADgDAEAAIAiAAQAPADAJgJIBJB/IAABBQAAAGgDACIgCAAQgDAAgEgEgAANhUIAugrQAEgGAEACQAEACAAAGIAACLg");
	this.shape_11.setTransform(-5.6,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.7,-17.7,27.5,37.099999999999994);


(lib.home = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#9A819E","#F7E5D4"],[0.106,0.765],-2.4,0,2.4,0).s().p("AgXAYIAAgvIAvAAIAAAvg");
	this.shape.setTransform(-3.5,7.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#9A819E","#F7E5D4"],[0.106,0.765],-2.4,0,2.4,0).s().p("AgXAYIAAgvIAvAAIAAAvg");
	this.shape_1.setTransform(-3.5,1.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#9A819E","#F7E5D4"],[0.106,0.765],-2.4,0,2.4,0).s().p("AgXAYIAAgvIAvAAIAAAvg");
	this.shape_2.setTransform(3.5,7.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#9A819E","#F7E5D4"],[0.106,0.765],-2.4,0,2.4,0).s().p("AgXAYIAAgvIAvAAIAAAvg");
	this.shape_3.setTransform(3.5,1.15);

	this.text = new cjs.Text("למסך הבית", "normal 400 15px 'Assistant'", "#F7C7CB");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 86;
	this.text.parent = this;
	this.text.setTransform(-14.55,57);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.instance = new lib.CachedBmp_36();
	this.instance.setTransform(-52.75,30.15,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_35();
	this.instance_1.setTransform(-5.9,-1.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.text}]},1).wait(1));

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#53529E","#352768"],[0.259,1],0,0,0,0,0,14.8).s().p("AhlCQIAAiaIgZAAQgSACgGgIQgFgHAKgIIB/hoQAGgIAMAAQAMAAAHAIIB/BoQATAVgmAAIgZAAIAACag");
	this.shape_4.setTransform(0.0166,0.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#F7E5D4","#9A819E"],[0,1],0,0,0,0,0,17.6).s().p("AhlCQIAAiaIgZAAQgSACgGgIQgFgHAKgIIB/hoQAGgIAMAAQAMAAAHAIIB/BoQATAVgmAAIgZAAIAACag");
	this.shape_5.setTransform(0.0166,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.7,-14.3,90.30000000000001,93.8);


(lib.BTNbg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F7E5D4","#9A819E"],[0,1],0,0,0,0,0,26.5).s().p("Ai5C6QhNhNAAhtQAAhrBNhOQBOhNBrAAQBtAABNBNQBNBNAABsQAABthNBNQhNBNhtAAQhsAAhNhNg");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#5353A0","#352868"],[0.259,1],0,0,0,0,0,26.3).s().p("AAAEHQhsAAhNhNQhNhNAAhtQAAhsBNhNQBNhNBsAAIAAAAQBfAABHA7IAUASQBNBNAABsQAABthNBNIgUASQhHA7hfAAg");
	this.shape_1.setTransform(0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.2,-26.3,52.5,52.6);


(lib.littleFire = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],0,15,0,-14.9).s().p("AhCCBQgbggALgiQAJgeAfgaQAMgKAtggQAngcASgcIAOg6QAEAdgSAdIgLAwQgJBMghBJQgNAcgPAJQgKAHgLAAQgSAAgSgVg");
	this.shape.setTransform(0.0295,-0.026);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.littleFire, new cjs.Rectangle(-8.6,-15,17.299999999999997,30), null);


(lib.fireLightUp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.169)").s().p("AoeUGQj6hqjCjBQjBjBhqj7QhukDABkcQgBkbBukDQBqj6DBjBQDCjCD6hqQEDhtEbAAQEcAAEDBtQD6BqDBDCQDCDBBqD6QBtEDABEbQgBEchtEDQhqD7jCDBQjBDBj6BqQkDBtkcAAQkbAAkDhtg");
	this.shape.setTransform(330,520.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.169)").s().p("AoeUIQj8hqjBjCQjCjBhqj7QhukDABkdQgBkbBukDQBqj7DCjBQDBjCD8hqQEDhuEbAAQEdAAEDBuQD7BqDBDCQDCDBBqD7QBtEDAAEbQAAEdhtEDQhqD7jCDBQjBDCj7BqQkDBtkdAAQkbAAkDhtg");
	this.shape_1.setTransform(330,520.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.169)").s().p("AofUJQj8hqjBjCQjDjBhpj7QhukEAAkdQAAkcBukDQBpj8DDjBQDBjCD8hqQEDhuEcAAQEdAAEEBuQD7BqDBDCQDDDBBpD8QBvEDAAEcQAAEdhvEEQhpD7jDDBQjBDCj7BqQkEBukdAAQkcAAkDhug");
	this.shape_2.setTransform(330,521.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.169)").s().p("AogULQj8hqjCjCQjCjChqj7QhukEgBkeQABkcBukEQBqj8DCjBQDCjDD8hqQEEhuEcAAQEdAAEFBuQD7BqDBDDQDDDBBrD8QBuEEAAEcQAAEehuEEQhrD7jDDCQjBDCj7BqQkFBukdAAQkcAAkEhug");
	this.shape_3.setTransform(330,521.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.169)").s().p("AohUNQj8hrjCjBQjCjDhrj8QhukEgBkdQABkeBukEQBrj7DCjDQDCjDD8hqQEFhuEcAAQEeAAEEBuQD8BqDCDDQDCDDBsD7QBtEEAAEeQAAEdhtEEQhsD8jCDDQjCDBj8BrQkEBukeAAQkcAAkFhug");
	this.shape_4.setTransform(330,521.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.169)").s().p("AoiUPQj8hrjDjCQjCjDhrj8QhukEAAkfQAAkdBukEQBrj8DCjDQDDjDD8hrQEFhuEdAAQEeAAEFBuQD8BrDCDDQDDDDBrD8QBuEEAAEdQAAEfhuEEQhrD8jDDDQjCDCj8BrQkFBukeAAQkdAAkFhug");
	this.shape_5.setTransform(330.025,521.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.169)").s().p("AojURQj8hsjDjCQjDjDhrj9QhukFAAkeQAAkeBukEQBrj9DDjDQDDjDD8hqQEFhvEeAAQEeAAEFBvQD9BqDDDDQDDDDBrD9QBuEEAAEeQAAEehuEFQhrD9jDDDQjDDCj9BsQkFBukeAAQkeAAkFhug");
	this.shape_6.setTransform(330.025,522.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.169)").s().p("AojUTQj9hrjDjEQjEjChrj+QhukFAAkfQAAkeBukFQBrj9DEjDQDDjDD9hsQEFhuEeAAQEfAAEFBuQD9BsDDDDQDDDDBrD9QBvEFAAEeQAAEfhvEFQhrD+jDDCQjDDEj9BrQkFBukfAAQkeAAkFhug");
	this.shape_7.setTransform(330.025,522.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.169)").s().p("AokUUQj+hrjDjDQjDjDhsj+QhukGAAkfQAAkeBukGQBsj9DDjDQDDjED+hrQEGhvEeAAQEfAAEGBvQD9BrDDDEQDEDDBrD9QBvEGAAEeQAAEfhvEGQhrD+jEDDQjDDDj9BrQkGBvkfAAQkeAAkGhvg");
	this.shape_8.setTransform(330.025,522.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.169)").s().p("AolUWQj+hsjDjDQjEjEhrj9QhvkGAAkgQAAkeBvkHQBrj9DEjEQDDjDD+hsQEGhvEfAAQEfAAEHBvQD9BsDEDDQDEDEBrD9QBvEHAAEeQAAEghvEGQhrD9jEDEQjEDDj9BsQkHBvkfAAQkfAAkGhvg");
	this.shape_9.setTransform(330.025,522.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.169)").s().p("AomUYQj+hrjDjFQjFjDhrj+QhvkGAAkhQAAkeBvkIQBrj+DFjDQDDjED+hsQEHhvEfAAQEgAAEHBvQD+BsDDDEQDEDDBsD+QBvEIAAEeQAAEhhvEGQhsD+jEDDQjDDFj+BrQkHBvkgAAQkfAAkHhvg");
	this.shape_10.setTransform(330.025,523.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.169)").s().p("AomUaQj/hsjEjEQjEjEhsj+QhvkHAAkhQAAkfBvkHQBsj+DEjEQDEjFD/hsQEHhvEfAAQEgAAEHBvQD/BsDEDFQDEDEBsD+QBvEHAAEfQAAEhhvEHQhsD+jEDEQjEDEj/BsQkHBvkgAAQkfAAkHhvg");
	this.shape_11.setTransform(330.025,523.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.169)").s().p("AonUcQj/hsjEjEQjEjFhsj+QhwkIAAkgQAAkgBwkIQBsj+DEjFQDEjED/hsQEHhwEgAAQEhAAEIBwQD+BsDFDEQDEDFBsD+QBvEIAAEgQAAEghvEIQhsD+jEDFQjFDEj+BsQkIBvkhAAQkgAAkHhvg");
	this.shape_12.setTransform(330,523.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.169)").s().p("AonUdQkAhsjEjEQjFjFhsj/QhwkIAAkhQAAkgBwkIQBsj/DFjEQDEjFEAhsQEHhwEgAAQEiAAEHBwQD/BsDFDFQDFDEBsD/QBvEIAAEgQAAEhhvEIQhsD/jFDFQjFDEj/BsQkHBwkiAAQkgAAkHhwg");
	this.shape_13.setTransform(330,523.975);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.169)").s().p("AooUfQkAhsjFjFQjFjEhskAQhwkIAAkiQAAkgBwkIQBskADFjFQDFjFEAhsQEHhwEhAAQEiAAEIBwQEABsDEDFQDGDFBsEAQBvEIAAEgQAAEihvEIQhsEAjGDEQjEDFkABsQkIBwkiAAQkhAAkHhwg");
	this.shape_14.setTransform(330,524.225);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.169)").s().p("AopUhQkAhsjFjGQjGjEhskAQhwkJAAkiQAAkgBwkJQBskADGjFQDFjGEAhsQEIhvEhgBQEiABEIBvQEABsDFDGQDGDFBsEAQBwEJAAEgQAAEihwEJQhsEAjGDEQjFDGkABsQkIBwkiAAQkhAAkIhwg");
	this.shape_15.setTransform(330.025,524.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.169)").s().p("AoqUjQkAhtjGjFQjGjFhskBQhwkIAAkjQAAkhBwkJQBskADGjFQDGjGEAhtQEJhwEhAAQEiAAEJBwQEABtDGDGQDGDFBsEAQBwEJAAEhQAAEjhwEIQhsEBjGDFQjGDFkABtQkJBwkiAAQkhAAkJhwg");
	this.shape_16.setTransform(330.025,524.775);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.169)").s().p("AorUlQkAhtjGjGQjGjGhtkAQhwkJAAkjQAAkiBwkJQBtkBDGjFQDGjGEAhtQEJhvEiAAQEjAAEJBvQEABtDGDGQDGDFBtEBQBwEJAAEiQAAEjhwEJQhtEAjGDGQjGDGkABtQkJBvkjAAQkiAAkJhvg");
	this.shape_17.setTransform(330.025,525.05);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.169)").s().p("AosUnQkBhtjFjGQjHjGhskBQhxkJAAkkQAAkiBxkKQBskADHjGQDFjGEBhtQEKhwEigBQEjABEKBwQEBBtDFDGQDHDGBsEAQBxEKAAEiQAAEkhxEJQhsEBjHDGQjFDGkBBtQkKBvkjAAQkiAAkKhvg");
	this.shape_18.setTransform(330.025,525.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.169)").s().p("AosUoQkChtjGjGQjHjGhskCQhxkJAAkkQAAkjBxkJQBskBDHjHQDGjGEChtQEJhxEjAAQEkAAEJBxQECBtDGDGQDHDHBsEBQBxEJAAEjQAAEkhxEJQhsECjHDGQjGDGkCBtQkJBxkkAAQkjAAkJhxg");
	this.shape_19.setTransform(330.025,525.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.169)").s().p("AotUqQkChtjGjHQjHjGhtkCQhxkKAAkkQAAkiBxkLQBtkBDHjHQDGjHEChtQEKhwEjAAQEkAAEKBwQECBtDGDHQDHDHBtEBQBxEKAAEjQAAEkhxEKQhtECjHDGQjGDHkCBtQkKBxkkAAQkjAAkKhxg");
	this.shape_20.setTransform(330.025,525.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.169)").s().p("AouUsQkChtjHjHQjHjGhtkDQhxkKAAklQAAkjBxkLQBtkBDHjIQDHjHEChtQELhwEjgBQEkABELBwQECBtDHDHQDHDIBtEBQBxELAAEjQAAElhxEKQhtEDjHDGQjHDHkCBtQkLBxkkAAQkjAAkLhxg");
	this.shape_21.setTransform(330.025,526.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.169)").s().p("AovUuQkChujHjHQjHjHhukCQhxkLAAklQAAkjBxkMQBukCDHjHQDHjHEChtQELhxEkAAQElAAELBxQECBtDHDHQDIDHBtECQBxEMAAEjQAAElhxELQhtECjIDHQjHDHkCBuQkLBwklAAQkkAAkLhwg");
	this.shape_22.setTransform(330.025,526.375);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.169)").s().p("AovUwQkDhujHjIQjIjGhtkDQhykMAAklQAAkkBykLQBtkDDIjHQDHjIEDhtQELhyEkAAQElAAEMByQECBtDHDIQDIDHBuEDQBxELAAEkQAAElhxEMQhuEDjIDGQjHDIkCBuQkMBwklAAQkkAAkLhwg");
	this.shape_23.setTransform(330.025,526.65);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.169)").s().p("AowUxQkDhtjIjIQjIjHhtkDQhykMAAkmQAAkkBykMQBtkDDIjIQDIjIEDhtQEMhxEkAAQEmAAELBxQEDBtDIDIQDIDIBtEDQByEMAAEkQAAEmhyEMQhtEDjIDHQjIDIkDBtQkLBxkmAAQkkAAkMhxg");
	this.shape_24.setTransform(330.025,526.925);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.169)").s().p("AoxUzQkDhujIjHQjJjIhtkEQhxkMgBkmQABklBxkMQBtkDDJjIQDIjIEDhuQEMhxElAAQEmAAEMBxQEDBuDIDIQDJDIBtEDQByEMgBElQABEmhyEMQhtEEjJDIQjIDHkDBuQkMBxkmAAQklAAkMhxg");
	this.shape_25.setTransform(330.05,527.175);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.169)").s().p("AoyU1QkEhujIjIQjJjIhtkEQhxkMgBknQABklBxkNQBtkDDJjJQDIjIEEhuQEMhxEmAAQEmAAEMBxQEFBuDHDIQDJDJBuEDQByENgBElQABEnhyEMQhuEEjJDIQjHDIkFBuQkMBxkmAAQkmAAkMhxg");
	this.shape_26.setTransform(330.05,527.475);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.169)").s().p("AozU3QkDhujJjJQjJjIhukEQhykNABknQgBklBykNQBukEDJjJQDJjIEDhvQENhxEmAAQEmAAENBxQEFBvDIDIQDJDJBuEEQBxENABElQgBEnhxENQhuEEjJDIQjIDJkFBuQkNBxkmAAQkmAAkNhxg");
	this.shape_27.setTransform(330.05,527.725);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,255,255,0.169)").s().p("AozU5QkFhvjIjJQjKjIhukEQhxkOAAknQAAkmBxkNQBukEDKjJQDIjJEFhuQEMhyEnAAQEnAAENByQEEBuDJDJQDKDJBtEEQBzENAAEmQAAEnhzEOQhtEEjKDIQjJDJkEBvQkNBxknAAQknAAkMhxg");
	this.shape_28.setTransform(330.05,528);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.169)").s().p("Ao0U7QkFhvjIjJQjKjJhvkEQhxkOgBkoQABkmBxkOQBvkFDKjIQDIjKEFhuQENhyEnAAQEnAAEOByQEFBuDJDKQDJDIBuEFQByEOAAEmQAAEohyEOQhuEEjJDJQjJDJkFBvQkOBxknAAQknAAkNhxg");
	this.shape_29.setTransform(330.05,528.25);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,255,255,0.169)").s().p("Ao1U8QkFhujJjKQjKjJhukFQhykOgBkoQABknBykOQBukFDKjJQDJjJEFhvQEOhyEnAAQEoAAEOByQEFBvDJDJQDJDJBvEFQBzEOgBEnQABEohzEOQhvEFjJDJQjJDKkFBuQkOBykoAAQknAAkOhyg");
	this.shape_30.setTransform(330.05,528.525);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,255,255,0.169)").s().p("Ao1U+QkGhvjKjKQjKjIhukGQhykOAAkpQAAknBykPQBukFDKjJQDKjKEGhvQENhyEoAAQEpAAEOByQEFBvDJDKQDKDJBvEFQBzEPAAEnQAAEphzEOQhvEGjKDIQjJDKkFBvQkOBykpAAQkoAAkNhyg");
	this.shape_31.setTransform(330.05,528.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,255,255,0.169)").s().p("Ao2VAQkGhvjKjKQjKjJhvkGQhzkPABkoQgBkoBzkPQBvkGDKjKQDKjKEGhuQEOhzEoAAQEpAAEPBzQEFBuDKDKQDKDKBuEGQBzEPABEoQAAEoh0EPQhuEGjKDJQjKDKkFBvQkPBykpAAQkoAAkOhyg");
	this.shape_32.setTransform(330.05,529.05);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(255,255,255,0.169)").s().p("Ao3VCQkHhwjJjJQjLjKhvkHQhykPgBkpQABkoBykPQBvkGDLjKQDJjKEHhvQEPhzEoAAQEpAAEPBzQEHBvDJDKQDLDKBuEGQB0EPAAEoQAAEph0EPQhuEHjLDKQjJDJkHBwQkPBykpAAQkoAAkPhyg");
	this.shape_33.setTransform(330.05,529.35);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(255,255,255,0.169)").s().p("Ao4VEQkGhwjKjKQjMjKhukHQh0kPAAkqQAAkoB0kPQBukHDMjLQDKjKEGhvQEPhzEpAAQEpAAEQBzQEHBvDKDKQDLDLBuEHQB0EPgBEoQABEqh0EPQhuEHjLDKQjKDKkHBwQkQBykpAAQkpAAkPhyg");
	this.shape_34.setTransform(330.05,529.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(255,255,255,0.169)").s().p("Ao5VFQkGhvjLjLQjLjKhvkHQhzkQAAkqQAAkpBzkQQBvkGDLjLQDLjLEGhvQEQhzEpAAQEqAAEPBzQEHBvDLDLQDLDLBvEGQBzEQAAEpQAAEqhzEQQhvEHjLDKQjLDLkHBvQkPBzkqAAQkpAAkQhzg");
	this.shape_35.setTransform(330.05,529.875);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(255,255,255,0.169)").s().p("Ao6VHQkGhvjLjLQjMjLhvkHQhzkQAAkqQAAkqBzkQQBvkHDMjLQDLjLEGhwQEQhzEqAAQEqAAEQBzQEIBwDLDLQDLDLBvEHQBzEQAAEqQAAEqhzEQQhvEHjLDLQjLDLkIBvQkQBzkqAAQkqAAkQhzg");
	this.shape_36.setTransform(330.05,530.125);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(255,255,255,0.169)").s().p("Ao6VIQkIhvjLjLQjLjLhwkIQhzkQAAkrQAAkqBzkQQBwkIDLjLQDLjLEIhwQEQhzEqAAQErAAEQBzQEIBwDKDLQDMDLBwEIQBzEQAAEqQAAErhzEQQhwEIjMDLQjKDLkIBvQkQB0krAAQkqAAkQh0g");
	this.shape_37.setTransform(330.05,530.425);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(255,255,255,0.169)").s().p("Ao7VKQkIhvjLjLQjMjMhwkIQhzkQAAksQAAkqBzkRQBwkHDMjMQDLjMEIhvQERh0EqAAQErAAERB0QEIBvDLDMQDMDMBvEHQB0ERAAEqQAAEsh0EQQhvEIjMDMQjLDLkIBvQkRB0krAAQkqAAkRh0g");
	this.shape_38.setTransform(330.05,530.675);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(255,255,255,0.169)").s().p("Ao8VMQkIhwjMjLQjMjLhwkJQhzkRAAksQAAkqBzkSQBwkIDMjMQDMjLEIhxQERhyErgBQErABERByQEJBxDLDLQDNDMBvEIQB0ESAAEqQAAEsh0ERQhvEJjNDLQjLDLkJBwQkRB0krgBQkrABkRh0g");
	this.shape_39.setTransform(330.05,530.95);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(255,255,255,0.169)").s().p("Ao9VOQkIhwjMjMQjMjMhwkIQh0kSAAksQAAkrB0kRQBwkJDMjMQDMjMEIhwQESh0ErAAQEsAAERB0QEJBwDMDMQDMDMBxEJQBzERAAErQAAEshzESQhxEIjMDMQjMDMkJBwQkRB0ksAAQkrAAkSh0g");
	this.shape_40.setTransform(330.05,531.225);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(255,255,255,0.169)").s().p("Ao9VQQkJhwjMjMQjNjMhwkJQh0kSAAktQAAkrB0kSQBwkJDNjMQDMjNEJhwQESh0ErAAQEsAAETB0QEIBwDNDNQDMDMBwEJQB0ESAAErQAAEth0ESQhwEJjMDMQjNDMkIBwQkTB0ksAAQkrAAkSh0g");
	this.shape_41.setTransform(330.05,531.475);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(255,255,255,0.169)").s().p("Ao+VRQkJhvjMjNQjOjMhwkJQh0kTAAksQAAksB0kTQBwkJDOjMQDMjNEJhwQETh0ErAAQEtAAESB0QEKBwDMDNQDNDMBwEJQB0ETAAEsQAAEsh0ETQhwEJjNDMQjMDNkKBvQkSB1ktAAQkrAAkTh1g");
	this.shape_42.setTransform(330.05,531.75);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(255,255,255,0.169)").s().p("Ao+VTQkLhvjMjNQjNjNhxkJQh0kUAAksQAAktB0kSQBxkKDNjNQDMjNELhxQESh0EsAAQEuAAESB0QEKBxDMDNQDODNBvEKQB1ESAAEtQAAEsh1EUQhvEJjODNQjMDNkKBvQkSB1kuAAQksAAkSh1g");
	this.shape_43.setTransform(330.05,532);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(255,255,255,0.169)").s().p("Ao/VVQkKhwjOjOQjNjMhxkKQh0kTAAkuQAAksB0kTQBxkLDNjMQDOjOEKhxQEThzEsgBQEuABETBzQEJBxDNDOQDODMBwELQB1ETAAEsQAAEuh1ETQhwEKjODMQjNDOkJBwQkTB1kuAAQksAAkTh1g");
	this.shape_44.setTransform(330.05,532.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(255,255,255,0.169)").s().p("ApAVXQkLhwjNjOQjOjNhwkKQh1kTAAkuQAAktB1kUQBwkKDOjOQDNjNELhxQETh0EtAAQEuAAETB0QELBxDNDNQDODOBwEKQB1EUAAEtQAAEuh1ETQhwEKjODNQjNDOkLBwQkTB1kuAAQktAAkTh1g");
	this.shape_45.setTransform(330.075,532.55);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(255,255,255,0.169)").s().p("ApBVZQkLhxjNjNQjOjOhxkLQh1kTAAkvQAAktB1kUQBxkKDOjOQDNjOELhxQEUh0EtAAQEuAAEUB0QELBxDNDOQDODOBxEKQB1EUAAEtQAAEvh1ETQhxELjODOQjNDNkLBxQkUB0kuAAQktAAkUh0g");
	this.shape_46.setTransform(330.075,532.825);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(255,255,255,0.169)").s().p("ApCVaQkLhwjOjOQjOjOhxkLQh1kUAAkuQAAkvB1kTQBxkMDOjOQDOjOELhxQEUh1EuABQEvgBEUB1QELBxDNDOQDPDOBxEMQB1ETAAEvQAAEuh1EUQhxELjPDOQjNDOkLBwQkUB2kvgBQkuABkUh2g");
	this.shape_47.setTransform(330.075,533.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(255,255,255,0.169)").s().p("ApDVcQkLhxjOjOQjPjOhxkLQh1kVAAkvQAAkuB1kVQBxkLDPjOQDOjOELhyQEVh0EuAAQEvAAEUB0QEMByDODOQDPDOBxELQB1EVAAEuQAAEvh1EVQhxELjPDOQjODOkMBxQkUB1kvAAQkuAAkVh1g");
	this.shape_48.setTransform(330.075,533.375);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(255,255,255,0.169)").s().p("ApDVeQkMhxjOjOQjPjOhxkMQh2kVAAkwQAAkuB2kVQBxkMDPjOQDOjPEMhxQEUh1EvAAQEvAAEVB1QEMBxDODPQDPDOBxEMQB2EVAAEuQAAEwh2EVQhxEMjPDOQjODOkMBxQkVB1kvAAQkvAAkUh1g");
	this.shape_49.setTransform(330.075,533.625);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(255,255,255,0.169)").s().p("ApEVgQkMhxjPjPQjPjOhxkMQh2kVAAkwQAAkvB2kWQBxkMDPjOQDPjPEMhyQEVh1EvAAQEwAAEVB1QEMByDPDPQDPDOBxEMQB2EWAAEvQAAEwh2EVQhxEMjPDOQjPDPkMBxQkVB1kwAAQkvAAkVh1g");
	this.shape_50.setTransform(330.075,533.875);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(255,255,255,0.169)").s().p("ApFViQkMhyjPjPQjQjOhxkNQh2kVAAkxQAAkvB2kWQBxkMDQjPQDPjPEMhyQEWh1EvAAQEwAAEWB1QEMByDPDPQDQDPBxEMQB2EWAAEvQAAExh2EVQhxENjQDOQjPDPkMByQkWB1kwAAQkvAAkWh1g");
	this.shape_51.setTransform(330.075,534.175);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(255,255,255,0.169)").s().p("ApGVkQkNhyjOjPQjQjPhykNQh2kWAAkwQAAkwB2kWQBykNDQjPQDOjQENhyQEWh1EwAAQExAAEWB1QENByDODQQDQDPByENQB2EWAAEwQAAEwh2EWQhyENjQDPQjODPkNByQkWB1kxAAQkwAAkWh1g");
	this.shape_52.setTransform(330.075,534.425);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(255,255,255,0.169)").s().p("ApGVlQkOhxjPjQQjQjPhykNQh2kXAAkwQAAkxB2kWQBykNDQjQQDPjPEOhzQEWh1EwAAQExAAEWB1QEOBzDPDPQDQDQByENQB2EWAAExQAAEwh2EXQhyENjQDPQjPDQkOBxQkWB2kxAAQkwAAkWh2g");
	this.shape_53.setTransform(330.075,534.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(255,255,255,0.169)").s().p("ApHVnQkOhxjPjQQjRjQhxkNQh3kXAAkyQAAkwB3kXQBxkNDRjQQDPjQEOhyQEXh2EwAAQEyAAEWB2QEOByDPDQQDRDQBxENQB3EXAAEwQAAEyh3EXQhxENjRDQQjPDQkOBxQkWB2kyAAQkwAAkXh2g");
	this.shape_54.setTransform(330.075,534.975);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(255,255,255,0.169)").s().p("ApIVpQkOhyjQjQQjRjQhykOQh1kXgBkxQABkyB1kXQBykODRjPQDQjREOhyQEXh2ExAAQEyAAEWB2QEPByDPDRQDRDPByEOQB2EXAAEyQAAExh2EXQhyEOjRDQQjPDQkPByQkWB2kyAAQkxAAkXh2g");
	this.shape_55.setTransform(330.1,535.25);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(255,255,255,0.169)").s().p("ApJVrQkOhyjQjQQjRjRhykOQh3kXABkyQgBkyB3kYQBykODRjQQDQjREOhyQEXh2EyAAQEyAAEXB2QEPByDQDRQDQDQBzEOQB3EYAAEyQAAEyh3EXQhzEOjQDRQjQDQkPByQkXB2kyAAQkyAAkXh2g");
	this.shape_56.setTransform(330.1,535.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(255,255,255,0.169)").s().p("ApKVsQkPhxjPjSQjSjPhykPQh2kYAAkzQAAkyB2kXQBykPDSjRQDPjREPhyQEYh2EyAAQEyAAEYB2QEPByDQDRQDSDRByEPQB2EXABEyQgBEzh2EYQhyEPjSDPQjQDSkPBxQkYB3kyAAQkyAAkYh3g");
	this.shape_57.setTransform(330.1,535.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(255,255,255,0.169)").s().p("ApKVuQkPhyjRjRQjRjRhzkOQh2kZAAkyQAAkyB2kZQBzkPDRjRQDRjREPhzQEYh2EyAAQEzAAEYB2QEPBzDRDRQDRDRBzEPQB2EZAAEyQAAEyh2EZQhzEOjRDRQjRDRkPByQkYB3kzAAQkyAAkYh3g");
	this.shape_58.setTransform(330.075,536.05);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(255,255,255,0.169)").s().p("ApLVwQkPhyjRjRQjSjRhykQQh3kYAAk0QAAkyB3kZQBykPDSjRQDRjSEPhzQEZh2EyAAQE0AAEYB2QEPBzDRDSQDSDRBzEPQB2EZAAEyQAAE0h2EYQhzEQjSDRQjRDRkPByQkYB3k0AAQkyAAkZh3g");
	this.shape_59.setTransform(330.075,536.325);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(255,255,255,0.169)").s().p("ApMVyQkPhyjRjSQjSjRhzkQQh3kZAAkzQAAkzB3kaQBzkPDSjRQDRjSEPhzQEZh3EzAAQE0AAEZB3QEQBzDRDSQDSDRByEPQB3EaAAEzQAAEzh3EZQhyEQjSDRQjRDSkQByQkZB3k0AAQkzAAkZh3g");
	this.shape_60.setTransform(330.075,536.575);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(255,255,255,0.169)").s().p("ApMV0QkQhzjSjRQjSjShzkQQh3kZAAk0QAAk0B3kaQBzkPDSjSQDSjSEQhzQEZh3EzAAQE0AAEaB3QEQBzDRDSQDSDSBzEPQB3EaAAE0QAAE0h3EZQhzEQjSDSQjRDRkQBzQkaB3k0AAQkzAAkZh3g");
	this.shape_61.setTransform(330.075,536.85);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(255,255,255,0.169)").s().p("ApNV2QkRhzjRjSQjTjShzkQQh3kaAAk1QAAkzB3kaQBzkQDTjSQDRjSERh0QEZh3E0AAQE1AAEZB3QERB0DRDSQDTDSBzEQQB3EaAAEzQAAE1h3EaQhzEQjTDSQjRDSkRBzQkZB3k1AAQk0AAkZh3g");
	this.shape_62.setTransform(330.075,537.125);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(255,255,255,0.169)").s().p("ApOV4QkRhzjSjTQjSjSh0kQQh3kaAAk1QAAk0B3kbQB0kQDSjTQDSjSERh0QEah3E0AAQE1AAEaB3QERB0DSDSQDTDTBzEQQB3EbAAE0QAAE1h3EaQhzEQjTDSQjSDTkRBzQkaB3k1AAQk0AAkah3g");
	this.shape_63.setTransform(330.075,537.375);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(255,255,255,0.169)").s().p("ApPV5QkRhzjSjTQjTjShzkRQh4kaAAk2QAAk0B4kbQBzkRDTjSQDSjTERh0QEbh3E0AAQE2AAEaB3QERB0DSDTQDTDSB0ERQB3EbAAE0QAAE2h3EaQh0ERjTDSQjSDTkRBzQkaB4k2AAQk0AAkbh4g");
	this.shape_64.setTransform(330.075,537.675);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(255,255,255,0.169)").s().p("ApQV7QkRhzjSjTQjUjSh0kSQh3kbAAk2QAAk0B3kbQB0kSDUjSQDSjTERh0QEbh4E1AAQE2AAEaB4QESB0DTDTQDTDSBzESQB4EbAAE0QAAE2h4EbQhzESjTDSQjTDTkSBzQkaB4k2AAQk1AAkbh4g");
	this.shape_65.setTransform(330.1,537.925);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(255,255,255,0.169)").s().p("ApRV9QkRhzjTjUQjUjShzkTQh4kbAAk1QAAk2B4kbQBzkSDUjTQDTjTERh0QEbh4E2AAQE3AAEaB4QESB0DTDTQDTDTB0ESQB4EbAAE2QAAE1h4EbQh0ETjTDSQjTDUkSBzQkaB4k3AAQk2AAkbh4g");
	this.shape_66.setTransform(330.1,538.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(255,255,255,0.169)").s().p("ApRV/QkTh0jTjTQjTjTh0kTQh4kbAAk3QAAk1B4kcQB0kSDTjTQDTjUETh0QEch3E1AAQE3AAEbB3QESB0DTDUQDUDUB0ERQB4EcAAE1QAAE3h4EbQh0ETjUDTQjTDTkSB0QkbB4k3AAQk1AAkch4g");
	this.shape_67.setTransform(330.1,538.45);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(255,255,255,0.169)").s().p("ApSWAQkTh0jTjTQjUjThzkTQh5kbAAk3QAAk3B5kcQBzkSDUjUQDTjUETh0QEch3E2AAQE3AAEbB3QEUB0DSDUQDVDUB0ESQB4EcAAE3QAAE3h4EbQh0ETjVDTQjSDTkUB0QkbB4k3AAQk2AAkch4g");
	this.shape_68.setTransform(330.1,538.75);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(255,255,255,0.169)").s().p("ApRV/QkTh0jTjTQjTjTh0kTQh4kbAAk3QAAk1B4kcQB0kSDTjTQDTjUETh0QEch4E1AAQE3AAEbB4QESB0DTDUQDUDTB0ESQB4EcAAE1QAAE3h4EbQh0ETjUDTQjTDTkSB0QkbB4k3AAQk1AAkch4g");
	this.shape_69.setTransform(330.1,538.475);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(255,255,255,0.169)").s().p("ApRV9QkRh0jTjTQjUjThzkRQh4kbAAk3QAAk1B4kbQBzkSDUjTQDTjTERh0QEbh4E2AAQE3AAEaB4QESB0DTDTQDTDTB0ESQB4EbAAE1QAAE3h4EbQh0ERjTDTQjTDTkSB0QkaB4k3AAQk2AAkbh4g");
	this.shape_70.setTransform(330.1,538.225);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(255,255,255,0.169)").s().p("ApPV8QkSh0jSjTQjUjShzkSQh4kaAAk2QAAk1B4kbQBzkRDUjTQDSjTESh0QEah4E1AAQE2AAEbB4QERB0DTDTQDTDTB0ERQB3EbAAE1QAAE2h3EaQh0ESjTDSQjTDTkRB0QkbB3k2AAQk1AAkah3g");
	this.shape_71.setTransform(330.075,537.925);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(255,255,255,0.169)").s().p("ApPV6QkRh0jSjSQjUjShykSQh4kagBk1QABk1B4kbQBykQDUjTQDSjTERh0QEbh3E0AAQE2AAEZB3QESB0DSDTQDTDTBzEQQB4EbAAE1QAAE1h4EaQhzESjTDSQjSDSkSB0QkZB3k2AAQk0AAkbh3g");
	this.shape_72.setTransform(330.1,537.675);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(255,255,255,0.169)").s().p("ApOV4QkRhzjSjTQjTjRhzkSQh4kaAAk0QAAk1B4kaQBzkQDTjTQDSjSERh0QEah3E0AAQE1AAEaB3QERB0DSDSQDSDTB0EQQB4EagBE1QABE0h4EaQh0ESjSDRQjSDTkRBzQkaB3k1AAQk0AAkah3g");
	this.shape_73.setTransform(330.1,537.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(255,255,255,0.169)").s().p("ApNV2QkRhzjSjSQjSjShzkRQh3kZAAk0QAAk1B3kaQBzkQDSjRQDSjSERh0QEZh3E0AAQE0AAEaB3QERB0DRDSQDTDRBzEQQB4EaAAE1QAAE0h4EZQhzERjTDSQjRDSkRBzQkaB3k0AAQk0AAkZh3g");
	this.shape_74.setTransform(330.1,537.15);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(255,255,255,0.169)").s().p("ApMV0QkRhzjRjSQjSjRh0kQQh3kaABk0QgBkzB3kZQB0kRDSjRQDRjSERhzQEZh3EzAAQE0AAEaB3QEPBzDSDSQDSDRBzERQB4EZAAEzQAAE0h4EaQhzEQjSDRQjSDSkPBzQkaB3k0AAQkzAAkZh3g");
	this.shape_75.setTransform(330.1,536.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(255,255,255,0.169)").s().p("ApMVyQkQhyjRjSQjSjRhzkQQh2kZgBk0QABkzB2kZQBzkPDSjSQDRjREQh0QEZh2EzAAQE0AAEZB2QEQB0DQDRQDTDSByEPQB3EZAAEzQAAE0h3EZQhyEQjTDRQjQDSkQByQkZB3k0AAQkzAAkZh3g");
	this.shape_76.setTransform(330.1,536.625);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(255,255,255,0.169)").s().p("ApLVxQkPhzjRjRQjSjRhzkQQh3kYAAk0QAAkyB3kZQBzkPDSjSQDRjQEPh0QEZh2EyAAQE0AAEYB2QEQB0DQDQQDSDSBzEPQB3EZAAEyQAAE0h3EYQhzEQjSDRQjQDRkQBzQkYB2k0AAQkyAAkZh2g");
	this.shape_77.setTransform(330.075,536.35);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(255,255,255,0.169)").s().p("ApKVvQkPhyjRjRQjRjRhzkPQh3kYAAkzQAAkzB3kYQBzkPDRjRQDRjREPhzQEYh2EyAAQEzAAEYB2QEPBzDRDRQDSDRByEPQB3EYAAEzQAAEzh3EYQhyEPjSDRQjRDRkPByQkYB2kzAAQkyAAkYh2g");
	this.shape_78.setTransform(330.075,536.075);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(255,255,255,0.169)").s().p("ApJVtQkPhyjRjRQjRjQhykPQh3kYAAkzQAAkxB3kYQBykPDRjRQDRjQEPhzQEXh2EyAAQEzAAEYB2QEOBzDRDQQDRDRByEPQB3EYAAExQAAEzh3EYQhyEPjRDQQjRDRkOByQkYB2kzAAQkyAAkXh2g");
	this.shape_79.setTransform(330.075,535.825);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(255,255,255,0.169)").s().p("ApJVrQkOhyjQjQQjRjRhykOQh3kXAAkzQAAkxB3kXQBykODRjRQDQjQEOhzQEYh2ExAAQEyAAEYB2QEOBzDQDQQDRDRByEOQB3EXAAExQAAEzh3EXQhyEOjRDRQjQDQkOByQkYB2kyAAQkxAAkYh2g");
	this.shape_80.setTransform(330.075,535.55);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(255,255,255,0.169)").s().p("ApIVpQkOhxjQjRQjRjQhykOQh2kWAAkzQAAkxB2kXQBykODRjQQDQjQEOhzQEXh1ExgBQEyABEXB1QEOBzDQDQQDRDQByEOQB2EXAAExQAAEzh2EWQhyEOjRDQQjQDRkOBxQkXB2kyAAQkxAAkXh2g");
	this.shape_81.setTransform(330.075,535.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(255,255,255,0.169)").s().p("ApIVnQkNhyjQjPQjQjPhykPQh2kWAAkxQAAkyB2kWQBykNDQjQQDQjQENhzQEXh2ExABQExAAEXB1QEOBzDPDQQDRDQBxENQB3EWAAEyQAAExh3EWQhxEPjRDPQjPDPkOByQkXB2kxAAQkxAAkXh2g");
	this.shape_82.setTransform(330.1,535.05);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(255,255,255,0.169)").s().p("ApGVmQkOhxjPjQQjQjQhykNQh2kWAAkyQAAkvB2kYQBykNDQjPQDPjQEOhyQEWh2EwABQExgBEXB2QENByDPDQQDQDPByENQB2EYAAEvQAAEyh2EWQhyENjQDQQjPDQkNBxQkXB2kxAAQkwAAkWh2g");
	this.shape_83.setTransform(330.075,534.75);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(255,255,255,0.169)").s().p("ApGVkQkNhyjPjPQjQjPhxkNQh2kWAAkxQAAkwB2kVQBxkODQjOQDPjQENhyQEWh1EwgBQExABEWB1QENByDPDQQDQDOBxEOQB2EVAAEwQAAExh2EWQhxENjQDPQjPDPkNByQkWB2kxAAQkwAAkWh2g");
	this.shape_84.setTransform(330.075,534.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(255,255,255,0.169)").s().p("ApFVjQkNhyjOjPQjQjPhxkMQh2kWAAkwQAAkwB2kWQBxkMDQjPQDOjQENhxQEWh2EvAAQEwAAEWB2QENBxDODQQDQDPBxEMQB2EWAAEwQAAEwh2EWQhxEMjQDPQjODPkNByQkWB1kwAAQkvAAkWh1g");
	this.shape_85.setTransform(330.075,534.225);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(255,255,255,0.169)").s().p("ApEVhQkNhyjOjPQjPjOhykMQh1kWAAkwQAAkvB1kVQBykMDPjPQDOjPENhyQEVh1EvAAQEwAAEVB1QENByDODPQDPDPByEMQB1EVAAEvQAAEwh1EWQhyEMjPDOQjODPkNByQkVB1kwAAQkvAAkVh1g");
	this.shape_86.setTransform(330.075,533.975);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(255,255,255,0.169)").s().p("ApEVfQkMhxjOjPQjPjOhxkMQh1kVAAkvQAAkvB1kWQBxkLDPjPQDOjOEMhyQEVh1EvAAQEwAAEUB1QEMByDPDOQDPDPBxELQB1EWAAEvQAAEvh1EVQhxEMjPDOQjPDPkMBxQkUB1kwAAQkvAAkVh1g");
	this.shape_87.setTransform(330.075,533.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(255,255,255,0.169)").s().p("ApDVdQkLhxjOjOQjPjPhxkLQh1kVAAkuQAAkvB1kVQBxkLDPjOQDOjPELhxQEVh1EuAAQEvAAEVB1QELBxDODPQDPDOBxELQB1EVAAEvQAAEuh1EVQhxELjPDPQjODOkLBxQkVB1kvAAQkuAAkVh1g");
	this.shape_88.setTransform(330.075,533.45);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(255,255,255,0.169)").s().p("ApCVbQkLhxjOjOQjPjNhwkMQh1kUAAkvQAAktB1kVQBwkLDPjOQDOjPELhwQEUh1EuAAQEvAAEUB1QELBwDODPQDODOBxELQB1EVAAEtQAAEvh1EUQhxEMjODNQjODOkLBxQkUB1kvAAQkuAAkUh1g");
	this.shape_89.setTransform(330.075,533.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(255,255,255,0.169)").s().p("ApBVaQkLhxjOjOQjNjNhxkLQh1kUAAkuQAAkuB1kUQBxkLDNjNQDOjOELhyQETh0EuAAQEvAAETB0QEMByDNDOQDODNBxELQB1EUAAEuQAAEuh1EUQhxELjODNQjNDOkMBxQkTB0kvAAQkuAAkTh0g");
	this.shape_90.setTransform(330.05,532.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(255,255,255,0.169)").s().p("ApAVYQkLhxjNjOQjOjNhwkKQh2kUABktQgBkuB2kTQBwkLDOjNQDNjOELhwQETh1EtAAQEuAAEUB1QELBwDMDOQDPDNBwELQB1ETAAEuQAAEth1EUQhwEKjPDNQjMDOkLBxQkUB0kuAAQktAAkTh0g");
	this.shape_91.setTransform(330.05,532.65);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(255,255,255,0.169)").s().p("Ao/VWQkLhwjNjOQjNjNhxkKQh0kTAAkuQAAksB0kUQBxkKDNjNQDNjNELhxQETh0EsAAQEuAAETB0QEKBxDNDNQDODNBwEKQB1EUgBEsQABEuh1ETQhwEKjODNQjNDOkKBwQkTB0kuAAQksAAkTh0g");
	this.shape_92.setTransform(330.05,532.375);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(255,255,255,0.169)").s().p("Ao/VUQkKhwjNjNQjNjNhwkKQh1kSAAkuQAAksB1kTQBwkKDNjMQDNjOEKhwQETh0EsAAQEtAAETB0QEKBwDMDOQDODMBwEKQB1ETAAEsQAAEuh1ESQhwEKjODNQjMDNkKBwQkTB0ktAAQksAAkTh0g");
	this.shape_93.setTransform(330.075,532.125);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(255,255,255,0.169)").s().p("Ao+VSQkKhwjMjNQjNjLhxkKQh0kSAAkuQAAkrB0kTQBxkKDNjMQDMjNEKhwQESh0EsAAQEtAAESB0QEKBwDMDNQDNDMBwEKQB1ETAAErQAAEuh1ESQhwEKjNDLQjMDNkKBwQkSB0ktAAQksAAkSh0g");
	this.shape_94.setTransform(330.075,531.85);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(255,255,255,0.169)").s().p("Ao+VQQkJhvjMjNQjNjMhwkJQh0kSAAktQAAkrB0kTQBwkIDNjNQDMjMEJhxQESh0EsAAQEsAAESB0QEKBxDMDMQDNDNBwEIQB0ETAAErQAAEth0ESQhwEJjNDMQjMDNkKBvQkSB0ksAAQksAAkSh0g");
	this.shape_95.setTransform(330.075,531.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(255,255,255,0.169)").s().p("Ao9VPQkJhwjLjMQjNjMhwkJQh0kRAAktQAAkrB0kSQBwkIDNjMQDLjNEJhwQEShzErAAQEsAAESBzQEIBwDNDNQDMDMBwEIQB0ESAAErQAAEth0ERQhwEJjMDMQjNDMkIBwQkSBzksAAQkrAAkShzg");
	this.shape_96.setTransform(330.05,531.325);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(255,255,255,0.169)").s().p("Ao8VNQkIhvjMjMQjNjMhvkIQh0kSAAksQAAkqB0kSQBvkIDNjMQDMjMEIhwQESh0EqAAQEsAAERB0QEIBwDMDMQDNDMBvEIQB0ESAAEqQAAEsh0ESQhvEIjNDMQjMDMkIBvQkRB0ksAAQkqAAkSh0g");
	this.shape_97.setTransform(330.05,531.05);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(255,255,255,0.169)").s().p("Ao7VLQkJhwjLjLQjMjLhwkIQhzkSAAkrQAAkqBzkRQBwkIDMjLQDLjMEJhwQERh0EqABQErgBERB0QEJBwDLDMQDMDLBvEIQB0ERAAEqQAAErh0ESQhvEIjMDLQjLDLkJBwQkRB0krAAQkqAAkRh0g");
	this.shape_98.setTransform(330.05,530.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(255,255,255,0.169)").s().p("Ao7VKQkHhwjMjLQjLjLhwkIQhzkRAAkrQAAkpBzkRQBwkIDLjLQDMjMEHhvQERh0EqAAQErAAEQB0QEJBvDKDMQDMDLBvEIQB0ERAAEpQAAErh0ERQhvEIjMDLQjKDLkJBwQkQBzkrAAQkqAAkRhzg");
	this.shape_99.setTransform(330.05,530.525);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("rgba(255,255,255,0.169)").s().p("Ao6VIQkHhwjLjLQjMjLhvkHQhzkQAAkrQAAkpBzkRQBvkHDMjLQDLjLEHhwQEQhzEqAAQEqAAERBzQEHBwDLDLQDMDLBvEHQBzERAAEpQAAErhzEQQhvEHjMDLQjLDLkHBwQkRBzkqAAQkqAAkQhzg");
	this.shape_100.setTransform(330.05,530.275);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(255,255,255,0.169)").s().p("Ao5VGQkHhvjKjLQjMjLhvkGQhzkQAAkrQAAkpBzkQQBvkHDMjLQDKjLEHhvQEQhzEpAAQEqAAEQBzQEHBvDLDLQDLDLBvEHQBzEQAAEpQAAErhzEQQhvEGjLDLQjLDLkHBvQkQBzkqAAQkpAAkQhzg");
	this.shape_101.setTransform(330.05,530);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("rgba(255,255,255,0.169)").s().p("Ao4VEQkHhvjKjKQjLjLhvkGQhzkQAAkpQAAkpBzkQQBvkHDLjKQDKjLEHhvQEPhzEpAAQEqAAEPBzQEHBvDKDLQDLDKBvEHQBzEQAAEpQAAEphzEQQhvEGjLDLQjKDKkHBvQkPBzkqAAQkpAAkPhzg");
	this.shape_102.setTransform(330.075,529.75);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(255,255,255,0.169)").s().p("Ao3VCQkHhvjKjKQjLjKhvkGQhykPgBkqQABkoBykPQBvkHDLjKQDKjKEHhvQEPhzEoAAQEpAAEQBzQEGBvDKDKQDKDKBvEHQB0EPgBEoQABEqh0EPQhvEGjKDKQjKDKkGBvQkQBzkpAAQkoAAkPhzg");
	this.shape_103.setTransform(330.05,529.475);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(255,255,255,0.169)").s().p("Ao3VBQkGhvjKjKQjKjJhvkHQhykOAAkpQAAkoBykQQBvkFDKjKQDKjLEGhvQEPhyEoAAQEpAAEPByQEGBvDJDLQDLDKBuEFQB0EQAAEoQAAEph0EOQhuEHjLDJQjJDKkGBvQkPBykpAAQkoAAkPhyg");
	this.shape_104.setTransform(330.05,529.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(255,255,255,0.169)").s().p("Ao2U/QkFhvjKjKQjLjJhukFQhykPAAkoQAAkpBykOQBukFDLjKQDKjKEFhvQEOhyEoAAQEoAAEPByQEGBvDJDKQDLDKBuEFQBzEOAAEpQAAEohzEPQhuEFjLDJQjJDKkGBvQkPBykoAAQkoAAkOhyg");
	this.shape_105.setTransform(330.05,528.95);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("rgba(255,255,255,0.169)").s().p("Ao1U9QkGhujJjKQjKjJhukFQhykOgBkpQABknBykOQBukFDKjKQDJjJEGhvQEOhyEnAAQEoAAEOByQEFBvDJDJQDLDKBuEFQBzEOgBEnQABEphzEOQhuEFjLDJQjJDKkFBuQkOBykoAAQknAAkOhyg");
	this.shape_106.setTransform(330.05,528.675);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("rgba(255,255,255,0.169)").s().p("Ao0U7QkGhujIjJQjKjJhukFQhzkOAAkoQAAknBzkNQBukFDKjJQDIjKEGhuQENhyEnAAQEoAAEOByQEEBuDKDKQDJDJBvEFQBxENAAEnQAAEohxEOQhvEFjJDJQjKDJkEBuQkOBykoAAQknAAkNhyg");
	this.shape_107.setTransform(330.05,528.425);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("rgba(255,255,255,0.169)").s().p("Ao0U5QkEhtjJjJQjKjJhukFQhxkNgBknQABknBxkOQBukEDKjJQDJjJEEhvQENhxEnAAQEoAAEMBxQEGBvDIDJQDJDJBuEEQBzEOgBEnQABEnhzENQhuEFjJDJQjIDJkGBtQkMBzkogBQknABkNhzg");
	this.shape_108.setTransform(330.05,528.15);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("rgba(255,255,255,0.169)").s().p("AozU4QkEhujJjJQjJjIhukFQhykNAAknQAAkmBykNQBukEDJjIQDJjJEEhvQENhxEmAAQEnAAENBxQEEBvDJDJQDJDIBuEEQByENAAEmQAAEnhyENQhuEFjJDIQjJDJkEBuQkNBxknAAQkmAAkNhxg");
	this.shape_109.setTransform(330.025,527.875);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("rgba(255,255,255,0.169)").s().p("AoyU2QkEhujIjIQjJjJhukDQhykNAAknQAAklBykNQBukEDJjIQDIjJEEhuQENhxElAAQEnAAEMBxQEEBuDIDJQDJDIBuEEQByENAAElQAAEnhyENQhuEDjJDJQjIDIkEBuQkMBxknAAQklAAkNhxg");
	this.shape_110.setTransform(330.025,527.625);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("rgba(255,255,255,0.169)").s().p("AoxU0QkEhujIjHQjIjJhukDQhykMAAknQAAklBykNQBukCDIjJQDIjIEEhuQEMhyElAAQEmAAENByQEDBuDIDIQDJDJBtECQByENAAElQAAEnhyEMQhtEDjJDJQjIDHkDBuQkNBykmAAQklAAkMhyg");
	this.shape_111.setTransform(330.025,527.35);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("rgba(255,255,255,0.169)").s().p("AoxUyQkDhujIjHQjIjIhtkDQhykMAAkmQAAklBykLQBtkDDIjIQDIjJEDhuQEMhwElAAQElAAEMBwQEEBuDHDJQDJDIBuEDQBxELAAElQAAEmhxEMQhuEDjJDIQjHDHkEBuQkMByklAAQklAAkMhyg");
	this.shape_112.setTransform(330.05,527.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("rgba(255,255,255,0.169)").s().p("AowUxQkDhujIjHQjHjIhukDQhxkLAAkmQAAkkBxkMQBukDDHjHQDIjIEDhuQELhxElAAQEmAAELBxQEDBuDHDIQDIDHBtEDQByEMAAEkQAAEmhyELQhtEDjIDIQjHDHkDBuQkLBxkmAAQklAAkLhxg");
	this.shape_113.setTransform(330.05,526.825);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("rgba(255,255,255,0.169)").s().p("AowUvQkChujHjHQjIjHhtkDQhxkLAAklQAAkkBxkLQBtkDDIjHQDHjHEChuQEMhxEkAAQElAAELBxQEDBuDHDHQDIDHBsEDQByELAAEkQAAElhyELQhsEDjIDHQjHDHkDBuQkLBxklAAQkkAAkMhxg");
	this.shape_114.setTransform(330.05,526.575);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("rgba(255,255,255,0.169)").s().p("AouUtQkDhtjGjHQjIjHhtkCQhxkLAAkkQAAkkBxkLQBtkCDIjHQDGjHEDhuQEKhxEkAAQElAAELBxQECBuDHDHQDHDHBtECQBxELAAEkQAAEkhxELQhtECjHDHQjHDHkCBtQkLBxklAAQkkAAkKhxg");
	this.shape_115.setTransform(330.025,526.275);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("rgba(255,255,255,0.169)").s().p("AouUrQkChtjGjGQjHjHhtkCQhxkKAAklQAAkjBxkKQBtkCDHjHQDGjHEChtQELhxEjAAQEkAAELBxQECBtDGDHQDHDHBtECQBxEKAAEjQAAElhxEKQhtECjHDHQjGDGkCBtQkLBxkkAAQkjAAkLhxg");
	this.shape_116.setTransform(330.025,526.025);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("rgba(255,255,255,0.169)").s().p("AotUpQkBhtjHjGQjHjGhtkCQhwkKAAkkQAAkjBwkKQBtkBDHjHQDHjGEBhtQEKhxEjAAQEkAAEKBxQECBtDGDGQDHDHBtEBQBwEKAAEjQAAEkhwEKQhtECjHDGQjGDGkCBtQkKBxkkAAQkjAAkKhxg");
	this.shape_117.setTransform(330.025,525.775);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("rgba(255,255,255,0.169)").s().p("AosUoQkBhtjGjGQjHjGhtkCQhwkJAAkkQAAkiBwkKQBtkBDHjGQDGjGEBhtQEKhxEiAAQEjAAEKBxQEBBtDGDGQDHDGBtEBQBwEKAAEiQAAEkhwEJQhtECjHDGQjGDGkBBtQkKBwkjAAQkiAAkKhwg");
	this.shape_118.setTransform(330.025,525.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("rgba(255,255,255,0.169)").s().p("AorUmQkBhtjGjGQjGjGhtkBQhwkIAAkkQAAkiBwkJQBtkBDGjGQDGjGEBhtQEJhwEiAAQEjAAEKBwQEABtDGDGQDGDGBtEBQBwEJAAEiQAAEkhwEIQhtEBjGDGQjGDGkABtQkKBwkjAAQkiAAkJhwg");
	this.shape_119.setTransform(330.025,525.25);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("rgba(255,255,255,0.169)").s().p("AorUkQkAhsjGjGQjGjFhskBQhwkJAAkjQAAkhBwkKQBskADGjGQDGjGEAhsQEJhwEiAAQEjAAEJBwQEABsDGDGQDGDGBsEAQBwEKAAEhQAAEjhwEJQhsEBjGDFQjGDGkABsQkJBwkjAAQkiAAkJhwg");
	this.shape_120.setTransform(330.025,524.975);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("rgba(255,255,255,0.169)").s().p("AoqUiQkAhsjFjGQjGjFhskAQhwkJAAkiQAAkhBwkJQBskADGjFQDFjGEAhsQEJhwEhAAQEiAAEJBwQEABsDFDGQDGDFBsEAQBwEJAAEhQAAEihwEJQhsEAjGDFQjFDGkABsQkJBwkiAAQkhAAkJhwg");
	this.shape_121.setTransform(330.025,524.725);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("rgba(255,255,255,0.169)").s().p("AopUhQkAhsjFjGQjFjFhtj/QhvkJAAkiQAAkgBvkJQBtkADFjFQDFjFEAhsQEIhwEhAAQEiAAEJBwQD/BsDFDFQDFDFBtEAQBvEJAAEgQAAEihvEJQhtD/jFDFQjFDGj/BsQkJBvkiAAQkhAAkIhvg");
	this.shape_122.setTransform(330,524.425);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("rgba(255,255,255,0.169)").s().p("AopUfQj/hsjFjFQjFjFhsj/QhwkIAAkiQAAkgBwkIQBskADFjEQDFjGD/hsQEIhvEhAAQEhAAEIBvQEABsDFDGQDFDEBsEAQBwEIAAEgQAAEihwEIQhsD/jFDFQjFDFkABsQkIBvkhAAQkhAAkIhvg");
	this.shape_123.setTransform(330.025,524.175);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("rgba(255,255,255,0.169)").s().p("AooUdQj/hsjEjFQjFjEhsj/QhwkIAAkhQAAkgBwkIQBsj/DFjEQDEjFD/hsQEIhvEgAAQEhAAEIBvQD/BsDEDFQDFDEBsD/QBwEIAAEgQAAEhhwEIQhsD/jFDEQjEDFj/BsQkIBvkhAAQkgAAkIhvg");
	this.shape_124.setTransform(330.025,523.925);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("rgba(255,255,255,0.169)").s().p("AonUbQj/hsjEjEQjFjEhrj/QhwkHAAkgQAAkhBwkHQBrj+DFjFQDEjED/hsQEHhvEggBQEhABEHBvQD/BsDEDEQDFDFBrD+QBwEHAAEhQAAEghwEHQhrD/jFDEQjEDEj/BsQkHBvkhAAQkgAAkHhvg");
	this.shape_125.setTransform(330.025,523.65);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("rgba(255,255,255,0.169)").s().p("AomUZQj/hrjEjFQjEjDhsj/QhvkGAAkhQAAkfBvkHQBsj/DEjDQDEjFD/hrQEHhvEfAAQEgAAEHBvQD/BrDDDFQDFDDBrD/QBwEHAAEfQAAEhhwEGQhrD/jFDDQjDDFj/BrQkHBvkgAAQkfAAkHhvg");
	this.shape_126.setTransform(330.025,523.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("rgba(255,255,255,0.169)").s().p("AomUYQj+hsjDjEQjEjDhsj+QhvkHAAkgQAAkfBvkGQBsj+DEjEQDDjED+hsQEHhvEfAAQEgAAEGBvQD+BsDEDEQDEDEBsD+QBvEGAAEfQAAEghvEHQhsD+jEDDQjEDEj+BsQkGBvkgAAQkfAAkHhvg");
	this.shape_127.setTransform(330.025,523.125);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("rgba(255,255,255,0.169)").s().p("AolUWQj9hrjEjEQjDjEhsj9QhvkGAAkgQAAkeBvkGQBsj+DDjEQDEjED9hrQEGhvEfABQEfgBEHBvQD+BrDDDEQDEDEBrD+QBvEGAAEeQAAEghvEGQhrD9jEDEQjDDEj+BrQkHBukfABQkfgBkGhug");
	this.shape_128.setTransform(330,522.85);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("rgba(255,255,255,0.169)").s().p("AokUUQj9hrjEjDQjDjDhrj+QhvkFAAkgQAAkeBvkGQBrj9DDjDQDEjED9hrQEGhvEeAAQEfAAEGBvQD9BrDEDEQDDDDBsD9QBuEGAAEeQAAEghuEFQhsD+jDDDQjEDDj9BrQkGBvkfAAQkeAAkGhvg");
	this.shape_129.setTransform(330,522.575);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("rgba(255,255,255,0.169)").s().p("AojUSQj9hrjDjDQjDjChrj9QhvkGAAkfQAAkdBvkGQBrj9DDjDQDDjDD9hrQEFhvEeAAQEfAAEFBvQD+BrDCDDQDEDDBqD9QBvEGAAEdQAAEfhvEGQhqD9jEDCQjCDDj+BrQkFBvkfAAQkeAAkFhvg");
	this.shape_130.setTransform(330,522.325);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("rgba(255,255,255,0.169)").s().p("AojUQQj8hrjCjCQjEjDhrj8QhukFAAkfQAAkdBukFQBrj9DEjDQDCjDD8hrQEFhuEeAAQEfAAEFBuQD8BrDDDDQDDDDBrD9QBuEFAAEdQAAEfhuEFQhrD8jDDDQjDDCj8BrQkFBvkfAAQkeAAkFhvg");
	this.shape_131.setTransform(330,522.075);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("rgba(255,255,255,0.169)").s().p("AoiUOQj8hqjCjCQjDjDhrj8QhukFAAkeQAAkcBukFQBrj9DDjCQDCjDD8hrQEFhuEdAAQEeAAEFBuQD8BrDDDDQDCDCBrD9QBuEFAAEcQAAEehuEFQhrD8jCDDQjDDCj8BqQkFBvkeAAQkdAAkFhvg");
	this.shape_132.setTransform(330,521.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("rgba(255,255,255,0.169)").s().p("AohUMQj8hqjCjCQjDjChqj8QhukFAAkdQAAkcBukFQBqj8DDjCQDCjDD8hqQEEhuEdAAQEdAAEFBuQD8BqDCDDQDCDCBrD8QBuEFAAEcQAAEdhuEFQhrD8jCDCQjCDCj8BqQkFBvkdAAQkdAAkEhvg");
	this.shape_133.setTransform(330.025,521.55);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("rgba(255,255,255,0.169)").s().p("AogUMQj8hrjCjCQjCjChqj7QhukEgBkeQABkcBukEQBqj8DCjBQDCjDD8hqQEEhuEcAAQEdAAEFBuQD7BqDBDDQDDDBBrD8QBuEEAAEcQAAEehuEEQhrD7jDDCQjBDCj7BrQkFBtkdAAQkcAAkEhtg");
	this.shape_134.setTransform(330,521.25);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("rgba(255,255,255,0.169)").s().p("AofUKQj8hrjBjCQjCjBhqj7QhukEAAkdQAAkbBukEQBqj8DCjBQDBjCD8hrQEDhtEcAAQEdAAEEBtQD6BrDCDCQDDDBBpD8QBvEEAAEbQAAEdhvEEQhpD7jDDBQjCDCj6BrQkEBtkdAAQkcAAkDhtg");
	this.shape_135.setTransform(330,521);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{scaleX:1,scaleY:1,x:330,y:520.475}}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape,p:{scaleX:1.097,scaleY:1.097,x:330.0999,y:539.0125}}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape,p:{scaleX:1,scaleY:1,x:330,y:520.475}}]},1).wait(1));

	// Layer_3
	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("rgba(255,255,255,0.137)").s().p("Aq1ZsQlBiIj2j3Qj4j2iHlBQiMlLAAlrQAAlqCMlLQCHlAD4j3QD2j3FBiIQFLiMFqAAQFrAAFMCMQFACID3D3QD2D3CIFAQCMFLAAFqQAAFriMFLQiIFBj2D2Qj3D3lACIQlMCMlrAAQlqAAlLiMg");
	this.shape_136.setTransform(330,481.625);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("rgba(255,255,255,0.137)").s().p("Aq2ZuQlBiHj3j4Qj4j3iIlBQiLlLAAlsQAAlqCLlMQCIlBD4j3QD3j3FBiIQFLiMFrAAQFsAAFLCMQFBCID4D3QD2D3CIFBQCMFMABFqQgBFsiMFLQiIFBj2D3Qj4D4lBCHQlLCMlsAAQlrAAlLiMg");
	this.shape_137.setTransform(330,481.825);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("rgba(255,255,255,0.137)").s().p("Aq3ZwQlCiIj3j3Qj3j4iJlBQiMlMAAlsQAAlrCMlMQCJlBD3j4QD3j4FCiIQFMiMFrAAQFsAAFNCMQFACID4D4QD4D4CHFBQCNFMAAFrQAAFsiNFMQiHFBj4D4Qj4D3lACIQlNCNlsAAQlrAAlMiNg");
	this.shape_138.setTransform(330,482.075);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("rgba(255,255,255,0.137)").s().p("Aq4ZzQlCiIj4j5Qj4j3iIlCQiMlMgBltQABlrCMlNQCIlCD4j4QD4j4FCiIQFMiMFsAAQFtAAFNCMQFBCID4D4QD4D4CIFCQCNFNgBFrQABFtiNFMQiIFCj4D3Qj4D5lBCIQlNCMltAAQlsAAlMiMg");
	this.shape_139.setTransform(330,482.275);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("rgba(255,255,255,0.137)").s().p("Aq5Z1QlCiIj5j5Qj4j3iIlDQiNlNAAltQAAlsCNlNQCIlCD4j4QD5j5FCiIQFNiNFsAAQFtAAFOCNQFCCID3D5QD5D4CJFCQCMFNAAFsQAAFtiMFNQiJFDj5D3Qj3D5lCCIQlOCNltAAQlsAAlNiNg");
	this.shape_140.setTransform(330,482.475);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("rgba(255,255,255,0.137)").s().p("Aq7Z3QlBiIj6j5Qj4j4iJlDQiMlNAAluQAAlsCMlOQCJlCD4j5QD6j5FBiIQFPiNFsAAQFtAAFPCNQFCCID4D5QD5D5CIFCQCOFOAAFsQAAFuiOFNQiIFDj5D4Qj4D5lCCIQlPCNltAAQlsAAlPiNg");
	this.shape_141.setTransform(330,482.675);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("rgba(255,255,255,0.137)").s().p("Aq8Z5QlCiIj5j5Qj5j5iJlDQiNlOAAluQAAltCNlOQCJlDD5j5QD5j5FCiJQFPiNFtAAQFuAAFOCNQFDCJD5D5QD5D5CJFDQCNFOAAFtQAAFuiNFOQiJFDj5D5Qj5D5lDCIQlOCOluAAQltAAlPiOg");
	this.shape_142.setTransform(330,482.925);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("rgba(255,255,255,0.137)").s().p("Aq8Z8QlDiJj6j5Qj5j5iJlEQiNlOgBlvQABltCNlPQCJlDD5j6QD6j5FDiJQFPiNFtAAQFuAAFPCNQFECJD5D5QD5D6CKFDQCMFPAAFtQAAFviMFOQiKFEj5D5Qj5D5lECJQlPCNluAAQltAAlPiNg");
	this.shape_143.setTransform(330,483.125);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("rgba(255,255,255,0.137)").s().p("Aq9Z+QlEiJj6j5Qj5j6iKlEQiNlPAAlvQAAluCNlPQCKlED5j5QD6j6FEiJQFPiOFuAAQFvAAFPCOQFECJD6D6QD6D5CJFEQCNFPAAFuQAAFviNFPQiJFEj6D6Qj6D5lECJQlPCOlvAAQluAAlPiOg");
	this.shape_144.setTransform(330,483.325);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("rgba(255,255,255,0.137)").s().p("Aq+aAQlEiJj7j6Qj5j6iKlEQiNlPgBlwQABluCNlQQCKlED5j6QD7j7FEiJQFPiNFvAAQFvAAFQCNQFFCJD5D7QD6D6CKFEQCNFQABFuQgBFwiNFPQiKFEj6D6Qj5D6lFCJQlQCPlvAAQlvAAlPiPg");
	this.shape_145.setTransform(330,483.55);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("rgba(255,255,255,0.137)").s().p("Aq/aDQlFiKj6j6Qj6j6iKlFQiOlQAAlwQAAlvCOlQQCKlFD6j6QD6j7FFiJQFQiOFvAAQFwAAFQCOQFFCJD6D7QD7D6CJFFQCOFQAAFvQAAFwiOFQQiJFFj7D6Qj6D6lFCKQlQCOlwAAQlvAAlQiOg");
	this.shape_146.setTransform(330,483.775);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("rgba(255,255,255,0.137)").s().p("ArAaFQlFiJj7j7Qj6j7iKlFQiPlQABlxQgBlvCPlRQCKlFD6j7QD7j7FFiJQFQiOFwAAQFxAAFRCOQFECJD7D7QD7D7CKFFQCNFRAAFvQAAFxiNFQQiKFFj7D7Qj7D7lECJQlRCOlxAAQlwAAlQiOg");
	this.shape_147.setTransform(330,483.975);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("rgba(255,255,255,0.137)").s().p("ArBaIQlGiKj7j7Qj7j7iKlGQiOlQAAlyQAAlwCOlRQCKlFD7j7QD7j7FGiKQFRiPFwAAQFxAAFRCPQFGCKD7D7QD7D7CKFFQCOFRAAFwQAAFyiOFQQiKFGj7D7Qj7D7lGCKQlRCOlxAAQlwAAlRiOg");
	this.shape_148.setTransform(330.025,484.175);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("rgba(255,255,255,0.137)").s().p("ArCaKQlGiKj8j8Qj7j6iKlHQiPlRAAlxQAAlyCPlRQCKlGD7j7QD8j8FGiJQFRiQFxABQFygBFRCQQFGCJD8D8QD7D7CKFGQCPFRAAFyQAAFxiPFRQiKFHj7D6Qj8D8lGCKQlRCPlyAAQlxAAlRiPg");
	this.shape_149.setTransform(330.025,484.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("rgba(255,255,255,0.137)").s().p("ArDaMQlHiKj7j8Qj8j7iKlHQiPlSAAlyQAAlxCPlSQCKlGD8j8QD7j8FHiKQFSiPFxAAQFyAAFSCPQFGCKD8D8QD8D8CKFGQCPFSAAFxQAAFyiPFSQiKFHj8D7Qj8D8lGCKQlSCPlyAAQlxAAlSiPg");
	this.shape_150.setTransform(330.025,484.625);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("rgba(255,255,255,0.137)").s().p("ArEaOQlHiKj8j8Qj8j8iLlHQiPlSAAlzQAAlxCPlTQCLlGD8j9QD8j8FHiKQFSiPFyAAQFzAAFSCPQFHCKD8D8QD8D9CLFGQCPFTAAFxQAAFziPFSQiLFHj8D8Qj8D8lHCKQlSCPlzAAQlyAAlSiPg");
	this.shape_151.setTransform(330.025,484.825);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("rgba(255,255,255,0.137)").s().p("ArFaRQlHiLj9j9Qj8j7iLlIQiPlSAAl0QAAlyCPlTQCLlHD8j8QD9j9FHiLQFTiPFyAAQFzAAFTCPQFHCLD9D9QD8D8CLFHQCPFTAAFyQAAF0iPFSQiLFIj8D7Qj9D9lHCLQlTCPlzAAQlyAAlTiPg");
	this.shape_152.setTransform(330.025,485.05);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("rgba(255,255,255,0.137)").s().p("ArGaTQlIiLj9j8Qj9j9iKlIQiQlTAAl0QAAlyCQlUQCKlHD9j9QD9j9FIiLQFTiQFzAAQF0AAFTCQQFICLD9D9QD9D9CKFHQCQFUAAFyQAAF0iQFTQiKFIj9D9Qj9D8lICLQlTCPl0AAQlzAAlTiPg");
	this.shape_153.setTransform(330.025,485.25);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("rgba(255,255,255,0.137)").s().p("ArHaVQlIiLj9j9Qj+j9iLlIQiPlUAAl0QAAlzCPlUQCLlID+j9QD9j9FIiLQFUiQFzAAQF0AAFUCQQFICLD9D9QD+D9CLFIQCPFUAAFzQAAF0iPFUQiLFIj+D9Qj9D9lICLQlUCQl0AAQlzAAlUiQg");
	this.shape_154.setTransform(330.025,485.475);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("rgba(255,255,255,0.137)").s().p("ArIaYQlJiMj9j9Qj+j9iLlKQiQlTAAl1QAAlzCQlVQCLlID+j+QD9j+FJiKQFUiQF0AAQF1AAFUCQQFJCKD9D+QD+D+CLFIQCQFVAAFzQAAF1iQFTQiLFKj+D9Qj9D9lJCMQlUCPl1ABQl0gBlUiPg");
	this.shape_155.setTransform(330.025,485.7);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("rgba(255,255,255,0.137)").s().p("ArJaaQlJiMj+j9Qj+j9iLlKQiQlUAAl2QAAl0CQlVQCLlID+j/QD+j9FJiMQFViQF0AAQF1AAFVCQQFJCMD+D9QD+D/CLFIQCQFVAAF0QAAF2iQFUQiLFKj+D9Qj+D9lJCMQlVCQl1AAQl0AAlViQg");
	this.shape_156.setTransform(330.025,485.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("rgba(255,255,255,0.137)").s().p("ArKadQlJiMj/j+Qj+j+iLlKQiRlVAAl1QAAl2CRlVQCLlJD+j+QD/j/FJiLQFViRF1ABQF2gBFVCRQFKCLD+D/QD+D+CMFJQCQFVAAF2QAAF1iQFVQiMFKj+D+Qj+D+lKCMQlVCPl2ABQl1gBlViPg");
	this.shape_157.setTransform(330.025,486.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("rgba(255,255,255,0.137)").s().p("ArLafQlKiMj+j/Qj/j+iMlKQiQlVAAl3QAAl1CQlWQCMlJD/j/QD+j/FKiLQFWiRF1AAQF2AAFWCRQFKCLD/D/QD+D/CMFJQCQFWAAF1QAAF3iQFVQiMFKj+D+Qj/D/lKCMQlWCQl2AAQl1AAlWiQg");
	this.shape_158.setTransform(330.025,486.325);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("rgba(255,255,255,0.137)").s().p("ArMahQlKiMj/j/Qj/j+iMlMQiRlVAAl3QAAl2CRlWQCMlKD/j/QD/j/FKiMQFWiRF2AAQF3AAFWCRQFKCMD/D/QD/D/CMFKQCRFWAAF2QAAF3iRFVQiMFMj/D+Qj/D/lKCMQlWCQl3AAQl2AAlWiQg");
	this.shape_159.setTransform(330.025,486.55);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("rgba(255,255,255,0.137)").s().p("ArNakQlLiNj/j/Qj/j/iMlLQiRlWAAl3QAAl3CRlXQCMlKD/kAQD/j/FLiMQFXiRF2AAQF3AAFXCRQFLCMD/D/QEAEACMFKQCQFXAAF3QAAF3iQFWQiMFLkAD/Qj/D/lLCNQlXCQl3AAQl2AAlXiQg");
	this.shape_160.setTransform(330.025,486.75);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("rgba(255,255,255,0.137)").s().p("ArOalQlLiMkAj/Qj/kAiNlLQiRlXAAl4QAAl2CRlYQCNlLD/kAQEAj/FLiMQFXiRF3AAQF4AAFXCRQFLCMEAD/QEAEACMFLQCRFYAAF2QAAF4iRFXQiMFLkAEAQkAD/lLCMQlXCRl4AAQl3AAlXiRg");
	this.shape_161.setTransform(330.025,486.975);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("rgba(255,255,255,0.137)").s().p("ArPanQlLiLkBkBQkAkAiMlLQiRlYAAl4QAAl3CRlXQCMlNEAj/QEBkBFLiMQFYiRF3AAQF4AAFYCRQFMCMEAEBQEAD/CMFNQCRFXAAF3QAAF4iRFYQiMFLkAEAQkAEBlMCLQlYCSl4AAQl3AAlYiSg");
	this.shape_162.setTransform(330.025,487.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("rgba(255,255,255,0.137)").s().p("ArQaqQlMiMkAkBQkBj/iMlOQiSlXAAl5QAAl4CSlXQCMlNEBkAQEAkBFMiMQFYiSF4AAQF5AAFYCSQFMCMEBEBQEAEACNFNQCRFXAAF4QAAF5iRFXQiNFOkAD/QkBEBlMCMQlYCSl5AAQl4AAlYiSg");
	this.shape_163.setTransform(330.025,487.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("rgba(255,255,255,0.137)").s().p("ArRasQlMiMkBkBQkBkAiNlOQiRlXAAl6QAAl4CRlZQCNlMEBkAQEBkCFMiMQFZiSF4AAQF5AAFZCSQFNCMEAECQEBEACNFMQCRFZAAF4QAAF6iRFXQiNFOkBEAQkAEBlNCMQlZCSl5AAQl4AAlZiSg");
	this.shape_164.setTransform(330.025,487.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("rgba(255,255,255,0.137)").s().p("ArSavQlNiNkBkBQkBkBiNlNQiSlZAAl6QAAl4CSlZQCNlNEBkCQEBkBFNiNQFZiRF5AAQF6AAFZCRQFNCNEBEBQEBECCNFNQCSFZAAF4QAAF6iSFZQiNFNkBEBQkBEBlNCNQlZCRl6AAQl5AAlZiRg");
	this.shape_165.setTransform(330.025,487.825);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("rgba(255,255,255,0.137)").s().p("ArTaxQlNiNkCkCQkBkBiNlNQiSlaAAl6QAAl5CSlZQCNlOEBkCQECkBFNiNQFaiSF5AAQF6AAFaCSQFOCNEBEBQEBECCOFOQCRFZAAF5QAAF6iRFaQiOFNkBEBQkBEClOCNQlaCSl6AAQl5AAlaiSg");
	this.shape_166.setTransform(330.025,488.05);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("rgba(255,255,255,0.137)").s().p("ArUazQlOiNkBkBQkCkCiNlOQiTlaAAl6QAAl7CTlaQCNlOECkBQEBkCFOiNQFaiSF6AAQF7AAFaCSQFOCNECECQECEBCNFOQCSFaAAF7QAAF6iSFaQiNFOkCECQkCEBlOCNQlaCSl7AAQl6AAlaiSg");
	this.shape_167.setTransform(330.025,488.25);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("rgba(255,255,255,0.137)").s().p("ArVa2QlOiNkCkDQkCkBiOlQQiSlZAAl7QAAl7CSlaQCOlPECkCQECkCFOiNQFbiTF6AAQF7AAFbCTQFOCNEDECQECECCNFPQCSFaAAF7QAAF7iSFZQiNFQkCEBQkDEDlOCNQlbCSl7AAQl6AAlbiSg");
	this.shape_168.setTransform(330.025,488.45);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("rgba(255,255,255,0.137)").s().p("ArWa4QlOiOkDkDQkCkBiOlQQiTlaAAl8QAAl7CTlaQCOlQECkCQEDkDFOiNQFbiTF7AAQF8AAFbCTQFPCNECEDQEDECCOFQQCSFaAAF7QAAF8iSFaQiOFQkDEBQkCEDlPCOQlbCTl8AAQl7AAlbiTg");
	this.shape_169.setTransform(330.025,488.7);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("rgba(255,255,255,0.137)").s().p("ArXa6QlPiNkDkDQkCkDiOlPQiTlcAAl8QAAl7CTlbQCOlQECkCQEDkEFPiNQFciTF7AAQF8AAFcCTQFPCNEDEEQEDECCOFQQCSFbAAF7QAAF8iSFcQiOFPkDEDQkDEDlPCNQlcCTl8AAQl7AAlciTg");
	this.shape_170.setTransform(330.025,488.9);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("rgba(255,255,255,0.137)").s().p("ArYa9QlQiPkDkCQkDkDiOlQQiTlcAAl9QAAl8CTlbQCOlQEDkDQEDkDFQiPQFciTF8AAQF9AAFbCTQFQCPEDEDQEEEDCOFQQCTFbAAF8QAAF9iTFcQiOFQkEEDQkDEClQCPQlbCSl9ABQl8gBlciSg");
	this.shape_171.setTransform(330.075,489.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("rgba(255,255,255,0.137)").s().p("ArZa/QlQiOkEkEQkDkDiOlRQiTlbAAl+QAAl8CTlcQCOlQEDkDQEEkEFQiPQFdiTF8AAQF9AAFcCTQFRCPEDEEQEEEDCOFQQCTFcAAF8QAAF+iTFbQiOFRkEEDQkDEElRCOQlcCTl9AAQl8AAldiTg");
	this.shape_172.setTransform(330.075,489.3);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("rgba(255,255,255,0.137)").s().p("ArabBQlRiPkDkDQkEkDiPlSQiTlcAAl+QAAl8CTldQCPlREEkEQEDkDFRiPQFdiUF9AAQF+AAFcCUQFRCPEEEDQEEEECOFRQCUFdAAF8QAAF+iUFcQiOFSkEEDQkEEDlRCPQlcCTl+AAQl9AAldiTg");
	this.shape_173.setTransform(330.075,489.55);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("rgba(255,255,255,0.137)").s().p("ArbbEQlRiPkEkEQkEkEiPlSQiTlcAAl/QAAl9CTldQCPlREEkEQEEkFFRiOQFeiUF9AAQF+AAFdCUQFSCOEEEFQEEEECPFRQCTFdAAF9QAAF/iTFcQiPFSkEEEQkEEElSCPQldCTl+AAQl9AAleiTg");
	this.shape_174.setTransform(330.075,489.75);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("rgba(255,255,255,0.137)").s().p("ArcbGQlRiPkFkFQkEkDiPlSQiUldAAmAQAAl+CUldQCPlSEEkEQEFkFFRiOQFeiVF+AAQF/AAFdCVQFSCOEFEFQEEEECPFSQCUFdAAF+QAAGAiUFdQiPFSkEEDQkFEFlSCPQldCTl/AAQl+AAleiTg");
	this.shape_175.setTransform(330.075,489.95);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("rgba(255,255,255,0.137)").s().p("ArdbIQlSiPkFkFQkFkEiPlTQiTldAAmAQAAl+CTleQCPlSEFkFQEFkFFSiPQFfiUF+AAQF/AAFeCUQFSCPEFEFQEFEFCPFSQCUFeAAF+QAAGAiUFdQiPFTkFEEQkFEFlSCPQleCUl/AAQl+AAlfiUg");
	this.shape_176.setTransform(330.075,490.175);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("rgba(255,255,255,0.137)").s().p("ArebLQlSiQkFkFQkGkFiPlTQiUleAAmAQAAl/CUleQCPlTEGkFQEFkFFSiQQFfiUF/ABQGAgBFeCUQFTCQEFEFQEFEFCQFTQCUFeAAF/QAAGAiUFeQiQFTkFEFQkFEFlTCQQleCTmAAAQl/AAlfiTg");
	this.shape_177.setTransform(330.075,490.4);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("rgba(255,255,255,0.137)").s().p("ArfbNQlTiQkFkFQkGkGiPlTQiUleAAmAQAAmACUlfQCPlTEGkGQEFkFFTiQQFgiUF/AAQGAAAFfCUQFTCQEGEFQEGEGCPFTQCUFfAAGAQAAGAiUFeQiPFTkGEGQkGEFlTCQQlfCUmAAAQl/AAlgiUg");
	this.shape_178.setTransform(330.075,490.6);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("rgba(255,255,255,0.137)").s().p("ArgbQQlTiRkGkFQkGkFiQlUQiUlgAAmAQAAmBCUlfQCQlTEGkGQEGkGFTiQQFgiUGAAAQGBAAFfCUQFUCQEGEGQEGEGCPFTQCVFfAAGBQAAGAiVFgQiPFUkGEFQkGEFlUCRQlfCTmBABQmAgBlgiTg");
	this.shape_179.setTransform(330.075,490.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("rgba(255,255,255,0.137)").s().p("ArhbSQlTiQkHkHQkGkFiQlVQiUlfAAmCQAAmACUlgQCQlUEGkGQEHkGFTiQQFhiVGAAAQGBAAFgCVQFUCQEHEGQEGEGCQFUQCUFgAAGAQAAGCiUFfQiQFVkGEFQkHEHlUCQQlgCUmBAAQmAAAlhiUg");
	this.shape_180.setTransform(330.075,491.025);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("rgba(255,255,255,0.137)").s().p("AribUQlUiRkGkGQkHkGiQlVQiVlgAAmCQAAmBCVlgQCQlUEHkHQEGkHFUiPQFhiVGBgBQGCABFgCVQFVCPEGEHQEHEHCQFUQCVFgAAGBQAAGCiVFgQiQFVkHEGQkGEGlVCRQlgCVmCAAQmBAAlhiVg");
	this.shape_181.setTransform(330.075,491.25);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("rgba(255,255,255,0.137)").s().p("ArjbWQlUiQkHkHQkHkHiQlVQiVlgAAmDQAAmBCVlhQCQlVEHkGQEHkIFUiPQFiiWGBAAQGCAAFhCWQFVCPEHEIQEHEGCQFVQCVFhAAGBQAAGDiVFgQiQFVkHEHQkHEHlVCQQlhCVmCAAQmBAAliiVg");
	this.shape_182.setTransform(330.075,491.45);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("rgba(255,255,255,0.137)").s().p("ArkbYQlViQkHkHQkHkHiRlWQiVlhAAmDQAAmCCVlhQCRlVEHkHQEHkIFViQQFiiWGCAAQGDAAFhCWQFWCQEHEIQEHEHCRFVQCVFhAAGCQAAGDiVFhQiRFWkHEHQkHEHlWCQQlhCWmDAAQmCAAliiWg");
	this.shape_183.setTransform(330.075,491.675);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("rgba(255,255,255,0.137)").s().p("ArlbaQlViQkIkHQkHkIiRlWQiVlhAAmEQAAmCCVliQCRlVEHkJQEIkHFViRQFjiVGCAAQGDAAFiCVQFWCREIEHQEHEJCRFVQCVFiAAGCQAAGEiVFhQiRFWkHEIQkIEHlWCQQliCWmDAAQmCAAljiWg");
	this.shape_184.setTransform(330.075,491.9);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("rgba(255,255,255,0.137)").s().p("ArlbdQlWiRkJkIQkIkHiQlXQiWlhAAmFQAAmCCWljQCQlWEIkIQEJkIFWiRQFiiWGDAAQGEAAFiCWQFWCREIEIQEIEICRFWQCWFjAAGCQAAGFiWFhQiRFXkIEHQkIEIlWCRQliCVmEAAQmDAAliiVg");
	this.shape_185.setTransform(330.075,492.1);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("rgba(255,255,255,0.137)").s().p("ArmbgQlXiRkIkJQkJkIiRlXQiVliAAmEQAAmECVljQCRlWEJkIQEIkJFXiRQFjiWGDAAQGEAAFjCWQFXCREIEJQEJEICRFWQCVFjAAGEQAAGEiVFiQiRFXkJEIQkIEJlXCRQljCVmEAAQmDAAljiVg");
	this.shape_186.setTransform(330.075,492.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("rgba(255,255,255,0.137)").s().p("ArnbiQlXiRkJkJQkJkIiRlYQiWliAAmGQAAmECWljQCRlXEJkIQEJkJFXiRQFjiXGEAAQGFAAFjCXQFXCREJEJQEJEICRFXQCWFjAAGEQAAGGiWFiQiRFYkJEIQkJEJlXCRQljCWmFAAQmEAAljiWg");
	this.shape_187.setTransform(330.075,492.525);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("rgba(255,255,255,0.137)").s().p("ArobkQlYiSkJkIQkJkJiRlYQiWljAAmGQAAmECWlkQCRlXEJkKQEJkJFYiQQFkiXGEAAQGFAAFkCXQFYCQEJEJQEJEKCRFXQCWFkAAGEQAAGGiWFjQiRFYkJEJQkJEIlYCSQlkCWmFAAQmEAAlkiWg");
	this.shape_188.setTransform(330.075,492.75);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("rgba(255,255,255,0.137)").s().p("ArpbmQlYiRkKkKQkJkIiRlZQiXljAAmGQAAmGCXljQCRlZEJkJQEKkJFYiSQFkiWGFAAQGGAAFkCWQFYCSEKEJQEJEJCSFZQCWFjAAGGQAAGGiWFjQiSFZkJEIQkKEKlYCRQlkCXmGAAQmFAAlkiXg");
	this.shape_189.setTransform(330.075,492.95);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("rgba(255,255,255,0.137)").s().p("ArqbpQlZiSkJkKQkKkJiSlZQiWlkAAmHQAAmFCWllQCSlYEKkKQEJkKFZiRQFliXGFAAQGGAAFlCXQFZCREJEKQEKEKCSFYQCWFlAAGFQAAGHiWFkQiSFZkKEJQkJEKlZCSQllCWmGAAQmFAAlliWg");
	this.shape_190.setTransform(330.075,493.175);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("rgba(255,255,255,0.137)").s().p("ArrbrQlZiSkKkKQkKkKiSlZQiXlkAAmIQAAmGCXllQCSlYEKkKQEKkLFZiRQFliYGGAAQGHAAFlCYQFZCREKELQEKEKCSFYQCXFlAAGGQAAGIiXFkQiSFZkKEKQkKEKlZCSQllCXmHAAQmGAAlliXg");
	this.shape_191.setTransform(330.075,493.375);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("rgba(255,255,255,0.137)").s().p("ArsbtQlZiSkLkLQkKkKiSlZQiXllAAmIQAAmGCXllQCSlaEKkKQELkLFZiSQFmiXGGAAQGHAAFmCXQFaCSEKELQEKEKCTFaQCWFlAAGGQAAGIiWFlQiTFZkKEKQkKELlaCSQlmCXmHAAQmGAAlmiXg");
	this.shape_192.setTransform(330.075,493.6);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("rgba(255,255,255,0.137)").s().p("ArtbvQlaiSkLkLQkKkKiTlaQiXlmAAmIQAAmHCXlmQCTlZEKkLQELkLFaiSQFmiYGHAAQGIAAFmCYQFaCSELELQELELCSFZQCXFmAAGHQAAGIiXFmQiSFakLEKQkLELlaCSQlmCYmIAAQmHAAlmiYg");
	this.shape_193.setTransform(330.075,493.825);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("rgba(255,255,255,0.137)").s().p("ArubyQlbiTkKkLQkMkKiSlbQiXlmAAmJQAAmHCXlnQCSlaEMkLQEKkLFbiSQFmiYGIAAQGJAAFmCYQFaCSEMELQEKELCTFaQCYFnAAGHQAAGJiYFmQiTFbkKEKQkMELlaCTQlmCXmJAAQmIAAlmiXg");
	this.shape_194.setTransform(330.1,494.025);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("rgba(255,255,255,0.137)").s().p("Arvb0QlbiSkMkMQkLkLiTlbQiXlmAAmKQAAmICXlmQCTlbELkLQEMkMFbiTQFniYGIAAQGJAAFnCYQFbCTELEMQELELCTFbQCYFmAAGIQAAGKiYFmQiTFbkLELQkLEMlbCSQlnCYmJAAQmIAAlniYg");
	this.shape_195.setTransform(330.1,494.225);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("rgba(255,255,255,0.137)").s().p("Arwb2QlbiSkMkMQkMkMiTlbQiYlnAAmKQAAmICYlnQCTlcEMkMQEMkLFbiTQFniYGJAAQGKAAFnCYQFbCTEMELQEMEMCSFcQCZFngBGIQABGKiZFnQiSFbkMEMQkMEMlbCSQlnCYmKAAQmJAAlniYg");
	this.shape_196.setTransform(330.1,494.45);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("rgba(255,255,255,0.137)").s().p("Aryb5QlbiTkMkNQkMkLiTlcQiYlnAAmLQAAmJCYloQCTlbEMkMQEMkMFbiTQFpiZGJAAQGKAAFoCZQFcCTELEMQENEMCTFbQCYFoAAGJQAAGLiYFnQiTFckNELQkLENlcCTQloCYmKAAQmJAAlpiYg");
	this.shape_197.setTransform(330.1,494.675);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("rgba(255,255,255,0.137)").s().p("Arzb7QlbiTkMkNQkNkMiTlcQiZloABmLQgBmJCZloQCTlcENkNQEMkMFbiUQFqiYGJAAQGKAAFpCYQFcCUENEMQEMENCTFcQCZFoAAGJQAAGLiZFoQiTFckMEMQkNENlcCTQlpCYmKAAQmJAAlqiYg");
	this.shape_198.setTransform(330.1,494.875);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("rgba(255,255,255,0.137)").s().p("Arzb+QlciUkNkNQkOkMiTldQiYloAAmMQAAmKCYloQCTldEOkMQENkNFciUQFpiZGKAAQGLAAFpCZQFdCUENENQEMEMCTFdQCZFoAAGKQAAGMiZFoQiTFdkMEMQkNENldCUQlpCYmLAAQmKAAlpiYg");
	this.shape_199.setTransform(330.1,495.075);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("rgba(255,255,255,0.137)").s().p("Ar0cAQldiUkNkNQkNkNiUldQiZlpAAmMQAAmKCZlqQCUlcENkOQENkNFdiTQFpiZGLAAQGLAAFqCZQFdCTENENQEOEOCTFcQCYFqAAGKQAAGMiYFpQiTFdkOENQkNENldCUQlqCYmLAAQmLAAlpiYg");
	this.shape_200.setTransform(330.1,495.325);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("rgba(255,255,255,0.137)").s().p("Ar1cCQldiUkOkNQkNkOiUldQiZlpAAmNQAAmLCZlpQCUleENkNQEOkOFdiUQFqiZGLAAQGMAAFqCZQFdCUEOEOQEOENCTFeQCZFpAAGLQAAGNiZFpQiTFdkOEOQkOENldCUQlqCZmMAAQmLAAlqiZg");
	this.shape_201.setTransform(330.1,495.525);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("rgba(255,255,255,0.137)").s().p("Ar2cEQleiUkOkNQkNkOiUleQialqABmNQgBmLCalqQCUleENkOQEOkOFeiUQFqiZGMAAQGMAAFrCZQFdCUEOEOQEOEOCVFeQCYFqABGLQgBGNiYFqQiVFekOEOQkOENldCUQlrCZmMAAQmMAAlqiZg");
	this.shape_202.setTransform(330.1,495.725);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("rgba(255,255,255,0.137)").s().p("Ar3cHQleiUkOkPQkPkNiUlfQiZlqAAmOQAAmMCZlqQCUleEPkOQEOkPFeiUQFriaGMAAQGNAAFrCaQFeCUEPEPQEOEOCUFeQCZFqAAGMQAAGOiZFqQiUFfkOENQkPEPleCUQlrCZmNAAQmMAAlriZg");
	this.shape_203.setTransform(330.1,495.925);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("rgba(255,255,255,0.137)").s().p("Ar4cJQlfiVkOkOQkPkOiUlfQialrAAmOQAAmMCalrQCUlfEPkPQEOkOFfiVQFriZGNAAQGNAAFsCZQFeCVEPEOQEPEPCUFfQCZFrAAGMQAAGOiZFrQiUFfkPEOQkPEOleCVQlsCZmNAAQmNAAlriZg");
	this.shape_204.setTransform(330.1,496.175);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("rgba(255,255,255,0.137)").s().p("Ar4cJQlfiUkOkPQkPkOiUlfQialrAAmOQAAmMCalrQCUlfEPkPQEOkOFfiVQFriZGNAAQGNAAFsCZQFeCVEPEOQEPEPCUFfQCZFrAAGMQAAGOiZFrQiUFfkPEOQkPEPleCUQlsCZmNAAQmNAAlriZg");
	this.shape_205.setTransform(330.1,496.175);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("rgba(255,255,255,0.137)").s().p("Ar3cHQleiVkOkOQkPkOiUleQiZlqAAmOQAAmLCZlrQCUleEPkOQEOkPFeiUQFriaGMAAQGNAAFrCaQFeCUEPEPQEOEOCUFeQCZFrAAGLQAAGOiZFqQiUFekOEOQkPEOleCVQlrCZmNAAQmMAAlriZg");
	this.shape_206.setTransform(330.1,495.95);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("rgba(255,255,255,0.137)").s().p("Ar2cEQleiUkOkOQkOkNiTleQialqABmNQgBmMCalpQCTleEOkOQEOkOFeiUQFqiaGMAAQGMAAFrCaQFdCUEOEOQEOEOCVFeQCYFpABGMQgBGNiYFqQiVFekOENQkOEOldCUQlrCamMgBQmMABlqiag");
	this.shape_207.setTransform(330.1,495.75);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("rgba(255,255,255,0.137)").s().p("Ar1cCQldiUkOkNQkNkNiUleQiZlpAAmNQAAmLCZlpQCUleENkNQEOkOFdiUQFqiZGLAAQGMAAFqCZQFeCUENEOQEOENCUFeQCYFpAAGLQAAGNiYFpQiUFekOENQkNENleCUQlqCZmMAAQmLAAlqiZg");
	this.shape_208.setTransform(330.1,495.525);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("rgba(255,255,255,0.137)").s().p("Ar1cAQlciUkOkNQkMkNiUldQiZlpAAmMQAAmKCZlpQCUldEMkOQEOkNFciTQFqiZGLAAQGLAAFqCZQFdCTENENQEOEOCTFdQCYFpAAGKQAAGMiYFpQiTFdkOENQkNENldCUQlqCYmLAAQmLAAlqiYg");
	this.shape_209.setTransform(330.1,495.325);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("rgba(255,255,255,0.137)").s().p("Arzb9QlciSkNkOQkNkMiUldQiYloAAmLQAAmLCYloQCUlcENkOQENkNFciTQFpiZGKAAQGLAAFpCZQFdCTENENQENEOCTFcQCYFoAAGLQAAGLiYFoQiTFdkNEMQkNEOldCSQlpCZmLAAQmKAAlpiZg");
	this.shape_210.setTransform(330.075,495.1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("rgba(255,255,255,0.137)").s().p("Aryb7QlciTkNkMQkMkMiTldQiZloAAmLQAAmKCZlnQCTldEMkMQENkMFciUQFpiYGJAAQGLAAFoCYQFcCUENEMQEMEMCUFdQCYFnAAGKQAAGLiYFoQiUFdkMEMQkNEMlcCTQloCYmLABQmJgBlpiYg");
	this.shape_211.setTransform(330.075,494.9);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("rgba(255,255,255,0.137)").s().p("Arxb5QlciTkMkNQkMkLiTlcQiYlnAAmLQAAmJCYloQCTlbEMkNQEMkLFciTQFoiZGJAAQGKAAFoCZQFcCTEMELQEMENCTFbQCYFoAAGJQAAGLiYFnQiTFckMELQkMENlcCTQloCYmKAAQmJAAloiYg");
	this.shape_212.setTransform(330.075,494.7);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("rgba(255,255,255,0.137)").s().p("Arwb3QlbiUkMkLQkMkLiTlcQiYlnAAmKQAAmJCYlnQCTlbEMkMQEMkLFbiTQFoiYGIgBQGKABFnCYQFbCTEMELQEMEMCTFbQCYFnAAGJQAAGKiYFnQiTFckMELQkMELlbCUQlnCXmKABQmIgBloiXg");
	this.shape_213.setTransform(330.075,494.5);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("rgba(255,255,255,0.137)").s().p("Arvb0QlbiSkLkMQkMkLiTlaQiXlnAAmKQAAmICXlmQCTlbEMkMQELkLFbiTQFniYGIAAQGJAAFnCYQFbCTEMELQELEMCTFbQCXFmAAGIQAAGKiXFnQiTFakLELQkMEMlbCSQlnCYmJAAQmIAAlniYg");
	this.shape_214.setTransform(330.075,494.25);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("rgba(255,255,255,0.137)").s().p("ArubzQlaiTkMkLQkLkLiSlbQiYlmAAmIQAAmICYlmQCSlbELkLQEMkLFaiTQFniXGHAAQGJAAFmCXQFbCTELELQELELCTFbQCXFmAAGIQAAGIiXFmQiTFbkLELQkLELlbCTQlmCWmJAAQmHAAlniWg");
	this.shape_215.setTransform(330.075,494.05);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("rgba(255,255,255,0.137)").s().p("ArtbwQlaiSkLkMQkLkKiSlaQiXlmAAmIQAAmHCXlmQCSlaELkLQELkKFaiTQFmiXGHAAQGIAAFnCXQFZCTELEKQELELCSFaQCXFmAAGHQAAGIiXFmQiSFakLEKQkLEMlZCSQlnCXmIAAQmHAAlmiXg");
	this.shape_216.setTransform(330.075,493.85);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("rgba(255,255,255,0.137)").s().p("ArsbuQlaiSkKkLQkLkKiSlaQiXllAAmIQAAmGCXlmQCSlZELkKQEKkLFaiSQFmiYGGAAQGIAAFmCYQFZCSEKELQELEKCSFZQCXFmAAGGQAAGIiXFlQiSFakLEKQkKELlZCSQlmCXmIAAQmGAAlmiXg");
	this.shape_217.setTransform(330.075,493.625);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("rgba(255,255,255,0.137)").s().p("ArrbrQlZiSkKkKQkLkJiSlaQiWlkAAmIQAAmGCWllQCSlZELkKQEKkKFZiSQFliXGGAAQGHAAFmCXQFYCSELEKQEKEKCSFZQCWFlAAGGQAAGIiWFkQiSFakKEJQkLEKlYCSQlmCXmHAAQmGAAlliXg");
	this.shape_218.setTransform(330.075,493.425);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("rgba(255,255,255,0.137)").s().p("ArrbpQlYiSkKkKQkKkJiRlZQiXlkAAmHQAAmFCXllQCRlYEKkKQEKkKFYiSQFmiXGFAAQGHAAFlCXQFYCSEKEKQEKEKCRFYQCXFlAAGFQAAGHiXFkQiRFZkKEJQkKEKlYCSQllCXmHAAQmFAAlmiXg");
	this.shape_219.setTransform(330.075,493.225);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("rgba(255,255,255,0.137)").s().p("ArqbnQlXiSkKkJQkJkJiSlZQiWljAAmHQAAmFCWlkQCSlYEJkJQEKkKFXiRQFliXGFAAQGGAAFlCXQFYCREJEKQEKEJCRFYQCWFkAAGFQAAGHiWFjQiRFZkKEJQkJEJlYCSQllCWmGAAQmFAAlliWg");
	this.shape_220.setTransform(330.075,493);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("rgba(255,255,255,0.137)").s().p("ArpblQlXiSkJkJQkJkIiSlYQiWlkAAmGQAAmECWlkQCSlXEJkJQEJkKFXiRQFliXGEAAQGGAAFkCXQFXCREJEKQEJEJCSFXQCWFkAAGEQAAGGiWFkQiSFYkJEIQkJEJlXCSQlkCWmGAAQmEAAlliWg");
	this.shape_221.setTransform(330.075,492.775);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("rgba(255,255,255,0.137)").s().p("ArobiQlXiRkJkJQkIkIiRlYQiXliAAmGQAAmECXljQCRlXEIkJQEJkJFXiRQFkiWGEAAQGFAAFkCWQFXCREIEJQEJEJCRFXQCXFjAAGEQAAGGiXFiQiRFYkJEIQkIEJlXCRQlkCWmFAAQmEAAlkiWg");
	this.shape_222.setTransform(330.075,492.575);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("rgba(255,255,255,0.137)").s().p("ArnbgQlWiRkJkJQkIkIiRlXQiWliAAmFQAAmDCWljQCRlXEIkIQEJkJFWiRQFjiWGEAAQGEAAFkCWQFWCREJEJQEIEICRFXQCWFjAAGDQAAGFiWFiQiRFXkIEIQkJEJlWCRQlkCWmEAAQmEAAljiWg");
	this.shape_223.setTransform(330.075,492.375);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("rgba(255,255,255,0.137)").s().p("ArmbeQlWiRkIkIQkIkIiRlXQiWliAAmEQAAmDCWliQCRlWEIkJQEIkIFWiQQFjiWGDAAQGEAAFjCWQFWCQEIEIQEIEJCRFWQCWFiAAGDQAAGEiWFiQiRFXkIEIQkIEIlWCRQljCVmEAAQmDAAljiVg");
	this.shape_224.setTransform(330.075,492.175);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("rgba(255,255,255,0.137)").s().p("ArlbcQlViRkIkIQkIkIiRlWQiVlhAAmEQAAmDCVlhQCRlWEIkIQEIkIFViQQFiiWGDAAQGDAAFjCWQFVCQEIEIQEIEICRFWQCVFhAAGDQAAGEiVFhQiRFWkIEIQkIEIlVCRQljCVmDAAQmDAAliiVg");
	this.shape_225.setTransform(330.075,491.95);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("rgba(255,255,255,0.137)").s().p("ArkbZQlViQkIkIQkHkHiQlVQiWliAAmDQAAmCCWliQCQlUEHkIQEIkHFViRQFiiVGCgBQGDABFiCVQFVCREHEHQEIEICQFUQCWFiAAGCQAAGDiWFiQiQFVkIEHQkHEIlVCQQliCWmDAAQmCAAliiWg");
	this.shape_226.setTransform(330.075,491.75);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("rgba(255,255,255,0.137)").s().p("ArjbXQlViQkHkHQkHkHiQlVQiVlhAAmDQAAmBCVlhQCQlVEHkHQEHkHFViQQFhiWGCAAQGCAAFiCWQFVCQEHEHQEHEHCQFVQCVFhAAGBQAAGDiVFhQiQFVkHEHQkHEHlVCQQliCVmCAAQmCAAlhiVg");
	this.shape_227.setTransform(330.075,491.525);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("rgba(255,255,255,0.137)").s().p("AribVQlUiRkHkGQkHkGiQlVQiVlgAAmDQAAmACVlhQCQlVEHkGQEHkHFUiQQFhiVGBAAQGCAAFhCVQFUCQEHEHQEHEGCQFVQCVFhAAGAQAAGDiVFgQiQFVkHEGQkHEGlUCRQlhCVmCgBQmBABlhiVg");
	this.shape_228.setTransform(330.075,491.3);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("rgba(255,255,255,0.137)").s().p("ArhbSQlUiPkGkHQkHkGiQlVQiUlfAAmCQAAmACUlhQCQlTEHkHQEGkGFUiQQFgiVGBAAQGBAAFhCVQFUCQEGEGQEHEHCPFTQCVFhAAGAQAAGCiVFfQiPFVkHEGQkGEHlUCPQlhCVmBAAQmBAAlgiVg");
	this.shape_229.setTransform(330.075,491.1);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("rgba(255,255,255,0.137)").s().p("ArgbQQlUiPkGkHQkGkFiPlUQiVlfAAmCQAAmACVlgQCPlTEGkGQEGkGFUiQQFgiUGAAAQGBAAFgCUQFTCQEGEGQEGEGCQFTQCVFgAAGAQAAGCiVFfQiQFUkGEFQkGEHlTCPQlgCUmBAAQmAAAlgiUg");
	this.shape_230.setTransform(330.075,490.9);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("rgba(255,255,255,0.137)").s().p("ArfbNQlTiPkGkGQkGkFiPlUQiUleAAmBQAAl/CUlgQCPlSEGkHQEGkFFTiQQFfiUGAAAQGAAAFgCUQFTCQEGEFQEFEHCQFSQCUFgAAF/QAAGBiUFeQiQFUkFEFQkGEGlTCPQlgCVmAAAQmAAAlfiVg");
	this.shape_231.setTransform(330.075,490.7);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("rgba(255,255,255,0.137)").s().p("ArebLQlTiPkFkFQkGkFiPlTQiUleAAmBQAAl/CUleQCPlTEGkFQEFkGFTiPQFfiVF/AAQGAAAFfCVQFSCPEGEGQEFEFCQFTQCUFeAAF/QAAGBiUFeQiQFTkFEFQkGEFlSCPQlfCVmAAAQl/AAlfiVg");
	this.shape_232.setTransform(330.075,490.475);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("rgba(255,255,255,0.137)").s().p("ArdbKQlSiQkFkFQkFkEiQlTQiTleAAl/QAAl/CTlfQCQlSEFkEQEFkGFSiOQFeiVF/AAQF/AAFfCVQFSCOEFEGQEFEECPFSQCUFfAAF/QAAF/iUFeQiPFTkFEEQkFEFlSCQQlfCTl/AAQl/AAleiTg");
	this.shape_233.setTransform(330.075,490.25);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("rgba(255,255,255,0.137)").s().p("ArcbHQlSiPkEkFQkFkEiPlSQiUldAAl/QAAl/CUleQCPlREFkFQEEkFFSiOQFeiVF+AAQF/AAFeCVQFSCOEFEFQEEEFCPFRQCUFeAAF/QAAF/iUFdQiPFSkEEEQkFEFlSCPQleCUl/AAQl+AAleiUg");
	this.shape_234.setTransform(330.05,490.05);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("rgba(255,255,255,0.137)").s().p("ArbbFQlSiPkEkFQkEkDiPlSQiTldAAl/QAAl+CTldQCPlREEkEQEEkFFSiOQFeiUF9AAQF/AAFdCUQFSCOEEEFQEEEECPFRQCUFdAAF+QAAF/iUFdQiPFSkEEDQkEEFlSCPQldCTl/AAQl9AAleiTg");
	this.shape_235.setTransform(330.05,489.85);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("rgba(255,255,255,0.137)").s().p("ArabCQlRiOkEkEQkEkEiPlRQiTlcAAl/QAAl9CTldQCPlQEEkEQEEkEFRiPQFdiUF9AAQF+AAFdCUQFRCPEEEEQEEEECPFQQCTFdAAF9QAAF/iTFcQiPFRkEEEQkEEElRCOQldCUl+AAQl9AAldiUg");
	this.shape_236.setTransform(330.05,489.625);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("rgba(255,255,255,0.137)").s().p("ArZbAQlRiOkDkEQkEkDiOlRQiUlcAAl+QAAl8CUldQCOlQEEkEQEDkDFRiPQFdiTF8AAQF+AAFcCTQFRCPEDEDQEEEECPFQQCTFdgBF8QABF+iTFcQiPFRkEEDQkDEElRCOQldCTl9AAQl8AAldiTg");
	this.shape_237.setTransform(330.05,489.425);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("rgba(255,255,255,0.137)").s().p("ArYa+QlQiPkDkDQkEkDiOlQQiTlcAAl9QAAl8CTlcQCOlQEEkDQEDkDFQiPQFciTF8AAQF9AAFcCTQFQCPEEEDQEDEDCOFQQCTFcAAF8QAAF9iTFcQiOFQkDEDQkEEDlQCPQlcCTl9AAQl8AAlciTg");
	this.shape_238.setTransform(330.05,489.225);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("rgba(255,255,255,0.137)").s().p("ArXa7QlQiOkCkDQkDkCiPlQQiTlbABl9QgBl7CTlcQCPlPEDkDQECkDFQiOQFciTF7AAQF8AAFdCTQFPCOEDEDQEDEDCOFPQCTFcAAF7QAAF9iTFbQiOFQkDECQkDEDlPCOQldCTl8AAQl7AAlciTg");
	this.shape_239.setTransform(330.05,489.025);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("rgba(255,255,255,0.137)").s().p("ArWa5QlPiNkDkDQkCkCiPlQQiSlaAAl9QAAl7CSlbQCPlPECkCQEDkDFPiOQFbiTF7AAQF8AAFcCTQFOCOEDEDQECECCPFPQCSFbAAF7QAAF9iSFaQiPFQkCECQkDEDlOCNQlcCTl8AAQl7AAlbiTg");
	this.shape_240.setTransform(330.05,488.775);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("rgba(255,255,255,0.137)").s().p("ArWa3QlOiOkDkCQkBkCiOlPQiTlaAAl8QAAl6CTlbQCOlOEBkDQEDkCFOiOQFciSF6AAQF8AAFaCSQFPCOECECQEDEDCNFOQCSFbAAF6QAAF8iSFaQiNFPkDECQkCEClPCOQlaCSl8AAQl6AAlciSg");
	this.shape_241.setTransform(330.05,488.575);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("rgba(255,255,255,0.137)").s().p("ArVa1QlOiOkCkCQkBkBiOlPQiSlaAAl7QAAl6CSlaQCOlOEBkCQECkCFOiOQFbiSF6AAQF7AAFaCSQFPCOEBECQEDECCNFOQCSFaAAF6QAAF7iSFaQiNFPkDEBQkBEClPCOQlaCSl7AAQl6AAlbiSg");
	this.shape_242.setTransform(330.05,488.375);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("rgba(255,255,255,0.137)").s().p("ArUazQlNiOkCkBQkBkCiOlOQiSlZAAl7QAAl5CSlaQCOlNEBkCQECkCFNiNQFbiSF5AAQF7AAFZCSQFOCNECECQECECCMFNQCSFaAAF5QAAF7iSFZQiMFOkCECQkCEBlOCOQlZCSl7gBQl5ABlbiSg");
	this.shape_243.setTransform(330.05,488.15);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("rgba(255,255,255,0.137)").s().p("ArTawQlNiNkBkCQkBkAiOlOQiRlZAAl6QAAl5CRlZQCOlNEBkCQEBkBFNiNQFaiSF5AAQF6AAFZCSQFOCNEBEBQEBECCNFNQCSFZAAF5QAAF6iSFZQiNFOkBEAQkBEClOCNQlZCSl6AAQl5AAlaiSg");
	this.shape_244.setTransform(330.05,487.95);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("rgba(255,255,255,0.137)").s().p("ArRauQlNiNkBkBQkBkBiNlNQiSlYAAl6QAAl5CSlYQCNlNEBkBQEBkBFNiNQFZiRF4AAQF6AAFZCRQFMCNEBEBQEBEBCNFNQCSFYAAF5QAAF6iSFYQiNFNkBEBQkBEBlMCNQlZCSl6gBQl4ABlZiSg");
	this.shape_245.setTransform(330.025,487.75);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("rgba(255,255,255,0.137)").s().p("ArQasQlNiNkAkBQkBkAiNlNQiRlYAAl5QAAl4CRlYQCNlMEBkBQEAkBFNiMQFYiSF4AAQF5AAFZCSQFMCMEBEBQEAEBCNFMQCRFYAAF4QAAF5iRFYQiNFNkAEAQkBEBlMCNQlZCRl5AAQl4AAlYiRg");
	this.shape_246.setTransform(330.025,487.525);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("rgba(255,255,255,0.137)").s().p("ArPapQlMiMkBkBQkAj/iMlNQiSlXAAl4QAAl4CSlYQCMlMEAkAQEBkBFMiMQFYiSF3AAQF5AAFYCSQFMCMEAEBQEAEACNFMQCRFYAAF4QAAF4iRFXQiNFNkAD/QkAEBlMCMQlYCSl5AAQl3AAlYiSg");
	this.shape_247.setTransform(330.025,487.3);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("rgba(255,255,255,0.137)").s().p("ArOanQlMiNkAj/QkAkAiMlLQiRlYAAl3QAAl3CRlYQCMlLEAkAQEAkBFMiMQFXiRF3AAQF4AAFYCRQFLCMEAEBQEAEACMFLQCRFYAAF3QAAF3iRFYQiMFLkAEAQkAD/lLCNQlYCRl4AAQl3AAlXiRg");
	this.shape_248.setTransform(330.025,487.1);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("rgba(255,255,255,0.137)").s().p("ArOakQlLiLj/kAQkAj/iMlMQiRlWAAl4QAAl2CRlXQCMlLEAkAQD/kAFLiLQFYiSF2AAQF4AAFXCSQFLCLD/EAQEAEACMFLQCRFXAAF2QAAF4iRFWQiMFMkAD/Qj/EAlLCLQlXCSl4AAQl2AAlYiSg");
	this.shape_249.setTransform(330.025,486.9);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("rgba(255,255,255,0.137)").s().p("ArNaiQlKiMj/j/QkAj+iMlMQiQlWAAl3QAAl2CQlWQCMlLEAkAQD/j+FKiMQFXiRF2AAQF3AAFXCRQFKCMEAD+QD/EACMFLQCQFWAAF2QAAF3iQFWQiMFMj/D+QkAD/lKCMQlXCRl3AAQl2AAlXiRg");
	this.shape_250.setTransform(330.025,486.7);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("rgba(255,255,255,0.137)").s().p("ArMagQlKiMj/j/Qj/j+iLlLQiRlVAAl3QAAl1CRlWQCLlKD/j/QD/j/FKiMQFXiRF1AAQF3AAFWCRQFKCMD/D/QD/D/CLFKQCRFWAAF1QAAF3iRFVQiLFLj/D+Qj/D/lKCMQlWCRl3AAQl1AAlXiRg");
	this.shape_251.setTransform(330.025,486.475);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("rgba(255,255,255,0.137)").s().p("ArLaeQlJiLj/j/Qj+j+iMlKQiQlWAAl2QAAl0CQlWQCMlKD+j+QD/j/FJiMQFWiQF1AAQF2AAFWCQQFKCMD+D/QD/D+CLFKQCQFWAAF0QAAF2iQFWQiLFKj/D+Qj+D/lKCLQlWCQl2AAQl1AAlWiQg");
	this.shape_252.setTransform(330.025,486.25);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("rgba(255,255,255,0.137)").s().p("ArKacQlJiMj+j+Qj+j9iMlLQiQlUAAl2QAAl0CQlVQCMlKD+j+QD+j+FJiMQFWiQF0AAQF2AAFVCQQFJCMD+D+QD/D+CLFKQCQFVAAF0QAAF2iQFUQiLFLj/D9Qj+D+lJCMQlVCQl2gBQl0ABlWiQg");
	this.shape_253.setTransform(330.025,486.05);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("rgba(255,255,255,0.137)").s().p("ArJaZQlJiLj9j+Qj+j9iMlJQiPlUAAl2QAAl0CPlUQCMlJD+j+QD9j+FJiLQFViQF0AAQF1AAFVCQQFJCLD+D+QD9D+CMFJQCPFUAAF0QAAF2iPFUQiMFJj9D9Qj+D+lJCLQlVCQl1AAQl0AAlViQg");
	this.shape_254.setTransform(330.025,485.825);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("rgba(255,255,255,0.137)").s().p("ArIaXQlIiLj+j9Qj9j9iLlJQiQlUAAl1QAAlzCQlUQCLlJD9j9QD+j+FIiLQFViQFzAAQF1AAFUCQQFICLD+D+QD9D9CLFJQCQFUAAFzQAAF1iQFUQiLFJj9D9Qj+D9lICLQlUCQl1AAQlzAAlViQg");
	this.shape_255.setTransform(330.025,485.625);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("rgba(255,255,255,0.137)").s().p("ArHaVQlIiLj9j9Qj9j9iLlIQiPlUAAl0QAAlzCPlUQCLlID9j9QD9j9FIiLQFUiPFzAAQF0AAFUCPQFICLD9D9QD9D9CLFIQCPFUAAFzQAAF0iPFUQiLFIj9D9Qj9D9lICLQlUCPl0AAQlzAAlUiPg");
	this.shape_256.setTransform(330.025,485.425);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("rgba(255,255,255,0.137)").s().p("ArGaSQlHiKj9j9Qj9j9iLlIQiPlSAAl0QAAlyCPlUQCLlHD9j9QD9j9FHiLQFTiPFzAAQFzAAFUCPQFHCLD9D9QD9D9CLFHQCPFUAAFyQAAF0iPFSQiLFIj9D9Qj9D9lHCKQlUCQlzAAQlzAAlTiQg");
	this.shape_257.setTransform(330.025,485.225);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("rgba(255,255,255,0.137)").s().p("ArFaQQlHiLj9j8Qj8j8iKlIQiQlSAAlzQAAlyCQlSQCKlID8j8QD9j9FHiKQFTiPFyAAQFzAAFTCPQFHCKD8D9QD9D8CKFIQCQFSAAFyQAAFziQFSQiKFIj9D8Qj8D8lHCLQlTCPlzAAQlyAAlTiPg");
	this.shape_258.setTransform(330.025,485);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("rgba(255,255,255,0.137)").s().p("ArEaOQlHiKj8j8Qj8j8iKlHQiPlSAAlzQAAlxCPlTQCKlGD8j8QD8j8FHiLQFSiPFyAAQFyAAFTCPQFHCLD8D8QD8D8CKFGQCPFTAAFxQAAFziPFSQiKFHj8D8Qj8D8lHCKQlTCPlyAAQlyAAlSiPg");
	this.shape_259.setTransform(330.025,484.775);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("rgba(255,255,255,0.137)").s().p("ArDaMQlGiKj8j8Qj8j8iKlGQiPlSAAlyQAAlxCPlSQCKlGD8j8QD8j7FGiLQFSiOFxAAQFyAAFSCOQFGCLD8D7QD8D8CKFGQCPFSAAFxQAAFyiPFSQiKFGj8D8Qj8D8lGCKQlSCOlyAAQlxAAlSiOg");
	this.shape_260.setTransform(330.025,484.575);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("rgba(255,255,255,0.137)").s().p("ArCaJQlGiKj7j7Qj8j7iKlGQiOlRAAlyQAAlwCOlSQCKlGD8j7QD7j7FGiKQFRiPFxAAQFxAAFSCPQFGCKD7D7QD8D7CKFGQCOFSAAFwQAAFyiOFRQiKFGj8D7Qj7D7lGCKQlSCPlxAAQlxAAlRiPg");
	this.shape_261.setTransform(330.025,484.375);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("rgba(255,255,255,0.137)").s().p("ArBaHQlFiJj8j8Qj7j6iJlGQiPlRAAlxQAAlvCPlRQCJlGD7j7QD8j7FFiKQFRiPFwAAQFxAAFRCPQFFCKD7D7QD8D7CJFGQCPFRAAFvQAAFxiPFRQiJFGj8D6Qj7D8lFCJQlRCPlxgBQlwABlRiPg");
	this.shape_262.setTransform(330.025,484.15);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("rgba(255,255,255,0.137)").s().p("ArAaEQlFiJj7j6Qj7j7iJlFQiOlQAAlxQAAlvCOlRQCJlED7j8QD7j6FFiKQFQiOFwAAQFwAAFRCOQFFCKD7D6QD6D8CKFEQCOFRAAFvQAAFxiOFQQiKFFj6D7Qj7D6lFCJQlRCPlwAAQlwAAlQiPg");
	this.shape_263.setTransform(330.025,483.95);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("rgba(255,255,255,0.137)").s().p("Aq/aDQlFiKj6j6Qj7j7iJlEQiOlQAAlwQAAlvCOlQQCJlFD7j6QD6j7FFiJQFQiNFvAAQFwAAFQCNQFECJD7D7QD6D6CKFFQCOFQAAFvQAAFwiOFQQiKFEj6D7Qj7D6lECKQlQCNlwAAQlvAAlQiNg");
	this.shape_264.setTransform(330.025,483.75);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("rgba(255,255,255,0.137)").s().p("Aq+aBQlEiKj6j6Qj6j5iKlFQiNlPAAlvQAAlvCNlPQCKlFD6j5QD6j7FEiJQFPiOFvAAQFvAAFQCOQFECJD6D7QD6D5CJFFQCOFPAAFvQAAFviOFPQiJFFj6D5Qj6D6lECKQlQCNlvAAQlvAAlPiNg");
	this.shape_265.setTransform(330.025,483.5);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("rgba(255,255,255,0.137)").s().p("Aq9Z+QlEiJj6j6Qj5j5iJlEQiOlPAAluQAAlvCOlPQCJlDD5j6QD6j6FEiJQFPiNFugBQFvABFPCNQFECJD5D6QD6D6CJFDQCOFPAAFvQAAFuiOFPQiJFEj6D5Qj5D6lECJQlPCNlvABQlugBlPiNg");
	this.shape_266.setTransform(330.025,483.3);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("rgba(255,255,255,0.137)").s().p("Aq8Z8QlEiJj5j5Qj5j6iJlDQiNlOAAlvQAAltCNlPQCJlDD5j5QD5j6FEiIQFOiOFuAAQFuAAFPCOQFDCID6D6QD5D5CJFDQCNFPAAFtQAAFviNFOQiJFDj5D6Qj6D5lDCJQlPCNluAAQluAAlOiNg");
	this.shape_267.setTransform(330.025,483.1);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("rgba(255,255,255,0.137)").s().p("Aq7Z5QlDiIj5j6Qj5j4iJlDQiNlOAAluQAAltCNlOQCJlDD5j5QD5j5FDiIQFOiOFtAAQFuAAFOCOQFDCID5D5QD5D5CJFDQCNFOAAFtQAAFuiNFOQiJFDj5D4Qj5D6lDCIQlOCOluAAQltAAlOiOg");
	this.shape_268.setTransform(330.025,482.9);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("rgba(255,255,255,0.137)").s().p("Aq6Z3QlDiIj4j5Qj5j4iJlDQiMlNAAluQAAlsCMlOQCJlCD5j5QD4j5FDiIQFOiNFsAAQFtAAFPCNQFCCID4D5QD5D5CIFCQCOFOAAFsQAAFuiOFNQiIFDj5D4Qj4D5lCCIQlPCNltAAQlsAAlOiNg");
	this.shape_269.setTransform(330,482.675);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("rgba(255,255,255,0.137)").s().p("Aq5Z1QlCiIj5j5Qj4j4iIlCQiNlNAAltQAAlsCNlNQCIlCD4j4QD5j5FCiIQFNiNFsAAQFtAAFOCNQFBCID4D5QD5D4CIFCQCNFNAAFsQAAFtiNFNQiIFCj5D4Qj4D5lBCIQlOCNltAAQlsAAlNiNg");
	this.shape_270.setTransform(330,482.475);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("rgba(255,255,255,0.137)").s().p("Aq4ZyQlBiIj5j3Qj4j4iIlCQiMlMgBlsQABlsCMlNQCIlCD4j4QD5j3FBiJQFMiMFsAAQFtAAFNCMQFBCJD4D3QD4D4CIFCQCNFNgBFsQABFsiNFMQiIFCj4D4Qj4D3lBCIQlNCNltAAQlsAAlMiNg");
	this.shape_271.setTransform(330,482.25);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("rgba(255,255,255,0.137)").s().p("Aq3ZxQlCiJj3j4Qj3j2iJlCQiMlMAAlsQAAlrCMlMQCJlBD3j4QD3j3FCiJQFMiLFrAAQFsAAFNCLQFACJD4D3QD4D4CHFBQCNFMAAFrQAAFsiNFMQiHFCj4D2Qj4D4lACJQlNCLlsAAQlrAAlMiLg");
	this.shape_272.setTransform(330,482.05);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("rgba(255,255,255,0.137)").s().p("Aq2ZuQlBiIj3j3Qj4j3iIlBQiLlLAAlsQAAlqCLlMQCIlBD4j3QD3j3FBiIQFLiMFrAAQFsAAFLCMQFBCID4D3QD2D3CIFBQCMFMABFqQgBFsiMFLQiIFBj2D3Qj4D3lBCIQlLCMlsAAQlrAAlLiMg");
	this.shape_273.setTransform(330,481.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_136,p:{scaleX:1,scaleY:1,x:330,y:481.625}}]}).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_136,p:{scaleX:1.097,scaleY:1.097,x:330.0999,y:496.3953}}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_136,p:{scaleX:1,scaleY:1,x:330,y:481.625}}]},1).wait(1));

	// Layer_4
	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("rgba(255,255,255,0.098)").s().p("EgN9AhEQmciuk+k+Qk+k+iumcQi0mrAAnTQAAnSC0mrQCumcE+k+QE+k+GciuQGri0HSAAQHTAAGrC0QGcCuE+E+QE+E+CuGcQC1GrAAHSQAAHTi1GrQivGck9E+Qk+E+mcCuQmrC1nTgBQnSABmri1g");
	this.shape_274.setTransform(330,430.35);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("rgba(255,255,255,0.098)").s().p("EgN+AhHQmdiuk/k/Qk9k+ivmdQi0mrAAnUQAAnTC0mrQCvmdE9k+QE/k/GdiuQGri1HTAAQHUAAGsC1QGcCuE/E/QE9E+CvGdQC0GrABHTQgBHUi0GrQivGdk9E+Qk/E/mcCuQmsC1nUAAQnTAAmri1g");
	this.shape_275.setTransform(330,430.475);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("rgba(255,255,255,0.098)").s().p("EgN/AhKQmdiulAlAQk+k+ivmeQi1msAAnUQAAnUC1mrQCvmeE+k+QFAlAGdiuQGri1HUAAQHVAAGsC1QGcCuE/FAQE/E+CvGeQC1GrAAHUQAAHUi1GsQivGek/E+Qk/FAmcCuQmsC1nVAAQnUAAmri1g");
	this.shape_276.setTransform(330,430.65);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("rgba(255,255,255,0.098)").s().p("EgOBAhNQmdivlAk/Qk/k/ivmeQi1mtAAnVQAAnUC1mtQCvmdE/lAQFAk/GdivQGti1HUAAQHVAAGtC1QGdCvFAE/QE/FACvGdQC1GtAAHUQAAHVi1GtQiwGek+E/QlAE/mdCvQmtC1nVAAQnUAAmti1g");
	this.shape_277.setTransform(330,430.775);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("rgba(255,255,255,0.098)").s().p("EgOCAhQQmeivlAlAQlAlAivmeQi1mtAAnWQAAnVC1mtQCvmeFAlAQFAlAGeivQGti1HVAAQHWAAGtC1QGeCvFAFAQFAFACvGeQC2GtAAHVQAAHWi2GtQivGelAFAQlAFAmeCvQmtC1nWAAQnVAAmti1g");
	this.shape_278.setTransform(330,430.925);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("rgba(255,255,255,0.098)").s().p("EgODAhTQmfivlBlAQk/lAiwmgQi2mtAAnXQAAnVC2muQCwmfE/lBQFBk/GfiwQGti2HWABQHXgBGtC2QGfCwFBE/QFAFBCvGfQC2GugBHVQABHXi2GtQiwGgk/FAQlBFAmfCvQmtC2nXAAQnWAAmti2g");
	this.shape_279.setTransform(330,431.05);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("rgba(255,255,255,0.098)").s().p("EgOFAhWQmfiwlBlAQlBlBivmfQi2muAAnYQAAnXC2muQCvmfFBlAQFBlCGfivQGvi2HWAAQHXAAGuC2QGgCvFBFCQFAFACwGfQC2GuAAHXQAAHYi2GuQiwGflAFBQlBFAmgCwQmuC2nXAAQnWAAmvi2g");
	this.shape_280.setTransform(330,431.2);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("rgba(255,255,255,0.098)").s().p("EgOFAhZQmhiwlBlBQlBlBivmgQi3mvAAnYQAAnXC3mvQCvmgFBlBQFBlBGhiwQGui2HXAAQHYAAGvC2QGgCwFBFBQFBFBCwGgQC2GvAAHXQAAHYi2GvQiwGglBFBQlBFBmgCwQmvC2nYAAQnXAAmui2g");
	this.shape_281.setTransform(330,431.35);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("rgba(255,255,255,0.098)").s().p("EgOHAhcQmhiwlBlCQlClBiwmhQi2mvAAnZQAAnYC2mvQCwmhFClBQFBlCGhiwQGvi2HYAAQHZAAGvC2QGhCwFBFCQFCFBCwGhQC2GvAAHYQAAHZi2GvQixGhlBFBQlBFCmhCwQmvC2nZAAQnYAAmvi2g");
	this.shape_282.setTransform(330.025,431.475);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("rgba(255,255,255,0.098)").s().p("EgOIAhfQmiiwlClDQlBlCixmhQi2mwAAnZQAAnZC2mvQCxmiFBlCQFClCGiiwQGwi3HYAAQHaAAGwC3QGhCwFCFCQFCFCCwGiQC2GvABHZQgBHZi2GwQixGhlBFCQlCFDmhCwQmwC2naABQnYgBmwi2g");
	this.shape_283.setTransform(330,431.65);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("rgba(255,255,255,0.098)").s().p("EgOKAhiQmhixlDlCQlClDixmiQi3mwAAnaQAAnZC3mxQCxmhFClDQFDlCGhixQGxi3HZAAQHaAAGwC3QGiCxFDFCQFCFDCxGhQC3GxAAHZQAAHai3GwQixGilCFDQlDFCmiCxQmwC3naAAQnZAAmxi3g");
	this.shape_284.setTransform(330.025,431.775);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("rgba(255,255,255,0.098)").s().p("EgOLAhlQmiixlDlDQlDlDixmiQi3mxAAnbQAAnZC3mxQCxmjFDlDQFDlDGiiwQGyi4HZAAQHbAAGxC4QGiCwFDFDQFDFDCxGjQC3GxAAHZQAAHbi3GxQiyGilCFDQlDFDmiCxQmxC3nbAAQnZAAmyi3g");
	this.shape_285.setTransform(330,431.9);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("rgba(255,255,255,0.098)").s().p("EgOMAhnQmjiwlDlDQlElEixmjQi3myAAnbQAAnbC3mxQCxmjFElDQFDlDGjiyQGyi3HaAAQHbAAGyC3QGjCyFDFDQFEFDCxGjQC3GxAAHbQAAHbi3GyQiyGjlDFEQlDFDmjCwQmyC4nbAAQnaAAmyi4g");
	this.shape_286.setTransform(330.025,432.05);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("rgba(255,255,255,0.098)").s().p("EgONAhqQmkixlElEQlElDixmjQi3mzAAncQAAnbC3myQCxmkFElDQFElFGkixQGyi3HbAAQHcAAGyC3QGkCxFEFFQFDFDCyGkQC3GyAAHbQAAHci3GzQiyGjlDFDQlEFEmkCxQmyC5ncAAQnbAAmyi5g");
	this.shape_287.setTransform(330.025,432.2);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("rgba(255,255,255,0.098)").s().p("EgOPAhuQmkiylElEQlElEiymkQi4mzAAndQAAncC4myQCymlFElEQFElEGkixQGzi5HcAAQHdAAGzC5QGkCxFEFEQFEFECyGlQC4GyAAHcQAAHdi4GzQiyGklEFEQlEFEmkCyQmzC4ndAAQncAAmzi4g");
	this.shape_288.setTransform(330.025,432.325);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("rgba(255,255,255,0.098)").s().p("EgOQAhxQmliylElFQlFlEiymlQi4m0AAndQAAncC4m0QCymkFFlFQFElFGliyQG0i4HcAAQHdAAG0C4QGkCyFFFFQFFFFCyGkQC4G0AAHcQAAHdi4G0QizGllEFEQlFFFmkCyQm0C4ndAAQncAAm0i4g");
	this.shape_289.setTransform(330.025,432.475);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("rgba(255,255,255,0.098)").s().p("EgORAh0QmliylGlGQlFlFiymlQi4m0AAneQAAndC4m0QCymlFFlGQFGlFGliyQG0i4HdAAQHeAAG0C4QGlCyFGFFQFFFGCyGlQC4G0AAHdQAAHei4G0QizGllEFFQlGFGmlCyQm0C4neAAQndAAm0i4g");
	this.shape_290.setTransform(330.025,432.625);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("rgba(255,255,255,0.098)").s().p("EgOSAh2QmmiylGlFQlFlGizmmQi4m0AAnfQAAneC4m0QCzmmFFlGQFGlGGmiyQG0i4HeAAQHfAAG0C4QGmCyFGFGQFFFGCzGmQC4G0AAHeQAAHfi4G0QizGmlFFGQlGFFmmCyQm0C5nfAAQneAAm0i5g");
	this.shape_291.setTransform(330.025,432.775);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("rgba(255,255,255,0.098)").s().p("EgOUAh6QmmizlGlGQlGlGiymnQi6m0AAngQAAnfC6m0QCymnFGlGQFGlGGmizQG2i4HeAAQHfAAG2C4QGmCzFGFGQFGFGCyGnQC6G0AAHfQAAHgi6G0QiyGnlGFGQlGFGmmCzQm2C4nfAAQneAAm2i4g");
	this.shape_292.setTransform(330.025,432.9);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("rgba(255,255,255,0.098)").s().p("EgOVAh9QmnizlGlHQlHlGiymnQi6m2AAngQAAnfC6m2QCymnFHlGQFGlHGniyQG2i6HfAAQHgAAG2C6QGnCyFGFHQFHFGCyGnQC6G2AAHfQAAHgi6G2QizGnlGFGQlGFHmnCzQm2C5ngAAQnfAAm2i5g");
	this.shape_293.setTransform(330.025,433.05);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("rgba(255,255,255,0.098)").s().p("EgOWAiAQmoizlHlIQlHlGizmoQi5m2AAnhQAAngC5m2QCzmoFHlHQFHlHGoizQG2i5HgAAQHhAAG2C5QGoCzFGFHQFHFHCzGoQC6G2AAHgQAAHhi6G2QizGolHFGQlGFImoCzQm2C5nhAAQngAAm2i5g");
	this.shape_294.setTransform(330.05,433.2);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("rgba(255,255,255,0.098)").s().p("EgOXAiCQmoizlIlHQlHlHizmpQi6m3AAnhQAAngC6m3QCzmoFHlIQFIlHGoizQG3i6HgAAQHhAAG3C6QGpCzFHFHQFHFICzGoQC6G3AAHgQAAHhi6G3QizGplHFHQlHFHmpCzQm3C6nhAAQngAAm3i6g");
	this.shape_295.setTransform(330.025,433.325);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("rgba(255,255,255,0.098)").s().p("EgOZAiFQmpizlHlIQlIlIi0moQi5m4AAniQAAnhC5m4QC0moFIlIQFHlIGpizQG4i6HhAAQHiAAG3C6QGpCzFIFIQFIFICzGoQC6G4ABHhQgBHii6G4Qi0GolHFIQlIFImpCzQm3C6niAAQnhAAm4i6g");
	this.shape_296.setTransform(330.05,433.475);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("rgba(255,255,255,0.098)").s().p("EgOaAiIQmpizlIlJQlJlIizmpQi7m4AAnjQAAniC7m4QCzmpFJlJQFIlIGpizQG4i7HiAAQHjAAG4C7QGpCzFJFIQFIFJCzGpQC7G4AAHiQAAHji7G4Qi0GplHFIQlJFJmpCzQm4C7njAAQniAAm4i7g");
	this.shape_297.setTransform(330.025,433.625);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("rgba(255,255,255,0.098)").s().p("EgObAiMQmqi0lJlJQlIlJi0mqQi7m5AAnjQAAniC7m5QC0mqFIlJQFJlIGqi0QG5i7HiAAQHjAAG5C7QGqC0FJFIQFJFJCzGqQC7G5AAHiQAAHji7G5Qi0GqlIFJQlJFJmqC0Qm5C6njAAQniAAm5i6g");
	this.shape_298.setTransform(330.025,433.75);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("rgba(255,255,255,0.098)").s().p("EgOcAiPQmri1lJlJQlJlJi0mrQi7m5AAnkQAAnjC7m5QC0mrFJlJQFJlJGri1QG5i6HjAAQHkAAG5C6QGrC1FJFJQFJFJC0GrQC7G5AAHjQAAHki7G5Qi0GrlJFJQlJFJmrC1Qm5C6nkAAQnjAAm5i6g");
	this.shape_299.setTransform(330.025,433.9);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("rgba(255,255,255,0.098)").s().p("EgOdAiRQmsi0lJlKQlKlJi0msQi7m6AAnkQAAnjC7m7QC0mqFKlLQFJlJGsi0QG5i7HkAAQHlAAG6C7QGrC0FJFJQFKFLC0GqQC7G7AAHjQAAHki7G6Qi0GslKFJQlJFKmrC0Qm6C7nlABQnkgBm5i7g");
	this.shape_300.setTransform(330.025,434.05);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("rgba(255,255,255,0.098)").s().p("EgOfAiUQmsi0lKlLQlKlJi0msQi7m7AAnlQAAnlC7m6QC0mrFKlLQFKlKGsi0QG6i8HlAAQHlAAG7C8QGrC0FLFKQFJFLC1GrQC8G6AAHlQAAHli8G7Qi1GslJFJQlLFLmrC0Qm7C7nlABQnlgBm6i7g");
	this.shape_301.setTransform(330.05,434.2);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("rgba(255,255,255,0.098)").s().p("EgOgAiXQmsi0lLlLQlKlLi1msQi8m7AAnmQAAnlC8m7QC1msFKlLQFLlKGsi1QG7i8HlAAQHmAAG7C8QGsC1FLFKQFLFLC0GsQC8G7AAHlQAAHmi8G7Qi1GslKFLQlLFLmsC0Qm7C8nmAAQnlAAm7i8g");
	this.shape_302.setTransform(330.025,434.325);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("rgba(255,255,255,0.098)").s().p("EgOiAiaQmsi1lLlKQlMlMi0mtQi8m7AAnnQAAnlC8m8QC0mtFMlLQFLlLGsi1QG8i8HmAAQHmAAG8C8QGtC1FLFLQFLFLC1GtQC8G8AAHlQAAHni8G7Qi2GtlKFMQlLFKmtC1Qm8C8nmAAQnmAAm8i8g");
	this.shape_303.setTransform(330.05,434.45);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("rgba(255,255,255,0.098)").s().p("EgOiAidQmui1lLlMQlMlLi1muQi8m8AAnnQAAnmC8m9QC1mtFMlMQFLlLGui1QG8i8HmAAQHnAAG9C8QGtC1FMFLQFLFMC1GtQC8G9AAHmQAAHni8G8Qi1GulLFLQlMFMmtC1Qm9C8nnAAQnmAAm8i8g");
	this.shape_304.setTransform(330.025,434.625);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("rgba(255,255,255,0.098)").s().p("EgOkAigQmui2lMlLQlMlMi1muQi9m9AAnoQAAnnC9m9QC1muFMlLQFMlMGui2QG9i9HnABQHogBG9C9QGuC2FMFMQFMFLC1GuQC9G9AAHnQAAHoi9G9Qi2GulLFMQlMFLmuC2Qm9C8noAAQnnAAm9i8g");
	this.shape_305.setTransform(330.05,434.75);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("rgba(255,255,255,0.098)").s().p("EgOlAijQmui2lNlMQlNlNi1muQi8m+gBnoQABnoC8m9QC1muFNlNQFNlNGui1QG9i8HogBQHoABG+C8QGuC1FNFNQFMFNC2GuQC8G9AAHoQAAHoi8G+Qi2GulMFNQlNFMmuC2Qm+C8noAAQnoAAm9i8g");
	this.shape_306.setTransform(330.05,434.9);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("rgba(255,255,255,0.098)").s().p("EgOmAimQmvi2lNlNQlNlMi2mwQi9m+AAnpQAAnpC9m+QC2muFNlNQFNlOGvi1QG+i9HoAAQHpAAG/C9QGvC1FNFOQFMFNC2GuQC9G+AAHpQAAHpi9G+Qi2GwlMFMQlNFNmvC2Qm/C9npAAQnoAAm+i9g");
	this.shape_307.setTransform(330.05,435.05);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("rgba(255,255,255,0.098)").s().p("EgOnAipQmxi2lMlNQlOlOi2mvQi9m/AAnqQAAnpC9m/QC2mvFOlOQFMlNGxi2QG+i9HpAAQHqAAG/C9QGvC2FOFNQFNFOC2GvQC9G/AAHpQAAHqi9G/Qi3GvlMFOQlOFNmvC2Qm/C9nqAAQnpAAm+i9g");
	this.shape_308.setTransform(330.05,435.175);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("rgba(255,255,255,0.098)").s().p("EgOpAisQmwi2lOlOQlOlOi2mwQi9m/gBnrQABnqC9m/QC2mwFOlOQFOlOGwi2QHAi9HpAAQHrAAG/C9QGwC2FOFOQFNFOC3GwQC9G/AAHqQAAHri9G/Qi3GwlNFOQlOFOmwC2Qm/C9nrAAQnpAAnAi9g");
	this.shape_309.setTransform(330.05,435.325);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("rgba(255,255,255,0.098)").s().p("EgOqAivQmxi2lOlPQlOlOi3mxQi9m/AAnsQAAnqC9nAQC3mxFOlOQFOlOGxi3QHAi+HqABQHrgBHAC+QGxC3FOFOQFPFOC2GxQC9HAABHqQgBHsi9G/Qi3GxlOFOQlOFPmxC2QnAC9nrABQnqgBnAi9g");
	this.shape_310.setTransform(330.05,435.45);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("rgba(255,255,255,0.098)").s().p("EgOsAiyQmxi3lOlPQlPlOi3myQi+nAAAnsQAAnrC+nBQC3mxFPlOQFOlPGxi3QHBi+HrAAQHsAAHAC+QGyC3FPFPQFOFOC3GxQC+HBAAHrQAAHsi+HAQi4GylNFOQlPFPmyC3QnAC+nsAAQnrAAnBi+g");
	this.shape_311.setTransform(330.05,435.6);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("rgba(255,255,255,0.098)").s().p("EgOtAi1Qmyi3lOlQQlQlPi3mxQi+nBAAntQAAnsC+nAQC3mzFQlPQFOlPGyi3QHBi+HsAAQHtAAHAC+QGyC3FQFPQFPFPC3GzQC+HAAAHsQAAHti+HBQi4GxlOFPQlQFQmyC3QnAC+ntAAQnsAAnBi+g");
	this.shape_312.setTransform(330.05,435.75);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("rgba(255,255,255,0.098)").s().p("EgOuAi4Qmzi3lPlQQlQlPi3mzQi+nCAAntQAAnsC+nCQC3myFQlQQFPlPGzi4QHCi+HsAAQHtAAHCC+QGyC4FQFPQFPFQC4GyQC+HCAAHsQAAHti+HCQi4GzlPFPQlQFQmyC3QnCC+ntAAQnsAAnCi+g");
	this.shape_313.setTransform(330.075,435.875);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("rgba(255,255,255,0.098)").s().p("EgOvAi7Qmzi4lQlQQlQlQi4mzQi+nDgBntQABntC+nCQC4m0FQlPQFQlRGzi3QHCi+HtgBQHuABHCC+QGzC3FQFRQFQFPC4G0QC/HCgBHtQABHti/HDQi4GzlQFQQlQFQmzC4QnCC+nuAAQntAAnCi+g");
	this.shape_314.setTransform(330.05,436.05);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("rgba(255,255,255,0.098)").s().p("EgOxAi+Qmzi4lRlQQlQlRi4m0Qi/nCAAnvQAAnuC/nCQC4m0FQlRQFRlQGzi4QHDi/HuAAQHuAAHDC/QG0C4FQFQQFRFRC4G0QC/HCAAHuQAAHvi/HCQi5G0lQFRQlQFQm0C4QnDC/nuAAQnuAAnDi/g");
	this.shape_315.setTransform(330.075,436.175);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("rgba(255,255,255,0.098)").s().p("EgOxAjBQm1i4lRlRQlRlRi3m0QjAnEAAnvQAAnuDAnEQC3m0FRlRQFRlRG1i4QHDi/HuAAQHwAAHDC/QG0C4FRFRQFRFRC4G0QC/HEAAHuQAAHvi/HEQi4G0lRFRQlRFRm0C4QnDC/nwAAQnuAAnDi/g");
	this.shape_316.setTransform(330.05,436.3);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("rgba(255,255,255,0.098)").s().p("EgOzAjEQm1i5lRlRQlSlRi4m1Qi/nEAAnwQAAnvC/nEQC4m1FSlRQFRlSG1i3QHEjAHvAAQHwAAHEDAQG1C3FRFSQFRFRC5G1QC/HEAAHvQAAHwi/HEQi5G1lRFRQlRFRm1C5QnEC/nwAAQnvAAnEi/g");
	this.shape_317.setTransform(330.075,436.45);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("rgba(255,255,255,0.098)").s().p("EgO0AjGQm2i4lSlSQlRlSi5m1Qi/nFAAnwQAAnwC/nEQC5m2FRlSQFSlRG2i5QHEi/HwAAQHwAAHFC/QG2C5FRFRQFSFSC5G2QC/HEAAHwQAAHwi/HFQi5G1lSFSQlRFSm2C4QnFDAnwABQnwgBnEjAg");
	this.shape_318.setTransform(330.075,436.6);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("rgba(255,255,255,0.098)").s().p("EgO2AjJQm2i4lSlTQlSlSi5m1QjAnGAAnxQAAnxDAnEQC5m3FSlSQFSlSG2i5QHGi/HwgBQHxABHFC/QG2C5FTFSQFSFSC5G3QDAHEAAHxQAAHxjAHGQi6G1lRFSQlTFTm2C4QnFDAnxABQnwgBnGjAg");
	this.shape_319.setTransform(330.075,436.75);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("rgba(255,255,255,0.098)").s().p("EgO3AjNQm2i5lTlTQlTlTi5m2QjAnGAAnyQAAnxDAnGQC5m2FTlTQFTlTG2i5QHGjAHxAAQHyAAHGDAQG2C5FTFTQFTFTC5G2QDAHGAAHxQAAHyjAHGQi6G2lSFTQlTFTm2C5QnGDAnyAAQnxAAnGjAg");
	this.shape_320.setTransform(330.075,436.875);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("rgba(255,255,255,0.098)").s().p("EgO3AjQQm4i6lTlTQlTlTi6m3QjAnHAAnyQAAnxDAnHQC6m3FTlTQFTlTG4i6QHGjAHxAAQHyAAHHDAQG4C6FSFTQFTFTC6G3QDAHHAAHxQAAHyjAHHQi6G3lTFTQlSFTm4C6QnHDAnyAAQnxAAnGjAg");
	this.shape_321.setTransform(330.05,437.025);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("rgba(255,255,255,0.098)").s().p("EgO5AjTQm4i6lUlUQlTlTi6m4QjAnHAAnzQAAnyDAnHQC6m4FTlUQFUlTG4i6QHHjAHyAAQHzAAHHDAQG4C6FUFTQFTFUC6G4QDAHHAAHyQAAHzjAHHQi6G4lTFTQlUFUm4C6QnHDAnzAAQnyAAnHjAg");
	this.shape_322.setTransform(330.075,437.175);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("rgba(255,255,255,0.098)").s().p("EgO6AjWQm5i6lTlUQlUlUi7m4QjBnIAAn0QAAnyDBnJQC7m3FUlVQFTlUG5i6QHHjAHzAAQH0AAHIDAQG4C6FUFUQFUFVC6G3QDAHJAAHyQAAH0jAHIQi7G4lTFUQlUFUm4C6QnIDAn0AAQnzAAnHjAg");
	this.shape_323.setTransform(330.05,437.3);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("rgba(255,255,255,0.098)").s().p("EgO8AjZQm5i7lUlUQlVlVi6m5QjBnHAAn1QAAn0DBnHQC6m5FVlVQFUlVG5i6QHJjBHzAAQH0AAHJDBQG5C6FUFVQFVFVC6G5QDBHHAAH0QAAH1jBHHQi7G5lUFVQlUFUm5C7QnJDAn0AAQnzAAnJjAg");
	this.shape_324.setTransform(330.075,437.45);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("rgba(255,255,255,0.098)").s().p("EgO9AjcQm6i7lUlVQlVlVi7m5QjBnJAAn1QAAn0DBnJQC7m5FVlWQFUlUG6i6QHJjCH0AAQH1AAHJDCQG5C6FVFUQFVFWC7G5QDBHJAAH0QAAH1jBHJQi7G5lVFVQlVFVm5C7QnJDBn1AAQn0AAnJjBg");
	this.shape_325.setTransform(330.075,437.6);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("rgba(255,255,255,0.098)").s().p("EgO+AjfQm6i7lWlVQlVlWi6m6QjCnJAAn2QAAn1DCnJQC6m6FVlWQFWlVG6i6QHJjCH1AAQH2AAHJDCQG6C6FWFVQFVFWC6G6QDCHJAAH1QAAH2jCHJQi6G6lVFWQlWFVm6C7QnJDBn2AAQn1AAnJjBg");
	this.shape_326.setTransform(330.075,437.725);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("rgba(255,255,255,0.098)").s().p("EgO/AjhQm7i6lWlWQlWlWi6m7QjCnKAAn2QAAn1DCnKQC6m7FWlWQFWlWG7i6QHKjCH1AAQH2AAHKDCQG7C6FWFWQFWFWC6G7QDCHKAAH1QAAH2jCHKQi7G7lVFWQlWFWm7C6QnKDCn2AAQn1AAnKjCg");
	this.shape_327.setTransform(330.075,437.875);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("rgba(255,255,255,0.098)").s().p("EgPBAjkQm7i7lWlWQlWlWi7m7QjDnLAAn3QAAn2DDnLQC7m7FWlWQFWlXG7i6QHLjDH2AAQH3AAHLDDQG7C6FWFXQFXFWC6G7QDDHLAAH2QAAH3jDHLQi7G7lWFWQlWFWm7C7QnLDDn3AAQn2AAnLjDg");
	this.shape_328.setTransform(330.075,438.025);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("rgba(255,255,255,0.098)").s().p("EgPCAjnQm8i7lWlXQlXlWi7m8QjDnLAAn4QAAn3DDnLQC7m8FXlXQFWlWG8i8QHLjCH3AAQH4AAHLDCQG8C8FXFWQFWFXC7G8QDDHLAAH3QAAH4jDHLQi7G8lWFWQlXFXm8C7QnLDDn4AAQn3AAnLjDg");
	this.shape_329.setTransform(330.075,438.175);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("rgba(255,255,255,0.098)").s().p("EgPDAjqQm9i7lXlXQlXlYi7m8QjDnMAAn4QAAn3DDnMQC7m8FXlYQFXlXG9i7QHMjDH3AAQH4AAHMDDQG9C7FXFXQFXFYC7G8QDDHMAAH3QAAH4jDHMQi7G8lXFYQlXFXm9C7QnMDDn4AAQn3AAnMjDg");
	this.shape_330.setTransform(330.075,438.3);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("rgba(255,255,255,0.098)").s().p("EgPEAjtQm9i8lYlXQlYlYi7m9QjDnMAAn5QAAn4DDnMQC7m+FYlXQFYlYG9i8QHMjCH4AAQH5AAHNDCQG9C8FXFYQFYFXC7G+QDDHMAAH4QAAH5jDHMQi8G9lXFYQlXFXm9C8QnNDEn5AAQn4AAnMjEg");
	this.shape_331.setTransform(330.075,438.45);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("rgba(255,255,255,0.098)").s().p("EgPGAjwQm9i8lZlYQlXlYi9m+QjCnMgBn6QABn5DCnNQC9m+FXlXQFZlZG9i7QHNjEH5ABQH6gBHNDEQG9C7FYFZQFYFXC8G+QDDHNAAH5QAAH6jDHMQi8G+lYFYQlYFYm9C8QnNDDn6ABQn5gBnNjDg");
	this.shape_332.setTransform(330.1,438.6);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("rgba(255,255,255,0.098)").s().p("EgPHAjzQm+i8lZlYQlYlZi8m+QjEnOAAn6QAAn5DEnOQC8m+FYlZQFZlYG+i8QHOjEH5AAQH7AAHNDEQG+C8FZFYQFYFZC8G+QDEHOAAH5QAAH6jEHOQi8G+lYFZQlZFYm+C8QnNDEn7AAQn5AAnOjEg");
	this.shape_333.setTransform(330.075,438.725);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("rgba(255,255,255,0.098)").s().p("EgPIAj3Qm/i9lZlZQlZlZi9m/QjDnNAAn8QAAn6DDnOQC9m/FZlZQFZlZG/i8QHOjEH6AAQH7AAHODEQG/C8FZFZQFZFZC8G/QDEHOAAH6QAAH8jEHNQi8G/lZFZQlZFZm/C9QnODDn7AAQn6AAnOjDg");
	this.shape_334.setTransform(330.1,438.85);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("rgba(255,255,255,0.098)").s().p("EgPJAj5QnAi8lZlaQlalZi8nAQjEnOAAn8QAAn7DEnPQC8m/FalZQFZlaHAi8QHOjEH7AAQH8AAHPDEQG/C8FZFaQFaFZC8G/QDEHPAAH7QAAH8jEHOQi9HAlZFZQlZFam/C8QnPDEn8AAQn7AAnOjEg");
	this.shape_335.setTransform(330.075,439.025);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("rgba(255,255,255,0.098)").s().p("EgPLAj9QnAi9lalbQlalZi8nAQjFnPABn9QgBn7DFnPQC8nBFalZQFalbHAi8QHPjFH8ABQH8gBHPDFQHBC8FZFbQFaFZC9HBQDFHPAAH7QAAH9jFHPQi9HAlaFZQlZFbnBC9QnPDDn8AAQn8AAnPjDg");
	this.shape_336.setTransform(330.1,439.15);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("rgba(255,255,255,0.098)").s().p("EgPMAj/QnBi9lalaQlalbi+nAQjDnQAAn9QAAn8DDnQQC+nBFalaQFalaHBi9QHQjEH8AAQH9AAHQDEQHAC9FbFaQFaFaC9HBQDEHQAAH8QAAH9jEHQQi+HAlZFbQlbFanAC9QnQDFn9gBQn8ABnQjFg");
	this.shape_337.setTransform(330.1,439.3);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("rgba(255,255,255,0.098)").s().p("EgPOAkCQnAi9lblbQlblbi9nBQjFnRAAn9QAAn9DFnQQC9nBFblbQFblbHAi9QHRjFH9AAQH+AAHQDFQHCC9FaFbQFbFbC9HBQDFHQAAH9QAAH9jFHRQi9HBlbFbQlaFbnCC9QnQDFn+AAQn9AAnRjFg");
	this.shape_338.setTransform(330.1,439.45);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("rgba(255,255,255,0.098)").s().p("EgPOAkFQnCi9lclcQlalbi+nBQjFnSAAn+QAAn9DFnRQC+nCFalbQFclcHCi9QHQjFH+AAQH+AAHSDFQHBC9FbFcQFbFbC+HCQDFHRAAH9QAAH+jFHSQi+HBlbFbQlbFcnBC9QnSDFn+AAQn+AAnQjFg");
	this.shape_339.setTransform(330.1,439.575);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("rgba(255,255,255,0.098)").s().p("EgPQAkIQnCi+lclbQlclci9nCQjGnSAAn/QAAn+DGnSQC9nCFclcQFclbHCi+QHSjFH+AAQH/AAHSDFQHCC+FbFbQFdFcC9HCQDFHSAAH+QAAH/jFHSQi+HClcFcQlbFbnCC+QnSDFn/AAQn+AAnSjFg");
	this.shape_340.setTransform(330.1,439.725);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("rgba(255,255,255,0.098)").s().p("EgPRAkLQnDi+lclcQlclci+nDQjGnSAAoAQAAn/DGnSQC+nDFclcQFclcHDi+QHTjGH+ABQIAgBHSDGQHDC+FcFcQFcFcC+HDQDGHSgBH/QABIAjGHSQi+HDlcFcQlcFcnDC+QnSDGoAAAQn+AAnTjGg");
	this.shape_341.setTransform(330.1,439.85);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("rgba(255,255,255,0.098)").s().p("EgPTAkOQnCi+ldldQldldi+nDQjGnTAAoAQAAoADGnSQC+nEFdlcQFdldHCi+QHUjGH/AAQIBAAHSDGQHEC+FcFdQFdFcC+HEQDGHSAAIAQAAIAjGHTQi/HDlcFdQlcFdnEC+QnSDGoBAAQn/AAnUjGg");
	this.shape_342.setTransform(330.1,440.025);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("rgba(255,255,255,0.098)").s().p("EgPTAkOQnDi+lcldQldlci+nEQjGnTAAoAQAAn/DGnTQC+nEFdlcQFcldHDi+QHUjGH/AAQIAAAHTDGQHEC+FcFdQFdFcC+HEQDGHTAAH/QAAIAjGHTQi/HElcFcQlcFdnEC+QnTDGoAAAQn/AAnUjGg");
	this.shape_343.setTransform(330.1,440.025);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("rgba(255,255,255,0.098)").s().p("EgPRAkLQnDi+lclcQlclci+nDQjGnSAAoAQAAn/DGnSQC+nDFclcQFclcHDi+QHTjGH+AAQIAAAHSDGQHDC+FcFcQFcFcC+HDQDGHSgBH/QABIAjGHSQi+HDlcFcQlcFcnDC+QnSDGoAAAQn+AAnTjGg");
	this.shape_344.setTransform(330.1,439.875);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("rgba(255,255,255,0.098)").s().p("EgPQAkIQnCi+lclbQlclci+nDQjEnRgBn/QABn/DEnRQC+nDFclbQFclcHCi9QHSjGH+ABQH/gBHSDGQHCC9FbFcQFdFbC9HDQDFHRAAH/QAAH/jFHRQi+HDlcFcQlbFbnCC+QnSDGn/gBQn+ABnSjGg");
	this.shape_345.setTransform(330.1,439.75);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("rgba(255,255,255,0.098)").s().p("EgPOAkFQnCi9lblbQlclci9nBQjFnRAAn/QAAn9DFnRQC9nCFclbQFblcHCi9QHRjFH9AAQH/AAHRDFQHBC9FcFcQFbFbC9HCQDFHRAAH9QAAH/jFHRQi+HBlaFcQlcFbnBC9QnRDFn/AAQn9AAnRjFg");
	this.shape_346.setTransform(330.075,439.575);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("rgba(255,255,255,0.098)").s().p("EgPOAkDQnBi+lalaQlblci+nAQjEnRAAn+QAAn9DEnQQC+nCFblaQFalbHBi9QHRjFH9AAQH+AAHRDFQHBC9FaFbQFbFaC+HCQDEHQAAH9QAAH+jEHRQi/HAlaFcQlaFanBC+QnRDEn+AAQn9AAnRjEg");
	this.shape_347.setTransform(330.1,439.45);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("rgba(255,255,255,0.098)").s().p("EgPMAkAQnBi+lalaQlalai+nBQjEnQAAn9QAAn8DEnQQC+nBFalaQFalaHBi9QHQjFH8AAQH9AAHQDFQHBC9FaFaQFaFaC9HBQDFHQAAH8QAAH9jFHQQi9HBlaFaQlaFanBC+QnQDEn9AAQn8AAnQjEg");
	this.shape_348.setTransform(330.1,439.3);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("rgba(255,255,255,0.098)").s().p("EgPLAj8QnAi8lalaQlZlai9nAQjFnQAAn8QAAn8DFnPQC9nAFZlaQFalaHAi9QHQjEH7AAQH9AAHPDEQHAC9FaFaQFaFaC9HAQDEHPAAH8QAAH8jEHQQi+HAlZFaQlaFanAC8QnPDFn9AAQn7AAnQjFg");
	this.shape_349.setTransform(330.075,439.175);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("rgba(255,255,255,0.098)").s().p("EgPKAj6Qm/i9lalZQlZlai9m/QjEnPAAn8QAAn7DEnPQC9m/FZlZQFalaG/i9QHPjEH7AAQH7AAHPDEQHAC9FZFaQFaFZC9G/QDDHPAAH7QAAH8jDHPQi9G/laFaQlZFZnAC9QnPDEn7AAQn7AAnPjEg");
	this.shape_350.setTransform(330.1,439.025);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("rgba(255,255,255,0.098)").s().p("EgPIAj2QnAi8lYlZQlZlZi9m+QjEnPABn7QgBn6DEnPQC9m/FZlZQFYlYHAi9QHNjDH7gBQH7ABHODDQG/C9FZFYQFZFZC8G/QDFHPgBH6QABH7jFHPQi9G+lYFZQlZFZm/C8QnODFn7AAQn7AAnNjFg");
	this.shape_351.setTransform(330.1,438.9);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("rgba(255,255,255,0.098)").s().p("EgPHAjzQm+i8lZlYQlYlYi9m/QjDnOAAn6QAAn6DDnNQC9m/FYlYQFZlZG+i7QHOjEH5AAQH7AAHNDEQG/C7FYFZQFZFYC8G/QDDHNAAH6QAAH6jDHOQi9G/lYFYQlYFYm/C8QnNDEn7AAQn5AAnOjEg");
	this.shape_352.setTransform(330.075,438.75);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("rgba(255,255,255,0.098)").s().p("EgPGAjxQm+i8lYlYQlYlZi8m9QjDnNAAn6QAAn5DDnNQC8m+FYlXQFYlZG+i7QHNjEH5AAQH6AAHNDEQG+C7FXFZQFZFXC8G+QDDHNAAH5QAAH6jDHNQi9G9lYFZQlXFYm+C8QnNDDn6AAQn5AAnNjDg");
	this.shape_353.setTransform(330.1,438.6);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("rgba(255,255,255,0.098)").s().p("EgPFAjuQm9i8lXlYQlYlXi8m9QjDnNAAn5QAAn4DDnNQC8m9FYlYQFXlXG9i8QHNjDH4AAQH5AAHNDDQG9C8FYFXQFXFYC8G9QDDHNAAH4QAAH5jDHNQi8G9lXFXQlYFYm9C8QnNDDn5AAQn4AAnNjDg");
	this.shape_354.setTransform(330.075,438.475);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("rgba(255,255,255,0.098)").s().p("EgPDAjrQm9i7lXlYQlXlXi8m9QjDnLAAn5QAAn4DDnLQC8m9FXlXQFXlXG9i8QHMjDH3AAQH5AAHLDDQG9C8FXFXQFYFXC7G9QDDHLAAH4QAAH5jDHLQi8G9lXFXQlXFYm9C7QnLDDn5AAQn3AAnMjDg");
	this.shape_355.setTransform(330.075,438.325);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("rgba(255,255,255,0.098)").s().p("EgPDAjoQm7i7lXlXQlXlXi7m8QjDnLAAn4QAAn3DDnMQC7m8FXlWQFXlXG7i7QHMjDH3AAQH4AAHLDDQG8C7FXFXQFXFWC7G8QDCHMAAH3QAAH4jCHLQi8G8lWFXQlXFXm8C7QnLDDn4gBQn3ABnMjDg");
	this.shape_356.setTransform(330.1,438.2);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("rgba(255,255,255,0.098)").s().p("EgPBAjlQm7i7lXlWQlWlWi7m8QjCnKAAn4QAAn2DCnLQC7m8FWlWQFXlWG7i7QHLjCH2gBQH3ABHLDCQG7C7FXFWQFWFWC7G8QDCHLAAH2QAAH4jCHKQi7G8lWFWQlXFWm7C7QnLDDn3gBQn2ABnLjDg");
	this.shape_357.setTransform(330.075,438.05);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("rgba(255,255,255,0.098)").s().p("EgPAAjiQm7i7lVlVQlWlWi7m7QjCnLAAn2QAAn2DCnKQC7m6FWlXQFVlVG7i7QHKjCH2AAQH3AAHKDCQG7C7FWFVQFVFXC7G6QDCHKAAH2QAAH2jCHLQi7G7lVFWQlWFVm7C7QnKDCn3AAQn2AAnKjCg");
	this.shape_358.setTransform(330.075,437.9);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("rgba(255,255,255,0.098)").s().p("EgO+AjgQm7i7lVlWQlWlVi6m6QjCnKAAn2QAAn1DCnJQC6m6FWlWQFVlWG7i6QHJjCH1AAQH2AAHJDCQG7C6FVFWQFWFWC6G6QDCHJAAH1QAAH2jCHKQi7G6lVFVQlVFWm7C7QnJDBn2AAQn1AAnJjBg");
	this.shape_359.setTransform(330.075,437.75);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("rgba(255,255,255,0.098)").s().p("EgO9AjcQm6i6lVlVQlVlVi6m6QjCnJAAn1QAAn0DCnJQC6m6FVlVQFVlVG6i6QHJjCH0AAQH1AAHJDCQG6C6FVFVQFVFVC6G6QDCHJAAH0QAAH1jCHJQi6G6lVFVQlVFVm6C6QnJDCn1AAQn0AAnJjCg");
	this.shape_360.setTransform(330.075,437.625);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("rgba(255,255,255,0.098)").s().p("EgO8AjZQm5i6lVlUQlUlVi6m5QjCnIAAn1QAAnzDCnJQC6m6FUlUQFVlUG5i6QHIjBH0gBQH1ABHIDBQG5C6FVFUQFUFUC6G6QDCHJAAHzQAAH1jCHIQi6G5lUFVQlVFUm5C6QnIDCn1AAQn0AAnIjCg");
	this.shape_361.setTransform(330.075,437.5);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("rgba(255,255,255,0.098)").s().p("EgO7AjWQm4i5lVlUQlUlVi5m4QjBnIAAn0QAAnzDBnIQC5m4FUlVQFVlUG4i5QHIjCHzAAQH0AAHIDCQG4C5FUFUQFVFVC5G4QDBHIAAHzQAAH0jBHIQi6G4lUFVQlUFUm4C5QnIDCn0AAQnzAAnIjCg");
	this.shape_362.setTransform(330.075,437.35);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("rgba(255,255,255,0.098)").s().p("EgO6AjTQm4i5lTlUQlUlUi6m4QjAnHAAnzQAAnzDAnHQC6m4FUlTQFTlUG4i6QHIjAHyAAQHzAAHHDAQG4C6FUFUQFUFTC5G4QDBHHAAHzQAAHzjBHHQi6G4lTFUQlUFUm4C5QnHDBnzAAQnyAAnIjBg");
	this.shape_363.setTransform(330.075,437.225);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("rgba(255,255,255,0.098)").s().p("EgO4AjRQm4i6lTlTQlTlTi6m4QjAnGAAnzQAAnyDAnGQC6m4FTlTQFTlTG4i6QHGjAHyAAQHzAAHGDAQG4C6FTFTQFTFTC6G4QDAHGAAHyQAAHzjAHGQi6G4lTFTQlTFTm4C6QnGDAnzAAQnyAAnGjAg");
	this.shape_364.setTransform(330.075,437.075);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("rgba(255,255,255,0.098)").s().p("EgO3AjOQm3i5lTlTQlTlTi5m3QjAnGAAnyQAAnxDAnGQC5m3FTlTQFTlTG3i5QHGjAHxAAQHyAAHGDAQG3C5FTFTQFSFTC6G3QDAHGAAHxQAAHyjAHGQi6G3lSFTQlTFTm3C5QnGDAnyAAQnxAAnGjAg");
	this.shape_365.setTransform(330.075,436.925);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("rgba(255,255,255,0.098)").s().p("EgO2AjLQm2i5lTlSQlSlTi5m2QjAnFAAnyQAAnwDAnGQC5m2FSlSQFTlTG2i5QHGjAHwAAQHxAAHGDAQG2C5FSFTQFTFSC5G2QDAHGAAHwQAAHyjAHFQi6G2lSFTQlSFSm2C5QnGDAnxAAQnwAAnGjAg");
	this.shape_366.setTransform(330.075,436.775);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("rgba(255,255,255,0.098)").s().p("EgO1AjIQm1i5lSlSQlSlSi5m1Qi/nGAAnwQAAnwC/nEQC5m3FSlRQFSlSG1i5QHFi/HwgBQHxABHEC/QG3C5FRFSQFSFRC5G3QC/HEABHwQgBHwi/HGQi5G1lSFSQlRFSm3C5QnEDAnxgBQnwABnFjAg");
	this.shape_367.setTransform(330.05,436.65);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("rgba(255,255,255,0.098)").s().p("EgOzAjFQm2i4lRlSQlSlSi4m0Qi/nFAAnwQAAnvC/nFQC4m0FSlSQFRlSG2i4QHEjAHvABQHwgBHEDAQG1C4FSFSQFRFSC5G0QC/HFAAHvQAAHwi/HFQi5G0lRFSQlSFSm1C4QnEDAnwgBQnvABnEjAg");
	this.shape_368.setTransform(330.075,436.5);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("rgba(255,255,255,0.098)").s().p("EgOyAjCQm1i4lRlRQlRlRi4m1Qi/nEAAnvQAAnuC/nEQC4m1FRlRQFRlRG1i4QHDi/HvAAQHvAAHEC/QG1C4FRFRQFRFRC4G1QC/HEAAHuQAAHvi/HEQi5G1lQFRQlRFRm1C4QnEC/nvAAQnvAAnDi/g");
	this.shape_369.setTransform(330.075,436.375);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("rgba(255,255,255,0.098)").s().p("EgOxAi/Qm0i4lQlQQlRlRi4m0Qi/nEAAnuQAAnuC/nDQC4m0FRlQQFQlRG0i4QHEi/HtAAQHvAAHDC/QG0C4FRFRQFQFQC4G0QC/HDAAHuQAAHui/HEQi5G0lPFRQlRFQm0C4QnDC/nvAAQntAAnEi/g");
	this.shape_370.setTransform(330.05,436.25);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("rgba(255,255,255,0.098)").s().p("EgOwAi8Qmzi3lQlRQlRlQi3mzQi/nDAAnuQAAntC/nDQC3mzFRlQQFQlQGzi4QHDi/HtAAQHuAAHCC/QG0C4FQFQQFQFQC4GzQC/HDAAHtQAAHui/HDQi4GzlQFQQlQFRm0C3QnCC/nuAAQntAAnDi/g");
	this.shape_371.setTransform(330.075,436.075);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("rgba(255,255,255,0.098)").s().p("EgOuAi5Qmzi4lQlPQlPlQi4mzQi/nCAAntQAAntC/nBQC4m0FPlPQFQlPGzi4QHCi+HsgBQHtABHDC+QGzC4FPFPQFQFPC3G0QC+HBAAHtQAAHti+HCQi4GzlPFQQlPFPmzC4QnDC/ntAAQnsAAnCi/g");
	this.shape_372.setTransform(330.05,435.95);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("rgba(255,255,255,0.098)").s().p("EgOtAi3Qmzi4lOlPQlQlPi3mzQi/nBABntQgBnrC/nCQC3mzFQlOQFOlQGzi3QHBi/HsABQHtgBHBC/QGzC3FPFQQFPFOC4GzQC+HCAAHrQAAHti+HBQi5GzlOFPQlPFPmzC4QnBC+ntAAQnsAAnBi+g");
	this.shape_373.setTransform(330.05,435.8);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("rgba(255,255,255,0.098)").s().p("EgOsAizQmyi3lPlPQlPlOi2myQi+nBAAnsQAAnrC+nBQC2myFPlPQFPlOGyi3QHBi+HrAAQHsAAHBC+QGxC3FPFOQFPFPC3GyQC+HBAAHrQAAHsi+HBQi3GylPFOQlPFPmxC3QnBC+nsAAQnrAAnBi+g");
	this.shape_374.setTransform(330.075,435.675);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("rgba(255,255,255,0.098)").s().p("EgOrAiwQmxi2lOlPQlPlOi2mxQi+nAAAnsQAAnrC+nAQC2mxFPlOQFOlPGxi2QHBi+HqAAQHsAAG/C+QGyC2FOFPQFOFOC4GxQC9HAAAHrQAAHsi9HAQi4GxlOFOQlOFPmyC2Qm/C+nsAAQnqAAnBi+g");
	this.shape_375.setTransform(330.05,435.525);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("rgba(255,255,255,0.098)").s().p("EgOqAitQmwi2lOlOQlOlOi2mwQi+nAAAnrQAAnqC+nAQC2mwFOlOQFOlOGwi3QHAi9HqAAQHrAAG/C9QGxC3FOFOQFOFOC3GwQC9HAAAHqQAAHri9HAQi4GwlNFOQlOFOmxC2Qm/C+nrAAQnqAAnAi+g");
	this.shape_376.setTransform(330.05,435.4);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("rgba(255,255,255,0.098)").s().p("EgOoAiqQmwi2lOlNQlNlOi3mwQi9m/AAnqQAAnpC9m/QC3mwFNlOQFOlNGwi3QG/i9HpAAQHqAAG/C9QGwC3FOFNQFNFOC2GwQC+G/AAHpQAAHqi+G/Qi2GwlNFOQlOFNmwC2Qm/C+nqAAQnpAAm/i+g");
	this.shape_377.setTransform(330.075,435.275);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("rgba(255,255,255,0.098)").s().p("EgOnAinQmwi1lMlNQlOlOi1mvQi9m+AAnqQAAnoC9m/QC1mwFOlNQFMlNGwi1QG+i9HpAAQHpAAG/C9QGvC1FOFNQFMFNC3GwQC9G/AAHoQAAHqi9G+Qi3GvlMFOQlOFNmvC1Qm/C9npAAQnpAAm+i9g");
	this.shape_378.setTransform(330.05,435.1);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("rgba(255,255,255,0.098)").s().p("EgOmAilQmvi2lNlNQlMlMi1mvQi9m+AAnpQAAnoC9m+QC1mvFMlMQFNlNGvi2QG+i8HoAAQHpAAG+C8QGuC2FNFNQFNFMC2GvQC9G+AAHoQAAHpi9G+Qi3GvlMFMQlNFNmuC2Qm+C8npAAQnoAAm+i8g");
	this.shape_379.setTransform(330.05,434.975);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("rgba(255,255,255,0.098)").s().p("EgOkAiiQmvi2lMlMQlMlMi2muQi8m+AAnoQAAnnC8m9QC2mvFMlMQFMlMGvi2QG9i8HnAAQHpAAG9C8QGuC2FMFMQFMFMC2GvQC8G9AAHnQAAHoi8G+Qi2GulMFMQlMFMmuC2Qm9C8npAAQnnAAm9i8g");
	this.shape_380.setTransform(330.025,434.825);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("rgba(255,255,255,0.098)").s().p("EgOkAifQmti2lMlLQlMlMi1muQi8m8AAnoQAAnnC8m8QC1muFMlMQFMlMGti1QG9i8HnAAQHnAAG9C8QGuC1FMFMQFLFMC2GuQC8G8AAHnQAAHoi8G8Qi2GulLFMQlMFLmuC2Qm9C8nnAAQnnAAm9i8g");
	this.shape_381.setTransform(330.05,434.7);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("rgba(255,255,255,0.098)").s().p("EgOiAicQmui1lKlLQlMlMi1mtQi8m8AAnnQAAnmC8m8QC1mtFMlLQFKlMGui1QG8i8HmAAQHnAAG8C8QGtC1FMFMQFLFLC1GtQC8G8AAHmQAAHni8G8Qi2GtlKFMQlMFLmtC1Qm8C8nnAAQnmAAm8i8g");
	this.shape_382.setTransform(330.05,434.55);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("rgba(255,255,255,0.098)").s().p("EgOhAiZQmsi1lLlLQlLlLi1msQi8m8AAnmQAAnlC8m8QC1mtFLlKQFLlLGsi1QG8i8HlAAQHnAAG7C8QGtC1FKFLQFLFKC1GtQC8G8AAHlQAAHmi8G8Qi1GslLFLQlKFLmtC1Qm7C8nnAAQnlAAm8i8g");
	this.shape_383.setTransform(330.025,434.425);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("rgba(255,255,255,0.098)").s().p("EgOfAiWQmti0lKlLQlLlKi0msQi7m7AAnmQAAnlC7m7QC0mrFLlLQFKlKGti1QG6i8HlAAQHlAAG8C8QGsC1FKFKQFKFLC1GrQC7G7ABHlQgBHmi7G7Qi1GslKFKQlKFLmsC0Qm8C8nlAAQnlAAm6i8g");
	this.shape_384.setTransform(330.05,434.25);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("rgba(255,255,255,0.098)").s().p("EgOeAiTQmsi0lKlKQlKlKi0msQi7m6AAnlQAAnkC7m6QC0msFKlKQFKlKGsi0QG6i7HkAAQHlAAG6C7QGsC0FKFKQFKFKC0GsQC7G6AAHkQAAHli7G6Qi1GslJFKQlKFKmsC0Qm6C7nlAAQnkAAm6i7g");
	this.shape_385.setTransform(330.025,434.125);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("rgba(255,255,255,0.098)").s().p("EgOdAiQQmri0lJlJQlKlKi0mrQi7m6AAnkQAAnkC7m5QC0mrFKlJQFJlKGri0QG6i7HjAAQHlAAG5C7QGrC0FKFKQFJFJC0GrQC7G5AAHkQAAHki7G6Qi0GrlJFKQlKFJmrC0Qm5C7nlAAQnjAAm6i7g");
	this.shape_386.setTransform(330.025,434);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("rgba(255,255,255,0.098)").s().p("EgOcAiNQmri0lJlIQlIlKi1mqQi6m5AAnkQAAnjC6m5QC1mqFIlKQFJlIGri0QG5i7HjAAQHjAAG6C7QGqC0FJFIQFJFKC0GqQC7G5AAHjQAAHki7G5Qi1GqlIFKQlJFImqC0Qm6C7njAAQnjAAm5i7g");
	this.shape_387.setTransform(330.05,433.85);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("rgba(255,255,255,0.098)").s().p("EgObAiKQmpi0lJlIQlJlJizmpQi7m5AAnjQAAniC7m5QCzmqFJlIQFJlJGpizQG5i7HiAAQHjAAG5C7QGpCzFJFJQFJFICzGqQC7G5AAHiQAAHji7G5Qi0GplIFJQlJFImpC0Qm5C7njAAQniAAm5i7g");
	this.shape_388.setTransform(330.025,433.725);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("rgba(255,255,255,0.098)").s().p("EgOZAiHQmpizlJlIQlIlIizmqQi7m4AAniQAAniC7m3QCzmqFIlIQFJlIGpizQG4i7HhAAQHjAAG3C7QGqCzFIFIQFIFICzGqQC7G3AAHiQAAHii7G4QizGqlIFIQlIFImqCzQm3C7njAAQnhAAm4i7g");
	this.shape_389.setTransform(330.025,433.575);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("rgba(255,255,255,0.098)").s().p("EgOYAiEQmpizlHlHQlIlIizmpQi6m3AAniQAAnhC6m3QCzmpFIlHQFHlIGpizQG3i6HhAAQHiAAG3C6QGpCzFIFIQFHFHCzGpQC6G3AAHhQAAHii6G3QizGplHFIQlIFHmpCzQm3C6niAAQnhAAm3i6g");
	this.shape_390.setTransform(330.025,433.425);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("rgba(255,255,255,0.098)").s().p("EgOXAiCQmoizlHlIQlIlHiymoQi6m3AAnhQAAngC6m3QCymoFIlHQFHlHGoizQG3i6HgAAQHhAAG3C6QGoCzFHFHQFIFHCzGoQC5G3AAHgQAAHhi5G3Qi0GolHFHQlHFImoCzQm3C5nhAAQngAAm3i5g");
	this.shape_391.setTransform(330.025,433.275);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("rgba(255,255,255,0.098)").s().p("EgOWAh/QmnizlHlHQlHlHizmoQi5m2AAngQAAnfC5m3QCzmnFHlHQFHlHGniyQG3i6HfAAQHhAAG2C6QGnCyFHFHQFHFHCzGnQC5G3AAHfQAAHgi5G2Qi0GolGFHQlHFHmnCzQm2C5nhAAQnfAAm3i5g");
	this.shape_392.setTransform(330.025,433.15);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("rgba(255,255,255,0.098)").s().p("EgOUAh8QmniylHlHQlGlHizmmQi5m2AAngQAAnfC5m1QCzmnFGlHQFHlGGnizQG1i5HfAAQHgAAG1C5QGnCzFHFGQFGFHCzGnQC5G1AAHfQAAHgi5G2QizGmlGFHQlHFHmnCyQm1C5ngAAQnfAAm1i5g");
	this.shape_393.setTransform(330.025,433);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("rgba(255,255,255,0.098)").s().p("EgOTAh5QmnizlFlGQlGlGizmmQi5m1AAnfQAAneC5m1QCzmnFGlGQFFlGGniyQG1i5HeAAQHfAAG1C5QGnCyFGFGQFFFGCzGnQC5G1AAHeQAAHfi5G1QizGmlFFGQlGFGmnCzQm1C5nfAAQneAAm1i5g");
	this.shape_394.setTransform(330.025,432.875);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("rgba(255,255,255,0.098)").s().p("EgOSAh1QmmiylFlFQlGlGiymlQi5m0AAnfQAAndC5m1QCymmFGlGQFFlFGmiyQG0i4HeAAQHfAAG0C4QGmCyFFFFQFGFGCyGmQC5G1AAHdQAAHfi5G0QizGllFFGQlFFFmmCyQm0C5nfAAQneAAm0i5g");
	this.shape_395.setTransform(330.025,432.75);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("rgba(255,255,255,0.098)").s().p("EgORAhzQmliylFlFQlFlFiymlQi4m0AAneQAAndC4m0QCymlFFlFQFFlFGliyQG0i4HdgBQHeABG0C4QGlCyFFFFQFFFFCyGlQC4G0AAHdQAAHei4G0QiyGllFFFQlFFFmlCyQm0C5negBQndABm0i5g");
	this.shape_396.setTransform(330.025,432.6);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("rgba(255,255,255,0.098)").s().p("EgOQAhwQmkixlFlFQlElFiymkQi4m0AAndQAAncC4m0QCymkFElFQFFlFGkixQG0i4HcAAQHdAAGzC4QGlCxFFFFQFEFFCyGkQC4G0AAHcQAAHdi4G0QiyGklEFFQlFFFmlCxQmzC4ndAAQncAAm0i4g");
	this.shape_397.setTransform(330.025,432.45);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("rgba(255,255,255,0.098)").s().p("EgOOAhtQmkixlFlEQlElFixmkQi4myAAndQAAncC4myQCxmkFElEQFFlEGkiyQGzi4HbAAQHdAAGyC4QGlCyFDFEQFFFECxGkQC4GyAAHcQAAHdi4GyQiyGklEFFQlDFEmlCxQmyC4ndAAQnbAAmzi4g");
	this.shape_398.setTransform(330,432.3);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("rgba(255,255,255,0.098)").s().p("EgONAhqQmkixlDlEQlElEixmjQi4myAAncQAAnbC4myQCxmkFElDQFDlEGkixQGyi4HbAAQHcAAGyC4QGjCxFEFEQFEFDCxGkQC4GyAAHbQAAHci4GyQiyGjlDFEQlEFEmjCxQmyC4ncAAQnbAAmyi4g");
	this.shape_399.setTransform(330.025,432.175);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("rgba(255,255,255,0.098)").s().p("EgOMAhnQmjixlDlDQlDlDixmjQi4myAAnbQAAnaC4myQCxmjFDlDQFDlDGjixQGyi4HaAAQHbAAGyC4QGjCxFDFDQFDFDCxGjQC4GyAAHaQAAHbi4GyQixGjlDFDQlDFDmjCxQmyC4nbAAQnaAAmyi4g");
	this.shape_400.setTransform(330.025,432.025);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("rgba(255,255,255,0.098)").s().p("EgOLAhkQmiixlDlCQlDlDiwmjQi4mxAAnaQAAnZC4mxQCwmjFDlDQFDlCGiixQGyi4HZAAQHbAAGxC4QGiCxFDFCQFDFDCxGjQC2GxAAHZQAAHai2GxQixGjlDFDQlDFCmiCxQmxC3nbAAQnZAAmyi3g");
	this.shape_401.setTransform(330,431.9);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("rgba(255,255,255,0.098)").s().p("EgOJAhhQmiiwlDlCQlClDiwmiQi3mwAAnaQAAnZC3mwQCwmiFClCQFDlDGiixQGwi2HZgBQHaABGwC2QGiCxFCFDQFDFCCwGiQC3GwAAHZQAAHai3GwQixGilCFDQlCFCmiCwQmwC4nagBQnZABmwi4g");
	this.shape_402.setTransform(330.025,431.75);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("rgba(255,255,255,0.098)").s().p("EgOIAheQmhivlClCQlClDiwmhQi3mvAAnaQAAnZC3mvQCwmhFClCQFClCGhixQGwi2HYAAQHZAAGwC2QGhCxFDFCQFCFCCvGhQC3GvAAHZQAAHai3GvQiwGhlBFDQlDFCmhCvQmwC3nZAAQnYAAmwi3g");
	this.shape_403.setTransform(330,431.6);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("rgba(255,255,255,0.098)").s().p("EgOHAhbQmhiwlBlBQlClCiwmgQi2mvAAnZQAAnYC2mvQCwmhFClBQFBlCGhivQGwi3HXAAQHZAAGvC3QGgCvFCFCQFCFBCwGhQC2GvAAHYQAAHZi2GvQixGglBFCQlCFBmgCwQmvC3nZAAQnXAAmwi3g");
	this.shape_404.setTransform(330,431.475);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("rgba(255,255,255,0.098)").s().p("EgOGAhZQmgiwlBlBQlBlBiwmgQi2mvAAnYQAAnXC2mvQCwmgFBlBQFBlBGgivQGvi3HXAAQHYAAGvC3QGgCvFBFBQFBFBCvGgQC3GvAAHXQAAHYi3GvQiwGglAFBQlBFBmgCwQmvC2nYAAQnXAAmvi2g");
	this.shape_405.setTransform(330.025,431.325);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("rgba(255,255,255,0.098)").s().p("EgOFAhWQmfiwlBlAQlAlCiwmeQi1muAAnYQAAnXC1muQCwmfFAlAQFBlBGfivQGvi3HWAAQHXAAGuC3QGgCvFAFBQFBFACvGfQC3GugBHXQABHYi3GuQivGelBFCQlAFAmgCwQmuC1nXABQnWgBmvi1g");
	this.shape_406.setTransform(330,431.2);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("rgba(255,255,255,0.098)").s().p("EgODAhTQmfivlAlBQlBlAivmfQi1mtgBnXQABnWC1mtQCvmfFBlAQFAlBGfivQGti1HWAAQHXAAGtC1QGfCvFBFBQFAFACvGfQC1GtAAHWQAAHXi1GtQiwGfk/FAQlBFBmfCvQmtC1nXABQnWgBmti1g");
	this.shape_407.setTransform(330,431.05);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("rgba(255,255,255,0.098)").s().p("EgOCAhQQmeivlAlAQlAlAivmeQi1mtAAnWQAAnVC1mtQCvmeFAlAQFAlAGeivQGti1HVAAQHWAAGtC1QGeCvFAFAQFAFACvGeQC1GtAAHVQAAHWi1GtQiwGek/FAQlAFAmeCvQmtC1nWAAQnVAAmti1g");
	this.shape_408.setTransform(330.025,430.925);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("rgba(255,255,255,0.098)").s().p("EgOBAhNQmdivlAk/Qk/lAivmdQi1mtAAnVQAAnUC1msQCvmeE/lAQFAk/GdiuQGti2HUAAQHVAAGtC2QGdCuFAE/QE/FACvGeQC1GsAAHUQAAHVi1GtQiwGdk+FAQlAE/mdCvQmtC1nVAAQnUAAmti1g");
	this.shape_409.setTransform(330,430.75);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("rgba(255,255,255,0.098)").s().p("EgN/AhKQmdivlAk+Qk+k/ivmdQi1msAAnVQAAnUC1mrQCvmeE+k+QFAk/GdivQGri1HUAAQHVAAGsC1QGcCvE/E/QE/E+CvGeQC1GrAAHUQAAHVi1GsQivGdk/E/Qk/E+mcCvQmsC1nVAAQnUAAmri1g");
	this.shape_410.setTransform(330,430.625);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("rgba(255,255,255,0.098)").s().p("EgN+AhHQmdiuk+k/Qk/k+iumdQi0mrAAnUQAAnTC0mrQCumdE/k+QE+k/GdiuQGri1HTAAQHUAAGrC1QGdCuE/E/QE9E+CvGdQC0GrABHTQgBHUi0GrQivGdk9E+Qk/E/mdCuQmrC1nUAAQnTAAmri1g");
	this.shape_411.setTransform(330,430.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_274,p:{scaleX:1,scaleY:1,x:330,y:430.35}}]}).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_304}]},1).to({state:[{t:this.shape_305}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_308}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_311}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_313}]},1).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_316}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_274,p:{scaleX:1.097,scaleY:1.097,x:330.0999,y:440.1481}}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_355}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_358}]},1).to({state:[{t:this.shape_359}]},1).to({state:[{t:this.shape_360}]},1).to({state:[{t:this.shape_361}]},1).to({state:[{t:this.shape_362}]},1).to({state:[{t:this.shape_363}]},1).to({state:[{t:this.shape_364}]},1).to({state:[{t:this.shape_365}]},1).to({state:[{t:this.shape_366}]},1).to({state:[{t:this.shape_367}]},1).to({state:[{t:this.shape_368}]},1).to({state:[{t:this.shape_369}]},1).to({state:[{t:this.shape_370}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_372}]},1).to({state:[{t:this.shape_373}]},1).to({state:[{t:this.shape_374}]},1).to({state:[{t:this.shape_375}]},1).to({state:[{t:this.shape_376}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_378}]},1).to({state:[{t:this.shape_379}]},1).to({state:[{t:this.shape_380}]},1).to({state:[{t:this.shape_381}]},1).to({state:[{t:this.shape_382}]},1).to({state:[{t:this.shape_383}]},1).to({state:[{t:this.shape_384}]},1).to({state:[{t:this.shape_385}]},1).to({state:[{t:this.shape_386}]},1).to({state:[{t:this.shape_387}]},1).to({state:[{t:this.shape_388}]},1).to({state:[{t:this.shape_389}]},1).to({state:[{t:this.shape_390}]},1).to({state:[{t:this.shape_391}]},1).to({state:[{t:this.shape_392}]},1).to({state:[{t:this.shape_393}]},1).to({state:[{t:this.shape_394}]},1).to({state:[{t:this.shape_395}]},1).to({state:[{t:this.shape_396}]},1).to({state:[{t:this.shape_397}]},1).to({state:[{t:this.shape_398}]},1).to({state:[{t:this.shape_399}]},1).to({state:[{t:this.shape_400}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_402}]},1).to({state:[{t:this.shape_403}]},1).to({state:[{t:this.shape_404}]},1).to({state:[{t:this.shape_405}]},1).to({state:[{t:this.shape_406}]},1).to({state:[{t:this.shape_407}]},1).to({state:[{t:this.shape_408}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_410}]},1).to({state:[{t:this.shape_411}]},1).to({state:[{t:this.shape_274,p:{scaleX:1,scaleY:1,x:330,y:430.35}}]},1).wait(1));

	// Layer_5
	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("rgba(255,255,255,0.039)").s().p("EgUEAvhQpQj7nJnJQnInJj7pPQkDpmAAqfQAAqeEDpmQD7pQHInIQHJnJJQj6QJlkEKfAAQKfAAJlEEQJRD6HIHJQHJHID7JQQEDJmAAKeQAAKfkDJmQj7JPnJHJQnIHJpRD7QplEDqfAAQqfAAplkDg");
	this.shape_412.setTransform(330.025,330);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("rgba(255,255,255,0.039)").s().p("EgUGAvlQpQj7nKnJQnJnKj7pRQkEpmAAqgQAAqfEEpnQD7pQHJnKQHKnJJQj7QJmkEKgAAQKgAAJmEEQJRD7HKHJQHJHKD7JQQEEJnAAKfQAAKgkEJmQj7JRnJHKQnKHJpRD7QpmEDqgAAQqgAApmkDg");
	this.shape_413.setTransform(330.025,330);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("rgba(255,255,255,0.039)").s().p("EgUHAvpQpSj7nKnKQnLnKj6pSQkEpngBqhQABqhEEpmQD6pSHLnKQHKnKJSj7QJmkEKhgBQKhABJnEEQJSD7HKHKQHKHKD7JSQEEJmAAKhQAAKhkEJnQj7JSnKHKQnKHKpSD7QpnEFqhAAQqhAApmkFg");
	this.shape_414.setTransform(330.05,330);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("rgba(255,255,255,0.039)").s().p("EgUJAvtQpTj7nLnKQnKnLj8pTQkEpoAAqiQAAqhEEpoQD8pTHKnKQHLnKJTj8QJnkFKiAAQKiAAJoEFQJTD8HKHKQHLHKD8JTQEEJoAAKhQAAKikEJoQj8JTnLHLQnKHKpTD7QpoEFqiAAQqiAApnkFg");
	this.shape_415.setTransform(330.025,330);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("rgba(255,255,255,0.039)").s().p("EgULAvyQpTj9nMnKQnLnMj8pTQkFpoAAqkQAAqiEFpoQD8pUHLnMQHMnLJTj8QJpkFKiAAQKjAAJpEFQJTD8HLHLQHMHMD8JUQEFJoAAKiQAAKkkFJoQj8JTnMHMQnLHKpTD9QppEEqjABQqigBppkEg");
	this.shape_416.setTransform(330.025,330);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("rgba(255,255,255,0.039)").s().p("EgUNAv2QpUj9nMnLQnMnMj9pUQkFpqAAqkQAAqjEFpqQD9pTHMnNQHMnLJUj9QJqkFKjAAQKkAAJpEFQJVD9HMHLQHMHND8JTQEGJqgBKjQABKkkGJqQj8JUnMHMQnMHLpVD9QppEFqkAAQqjAApqkFg");
	this.shape_417.setTransform(330.05,330);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("rgba(255,255,255,0.039)").s().p("EgUOAv6QpVj8nOnNQnMnNj9pVQkFpqAAqlQAAqkEFprQD9pVHMnMQHOnMJVj9QJqkGKkAAQKkAAJrEGQJVD9HNHMQHMHMD9JVQEGJrAAKkQAAKlkGJqQj9JVnMHNQnNHNpVD8QprEGqkAAQqkAApqkGg");
	this.shape_418.setTransform(330.05,330);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("rgba(255,255,255,0.039)").s().p("EgUQAv+QpWj8nOnOQnNnNj9pWQkGprAAqmQAAqlEGprQD9pWHNnOQHOnMJWj+QJrkFKlAAQKmAAJrEFQJWD+HNHMQHOHOD9JWQEGJrAAKlQAAKmkGJrQj9JWnOHNQnNHOpWD8QprEHqmgBQqlABprkHg");
	this.shape_419.setTransform(330.025,330);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("rgba(255,255,255,0.039)").s().p("EgUSAwDQpXj9nOnOQnNnPj+pWQkGpsAAqnQAAqmEGpsQD+pXHNnOQHOnOJXj8QJskHKmAAQKnAAJsEHQJXD8HOHOQHOHOD9JXQEGJsAAKmQAAKnkGJsQj9JWnOHPQnOHOpXD9QpsEGqnAAQqmAApskGg");
	this.shape_420.setTransform(330.025,330);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("rgba(255,255,255,0.039)").s().p("EgUUAwHQpYj+nPnOQnOnPj9pXQkHptAAqoQAAqnEHptQD9pXHOnPQHPnOJYj+QJskHKoAAQKnAAJtEHQJZD+HNHOQHQHPD9JXQEHJtAAKnQAAKokHJtQj9JXnQHPQnNHOpZD+QptEHqnAAQqoAApskHg");
	this.shape_421.setTransform(330.05,330.025);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("rgba(255,255,255,0.039)").s().p("EgUWAwMQpYj/nPnPQnQnPj+pYQkGpuAAqpQAAqoEGpuQD+pYHQnPQHPnPJYj+QJtkHKpgBQKoABJuEHQJZD+HPHPQHQHPD9JYQEIJuAAKoQAAKpkIJuQj9JYnQHPQnPHPpZD/QpuEGqoAAQqpAAptkGg");
	this.shape_422.setTransform(330.05,330);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("rgba(255,255,255,0.039)").s().p("EgUXAwPQpaj+nQnQQnPnPj/paQkHpuAAqqQAAqpEHpvQD/pYHPnQQHQnQJaj/QJukHKpAAQKqAAJuEHQJaD/HQHQQHQHQD+JYQEHJvAAKpQAAKqkHJuQj+JanQHPQnQHQpaD+QpuEIqqAAQqpAApukIg");
	this.shape_423.setTransform(330.025,330);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("rgba(255,255,255,0.039)").s().p("EgUZAwUQpbj/nQnQQnQnRj/paQkIpvAAqrQAAqqEIpvQD/paHQnQQHQnRJbj+QJvkJKqAAQKqAAJwEJQJbD+HPHRQHRHQD/JaQEIJvAAKqQAAKrkIJvQj/JanRHRQnPHQpbD/QpwEIqqgBQqqABpvkIg");
	this.shape_424.setTransform(330.05,330);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("rgba(255,255,255,0.039)").s().p("EgUcAwYQpaj/nRnRQnSnRj+pbQkJpwAAqsQAAqrEJpwQD+pbHSnRQHRnRJaj/QJxkIKrAAQKrAAJwEIQJcD/HRHRQHRHREAJbQEHJwAAKrQAAKskHJwQkAJbnRHRQnRHRpcD/QpwEIqrAAQqrAApxkIg");
	this.shape_425.setTransform(330.05,330.025);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("rgba(255,255,255,0.039)").s().p("EgUdAwdQpckAnSnRQnRnTkApbQkIpxAAqtQAAqsEIpwQEApdHRnRQHSnSJcj/QJxkJKsAAQKsAAJxEJQJcD/HSHSQHSHRD/JdQEJJwAAKsQAAKtkJJxQj/JbnSHTQnSHRpcEAQpxEIqsAAQqsAApxkIg");
	this.shape_426.setTransform(330.05,330);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("rgba(255,255,255,0.039)").s().p("EgUfAwgQpcj/nTnSQnSnTkApcQkJpyAAquQAAqsEJpzQEApcHSnTQHTnRJckBQJykIKtAAQKtAAJyEIQJeEBHRHRQHTHTEAJcQEJJzAAKsQAAKukJJyQkAJcnTHTQnRHSpeD/QpyEKqtAAQqtAApykKg");
	this.shape_427.setTransform(330.05,330);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("rgba(255,255,255,0.039)").s().p("EgUgAwlQpekAnTnTQnTnTkApeQkKpyABqvQgBquEKpzQEApdHTnTQHTnTJekAQJykJKuAAQKvAAJyEJQJeEAHTHTQHTHTEAJdQEJJzABKuQgBKvkJJyQkAJenTHTQnTHTpeEAQpyEJqvAAQquAApykJg");
	this.shape_428.setTransform(330.05,330.025);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("rgba(255,255,255,0.039)").s().p("EgUiAwpQpekAnVnUQnTnUkApeQkKpzAAqwQAAqvEKpzQEApeHTnUQHVnUJekAQJzkKKvAAQKwAAJzEKQJeEAHUHUQHUHUEBJeQEJJzAAKvQAAKwkJJzQkBJenUHUQnUHUpeEAQpzEKqwAAQqvAApzkKg");
	this.shape_429.setTransform(330.05,330.025);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("rgba(255,255,255,0.039)").s().p("EgUkAwuQpfkCnVnTQnUnVkBpfQkJp1AAqwQAAqvEJp1QEBpfHUnVQHVnTJfkBQJ0kKKwgBQKwABJ0EKQJgEBHVHTQHUHVEAJfQELJ1AAKvQAAKwkLJ1QkAJfnUHVQnVHTpgECQp0EJqwAAQqwAAp0kJg");
	this.shape_430.setTransform(330.05,330);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("rgba(255,255,255,0.039)").s().p("EgUmAwyQpgkCnVnUQnVnVkBpgQkKp2gBqxQABqxEKp1QEBpgHVnVQHVnVJgkBQJ1kKKxAAQKxAAJ1EKQJhEBHVHVQHVHVEBJgQELJ1gBKxQABKxkLJ2QkBJgnVHVQnVHUphECQp1EKqxAAQqxAAp1kKg");
	this.shape_431.setTransform(330.05,330.025);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("rgba(255,255,255,0.039)").s().p("EgUoAw2QphkCnWnVQnVnWkBphQkLp2AAqyQAAqxELp3QEBpgHVnWQHWnWJhkBQJ2kLKyAAQKyAAJ2ELQJiEBHVHWQHWHWEBJgQELJ3AAKxQAAKykLJ2QkBJhnWHWQnVHVpiECQp2ELqyAAQqyAAp2kLg");
	this.shape_432.setTransform(330.05,330.025);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("rgba(255,255,255,0.039)").s().p("EgUpAw6QpikCnWnWQnXnWkBpiQkMp3AAqzQAAqyEMp3QEBpiHXnWQHWnWJikCQJ3kLKyAAQKzAAJ3ELQJiECHWHWQHWHWEDJiQEKJ3AAKyQAAKzkKJ3QkDJinWHWQnWHWpiECQp3ELqzAAQqyAAp3kLg");
	this.shape_433.setTransform(330.05,330.025);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("rgba(255,255,255,0.039)").s().p("EgUsAw+QpikCnXnWQnXnXkCpjQkLp3AAq1QAAqzELp4QECpjHXnWQHXnXJikCQJ4kMK0AAQK0AAJ4EMQJjECHWHXQHXHWEDJjQELJ4AAKzQAAK1kLJ3QkDJjnXHXQnWHWpjECQp4EMq0AAQq0AAp4kMg");
	this.shape_434.setTransform(330.075,330);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("rgba(255,255,255,0.039)").s().p("EgUtAxDQpkkDnXnXQnXnYkDpjQkMp5AAq1QAAq0EMp5QEDpjHXnYQHXnXJkkDQJ5kMK0AAQK1AAJ5EMQJjEDHYHXQHYHYECJjQEMJ5AAK0QAAK1kMJ5QkCJjnYHYQnYHXpjEDQp5EMq1AAQq0AAp5kMg");
	this.shape_435.setTransform(330.05,330.025);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("rgba(255,255,255,0.039)").s().p("EgUvAxHQpkkDnYnYQnYnYkEpkQkLp6AAq2QAAq1ELp6QEEpkHYnYQHYnYJkkDQJ6kMK1AAQK2AAJ5EMQJlEDHYHYQHZHYECJkQENJ6AAK1QAAK2kNJ6QkCJknZHYQnYHYplEDQp5EMq2AAQq1AAp6kMg");
	this.shape_436.setTransform(330.05,330.025);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("rgba(255,255,255,0.039)").s().p("EgUxAxMQplkEnZnYQnYnakEpkQkMp7AAq3QAAq2EMp7QEEplHYnYQHZnZJlkDQJ7kNK2AAQK3AAJ6ENQJmEDHYHZQHZHYEDJlQENJ7AAK2QAAK3kNJ7QkDJknZHaQnYHYpmEEQp6EMq3AAQq2AAp7kMg");
	this.shape_437.setTransform(330.075,330);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("rgba(255,255,255,0.039)").s().p("EgUzAxQQplkEnanZQnZnakEpmQkNp7AAq4QAAq3ENp7QEEpmHZnaQHanZJlkEQJ8kNK3AAQK4AAJ7ENQJmEEHZHZQHaHaEEJmQENJ7AAK3QAAK4kNJ7QkEJmnaHaQnZHZpmEEQp7ENq4AAQq3AAp8kNg");
	this.shape_438.setTransform(330.075,330.025);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("rgba(255,255,255,0.039)").s().p("EgU0AxUQpnkEnanaQnanakEpnQkNp8gBq5QABq4ENp8QEEpnHanaQHanaJnkEQJ8kNK4AAQK5AAJ8ENQJnEEHaHaQHaHaEEJnQENJ8AAK4QAAK5kNJ8QkEJnnaHaQnaHapnEEQp8ENq5AAQq4AAp8kNg");
	this.shape_439.setTransform(330.05,330.025);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("rgba(255,255,255,0.039)").s().p("EgU2AxYQpokEnbnbQnanbkFpnQkNp9AAq6QAAq5ENp9QEFpnHanbQHbnbJokEQJ9kOK5AAQK6AAJ9EOQJoEEHaHbQHbHbEEJnQEOJ9AAK5QAAK6kOJ9QkEJnnbHbQnaHbpoEEQp9EOq6AAQq5AAp9kOg");
	this.shape_440.setTransform(330.075,330.025);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("rgba(255,255,255,0.039)").s().p("EgU4AxdQpokFncnbQnbnckFpoQkOp+AAq7QAAq6EOp9QEFppHbncQHcnbJokEQJ+kOK6AAQK6AAJ+EOQJpEEHbHbQHcHcEFJpQEOJ9AAK6QAAK7kOJ+QkFJoncHcQnbHbppEFQp+EOq6AAQq6AAp+kOg");
	this.shape_441.setTransform(330.075,330);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("rgba(255,255,255,0.039)").s().p("EgU6AxhQppkFncncQncnckFppQkOp/AAq8QAAq7EOp/QEFppHcncQHcncJpkFQJ/kOK7AAQK7AAJ/EOQJqEFHcHcQHcHcEFJpQEOJ/AAK7QAAK8kOJ/QkFJpncHcQncHcpqEFQp/EOq7AAQq7AAp/kOg");
	this.shape_442.setTransform(330.075,330.025);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("rgba(255,255,255,0.039)").s().p("EgU7AxlQprkFndndQnbndkGpqQkPp/AAq9QAAq8EPp/QEGpqHbndQHdndJrkFQJ/kPK8AAQK8AAKBEPQJpEFHdHdQHdHdEFJqQEPJ/AAK8QAAK9kPJ/QkFJqndHdQndHdppEFQqBEPq8AAQq8AAp/kPg");
	this.shape_443.setTransform(330.05,330.025);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("rgba(255,255,255,0.039)").s().p("EgU+AxpQpqkGnencQndnekGprQkPqAAAq+QAAq9EPqAQEGprHdndQHendJqkGQKBkPK9AAQK9AAKBEPQJrEGHdHdQHeHdEGJrQEPKAAAK9QAAK+kPKAQkGJrneHeQndHcprEGQqBEPq9AAQq9AAqBkPg");
	this.shape_444.setTransform(330.075,330.025);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("rgba(255,255,255,0.039)").s().p("EgU/AxuQpskHnendQnenekGpsQkPqBAAq/QAAq+EPqBQEGpsHeneQHendJskGQKBkQK+AAQK+AAKCEQQJsEGHeHdQHeHeEGJsQEPKBAAK+QAAK/kPKBQkGJsneHeQneHdpsEHQqCEPq+AAQq+AAqBkPg");
	this.shape_445.setTransform(330.075,330.025);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("rgba(255,255,255,0.039)").s().p("EgVBAxyQpskHnfneQnfnfkGpsQkQqCAArAQAAq/EQqCQEGpsHfnfQHfneJskHQKCkQK/AAQK/AAKDEQQJsEHHfHeQHfHfEGJsQEQKCAAK/QAALAkQKCQkGJsnfHfQnfHepsEHQqDEQq/AAQq/AAqCkQg");
	this.shape_446.setTransform(330.075,330.025);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("rgba(255,255,255,0.039)").s().p("EgVDAx2QptkHngnfQnenfkHptQkRqDAArBQAAq/ERqEQEHptHenfQHgnfJtkHQKDkQLAAAQLAAAKDEQQJuEHHfHfQHfHfEHJtQERKEAAK/QAALBkRKDQkHJtnfHfQnfHfpuEHQqDEQrAAAQrAAAqDkQg");
	this.shape_447.setTransform(330.075,330.025);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("rgba(255,255,255,0.039)").s().p("EgVFAx6QpukHngnfQnfnhkIpuQkQqDAArCQAArAEQqEQEIpuHfngQHgngJukHQKEkRLBAAQLBAAKEERQJvEHHfHgQHgHgEIJuQEQKEAALAQAALCkQKDQkIJungHhQnfHfpvEHQqEERrBAAQrBAAqEkRg");
	this.shape_448.setTransform(330.075,330.025);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("rgba(255,255,255,0.039)").s().p("EgVGAx/QpvkInhngQngnhkIpvQkRqEAArDQAArBERqFQEIpvHgnhQHhngJvkHQKEkSLCAAQLCAAKFESQJvEHHhHgQHgHhEIJvQERKFAALBQAALDkRKEQkIJvngHhQnhHgpvEIQqFERrCAAQrCAAqEkRg");
	this.shape_449.setTransform(330.075,330.025);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("rgba(255,255,255,0.039)").s().p("EgVIAyDQpwkIninhQnhnhkIpwQkRqFAArEQAArCERqGQEIpwHhnhQHinhJwkIQKGkRLCAAQLDAAKGERQJwEIHhHhQHhHhEIJwQESKGAALCQAALEkSKFQkIJwnhHhQnhHhpwEIQqGERrDAAQrCAAqGkRg");
	this.shape_450.setTransform(330.1,330.025);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("rgba(255,255,255,0.039)").s().p("EgVKAyHQpxkIninhQnhnjkIpwQkSqGAArFQAArDESqHQEIpwHhniQHiniJxkIQKHkSLDAAQLEAAKHESQJxEIHhHiQHiHiEJJwQERKHAALDQAALFkRKGQkJJwniHjQnhHhpxEIQqHESrEAAQrDAAqHkSg");
	this.shape_451.setTransform(330.075,330.025);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("rgba(255,255,255,0.039)").s().p("EgVMAyMQpxkKnjnhQninjkJpyQkSqGAArGQAArEESqIQEJpxHiniQHjnjJxkIQKIkSLEgBQLFABKIESQJxEIHjHjQHiHiEJJxQESKIAALEQAALGkSKGQkJJyniHjQnjHhpxEKQqIERrFAAQrEAAqIkRg");
	this.shape_452.setTransform(330.075,330.05);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("rgba(255,255,255,0.039)").s().p("EgVOAyQQpykJnjnjQnjnjkJpyQkSqJAArGQAArFESqIQEJpzHjnjQHjnjJykIQKJkTLFAAQLGAAKIETQJzEIHjHjQHjHjEJJzQESKIAALFQAALGkSKJQkJJynjHjQnjHjpzEJQqIESrGAAQrFAAqJkSg");
	this.shape_453.setTransform(330.075,330.025);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("rgba(255,255,255,0.039)").s().p("EgVQAyUQpykJnlnkQnjnkkKpzQkSqJAArHQAArGESqJQEKpzHjnkQHlnkJykJQKKkTLGAAQLHAAKJETQJ0EJHjHkQHkHkEJJzQETKJAALGQAALHkTKJQkJJznkHkQnjHkp0EJQqJETrHAAQrGAAqKkTg");
	this.shape_454.setTransform(330.1,330.025);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("rgba(255,255,255,0.039)").s().p("EgVRAyYQp0kJnlnkQnknlkJp0QkUqKAArIQAArHEUqKQEJp0HknkQHlnlJ0kJQKKkTLHAAQLIAAKKETQJ0EJHlHlQHkHkEKJ0QETKKAALHQAALIkTKKQkKJ0nkHlQnlHkp0EJQqKETrIAAQrHAAqKkTg");
	this.shape_455.setTransform(330.075,330.025);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("rgba(255,255,255,0.039)").s().p("EgVTAycQp1kKnlnkQnlnlkKp2QkTqKAArJQAArIETqLQEKp1HlnlQHlnkJ1kLQKLkTLIAAQLJAAKLETQJ1ELHlHkQHlHlEKJ1QETKLAALIQAALJkTKKQkKJ2nlHlQnlHkp1EKQqLEUrJAAQrIAAqLkUg");
	this.shape_456.setTransform(330.075,330.05);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("rgba(255,255,255,0.039)").s().p("EgVVAyhQp2kLnlnlQnmnmkKp1QkUqMAArKQAArJEUqMQEKp1HmnmQHlnlJ2kKQKMkVLJAAQLKAAKLEVQJ2EKHmHlQHlHmELJ1QEUKMAALJQAALKkUKMQkLJ1nlHmQnmHlp2ELQqLEUrKAAQrJAAqMkUg");
	this.shape_457.setTransform(330.1,330.025);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("rgba(255,255,255,0.039)").s().p("EgVXAylQp2kLnnnlQnmnnkKp2QkVqNABrLQgBrKEVqMQEKp3HmnmQHnnmJ2kLQKNkULKAAQLKAAKNEUQJ3ELHmHmQHmHmELJ3QEUKMABLKQgBLLkUKNQkLJ2nmHnQnmHlp3ELQqNEUrKAAQrKAAqNkUg");
	this.shape_458.setTransform(330.1,330.025);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("rgba(255,255,255,0.039)").s().p("EgVYAyqQp4kMnnnnQnmnmkMp4QkUqNAArMQAArLEUqNQEMp4HmnnQHnnnJ4kKQKNkVLLAAQLMAAKNEVQJ4EKHnHnQHnHnELJ4QEUKNAALLQAALMkUKNQkLJ4nnHmQnnHnp4EMQqNEUrMAAQrLAAqNkUg");
	this.shape_459.setTransform(330.075,330.05);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("rgba(255,255,255,0.039)").s().p("EgVaAyuQp4kMnpnnQnnnokLp4QkVqOAArNQAArMEVqOQELp4HnnoQHpnnJ4kLQKOkWLMAAQLNAAKOEWQJ4ELHoHnQHoHoELJ4QEVKOAALMQAALNkVKOQkLJ4noHoQnoHnp4EMQqOEVrNAAQrMAAqOkVg");
	this.shape_460.setTransform(330.1,330.025);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("rgba(255,255,255,0.039)").s().p("EgVcAyyQp5kMnpnoQnnnokNp5QkUqPgBrOQABrNEUqPQENp5HnnoQHpnoJ5kMQKPkVLNAAQLNAAKQEVQJ5EMHoHoQHoHoEMJ5QEVKPAALNQAALOkVKPQkMJ5noHoQnoHop5EMQqQEVrNAAQrNAAqPkVg");
	this.shape_461.setTransform(330.1,330.025);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("rgba(255,255,255,0.039)").s().p("EgVeAy2Qp6kMnpnoQnonqkMp5QkWqQAArPQAArNEWqRQEMp5HonpQHpnpJ6kMQKQkWLOAAQLOAAKQEWQJ7EMHpHpQHoHpENJ5QEVKRAALNQAALPkVKQQkNJ5noHqQnpHop7EMQqQEWrOAAQrOAAqQkWg");
	this.shape_462.setTransform(330.1,330.025);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("rgba(255,255,255,0.039)").s().p("EgVgAy7Qp7kNnpnpQnpnqkNp6QkWqRAArQQAArPEWqQQENp7HpnpQHpnqJ7kMQKRkXLPABQLQgBKQEXQJ7EMHpHqQHqHpENJ7QEWKQAALPQAALQkWKRQkNJ6nqHqQnpHpp7ENQqQEVrQABQrPgBqRkVg");
	this.shape_463.setTransform(330.1,330.05);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("rgba(255,255,255,0.039)").s().p("EgViAy/Qp7kNnqnqQnqnqkNp8QkWqRAArRQAArPEWqSQENp8HqnqQHqnqJ7kMQKSkXLQAAQLQAAKSEXQJ8EMHqHqQHqHqENJ8QEXKSAALPQAALRkXKRQkNJ8nqHqQnqHqp8ENQqSEWrQAAQrQAAqSkWg");
	this.shape_464.setTransform(330.1,330.025);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("rgba(255,255,255,0.039)").s().p("EgVjAzDQp8kNnrnqQnrnskOp8QkWqSAArSQAArQEWqTQEOp8HrnrQHrnrJ8kNQKSkXLRAAQLRAAKTEXQJ8ENHrHrQHrHrENJ8QEXKTAALQQAALSkXKSQkNJ8nrHsQnrHqp8ENQqTEXrRAAQrRAAqSkXg");
	this.shape_465.setTransform(330.1,330.025);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("rgba(255,255,255,0.039)").s().p("EgVlAzHQp9kOnsnqQnrnskNp9QkYqTABrTQgBrREYqUQENp9HrnrQHsnsJ9kNQKTkYLSAAQLSAAKUEYQJ9ENHrHsQHsHrEOJ9QEWKUABLRQgBLTkWKTQkOJ9nsHsQnrHqp9EOQqUEYrSgBQrSABqTkYg");
	this.shape_466.setTransform(330.1,330.05);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("rgba(255,255,255,0.039)").s().p("EgVnAzMQp+kOnsnsQnsnskOp/QkYqTAArUQAArSEYqVQEOp9HsntQHsnrJ+kOQKUkYLTAAQLTAAKUEYQJ/EOHsHrQHsHtEOJ9QEXKVAALSQAALUkXKTQkOJ/nsHsQnsHsp/EOQqUEXrTAAQrTAAqUkXg");
	this.shape_467.setTransform(330.1,330.05);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("rgba(255,255,255,0.039)").s().p("EgVpAzQQp/kOnsntQntntkOp+QkYqVAArVQAArTEYqVQEOp/HtntQHsnsJ/kOQKVkZLUAAQLUAAKVEZQKAEOHsHsQHtHtEOJ/QEYKVAALTQAALVkYKVQkOJ+ntHtQnsHtqAEOQqVEYrUAAQrUAAqVkYg");
	this.shape_468.setTransform(330.1,330.025);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("rgba(255,255,255,0.039)").s().p("EgVrAzUQp/kPnunsQntnukPp/QkXqWgBrWQABrVEXqVQEPqAHtntQHunuJ/kOQKWkYLVAAQLVAAKWEYQKAEOHtHuQHuHtEOKAQEYKVAALVQAALWkYKWQkOJ/nuHuQntHsqAEPQqWEZrVAAQrVAAqWkZg");
	this.shape_469.setTransform(330.1,330.05);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("rgba(255,255,255,0.039)").s().p("EgVtAzYQqAkPnuntQnunvkPqAQkYqXAArWQAArVEYqXQEPqBHunuQHuntKAkPQKXkZLWAAQLWAAKXEZQKBEPHtHtQHuHuEQKBQEYKXAALVQAALWkYKXQkQKAnuHvQntHtqBEPQqXEZrWAAQrWAAqXkZg");
	this.shape_470.setTransform(330.125,330.05);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("rgba(255,255,255,0.039)").s().p("EgVuAzdQqBkQnwnuQntnvkQqBQkZqXAArYQAArWEZqYQEQqBHtnvQHwnuKBkPQKYkZLWAAQLXAAKYEZQKCEPHuHuQHvHvEPKBQEZKYAALWQAALYkZKXQkPKBnvHvQnuHuqCEQQqYEYrXABQrWgBqYkYg");
	this.shape_471.setTransform(330.1,330.05);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("rgba(255,255,255,0.039)").s().p("EgVwAzhQqCkQnwnuQnunwkQqCQkZqYAArZQAArXEZqZQEQqCHunvQHwnvKCkPQKZkaLXAAQLYAAKZEaQKCEPHvHvQHwHvEQKCQEYKZABLXQgBLZkYKYQkQKCnwHwQnvHuqCEQQqZEZrYAAQrXAAqZkZg");
	this.shape_472.setTransform(330.1,330.025);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("rgba(255,255,255,0.039)").s().p("EgVyAzlQqDkQnwnwQnwnwkQqCQkZqaAArZQAArYEZqZQEQqEHwnwQHwnvKDkQQKakaLYAAQLZAAKZEaQKEEQHvHvQHwHwEQKEQEaKZAALYQAALZkaKaQkQKCnwHwQnvHwqEEQQqZEarZAAQrYAAqakag");
	this.shape_473.setTransform(330.125,330.05);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("rgba(255,255,255,0.039)").s().p("EgV0AzpQqDkQnxnwQnwnxkRqDQkaqaAArbQAArZEaqaQERqEHwnwQHxnxKDkQQKbkbLZAAQLaAAKaEbQKEEQHxHxQHwHwERKEQEaKaAALZQAALbkaKaQkRKDnwHxQnxHwqEEQQqaEaraAAQrZAAqbkag");
	this.shape_474.setTransform(330.125,330.05);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("rgba(255,255,255,0.039)").s().p("EgV1AzuQqFkRnynxQnwnykRqEQkbqbAArbQAAraEbqbQERqFHwnxQHynxKFkRQKbkaLaAAQLbAAKbEaQKFERHxHxQHyHxEQKFQEaKbAALaQAALbkaKbQkQKEnyHyQnxHxqFERQqbEarbAAQraAAqbkag");
	this.shape_475.setTransform(330.1,330.05);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("rgba(255,255,255,0.039)").s().p("EgV3AzyQqFkRnynyQnynykRqFQkbqcAArcQAArbEbqcQERqFHynyQHynyKFkQQKckcLbAAQLcAAKcEcQKFEQHzHyQHxHyESKFQEaKcAALbQAALckaKcQkSKFnxHyQnzHyqFERQqcEbrcAAQrbAAqckbg");
	this.shape_476.setTransform(330.1,330.05);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("rgba(255,255,255,0.039)").s().p("EgV5Az2QqGkRnznyQnynzkSqGQkbqdAArdQAArcEbqdQESqGHynyQHznzKGkRQKdkbLcAAQLcAAKdEbQKHERHzHzQHyHyESKGQEbKdAALcQAALdkbKdQkSKGnyHzQnzHyqHERQqdEbrcABQrcgBqdkbg");
	this.shape_477.setTransform(330.125,330.05);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("rgba(255,255,255,0.039)").s().p("EgV7Az7QqHkTnznyQnznzkSqHQkbqeAAreQAArdEbqdQESqIHznzQHznzKHkRQKekcLdAAQLdAAKeEcQKIERHzHzQHzHzESKIQEbKdAALdQAALekbKeQkSKHnzHzQnzHyqIETQqeEbrdAAQrdAAqekbg");
	this.shape_478.setTransform(330.125,330.05);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("rgba(255,255,255,0.039)").s().p("EgV9Az/QqHkSn0n0Qn0n0kSqHQkcqfAArfQAAreEcqeQESqIH0n0QH0n0KHkSQKfkbLeAAQLfAAKeEbQKIESH1H0QHzH0ESKIQEcKeAALeQAALfkcKfQkSKHnzH0Qn1H0qIESQqeEcrfAAQreAAqfkcg");
	this.shape_479.setTransform(330.1,330.05);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("rgba(255,255,255,0.039)").s().p("EgV+A0DQqJkSn1n0Qn0n1kSqJQkdqfAArgQAAreEdqgQESqJH0n0QH1n1KJkRQKfkdLfgBQLfABKgEdQKJERH0H1QH1H0ESKJQEdKgAALeQAALgkdKfQkSKJn1H1Qn0H0qJESQqgEcrfAAQrfAAqfkcg");
	this.shape_480.setTransform(330.125,330.05);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("rgba(255,255,255,0.039)").s().p("EgV+A0EQqJkTn1n0Qn0n1kTqJQkcqfAArgQAAreEcqgQETqJH0n0QH1n1KJkSQKfkdLfAAQLfAAKgEdQKJESH1H1QH0H0ETKJQEcKgAALeQAALgkcKfQkTKJn0H1Qn1HzqJEUQqgEbrfAAQrfAAqfkbg");
	this.shape_481.setTransform(330.125,330.05);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("rgba(255,255,255,0.039)").s().p("EgV9Az/QqIkSn0n0Qnzn0kSqHQkcqfAArfQAAreEcqeQESqIHzn0QH0n0KIkSQKfkcLeAAQLeAAKfEcQKJESHzH0QH0H0ESKIQEcKeAALeQAALfkcKfQkSKHn0H0QnzH0qJESQqfEcreAAQreAAqfkcg");
	this.shape_482.setTransform(330.125,330.05);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("rgba(255,255,255,0.039)").s().p("EgV7Az7QqHkSnznzQnznzkSqHQkbqeAAreQAArdEbqdQESqHHzn0QHznzKHkRQKekcLdgBQLeABKdEcQKIERHzHzQHzH0ETKHQEaKdABLdQgBLekaKeQkTKHnzHzQnzHzqIESQqdEbreAAQrdAAqekbg");
	this.shape_483.setTransform(330.1,330.05);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("rgba(255,255,255,0.039)").s().p("EgV5Az2QqGkRnznyQnynzkRqGQkcqdAArdQAArcEcqdQERqGHynyQHznzKGkRQKdkbLcAAQLcAAKeEbQKGERHzHzQHyHyESKGQEbKdAALcQAALdkbKdQkSKGnyHzQnzHyqGERQqeEbrcABQrcgBqdkbg");
	this.shape_484.setTransform(330.1,330.05);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("rgba(255,255,255,0.039)").s().p("EgV3AzzQqGkSnynxQnynykRqGQkaqcAArcQAArbEaqcQERqFHynzQHynxKGkRQKckbLbAAQLcAAKcEbQKGERHyHxQHxHzESKFQEaKcAALbQAALckaKcQkSKGnxHyQnyHxqGESQqcEarcAAQrbAAqckag");
	this.shape_485.setTransform(330.125,330.05);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("rgba(255,255,255,0.039)").s().p("EgV2AzuQqEkQnynyQnxnxkRqFQkaqbAArbQAAraEaqcQERqEHxnxQHynxKEkRQKckaLaAAQLbAAKbEaQKFERHxHxQHxHxERKEQEbKcAALaQAALbkbKbQkRKFnxHxQnxHyqFEQQqbEbrbAAQraAAqckbg");
	this.shape_486.setTransform(330.125,330.05);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("rgba(255,255,255,0.039)").s().p("EgV0AzqQqEkRnxnvQnwnykQqDQkaqaAArbQAArZEaqaQEQqFHwnwQHxnwKEkRQKbkaLZAAQLaAAKaEaQKEERHxHwQHxHwEQKFQEaKaAALZQAALbkaKaQkQKDnxHyQnxHvqEERQqaEaraAAQrZAAqbkag");
	this.shape_487.setTransform(330.125,330.05);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("rgba(255,255,255,0.039)").s().p("EgVyAzmQqDkRnwnvQnwnxkQqCQkaqaAArZQAArYEaqaQEQqDHwnwQHwnwKDkPQKakaLYAAQLZAAKZEaQKEEPHwHwQHwHwEQKDQEaKaAALYQAALZkaKaQkQKCnwHxQnwHvqEERQqZEZrZABQrYgBqakZg");
	this.shape_488.setTransform(330.125,330.05);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("rgba(255,255,255,0.039)").s().p("EgVwAzhQqCkPnwnvQnvnwkPqCQkaqYAArZQAArXEaqZQEPqCHvnvQHwnwKCkPQKYkaLYAAQLYAAKZEaQKCEPHwHwQHvHvEQKCQEZKZAALXQAALZkZKYQkQKCnvHwQnwHvqCEPQqZEarYAAQrYAAqYkag");
	this.shape_489.setTransform(330.1,330.05);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("rgba(255,255,255,0.039)").s().p("EgVuAzeQqBkQnwnuQnunvkQqCQkYqXgBrYQABrWEYqYQEQqBHunvQHwnvKBkPQKYkZLWAAQLXAAKYEZQKCEPHuHvQHvHvEPKBQEZKYAALWQAALYkZKXQkPKCnvHvQnuHuqCEQQqYEYrXAAQrWAAqYkYg");
	this.shape_490.setTransform(330.1,330.025);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("rgba(255,255,255,0.039)").s().p("EgVsAzZQqBkPnuntQnunvkPqAQkZqXAArXQAArVEZqXQEPqBHunuQHunuKBkPQKWkZLWAAQLWAAKYEZQKAEPHuHuQHvHuEPKBQEYKXAALVQAALXkYKXQkPKAnvHvQnuHtqAEPQqYEZrWAAQrWAAqWkZg");
	this.shape_491.setTransform(330.1,330.025);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("rgba(255,255,255,0.039)").s().p("EgVrAzVQqAkPnuntQnsnukPp/QkZqWAArWQAArVEZqVQEPqAHsnuQHuntKAkOQKXkZLUAAQLVAAKWEZQKAEOHuHtQHtHuEPKAQEYKVAALVQAALWkYKWQkPJ/ntHuQnuHtqAEPQqWEYrVAAQrUAAqXkYg");
	this.shape_492.setTransform(330.1,330.05);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("rgba(255,255,255,0.039)").s().p("EgVpAzQQp/kOntnsQnsntkPp/QkYqVAArVQAArTEYqWQEPp/HsntQHtntJ/kOQKVkYLUAAQLUAAKVEYQKAEOHsHtQHuHtEOJ/QEYKWAALTQAALVkYKVQkOJ/nuHtQnsHsqAEOQqVEYrUAAQrUAAqVkYg");
	this.shape_493.setTransform(330.1,330.05);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("rgba(255,255,255,0.039)").s().p("EgVoAzNQp+kOnsntQnsnskOp+QkXqUAArUQAArSEXqVQEOp+HsntQHsnrJ+kOQKVkYLTAAQLTAAKVEYQJ+EOHsHrQHsHtEPJ+QEXKVAALSQAALUkXKUQkPJ+nsHsQnsHtp+EOQqVEXrTAAQrTAAqVkXg");
	this.shape_494.setTransform(330.125,330.05);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("rgba(255,255,255,0.039)").s().p("EgVlAzIQp+kOnsnqQnrntkNp9QkXqTAArTQAArREXqVQENp8HrnsQHsnrJ+kOQKTkYLSAAQLSAAKUEYQJ+EOHrHrQHsHsEOJ8QEXKVAALRQAALTkXKTQkOJ9nsHtQnrHqp+EOQqUEXrSAAQrSAAqTkXg");
	this.shape_495.setTransform(330.1,330.05);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("rgba(255,255,255,0.039)").s().p("EgVkAzEQp8kNnrnrQnrnrkOp8QkWqTAArSQAArREWqSQEOp9HrnrQHrnrJ8kNQKTkXLRAAQLRAAKUEXQJ8ENHrHrQHrHrENJ9QEXKSAALRQAALSkXKTQkNJ8nrHrQnrHrp8ENQqUEXrRAAQrRAAqTkXg");
	this.shape_496.setTransform(330.1,330.025);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("rgba(255,255,255,0.039)").s().p("EgViAzAQp8kNnqnqQnqnrkNp7QkXqSABrRQgBrQEXqSQENp7HqnqQHqnrJ8kMQKSkXLQAAQLRAAKREXQJ9EMHqHrQHqHqENJ7QEXKSAALQQAALRkXKSQkNJ7nqHrQnqHqp9ENQqREWrRAAQrQAAqSkWg");
	this.shape_497.setTransform(330.1,330.025);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("rgba(255,255,255,0.039)").s().p("EgVgAy8Qp7kNnqnpQnpnqkNp7QkWqRAArQQAArPEWqRQENp7HpnpQHqnqJ7kMQKRkXLPAAQLQAAKQEXQJ8EMHpHqQHqHpENJ7QEWKRAALPQAALQkWKRQkNJ7nqHqQnpHpp8ENQqQEWrQAAQrPAAqRkWg");
	this.shape_498.setTransform(330.1,330.025);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("rgba(255,255,255,0.039)").s().p("EgVfAy4Qp6kNnpnoQnpnqkLp6QkWqQAArPQAArOEWqQQELp6HpnpQHpnpJ6kMQKRkWLOAAQLOAAKREWQJ7EMHpHpQHoHpEMJ6QEXKQAALOQAALPkXKQQkMJ6noHqQnpHop7ENQqREVrOAAQrOAAqRkVg");
	this.shape_499.setTransform(330.1,330.025);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("rgba(255,255,255,0.039)").s().p("EgVcAyzQp6kMnpnoQnnnpkNp5QkVqPAArOQAArNEVqQQENp5HnnoQHpnoJ6kMQKPkWLNABQLNgBKQEWQJ6EMHoHoQHoHoENJ5QEVKQAALNQAALOkVKPQkNJ5noHpQnoHop6EMQqQEWrNAAQrNAAqPkWg");
	this.shape_500.setTransform(330.1,330.05);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("rgba(255,255,255,0.039)").s().p("EgVbAyvQp4kMnonnQnnnokMp5QkVqOAArNQAArMEVqPQEMp4HnnoQHonoJ4kLQKPkVLMAAQLNAAKPEVQJ4ELHoHoQHoHoELJ4QEVKPAALMQAALNkVKOQkLJ5noHoQnoHnp4EMQqPEVrNAAQrMAAqPkVg");
	this.shape_501.setTransform(330.075,330.05);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("rgba(255,255,255,0.039)").s().p("EgVZAyqQp4kLnnnnQnnnnkLp3QkUqNgBrNQABrLEUqOQELp4HnnnQHnnnJ4kLQKNkULMAAQLMAAKNEUQJ5ELHnHnQHmHnEMJ4QEVKOgBLLQABLNkVKNQkMJ3nmHnQnnHnp5ELQqNEVrMABQrMgBqNkVg");
	this.shape_502.setTransform(330.1,330.05);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("rgba(255,255,255,0.039)").s().p("EgVYAynQp2kLnnnmQnmnnkLp3QkUqMAArMQAArKEUqNQELp3HmnmQHnnnJ2kKQKOkVLKAAQLLAAKNEVQJ3EKHmHnQHnHmEKJ3QEVKNAALKQAALMkVKMQkKJ3nnHnQnmHmp3ELQqNEUrLAAQrKAAqOkUg");
	this.shape_503.setTransform(330.1,330.025);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("rgba(255,255,255,0.039)").s().p("EgVWAyiQp1kKnnnmQnlnmkKp2QkVqLAArLQAArJEVqMQEKp2HlnmQHnnmJ1kKQKNkULJAAQLKAAKMEUQJ2EKHmHmQHmHmELJ2QETKMAALJQAALLkTKLQkLJ2nmHmQnmHmp2EKQqMEUrKAAQrJAAqNkUg");
	this.shape_504.setTransform(330.1,330.025);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("rgba(255,255,255,0.039)").s().p("EgVUAyeQp1kKnlnlQnlnlkLp1QkTqLAArKQAArIETqLQELp1HlnmQHlnlJ1kKQKLkULJAAQLJAAKLEUQJ2EKHlHlQHlHmEKJ1QEUKLAALIQAALKkUKLQkKJ1nlHlQnlHlp2EKQqLEUrJAAQrJAAqLkUg");
	this.shape_505.setTransform(330.1,330.025);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("rgba(255,255,255,0.039)").s().p("EgVSAyaQp0kKnlnkQnlnlkJp0QkUqKAArJQAArHEUqLQEJp0HlnkQHlnlJ0kKQKLkTLHAAQLIAAKLETQJ0EKHkHlQHlHkEKJ0QEUKLgBLHQABLJkUKKQkKJ0nlHlQnkHkp0EKQqLETrIAAQrHAAqLkTg");
	this.shape_506.setTransform(330.1,330.025);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("rgba(255,255,255,0.039)").s().p("EgVQAyWQpzkKnlnjQnjnlkKpzQkTqJAArIQAArGETqKQEKpzHjnkQHlnkJzkJQKJkULHAAQLHAAKKEUQJ0EJHkHkQHkHkEJJzQETKKAALGQAALIkTKJQkJJznkHlQnkHjp0EKQqKETrHAAQrHAAqJkTg");
	this.shape_507.setTransform(330.075,330.025);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("rgba(255,255,255,0.039)").s().p("EgVOAyRQpzkJnknjQninjkKpzQkSqIAArHQAArFESqJQEKpzHinkQHkniJzkKQKIkSLGAAQLGAAKJESQJzEKHjHiQHkHkEJJzQESKJAALFQAALHkSKIQkJJznkHjQnjHjpzEJQqJETrGAAQrGAAqIkTg");
	this.shape_508.setTransform(330.075,330.05);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("rgba(255,255,255,0.039)").s().p("EgVNAyNQpxkJnjniQnjnjkIpyQkTqHAArGQAArFETqHQEIpyHjnjQHjniJxkJQKIkSLFAAQLFAAKIESQJyEJHjHiQHjHjEJJyQESKHAALFQAALGkSKHQkJJynjHjQnjHipyEJQqIESrFAAQrFAAqIkSg");
	this.shape_509.setTransform(330.075,330.025);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("rgba(255,255,255,0.039)").s().p("EgVLAyJQpxkIniniQninikIpxQkSqHAArFQAArEESqHQEIpwHinjQHiniJxkIQKHkSLEAAQLEAAKHESQJyEIHiHiQHiHjEIJwQESKHAALEQAALFkSKHQkIJxniHiQniHipyEIQqHESrEAAQrEAAqHkSg");
	this.shape_510.setTransform(330.075,330.025);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("rgba(255,255,255,0.039)").s().p("EgVJAyFQpwkIninhQnhnikJpwQkQqGAArEQAArDEQqGQEJpwHhnhQHiniJwkIQKGkRLDAAQLEAAKGERQJwEIHiHiQHhHhEIJwQERKGABLDQgBLEkRKGQkIJwnhHiQniHhpwEIQqGERrEAAQrDAAqGkRg");
	this.shape_511.setTransform(330.1,330.025);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("rgba(255,255,255,0.039)").s().p("EgVIAyBQpvkInhnhQngnhkIpvQkRqFAArDQAArCERqFQEIpvHgnhQHhnhJvkHQKGkSLCAAQLDAAKEESQJxEHHgHhQHhHhEIJvQERKFAALCQAALDkRKFQkIJvnhHhQngHhpxEIQqEERrDAAQrCAAqGkRg");
	this.shape_512.setTransform(330.1,330.025);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("rgba(255,255,255,0.039)").s().p("EgVGAx8QpukHngngQngngkIpvQkQqEAArCQAArBEQqEQEIpvHgngQHgngJukHQKFkRLBAAQLCAAKEERQJvEHHgHgQHgHgEIJvQEQKEAALBQAALCkQKEQkIJvngHgQngHgpvEHQqEERrCAAQrBAAqFkRg");
	this.shape_513.setTransform(330.075,330.025);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("rgba(255,255,255,0.039)").s().p("EgVEAx4QptkHngnfQnfngkHptQkRqEAArBQAArAERqEQEHptHfngQHgnfJtkHQKEkRLAAAQLBAAKDERQJuEHHgHfQHfHgEHJtQERKEAALAQAALBkRKEQkHJtnfHgQngHfpuEHQqDERrBAAQrAAAqEkRg");
	this.shape_514.setTransform(330.075,330.025);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("rgba(255,255,255,0.039)").s().p("EgVCAx0QptkHnfneQnengkHptQkQqCAArAQAAq/EQqDQEHptHeneQHfngJtkGQKDkQK/AAQLAAAKDEQQJtEGHfHgQHfHeEGJtQEQKDAAK/QAALAkQKCQkGJtnfHgQnfHeptEHQqDEQrAAAQq/AAqDkQg");
	this.shape_515.setTransform(330.075,330.05);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("rgba(255,255,255,0.039)").s().p("EgVAAxwQpskHnfndQnenfkGpsQkQqCAAq/QAAq+EQqCQEGpsHeneQHfneJskHQKCkPK+AAQK/AAKCEPQJsEHHeHeQHfHeEGJsQEQKCAAK+QAAK/kQKCQkGJsnfHfQneHdpsEHQqCEPq/AAQq+AAqCkPg");
	this.shape_516.setTransform(330.075,330.025);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("rgba(255,255,255,0.039)").s().p("EgU+AxsQpskGneneQndnekGprQkPqBAAq+QAAq9EPqBQEGprHdneQHeneJskFQKBkQK9AAQK+AAKBEQQJsEFHdHeQHeHeEGJrQEPKBAAK9QAAK+kPKBQkGJrneHeQndHepsEGQqBEPq+AAQq9AAqBkPg");
	this.shape_517.setTransform(330.075,330.025);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("rgba(255,255,255,0.039)").s().p("EgU8AxnQpqkFnendQndndkFprQkPqAAAq9QAAq8EPqAQEFprHdndQHendJqkFQJ/kPK9AAQK9AAKBEPQJqEFHdHdQHdHdEGJrQEPKAAAK8QAAK9kPKAQkGJrndHdQndHdpqEFQqBEPq9AAQq9AAp/kPg");
	this.shape_518.setTransform(330.05,330.025);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("rgba(255,255,255,0.039)").s().p("EgU6AxjQpqkFndncQncndkFppQkPqAAAq8QAAq7EPqAQEFppHcndQHdncJqkFQJ+kPK8AAQK8AAKAEPQJpEFHcHcQHdHdEFJpQEPKAAAK7QAAK8kPKAQkFJpndHdQncHcppEFQqAEPq8AAQq8AAp+kPg");
	this.shape_519.setTransform(330.05,330.025);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("rgba(255,255,255,0.039)").s().p("EgU5AxfQppkFncnbQnbndkFpoQkOp+AAq8QAAq6EOp/QEFppHbnbQHcncJpkFQJ+kOK7AAQK7AAJ/EOQJpEFHbHcQHcHbEFJpQEOJ/AAK6QAAK8kOJ+QkFJoncHdQnbHbppEFQp/EOq7AAQq7AAp+kOg");
	this.shape_520.setTransform(330.075,330.025);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("rgba(255,255,255,0.039)").s().p("EgU3AxbQpokFncnbQnanbkFpoQkOp9AAq7QAAq5EOp+QEFpoHanbQHcnbJokFQJ9kOK6AAQK6AAJ+EOQJoEFHbHbQHbHbEFJoQEOJ+AAK5QAAK7kOJ9QkFJonbHbQnbHbpoEFQp+EOq6AAQq6AAp9kOg");
	this.shape_521.setTransform(330.075,330.025);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("rgba(255,255,255,0.039)").s().p("EgU2AxWQpnkDnanaQnbnckEpnQkNp8AAq6QAAq4ENp9QEEpnHbnaQHanbJnkEQJ9kOK5AAQK5AAJ9EOQJnEEHbHbQHaHaEFJnQENJ9AAK4QAAK6kNJ8QkFJnnaHcQnbHapnEDQp9EOq5AAQq5AAp9kOg");
	this.shape_522.setTransform(330.075,330);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("rgba(255,255,255,0.039)").s().p("EgU0AxSQpmkEnanZQnanakEpnQkNp7AAq5QAAq4ENp8QEEpmHanaQHanZJmkEQJ8kNK4AAQK4AAJ8ENQJnEEHZHZQHaHaEEJmQEOJ8AAK4QAAK5kOJ7QkEJnnaHaQnZHZpnEEQp8ENq4AAQq4AAp8kNg");
	this.shape_523.setTransform(330.075,330.025);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("rgba(255,255,255,0.039)").s().p("EgUyAxOQplkEnanYQnZnakDplQkNp7AAq4QAAq3ENp7QEDplHZnaQHanZJlkDQJ7kNK3AAQK4AAJ7ENQJlEDHZHZQHaHaEEJlQEMJ7AAK3QAAK4kMJ7QkEJlnaHaQnZHYplEEQp7ENq4AAQq3AAp7kNg");
	this.shape_524.setTransform(330.05,330.025);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("rgba(255,255,255,0.039)").s().p("EgUwAxKQplkDnZnZQnYnZkDpkQkNp6AAq3QAAq2ENp6QEDplHYnYQHZnZJlkDQJ6kMK2AAQK3AAJ6EMQJlEDHZHZQHYHYEDJlQENJ6gBK2QABK3kNJ6QkDJknYHZQnZHZplEDQp6EMq3AAQq2AAp6kMg");
	this.shape_525.setTransform(330.05,330.025);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("rgba(255,255,255,0.039)").s().p("EgUvAxGQpjkDnYnYQnYnYkDpkQkMp5AAq2QAAq1EMp5QEDpkHYnYQHYnYJjkDQJ6kMK1AAQK2AAJ5EMQJkEDHYHYQHYHYEDJkQEMJ5AAK1QAAK2kMJ5QkDJknYHYQnYHYpkEDQp5EMq2AAQq1AAp6kMg");
	this.shape_526.setTransform(330.05,330.025);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("rgba(255,255,255,0.039)").s().p("EgUtAxBQpikCnYnXQnXnYkDpjQkMp4AAq1QAAq0EMp4QEDpjHXnYQHYnXJikCQJ5kMK0AAQK1AAJ4EMQJkECHWHXQHYHYEDJjQEMJ4gBK0QABK1kMJ4QkDJjnYHYQnWHXpkECQp4EMq1AAQq0AAp5kMg");
	this.shape_527.setTransform(330.05,330.025);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("rgba(255,255,255,0.039)").s().p("EgUrAw9QpikCnXnWQnWnXkCpiQkMp4AAq0QAAqzEMp4QECphHWnYQHXnWJikCQJ4kMKzAAQKzAAJ5EMQJiECHXHWQHXHYECJhQELJ4AAKzQAAK0kLJ4QkCJinXHXQnXHWpiECQp5EMqzgBQqzABp4kMg");
	this.shape_528.setTransform(330.05,330);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("rgba(255,255,255,0.039)").s().p("EgUpAw5QpikBnWnXQnWnWkBphQkLp2AAq0QAAqyELp3QEBphHWnWQHWnWJikBQJ3kMKyAAQKzAAJ2EMQJiEBHWHWQHWHWECJhQELJ3AAKyQAAK0kLJ2QkCJhnWHWQnWHXpiEBQp2ELqzAAQqyAAp3kLg");
	this.shape_529.setTransform(330.075,330);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("rgba(255,255,255,0.039)").s().p("EgUoAw1QpfkCnXnUQnVnXkBpgQkLp1ABqzQgBqxELp2QEBpgHVnWQHXnVJfkCQJ3kLKxAAQKyAAJ2ELQJhECHVHVQHVHWECJgQELJ2AAKxQAAKzkLJ1QkCJgnVHXQnVHUphECQp2ELqygBQqxABp3kLg");
	this.shape_530.setTransform(330.05,330);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("rgba(255,255,255,0.039)").s().p("EgUmAwwQpfkBnVnUQnUnVkCpgQkKp1AAqxQAAqwEKp1QECpgHUnVQHVnVJfkBQJ2kKKwAAQKxAAJ1EKQJgEBHVHVQHUHVECJgQEKJ1AAKwQAAKxkKJ1QkCJgnUHVQnVHUpgEBQp1ELqxAAQqwAAp2kLg");
	this.shape_531.setTransform(330.05,330.025);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("rgba(255,255,255,0.039)").s().p("EgUkAwsQpekBnVnTQnUnVkBpfQkJp0AAqwQAAqvEJp1QEBpeHUnVQHVnUJekAQJ0kKKwAAQKwAAJ0EKQJgEAHTHUQHVHVEBJeQEKJ1AAKvQAAKwkKJ0QkBJfnVHVQnTHTpgEBQp0EKqwAAQqwAAp0kKg");
	this.shape_532.setTransform(330.05,330.025);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("rgba(255,255,255,0.039)").s().p("EgUiAwoQpekAnUnUQnTnTkApeQkKp0AAqvQAAquEKp0QEApeHTnUQHUnTJekAQJ0kKKuAAQKvAAJ0EKQJeEAHTHTQHUHUEBJeQEJJ0AAKuQAAKvkJJ0QkBJenUHTQnTHUpeEAQp0EKqvAAQquAAp0kKg");
	this.shape_533.setTransform(330.05,330.025);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("rgba(255,255,255,0.039)").s().p("EgUgAwkQpekAnSnTQnTnTkApdQkKpzABquQgBqtEKpzQEApdHTnTQHSnTJekAQJzkJKtAAQKuAAJzEJQJdEAHTHTQHTHTEAJdQEJJzABKtQgBKukJJzQkAJdnTHTQnTHTpdEAQpzEJquAAQqtAApzkJg");
	this.shape_534.setTransform(330.05,330.025);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("rgba(255,255,255,0.039)").s().p("EgUfAwgQpckAnTnSQnRnSkApcQkJpzAAqtQAAqtEJpxQEApcHRnTQHTnSJckAQJykIKtAAQKtAAJyEIQJdEAHRHSQHTHTEAJcQEJJxAAKtQAAKtkJJzQkAJcnTHSQnRHSpdEAQpyEIqtAAQqtAApykIg");
	this.shape_535.setTransform(330.05,330);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("rgba(255,255,255,0.039)").s().p("EgUcAwcQpckAnSnRQnRnSkApbQkIpyAAqsQAAqsEIpwQEApcHRnRQHSnSJcj/QJwkJKsAAQKsAAJxEJQJcD/HSHSQHSHRD/JcQEIJwAAKsQAAKskIJyQj/JbnSHSQnSHRpcEAQpxEIqsAAQqsAApwkIg");
	this.shape_536.setTransform(330.025,330);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("rgba(255,255,255,0.039)").s().p("EgUbAwXQpaj+nSnSQnQnQj/pcQkJpvAAqsQAAqrEJpvQD/pbHQnSQHSnQJaj/QJwkJKrABQKrgBJwEJQJcD/HRHQQHQHSEAJbQEHJvABKrQgBKskHJvQkAJcnQHQQnRHSpcD+QpwEJqrgBQqrABpwkJg");
	this.shape_537.setTransform(330.05,330);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("rgba(255,255,255,0.039)").s().p("EgUZAwTQpaj/nRnPQnPnRkApaQkHpvAAqrQAAqqEHpvQEApZHPnRQHRnQJaj/QJvkIKqAAQKqAAJwEIQJaD/HQHQQHQHRD/JZQEIJvAAKqQAAKrkIJvQj/JanQHRQnQHPpaD/QpwEIqqAAQqqAApvkIg");
	this.shape_538.setTransform(330.05,330);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("rgba(255,255,255,0.039)").s().p("EgUXAwPQpaj/nQnPQnPnQj+pZQkHpugBqqQABqpEHpuQD+pZHPnQQHQnQJaj+QJukHKpAAQKpAAJvEHQJZD+HQHQQHQHQD+JZQEIJugBKpQABKqkIJuQj+JZnQHQQnQHPpZD/QpvEHqpAAQqpAApukHg");
	this.shape_539.setTransform(330.05,330.025);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("rgba(255,255,255,0.039)").s().p("EgUVAwKQpZj+nPnOQnPnQj+pYQkHptAAqpQAAqoEHptQD+pZHPnPQHPnPJZj+QJtkHKoAAQKoAAJuEHQJYD+HQHPQHPHPD+JZQEHJtAAKoQAAKpkHJtQj+JYnPHQQnQHOpYD+QpuEIqoAAQqoAAptkIg");
	this.shape_540.setTransform(330.05,330.025);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("rgba(255,255,255,0.039)").s().p("EgUUAwGQpYj9nOnOQnOnPj+pXQkGptgBqoQABqnEGpsQD+pYHOnOQHOnPJYj+QJtkGKnAAQKoAAJsEGQJYD+HOHPQHPHOD+JYQEGJsABKnQgBKokGJtQj+JXnPHPQnOHOpYD9QpsEHqoAAQqnAAptkHg");
	this.shape_541.setTransform(330.05,330);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("rgba(255,255,255,0.039)").s().p("EgUSAwDQpWj+nPnOQnNnOj9pWQkHpsAAqnQAAqmEHprQD9pXHNnPQHPnNJWj9QJskGKmgBQKnABJsEGQJXD9HNHNQHOHPD+JXQEGJrAAKmQAAKnkGJsQj+JWnOHOQnNHOpXD+QpsEFqnABQqmgBpskFg");
	this.shape_542.setTransform(330.025,330);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("rgba(255,255,255,0.039)").s().p("EgUQAv+QpWj9nNnNQnNnNj9pWQkGprAAqmQAAqlEGprQD9pWHNnNQHNnNJWj9QJrkGKlAAQKmAAJrEGQJWD9HNHNQHNHND9JWQEGJrAAKlQAAKmkGJrQj9JWnNHNQnNHNpWD9QprEGqmAAQqlAAprkGg");
	this.shape_543.setTransform(330.025,330);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("rgba(255,255,255,0.039)").s().p("EgUOAv6QpVj9nNnMQnMnNj9pVQkGpqAAqlQAAqkEGpqQD9pVHMnNQHNnMJVj8QJqkHKkAAQKlAAJqEHQJVD8HNHMQHNHND8JVQEGJqAAKkQAAKlkGJqQj8JVnNHNQnNHMpVD9QpqEGqlAAQqkAApqkGg");
	this.shape_544.setTransform(330.025,330);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("rgba(255,255,255,0.039)").s().p("EgUNAv1QpUj7nMnNQnLnMj9pTQkFpqAAqkQAAqjEFpqQD9pUHLnMQHMnLJUj8QJqkGKjAAQKkAAJpEGQJVD8HLHLQHNHMD8JUQEFJqAAKjQAAKkkFJqQj8JTnNHMQnLHNpVD7QppEGqkAAQqjAApqkGg");
	this.shape_545.setTransform(330.025,330);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("rgba(255,255,255,0.039)").s().p("EgULAvyQpUj9nLnKQnLnMj8pTQkFpoAAqkQAAqiEFpoQD8pUHLnMQHLnLJUj8QJokFKjAAQKjAAJoEFQJUD8HLHLQHMHMD7JUQEGJogBKiQABKkkGJoQj7JTnMHMQnLHKpUD9QpoEEqjABQqjgBpokEg");
	this.shape_546.setTransform(330.05,330);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("rgba(255,255,255,0.039)").s().p("EgUKAvtQpSj8nLnKQnKnLj8pSQkEpoAAqiQAAqhEEpoQD8pTHKnKQHLnLJSj7QJpkFKhAAQKiAAJoEFQJTD7HKHLQHLHKD7JTQEFJoAAKhQAAKikFJoQj7JSnLHLQnKHKpTD8QpoEEqiAAQqhAAppkEg");
	this.shape_547.setTransform(330.05,330);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("rgba(255,255,255,0.039)").s().p("EgUHAvpQpSj7nKnKQnKnKj7pSQkEpnAAqhQAAqhEEpmQD7pRHKnLQHKnJJSj8QJmkEKhAAQKhAAJnEEQJSD8HKHJQHKHLD7JRQEEJmAAKhQAAKhkEJnQj7JSnKHKQnKHKpSD7QpnEEqhAAQqhAApmkEg");
	this.shape_548.setTransform(330.025,330);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("rgba(255,255,255,0.039)").s().p("EgUGAvkQpQj6nKnJQnJnKj7pRQkEpmAAqgQAAqfEEpnQD7pQHJnJQHKnKJQj6QJmkEKggBQKgABJmEEQJRD6HJHKQHKHJD7JQQEEJnAAKfQAAKgkEJmQj7JRnKHKQnJHJpRD6QpmEFqggBQqgABpmkFg");
	this.shape_549.setTransform(330.025,330);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_412,p:{scaleX:1,scaleY:1,x:330.025,y:330}}]}).to({state:[{t:this.shape_413}]},1).to({state:[{t:this.shape_414}]},1).to({state:[{t:this.shape_415}]},1).to({state:[{t:this.shape_416}]},1).to({state:[{t:this.shape_417}]},1).to({state:[{t:this.shape_418}]},1).to({state:[{t:this.shape_419}]},1).to({state:[{t:this.shape_420}]},1).to({state:[{t:this.shape_421}]},1).to({state:[{t:this.shape_422}]},1).to({state:[{t:this.shape_423}]},1).to({state:[{t:this.shape_424}]},1).to({state:[{t:this.shape_425}]},1).to({state:[{t:this.shape_426}]},1).to({state:[{t:this.shape_427}]},1).to({state:[{t:this.shape_428}]},1).to({state:[{t:this.shape_429}]},1).to({state:[{t:this.shape_430}]},1).to({state:[{t:this.shape_431}]},1).to({state:[{t:this.shape_432}]},1).to({state:[{t:this.shape_433}]},1).to({state:[{t:this.shape_434}]},1).to({state:[{t:this.shape_435}]},1).to({state:[{t:this.shape_436}]},1).to({state:[{t:this.shape_437}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_439}]},1).to({state:[{t:this.shape_440}]},1).to({state:[{t:this.shape_441}]},1).to({state:[{t:this.shape_442}]},1).to({state:[{t:this.shape_443}]},1).to({state:[{t:this.shape_444}]},1).to({state:[{t:this.shape_445}]},1).to({state:[{t:this.shape_446}]},1).to({state:[{t:this.shape_447}]},1).to({state:[{t:this.shape_448}]},1).to({state:[{t:this.shape_449}]},1).to({state:[{t:this.shape_450}]},1).to({state:[{t:this.shape_451}]},1).to({state:[{t:this.shape_452}]},1).to({state:[{t:this.shape_453}]},1).to({state:[{t:this.shape_454}]},1).to({state:[{t:this.shape_455}]},1).to({state:[{t:this.shape_456}]},1).to({state:[{t:this.shape_457}]},1).to({state:[{t:this.shape_458}]},1).to({state:[{t:this.shape_459}]},1).to({state:[{t:this.shape_460}]},1).to({state:[{t:this.shape_461}]},1).to({state:[{t:this.shape_462}]},1).to({state:[{t:this.shape_463}]},1).to({state:[{t:this.shape_464}]},1).to({state:[{t:this.shape_465}]},1).to({state:[{t:this.shape_466}]},1).to({state:[{t:this.shape_467}]},1).to({state:[{t:this.shape_468}]},1).to({state:[{t:this.shape_469}]},1).to({state:[{t:this.shape_470}]},1).to({state:[{t:this.shape_471}]},1).to({state:[{t:this.shape_472}]},1).to({state:[{t:this.shape_473}]},1).to({state:[{t:this.shape_474}]},1).to({state:[{t:this.shape_475}]},1).to({state:[{t:this.shape_476}]},1).to({state:[{t:this.shape_477}]},1).to({state:[{t:this.shape_478}]},1).to({state:[{t:this.shape_479}]},1).to({state:[{t:this.shape_480}]},1).to({state:[{t:this.shape_412,p:{scaleX:1.097,scaleY:1.097,x:330.1273,y:330.0672}}]},1).to({state:[{t:this.shape_481}]},1).to({state:[{t:this.shape_482}]},1).to({state:[{t:this.shape_483}]},1).to({state:[{t:this.shape_484}]},1).to({state:[{t:this.shape_485}]},1).to({state:[{t:this.shape_486}]},1).to({state:[{t:this.shape_487}]},1).to({state:[{t:this.shape_488}]},1).to({state:[{t:this.shape_489}]},1).to({state:[{t:this.shape_490}]},1).to({state:[{t:this.shape_491}]},1).to({state:[{t:this.shape_492}]},1).to({state:[{t:this.shape_493}]},1).to({state:[{t:this.shape_494}]},1).to({state:[{t:this.shape_495}]},1).to({state:[{t:this.shape_496}]},1).to({state:[{t:this.shape_497}]},1).to({state:[{t:this.shape_498}]},1).to({state:[{t:this.shape_499}]},1).to({state:[{t:this.shape_500}]},1).to({state:[{t:this.shape_501}]},1).to({state:[{t:this.shape_502}]},1).to({state:[{t:this.shape_503}]},1).to({state:[{t:this.shape_504}]},1).to({state:[{t:this.shape_505}]},1).to({state:[{t:this.shape_506}]},1).to({state:[{t:this.shape_507}]},1).to({state:[{t:this.shape_508}]},1).to({state:[{t:this.shape_509}]},1).to({state:[{t:this.shape_510}]},1).to({state:[{t:this.shape_511}]},1).to({state:[{t:this.shape_512}]},1).to({state:[{t:this.shape_513}]},1).to({state:[{t:this.shape_514}]},1).to({state:[{t:this.shape_515}]},1).to({state:[{t:this.shape_516}]},1).to({state:[{t:this.shape_517}]},1).to({state:[{t:this.shape_518}]},1).to({state:[{t:this.shape_519}]},1).to({state:[{t:this.shape_520}]},1).to({state:[{t:this.shape_521}]},1).to({state:[{t:this.shape_522}]},1).to({state:[{t:this.shape_523}]},1).to({state:[{t:this.shape_524}]},1).to({state:[{t:this.shape_525}]},1).to({state:[{t:this.shape_526}]},1).to({state:[{t:this.shape_527}]},1).to({state:[{t:this.shape_528}]},1).to({state:[{t:this.shape_529}]},1).to({state:[{t:this.shape_530}]},1).to({state:[{t:this.shape_531}]},1).to({state:[{t:this.shape_532}]},1).to({state:[{t:this.shape_533}]},1).to({state:[{t:this.shape_534}]},1).to({state:[{t:this.shape_535}]},1).to({state:[{t:this.shape_536}]},1).to({state:[{t:this.shape_537}]},1).to({state:[{t:this.shape_538}]},1).to({state:[{t:this.shape_539}]},1).to({state:[{t:this.shape_540}]},1).to({state:[{t:this.shape_541}]},1).to({state:[{t:this.shape_542}]},1).to({state:[{t:this.shape_543}]},1).to({state:[{t:this.shape_544}]},1).to({state:[{t:this.shape_545}]},1).to({state:[{t:this.shape_546}]},1).to({state:[{t:this.shape_547}]},1).to({state:[{t:this.shape_548}]},1).to({state:[{t:this.shape_549}]},1).to({state:[{t:this.shape_412,p:{scaleX:1,scaleY:1,x:330.025,y:330}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.9,-31.9,724.1,724);


(lib.fireLightDown = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.078)").s().p("A5XFZQk+hEiuhXQi0hbAAhjQAAhiC0hbQCuhXE+hEQKhiOO2AAQO4AAKgCOQE+BECuBXQC1BbAABiQAABji1BbQiuBXk+BEQqgCOu4AAQu2AAqhiOg");
	this.shape.setTransform(399.45,48.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.078)").s().p("A5UFYQk+hEiuhWQi0hbAAhjQAAhiC0haQCuhYE+hEQKfiNO1AAQO2AAKfCNQE+BECuBYQC0BaAABiQAABji0BbQiuBWk+BEQqfCPu2AAQu1AAqfiPg");
	this.shape_1.setTransform(399.45,48.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.078)").s().p("A5SFXQk9hDiuhXQizhaAAhjQAAhiCzhaQCuhYE9hDQKeiNO0gBQO0ABKfCNQE9BDCtBYQC0BaAABiQAABji0BaQitBXk9BDQqfCPu0gBQu0ABqeiPg");
	this.shape_2.setTransform(399.475,48.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.078)").s().p("A5QFXQk8hDithXQizhaAAhiQAAhiCzhaQCthYE8hDQKeiOOyAAQOzAAKdCOQE9BDCtBYQC0BaAABiQAABii0BaQitBXk9BDQqdCOuzAAQuyAAqeiOg");
	this.shape_3.setTransform(399.45,48.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.078)").s().p("A5MFXQk9hDithXQizhaAAhjQAAhiCzhaQCthXE9hDQKbiNOxAAQOxAAKdCNQE8BDCsBXQC0BaAABiQAABji0BaQisBXk8BDQqdCNuxAAQuxAAqbiNg");
	this.shape_4.setTransform(399.45,48.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.078)").s().p("A5KFWQk8hDishXQi0haABhiQgBhiC0hZQCshXE8hDQKbiNOvAAQOwAAKbCNQE8BDCsBXQCzBZAABiQAABiizBaQisBXk8BDQqbCNuwAAQuvAAqbiNg");
	this.shape_5.setTransform(399.45,49.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.078)").s().p("A5IFWQk7hDishXQizhZAAhjQAAhiCzhZQCshXE7hDQKaiMOugBQOuABKaCMQE7BDCtBXQCzBZAABiQAABjizBZQitBXk7BDQqaCMuuABQuugBqaiMg");
	this.shape_6.setTransform(399.475,49.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.078)").s().p("A5FFVQk6hDithWQiyhaAAhhQAAhiCyhZQCthXE6hDQKZiNOsAAQOtAAKZCNQE7BDCrBXQCzBZAABiQAABhizBaQirBWk7BDQqZCNutAAQusAAqZiNg");
	this.shape_7.setTransform(399.45,49.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.078)").s().p("A5CFUQk7hCirhXQiyhZAAhiQAAhhCyhZQCrhXE7hCQKYiNOqAAQOsAAKXCNQE6BCCsBXQCyBZABBhQgBBiiyBZQisBXk6BCQqXCNusAAQuqAAqYiNg");
	this.shape_8.setTransform(399.45,49.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.078)").s().p("A5AFUQk6hDirhWQiyhZAAhiQAAhhCyhZQCrhWE6hDQKXiMOpAAQOqAAKXCMQE5BDCsBWQCyBZAABhQAABiiyBZQisBWk5BDQqXCMuqAAQupAAqXiMg");
	this.shape_9.setTransform(399.45,49.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.078)").s().p("A4+FUQk5hDirhWQixhZAAhiQAAhhCxhZQCrhWE5hDQKWiLOoAAQOoAAKWCLQE5BDCrBWQCyBZAABhQAABiiyBZQirBWk5BDQqWCLuoAAQuoAAqWiLg");
	this.shape_10.setTransform(399.475,49.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.078)").s().p("A46FTQk5hDirhWQiyhZAAhhQAAhhCyhZQCrhWE5hCQKUiMOmAAQOnAAKVCMQE4BCCsBWQCxBZAABhQAABhixBZQisBWk4BDQqVCMunAAQumAAqUiMg");
	this.shape_11.setTransform(399.45,49.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.078)").s().p("A44FSQk4hCirhWQixhZAAhhQAAhgCxhZQCrhWE4hCQKTiMOlAAQOlAAKVCMQE3BCCrBWQCxBZAABgQAABhixBZQirBWk3BCQqVCMulAAQulAAqTiMg");
	this.shape_12.setTransform(399.45,49.475);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.078)").s().p("A42FSQk3hCirhWQiwhZAAhhQAAhgCwhZQCrhVE3hDQKTiLOjAAQOkAAKTCLQE3BDCrBVQCwBZAABgQAABhiwBZQirBWk3BCQqTCLukAAQujAAqTiLg");
	this.shape_13.setTransform(399.475,49.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.078)").s().p("A4zFRQk3hCiqhWQixhYAAhhQAAhgCxhZQCqhVE3hCQKRiMOiABQOigBKSCMQE3BCCqBVQCxBZAABgQAABhixBYQiqBWk3BCQqSCMuiAAQuiAAqRiMg");
	this.shape_14.setTransform(399.475,49.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.078)").s().p("A4xFQQk2hBiqhWQiwhYAAhhQAAhgCwhYQCqhWE2hCQKRiLOgAAQOhAAKQCLQE3BCCqBWQCwBYAABgQAABhiwBYQiqBWk3BBQqQCMuhAAQugAAqRiMg");
	this.shape_15.setTransform(399.475,49.675);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.078)").s().p("A4uFQQk2hCiphVQiwhYgBhhQABhgCwhYQCphVE2hCQKQiLOeAAQOgAAKPCLQE2BCCqBVQCwBYAABgQAABhiwBYQiqBVk2BCQqPCLugAAQueAAqQiLg");
	this.shape_16.setTransform(399.45,49.725);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.078)").s().p("A4sFQQk1hCiphVQiwhYAAhhQAAhfCwhZQCphVE1hBQKPiLOdAAQOeAAKOCLQE2BBCpBVQCwBZAABfQAABhiwBYQipBVk2BCQqOCKueAAQudAAqPiKg");
	this.shape_17.setTransform(399.475,49.775);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.078)").s().p("A4pFPQk1hCiphUQivhZAAhgQAAhgCvhXQCphVE1hCQKOiLObABQOcgBKOCLQE1BCCpBVQCvBXAABgQAABgivBZQipBUk1BCQqOCKucAAQubAAqOiKg");
	this.shape_18.setTransform(399.475,49.85);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.078)").s().p("A4mFOQk1hBiphVQivhYAAhfQAAhgCvhYQCphVE1hBQKMiKOagBQObABKMCKQE1BBCpBVQCvBYAABgQAABfivBYQipBVk1BBQqMCKubAAQuaAAqMiKg");
	this.shape_19.setTransform(399.475,49.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.078)").s().p("A4kFOQk0hBiohVQivhYAAhgQAAhfCvhYQCohVE0hBQKMiKOYAAQOZAAKMCKQE0BBCoBVQCvBYAABfQAABgivBYQioBVk0BBQqMCKuZAAQuYAAqMiKg");
	this.shape_20.setTransform(399.475,49.975);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.078)").s().p("A4hFNQk0hBiohUQiuhYAAhgQAAhfCuhXQCohVE0hBQKKiKOXAAQOYAAKKCKQE0BBCoBVQCuBXAABfQAABgiuBYQioBUk0BBQqKCKuYAAQuXAAqKiKg");
	this.shape_21.setTransform(399.475,50.025);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.078)").s().p("A4fFNQkzhCiohUQiuhXAAhgQAAhfCuhXQCohUEzhCQKKiKOVABQOWgBKKCKQEzBCCoBUQCuBXAABfQAABgiuBXQioBUkzBCQqKCJuWAAQuVAAqKiJg");
	this.shape_22.setTransform(399.475,50.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.078)").s().p("A4cFNQkzhBinhVQiuhYAAheQAAhgCuhXQCnhUEzhBQKIiJOUAAQOVAAKICJQEzBBCnBUQCuBXAABgQAABeiuBYQinBVkzBBQqICJuVAAQuUAAqIiJg");
	this.shape_23.setTransform(399.475,50.15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.078)").s().p("A4aFMQkyhBinhUQithYAAhfQAAheCthYQCnhUEyhBQKIiJOSAAQOTAAKICJQEyBBCnBUQCtBYAABeQAABfitBYQinBUkyBBQqICJuTAAQuSAAqIiJg");
	this.shape_24.setTransform(399.475,50.225);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.078)").s().p("A4XFLQkxhBiohUQithXAAhfQAAheCthYQCohUExhAQKGiJORAAQOSAAKGCJQExBACoBUQCtBYAABeQAABfitBXQioBUkxBBQqGCJuSAAQuRAAqGiJg");
	this.shape_25.setTransform(399.475,50.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.078)").s().p("A4UFLQkxhBinhUQithXAAhfQAAheCthXQCnhUExhAQKFiJOPAAQOQAAKFCJQExBACnBUQCtBXAABeQAABfitBXQinBUkxBBQqFCIuQAAQuPAAqFiIg");
	this.shape_26.setTransform(399.475,50.325);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.078)").s().p("A4SFKQkwhBinhTQithXAAheQAAhfCthXQCnhTEwhBQKEiIOOAAQOPAAKECIQEwBBCnBTQCtBXAABfQAABeitBXQinBTkwBBQqECIuPAAQuOAAqEiIg");
	this.shape_27.setTransform(399.475,50.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,255,255,0.078)").s().p("A4PFJQkxhAimhUQishWAAhfQAAheCshWQCmhUExhBQKDiIOMAAQONAAKDCIQEwBBCmBUQCtBWAABeQAABfitBWQimBUkwBAQqDCJuNAAQuMAAqDiJg");
	this.shape_28.setTransform(399.5,50.475);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.078)").s().p("A4NFJQkvhBimhTQishXAAheQAAheCshXQCmhTEvhAQKCiIOLAAQOMAAKCCIQEvBACmBTQCsBXAABeQAABeisBXQimBTkvBBQqCCIuMAAQuLAAqCiIg");
	this.shape_29.setTransform(399.475,50.55);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,255,255,0.078)").s().p("A4KFJQkvhBimhTQishWAAhfQAAhdCshXQCmhTEvhAQKBiIOJAAQOKAAKBCIQEvBACmBTQCsBXAABdQAABfisBWQimBTkvBBQqBCHuKAAQuJAAqBiHg");
	this.shape_30.setTransform(399.475,50.575);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,255,255,0.078)").s().p("A4IFIQkuhAilhUQishWAAheQAAhdCshXQClhTEuhAQKAiIOIABQOJgBKACIQEuBACmBTQCrBXAABdQAABeirBWQimBUkuBAQqACHuJABQuIgBqAiHg");
	this.shape_31.setTransform(399.5,50.65);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,255,255,0.078)").s().p("A4FFHQkuhAimhTQirhWAAheQAAhdCrhWQCmhTEuhAQJ+iIOHAAQOHAAJ/CIQEuBAClBTQCsBWAABdQAABeisBWQilBTkuBAQp/CIuHAAQuHAAp+iIg");
	this.shape_32.setTransform(399.5,50.725);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(255,255,255,0.078)").s().p("A4CFHQkuhAilhTQirhWAAheQAAhdCrhWQClhTEuhAQJ9iHOFAAQOGAAJ+CHQEtBAClBTQCrBWAABdQAABeirBWQilBTktBAQp+CHuGAAQuFAAp9iHg");
	this.shape_33.setTransform(399.475,50.775);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(255,255,255,0.078)").s().p("A4AFGQktg/ikhUQirhVAAheQAAhdCrhVQCkhUEthAQJ9iGODAAQOEAAJ9CGQEtBAClBUQCqBVAABdQAABeiqBVQilBUktA/Qp9CHuEAAQuDAAp9iHg");
	this.shape_34.setTransform(399.475,50.85);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(255,255,255,0.078)").s().p("A39FGQkthAilhTQiphVgBheQABhdCphWQClhSEtg/QJ7iHOCAAQODAAJ7CHQEtA/CkBSQCrBWgBBdQABBeirBVQikBTktBAQp7CHuDgBQuCABp7iHg");
	this.shape_35.setTransform(399.5,50.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(255,255,255,0.078)").s().p("A37FFQksg/ikhTQiqhWAAhdQAAhdCqhVQCkhTEsg/QJ6iHOBAAQOBAAJ7CHQErA/ClBTQCqBVAABdQAABdiqBWQilBTkrA/Qp7CHuBAAQuBAAp6iHg");
	this.shape_36.setTransform(399.5,50.975);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(255,255,255,0.078)").s().p("A34FFQkshAijhSQiqhWAAhdQAAhcCqhWQCjhSEshAQJ5iGN/AAQOAAAJ5CGQEsBACkBSQCpBWAABcQAABdipBWQikBSksBAQp5CGuAAAQt/AAp5iGg");
	this.shape_37.setTransform(399.475,51.025);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(255,255,255,0.078)").s().p("A31FEQkrhAikhSQiqhVAAhdQAAhcCqhWQCkhSErg/QJ4iGN9AAQN/AAJ4CGQErA/CjBSQCqBWAABcQAABdiqBVQijBSkrBAQp4CGt/AAQt9AAp4iGg");
	this.shape_38.setTransform(399.475,51.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(255,255,255,0.078)").s().p("A3zFDQkrg/ijhSQiphVAAhdQAAhcCphVQCjhSErhAQJ3iFN8AAQN9AAJ3CFQEqBACkBSQCpBVAABcQAABdipBVQikBSkqA/Qp3CGt9AAQt8AAp3iGg");
	this.shape_39.setTransform(399.5,51.175);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(255,255,255,0.078)").s().p("A3xFDQkqg/ijhSQiohVgBhdQABhbCohVQCjhSEqhAQJ3iFN6AAQN8AAJ1CFQEqBACkBSQCoBVAABbQAABdioBVQikBSkqA/Qp1CGt8gBQt6ABp3iGg");
	this.shape_40.setTransform(399.5,51.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(255,255,255,0.078)").s().p("A3uFDQkphAijhRQiphVAAhdQAAhcCphVQCjhREpg/QJ1iGN5AAQN6AAJ1CGQEqA/CiBRQCpBVAABcQAABdipBVQiiBRkqBAQp1CFt6AAQt5AAp1iFg");
	this.shape_41.setTransform(399.475,51.275);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(255,255,255,0.078)").s().p("A3rFCQkqg/iihSQiohVAAhcQAAhbCohWQCihREqg/QJziFN4AAQN4AAJ1CFQEoA/CjBRQCoBWAABbQAABcioBVQijBSkoA/Qp1CFt4AAQt4AApziFg");
	this.shape_42.setTransform(399.5,51.35);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(255,255,255,0.078)").s().p("A3pFBQkog/ijhRQinhVAAhcQAAhcCnhUQCjhSEog/QJziEN2AAQN3AAJzCEQEpA/CiBSQCnBUAABcQAABcinBVQiiBRkpA/QpzCFt3AAQt2AApziFg");
	this.shape_43.setTransform(399.5,51.425);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(255,255,255,0.078)").s().p("A3nFBQkng+iihSQiohUAAhdQAAhbCohUQCihSEng+QJziFN0AAQN1AAJyCFQEpA+ChBSQCoBUAABbQAABdioBUQihBSkpA+QpyCFt1AAQt0AApziFg");
	this.shape_44.setTransform(399.5,51.45);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(255,255,255,0.078)").s().p("A3jFAQkog+iihSQiohUAAhcQAAhbCohUQCihSEog+QJwiFNzAAQN0AAJwCFQEoA+CiBSQCoBUgBBbQABBcioBUQiiBSkoA+QpwCFt0AAQtzAApwiFg");
	this.shape_45.setTransform(399.5,51.525);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(255,255,255,0.078)").s().p("A3hE/Qkng+iihRQimhUAAhcQAAhbCmhUQCihSEng+QJviENyAAQNyAAJwCEQEnA+ChBSQCoBUAABbQAABcioBUQihBRknA+QpwCFtyAAQtyAApviFg");
	this.shape_46.setTransform(399.5,51.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(255,255,255,0.078)").s().p("A3fE/Qkmg+ihhRQinhUAAhcQAAhaCnhUQChhSEmg+QJviENwAAQNxAAJuCEQEnA+ChBSQCnBUAABaQAABcinBUQihBRknA+QpuCEtxAAQtwAApviEg");
	this.shape_47.setTransform(399.5,51.65);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(255,255,255,0.078)").s().p("A3cE/Qkmg/ihhRQinhTABhcQgBhbCnhUQChhQEmg/QJuiDNuAAQNwAAJtCDQEmA/ChBQQCnBUgBBbQABBcinBTQihBRkmA/QptCDtwAAQtuAApuiDg");
	this.shape_48.setTransform(399.5,51.725);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(255,255,255,0.078)").s().p("A3ZE+Qkmg+ihhRQimhUAAhbQAAhaCmhUQChhREmg+QJsiENtAAQNuAAJtCEQElA+CgBRQCnBUAABaQAABbinBUQigBRklA+QptCEtuAAQttAApsiEg");
	this.shape_49.setTransform(399.5,51.775);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(255,255,255,0.078)").s().p("A3XE+Qklg/ighQQimhUAAhbQAAhbCmhTQCghQElg/QJsiDNrAAQNsAAJsCDQElA/CgBQQCmBTAABbQAABbimBUQigBQklA/QpsCDtsAAQtrAApsiDg");
	this.shape_50.setTransform(399.5,51.85);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(255,255,255,0.078)").s().p("A3VE9Qkkg+ighQQimhUABhbQgBhaCmhTQCghREkg+QJriDNqAAQNrAAJqCDQElA+CgBRQClBTAABaQAABbilBUQigBQklA+QpqCDtrAAQtqAApriDg");
	this.shape_51.setTransform(399.5,51.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(255,255,255,0.078)").s().p("A3RE8Qklg9ifhRQimhTAAhbQAAhaCmhTQCfhRElg+QJpiCNoAAQNqAAJpCCQEkA+CfBRQCmBTAABaQAABbimBTQifBRkkA9QppCDtqAAQtoAAppiDg");
	this.shape_52.setTransform(399.5,51.975);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(255,255,255,0.078)").s().p("A3PE8Qkkg+ifhQQilhTAAhbQAAhaClhTQCfhQEkg+QJoiDNnAAQNoAAJoCDQEkA+CfBQQClBTAABaQAABbilBTQifBQkkA+QpoCDtoAAQtnAApoiDg");
	this.shape_53.setTransform(399.525,52.025);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(255,255,255,0.078)").s().p("A3NE8Qkig+ighQQilhTAAhbQAAhZClhUQCghQEig9QJoiDNlAAQNmAAJoCDQEjA9CfBQQCkBUABBZQgBBbikBTQifBQkjA+QpoCCtmAAQtlAApoiCg");
	this.shape_54.setTransform(399.5,52.075);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(255,255,255,0.078)").s().p("A3KE7Qkjg9iehRQilhSAAhaQAAhbClhSQCehQEjg+QJniCNjAAQNlAAJmCCQEiA+CfBQQClBSAABbQAABailBSQifBRkiA9QpmCCtlAAQtjAApniCg");
	this.shape_55.setTransform(399.5,52.15);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(255,255,255,0.078)").s().p("A3HE6Qkjg9iehQQilhTABhaQgBhZClhTQCehQEjg9QJliCNiAAQNjAAJmCCQEhA9CfBQQCkBTAABZQAABaikBTQifBQkhA9QpmCCtjAAQtiAApliCg");
	this.shape_56.setTransform(399.5,52.225);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(255,255,255,0.078)").s().p("A3FE6Qkig+iehPQikhTAAhaQAAhZCkhTQCehPEig+QJkiBNhAAQNiAAJkCBQEhA+CfBPQCkBTAABZQAABaikBTQifBPkhA+QpkCBtiAAQthAApkiBg");
	this.shape_57.setTransform(399.525,52.275);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(255,255,255,0.078)").s().p("A3DE5Qkhg9iehPQijhTAAhaQAAhZCjhSQCehQEhg9QJkiCNfAAQNgAAJjCCQEhA9CeBQQCkBSAABZQAABaikBTQieBPkhA9QpjCCtgAAQtfAApkiCg");
	this.shape_58.setTransform(399.525,52.325);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(255,255,255,0.078)").s().p("A2/E4Qkhg8iehQQijhSgBhZQABhaCjhSQCehPEhg+QJiiBNdAAQNfAAJiCBQEgA+CfBPQCjBSAABaQAABZijBSQifBQkgA8QpiCCtfAAQtdAApiiCg");
	this.shape_59.setTransform(399.5,52.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(255,255,255,0.078)").s().p("A29E4Qkgg9iehPQijhSAAhaQAAhZCjhSQCehPEgg9QJhiBNcAAQNdAAJhCBQEgA9CeBPQCjBSAABZQAABaijBSQieBPkgA9QphCBtdAAQtcAAphiBg");
	this.shape_60.setTransform(399.525,52.475);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(255,255,255,0.078)").s().p("A27E4Qkfg9iehPQiihSAAhaQAAhZCihSQCehPEfg9QJgiANbAAQNcAAJgCAQEfA9CdBPQCjBSAABZQAABaijBSQidBPkfA9QpgCAtcAAQtbAApgiAg");
	this.shape_61.setTransform(399.525,52.525);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(255,255,255,0.078)").s().p("A24E3Qkfg9idhPQijhSAAhZQAAhYCjhSQCdhQEfg8QJfiBNZAAQNaAAJfCBQEfA8CdBQQCjBSAABYQAABZijBSQidBPkfA9QpfCBtaAAQtZAApfiBg");
	this.shape_62.setTransform(399.525,52.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(255,255,255,0.078)").s().p("A21E2Qkfg8ichPQijhSAAhYQAAhZCjhSQCchPEfg8QJeiBNXAAQNZAAJeCBQEfA8CcBPQCiBSAABZQAABYiiBSQicBPkfA8QpeCBtZAAQtXAApeiBg");
	this.shape_63.setTransform(399.5,52.65);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(255,255,255,0.078)").s().p("A2zE2Qkeg9ichOQiihSAAhZQAAhYCihSQCchOEeg9QJdiANWAAQNXAAJdCAQEeA9CcBOQCiBSAABYQAABZiiBSQicBOkeA9QpdCAtXAAQtWAApdiAg");
	this.shape_64.setTransform(399.525,52.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(255,255,255,0.078)").s().p("A2xE1Qkdg8ichPQiihRAAhZQAAhYCihRQCchPEdg8QJciANVAAQNWAAJbCAQEeA8CcBPQCiBRAABYQAABZiiBRQicBPkeA8QpbCAtWAAQtVAApciAg");
	this.shape_65.setTransform(399.525,52.775);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(255,255,255,0.078)").s().p("A2uE1Qkdg9ichOQihhRAAhZQAAhYChhRQCchPEdg8QJbiANTAAQNUAAJbCAQEdA8CcBPQChBRAABYQAABZihBRQicBOkdA9QpbB/tUAAQtTAApbh/g");
	this.shape_66.setTransform(399.525,52.85);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(255,255,255,0.078)").s().p("A2rE1Qkdg9ibhOQihhRgBhZQABhXChhSQCbhOEdg9QJZh/NSAAQNTAAJaB/QEcA9CcBOQChBSAABXQAABZihBRQicBOkcA9QpaB/tTAAQtSAApZh/g");
	this.shape_67.setTransform(399.5,52.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(255,255,255,0.078)").s().p("A2pE0Qkcg8ibhOQihhSAAhXQAAhZChhRQCbhOEcg7QJZiANQAAQNRAAJZCAQEcA7CbBOQChBRAABZQAABXihBSQibBOkcA8QpZB/tRAAQtQAApZh/g");
	this.shape_68.setTransform(399.525,52.95);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(255,255,255,0.078)").s().p("A2rE0Qkdg8ibhOQihhSAAhYQAAhYChhRQCbhOEdg9QJZh/NSAAQNTAAJZB/QEdA9CbBOQChBRAABYQAABYihBSQibBOkdA8QpZCAtTAAQtSAApZiAg");
	this.shape_69.setTransform(399.525,52.925);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(255,255,255,0.078)").s().p("A2tE1Qkeg9ibhOQiihRAAhZQAAhYCihRQCbhOEeg9QJaiANTAAQNVAAJaCAQEdA9CcBOQChBRAABYQAABZihBRQicBOkdA9QpaB/tVAAQtTAApah/g");
	this.shape_70.setTransform(399.5,52.85);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(255,255,255,0.078)").s().p("A2wE1Qkeg8ichPQiihRAAhZQAAhYCihRQCchPEeg8QJbiANVAAQNWAAJbCAQEeA8CcBPQCiBRAABYQAABZiiBRQicBPkeA8QpbCAtWAAQtVAApbiAg");
	this.shape_71.setTransform(399.525,52.775);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(255,255,255,0.078)").s().p("A2zE2Qkeg9ichOQiihSAAhZQAAhYCihSQCchOEeg8QJdiBNWAAQNXAAJdCBQEeA8CcBOQCiBSAABYQAABZiiBSQicBOkeA9QpdCAtXAAQtWAApdiAg");
	this.shape_72.setTransform(399.525,52.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(255,255,255,0.078)").s().p("A21E2Qkfg8idhPQiihSAAhZQAAhYCihSQCdhPEfg9QJdiANYAAQNZAAJdCAQEfA9CcBPQCjBSAABYQAABZijBSQicBPkfA8QpdCBtZAAQtYAApdiBg");
	this.shape_73.setTransform(399.525,52.675);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(255,255,255,0.078)").s().p("A24E3Qkfg9idhPQiihSAAhZQAAhYCihSQCdhQEfg8QJfiBNZAAQNaAAJfCBQEfA8CdBQQCiBSAABYQAABZiiBSQidBPkfA9QpfCBtaAAQtZAApfiBg");
	this.shape_74.setTransform(399.525,52.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(255,255,255,0.078)").s().p("A27E4Qkfg9idhPQijhSAAhaQAAhYCjhTQCdhPEfg8QJgiBNbAAQNcAAJfCBQEgA8CdBPQCjBTAABYQAABaijBSQidBPkgA9QpfCAtcAAQtbAApgiAg");
	this.shape_75.setTransform(399.525,52.525);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(255,255,255,0.078)").s().p("A29E4Qkgg9idhPQikhSAAhaQAAhZCkhSQCdhPEgg9QJhiBNcAAQNdAAJhCBQEgA9CdBPQCjBSAABZQAABaijBSQidBPkgA9QphCBtdAAQtcAAphiBg");
	this.shape_76.setTransform(399.5,52.475);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(255,255,255,0.078)").s().p("A2/E4Qkhg9iehPQijhSAAhaQAAhZCjhSQCehQEhg9QJiiBNdAAQNfAAJiCBQEgA9CeBQQCjBSAABZQAABaijBSQieBPkgA9QpiCCtfAAQtdAApiiCg");
	this.shape_77.setTransform(399.5,52.425);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(255,255,255,0.078)").s().p("A3CE5Qkhg9iehQQijhSAAhaQAAhZCjhTQCehPEhg9QJjiCNfAAQNgAAJjCCQEhA9CeBPQCkBTgBBZQABBaikBSQieBQkhA9QpjCBtgAAQtfAApjiBg");
	this.shape_78.setTransform(399.5,52.35);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(255,255,255,0.078)").s().p("A3FE6Qkhg9iehQQikhTAAhaQAAhZCkhTQCehPEhg+QJkiBNhAAQNhAAJkCBQEiA+CeBPQCkBTAABZQAABaikBTQieBQkiA9QpkCBthAAQthAApkiBg");
	this.shape_79.setTransform(399.525,52.275);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(255,255,255,0.078)").s().p("A3HE6Qkig9ifhQQikhTAAhaQAAhZCkhTQCfhQEig9QJliCNiAAQNjAAJlCCQEiA9CeBQQClBTAABZQAABailBTQieBQkiA9QplCCtjAAQtiAApliCg");
	this.shape_80.setTransform(399.525,52.225);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(255,255,255,0.078)").s().p("A3KE7Qkig+ifhQQikhTAAhaQAAhaCkhSQCfhQEig+QJmiCNkAAQNkAAJmCCQEjA+CfBQQCkBSAABaQAABaikBTQifBQkjA+QpmCCtkAAQtkAApmiCg");
	this.shape_81.setTransform(399.525,52.175);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(255,255,255,0.078)").s().p("A3ME7Qkjg9ifhQQilhTAAhbQAAhZClhUQCfhQEjg9QJniDNlABQNmgBJnCDQEjA9CfBQQClBUAABZQAABbilBTQifBQkjA9QpnCDtmAAQtlAApniDg");
	this.shape_82.setTransform(399.5,52.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(255,255,255,0.078)").s().p("A3PE8Qkjg+ighQQikhUAAhaQAAhaCkhTQCghQEjg+QJpiCNmgBQNoABJoCCQEjA+CgBQQCkBTAABaQAABaikBUQigBQkjA+QpoCDtogBQtmABppiDg");
	this.shape_83.setTransform(399.5,52.05);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(255,255,255,0.078)").s().p("A3RE8Qkkg9ifhRQimhTAAhbQAAhaCmhTQCfhQEkg+QJpiDNoAAQNpAAJpCDQEkA+CfBQQCmBTAABaQAABbimBTQifBRkkA9QppCDtpAAQtoAAppiDg");
	this.shape_84.setTransform(399.5,51.975);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(255,255,255,0.078)").s().p("A3TE9Qklg+ighRQilhTAAhbQAAhaClhUQCghQElg+QJpiDNqAAQNrAAJqCDQEkA+CgBQQClBUABBaQgBBbilBTQigBRkkA+QpqCDtrAAQtqAAppiDg");
	this.shape_85.setTransform(399.5,51.925);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(255,255,255,0.078)").s().p("A3WE+Qklg/ighQQimhUAAhaQAAhbCmhUQCghQElg/QJriCNrAAQNsAAJsCCQEkA/ChBQQClBUAABbQAABailBUQihBQkkA/QpsCDtsgBQtrABpriDg");
	this.shape_86.setTransform(399.5,51.85);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(255,255,255,0.078)").s().p("A3ZE+Qklg+ihhRQimhUAAhbQAAhbCmhTQChhRElg+QJsiENtAAQNtAAJtCEQElA+CgBRQCnBTAABbQAABbinBUQigBRklA+QptCEttAAQttAApsiEg");
	this.shape_87.setTransform(399.525,51.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(255,255,255,0.078)").s().p("A3bE/Qkmg/ihhRQinhTABhcQgBhaCnhUQChhREmg+QJtiENuAAQNvAAJtCEQEmA+ChBRQCmBUAABaQAABcimBTQihBRkmA/QptCDtvAAQtuAAptiDg");
	this.shape_88.setTransform(399.5,51.725);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(255,255,255,0.078)").s().p("A3eE/Qkmg+ihhRQinhUAAhcQAAhbCnhUQChhREmg+QJviENvAAQNxAAJuCEQEmA+ChBRQCnBUAABbQAABcinBUQihBRkmA+QpuCEtxAAQtvAApviEg");
	this.shape_89.setTransform(399.5,51.675);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(255,255,255,0.078)").s().p("A3hE/Qkmg+iihRQimhUAAhcQAAhbCmhUQCihREmg/QJwiENxAAQNyAAJwCEQEmA/ChBRQCoBUAABbQAABcioBUQihBRkmA+QpwCFtyAAQtxAApwiFg");
	this.shape_90.setTransform(399.5,51.625);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(255,255,255,0.078)").s().p("A3jFAQkng+iihRQinhVAAhcQAAhbCnhUQCihREng/QJwiFNzAAQNzAAJxCFQEnA/CiBRQCnBUAABbQAABcinBVQiiBRknA+QpxCFtzAAQtzAApwiFg");
	this.shape_91.setTransform(399.5,51.55);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(255,255,255,0.078)").s().p("A3lFBQkog/iihRQinhVgBhcQABhbCnhUQCihSEog/QJxiEN0AAQN1AAJxCEQEoA/CiBSQCoBUAABbQAABcioBVQiiBRkoA/QpxCEt1AAQt0AApxiEg");
	this.shape_92.setTransform(399.5,51.475);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(255,255,255,0.078)").s().p("A3oFBQkog/ijhRQinhVAAhcQAAhbCnhVQCjhREog/QJyiFN2AAQN3AAJyCFQEoA/CiBRQCoBVAABbQAABcioBVQiiBRkoA/QpyCFt3AAQt2AApyiFg");
	this.shape_93.setTransform(399.5,51.425);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(255,255,255,0.078)").s().p("A3qFCQkpg/iihSQiphVAAhcQAAhcCphUQCihSEpg/QJziFN3AAQN4AAJ0CFQEoA/CjBSQCoBUAABcQAABcioBVQijBSkoA/Qp0CFt4AAQt3AApziFg");
	this.shape_94.setTransform(399.475,51.375);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(255,255,255,0.078)").s().p("A3tFCQkqg+iihTQiohVAAhbQAAhcCohVQCihSEqg/QJ1iGN4ABQN5gBJ1CGQEpA/CjBSQCoBVABBcQgBBbioBVQijBTkpA+Qp1CFt5AAQt4AAp1iFg");
	this.shape_95.setTransform(399.5,51.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(255,255,255,0.078)").s().p("A3wFDQkqg/iihSQiphVAAhdQAAhcCphVQCihREqhAQJ2iFN6AAQN7AAJ1CFQEqBACjBRQCpBVAABcQAABdipBVQijBSkqA/Qp1CFt7AAQt6AAp2iFg");
	this.shape_96.setTransform(399.5,51.225);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(255,255,255,0.078)").s().p("A3yFDQkqg/ijhSQiqhVAAhdQAAhcCqhVQCjhSEqhAQJ2iFN8AAQN8AAJ3CFQEqBACkBSQCoBVABBcQgBBdioBVQikBSkqA/Qp3CGt8AAQt8AAp2iGg");
	this.shape_97.setTransform(399.5,51.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(255,255,255,0.078)").s().p("A30FEQkrhAikhSQiphVAAhdQAAhcCphVQCkhTErg/QJ3iGN9AAQN9AAJ5CGQEqA/CjBTQCqBVAABcQAABdiqBVQijBSkqBAQp5CGt9AAQt9AAp3iGg");
	this.shape_98.setTransform(399.5,51.125);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(255,255,255,0.078)").s().p("A33FFQkrhAikhSQiqhWAAhcQAAhdCqhVQCkhTErg/QJ5iGN+AAQN/AAJ5CGQErA/CkBTQCqBVgBBdQABBciqBWQikBSkrBAQp5CGt/AAQt+AAp5iGg");
	this.shape_99.setTransform(399.5,51.05);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("rgba(255,255,255,0.078)").s().p("A35FFQksg/ikhTQiqhVAAheQAAhcCqhWQCkhSEshAQJ5iGOAAAQOBAAJ6CGQErBACkBSQCqBWAABcQAABeiqBVQikBTkrA/Qp6CGuBAAQuAAAp5iGg");
	this.shape_100.setTransform(399.475,50.975);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(255,255,255,0.078)").s().p("A38FGQkshBikhSQirhVAAheQAAhdCrhVQCkhTEshAQJ7iGOBAAQOCAAJ7CGQEsBAClBTQCqBVAABdQAABeiqBVQilBSksBBQp7CGuCAAQuBAAp7iGg");
	this.shape_101.setTransform(399.475,50.95);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("rgba(255,255,255,0.078)").s().p("A3+FGQkuhAikhSQirhWAAheQAAhdCrhVQCkhTEuhAQJ7iHODAAQOEAAJ7CHQEtBAClBTQCrBVAABdQAABeirBWQilBSktBAQp7CHuEAAQuDAAp7iHg");
	this.shape_102.setTransform(399.5,50.875);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(255,255,255,0.078)").s().p("A4CFGQktg/ikhTQirhWAAheQAAhdCrhWQCkhTEtg/QJ+iHOEAAQOFAAJ9CHQEtA/ClBTQCrBWAABdQAABeirBWQilBTktA/Qp9CHuFAAQuEAAp+iHg");
	this.shape_103.setTransform(399.5,50.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(255,255,255,0.078)").s().p("A4EFHQkthAimhTQiqhWgBheQABhdCqhWQCmhTEthAQJ+iHOGAAQOGAAJ/CHQEtBAClBTQCrBWAABdQAABeirBWQilBTktBAQp/CHuGAAQuGAAp+iHg");
	this.shape_104.setTransform(399.5,50.775);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(255,255,255,0.078)").s().p("A4GFHQkuhAimhSQirhXAAheQAAheCrhVQCmhTEuhBQJ/iHOHAAQOIAAJ/CHQEvBBClBTQCrBVAABeQAABeirBXQilBSkvBAQp/CIuIAAQuHAAp/iIg");
	this.shape_105.setTransform(399.475,50.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("rgba(255,255,255,0.078)").s().p("A4JFIQkuhAimhTQishXAAheQAAhdCshXQCmhTEuhAQKBiIOIAAQOKAAKACIQEvBAClBTQCsBXAABdQAABeisBXQilBTkvBAQqACIuKAAQuIAAqBiIg");
	this.shape_106.setTransform(399.475,50.625);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("rgba(255,255,255,0.078)").s().p("A4LFJQkvhBimhTQishXAAheQAAheCshWQCmhTEvhAQKBiIOKAAQOLAAKBCIQEwBAClBTQCsBWAABeQAABeisBXQilBTkwBBQqBCHuLABQuKgBqBiHg");
	this.shape_107.setTransform(399.475,50.55);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("rgba(255,255,255,0.078)").s().p("A4OFJQkvhAinhUQishWAAhfQAAheCshWQCnhUEvhAQKDiIOLAAQONAAKCCIQEwBACmBUQCsBWAABeQAABfisBWQimBUkwBAQqCCIuNAAQuLAAqDiIg");
	this.shape_108.setTransform(399.475,50.525);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("rgba(255,255,255,0.078)").s().p("A4QFKQkwhBinhUQishWAAhfQAAheCshWQCnhUEwhBQKDiIONAAQOOAAKDCIQExBBCmBUQCsBWAABeQAABfisBWQimBUkxBBQqDCIuOAAQuNAAqDiIg");
	this.shape_109.setTransform(399.475,50.45);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("rgba(255,255,255,0.078)").s().p("A4TFKQkxhAinhUQishXAAhfQAAheCshXQCnhUExhAQKEiJOPAAQOPAAKECJQEyBACmBUQCtBXAABeQAABfitBXQimBUkyBAQqECJuPAAQuPAAqEiJg");
	this.shape_110.setTransform(399.5,50.375);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("rgba(255,255,255,0.078)").s().p("A4VFLQkyhBimhUQiuhXAAhfQAAheCuhXQCmhUEyhBQKFiJOQAAQORAAKFCJQEyBBCnBUQCtBXAABeQAABfitBXQinBUkyBBQqFCJuRAAQuQAAqFiJg");
	this.shape_111.setTransform(399.475,50.325);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("rgba(255,255,255,0.078)").s().p("A4YFLQkyhBinhUQithXAAhfQAAheCthYQCnhUEyhAQKHiJORAAQOSAAKHCJQEyBACnBUQCtBYAABeQAABfitBXQinBUkyBBQqHCJuSAAQuRAAqHiJg");
	this.shape_112.setTransform(399.475,50.275);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("rgba(255,255,255,0.078)").s().p("A4aFMQkzhBinhUQiuhYAAhfQAAhfCuhWQCnhVEzhBQKHiJOTAAQOUAAKHCJQEzBBCnBVQCuBWAABfQAABfiuBYQinBUkzBBQqHCJuUAAQuTAAqHiJg");
	this.shape_113.setTransform(399.475,50.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("rgba(255,255,255,0.078)").s().p("A4dFNQkzhBinhVQiuhXAAhgQAAhfCuhXQCnhUEzhBQKJiKOUAAQOVAAKJCKQEzBBCnBUQCuBXAABfQAABgiuBXQinBVkzBBQqJCJuVAAQuUAAqJiJg");
	this.shape_114.setTransform(399.475,50.125);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("rgba(255,255,255,0.078)").s().p("A4fFNQk0hBiohVQiuhXAAhgQAAhfCuhXQCohVE0hBQKJiKOWAAQOXAAKJCKQE0BBCoBVQCuBXAABfQAABgiuBXQioBVk0BBQqJCKuXAAQuWAAqJiKg");
	this.shape_115.setTransform(399.475,50.075);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("rgba(255,255,255,0.078)").s().p("A4iFNQk0hBiohUQiuhYAAhgQAAhfCuhYQCohUE0hCQKLiJOXAAQOYAAKLCJQE0BCCoBUQCuBYAABfQAABgiuBYQioBUk0BBQqLCKuYAAQuXAAqLiKg");
	this.shape_116.setTransform(399.475,50.025);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("rgba(255,255,255,0.078)").s().p("A4lFOQk0hBiohVQivhYAAhfQAAhgCvhYQCohVE0hBQKNiKOZAAQOZAAKMCKQE0BBCpBVQCuBYAABgQAABfiuBYQipBVk0BBQqMCKuZAAQuZAAqNiKg");
	this.shape_117.setTransform(399.45,49.95);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("rgba(255,255,255,0.078)").s().p("A4nFOQk1hBiphVQivhYAAhgQAAhfCvhZQCphUE1hBQKNiLOaAAQObAAKNCLQE1BBCoBUQCwBZAABfQAABgiwBYQioBVk1BBQqNCLubAAQuaAAqNiLg");
	this.shape_118.setTransform(399.475,49.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("rgba(255,255,255,0.078)").s().p("A4qFPQk1hBiphVQivhZAAhgQAAhfCvhYQCphVE1hCQKOiLOcAAQOdAAKNCLQE2BCCpBVQCvBYAABfQAABgivBZQipBVk2BBQqNCLudAAQucAAqOiLg");
	this.shape_119.setTransform(399.475,49.825);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("rgba(255,255,255,0.078)").s().p("A4sFQQk2hCiphVQiwhYAAhhQAAhgCwhYQCphVE2hCQKPiKOdAAQOeAAKPCKQE2BCCpBVQCwBYAABgQAABhiwBYQipBVk2BCQqPCKueAAQudAAqPiKg");
	this.shape_120.setTransform(399.475,49.775);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("rgba(255,255,255,0.078)").s().p("A4vFQQk2hCiphVQiwhYAAhgQAAhhCwhYQCphWE2hBQKQiLOfAAQOgAAKQCLQE2BBCpBWQCwBYAABhQAABgiwBYQipBVk2BCQqQCLugAAQufAAqQiLg");
	this.shape_121.setTransform(399.475,49.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("rgba(255,255,255,0.078)").s().p("A4xFRQk3hCiqhVQiwhZAAhhQAAhgCwhYQCqhWE3hCQKRiLOgAAQOhAAKRCLQE3BCCqBWQCwBYAABgQAABhiwBZQiqBVk3BCQqRCLuhAAQugAAqRiLg");
	this.shape_122.setTransform(399.475,49.65);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("rgba(255,255,255,0.078)").s().p("A40FRQk3hCiqhVQixhZAAhhQAAhgCxhZQCqhVE3hCQKSiMOiAAQOjAAKSCMQE3BCCqBVQCwBZAABgQAABhiwBZQiqBVk3BCQqSCMujAAQuiAAqSiMg");
	this.shape_123.setTransform(399.45,49.575);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("rgba(255,255,255,0.078)").s().p("A42FSQk4hCiqhWQixhZAAhhQAAhgCxhZQCqhWE4hCQKTiLOjAAQOkAAKUCLQE3BCCqBWQCxBZAABgQAABhixBZQiqBWk3BCQqUCLukAAQujAAqTiLg");
	this.shape_124.setTransform(399.45,49.525);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("rgba(255,255,255,0.078)").s().p("A44FSQk4hCishWQixhZAAhhQAAhgCxhZQCshWE4hCQKUiMOkAAQOmAAKUCMQE4BCCrBWQCxBZgBBgQABBhixBZQirBWk4BCQqUCMumAAQukAAqUiMg");
	this.shape_125.setTransform(399.45,49.475);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("rgba(255,255,255,0.078)").s().p("A47FTQk5hDirhWQixhYAAhiQAAhhCxhYQCrhXE5hCQKViMOmAAQOnAAKVCMQE5BCCrBXQCxBYAABhQAABiixBYQirBWk5BDQqVCMunAAQumAAqViMg");
	this.shape_126.setTransform(399.475,49.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("rgba(255,255,255,0.078)").s().p("A4+FUQk5hDirhWQiyhZAAhiQAAhhCyhZQCrhWE5hCQKWiNOoAAQOpAAKWCNQE5BCCrBWQCyBZAABhQAABiiyBZQirBWk5BDQqWCMupAAQuoAAqWiMg");
	this.shape_127.setTransform(399.475,49.325);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("rgba(255,255,255,0.078)").s().p("A5AFUQk6hDishWQixhZAAhiQAAhhCxhZQCshWE6hDQKXiMOpAAQOqAAKXCMQE6BDCrBWQCyBZAABhQAABiiyBZQirBWk6BDQqXCMuqAAQupAAqXiMg");
	this.shape_128.setTransform(399.475,49.275);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("rgba(255,255,255,0.078)").s().p("A5CFUQk7hCirhXQizhZAAhiQAAhhCzhZQCrhXE7hDQKYiMOqAAQOrAAKZCMQE6BDCsBXQCyBZAABhQAABiiyBZQisBXk6BCQqZCNurAAQuqAAqYiNg");
	this.shape_129.setTransform(399.45,49.225);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("rgba(255,255,255,0.078)").s().p("A5FFVQk7hDishWQiyhagBhhQABhiCyhZQCshXE7hDQKZiNOsAAQOtAAKZCNQE7BDCsBXQCyBZAABiQAABhiyBaQisBWk7BDQqZCNutAAQusAAqZiNg");
	this.shape_130.setTransform(399.45,49.15);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("rgba(255,255,255,0.078)").s().p("A5IFWQk7hDishXQizhaAAhiQAAhhCzhaQCshWE7hDQKbiOOtAAQOvAAKaCOQE7BDCtBWQCyBaAABhQAABiiyBaQitBXk7BDQqaCNuvAAQutAAqbiNg");
	this.shape_131.setTransform(399.45,49.075);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("rgba(255,255,255,0.078)").s().p("A5KFWQk8hDishXQi0haABhiQgBhiC0hZQCshYE8hDQKbiMOvAAQOwAAKcCMQE7BDCsBYQCzBZAABiQAABiizBaQisBXk7BDQqcCNuwAAQuvAAqbiNg");
	this.shape_132.setTransform(399.45,49.05);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("rgba(255,255,255,0.078)").s().p("A5NFXQk8hEithWQizhaAAhjQAAhiCzhaQCthXE8hDQKdiNOwAAQOxAAKdCNQE8BDCtBXQCzBaAABiQAABjizBaQitBWk8BEQqdCNuxAAQuwAAqdiNg");
	this.shape_133.setTransform(399.45,48.975);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("rgba(255,255,255,0.078)").s().p("A5QFXQk8hDithXQi0haAAhiQAAhiC0hbQCthXE8hDQKeiOOyAAQOzAAKdCOQE9BDCtBXQC0BbAABiQAABii0BaQitBXk9BDQqdCOuzAAQuyAAqeiOg");
	this.shape_134.setTransform(399.475,48.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("rgba(255,255,255,0.078)").s().p("A5SFYQk9hDiuhYQi0haAAhjQAAhiC0haQCuhXE9hDQKfiPOzAAQO1AAKeCPQE9BDCtBXQC1BagBBiQABBji1BaQitBYk9BDQqeCOu1AAQuzAAqfiOg");
	this.shape_135.setTransform(399.45,48.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{scaleX:1,scaleY:1,x:399.45,y:48.725}}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape,p:{scaleX:0.8911,scaleY:0.8911,x:399.5261,y:53.0278}}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape,p:{scaleX:1,scaleY:1,x:399.45,y:48.725}}]},1).wait(1));

	// Layer_3
	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("rgba(255,255,255,0.176)").s().p("A0EKFQpQg1nJhhQnIhhj7h+QkDiCAAiOQAAiOEDiCQD6h9HJhhQHJhhJQg1QJmg3KeAAQKfAAJlA3QJRA1HIBhQHJBhD7B9QEDCCAACOQAACOkDCCQj7B+nJBhQnIBhpRA1QplA3qfAAQqfAAplg3g");
	this.shape_136.setTransform(399.475,70.025);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("rgba(255,255,255,0.176)").s().p("A0CKEQpPg0nIhhQnIhhj6h+QkDiCAAiOQAAiNEDiCQD6h+HIhgQHIhhJPg1QJlg3KdAAQKeAAJkA3QJQA1HIBhQHIBgD6B+QEDCCAACNQAACOkDCCQj6B+nIBhQnIBhpQA0QpkA3qeAAQqeAApkg3g");
	this.shape_137.setTransform(399.475,70.05);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("rgba(255,255,255,0.176)").s().p("A0AKDQpOg1nHhhQnHhgj6h+QkDiCAAiNQAAiOEDiBQD5h9HIhhQHHhgJOg1QJkg3KcAAQKdAAJjA3QJPA1HHBgQHHBhD6B9QEDCBAACOQAACNkDCCQj6B+nHBgQnHBhpPA1QpjA3qdAAQqdAApjg3g");
	this.shape_138.setTransform(399.475,70.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("rgba(255,255,255,0.176)").s().p("Az+KDQpNg1nHhhQnGhgj5h+QkDiCAAiNQAAiNEDiCQD4h9HHhgQHHhhJNg0QJjg3KbAAQKcAAJiA3QJOA0HGBhQHHBgD5B9QEDCCAACNQAACNkDCCQj5B+nHBgQnGBhpOA1QpiA2qcAAQqcAApig2g");
	this.shape_139.setTransform(399.475,70.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("rgba(255,255,255,0.176)").s().p("Az8KBQpMg0nGhhQnGhgj5h9QkBiBAAiOQAAiNEBiBQD5h9HGhgQHGhgJMg1QJig3KaAAQKbAAJhA3QJNA1HGBgQHGBgD5B9QEBCBAACNQAACOkBCBQj5B9nGBgQnGBhpNA0QphA3qbAAQqaAApig3g");
	this.shape_140.setTransform(399.475,70.125);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("rgba(255,255,255,0.176)").s().p("Az6KAQpLg0nFhhQnFhgj5h9QkBiBAAiNQAAiNEBiBQD4h8HGhgQHFhhJLg0QJhg3KZAAQKZAAJhA3QJMA0HFBhQHFBgD5B8QEBCBAACNQAACNkBCBQj5B9nFBgQnFBhpMA0QpgA3qaAAQqZAAphg3g");
	this.shape_141.setTransform(399.475,70.175);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("rgba(255,255,255,0.176)").s().p("Az4J/QpKg1nFhfQnEhgj4h+QkBiAAAiNQAAiMEBiBQD4h8HEhhQHFhfJKg1QJgg3KYAAQKYAAJgA3QJLA1HEBfQHEBhD5B8QEBCBAACMQAACNkBCAQj5B+nEBgQnEBfpLA1QpfA3qZAAQqZAApfg3g");
	this.shape_142.setTransform(399.5,70.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("rgba(255,255,255,0.176)").s().p("Az1J+QpKg0nEhgQnDhgj4h9QkBiAAAiNQAAiMEBiBQD3h8HEhgQHEhgJKg0QJeg3KXAAQKXAAJfA3QJKA0HEBgQHEBgD3B8QEBCBAACMQAACNkBCAQj3B9nEBgQnEBgpKA0QpeA3qYAAQqXAApeg3g");
	this.shape_143.setTransform(399.475,70.225);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("rgba(255,255,255,0.176)").s().p("AzzJ9QpJg0nDhgQnDhfj3h9QkBiAAAiNQAAiMEBiBQD3h7HDhgQHDhfJJg1QJdg2KWgBQKWABJeA2QJJA1HDBfQHDBgD3B7QEBCBAACMQAACNkBCAQj3B9nDBfQnDBgpJA0QpdA2qXABQqWgBpdg2g");
	this.shape_144.setTransform(399.475,70.25);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("rgba(255,255,255,0.176)").s().p("AzxJ8QpIg0nChgQnDhfj2h9QkAiAAAiMQAAiMEAiAQD2h8HDhfQHChgJIg0QJcg2KVAAQKVAAJdA2QJIA0HCBgQHDBfD3B8QD/CAAACMQAACMj/CAQj3B9nDBfQnCBgpIA0QpcA2qWAAQqVAApcg2g");
	this.shape_145.setTransform(399.475,70.275);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("rgba(255,255,255,0.176)").s().p("AzvJ7QpHg0nChgQnBhfj3h8Qj/iAAAiMQAAiMD/iAQD2h7HChgQHChfJHg0QJbg2KUAAQKUAAJcA2QJHA0HCBfQHBBgD3B7QD/CAAACMQAACMj/CAQj3B8nBBfQnCBgpHA0QpbA2qVAAQqUAApbg2g");
	this.shape_146.setTransform(399.475,70.325);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("rgba(255,255,255,0.176)").s().p("AzuJ6QpFg0nBhgQnBhfj2h7Qj/iBAAiLQAAiMD/h/QD1h7HChgQHBhfJFg0QJcg2KSAAQKTAAJbA2QJGA0HABfQHBBgD3B7QD/B/AACMQAACLj/CBQj3B7nBBfQnABgpGA0QpbA2qTAAQqTAApbg2g");
	this.shape_147.setTransform(399.5,70.35);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("rgba(255,255,255,0.176)").s().p("AzrJ5QpFg0nAhfQnAhfj2h7Qj/iAAAiMQAAiLD/iAQD1h7HBhfQHAhfJFg0QJag2KRAAQKSAAJaA2QJFA0HABfQHBBfD1B7QD/CAAACLQAACMj/CAQj1B7nBBfQnABfpFA0QpZA2qTAAQqSAApZg2g");
	this.shape_148.setTransform(399.475,70.35);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("rgba(255,255,255,0.176)").s().p("AzpJ4QpEg0nAhfQm/hfj2h8Qj9h+gBiMQABiLD9h/QD2h7G/hfQHAhfJEg0QJZg2KQAAQKRAAJZA2QJEA0G/BfQHABfD1B7QD/B/AACLQAACMj/B+Qj1B8nABfQm/BfpEA0QpZA2qRAAQqRAApYg2g");
	this.shape_149.setTransform(399.5,70.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("rgba(255,255,255,0.176)").s().p("AznJ3QpDg0m/hfQm+hfj1h7Qj/h/ABiLQgBiLD/h/QD0h6G/hfQG/hfJDg0QJYg2KPAAQKQAAJYA2QJDA0G/BfQG/BfD1B6QD+B/AACLQAACLj+B/Qj1B7m/BfQm/BfpDA0QpXA2qRAAQqQAApXg2g");
	this.shape_150.setTransform(399.5,70.425);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("rgba(255,255,255,0.176)").s().p("AzmJ2QpCg0m+hfQm+hej0h7Qj9h/AAiLQAAiLD9h+QD0h7G+heQG+hfJCg0QJXg2KPAAQKPAAJXA2QJCA0G+BfQG+BeD0B7QD+B+AACLQAACLj+B/Qj0B7m+BeQm+BfpCA0QpXA2qPgBQqPABpXg2g");
	this.shape_151.setTransform(399.5,70.45);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("rgba(255,255,255,0.176)").s().p("AzkJ1QpBg0m9hfQm9hej0h7Qj9h/AAiKQAAiLD9h+QD0h6G9hfQG9heJBg0QJXg2KNAAQKOAAJWA2QJCA0G8BeQG+BfD0B6QD9B+AACLQAACKj9B/Qj0B7m+BeQm8BfpCA0QpWA2qOAAQqOAApWg2g");
	this.shape_152.setTransform(399.5,70.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("rgba(255,255,255,0.176)").s().p("AzhJ0QpAg0m9heQm8hej0h7Qj9h+AAiLQAAiKD9h/QDzh6G9heQG9heJAg0QJVg1KMgBQKNABJVA1QJBA0G8BeQG9BeDzB6QD9B/AACKQAACLj9B+QjzB7m9BeQm8BepBA0QpVA2qNAAQqNAApUg2g");
	this.shape_153.setTransform(399.475,70.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("rgba(255,255,255,0.176)").s().p("AzfJzQpAg0m8heQm7hej0h6Qj8h/AAiKQAAiJD8h/QD0h6G7heQG8hfJAgzQJUg2KLABQKLgBJVA2QJAAzG7BfQG8BeD0B6QD7B/ABCJQgBCKj7B/Qj0B6m8BeQm7BepAA0QpUA2qMgBQqLABpUg2g");
	this.shape_154.setTransform(399.5,70.55);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("rgba(255,255,255,0.176)").s().p("AzdJyQo/g0m7heQm6hejzh6Qj8h+AAiKQAAiJD8h/QDyh5G7heQG7heI/g0QJTg1KKAAQKLAAJTA1QI/A0G6BeQG7BeDzB5QD9B/gBCJQABCKj9B+QjzB6m7BeQm6Beo/A0QpTA1qLAAQqKAApTg1g");
	this.shape_155.setTransform(399.5,70.575);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("rgba(255,255,255,0.176)").s().p("AzcJxQo8g0m7heQm6hejzh6Qj7h9AAiKQAAiJD7h+QDzh5G6heQG7heI8g0QJTg1KJAAQKKAAJSA1QI+A0G5BeQG7BeDzB5QD7B+AACJQAACKj7B9QjzB6m7BeQm5Beo+A0QpSA1qKAAQqJAApTg1g");
	this.shape_156.setTransform(399.5,70.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("rgba(255,255,255,0.176)").s().p("AzZJwQo9gzm5heQm6hejyh6Qj7h9AAiKQAAiJD7h+QDxh5G7heQG5heI9gzQJRg1KIAAQKIAAJRA1QI+AzG5BeQG6BeDyB5QD7B+AACJQAACKj7B9QjyB6m6BeQm5Beo+AzQpQA1qJAAQqIAApRg1g");
	this.shape_157.setTransform(399.5,70.625);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("rgba(255,255,255,0.176)").s().p("AzXJvQo7gzm6heQm5hejxh5Qj7h+AAiJQAAiID7h+QDxh5G5heQG6hdI7g0QJQg1KHAAQKHAAJQA1QI8A0G5BdQG6BeDxB5QD7B+gBCIQABCJj7B+QjxB5m6BeQm5Beo8AzQpPA1qIAAQqHAApQg1g");
	this.shape_158.setTransform(399.5,70.65);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("rgba(255,255,255,0.176)").s().p("AzVJuQo6gzm5heQm4hdjxh6Qj7h9AAiJQAAiID7h+QDwh5G5hdQG5heI6gzQJPg1KGAAQKHAAJPA1QI7AzG3BeQG5BdDxB5QD7B+AACIQAACJj7B9QjxB6m5BdQm3Beo7AzQpPA1qHAAQqGAApPg1g");
	this.shape_159.setTransform(399.5,70.675);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("rgba(255,255,255,0.176)").s().p("AzTJtQo6gzm3heQm4hdjxh5Qj5h9AAiJQAAiID5h+QDxh4G4heQG3hdI6gzQJOg1KFAAQKGAAJOA1QI6AzG3BdQG4BeDwB4QD7B+gBCIQABCJj7B9QjwB5m4BdQm3Beo6AzQpOA1qGAAQqGAApNg1g");
	this.shape_160.setTransform(399.5,70.725);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("rgba(255,255,255,0.176)").s().p("AzRJrQo4gym4heQm2hcjwh5Qj6h+AAiIQAAiID6h9QDwh4G2hdQG4heI4gzQJNg1KEABQKEgBJNA1QI6AzG2BeQG3BdDxB4QD5B9AACIQAACIj5B+QjxB5m3BcQm2Beo6AyQpMA1qFAAQqEAApNg1g");
	this.shape_161.setTransform(399.5,70.75);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("rgba(255,255,255,0.176)").s().p("AzPJrQo4gzm2hdQm2hdjwh5Qj5h9AAiIQAAiHD5h9QDwh5G2hcQG2hdI4gzQJNg2KCAAQKDAAJMA2QI5AzG2BdQG2BcDwB5QD5B9AACHQAACIj5B9QjwB5m2BdQm2Bdo5AzQpLA1qEgBQqDABpMg1g");
	this.shape_162.setTransform(399.5,70.75);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("rgba(255,255,255,0.176)").s().p("AzNJqQo3gzm1hdQm2hdjvh5Qj5h7AAiJQAAiHD5h9QDvh4G2hdQG1hdI3gzQJLg0KCAAQKCAAJMA0QI3AzG1BdQG1BdDwB4QD5B9gBCHQABCJj5B7QjwB5m1BdQm1Bdo3AzQpMA1qCAAQqCAApLg1g");
	this.shape_163.setTransform(399.5,70.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("rgba(255,255,255,0.176)").s().p("AzLJpQo2gzm0hdQm1hcjwh5Qj3h8AAiIQAAiHD3h9QDvh4G2hcQG0hdI2gzQJKg0KBAAQKBAAJLA0QI2AzG0BdQG1BcDvB4QD5B9AACHQAACIj5B8QjvB5m1BcQm0Bdo2AzQpLA0qBAAQqBAApKg0g");
	this.shape_164.setTransform(399.5,70.825);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("rgba(255,255,255,0.176)").s().p("AzJJoQo1gzm0hdQm0hcjvh4Qj3h8AAiIQAAiHD3h8QDvh4G0hdQG0hcI1gzQJJg0KAAAQKAAAJJA0QI2AzGzBcQG0BdDvB4QD4B8AACHQAACIj4B8QjvB4m0BcQmzBdo2AzQpJA0qAAAQqAAApJg0g");
	this.shape_165.setTransform(399.525,70.875);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("rgba(255,255,255,0.176)").s().p("AzHJnQo0gzmzhcQmzhcjuh5Qj4h7AAiIQAAiHD4h8QDth3G0hdQGzhcI0gzQJJg0J+AAQJ/AAJIA0QI1AzGzBcQGzBdDvB3QD3B8AACHQAACIj3B7QjvB5mzBcQmzBco1AzQpIA0p/AAQp/AApIg0g");
	this.shape_166.setTransform(399.5,70.875);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("rgba(255,255,255,0.176)").s().p("AzFJmQozgzmyhcQmzhcjuh4Qj3h8AAiHQAAiGD3h9QDuh2GzhdQGyhcIzgzQJIg0J9AAQJ+AAJHA0QI0AzGyBcQGzBdDuB2QD3B9AACGQAACHj3B8QjuB4mzBcQmyBco0AzQpHA0p+AAQp+AApHg0g");
	this.shape_167.setTransform(399.5,70.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("rgba(255,255,255,0.176)").s().p("AzDJlQoygzmyhcQmxhcjuh3Qj2h8gBiHQABiHD2h7QDth3GyhcQGyhdIygyQJHg0J8AAQJ9AAJHA0QIyAyGyBdQGxBcDuB3QD3B7AACHQAACHj3B8QjuB3mxBcQmyBcoyAzQpGA0p+AAQp9AApGg0g");
	this.shape_168.setTransform(399.5,70.95);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("rgba(255,255,255,0.176)").s().p("AzBJkQoxgzmxhcQmxhbjth4Qj3h7ABiHQgBiGD3h8QDsh3GyhbQGxhcIxgzQJGg0J7AAQJ8AAJGA0QIxAzGxBcQGxBbDuB3QD1B8AACGQAACHj1B7QjuB4mxBbQmxBcoxAzQpFA0p9AAQp7AApGg0g");
	this.shape_169.setTransform(399.5,70.975);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("rgba(255,255,255,0.176)").s().p("Ay/JiQowgxmxhdQmwhbjth3Qj1h7AAiHQAAiGD1h7QDth3GwhcQGxhbIwgyQJFg0J6AAQJ7AAJEA0QIxAyGwBbQGwBcDtB3QD2B7AACGQAACHj2B7QjtB3mwBbQmwBdoxAxQpEA1p7AAQp7AApEg1g");
	this.shape_170.setTransform(399.525,71);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("rgba(255,255,255,0.176)").s().p("Ay8JiQowgymwhcQmvhcjth3Qj1h6AAiHQAAiGD1h7QDth2GvhcQGwhbIwgzQJDg0J5AAQJ5AAJEA0QIxAzGuBbQGxBcDsB2QD1B7AACGQAACHj1B6QjsB3mxBcQmuBcoxAyQpDA0p6AAQp6AApCg0g");
	this.shape_171.setTransform(399.5,71.025);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("rgba(255,255,255,0.176)").s().p("Ay7JhQougymvhbQmvhcjsh3Qj1h7AAiGQAAiGD1h6QDsh3GvhbQGvhbIugzQJDg0J4ABQJ4gBJDA0QIvAzGuBbQGwBbDsB3QD1B6AACGQAACGj1B7QjsB3mwBcQmuBbovAyQpCAzp5AAQp5AApCgzg");
	this.shape_172.setTransform(399.525,71.05);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("rgba(255,255,255,0.176)").s().p("Ay5JgQotgymvhbQmthcjsh3Qj1h6AAiGQAAiFD1h7QDrh2GuhbQGvhbItgyQJCg0J3AAQJ3AAJCA0QIuAyGuBbQGuBbDsB2QD1B7AACFQAACGj1B6QjsB3muBcQmuBbouAyQpBAzp4AAQp4AApBgzg");
	this.shape_173.setTransform(399.525,71.075);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("rgba(255,255,255,0.176)").s().p("Ay3JeQosgxmuhbQmthcjrh2Qj0h6AAiGQAAiFD0h6QDqh3GuhaQGuhcIsgyQJBgzJ2AAQJ2AAJBAzQItAyGtBcQGuBaDrB3QD0B6AACFQAACGj0B6QjrB2muBcQmtBbotAxQpAA0p3AAQp2AApBg0g");
	this.shape_174.setTransform(399.525,71.125);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("rgba(255,255,255,0.176)").s().p("Ay1JdQorgxmthbQmthcjrh2Qjzh6AAiFQAAiFDzh6QDrh2GthbQGthbIrgxQJAg0J1AAQJ1AAJAA0QIsAxGsBbQGtBbDrB2QD0B6AACFQAACFj0B6QjrB2mtBcQmsBbosAxQo/A0p2AAQp1AApAg0g");
	this.shape_175.setTransform(399.525,71.15);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("rgba(255,255,255,0.176)").s().p("AyyJcQorgxmshaQmshbjqh3Qj0h6AAiFQAAiED0h6QDph2GthaQGshbIrgyQI+g0J0AAQJ1AAI+A0QIrAyGsBbQGtBaDqB2QDzB6AACEQAACFjzB6QjqB3mtBbQmsBaorAxQo+A0p1AAQp0AAo+g0g");
	this.shape_176.setTransform(399.5,71.15);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("rgba(255,255,255,0.176)").s().p("AyxJcQopgymshbQmrhajqh2Qjzh6AAiFQAAiFDzh5QDqh2GrhaQGshbIpgxQI+g0JzAAQJzAAI+A0QIqAxGrBbQGsBaDqB2QDzB5AACFQAACFjzB6QjqB2msBaQmrBboqAyQo9Azp0AAQpzAAo+gzg");
	this.shape_177.setTransform(399.525,71.2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("rgba(255,255,255,0.176)").s().p("AyvJbQoogymrhaQmqhbjqh2Qjzh5AAiFQAAiEDzh6QDph1GrhaQGrhbIogxQI9g0JyAAQJyAAI9A0QIpAxGqBbQGrBaDqB1QDzB6AACEQAACFjzB5QjqB2mrBbQmqBaopAyQo8AzpzAAQpyAAo9gzg");
	this.shape_178.setTransform(399.525,71.225);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("rgba(255,255,255,0.176)").s().p("AytJZQongxmqhaQmqhbjph1Qjyh5AAiFQAAiEDyh5QDph1GqhbQGqhaIngyQI8gzJxAAQJxAAI8AzQIoAyGqBaQGqBbDpB1QDyB5AACEQAACFjyB5QjpB1mqBbQmqBaooAxQo7A0pyAAQpxAAo8g0g");
	this.shape_179.setTransform(399.525,71.275);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("rgba(255,255,255,0.176)").s().p("AyrJZQongymphaQmphajph2Qjxh4AAiFQAAiEDxh5QDph1GphaQGphaIngxQI7g0JwAAQJwAAI7A0QInAxGpBaQGqBaDoB1QDyB5AACEQAACFjyB4QjoB2mqBaQmpBaonAyQo6AzpxAAQpwAAo7gzg");
	this.shape_180.setTransform(399.525,71.275);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("rgba(255,255,255,0.176)").s().p("AypJXQomgwmohaQmohbjph1Qjxh5AAiEQAAiEDxh4QDoh1GphZQGohbImgyQI7gzJuAAQJvAAI6AzQInAyGnBbQGpBZDpB1QDxB4AACEQAACEjxB5QjpB1mpBbQmnBaonAwQo6AzpvAAQpvAAo6gzg");
	this.shape_181.setTransform(399.525,71.3);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("rgba(255,255,255,0.176)").s().p("AynJXQolgymnhaQmohZjoh2Qjxh4AAiEQAAiDDxh5QDoh1GohZQGnhaIlgxQI6g0JtAAQJuAAI5A0QImAxGnBaQGoBZDoB1QDxB5AACDQAACEjxB4QjoB2moBZQmnBaomAyQo5AzpugBQpuABo5gzg");
	this.shape_182.setTransform(399.525,71.35);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("rgba(255,255,255,0.176)").s().p("AylJVQokgxmnhZQmmhajoh1Qjxh4AAiEQAAiDDxh5QDnh0GnhZQGnhaIkgxQI5gzJsAAQJtAAI4AzQIlAxGmBaQGnBZDoB0QDxB5AACDQAACEjxB4QjoB1mnBaQmmBZolAxQo4AzptAAQptAAo4gzg");
	this.shape_183.setTransform(399.525,71.375);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("rgba(255,255,255,0.176)").s().p("AyjJUQojgxmmhZQmmhajnh0Qjwh4AAiEQAAiDDwh4QDnh0GmhaQGmhZIjgxQI4gzJrAAQJsAAI3AzQIkAxGlBZQGnBaDnB0QDwB4AACDQAACEjwB4QjnB0mnBaQmlBZokAxQo3AzpsAAQpsAAo3gzg");
	this.shape_184.setTransform(399.525,71.4);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("rgba(255,255,255,0.176)").s().p("AygJTQojgwmlhaQmmhZjmh1Qjwh4AAiDQAAiDDwh4QDmh0GmhZQGlhZIjgxQI2gzJqAAQJrAAI2AzQIjAxGlBZQGmBZDnB0QDvB4AACDQAACDjvB4QjnB1mmBZQmlBaojAwQo2AzprAAQprAAo1gzg");
	this.shape_185.setTransform(399.525,71.425);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("rgba(255,255,255,0.176)").s().p("AyeJSQoigwmkhaQmlhZjnh0Qjvh3AAiEQAAiDDvh3QDmh0GmhZQGkhZIigyQI1gyJpAAQJqAAI1AyQIiAyGkBZQGlBZDnB0QDvB3AACDQAACEjvB3QjnB0mlBZQmkBaoiAwQo1AzpqAAQpqAAo0gzg");
	this.shape_186.setTransform(399.525,71.45);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("rgba(255,255,255,0.176)").s().p("AycJRQohgwmkhZQmkhajmh0Qjvh3AAiDQAAiCDvh4QDmhzGkhZQGkhZIhgxQI0gzJoAAQJpAAI0AzQIhAxGjBZQGlBZDmBzQDvB4AACCQAACDjvB3QjmB0mlBaQmjBZohAwQo0AzppAAQppAAozgzg");
	this.shape_187.setTransform(399.525,71.475);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("rgba(255,255,255,0.176)").s().p("AyaJQQoggwmjhZQmjhZjmh0Qjvh3AAiDQAAiCDvh3QDlh0GkhYQGjhaIggwQIzgzJnAAQJnAAI0AzQIfAwGkBaQGjBYDmB0QDuB3ABCCQgBCDjuB3QjmB0mjBZQmkBZofAwQozAzpoAAQpnAAozgzg");
	this.shape_188.setTransform(399.55,71.525);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("rgba(255,255,255,0.176)").s().p("AyYJPQofgwmihZQmjhZjlhzQjuh3AAiDQAAiBDuh4QDlhzGjhYQGihZIfgxQIygzJmAAQJnAAIyAzQIfAxGiBZQGjBYDlBzQDuB4AACBQAACDjuB3QjlBzmjBZQmiBZofAwQoyAzpnAAQpmAAoygzg");
	this.shape_189.setTransform(399.525,71.525);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("rgba(255,255,255,0.176)").s().p("AyWJOQoegwmihZQmhhZjlhzQjuh3AAiCQAAiBDuh4QDkhyGihZQGihZIegwQIxgzJlAAQJmAAIxAzQIeAwGhBZQGjBZDlByQDtB4AACBQAACCjtB3QjlBzmjBZQmhBZoeAwQoxAzpmAAQplAAoxgzg");
	this.shape_190.setTransform(399.525,71.575);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("rgba(255,255,255,0.176)").s().p("AyUJNQodgwmhhZQmhhYjlhzQjth3AAiCQAAiBDth3QDkhzGihYQGhhYIdgxQIwgyJkAAQJkAAIxAyQIdAxGhBYQGhBYDlBzQDtB3AACBQAACCjtB3QjlBzmhBYQmhBZodAwQowAzplgBQpkABowgzg");
	this.shape_191.setTransform(399.525,71.6);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("rgba(255,255,255,0.176)").s().p("AySJMQocgwmghYQmhhZjkhzQjth2AAiCQAAiBDth3QDkhyGhhYQGghZIcgwQIvgyJjAAQJjAAIwAyQIcAwGgBZQGhBYDkByQDtB3AACBQAACCjtB2QjkBzmhBZQmgBYocAwQovAypkAAQpjAAovgyg");
	this.shape_192.setTransform(399.525,71.625);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("rgba(255,255,255,0.176)").s().p("AyQJLQobgwmghYQmfhZjkhzQjth2AAiBQAAiBDth2QDjhzGghYQGghYIbgwQIugyJiAAQJiAAIvAyQIbAwGfBYQGgBYDkBzQDsB2ABCBQgBCBjsB2QjkBzmgBZQmfBYobAwQovAypiAAQpjAAotgyg");
	this.shape_193.setTransform(399.55,71.675);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("rgba(255,255,255,0.176)").s().p("AyOJKQoagwmfhYQmfhYjjhzQjsh1AAiCQAAiADsh3QDjhyGfhYQGfhYIagwQItgyJhAAQJhAAIuAyQIaAwGfBYQGfBYDjByQDsB3AACAQAACCjsB1QjjBzmfBYQmfBYoaAwQotAypiAAQphAAotgyg");
	this.shape_194.setTransform(399.525,71.675);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("rgba(255,255,255,0.176)").s().p("AyNJJQoYgvmehZQmfhXjihzQjsh2AAiBQAAiADsh2QDihyGfhYQGehYIYgwQIugyJfAAQJgAAIsAyQIaAwGdBYQGgBYDiByQDsB2AACAQAACBjsB2QjiBzmgBXQmdBZoaAvQorAyphAAQpgAAotgyg");
	this.shape_195.setTransform(399.55,71.7);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("rgba(255,255,255,0.176)").s().p("AyKJIQoYgvmehYQmdhYjjhzQjrh1AAiBQAAiADrh2QDihyGehXQGehYIYgwQIrgyJfAAQJfAAIrAyQIZAwGdBYQGeBXDjByQDrB2AACAQAACBjrB1QjjBzmeBYQmdBYoZAvQorAypfAAQpfAAorgyg");
	this.shape_196.setTransform(399.55,71.75);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("rgba(255,255,255,0.176)").s().p("AyIJHQoXgwmdhXQmdhYjihyQjqh1AAiBQAAiADqh1QDhhyGehXQGdhYIXgwQIrgyJdAAQJeAAIrAyQIXAwGcBYQGeBXDiByQDqB1AACAQAACBjqB1QjiBymeBYQmcBXoXAwQorAypeAAQpeAAoqgyg");
	this.shape_197.setTransform(399.55,71.775);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("rgba(255,255,255,0.176)").s().p("AyHJGQoVgvmchYQmdhXjhhyQjrh2AAiAQAAiADrh1QDhhyGdhWQGchYIVgwQIrgyJcAAQJdAAIqAyQIWAwGcBYQGcBWDiByQDrB1AACAQAACAjrB2QjiBymcBXQmcBYoWAvQopAxpeAAQpdAAoqgxg");
	this.shape_198.setTransform(399.55,71.8);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("rgba(255,255,255,0.176)").s().p("AyEJFQoVgvmbhYQmchXjhhyQjqh1AAiAQAAh/Dqh2QDhhxGchXQGbhXIVgwQIpgyJbAAQJcAAIpAyQIVAwGbBXQGcBXDhBxQDqB2AAB/QAACAjqB1QjhBymcBXQmbBYoVAvQooAypdAAQpcAAoogyg");
	this.shape_199.setTransform(399.525,71.825);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("rgba(255,255,255,0.176)").s().p("AyCJEQoUgvmbhYQmahXjihyQjph0AAiAQAAh/Dph1QDhhxGbhXQGbhXIUgwQIogyJaABQJbgBInAyQIVAwGaBXQGbBXDiBxQDpB1AAB/QAACAjpB0QjiBymbBXQmaBYoVAvQonAxpbABQpbgBongxg");
	this.shape_200.setTransform(399.55,71.85);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("rgba(255,255,255,0.176)").s().p("AyAJDQoTgvmbhXQmZhYjghxQjqh1AAh/QAAh/Dqh1QDfhxGahXQGbhWITgwQIngxJZAAQJZAAInAxQIUAwGaBWQGaBXDgBxQDqB1AAB/QAAB/jqB1QjgBxmaBYQmaBXoUAvQomAypagBQpaABomgyg");
	this.shape_201.setTransform(399.55,71.9);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("rgba(255,255,255,0.176)").s().p("Ax+JCQoTgvmYhXQmahXjghxQjoh0gBiAQABh/Doh0QDghxGahWQGYhXITgwQImgxJYAAQJZAAImAxQISAwGZBXQGZBWDhBxQDoB0AAB/QAACAjoB0QjhBxmZBXQmZBXoSAvQomAxpZAAQpZAAolgxg");
	this.shape_202.setTransform(399.55,71.925);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("rgba(255,255,255,0.176)").s().p("Ax8JBQoRgvmZhXQmZhXjfhwQjoh0AAiAQAAh+Doh1QDfhwGZhWQGZhXIRgwQIlgxJXAAQJYAAIlAxQISAwGYBXQGYBWDgBwQDpB1AAB+QAACAjpB0QjgBwmYBXQmYBXoSAvQolAxpYAAQpYAAokgxg");
	this.shape_203.setTransform(399.55,71.925);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("rgba(255,255,255,0.176)").s().p("Ax6JAQoRgvmXhXQmYhWjghxQjnh0AAh/QAAh+Dnh0QDghxGYhWQGXhWIRgwQIkgxJWAAQJXAAIjAxQISAwGWBWQGZBWDgBxQDnB0AAB+QAAB/jnB0QjgBxmZBWQmWBXoSAvQojAxpXAAQpWAAokgxg");
	this.shape_204.setTransform(399.55,71.975);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("rgba(255,255,255,0.176)").s().p("Ax6JAQoRgvmXhXQmYhWjfhxQjoh0AAh/QAAh+Doh0QDehxGZhWQGXhWIRgwQIkgxJWAAQJXAAIjAxQISAwGWBWQGZBWDfBxQDoB0AAB+QAAB/joB0QjfBxmZBWQmWBXoSAvQojAxpXAAQpWAAokgxg");
	this.shape_205.setTransform(399.55,71.975);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("rgba(255,255,255,0.176)").s().p("Ax8JBQoRgvmZhXQmYhXjghxQjoh0AAh/QAAh+Doh1QDghxGYhVQGZhYIRgvQIlgxJXAAQJYAAIlAxQISAvGXBYQGZBVDgBxQDoB1AAB+QAAB/joB0QjgBxmZBXQmXBXoSAvQolAxpYAAQpXAAolgxg");
	this.shape_206.setTransform(399.525,71.95);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("rgba(255,255,255,0.176)").s().p("Ax+JCQoTgvmYhXQmahXjghxQjph0AAiAQAAh/Dph0QDghxGahWQGYhXITgwQImgxJYAAQJZAAImAxQISAwGZBXQGZBWDhBxQDoB0AAB/QAACAjoB0QjhBxmZBXQmZBXoSAvQomAxpZAAQpZAAolgxg");
	this.shape_207.setTransform(399.55,71.925);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("rgba(255,255,255,0.176)").s().p("AyAJDQoTgvmahXQmahXjghyQjph0AAiAQAAh/Dph1QDfhwGbhXQGahXITgwQIngxJZAAQJZAAInAxQIUAwGaBXQGaBXDgBwQDpB1ABB/QgBCAjpB0QjgBymaBXQmaBXoUAvQomAxpaAAQpZAAongxg");
	this.shape_208.setTransform(399.55,71.875);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("rgba(255,255,255,0.176)").s().p("AyCJEQoUgvmahYQmbhXjhhyQjqh0AAiAQAAh/Dqh1QDghxGchXQGahXIUgwQIogyJaABQJagBIoAyQIVAwGaBXQGbBXDhBxQDpB1ABB/QgBCAjpB0QjhBymbBXQmaBYoVAvQonAxpbABQpbgBongxg");
	this.shape_209.setTransform(399.55,71.85);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("rgba(255,255,255,0.176)").s().p("AyEJFQoVgwmbhXQmbhYjihxQjqh1AAiAQAAiADqh0QDhhyGchXQGbhXIVgwQIpgyJbABQJcgBIpAyQIVAwGbBXQGcBXDhByQDqB0AACAQAACAjqB1QjhBxmcBYQmbBXoVAwQopAypcAAQpcAAoogyg");
	this.shape_210.setTransform(399.525,71.85);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("rgba(255,255,255,0.176)").s().p("AyGJGQoWgvmchYQmchXjihyQjqh2AAiAQAAiADqh1QDihyGchWQGchYIWgwQIqgyJcAAQJdAAIqAyQIWAwGcBYQGcBWDiByQDqB1AACAQAACAjqB2QjiBymcBXQmcBYoWAvQopAxpeAAQpdAAopgxg");
	this.shape_211.setTransform(399.55,71.8);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("rgba(255,255,255,0.176)").s().p("AyIJHQoXgwmchXQmehYjhhyQjrh1AAiBQAAiADrh1QDhhyGehXQGchYIXgwQIrgyJdAAQJeAAIrAyQIXAwGcBYQGdBXDiByQDrB1AACAQAACBjrB1QjiBymdBYQmcBXoXAwQorAypeAAQpeAAoqgyg");
	this.shape_212.setTransform(399.55,71.775);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("rgba(255,255,255,0.176)").s().p("AyKJIQoYgwmdhXQmdhYjjhzQjrh1AAiBQAAiADrh2QDihyGehXQGdhYIYgwQIsgyJeAAQJfAAIsAyQIYAwGdBYQGeBXDiByQDrB2AACAQAACBjrB1QjiBzmeBYQmdBXoYAwQorAypgAAQpfAAorgyg");
	this.shape_213.setTransform(399.525,71.75);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("rgba(255,255,255,0.176)").s().p("AyMJJQoZgwmehYQmehYjjhyQjrh2AAiBQAAiADrh2QDjhyGehYQGehYIZgwQItgyJfAAQJgAAItAyQIZAwGdBYQGfBYDjByQDrB2AACAQAACBjrB2QjjBymfBYQmdBYoZAwQosAyphAAQpgAAosgyg");
	this.shape_214.setTransform(399.525,71.725);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("rgba(255,255,255,0.176)").s().p("AyOJKQoagwmfhYQmehYjkhzQjrh2AAiBQAAiBDrh2QDjhyGfhYQGfhYIagwQItgyJhAAQJhAAIuAyQIZAwGfBYQGfBYDkByQDrB2AACBQAACBjrB2QjkBzmfBYQmfBYoZAwQotAypiAAQphAAotgyg");
	this.shape_215.setTransform(399.55,71.7);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("rgba(255,255,255,0.176)").s().p("AyQJLQobgwmfhYQmghYjjh0Qjth2AAiBQAAiADth3QDjhyGghYQGfhZIbgwQIugyJiAAQJiAAIvAyQIbAwGfBZQGgBYDjByQDsB3ABCAQgBCBjsB2QjjB0mgBYQmfBYobAwQovAypiAAQpiAAougyg");
	this.shape_216.setTransform(399.55,71.65);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("rgba(255,255,255,0.176)").s().p("AySJMQobgwmhhYQmghZjkhzQjth2AAiCQAAiBDth2QDkhzGghYQGhhYIbgxQIwgyJiAAQJjAAIwAyQIcAxGfBYQGhBYDkBzQDtB2AACBQAACCjtB2QjkBzmhBZQmfBYocAwQovAypkAAQpjAAovgyg");
	this.shape_217.setTransform(399.525,71.625);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("rgba(255,255,255,0.176)").s().p("AyUJNQocgwmhhZQmhhZjlhzQjth2AAiCQAAiBDth3QDkhzGihYQGhhZIcgwQIwgyJkAAQJkAAIxAyQIcAwGhBZQGhBYDlBzQDtB3AACBQAACCjtB2QjlBzmhBZQmhBZocAwQowAyplAAQpkAAowgyg");
	this.shape_218.setTransform(399.525,71.625);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("rgba(255,255,255,0.176)").s().p("AyWJOQodgwmihZQmihZjlhzQjth3AAiCQAAiBDth3QDlhzGihZQGihYIdgxQIxgyJlAAQJlAAIxAyQIeAxGhBYQGjBZDlBzQDtB3AACBQAACCjtB3QjlBzmjBZQmhBZoeAwQowAypmAAQpmAAowgyg");
	this.shape_219.setTransform(399.55,71.575);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("rgba(255,255,255,0.176)").s().p("AyYJPQoegxmjhYQmihZjlh0Qjuh3AAiCQAAiCDuh3QDlhzGihZQGjhYIegxQIygyJmgBQJmABIzAyQIeAxGiBYQGjBZDlBzQDuB3AACCQAACCjuB3QjlB0mjBZQmiBYoeAxQoyAypnABQpmgBoygyg");
	this.shape_220.setTransform(399.525,71.55);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("rgba(255,255,255,0.176)").s().p("AyaJRQofgxmjhZQmjhajmhzQjuh3AAiDQAAiBDuh4QDlhzGkhZQGjhZIfgxQIzgyJnAAQJnAAI0AyQIfAxGjBZQGjBZDmBzQDuB4AACBQAACDjuB3QjmBzmjBaQmjBZofAxQozAxpoAAQpnAAozgxg");
	this.shape_221.setTransform(399.525,71.5);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("rgba(255,255,255,0.176)").s().p("AycJRQoggwmkhaQmkhZjmh0Qjuh3AAiDQAAiCDuh4QDmhzGkhZQGkhZIggxQI0gzJoAAQJoAAI0AzQIhAxGjBZQGlBZDmBzQDuB4AACCQAACDjuB3QjmB0mlBZQmjBaohAwQozAyppAAQpoAAo0gyg");
	this.shape_222.setTransform(399.525,71.5);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("rgba(255,255,255,0.176)").s().p("AyeJSQohgxmlhZQmkhZjmh1Qjwh3AAiDQAAiCDwh4QDmh0GkhZQGlhZIhgxQI1gzJpAAQJpAAI1AzQIhAxGlBZQGkBZDnB0QDwB4AACCQAACDjwB3QjnB1mkBZQmlBZohAxQo0AzpqAAQppAAo1gzg");
	this.shape_223.setTransform(399.55,71.475);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("rgba(255,255,255,0.176)").s().p("AygJTQoigxmlhZQmlhajnh0Qjwh4AAiDQAAiCDwh4QDmh0GmhZQGlhaIigxQI2gzJqAAQJqAAI2AzQIjAxGlBaQGlBZDnB0QDwB4AACCQAACDjwB4QjnB0mlBaQmlBZojAxQo1AzprAAQpqAAo2gzg");
	this.shape_224.setTransform(399.525,71.425);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("rgba(255,255,255,0.176)").s().p("AyiJUQojgxmmhZQmmhajnh0Qjwh4AAiEQAAiCDwh5QDnh0GmhZQGmhaIjgxQI3gzJrAAQJsAAI2AzQIkAxGlBaQGnBZDnB0QDwB5AACCQAACEjwB4QjnB0mnBaQmlBZokAxQo2AzpsAAQprAAo3gzg");
	this.shape_225.setTransform(399.525,71.4);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("rgba(255,255,255,0.176)").s().p("AykJVQokgxmmhaQmnhajoh0Qjwh4AAiEQAAiDDwh4QDoh1GnhZQGmhaIkgyQI4gyJsAAQJtAAI3AyQIlAyGmBaQGnBZDoB1QDwB4AACDQAACEjwB4QjoB0mnBaQmmBaolAxQo3AzptAAQptAAo3gzg");
	this.shape_226.setTransform(399.525,71.4);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("rgba(255,255,255,0.176)").s().p("AymJWQolgxmnhaQmnhajoh1Qjxh4AAiEQAAiDDxh5QDnh0GohaQGnhaIlgxQI5gzJtAAQJuAAI4AzQImAxGnBaQGnBaDoB0QDxB5AACDQAACEjxB4QjoB1mnBaQmnBaomAxQo4AzpuAAQpuAAo4gzg");
	this.shape_227.setTransform(399.525,71.35);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("rgba(255,255,255,0.176)").s().p("AyoJXQomgxmohaQmohajoh1Qjxh5AAiEQAAiDDxh5QDoh1GohaQGohaImgxQI6gzJuAAQJvAAI5AzQInAxGnBaQGpBaDoB1QDxB5AACDQAACEjxB5QjoB1mpBaQmnBaonAxQo5AzpvAAQpvAAo5gzg");
	this.shape_228.setTransform(399.525,71.325);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("rgba(255,255,255,0.176)").s().p("AyqJYQomgxmphaQmphajph2Qjxh4AAiFQAAiDDxh5QDoh1GqhaQGphaImgyQI7gzJvAAQJwAAI6AzQInAyGpBaQGpBaDpB1QDxB5AACDQAACFjxB4QjpB2mpBaQmpBaonAxQo6AzpwAAQpwAAo6gzg");
	this.shape_229.setTransform(399.525,71.275);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("rgba(255,255,255,0.176)").s().p("AysJZQongxmqhbQmphajqh2Qjxh4AAiFQAAiEDxh5QDph1GqhaQGqhbIngxQI8gzJwAAQJxAAI7AzQIoAxGpBbQGqBaDqB1QDxB5AACEQAACFjxB4QjqB2mqBaQmpBbooAxQo7AzpxAAQpxAAo7gzg");
	this.shape_230.setTransform(399.525,71.275);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("rgba(255,255,255,0.176)").s().p("AyuJaQoogxmrhbQmqhajph2Qjzh5AAiFQAAiEDzh5QDph2GqhaQGrhbIogxQI9gzJxAAQJyAAI8AzQIpAxGqBbQGrBaDpB2QDzB5AACEQAACFjzB5QjpB2mrBaQmqBbopAxQo8AzpyABQpygBo8gzg");
	this.shape_231.setTransform(399.525,71.25);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("rgba(255,255,255,0.176)").s().p("AywJbQopgxmrhbQmrhajqh2Qjzh6AAiFQAAiEDzh6QDph1GshbQGrhbIpgxQI+g0JyABQJzgBI9A0QIqAxGrBbQGrBbDqB1QDzB6AACEQAACFjzB6QjqB2mrBaQmrBboqAxQo9AzpzAAQpzAAo9gzg");
	this.shape_232.setTransform(399.525,71.2);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("rgba(255,255,255,0.176)").s().p("AyyJcQoqgxmshbQmrhbjrh2Qjzh6AAiFQAAiEDzh6QDqh2GshaQGshbIqgyQI/g0JzAAQJ0AAI+A0QIrAyGrBbQGsBaDrB2QDzB6AACEQAACFjzB6QjrB2msBbQmrBborAxQo+A0p0AAQp0AAo+g0g");
	this.shape_233.setTransform(399.525,71.175);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("rgba(255,255,255,0.176)").s().p("AyzJdQosgymthaQmrhcjrh2Qj0h6AAiFQAAiED0h6QDqh2GshbQGthbIsgyQI/gzJ0gBQJ1ABI/AzQIsAyGsBbQGtBbDqB2QD0B6AACEQAACFj0B6QjqB2mtBcQmsBaosAyQo+A0p2AAQp1AAo+g0g");
	this.shape_234.setTransform(399.5,71.15);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("rgba(255,255,255,0.176)").s().p("Ay2JeQosgymthbQmthbjrh2Qj0h6AAiGQAAiFD0h6QDqh2GuhbQGthbIsgyQJAg0J2AAQJ2AAJAA0QItAyGtBbQGtBbDrB2QD0B6AACFQAACGj0B6QjrB2mtBbQmtBbotAyQpAA0p2AAQp2AApAg0g");
	this.shape_235.setTransform(399.525,71.125);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("rgba(255,255,255,0.176)").s().p("Ay4JfQotgxmuhcQmthcjsh2Qj0h6AAiGQAAiFD0h6QDrh3GuhbQGuhbItgyQJBg0J3AAQJ3AAJBA0QIuAyGtBbQGuBbDsB3QD0B6AACFQAACGj0B6QjsB2muBcQmtBcouAxQpBA0p3AAQp3AApBg0g");
	this.shape_236.setTransform(399.525,71.1);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("rgba(255,255,255,0.176)").s().p("Ay6JhQougymuhcQmvhbjsh4Qj0h6AAiGQAAiFD0h7QDsh2GvhcQGuhbIugyQJCg0J4AAQJ4AAJCA0QIvAyGuBbQGvBcDsB2QD0B7AACFQAACGj0B6QjsB4mvBbQmuBcovAyQpCAzp4AAQp4AApCgzg");
	this.shape_237.setTransform(399.525,71.05);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("rgba(255,255,255,0.176)").s().p("Ay7JhQowgymvhbQmvhcjth3Qj1h7AAiGQAAiGD1h7QDth2GvhcQGvhbIwgyQJDg0J4AAQJ5AAJDA0QIwAyGuBbQGwBcDsB2QD1B7ABCGQgBCGj1B7QjsB3mwBcQmuBbowAyQpDA0p5AAQp5AApCg0g");
	this.shape_238.setTransform(399.5,71.05);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("rgba(255,255,255,0.176)").s().p("Ay+JiQowgymwhcQmvhbjth4Qj2h6AAiHQAAiGD2h7QDsh3GwhbQGwhcIwgyQJEg0J6AAQJ6AAJEA0QIxAyGvBcQGwBbDtB3QD2B7AACGQAACHj2B6QjtB4mwBbQmvBcoxAyQpDA0p7AAQp6AApEg0g");
	this.shape_239.setTransform(399.525,71.025);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("rgba(255,255,255,0.176)").s().p("AzAJjQoxgymwhcQmxhcjth3Qj2h7AAiHQAAiGD2h7QDth3GxhcQGwhcIxgyQJFg0J7AAQJ7AAJFA0QIxAyGxBcQGxBcDtB3QD2B7AACGQAACHj2B7QjtB3mxBcQmxBcoxAyQpEA0p8AAQp7AApFg0g");
	this.shape_240.setTransform(399.525,70.975);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("rgba(255,255,255,0.176)").s().p("AzCJkQoxgymyhcQmxhcjth4Qj3h7AAiHQAAiHD3h7QDsh3GyhcQGyhcIxgyQJHg0J7AAQJ9AAJGA0QIxAyGxBcQGyBcDuB3QD2B7AACHQAACHj2B7QjuB4myBcQmxBcoxAyQpGA0p9AAQp8AApGg0g");
	this.shape_241.setTransform(399.5,70.975);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("rgba(255,255,255,0.176)").s().p("AzEJlQoygymzhcQmyhcjth4Qj3h8AAiHQAAiHD3h7QDth3GyhcQGzhdIygyQJHg0J9AAQJ+AAJGA0QI0AyGxBdQGyBcDuB3QD3B7AACHQAACHj3B8QjuB4myBcQmxBco0AyQpGA0p+AAQp9AApHg0g");
	this.shape_242.setTransform(399.5,70.925);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("rgba(255,255,255,0.176)").s().p("AzGJmQozgymzhcQmyhdjvh4Qj3h8AAiHQAAiHD3h8QDuh3GzhcQGzhcIzgzQJJg0J9gBQJ+ABJIA0QI1AzGxBcQG0BcDuB3QD3B8AACHQAACHj3B8QjuB4m0BdQmxBco1AyQpHA0p/AAQp+AApIg0g");
	this.shape_243.setTransform(399.5,70.9);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("rgba(255,255,255,0.176)").s().p("AzIJnQo0gym0hdQmzhcjvh5Qj3h7AAiIQAAiHD3h8QDuh4G0hcQG0hdI0gyQJJg1J/AAQJ/AAJJA1QI1AyGzBdQG0BcDvB4QD3B8AACHQAACIj3B7QjvB5m0BcQmzBdo1AyQpIA1qAAAQqAAApIg1g");
	this.shape_244.setTransform(399.525,70.875);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("rgba(255,255,255,0.176)").s().p("AzKJoQo1gym0hdQm1hdjuh4Qj5h8AAiIQAAiID5h7QDuh4G1hdQG0hcI1gzQJKg1KAAAQKAAAJLA1QI1AzG0BcQG1BdDuB4QD4B7ABCIQgBCIj4B8QjuB4m1BdQm0Bdo1AyQpKA1qBgBQqBABpJg1g");
	this.shape_245.setTransform(399.5,70.85);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("rgba(255,255,255,0.176)").s().p("AzMJpQo2gzm1hcQm0hdjwh5Qj5h8ABiIQgBiID5h8QDvh4G1hdQG1hcI2gzQJLg1KBAAQKBAAJMA1QI2AzG0BcQG2BdDwB4QD3B8AACIQAACIj3B8QjwB5m2BdQm0Bco2AzQpLA1qCAAQqCAApKg1g");
	this.shape_246.setTransform(399.5,70.825);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("rgba(255,255,255,0.176)").s().p("AzOJqQo3gym2hdQm1hdjwh5Qj4h9gBiIQABiID4h8QDwh4G1hdQG2hdI3gzQJMg1KCAAQKCAAJMA1QI4AzG1BdQG2BdDwB4QD5B8AACIQAACIj5B9QjwB5m2BdQm1Bdo4AyQpLA1qDAAQqCAApMg1g");
	this.shape_247.setTransform(399.5,70.775);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("rgba(255,255,255,0.176)").s().p("AzQJrQo4gzm2hdQm3hcjwh5Qj5h+AAiIQAAiID5h8QDwh5G3hdQG2hdI4gzQJNg1KDAAQKEAAJMA1QI5AzG2BdQG2BdDxB5QD5B8AACIQAACIj5B+QjxB5m2BcQm2Bdo5AzQpMA1qEAAQqEAApMg1g");
	this.shape_248.setTransform(399.5,70.75);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("rgba(255,255,255,0.176)").s().p("AzSJsQo5gzm3hdQm2hdjxh5Qj6h+AAiIQAAiJD6h9QDwh4G3hdQG3heI5gyQJOg1KEAAQKFAAJOA1QI5AyG3BeQG3BdDwB4QD6B9AACJQAACIj6B+QjwB5m3BdQm3Bdo5AzQpOA1qFAAQqFAApNg1g");
	this.shape_249.setTransform(399.5,70.75);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("rgba(255,255,255,0.176)").s().p("AzUJtQo6gzm3hdQm4hdjxh6Qj6h9AAiJQAAiJD6h8QDwh5G5heQG3hdI6gzQJPg1KFAAQKGAAJPA1QI6AzG3BdQG4BeDxB5QD6B8AACJQAACJj6B9QjxB6m4BdQm3Bdo6AzQpPA1qGAAQqGAApOg1g");
	this.shape_250.setTransform(399.5,70.7);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("rgba(255,255,255,0.176)").s().p("AzWJuQo6gzm5hdQm5hejxh6Qj6h9AAiJQAAiJD6h9QDxh5G5hdQG5heI6gzQJQg1KGAAQKHAAJPA1QI8AzG3BeQG6BdDxB5QD6B9AACJQAACJj6B9QjxB6m6BeQm3Bdo8AzQpPA1qHAAQqGAApQg1g");
	this.shape_251.setTransform(399.5,70.675);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("rgba(255,255,255,0.176)").s().p("AzYJvQo7gzm6hdQm5hejyh6Qj6h9gBiKQABiJD6h9QDyh5G5heQG6heI7gzQJRg1KHAAQKHAAJRA1QI9AzG5BeQG5BeDyB5QD6B9ABCJQgBCKj6B9QjyB6m5BeQm5Bdo9AzQpQA1qIAAQqHAApRg1g");
	this.shape_252.setTransform(399.5,70.625);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("rgba(255,255,255,0.176)").s().p("AzaJwQo9gzm5heQm6hejyh6Qj7h9AAiKQAAiJD7h+QDxh5G7heQG5heI9gzQJSg1KIAAQKIAAJSA1QI+AzG5BeQG6BeDyB5QD8B+gBCJQABCKj8B9QjyB6m6BeQm5Beo+AzQpRA1qJAAQqJAApRg1g");
	this.shape_253.setTransform(399.5,70.625);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("rgba(255,255,255,0.176)").s().p("AzcJxQo+gzm6heQm6hejzh7Qj8h9AAiKQAAiJD8h+QDyh6G7heQG6heI+g0QJTg0KJAAQKKAAJTA0QI9A0G7BeQG6BeDzB6QD8B+AACJQAACKj8B9QjzB7m6BeQm7Beo9AzQpSA1qLAAQqKAApSg1g");
	this.shape_254.setTransform(399.5,70.6);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("rgba(255,255,255,0.176)").s().p("AzeJyQo+gzm8heQm7hfjzh5Qj8h/AAiKQAAiJD8h/QDzh5G7hfQG8heI+gzQJUg2KKABQKLgBJUA2QI/AzG6BeQG8BfDzB5QD8B/AACJQAACKj8B/QjzB5m8BfQm6Beo/AzQpTA2qMAAQqLAApTg2g");
	this.shape_255.setTransform(399.475,70.55);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("rgba(255,255,255,0.176)").s().p("AzgJzQpAgzm8heQm7hfj0h6Qj8h/AAiKQAAiKD8h+QDzh6G8heQG8hfJAgzQJVg2KLAAQKMAAJUA2QJAAzG8BfQG8BeD0B6QD8B+AACKQAACKj8B/Qj0B6m8BfQm8BepAAzQpUA2qMAAQqMAApUg2g");
	this.shape_256.setTransform(399.5,70.525);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("rgba(255,255,255,0.176)").s().p("AziJ0QpAg0m9heQm8hej1h7Qj8h/AAiKQAAiKD8h/QD0h6G9heQG9hfJAgzQJVg2KNAAQKNAAJVA2QJBAzG9BfQG9BeDzB6QD9B/AACKQAACKj9B/QjzB7m9BeQm9BepBA0QpUA2qOAAQqNAApVg2g");
	this.shape_257.setTransform(399.5,70.525);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("rgba(255,255,255,0.176)").s().p("AzkJ1QpBgzm9hfQm+hfj0h7Qj9h+AAiLQAAiKD9h/QD0h6G+hfQG9heJBg0QJXg2KNAAQKOAAJWA2QJCA0G9BeQG+BfD0B6QD9B/AACKQAACLj9B+Qj0B7m+BfQm9BfpCAzQpVA2qPAAQqOAApWg2g");
	this.shape_258.setTransform(399.5,70.475);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("rgba(255,255,255,0.176)").s().p("AzmJ2QpCg0m+hfQm+hej1h7Qj9h/AAiLQAAiLD9h+QD0h7G/heQG+hfJCg0QJYg2KOAAQKPAAJXA2QJDA0G+BfQG+BeD1B7QD9B+AACLQAACLj9B/Qj1B7m+BeQm+BfpDA0QpWA2qQAAQqPAApXg2g");
	this.shape_259.setTransform(399.475,70.45);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("rgba(255,255,255,0.176)").s().p("AzoJ4QpDg0m/hfQm/hfj0h8Qj+h+AAiMQAAiKD+iAQD0h7G/heQG/hfJDg0QJZg2KPAAQKQAAJYA2QJEA0G/BfQG/BeD1B7QD+CAgBCKQABCMj+B+Qj1B8m/BfQm/BfpEA0QpXA1qRAAQqQAApYg1g");
	this.shape_260.setTransform(399.5,70.4);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("rgba(255,255,255,0.176)").s().p("AzqJ4QpEg0nAhfQm/hfj2h8Qj9h+gBiMQABiLD9iAQD1h6HAhfQHAhfJEg1QJZg1KRAAQKRAAJZA1QJFA1G/BfQHABfD1B6QD/CAAACLQAACMj/B+Qj1B8nABfQm/BfpFA0QpZA2qRAAQqRAApZg2g");
	this.shape_261.setTransform(399.5,70.4);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("rgba(255,255,255,0.176)").s().p("AzsJ5QpFg0nAhfQnAhfj2h8Qj/h/AAiMQAAiLD/iAQD1h7HBhfQHAhfJFg0QJag2KSAAQKSAAJaA2QJGA0HABfQHABfD2B7QD/CAAACLQAACMj/B/Qj2B8nABfQnABfpGA0QpZA2qTAAQqSAApag2g");
	this.shape_262.setTransform(399.475,70.375);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("rgba(255,255,255,0.176)").s().p("AzuJ6QpGg0nBhfQnAhfj3h8Qj/iAAAiMQAAiLD/iAQD2h7HBhgQHBhfJGg0QJbg2KTAAQKTAAJbA2QJHA0HABfQHCBgD2B7QD/CAAACLQAACMj/CAQj2B8nCBfQnABfpHA0QpaA2qUAAQqTAApbg2g");
	this.shape_263.setTransform(399.475,70.325);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("rgba(255,255,255,0.176)").s().p("AzwJ7QpHg0nChfQnBhgj2h8QkAiAAAiMQAAiLEAiAQD2h8HBhgQHChfJHg0QJcg2KUAAQKUAAJcA2QJIA0HBBfQHBBgD3B8QEACAAACLQAACMkACAQj3B8nBBgQnBBfpIA0QpbA2qVAAQqVAApbg2g");
	this.shape_264.setTransform(399.5,70.3);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("rgba(255,255,255,0.176)").s().p("AzyJ8QpHg0nDhgQnChfj4h9Qj/iAAAiMQAAiMD/iAQD3h8HDhfQHDhgJHg0QJdg2KVAAQKVAAJdA2QJJA0HBBgQHDBfD3B8QEACAAACMQAACMkACAQj3B9nDBfQnBBgpJA0QpdA2qVAAQqWAApcg2g");
	this.shape_265.setTransform(399.5,70.275);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("rgba(255,255,255,0.176)").s().p("Az0J9QpIg0nEhgQnChfj4h9QkAiAAAiNQAAiMEAiBQD3h8HDhfQHEhgJIg0QJeg2KWgBQKWABJeA2QJJA0HDBgQHEBfD3B8QEACBAACMQAACNkACAQj3B9nEBfQnDBgpJA0QpdA2qXABQqWgBpeg2g");
	this.shape_266.setTransform(399.475,70.25);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("rgba(255,255,255,0.176)").s().p("Az2J+QpJg0nEhgQnEhgj4h9QkAiAAAiNQAAiMEAiBQD4h8HEhgQHEhgJJg0QJfg3KXAAQKXAAJfA3QJKA0HEBgQHEBgD4B8QEACBAACMQAACNkACAQj4B9nEBgQnEBgpKA0QpeA3qYAAQqXAApfg3g");
	this.shape_267.setTransform(399.475,70.225);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("rgba(255,255,255,0.176)").s().p("Az4J/QpKg0nFhgQnFhgj3h9QkBiBgBiNQABiMEBiBQD3h8HFhgQHFhhJKg0QJgg3KYAAQKZAAJfA3QJLA0HEBhQHFBgD4B8QECCBAACMQAACNkCCBQj4B9nFBgQnEBgpLA0QpfA3qZAAQqZAApfg3g");
	this.shape_268.setTransform(399.5,70.175);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("rgba(255,255,255,0.176)").s().p("Az6KAQpLg0nGhhQnFhgj4h9QkCiBAAiNQAAiNECiBQD4h8HFhgQHGhhJLg0QJhg3KZAAQKaAAJgA3QJMA0HFBhQHGBgD4B8QECCBAACNQAACNkCCBQj4B9nGBgQnFBhpMA0QpgA3qaAAQqZAAphg3g");
	this.shape_269.setTransform(399.475,70.175);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("rgba(255,255,255,0.176)").s().p("Az8KBQpMg1nGhgQnGhhj5h9QkCiBAAiNQAAiNECiBQD5h9HGhhQHGhfJMg1QJig3KaAAQKbAAJhA3QJNA1HGBfQHGBhD5B9QECCBAACNQAACNkCCBQj5B9nGBhQnGBgpNA1QphA3qbAAQqbAAphg3g");
	this.shape_270.setTransform(399.475,70.15);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("rgba(255,255,255,0.176)").s().p("Az+KDQpNg1nHhhQnGhgj6h+QkCiCAAiNQAAiNECiCQD5h9HHhgQHHhhJNg0QJjg3KbAAQKcAAJiA3QJOA0HGBhQHHBgD6B9QECCCAACNQAACNkCCCQj6B+nHBgQnGBhpOA1QpiA2qcAAQqcAApig2g");
	this.shape_271.setTransform(399.475,70.1);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("rgba(255,255,255,0.176)").s().p("A0AKDQpOg1nHhgQnIhhj5h+QkDiBAAiOQAAiNEDiCQD4h9HJhhQHHhgJOg1QJkg3KcAAQKdAAJjA3QJPA1HHBgQHHBhD6B9QEDCCAACNQAACOkDCBQj6B+nHBhQnHBgpPA1QpjA3qdAAQqdAApjg3g");
	this.shape_272.setTransform(399.5,70.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_136,p:{scaleX:1,scaleY:1,x:399.475,y:70.025}}]}).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_136,p:{scaleX:0.8911,scaleY:0.8911,x:399.5484,y:72.0082}}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_136,p:{scaleX:1,scaleY:1,x:399.475,y:70.025}}]},1).wait(1));

	// Layer_4
	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("rgba(255,255,255,0.067)").s().p("A4TMsQrOhDoph5Qoqh6kvifQk6ikAAizQAAizE6ijQEvifIqh6QIph6LOhCQLnhFMsAAQMuAALmBFQLOBCIpB6QIqB6EvCfQE6CjAACzQAACzk6CkQkvCfoqB6QopB5rOBDQrmBGsuAAQssAArnhGg");
	this.shape_273.setTransform(399.825,88.15);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("rgba(255,255,255,0.067)").s().p("A4RMrQrMhCoph7Qooh5kvieQk6ikAAizQAAiyE6ijQEvifIoh5QIph6LMhCQLmhGMrAAQMsAALmBGQLMBCIpB6QIoB5EvCfQE6CjAACyQAACzk6CkQkvCeooB5QopB7rMBCQrmBFssAAQsrAArmhFg");
	this.shape_274.setTransform(399.825,88.15);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("rgba(255,255,255,0.067)").s().p("A4OMqQrMhDonh5Qooh6kvieQk5ijAAizQAAiyE5ijQEvieIoh5QInh6LMhDQLkhFMqAAQMrAALkBFQLMBDInB6QIoB5EvCeQE5CjAACyQAACzk5CjQkvCeooB6QonB5rMBDQrkBFsrAAQsqAArkhFg");
	this.shape_275.setTransform(399.825,88.15);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("rgba(255,255,255,0.067)").s().p("A4MMpQrKhDonh5Qonh6kuidQk4ijAAizQAAiyE4ijQEuidInh5QInh6LKhCQLkhFMogBQMqABLjBFQLKBCInB6QInB5EuCdQE4CjAACyQAACzk4CjQkuCdonB6QonB5rKBDQrjBEsqAAQsoAArkhEg");
	this.shape_276.setTransform(399.825,88.15);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("rgba(255,255,255,0.067)").s().p("A4KMoQrIhDonh5Qomh5ktieQk4iiAAizQAAixE4ijQEtieImh5QInh5LIhCQLjhFMnAAQMpAALhBFQLJBCImB5QImB5EuCeQE4CjAACxQAACzk4CiQkuCeomB5QomB5rJBDQrhBEspAAQsnAArjhEg");
	this.shape_277.setTransform(399.85,88.15);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("rgba(255,255,255,0.067)").s().p("A4HMmQrIhColh5Qolh6kticQk4ijAAiyQAAixE4ijQEtidIlh5QIlh5LIhCQLhhFMmABQMngBLhBFQLIBCIlB5QIlB5EtCdQE4CjAACxQAACyk4CjQktCcolB6QolB5rIBCQrhBEsnAAQsmAArhhEg");
	this.shape_278.setTransform(399.825,88.15);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("rgba(255,255,255,0.067)").s().p("A4EMlQrHhCokh5Qolh5ksidQk3iiAAiyQAAixE3iiQEsidIlh5QIkh5LHhBQLfhFMlAAQMmAALgBFQLGBBIlB5QIkB5EsCdQE3CiAACxQAACyk3CiQksCdokB5QolB5rGBCQrgBEsmAAQslAArfhEg");
	this.shape_279.setTransform(399.825,88.15);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("rgba(255,255,255,0.067)").s().p("A4CMjQrGhCojh5Qojh4ktidQk2ihAAiyQAAiwE2iiQEtidIjh5QIjh4LGhCQLfhFMjAAQMlAALeBFQLGBCIjB4QIjB5EtCdQE2CiAACwQAACyk2ChQktCdojB4QojB5rGBCQreBFslAAQsjAArfhFg");
	this.shape_280.setTransform(399.825,88.15);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("rgba(255,255,255,0.067)").s().p("A4AMiQrEhCojh5Qoih4ksicQk2iiAAixQAAiwE2iiQEsicIih4QIjh5LEhBQLehFMigBQMjABLeBFQLEBBIjB5QIiB4EsCcQE2CiAACwQAACxk2CiQksCcoiB4QojB5rEBCQreBFsjAAQsiAArehFg");
	this.shape_281.setTransform(399.825,88.15);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("rgba(255,255,255,0.067)").s().p("A39MhQrEhCohh5Qoih3kridQk2ihAAixQAAiwE2ihQEridIih3QIhh5LEhCQLchEMhAAQMiAALcBEQLDBCIiB5QIiB3ErCdQE2ChgBCwQABCxk2ChQkrCdoiB3QoiB5rDBCQrcBEsiAAQshAArchEg");
	this.shape_282.setTransform(399.85,88.15);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("rgba(255,255,255,0.067)").s().p("A37MgQrChCohh5Qogh4kricQk1igAAixQAAiwE1ihQEribIgh4QIhh4LChCQLchEMfAAQMhAALbBEQLCBCIhB4QIgB4ErCbQE1ChAACwQAACxk1CgQkrCcogB4QohB5rCBCQrbBDshAAQsfAArchDg");
	this.shape_283.setTransform(399.825,88.15);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("rgba(255,255,255,0.067)").s().p("A34MfQrBhCogh5Qogh3kqicQk1igAAixQAAiwE1igQEqicIgh3QIgh4LBhCQLahEMeAAQMgAALZBEQLBBCIgB4QIgB3EqCcQE1CgAACwQAACxk1CgQkqCcogB3QogB5rBBCQrZBDsgAAQseAArahDg");
	this.shape_284.setTransform(399.825,88.15);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("rgba(255,255,255,0.067)").s().p("A32MdQrAhBofh4Qofh4kpicQk1igAAiwQAAivE1igQEpicIfh4QIfh4LAhBQLZhEMdAAQMeAALZBEQK/BBIfB4QIgB4EqCcQE0CggBCvQABCwk0CgQkqCcogB4QofB4q/BBQrZBEseAAQsdAArZhEg");
	this.shape_285.setTransform(399.85,88.15);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("rgba(255,255,255,0.067)").s().p("A3zMcQq/hCoeh3Qoeh4kqibQkzigAAiwQAAivEzigQEqibIeh4QIeh3K/hBQLYhEMbgBQMdABLXBEQK/BBIeB3QIeB4EqCbQEzCgAACvQAACwkzCgQkqCboeB4QoeB3q/BCQrXBEsdAAQsbAArYhEg");
	this.shape_286.setTransform(399.825,88.15);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("rgba(255,255,255,0.067)").s().p("A3xMaQq9hBoeh3Qodh3kpicQkzigAAivQAAiuEzigQEpicIdh3QIeh3K9hBQLXhEMaAAQMcAALWBEQK+BBIdB3QIdB3EpCcQEzCgAACuQAACvkzCgQkpCcodB3QodB3q+BBQrWBEscAAQsaAArXhEg");
	this.shape_287.setTransform(399.825,88.15);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("rgba(255,255,255,0.067)").s().p("A3vMZQq8hBoch3Qodh4koiaQkzigABivQgBivEzifQEoiaIdh4QIch3K8hBQLWhEMZAAQMaAALVBEQK8BBIdB3QIcB4EpCaQEzCfAACvQAACvkzCgQkpCaocB4QodB3q8BBQrVBEsaAAQsZAArWhEg");
	this.shape_288.setTransform(399.85,88.15);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("rgba(255,255,255,0.067)").s().p("A3sMYQq7hBoch4Qobh2koibQkyifAAivQAAiuEyifQEoibIbh3QIch2K7hCQLUhDMYAAQMZAALUBDQK7BCIcB2QIbB3EoCbQEyCfAACuQAACvkyCfQkoCbobB2QocB4q7BBQrUBDsZAAQsYAArUhDg");
	this.shape_289.setTransform(399.825,88.15);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("rgba(255,255,255,0.067)").s().p("A3qMXQq6hCoah3Qobh2kniaQkyigAAiuQAAitEyigQEniaIbh2QIah4K6hAQLUhEMWAAQMXAALUBEQK6BAIaB4QIbB2EnCaQEyCgAACtQAACukyCgQknCaobB2QoaB3q6BCQrUBDsXAAQsWAArUhDg");
	this.shape_290.setTransform(399.85,88.15);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("rgba(255,255,255,0.067)").s().p("A3nMWQq5hBoah3Qoah2knibQkxieAAivQAAitExifQEniaIah3QIah2K5hBQLShDMVAAQMXAALRBDQK5BBIaB2QIaB3EnCaQExCfAACtQAACvkxCeQknCboaB2QoaB3q5BBQrRBDsXgBQsVABrShDg");
	this.shape_291.setTransform(399.825,88.15);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("rgba(255,255,255,0.067)").s().p("A3kMUQq4hBoZh2QoZh3kniZQkwifAAiuQAAitEwifQEniZIZh3QIZh2K4hBQLQhDMUAAQMVAALRBDQK4BBIZB2QIYB3EnCZQEwCfAACtQAACukwCfQknCZoYB3QoZB2q4BBQrRBDsVAAQsUAArQhDg");
	this.shape_292.setTransform(399.825,88.15);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("rgba(255,255,255,0.067)").s().p("A3iMTQq3hBoYh2QoYh2kmiaQkwieAAiuQAAitEwieQEmiaIYh2QIYh2K3hAQLPhDMTgBQMUABLPBDQK3BAIYB2QIYB2EmCaQEwCeAACtQAACukwCeQkmCaoYB2QoYB2q3BBQrPBDsUAAQsTAArPhDg");
	this.shape_293.setTransform(399.85,88.15);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("rgba(255,255,255,0.067)").s().p("A3gMRQq1hAoYh2QoXh2kliZQkwifAAitQAAisEwifQEliZIXh2QIYh1K1hBQLPhEMRAAQMTAALOBEQK1BBIYB1QIXB2ElCZQEwCfAACsQAACtkwCfQklCZoXB2QoYB2q1BAQrOBEsTAAQsRAArPhEg");
	this.shape_294.setTransform(399.825,88.15);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("rgba(255,255,255,0.067)").s().p("A3eMQQq0hBoWh1QoXh2kliZQkuidgBiuQABisEuieQEliZIXh2QIWh1K0hBQLOhDMQAAQMSAALMBDQK0BBIXB1QIWB2ElCZQEvCeAACsQAACukvCdQklCZoWB2QoXB1q0BBQrMBDsSAAQsQAArOhDg");
	this.shape_295.setTransform(399.85,88.15);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("rgba(255,255,255,0.067)").s().p("A3bMPQqzhAoWh2QoVh1kkiZQkvieAAitQAAisEvieQEkiZIVh1QIWh1KzhBQLMhCMPAAQMQAALMBCQKzBBIVB1QIWB1ElCZQEuCeAACsQAACtkuCeQklCZoWB1QoVB2qzBAQrMBCsQAAQsPAArMhCg");
	this.shape_296.setTransform(399.85,88.15);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("rgba(255,255,255,0.067)").s().p("A3YMOQqyhAoVh2QoVh2kkiYQkuieAAisQAAisEuidQEkiZIVh1QIVh1KyhAQLLhDMNAAQMPAALKBDQKzBAIUB1QIVB1EkCZQEuCdAACsQAACskuCeQkkCYoVB2QoUB2qzBAQrKBCsPAAQsNAArLhCg");
	this.shape_297.setTransform(399.825,88.15);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("rgba(255,255,255,0.067)").s().p("A3WMNQqxhBoUh1QoTh1kkiYQkuieABisQgBirEuieQEkiYITh1QIUh1KxhAQLJhCMNAAQMOAALJBCQKxBAITB1QIUB1EjCYQEvCegBCrQABCskvCeQkjCYoUB1QoTB1qxBBQrJBCsOAAQsNAArJhCg");
	this.shape_298.setTransform(399.85,88.15);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("rgba(255,255,255,0.067)").s().p("A3UMLQqwhAoTh1QoSh1kjiYQktidAAisQAAirEtidQEjiYISh1QITh1KwhAQLJhDMLAAQMMAALIBDQKwBAITB1QITB1EjCYQEtCdAACrQAACsktCdQkjCYoTB1QoTB1qwBAQrIBDsMAAQsLAArJhDg");
	this.shape_299.setTransform(399.85,88.15);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("rgba(255,255,255,0.067)").s().p("A3RMKQqvhAoSh1QoSh1kjiYQksicAAisQAAirEsidQEjiXISh1QISh1Kvg/QLHhDMKAAQMLAALHBDQKvA/ISB1QIRB1EjCXQEtCdAACrQAACsktCcQkjCYoRB1QoSB1qvBAQrHBCsLAAQsKAArHhCg");
	this.shape_300.setTransform(399.85,88.15);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("rgba(255,255,255,0.067)").s().p("A3OMIQqvhAoRh0QoRh1khiXQksidAAirQAAiqEsidQEhiXIRh1QIRh0KvhAQLGhDMIAAQMJAALHBDQKtBAIRB0QIRB1EjCXQEsCdAACqQAACrksCdQkjCXoRB1QoRB0qtBAQrHBDsJAAQsIAArGhDg");
	this.shape_301.setTransform(399.85,88.15);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("rgba(255,255,255,0.067)").s().p("A3MMHQqthAoQh0QoQh1kiiXQkricAAirQAAiqEricQEiiXIQh1QIQh0KthAQLFhCMHAAQMJAALEBCQKtBAIQB0QIQB1EiCXQErCcAACqQAACrkrCcQkiCXoQB1QoQB0qtBAQrEBCsJAAQsHAArFhCg");
	this.shape_302.setTransform(399.825,88.15);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("rgba(255,255,255,0.067)").s().p("A3JMGQqsg/oQh1QoPh0khiYQkribAAirQAAiqEribQEhiYIPh0QIQh0Ksg/QLDhDMGAAQMHAALDBDQKsA/IQB0QIPB0EgCYQEsCbAACqQAACrksCbQkgCYoPB0QoQB1qsA/QrDBCsHAAQsGAArDhCg");
	this.shape_303.setTransform(399.85,88.15);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("rgba(255,255,255,0.067)").s().p("A3HMFQqqhAoPh0QoOh0khiXQkricABiqQgBipEricQEhiXIOh0QIPh0Kqg/QLChCMFAAQMGAALCBCQKrA/IOB0QIOB0EhCXQEqCcABCpQgBCqkqCcQkhCXoOB0QoOB0qrBAQrCBCsGgBQsFABrChCg");
	this.shape_304.setTransform(399.85,88.15);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("rgba(255,255,255,0.067)").s().p("A3FMEQqphAoOh0QoNh0kgiXQkriaAAirQAAiqEriaQEgiXINh0QIOh0Kpg/QLChCMDAAQMEAALBBCQKqA/IOB0QINB0EgCXQErCagBCqQABCrkrCaQkgCXoNB0QoOB0qqBAQrBBBsEAAQsDAArChBg");
	this.shape_305.setTransform(399.85,88.15);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("rgba(255,255,255,0.067)").s().p("A3CMCQqpg/oMh0QoNhzkgiXQkpibAAiqQAAipEpibQEgiXINhzQIMh0Kpg/QLAhBMCgBQMDABLABBQKoA/INB0QIMBzEgCXQEqCbAACpQAACqkqCbQkgCXoMBzQoNB0qoA/QrABCsDAAQsCAArAhCg");
	this.shape_306.setTransform(399.85,88.15);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("rgba(255,255,255,0.067)").s().p("A2/MBQqog/oLh0QoNh0keiWQkpiaAAiqQAAipEpiaQEeiXINhzQILh0Kog+QK/hCMAAAQMCAAK/BCQKmA+INB0QILBzEgCXQEpCaAACpQAACqkpCaQkgCWoLB0QoNB0qmA/Qq/BBsCAAQsAAAq/hBg");
	this.shape_307.setTransform(399.85,88.15);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("rgba(255,255,255,0.067)").s().p("A29L/Qqmg+oMh0QoKhzkfiWQkoiaAAiqQAAioEoibQEfiWIKhzQIMhzKmg/QK9hCMAAAQMBAAK+BCQKlA/ILBzQILBzEeCWQEqCbgBCoQABCqkqCaQkeCWoLBzQoLB0qlA+Qq+BCsBAAQsAAAq9hCg");
	this.shape_308.setTransform(399.85,88.15);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("rgba(255,255,255,0.067)").s().p("A27L+Qqkg/oLhzQoJhzkfiVQkoibAAipQAAipEoiaQEfiVIJhzQILhzKkg/QK9hCL+ABQL/gBK9BCQKkA/ILBzQIJBzEfCVQEoCaAACpQAACpkoCbQkfCVoJBzQoLBzqkA/Qq9BBr/AAQr+AAq9hBg");
	this.shape_309.setTransform(399.85,88.15);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("rgba(255,255,255,0.067)").s().p("A25L9Qqjg/oKhzQoJhzkdiVQkoiaAAipQAAioEoiaQEdiWIJhyQIKhzKjg/QK8hBL9AAQL+AAK7BBQKkA/IJBzQIJByEeCWQEoCaAACoQAACpkoCaQkeCVoJBzQoJBzqkA/Qq7BBr+AAQr9AAq8hBg");
	this.shape_310.setTransform(399.85,88.15);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("rgba(255,255,255,0.067)").s().p("A22L8Qqjg/oIhzQoIhzkeiUQkmiaAAipQAAioEmiaQEeiUIIhzQIIhyKjhAQK7hBL7ABQL9gBK6BBQKiBAIJByQIIBzEdCUQEnCaABCoQgBCpknCaQkdCUoIBzQoJBzqiA/Qq6BBr9AAQr7AAq7hBg");
	this.shape_311.setTransform(399.85,88.15);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("rgba(255,255,255,0.067)").s().p("A2zL7Qqig/oIhzQoHhykdiVQkmiZAAipQAAinEmiaQEdiUIHhzQIIhzKig+QK5hBL6AAQL8AAK5BBQKgA+IIBzQIHBzEdCUQEnCaAACnQAACpknCZQkdCVoHByQoIBzqgA/Qq5BAr8AAQr6AAq5hAg");
	this.shape_312.setTransform(399.85,88.15);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("rgba(255,255,255,0.067)").s().p("A2xL5Qqgg/oHhyQoHhykciUQkmiaAAioQAAinEmiaQEciUIHhyQIHhzKgg+QK4hBL5AAQL6AAK4BBQKgA+IGBzQIHByEcCUQEnCaAACnQAACoknCaQkcCUoHByQoGByqgA/Qq4BBr6AAQr5AAq4hBg");
	this.shape_313.setTransform(399.875,88.15);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("rgba(255,255,255,0.067)").s().p("A2uL4Qqfg+oHhzQoFhykciUQkmiZABioQgBinEmiZQEciUIFhyQIHhyKfg+QK2hCL4AAQL5AAK2BCQKgA+IFByQIGByEbCUQEnCZAACnQAACoknCZQkbCUoGByQoFBzqgA+Qq2BBr5AAQr4AAq2hBg");
	this.shape_314.setTransform(399.85,88.15);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("rgba(255,255,255,0.067)").s().p("A2sL2Qqeg+oFhyQoEhxkciVQkliYAAioQAAinEliYQEciVIEhxQIFhyKeg+QK2hBL2AAQL4AAK1BBQKeA+IFByQIEBxEcCVQElCYAACnQAACoklCYQkcCVoEBxQoFByqeA+Qq1BBr4AAQr2AAq2hBg");
	this.shape_315.setTransform(399.85,88.15);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("rgba(255,255,255,0.067)").s().p("A2qL1Qqcg+oFhyQoDhxkbiVQkliXAAioQAAimEliZQEbiUIDhxQIFhyKcg+QK1hAL1AAQL2AAK0BAQKeA+IDByQIEBxEbCUQElCZAACmQAACoklCXQkbCVoEBxQoDByqeA+Qq0BBr2gBQr1ABq1hBg");
	this.shape_316.setTransform(399.85,88.15);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("rgba(255,255,255,0.067)").s().p("A2nL0Qqcg+oDhyQoDhykbiTQkjiYAAinQAAimEjiYQEbiUIDhxQIDhxKcg/QKzhBL0ABQL1gBKzBBQKbA/IEBxQIDBxEaCUQElCYAACmQAACnklCYQkaCToDByQoEByqbA+QqzBAr1AAQr0AAqzhAg");
	this.shape_317.setTransform(399.85,88.15);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("rgba(255,255,255,0.067)").s().p("A2lLzQqbg+oChyQoChxkaiUQkjiXAAinQAAimEjiXQEaiUIChxQIChxKbg/QKyhALzAAQL0AAKyBAQKaA/ICBxQICBxEaCUQEkCXAACmQAACnkkCXQkaCUoCBxQoCByqaA+QqyBAr0AAQrzAAqyhAg");
	this.shape_318.setTransform(399.875,88.15);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("rgba(255,255,255,0.067)").s().p("A2iLyQqag/oBhxQoChxkZiTQkjiXAAinQAAimEjiXQEZiTIChxQIBhxKag+QKxhBLxAAQLzAAKxBBQKYA+ICBxQIBBxEaCTQEjCXAACmQAACnkjCXQkaCToBBxQoCBxqYA/QqxA/rzABQrxgBqxg/g");
	this.shape_319.setTransform(399.85,88.15);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("rgba(255,255,255,0.067)").s().p("A2gLwQqYg+oBhxQoAhxkZiTQkjiXAAimQAAilEjiXQEZiTIAhxQIBhxKYg+QKwhALwAAQLxAAKwBAQKYA+IABxQIBBxEZCTQEiCXABClQgBCmkiCXQkZCToBBxQoABxqYA+QqwBArxAAQrwAAqwhAg");
	this.shape_320.setTransform(399.85,88.15);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("rgba(255,255,255,0.067)").s().p("A2dLvQqYg+n/hxQoAhwkYiTQkiiXAAimQAAilEiiXQEYiSIAhxQH/hxKYg9QKuhBLvAAQLwAAKuBBQKXA9IABxQH/BxEZCSQEiCXAAClQAACmkiCXQkZCTn/BwQoABxqXA+QquBArwgBQrvABquhAg");
	this.shape_321.setTransform(399.875,88.15);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("rgba(255,255,255,0.067)").s().p("A2bLtQqWg9n/hxQn/hwkXiTQkiiWAAimQAAilEiiWQEXiTH/hwQH/hxKWg9QKuhBLtABQLvgBKtBBQKVA9H/BxQH/BwEYCTQEiCWAAClQAACmkiCWQkYCTn/BwQn/BxqVA9QqtBArvAAQrtAAquhAg");
	this.shape_322.setTransform(399.85,88.15);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("rgba(255,255,255,0.067)").s().p("A2ZLsQqVg9n+hxQn9hwkYiSQkhiXAAilQAAilEhiWQEYiSH9hwQH+hxKVg9QKthALsAAQLtAAKsBAQKVA9H+BxQH+BwEXCSQEiCWAAClQAAClkiCXQkXCSn+BwQn+BxqVA9QqsBArtAAQrsAAqthAg");
	this.shape_323.setTransform(399.875,88.15);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("rgba(255,255,255,0.067)").s().p("A2WLrQqUg+n9hwQn9hwkXiSQkgiWAAilQAAikEgiWQEXiSH9hwQH9hxKUg8QKrhBLrABQLsgBKrBBQKTA8H9BxQH9BwEXCSQEhCWAACkQAAClkhCWQkXCSn9BwQn9BwqTA+QqrA/rsAAQrrAAqrg/g");
	this.shape_324.setTransform(399.875,88.15);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("rgba(255,255,255,0.067)").s().p("A2TLqQqTg9n8hwQn8hxkXiRQkgiWAAilQAAikEgiVQEXiSH8hxQH8hvKTg+QKpg/LqAAQLrAAKqA/QKSA+H9BvQH7BxEXCSQEgCVAACkQAAClkgCWQkXCRn7BxQn9BwqSA9QqqA/rrAAQrqAAqpg/g");
	this.shape_325.setTransform(399.85,88.15);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("rgba(255,255,255,0.067)").s().p("A2RLpQqSg9n7hxQn7hwkWiRQkgiVAAilQAAijEgiWQEWiRH7hxQH7hvKSg9QKphALoAAQLpAAKpBAQKRA9H8BvQH7BxEWCRQEgCWAACjQAAClkgCVQkWCRn7BwQn8BxqRA9QqpA/rpAAQroAAqpg/g");
	this.shape_326.setTransform(399.875,88.15);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("rgba(255,255,255,0.067)").s().p("A2PLnQqQg9n6hwQn7hvkViRQkfiWAAikQAAijEfiWQEViRH7hvQH6hwKQg9QKog/LngBQLoABKnA/QKRA9H7BwQH6BvEVCRQEfCWABCjQgBCkkfCWQkVCRn6BvQn7BwqRA9QqnBAroAAQrnAAqohAg");
	this.shape_327.setTransform(399.85,88.15);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("rgba(255,255,255,0.067)").s().p("A2MLmQqQg9n5hwQn6hvkViRQkeiVAAikQAAijEeiVQEViRH6hvQH5hwKQg8QKmhALmAAQLnAAKmBAQKPA8H6BwQH5BvEVCRQEfCVAACjQAACkkfCVQkVCRn5BvQn6BwqPA9QqmA/rnAAQrmAAqmg/g");
	this.shape_328.setTransform(399.875,88.15);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("rgba(255,255,255,0.067)").s().p("A2KLkQqOg8n5hwQn4hvkViQQkeiVAAikQAAijEeiVQEViRH4huQH5hvKOg9QKlg/LlAAQLlAAKmA/QKNA9H5BvQH5BuEUCRQEfCVAACjQAACkkfCVQkUCQn5BvQn5BwqNA8QqmBArlgBQrlABqlhAg");
	this.shape_329.setTransform(399.875,88.15);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("rgba(255,255,255,0.067)").s().p("A2HLjQqNg8n4hwQn3hukViRQkeiUAAikQAAijEeiUQEViRH3huQH4hvKNg9QKkg/LjAAQLlAAKkA/QKMA9H4BvQH3BuEVCRQEeCUAACjQAACkkeCUQkVCRn3BuQn4BwqMA8QqkA/rlAAQrjAAqkg/g");
	this.shape_330.setTransform(399.85,88.15);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("rgba(255,255,255,0.067)").s().p("A2FLiQqMg8n3hvQn2hwkUiPQkdiVAAijQAAiiEdiVQEUiPH2hwQH3huKMg9QKjg/LiAAQLjAAKjA/QKLA9H3BuQH3BwEUCPQEdCVAACiQAACjkdCVQkUCPn3BwQn3BvqLA8QqjA/rjAAQriAAqjg/g");
	this.shape_331.setTransform(399.875,88.15);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("rgba(255,255,255,0.067)").s().p("A2CLhQqLg9n2huQn2hvkTiQQkdiUAAijQAAiiEdiUQETiQH2hvQH2huKLg9QKhg/LhAAQLiAAKhA/QKLA9H2BuQH2BvETCQQEdCUAACiQAACjkdCUQkTCQn2BvQn2BuqLA9QqhA/riAAQrhAAqhg/g");
	this.shape_332.setTransform(399.875,88.15);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("rgba(255,255,255,0.067)").s().p("A1/LgQqKg9n1huQn1hvkTiQQkciUgBiiQABiiEciUQETiPH1hvQH1huKKg8QKgg/LfAAQLgAAKhA/QKJA8H2BuQH0BvEUCPQEbCUAACiQAACikbCUQkUCQn0BvQn2BuqJA9QqhA+rgAAQrfAAqgg+g");
	this.shape_333.setTransform(399.85,88.15);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("rgba(255,255,255,0.067)").s().p("A19LfQqJg9n0huQn0hvkTiPQkbiUAAiiQAAiiEbiTQETiQH0huQH0huKJg8QKfg/LeAAQLfAAKfA/QKIA8H1BuQH0BuESCQQEcCTAACiQAACikcCUQkSCPn0BvQn1BuqIA9QqfA9rfAAQreAAqfg9g");
	this.shape_334.setTransform(399.875,88.15);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("rgba(255,255,255,0.067)").s().p("A17LdQqHg8n0hvQnzhtkSiQQkbiTAAiiQAAihEbiTQESiPHzhvQH0huKHg7QKeg/LdAAQLeAAKeA/QKHA7HzBuQH0BvERCPQEcCTAAChQAACikcCTQkRCQn0BtQnzBvqHA8QqeA+reAAQrdAAqeg+g");
	this.shape_335.setTransform(399.875,88.15);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("rgba(255,255,255,0.067)").s().p("A15LbQqGg8nzhuQnyhukRiOQkbiUAAihQAAihEbiTQERiOHyhuQHzhuKGg8QKeg/LbAAQLcAAKdA/QKGA8HzBuQHyBuESCOQEbCTAAChQAAChkbCUQkSCOnyBuQnzBuqGA8QqdA/rcAAQrbAAqeg/g");
	this.shape_336.setTransform(399.875,88.15);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("rgba(255,255,255,0.067)").s().p("A12LaQqFg7nyhvQnxhtkRiPQkaiTAAihQAAihEaiSQERiPHxhtQHyhuKFg8QKcg+LaAAQLbAAKcA+QKFA8HyBuQHxBtERCPQEaCSAAChQAAChkaCTQkRCPnxBtQnyBvqFA7QqcA/rbgBQraABqcg/g");
	this.shape_337.setTransform(399.875,88.15);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("rgba(255,255,255,0.067)").s().p("A10LZQqEg8nxhuQnwhtkQiPQkaiSAAihQAAigEaiSQEQiPHwhtQHxhuKEg7QKbg/LZAAQLaAAKbA/QKDA7HxBuQHxBtEQCPQEaCSAACgQAAChkaCSQkQCPnxBtQnxBuqDA8QqbA+raAAQrZAAqbg+g");
	this.shape_338.setTransform(399.85,88.15);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("rgba(255,255,255,0.067)").s().p("A1xLYQqDg8nwhtQnwhukQiOQkZiSAAihQAAigEZiSQEQiOHwhtQHwhtKDg9QKZg9LYgBQLZABKZA9QKDA9HwBtQHvBtEQCOQEaCSAACgQAAChkaCSQkQCOnvBuQnwBtqDA8QqZA+rZAAQrYAAqZg+g");
	this.shape_339.setTransform(399.875,88.15);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("rgba(255,255,255,0.067)").s().p("A1vLXQqBg8nwhtQnuhtkQiPQkYiSAAigQAAifEYiSQEQiPHuhtQHwhtKBg7QKZg/LWAAQLXAAKZA/QKBA7HvBtQHvBtEPCPQEZCSAACfQAACgkZCSQkPCPnvBtQnvBtqBA8QqZA9rXABQrWgBqZg9g");
	this.shape_340.setTransform(399.875,88.15);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("rgba(255,255,255,0.067)").s().p("A1sLWQqBg9nuhsQnuhtkPiOQkYiRAAihQAAifEYiSQEPiOHuhtQHuhsKBg8QKXg+LVAAQLWAAKXA+QKAA8HvBsQHuBtEPCOQEYCSAACfQAAChkYCRQkPCOnuBtQnvBsqAA9QqXA9rWAAQrVAAqXg9g");
	this.shape_341.setTransform(399.875,88.15);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("rgba(255,255,255,0.067)").s().p("A1sLWQqBg9nuhsQnuhtkPiOQkYiRAAihQAAifEYiSQEPiOHuhtQHuhsKBg8QKXg+LVAAQLWAAKXA+QKAA8HvBsQHuBtEOCOQEZCSAACfQAAChkZCRQkOCOnuBtQnvBsqAA9QqXA9rWAAQrVAAqXg9g");
	this.shape_342.setTransform(399.875,88.15);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("rgba(255,255,255,0.067)").s().p("A1vLXQqBg8nwhtQnuhtkQiPQkYiSAAigQAAifEYiSQEQiPHuhtQHwhtKBg7QKZg+LWAAQLXAAKZA+QKBA7HvBtQHvBtEPCPQEZCSAACfQAACgkZCSQkPCPnvBtQnvBtqBA8QqZA9rXAAQrWAAqZg9g");
	this.shape_343.setTransform(399.875,88.15);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("rgba(255,255,255,0.067)").s().p("A1xLYQqDg8nwhtQnwhukPiOQkZiSAAihQAAigEZiSQEPiOHwhtQHwhtKDg9QKZg9LYgBQLZABKZA9QKCA9HwBtQHwBtEQCOQEZCSAACgQAAChkZCSQkQCOnwBuQnwBtqCA8QqZA+rZAAQrYAAqZg+g");
	this.shape_344.setTransform(399.875,88.15);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("rgba(255,255,255,0.067)").s().p("A1zLZQqEg8nxhuQnxhtkQiPQkaiSAAihQAAigEaiSQEQiPHxhtQHxhuKEg7QKag/LZAAQLaAAKaA/QKEA7HxBuQHwBtERCPQEaCSAACgQAAChkaCSQkRCPnwBtQnxBuqEA8QqaA+raAAQrZAAqag+g");
	this.shape_345.setTransform(399.875,88.15);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("rgba(255,255,255,0.067)").s().p("A12LaQqFg7nyhvQnxhtkRiPQkaiTAAihQAAihEaiSQERiPHxhtQHyhuKFg8QKcg+LaAAQLbAAKcA+QKEA8HyBuQHyBtEQCPQEbCSAAChQAAChkbCTQkQCPnyBtQnyBvqEA7QqcA/rbgBQraABqcg/g");
	this.shape_346.setTransform(399.875,88.15);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("rgba(255,255,255,0.067)").s().p("A14LbQqHg8nyhuQnyhtkSiQQkaiTAAihQAAihEaiSQESiQHyhtQHyhuKHg8QKdg+LbAAQLcAAKdA+QKGA8HzBuQHyBtERCQQEbCSAAChQAAChkbCTQkRCQnyBtQnzBuqGA8QqdA/rcgBQrbABqdg/g");
	this.shape_347.setTransform(399.875,88.15);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("rgba(255,255,255,0.067)").s().p("A17LdQqHg8n0hvQnzhtkRiQQkbiTAAiiQAAihEbiTQERiPHzhvQH0htKHg8QKeg/LdAAQLeAAKeA/QKHA8HzBtQHzBvESCPQEbCTAAChQAACikbCTQkSCQnzBtQnzBvqHA8QqeA+reAAQrdAAqeg+g");
	this.shape_348.setTransform(399.875,88.15);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("rgba(255,255,255,0.067)").s().p("A19LeQqIg8n1huQn0hvkSiPQkbiUAAiiQAAihEbiUQESiPH0hvQH1htKIg9QKfg+LegBQLfABKgA+QKIA9HzBtQH0BvETCPQEcCUAAChQAACikcCUQkTCPn0BvQnzBuqIA8QqgA/rfgBQreABqfg/g");
	this.shape_349.setTransform(399.85,88.15);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("rgba(255,255,255,0.067)").s().p("A2ALgQqJg9n1hvQn1hukTiQQkciUAAiiQAAiiEciUQETiPH1huQH1hvKJg8QKhg/LfAAQLgAAKgA/QKKA8H1BvQH1BuESCPQEdCUAACiQAACikdCUQkSCQn1BuQn1BvqKA9QqgA+rgAAQrfAAqhg+g");
	this.shape_350.setTransform(399.875,88.15);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("rgba(255,255,255,0.067)").s().p("A2CLhQqKg9n3hvQn1hukUiQQkciUAAijQAAiiEciUQEUiQH1huQH3hvKKg8QKig/LgAAQLiAAKhA/QKLA8H1BvQH2BuETCQQEdCUAACiQAACjkdCUQkTCQn2BuQn1BvqLA9QqhA+riAAQrgAAqig+g");
	this.shape_351.setTransform(399.85,88.15);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("rgba(255,255,255,0.067)").s().p("A2ELiQqMg9n3hvQn3hvkTiPQkdiVAAijQAAiiEdiVQETiPH3hvQH3hvKMg9QKig/LiAAQLjAAKiA/QKMA9H3BvQH2BvEUCPQEdCVAACiQAACjkdCVQkUCPn2BvQn3BvqMA9QqiA/rjAAQriAAqig/g");
	this.shape_352.setTransform(399.875,88.15);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("rgba(255,255,255,0.067)").s().p("A2HLjQqNg8n4hwQn3hukUiRQkdiUAAikQAAijEdiUQEUiQH3hvQH4hvKNg8QKkhALjAAQLkAAKkBAQKMA8H4BvQH3BvEUCQQEeCUAACjQAACkkeCUQkUCRn3BuQn4BwqMA8QqkA/rkAAQrjAAqkg/g");
	this.shape_353.setTransform(399.875,88.15);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("rgba(255,255,255,0.067)").s().p("A2JLkQqOg8n5hwQn4hvkViQQkeiVAAikQAAijEeiVQEViQH4hvQH5hvKOg9QKlg/LkAAQLlAAKlA/QKOA9H4BvQH5BvEUCQQEfCVAACjQAACkkfCVQkUCQn5BvQn4BwqOA8QqlBArlgBQrkABqlhAg");
	this.shape_354.setTransform(399.875,88.15);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("rgba(255,255,255,0.067)").s().p("A2MLlQqPg8n5hwQn5hvkWiRQkeiVAAikQAAijEeiVQEWiRH5hvQH5hvKPg9QKmhALmABQLmgBKnBAQKOA9H6BvQH5BvEVCRQEfCVAACjQAACkkfCVQkVCRn5BvQn6BwqOA8QqnA/rmAAQrmAAqmg/g");
	this.shape_355.setTransform(399.875,88.15);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("rgba(255,255,255,0.067)").s().p("A2OLnQqQg9n6hwQn6hvkWiRQkfiWAAikQAAijEfiWQEWiRH6hvQH6hvKQg+QKng/LnAAQLoAAKnA/QKQA+H7BvQH6BvEVCRQEfCWAACjQAACkkfCWQkVCRn6BvQn7BwqQA9QqnA/roAAQrnAAqng/g");
	this.shape_356.setTransform(399.85,88.15);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("rgba(255,255,255,0.067)").s().p("A2RLoQqRg9n7hwQn7hvkWiSQkfiVAAilQAAijEfiWQEWiSH7hvQH7hvKRg+QKpg/LogBQLpABKoA/QKRA+H8BvQH6BvEWCSQEgCWAACjQAAClkgCVQkWCSn6BvQn8BwqRA9QqoBArpAAQroAAqphAg");
	this.shape_357.setTransform(399.875,88.15);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("rgba(255,255,255,0.067)").s().p("A2TLqQqSg+n9hwQn7hwkWiRQkhiWABilQgBikEhiVQEWiSH7hwQH9hwKSg9QKqhALpAAQLrAAKpBAQKSA9H8BwQH8BwEXCSQEfCVABCkQgBClkfCWQkXCRn8BwQn8BwqSA+QqpA/rrAAQrpAAqqg/g");
	this.shape_358.setTransform(399.85,88.15);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("rgba(255,255,255,0.067)").s().p("A2VLrQqUg+n9hwQn9hwkWiSQkhiWAAilQAAikEhiWQEWiSH9hwQH9hwKUg+QKqg/LrAAQLsAAKqA/QKTA+H9BwQH9BwEXCSQEhCWAACkQAAClkhCWQkXCSn9BwQn9BwqTA+QqqA/rsAAQrrAAqqg/g");
	this.shape_359.setTransform(399.875,88.15);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("rgba(255,255,255,0.067)").s().p("A2YLsQqVg9n9hxQn9hwkYiTQkhiVAAimQAAilEhiVQEYiTH9hwQH9hwKVg9QKthBLrABQLtgBKsBBQKUA9H+BwQH+BwEXCTQEhCVAAClQAACmkhCVQkXCTn+BwQn+BxqUA9QqsA/rtAAQrrAAqtg/g");
	this.shape_360.setTransform(399.85,88.15);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("rgba(255,255,255,0.067)").s().p("A2aLtQqWg9n/hxQn+hxkYiSQkhiXAAilQAAilEhiWQEYiTH+hwQH/hxKWg9QKthALtAAQLuAAKtBAQKVA9H/BxQH+BwEYCTQEiCWAAClQAAClkiCXQkYCSn+BxQn/BxqVA9QqtBAruAAQrtAAqthAg");
	this.shape_361.setTransform(399.875,88.15);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("rgba(255,255,255,0.067)").s().p("A2cLuQqYg9n/hxQn/hwkZiTQkhiXAAimQAAilEhiXQEZiSH/hxQH/hwKYg+QKuhBLuAAQLvAAKuBBQKXA+IABwQH/BxEYCSQEjCXAAClQAACmkjCXQkYCTn/BwQoABxqXA9QquBArvAAQruAAquhAg");
	this.shape_362.setTransform(399.85,88.15);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("rgba(255,255,255,0.067)").s().p("A2fLwQqYg+oAhxQoAhxkZiTQkjiXAAimQAAilEjiXQEZiTIAhxQIAhwKYg/QKwg/LvgBQLxABKvA/QKYA/IABwQIABxEZCTQEiCXAAClQAACmkiCXQkZCToABxQoABxqYA+QqvBArxAAQrvAAqwhAg");
	this.shape_363.setTransform(399.85,88.15);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("rgba(255,255,255,0.067)").s().p("A2hLxQqZg+oChxQoBhxkZiTQkjiXAAinQAAimEjiXQEZiTIBhxQIChxKZg+QKwhALxAAQLyAAKxBAQKYA+IBBxQIBBxEaCTQEjCXAACmQAACnkjCXQkaCToBBxQoBBxqYA+QqxBAryAAQrxAAqwhAg");
	this.shape_364.setTransform(399.85,88.15);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("rgba(255,255,255,0.067)").s().p("A2kLzQqag/oChxQoChykaiTQkjiXAAinQAAilEjiYQEaiTIChyQIChxKag+QKyhBLyAAQLzAAKyBBQKaA+ICBxQIBByEaCTQEkCYAAClQAACnkkCXQkaCToBByQoCBxqaA/QqyBArzAAQryAAqyhAg");
	this.shape_365.setTransform(399.85,88.15);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("rgba(255,255,255,0.067)").s().p("A2mL0Qqcg/oDhxQoChykbiTQkjiYAAinQAAimEjiYQEbiUIChxQIDhxKcg+QKyhBL0AAQL0AAKzBBQKbA+IDBxQIDBxEaCUQEkCYAACmQAACnkkCYQkaCToDByQoDBxqbA/QqzBAr0AAQr0AAqyhAg");
	this.shape_366.setTransform(399.875,88.15);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("rgba(255,255,255,0.067)").s().p("A2pL1Qqcg/oEhxQoEhykaiUQkkiYgBinQABimEkiZQEaiTIEhyQIEhyKcg9QK0hBL1AAQL2AAK0BBQKcA9IEByQIDByEbCTQElCZgBCmQABCnklCYQkbCUoDByQoEBxqcA/Qq0BAr2AAQr1AAq0hAg");
	this.shape_367.setTransform(399.85,88.15);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("rgba(255,255,255,0.067)").s().p("A2rL2Qqeg/oFhxQoEhykbiUQkliYAAioQAAinEliYQEbiUIEhyQIFhyKeg9QK1hBL2AAQL3AAK1BBQKdA9IFByQIEByEbCUQEmCYAACnQAACokmCYQkbCUoEByQoFBxqdA/Qq1BAr3AAQr2AAq1hAg");
	this.shape_368.setTransform(399.875,88.15);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("rgba(255,255,255,0.067)").s().p("A2tL3Qqfg+oFhyQoGhykbiUQkmiZAAioQAAinEmiZQEbiUIGhyQIFhxKfg/QK2hBL3AAQL4AAK3BBQKeA/IGBxQIEByEdCUQElCZAACnQAACoklCZQkdCUoEByQoGByqeA+Qq3BBr4AAQr3AAq2hBg");
	this.shape_369.setTransform(399.85,88.15);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("rgba(255,255,255,0.067)").s().p("A2wL4Qqgg+oGhyQoGhzkdiUQkliZAAioQAAinEliZQEdiUIGhzQIGhyKgg+QK3hCL5AAQL6AAK3BCQKfA+IHByQIGBzEcCUQEmCZAACnQAACokmCZQkcCUoGBzQoHByqfA+Qq3BCr6AAQr5AAq3hCg");
	this.shape_370.setTransform(399.85,88.15);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("rgba(255,255,255,0.067)").s().p("A2zL6Qqhg/oGhyQoIhzkciUQkmiaAAioQAAinEmiaQEciVIIhyQIGhyKhg/QK6hAL5gBQL7ABK4BAQKhA/IIByQIGByEdCVQEmCaABCnQgBCokmCaQkdCUoGBzQoIByqhA/Qq4BBr7AAQr5AAq6hBg");
	this.shape_371.setTransform(399.85,88.15);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("rgba(255,255,255,0.067)").s().p("A21L7Qqig+oIh0QoIhykdiVQkniZAAipQAAinEniaQEdiVIIhyQIIhzKig/QK6hBL7AAQL8AAK6BBQKiA/IHBzQIJByEdCVQEnCaAACnQAACpknCZQkdCVoJByQoHB0qiA+Qq6BBr8AAQr7AAq6hBg");
	this.shape_372.setTransform(399.85,88.15);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("rgba(255,255,255,0.067)").s().p("A23L9Qqkg/oIh0QoJhykeiVQkniaAAipQAAioEniaQEeiVIJhyQIIh0Kkg+QK7hBL8AAQL9AAK7BBQKjA+IJB0QIJByEdCVQEoCaAACoQAACpkoCaQkdCVoJByQoJB0qjA/Qq7BBr9gBQr8ABq7hBg");
	this.shape_373.setTransform(399.85,88.15);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("rgba(255,255,255,0.067)").s().p("A26L9Qqkg/oKhzQoJhykfiWQkniaAAipQAAioEniaQEfiWIJhyQIKh0Kkg+QK9hCL9AAQL+AAK8BCQKlA+IJB0QIKByEeCWQEoCaAACoQAACpkoCaQkeCWoKByQoJBzqlA/Qq8BCr+AAQr9AAq9hCg");
	this.shape_374.setTransform(399.85,88.15);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("rgba(255,255,255,0.067)").s().p("A28L/Qqmg/oKh0QoKhykfiWQkpibABipQgBipEpiaQEfiWIKhyQIKh0Kmg+QK9hCL/AAQMAAAK9BCQKlA+ILB0QIKByEfCWQEpCaAACpQAACpkpCbQkfCWoKByQoLB0qlA/Qq9BBsAAAQr/AAq9hBg");
	this.shape_375.setTransform(399.85,88.15);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("rgba(255,255,255,0.067)").s().p("A2+MAQqng/oMh0QoLhykfiXQkpiaAAiqQAAioEpibQEfiWILh0QIMhzKng+QK+hDMAAAQMBAAK/BDQKmA+ILBzQIMB0EeCWQEpCbAACoQAACqkpCaQkeCXoMByQoLB0qmA/Qq/BCsBAAQsAAAq+hCg");
	this.shape_376.setTransform(399.85,88.15);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("rgba(255,255,255,0.067)").s().p("A3BMBQqng/oNhzQoMh0kfiWQkpibAAiqQAAipEpibQEfiWIMh0QINhzKng/QLAhCMBAAQMCAALABCQKnA/INBzQIMB0EfCWQEpCbABCpQgBCqkpCbQkfCWoMB0QoNBzqnA/QrABCsCAAQsBAArAhCg");
	this.shape_377.setTransform(399.85,88.15);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("rgba(255,255,255,0.067)").s().p("A3EMDQqohAoOhzQoMh0kgiXQkqiaAAirQAAiqEqiaQEgiXIMh0QIOhzKohAQLBhBMDAAQMEAALABBQKpBAINBzQINB0EgCXQEqCaAACqQAACrkqCaQkgCXoNB0QoNBzqpBAQrABBsEAAQsDAArBhBg");
	this.shape_378.setTransform(399.85,88.15);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("rgba(255,255,255,0.067)").s().p("A3GMEQqpg/oOh0QoPh1kgiWQkqicAAiqQAAipEqicQEgiWIPh1QIOhzKphAQLChCMEABQMFgBLCBCQKpBAIPBzQIOB1EfCWQErCcAACpQAACqkrCcQkfCWoOB1QoPB0qpA/QrCBBsFAAQsEAArChBg");
	this.shape_379.setTransform(399.85,88.15);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("rgba(255,255,255,0.067)").s().p("A3IMGQqrhBoPhzQoPh1kgiXQkribgBirQABiqEribQEgiYIPh0QIPh0Krg/QLDhCMFAAQMGAALDBCQKrA/IPB0QIOB0EiCYQEqCbAACqQAACrkqCbQkiCXoOB1QoPBzqrBBQrDBBsGAAQsFAArDhBg");
	this.shape_380.setTransform(399.85,88.15);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("rgba(255,255,255,0.067)").s().p("A3LMGQqrg/oQh1QoQh0kiiXQkqicAAirQAAiqEqicQEiiXIQh0QIQh1Krg/QLEhCMHAAQMIAALDBCQKtA/IPB1QIQB0EhCXQErCcABCqQgBCrkrCcQkhCXoQB0QoPB1qtA/QrDBCsIAAQsHAArEhCg");
	this.shape_381.setTransform(399.85,88.15);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("rgba(255,255,255,0.067)").s().p("A3NMIQquhAoQh1QoRh0khiYQksibAAisQAAiqEsicQEhiYIRh0QIQh0KuhAQLFhDMIAAQMJAALFBDQKtBAIQB0QIRB0EiCYQEsCcAACqQAACsksCbQkiCYoRB0QoQB1qtBAQrFBCsJgBQsIABrFhCg");
	this.shape_382.setTransform(399.85,88.15);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("rgba(255,255,255,0.067)").s().p("A3PMJQqvhAoRh1QoRh0kjiYQksidAAirQAAiqEsidQEjiYIRh0QIRh1Kvg/QLGhDMJAAQMKAALHBDQKtA/ISB1QIRB0EjCYQEsCdAACqQAACrksCdQkjCYoRB0QoSB1qtBAQrHBCsKAAQsJAArGhCg");
	this.shape_383.setTransform(399.85,88.15);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("rgba(255,255,255,0.067)").s().p("A3SMKQqvg/oSh2QoTh0kiiZQkticAAisQAAirEtidQEiiYITh0QISh1KvhAQLIhDMKAAQMMAALHBDQKvBAITB1QISB0EjCYQEsCdAACrQAACsksCcQkjCZoSB0QoTB2qvA/QrHBCsMABQsKgBrIhCg");
	this.shape_384.setTransform(399.825,88.15);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("rgba(255,255,255,0.067)").s().p("A3VMMQqwhAoTh2QoTh1kkiYQktidAAisQAAisEticQEkiYITh1QITh1KwhAQLJhDMMAAQMNAALIBDQKxBAITB1QITB1EjCYQEuCcAACsQAACskuCdQkjCYoTB1QoTB2qxBAQrIBCsNAAQsMAArJhCg");
	this.shape_385.setTransform(399.85,88.15);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("rgba(255,255,255,0.067)").s().p("A3XMNQqxhBoUh1QoUh1kkiYQkuieAAisQAAirEuieQEkiYIUh1QIUh2KxhAQLLhCMMAAQMOAALKBCQKxBAIUB2QIUB1EkCYQEuCeAACrQAACskuCeQkkCYoUB1QoUB1qxBBQrKBCsOAAQsMAArLhCg");
	this.shape_386.setTransform(399.825,88.15);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("rgba(255,255,255,0.067)").s().p("A3ZMOQqzhAoVh2QoVh1kkiZQkuidAAitQAAisEuidQEkiZIVh1QIVh1KzhBQLLhCMOAAQMPAALLBCQKyBBIWB1QIVB1EjCZQEvCdAACsQAACtkvCdQkjCZoVB1QoWB2qyBAQrLBCsPAAQsOAArLhCg");
	this.shape_387.setTransform(399.85,88.15);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("rgba(255,255,255,0.067)").s().p("A3bMQQq1hBoWh2QoVh1kkiZQkvieAAitQAAisEvieQEkiZIVh1QIWh2K1hAQLMhDMPAAQMRAALLBDQK0BAIWB2QIWB1EkCZQEvCeAACsQAACtkvCeQkkCZoWB1QoWB2q0BBQrLBCsRAAQsPAArMhCg");
	this.shape_388.setTransform(399.85,88.15);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("rgba(255,255,255,0.067)").s().p("A3eMQQq1hAoWh2QoXh1kliaQkwidAAiuQAAisEwieQEliaIXh1QIWh2K1hAQLOhEMQAAQMSAALNBEQK0BAIYB2QIWB1ElCaQEwCegBCsQABCukwCdQklCaoWB1QoYB2q0BAQrNBEsSAAQsQAArOhEg");
	this.shape_389.setTransform(399.85,88.15);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("rgba(255,255,255,0.067)").s().p("A3gMSQq2hBoYh2QoXh2kmiZQkwifABitQgBisEwifQEmiZIXh2QIYh2K2hAQLOhDMSgBQMTABLPBDQK1BAIXB2QIYB2ElCZQExCfgBCsQABCtkxCfQklCZoYB2QoXB2q1BBQrPBDsTAAQsSAArOhDg");
	this.shape_390.setTransform(399.85,88.15);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("rgba(255,255,255,0.067)").s().p("A3jMTQq3hBoYh2QoYh2kniZQkwifAAiuQAAitEwifQEniZIYh2QIYh2K3hAQLQhEMTAAQMUAALQBEQK3BAIYB2QIZB2EmCZQEwCfAACtQAACukwCfQkmCZoZB2QoYB2q3BBQrQBDsUAAQsTAArQhDg");
	this.shape_391.setTransform(399.825,88.15);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("rgba(255,255,255,0.067)").s().p("A3mMVQq3hCoah2QoZh2kniaQkwifAAiuQAAitEwifQEniZIZh3QIah3K3hAQLRhDMVAAQMVAALRBDQK4BAIZB3QIZB3EnCZQExCfAACtQAACukxCfQknCaoZB2QoZB2q4BCQrRBDsVgBQsVABrRhDg");
	this.shape_392.setTransform(399.85,88.15);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("rgba(255,255,255,0.067)").s().p("A3oMWQq5hBoah3Qoah3kniZQkxigAAiuQAAitExifQEnibIah2QIah2K5hBQLThEMVAAQMXAALSBEQK5BBIaB2QIaB2EnCbQExCfAACtQAACukxCgQknCZoaB3QoaB3q5BBQrSBDsXAAQsVAArThDg");
	this.shape_393.setTransform(399.825,88.15);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("rgba(255,255,255,0.067)").s().p("A3qMXQq7hBobh3Qoah3koiaQkxifAAivQAAiuExifQEoiaIah3QIbh3K7hBQLThDMXAAQMYAALTBDQK7BBIaB3QIbB3EoCaQExCfABCuQgBCvkxCfQkoCaobB3QoaB3q7BBQrTBDsYAAQsXAArThDg");
	this.shape_394.setTransform(399.85,88.15);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("rgba(255,255,255,0.067)").s().p("A3sMYQq8hBoch3Qoch3knibQkzifAAivQAAiuEzifQEnibIch3QIch3K8hBQLUhEMYAAQMaAALUBEQK7BBIcB3QIcB3EoCbQEyCfAACuQAACvkyCfQkoCbocB3QocB3q7BBQrUBDsaAAQsYAArUhDg");
	this.shape_395.setTransform(399.825,88.15);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("rgba(255,255,255,0.067)").s().p("A3vMZQq9hBodh3Qoch3kpibQkyigAAivQAAivEyifQEpibIch3QIdh3K9hBQLWhEMZAAQMbAALVBEQK9BBIcB3QIdB3EoCbQEzCfAACvQAACvkzCgQkoCbodB3QocB3q9BBQrVBEsbAAQsZAArWhEg");
	this.shape_396.setTransform(399.85,88.15);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("rgba(255,255,255,0.067)").s().p("A3xMbQq+hCoeh3Qodh3kpicQkzigAAivQAAiuEzigQEpibIdh4QIeh3K+hBQLXhEMagBQMcABLWBEQK+BBIeB3QIdB4EpCbQEzCgAACuQAACvkzCgQkpCcodB3QoeB3q+BCQrWBEscAAQsaAArXhEg");
	this.shape_397.setTransform(399.825,88.15);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("rgba(255,255,255,0.067)").s().p("A30McQq/hCoeh3Qoeh4kqibQkzigAAiwQAAivEzigQEqicIeh3QIeh4K/hAQLYhEMcgBQMdABLYBEQK/BAIeB4QIeB3EqCcQEzCgAACvQAACwkzCgQkqCboeB4QoeB3q/BCQrYBEsdAAQscAArYhEg");
	this.shape_398.setTransform(399.825,88.15);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("rgba(255,255,255,0.067)").s().p("A32MeQrAhCofh4Qogh4kpicQk1igAAiwQAAivE1igQEpicIgh4QIfh3LAhCQLZhEMdAAQMfAALYBEQLABCIgB3QIfB4EqCcQE0CgAACvQAACwk0CgQkqCcofB4QogB4rABCQrYBDsfAAQsdAArZhDg");
	this.shape_399.setTransform(399.825,88.15);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("rgba(255,255,255,0.067)").s().p("A35MfQrBhCogh4Qogh4kqicQk1igAAixQAAiwE1igQEqicIgh4QIgh4LBhBQLbhEMeAAQMgAALaBEQLBBBIgB4QIgB4EqCcQE1CgAACwQAACxk1CgQkqCcogB4QogB4rBBCQraBEsggBQseABrbhEg");
	this.shape_400.setTransform(399.825,88.15);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("rgba(255,255,255,0.067)").s().p("A37MgQrDhCohh4Qogh4kridQk1igAAixQAAiwE1ihQEribIgh5QIhh4LDhCQLbhEMgAAQMhAALbBEQLCBCIhB4QIhB5EqCbQE2ChAACwQAACxk2CgQkqCdohB4QohB4rCBCQrbBEshAAQsgAArbhEg");
	this.shape_401.setTransform(399.85,88.15);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("rgba(255,255,255,0.067)").s().p("A39MhQrEhCoih4Qohh4ksidQk1ihAAixQAAiwE1ihQEsidIhh4QIih4LEhCQLchEMhAAQMiAALdBEQLDBCIiB4QIhB4EsCdQE1ChAACwQAACxk1ChQksCdohB4QoiB4rDBCQrdBEsiAAQshAArchEg");
	this.shape_402.setTransform(399.825,88.15);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("rgba(255,255,255,0.067)").s().p("A4AMiQrEhCokh5Qoih4ksicQk1ihAAiyQAAixE1ihQEsidIih3QIkh5LEhCQLdhFMjAAQMjAALdBFQLFBCIjB5QIiB3EsCdQE2ChABCxQgBCyk2ChQksCcoiB4QojB5rFBCQrdBFsjAAQsjAArdhFg");
	this.shape_403.setTransform(399.85,88.15);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("rgba(255,255,255,0.067)").s().p("A4CMjQrGhCojh5Qokh4ksidQk3ihAAiyQAAiwE3iiQEsidIkh5QIjh5LGhBQLfhFMjAAQMlAALeBFQLGBBIjB5QIkB5EsCdQE3CiAACwQAACyk3ChQksCdokB4QojB5rGBCQreBFslAAQsjAArfhFg");
	this.shape_404.setTransform(399.825,88.15);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("rgba(255,255,255,0.067)").s().p("A4FMlQrGhColh5Qokh5ktidQk3iiAAiyQAAixE3iiQEtidIkh5QIlh5LGhBQLghGMlABQMmgBLgBGQLHBBIkB5QIkB5EtCdQE3CiAACxQAACyk3CiQktCdokB5QokB5rHBCQrgBEsmABQslgBrghEg");
	this.shape_405.setTransform(399.825,88.15);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("rgba(255,255,255,0.067)").s().p("A4HMmQrIhColh5Qolh6kuicQk3ijAAiyQAAixE3ijQEuidIlh5QIlh5LIhCQLhhFMmABQMngBLhBFQLIBCIlB5QIlB5EuCdQE3CjAACxQAACyk3CjQkuCcolB6QolB5rIBCQrhBEsnAAQsmAArhhEg");
	this.shape_406.setTransform(399.825,88.15);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("rgba(255,255,255,0.067)").s().p("A4KMoQrJhDomh5Qomh5ktieQk4iiAAizQAAixE4ijQEtieImh5QImh5LJhCQLjhFMnAAQMpAALiBFQLJBCImB5QImB5EtCeQE4CjAACxQAACzk4CiQktCeomB5QomB5rJBDQriBEspAAQsnAArjhEg");
	this.shape_407.setTransform(399.825,88.15);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("rgba(255,255,255,0.067)").s().p("A4MMpQrKhDonh5Qonh6kuidQk5ijAAizQAAiyE5ijQEuidInh5QInh6LKhCQLkhFMogBQMqABLjBFQLKBCInB6QInB5EuCdQE5CjAACyQAACzk5CjQkuCdonB6QonB5rKBDQrjBEsqAAQsoAArkhEg");
	this.shape_408.setTransform(399.825,88.15);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("rgba(255,255,255,0.067)").s().p("A4RMrQrMhCoph7Qooh5kwieQk5ikAAizQAAiyE5ijQEwifIoh5QIph6LMhCQLmhGMrAAQMsAALmBGQLMBCIpB6QIoB5EwCfQE5CjAACyQAACzk5CkQkwCeooB5QopB7rMBCQrmBFssAAQsrAArmhFg");
	this.shape_409.setTransform(399.825,88.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_273,p:{scaleX:1,scaleY:1,x:399.825,y:88.15}}]}).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_304}]},1).to({state:[{t:this.shape_305}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_308}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_311}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_313}]},1).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_316}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_273,p:{scaleX:0.8911,scaleY:0.8911,x:399.8603,y:88.1594}}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_355}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_358}]},1).to({state:[{t:this.shape_359}]},1).to({state:[{t:this.shape_360}]},1).to({state:[{t:this.shape_361}]},1).to({state:[{t:this.shape_362}]},1).to({state:[{t:this.shape_363}]},1).to({state:[{t:this.shape_364}]},1).to({state:[{t:this.shape_365}]},1).to({state:[{t:this.shape_366}]},1).to({state:[{t:this.shape_367}]},1).to({state:[{t:this.shape_368}]},1).to({state:[{t:this.shape_369}]},1).to({state:[{t:this.shape_370}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_372}]},1).to({state:[{t:this.shape_373}]},1).to({state:[{t:this.shape_374}]},1).to({state:[{t:this.shape_375}]},1).to({state:[{t:this.shape_376}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_378}]},1).to({state:[{t:this.shape_379}]},1).to({state:[{t:this.shape_380}]},1).to({state:[{t:this.shape_381}]},1).to({state:[{t:this.shape_382}]},1).to({state:[{t:this.shape_383}]},1).to({state:[{t:this.shape_384}]},1).to({state:[{t:this.shape_385}]},1).to({state:[{t:this.shape_386}]},1).to({state:[{t:this.shape_387}]},1).to({state:[{t:this.shape_388}]},1).to({state:[{t:this.shape_389}]},1).to({state:[{t:this.shape_390}]},1).to({state:[{t:this.shape_391}]},1).to({state:[{t:this.shape_392}]},1).to({state:[{t:this.shape_393}]},1).to({state:[{t:this.shape_394}]},1).to({state:[{t:this.shape_395}]},1).to({state:[{t:this.shape_396}]},1).to({state:[{t:this.shape_397}]},1).to({state:[{t:this.shape_398}]},1).to({state:[{t:this.shape_399}]},1).to({state:[{t:this.shape_400}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_402}]},1).to({state:[{t:this.shape_403}]},1).to({state:[{t:this.shape_404}]},1).to({state:[{t:this.shape_405}]},1).to({state:[{t:this.shape_406}]},1).to({state:[{t:this.shape_407}]},1).to({state:[{t:this.shape_408}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_273,p:{scaleX:1,scaleY:1,x:399.825,y:88.15}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,799.7,176.3);


(lib.ClipGroup_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("ARkPPQh1ghjPhpQjWhthtghQjFg9jLAZQiFAQjRBIQkBBYhRATQkZBDlognQjggYmihfQilglhagtQiFhBgyhrQguhjAhh2QAfhwBXhQQCRiEEMgcQhUiMAAirQABirBUiMQBViMCXhQQCXhQCjAKIAdgSQJ1CeILAaQJNAeIziEQEmhEBagMQDagcCgA0QBHAYAuAsQA2A1gGA9QgDAZgRAlQgWAxgEAMQgbBZA9BbQAmA4BvBlQB0BpAnA2QBEBegRBZQgPBRhMA2QgzAlhxAsQiGA0gsAYQhdAzgmBFQgeA1gKBlQgMB5gMAoQgzCfi9A+QhcAfheAAQhUAAhWgYg");
	mask_1.setTransform(362.4558,240.5598);

	// Layer_3
	this.instance = new lib.CachedBmp_34();
	this.instance.setTransform(35.9,16.6,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(127.3,140.7,470.3,199.7), null);


(lib.guyfrombackwrist = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_33();
	this.instance.setTransform(-57.55,-13.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.guyfrombackwrist, new cjs.Rectangle(-57.5,-13.5,115,25), null);


(lib.guitarguyrighthand = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBD6BC").s().p("AhhB+QgJgSANgQIgGgkQAGgPAOgJIAWgNQAYgSgFg7QASghA6gjQBAglAAArIgCBsQAAAQgJARQgIARgPAMIg0A5QgiAlgzAAQgUAAgIgSg");
	this.shape.setTransform(8.9159,-5.0182);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8C4E61").s().p("AhkA8QgngXAAgjQgIgoBSgaQAhgKAnAIQALADAKgFIARgHQA4ADALAFQAfAMgDAsQg7AtgeAOQgSAJgoARQgPACgPAAQgjAAgcgQg");
	this.shape_1.setTransform(-5.0428,11.8471);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.guitarguyrighthand, new cjs.Rectangle(-19,-19.4,38.1,38.9), null);


(lib.guitarguyonlyhead = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_32();
	this.instance.setTransform(-24.4,-29.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.guitarguyonlyhead, new cjs.Rectangle(-24.4,-29.7,49,59.5), null);


(lib.guitarguylefthand = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_31();
	this.instance.setTransform(-35.95,-17.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.guitarguylefthand, new cjs.Rectangle(-35.9,-17.6,72,35.5), null);


(lib.fireonyoutext = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// _ךילע_שא (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("A4IImIAArPQAAg2g2AAIkDAAIAAihIFCAAQBfAAA5A3QA6A4gBB0IAALDgAlJDCICygiIiAogIDbAAIBqHxQAogVATgqQATgqAGg6QAEg7ABhjIAAiwIDYAAQgBDqgRB5QgQB6hPBaQhOBaisAjIkgA3gEgiSAEgQgigjAAg1QAAg1AigkQAjgkAzAAQA0AAAiAkQAiAkAAA1QAAA1giAjQgiAkg0AAQgzAAgjgkgAMBFBIhdrBIDPAAIAfERQAdgUAJgqQAIgqgBhVIgBhUIDPAAIAABOQAACFgzBUQgzBUiEAnIAOBuQCigJA8hQQA9hPgBiEIgCjkIDaAAIABDZQADDwiUB9QiVB9k9AAQgqAAgWgCgAfPE2IjHk7IhgE7IjOAAICGmbIAnhiIhwi5IDaAAIChEDIAkhzIAiiQIDOAAIiVG+ICkD4gAsNE2IDPoVIlOAAIAAlGIDCAAIAAClIFmAAIAACxIjPIFgAy6j0IgNiMIDZAAIAOCMIgBEKIjZAkgEgh/AARIgdlNIgHixIDPAAIgICxIgdFNg");
	mask_1.setTransform(375.4,93.5);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D28148","#F5D6AD"],[0,1],-0.1,-70.4,-0.1,70.3).s().p("Egr6AKdIAA05MBX1AAAIAAU5g");
	this.shape.setTransform(379.15,94.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fireonyoutext, new cjs.Rectangle(152.5,38.5,445.79999999999995,110), null);


(lib.bluecapwrist = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAC89F").s().p("AAWA3QgSgKgNgYIgRgPQgIgGgIAAIgLg7IAWAPQANAIAEAGQAGAHAOAPQAOAMAGAIIALARQAHALAJAIQACADgBADQAAADgDABQgGACgFAAQgJAAgJgFg");
	this.shape.setTransform(-20.9607,-13.2788);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAC89F").s().p("ABQBoIgUgLIhYhhQiQANg9g8ICegmIBNgMIA9gEQApgCANAGIALA8QgHABgDACQgEADABAHIB3BCIg5ASIgrAeQghAVgNAAQgFAAgDgDg");
	this.shape_1.setTransform(-38.1,-9.0803);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_3
	this.instance = new lib.CachedBmp_27();
	this.instance.setTransform(-58.6,-29.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bluecapwrist, new cjs.Rectangle(-61.5,-29.5,120.4,59), null);


(lib.blucapjusthead = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_25();
	this.instance.setTransform(-20.85,-24.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blucapjusthead, new cjs.Rectangle(-20.8,-24.5,41.5,49), null);


(lib.afrodudewrist = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(-41.25,-2.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.instance_1 = new lib.CachedBmp_7();
	this.instance_1.setTransform(-59.05,-22.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.afrodudewrist, new cjs.Rectangle(-59,-22.7,117.5,45.5), null);


(lib.afrodudejusthead = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-24.05,-30.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.afrodudejusthead, new cjs.Rectangle(-24,-30.1,48,60), null);


(lib.singleSmore = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_75();
	this.instance.setTransform(0,0.55,0.5,0.5);

	this.instance_1 = new lib.Path_330();
	this.instance_1.setTransform(84.65,3.4,1,1,0,0,0,77,3.4);
	this.instance_1.alpha = 0.3203;

	this.instance_2 = new lib.CachedBmp_74();
	this.instance_2.setTransform(7.1,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.singleSmore, new cjs.Rectangle(0,0,169.5,82), null);


(lib.winStar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween17("synched",0);
	this.instance.setTransform(0,0,0.498,0.498);

	this.instance_1 = new lib.Tween18("synched",0);
	this.instance_1.alpha = 0.7109;
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween19("synched",0);
	this.instance_2.alpha = 0.7109;
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween20("synched",0);
	this.instance_3.setTransform(0,0,0.4779,0.4779);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},7).to({state:[{t:this.instance_3}]},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,scaleX:1,scaleY:1,alpha:0.7109},4).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},4).to({_off:true,rotation:360},7).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false,rotation:720},7).to({_off:true,scaleX:0.4779,scaleY:0.4779,alpha:0},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-13.8,27.5,27.5);


(lib.TweenLoser = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_41 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(41).call(this.frame_41).wait(1));

	// Layer_1
	this.instance = new lib.Group();
	this.instance.setTransform(1.25,5.1,1.3274,1.3274,-48.4503,0,0,67.1,70.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(42));

	// Isolation_Mode_copy
	this.instance_1 = new lib.Tween15("synched",0);
	this.instance_1.setTransform(-34.6,-23.9,0.6729,0.6729,9.2265,0,0,-0.1,-0.1);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-78.6,y:-86.9,alpha:1},8).wait(20).to({startPosition:0},0).to({x:-34.6,y:-23.9,alpha:0},7).wait(7));

	// Isolation_Mode
	this.instance_2 = new lib.Tween16("synched",0);
	this.instance_2.setTransform(35.05,28.55,0.606,0.606,171.2578,0,0,-0.1,-0.2);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:80.05,y:76.55,alpha:1},8).wait(20).to({startPosition:0},0).to({x:35.05,y:28.55,alpha:0},7).wait(7));

	// Isolation_Mode
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D78E60").s().p("AgYAoQgFgDgGgGQgFgHgDgFQgCgGACgCIA8gyQAGgFANAPQAFAGACAGQADAGgDACIg7AyIgCAAIgGgBg");
	this.shape.setTransform(-2.2021,32.4491,0.9997,0.9997,-48.4818);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D78E60").s().p("AmSFuQgGgCgGgHQgFgGgCgGQgBgHADgCQDqjNGeljIAhgcIAZgWIBrhbQADgDAGADQAHACAFAGQAFAHACAGQACAGgEADIhrBcIgZAVIghAcQlsE5kcD3QAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAIgFgBg");
	this.shape_1.setTransform(-3.5074,87.1903,0.9997,0.9997,-48.4818);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(42));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.9,-133.3,258.4,275.3);


(lib.Tween14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#EADAC1","#EAC191","#EAC292","#EAC598","#CC7F3C"],[0.024,0.29,0.322,0.514,1],0,70.7,0,-70.6).s().p("AgfLBQkwgNkPhsIgVgKIgBAAQgkgTgPgaIgBAAIgDgHQgKgUgBgqIgOpUQgDhZAChgQACh3AIhDQACgSAKgRQAuhWDQgpIAggGIACAAIA3gIQBQgLBZgGIAdgCIAVgBIAIAAQDEgJCnAVQDAAYCIA+QArAUAaATQAjAZAQAfIAAABIAFAKQAJAWACAdQABATgBAiQgHChgQFBIgKD/QgHDIgEAVQgHAfgkAUQgVAMgtAMQj4BFj/AAQgrAAgqgCg");
	this.shape.setTransform(0.0181,0.0245);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:true},1).wait(11).to({_off:false},0).wait(4).to({_off:true},1).wait(16));

	// Isolation_Mode_copy
	this.instance = new lib.Tween15("synched",0);
	this.instance.setTransform(-17.65,-3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:9.2266,x:-73.65,y:-94.8},8).wait(1).to({startPosition:0},0).to({_off:true},1).wait(11).to({_off:false},0).wait(4).to({startPosition:0},0).to({_off:true},1).wait(16));

	// Isolation_Mode
	this.instance_1 = new lib.Tween16("synched",0);
	this.instance_1.setTransform(14.4,9.6,1,1,175.4928,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:184.9556,x:80.05,y:92.4},8).wait(1).to({startPosition:0},0).to({_off:true},1).wait(11).to({_off:false},0).wait(4).to({startPosition:0},0).to({_off:true},1).wait(16));

	// Isolation_Mode
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D78E60").s().p("AgYAoQgFgDgGgGQgFgHgDgFQgCgGACgCIA8gyQAGgFANAPQAFAGACAGQADAGgDACIg7AyIgCAAIgGgBg");
	this.shape_1.setTransform(-2.1994,32.4467,0.9997,0.9997,-48.4816);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D78E60").s().p("AmSFuQgGgCgGgHQgFgGgCgGQgBgHADgCQDqjNGeljIAhgcIAZgWIBrhbQADgDAGADQAHACAFAGQAFAHACAGQACAGgEADIhrBcIgZAVIghAcQlsE5kcD3QAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAIgFgBg");
	this.shape_2.setTransform(-3.505,87.1902,0.9997,0.9997,-48.4816);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},9).to({state:[]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},11).to({state:[{t:this.shape_2},{t:this.shape_1}]},4).to({state:[]},1).wait(16));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.5,-163.9,277.4,321.9);


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.TweenLoser("synched",0);
	this.instance.setTransform(-1.55,-10.1,1,1,0,0,0,-0.3,-1.1);

	this.instance_1 = new lib.Tween13("synched",0);
	this.instance_1.setTransform(-2,-13.05);
	this.instance_1.alpha = 0.1289;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.7,-83.7,150.9,216.7);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.TweenLoser("synched",0);
	this.instance.setTransform(-1.55,-10.1,1,1,0,0,0,-0.3,-1.1);

	this.instance_1 = new lib.Tween13("synched",0);
	this.instance_1.setTransform(-2,-13.05);
	this.instance_1.alpha = 0.1289;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance,p:{startPosition:0}}]}).to({state:[{t:this.instance_1},{t:this.instance,p:{startPosition:13}}]},13).to({state:[]},1).wait(28));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.7,-142.3,239.9,275.3);


(lib.singleMarshForBar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9D6D7").s().p("Ah4BhQgJgDgFgIQAjAPAkgCQAyACAygQQAZgIATgSQAUgSAJgYQALggACgiIAFgkQACgVgBgOIAEAHQADAJgBALIgEBdIgCAxQgBAogBADQgCAJgUAGQgyAOgxAAQg/AAg/gYg");
	this.shape.setTransform(0.6375,-12.0708);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D68D60").s().p("AgRAjQgHgBAAgDIACg9QAAgGAXABQAYgBAAAGIgCA9QAAADgHABQgHACgJAAQgKAAgHgCg");
	this.shape_1.setTransform(0,-27.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7E5D4").s().p("AhUgBQgEgBACgEQABgDADABQBSASBTgLQAEgBAAADQABADgDABIgBABQghAEgfAAQgzAAg1gLg");
	this.shape_2.setTransform(-1.4,-21.8611);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9D6D7").s().p("AAHA1IhHgSQgrgMgdAHIgBgmQAhgDAdAJQAqAKAlAEQAsAGAmgYQAKgHAQgSQARgSAJgGQgBAggDAeQgPAQgTANQgfAUgjAAQgNAAgOgDg");
	this.shape_3.setTransform(0.3,-14.4318);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer_6
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F9D6D7").s().p("Ah5APQALgSA4gIQAwgGApACQA0ADAjAOQgmgGgRgBQgfgDgZAEIhBAOQgcAGgWAAIgRgBg");
	this.shape_4.setTransform(-0.875,-25.8357);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// SingleMarshBarColor
	this.SingleMarshBarColor = new lib.SingleMarshBarColor();
	this.SingleMarshBarColor.name = "SingleMarshBarColor";
	this.SingleMarshBarColor.setTransform(0.3,-13.7,1,1,0,0,0,13.8,13.8);

	this.timeline.addTween(cjs.Tween.get(this.SingleMarshBarColor).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.singleMarshForBar, new cjs.Rectangle(-13.5,-30.7,27.7,30.8), null);


(lib.progressBar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// progressBarSpike
	this.progressBarSpike = new lib.progressBarSpike();
	this.progressBarSpike.name = "progressBarSpike";
	this.progressBarSpike.setTransform(-0.75,246.7);

	this.timeline.addTween(cjs.Tween.get(this.progressBarSpike).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3).p("EAEngsFMAAABYLQAAByhQBQQhRBRhyAAIgnAAQhyAAhRhRQhQhQAAhyMAAAhYLQAAhxBQhRQBRhRByAAIAnAAQByAABRBRQBQBRAABxg");
	this.shape.setTransform(0.0446,0.0756,0.7862,0.8757);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#25224C","#383E87"],[0,1],0,309.7,0,-309.6).s().p("EgATAwYQhyAAhRhQQhQhRAAhxMAAAhYLQAAhxBQhRQBRhQBygBIAnAAQByABBRBQQBQBRAABxMAAABYLQAABxhQBRQhRBQhyAAg");
	this.shape_1.setTransform(0.0446,0.0756,0.7862,0.8757);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.progressBar, new cjs.Rectangle(-27.8,-272.6,55.8,545.4000000000001), null);


(lib.g1_q = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_61();
	this.instance.setTransform(-250.95,-182.7,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_62();
	this.instance_1.setTransform(-250,-202.7,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_81();
	this.instance_2.setTransform(-75.6,-119.8,0.5,0.5);

	this.instance_3 = new lib.ClipGroup();
	this.instance_3.setTransform(-20.45,-9.45,2.4613,2.4606,0,0,0,61.1,96.4);

	this.instance_4 = new lib.CachedBmp_80();
	this.instance_4.setTransform(-142.8,-227.45,0.5,0.5);

	this.instance_5 = new lib.ClipGroup_1();
	this.instance_5.setTransform(46.15,32.05,2.4613,2.4606,0,0,0,76.5,79.5);

	this.instance_6 = new lib.CachedBmp_63();
	this.instance_6.setTransform(-250,-112.55,0.5,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E7BB89","#CD8341","#CC7F3C","#EAC191"],[0,0.431,0.596,1],-121.8,0,121.9,0).s().p("Ai0LRQgBheABgSQgKAKhXA2QgpgaghglQgSgTgXghQAMgOBwhwQj+gBiyg9Qg6gVgxgbIg0gfQAUAABIgJQjehAhyirQgxhJgqiMQAsAlBcAWQkEjhCjmfQAECkCbB+QCEBqClAeQCKAYBeAlQBZAjA6AxQAAh1BuhGQBdg6B1AAQB3AABdA6QBuBGAAB1QA6gxBZgjQBdglCLgYQClgeCDhqQCbh+AEikQCjGfkDDhQBcgWAsglIgbBWQgaBFgmA6QhzCsjeA/IA6AGQAYADALAAQgbAQgZAPQgyAbg6AVQiyA9j+ABIBQBPQAiAiAKANQgXAhgSATQghAlgoAaQhXg0gLgMQABARgBBfQhQAbhlAAQhkAAhQgbgAi6jxQg6AKACBSQACBCAbAxQAfA1A2AqQBBA0A/AAQBBAABBg0QA1gqAfg1QAbgxAChCQAChSg5gKQg8gLg2AVQgpAQghAgQgfgggqgQQgjgOgmAAQgUAAgUAEg");
	this.shape.setTransform(-0.0171,-0.007,2.0507,2.0514);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#E7BB89","#CD8341","#CC7F3C","#EAC191"],[0,0.431,0.596,1],-21.1,0,21.1,0).s().p("AgXArQgOgcgLgJQg+AHgdgaQgJgIgTgkQgPgcgcgKQAtAAAlALQAkALAXASQAfAZAmAzQAkgwAigcQAXgSAkgLQAlgLAtAAQgcAKgPAcQgTAkgJAIQgdAag+gHQgLAKgPAbQgNAagKAbQgJgcgOgZg");
	this.shape_1.setTransform(0.0265,-15.3411,2.0507,2.0514);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#211B40","#312562","#5353A0","#332665","#1F193B"],[0,0.247,0.478,0.698,1],-131,0,131.1,0).s().p("AgLF3Qgtgwgfg6IgCABIgkALIgHACIgHgEQglgZgwgQQhQgbg0AJQgsAHg3ApIgRAMIgIgTQgZg6g3gvQg2gvhIgYQg4gTg6gBQg7gCgzARIgbAJIAHgcQAWhZhPheQhQhdiKgvQgkgMgpgIIgcgFIASgVQAhgmBDgUQBEgUBgAAQBpAAB9AXQB8AXCAAsIAZAHQArAKASAPQAWATAXAdQANATAaAnQAqBBAbAdQBgBoBkBIQADgOADgGQgMgUABgVQgBgaATgYIANgRIAMASQALARATALQAUgJAYAAQAXAAAVAJQARgKAMgSIAMgSIAOARQASAYAAAaQAAAWgMATIAGAUQBlhIBghoQARgTATgbIAhgwQAXglAQgVQAWgdAWgTQASgPArgKIAZgHQCBgsB8gXQB9gXBoAAQDGAABCBOIARAVIgbAFQgpAIgkAMQiJAvhQBdQhQBeAWBZIAIAcIgcgJQgzgRg6ACQg7ABg4ATQhHAYg3AvQg3AvgZA6IgIATIgQgMQg3gpgsgHQg0gJhQAbQgwAQgmAZIgHAEIgtgOQgfA6gtAwIgMAMg");
	this.shape_2.setTransform(-0.004,-0.0017,1.9076,1.9057);

	this.instance_7 = new lib.CachedBmp_66();
	this.instance_7.setTransform(-249.95,-200.85,0.5,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#29387B","#284082","#215696","#166AA9","#057AB9","#0087C6","#0090CF","#0096D4","#0097D6","#0092D1","#0085C4","#1170AF","#235393","#283377"],[0,0.016,0.063,0.11,0.161,0.22,0.282,0.361,0.478,0.541,0.631,0.741,0.867,1],-21,59.5,42,-49.6).s().p("AIgIkQgHhqAHhhQAGhLi5h9QhBgshKgnQg+gigXgHQgtgOkygvQgfgFAmAxQAfAnArAnQAPAOgaAFQgbAGgqgKQh1gbgyhfQg3gNhjARQhpAShNAnIhkBfQhJBBgYgGQgagHANgsQANgpAdgaQgghWAVhiQAfiPCPhaQCKhXDNg1QBmgaBLgJQA/hOCKghQB/geA2AeQAKAFgaAZIg7A1QhXBNAaAUQAQAMBeA4QBmBCBOBLQD1DtAPFBQAbARAtAPIBOAaQBiAlA6BSQAhAwgPAIQgMAGgxgQIhgggQg6gQgcAIQgzAQgcA7IgRArQgJAWgHAGQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgOAAgGhjg");
	this.shape_3.setTransform(-0.0017,-0.0075,2.6949,2.6945);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#5353A0","#332665","#4E4B95","#1F193B"],[0.008,0.31,0.678,1],-41.7,0,41.8,0).s().p("AASJ8IAAgHQAAgYgGgRQgMghgsgKQgGgBhXgJQgKAAgdgFQg8gMgignQggglACgsQADguAmgfQAqgjBIgDIA8AAQAigBAZgFQAfgHATgSQASgSgDgUQgHgxhpgEQgjgBgagDQhhgIhFgrQhOgxgchVQgdhaAuhVQAvhWBdgXQA0gNAzANQAmAJAkAVQA6AiBBBIQAvAzAZAWQA0AtApAJQA/ANAWgwQAWgxg+gmQg1gggNgJQgmgagVgbQgYgfgFggQgHgnAUglQAIgNAJgMQAJgMADgHQADgIgBgNQgCgXAkgcQAYgSAggPQACgHAHgEQAIgFAGAFQASgGAMgDQAKgCAHABQAEABAGAFIAagnQAPgXAGgEIACgBIgFAGIgRAcIgQAbIAbgRQAUgLAHgGIAHgGIgBACQgEAHgXAPIgXAQQgGADgJAJQAEAGABAFQABAGgDAJQgDAOgHAQQAFAHgGAIQgEAGgHACQgQAfgUAYQgdAigXgDQgLgCgDABQgEABgFAHQgVAfATAZQANAQAwAbIA+AjQBsBHgIBkQgIBchbAtQiQBHjOi/IhEg/QgOgNgTgMQgwgcgnAQQgkAOgLAqQgMApAWAnQAYAsA6ASQAYAIAhADQAQACAqACQAYACAcAFQBPAQAqAvQAmAqgBA3QgCA0gjArQglAsg8AOQgrALg6gEQg+gFgcAFQgsAHgGAhQgGAgAgAUQARAKAaAGIAwAGQA8AHAgAUQArAcgBA1QgBASgFAPQgCAJgBAAIAAAAg");
	this.shape_4.setTransform(-23.1896,-15.9585,4.242,4.2395,11.217);

	this.instance_8 = new lib.CachedBmp_67();
	this.instance_8.setTransform(-250,-246.55,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_68();
	this.instance_9.setTransform(-250,-132.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-250.9,-249.9,501,499.9);


(lib.gameChoiceWindow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.gameChoiceWindowBG();
	this.instance.setTransform(262.6,106.7,1,1,0,0,0,262.6,106.7);
	this.instance.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.gameChoiceWindow, new cjs.Rectangle(-39,-39,607,295), null);


(lib.gameBG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// BGskythings
	this.instance = new lib.CachedBmp_24();
	this.instance.setTransform(0,15.35,0.2337,0.2337);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// BGtrees
	this.instance_1 = new lib.BGtrees();
	this.instance_1.setTransform(693.5,524.6,1,1,0,0,0,693.5,233.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// BGmountains
	this.instance_2 = new lib.BGmountainsFront();
	this.instance_2.setTransform(689.1,573.65,1,1,0,0,0,662.9,216.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// BGsky
	this.instance_3 = new lib.BGsky();
	this.instance_3.setTransform(685.3,370.2,1,1,0,0,0,659.1,370.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.gameBG, new cjs.Rectangle(0,0,1421.4,757.7), null);


(lib.playagainBTN = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.playagain();
	this.instance.setTransform(27.75,27.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#9A819E","#F7E5D4"],[0.106,0.765],-27.7,0,27.7,0).s().p("AjDDEQhRhRAAhzQAAhyBRhRQBRhRByAAQBzAABRBRQBRBRAAByQAABzhRBRQhRBRhzAAQhyAAhRhRg");
	this.shape.setTransform(27.725,27.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.playagainBTN, new cjs.Rectangle(0,0,55.5,55.4), null);


(lib.homeBTN = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_55();
	this.instance.setTransform(21.8,25.75,0.5,0.5);

	this.instance_1 = new lib.home();
	this.instance_1.setTransform(27.7,25.7);

	this.instance_2 = new lib.CachedBmp_54();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.homeBTN, new cjs.Rectangle(0,0,55.5,55.5), null);


(lib.endScreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.totalTime = new cjs.Text("זמן כולל: 20:20", "normal 400 21px 'Assistant'", "#2A2A5D");
	this.totalTime.name = "totalTime";
	this.totalTime.textAlign = "center";
	this.totalTime.lineHeight = 34;
	this.totalTime.lineWidth = 373;
	this.totalTime.parent = this;
	this.totalTime.setTransform(-474.15,-319.55);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.totalTime);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#9B839F","#F8E5D5"],[0.106,0.765],-61.5,2,117.3,2).s().p("AwbD+QhtAAhOhOQhNhNAAhrQAAhtBNhOQBOhNBtAAMAg3AATQBtAABNBOQBOBOAABrQAABthOBNQhNBNhtAAg");
	this.shape.setTransform(-474.15,-308.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.totalTime}]}).wait(1));

	// הציון_שלכם__91_מספר_שגיאות__3_copy
	this.yourScore = new cjs.Text("הציון שלכם: 91", "normal 700 34px 'Assistant'", "#332666");
	this.yourScore.name = "yourScore";
	this.yourScore.textAlign = "center";
	this.yourScore.lineHeight = 50;
	this.yourScore.lineWidth = 373;
	this.yourScore.parent = this;
	this.yourScore.setTransform(0,-320.9);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.yourScore);
	}

	this.timeline.addTween(cjs.Tween.get(this.yourScore).wait(1));

	// הציון_שלכם__91_מספר_שגיאות__3
	this.errorNum = new cjs.Text("מרשמלואים ששרפתם  | מספר שגיאות: 3", "normal 400 24px 'Assistant'", "#332666");
	this.errorNum.name = "errorNum";
	this.errorNum.textAlign = "center";
	this.errorNum.lineHeight = 37;
	this.errorNum.lineWidth = 373;
	this.errorNum.parent = this;
	this.errorNum.setTransform(0,-280.4);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.errorNum);
	}

	this.timeline.addTween(cjs.Tween.get(this.errorNum).wait(1));

	// Layer_46
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#E9D9C0","#E9C08F","#E9C191","#E9C497","#DBA36A"],[0.024,0.29,0.322,0.514,1],-83.7,58.7,-83.7,-57.6).s().p("EgshAGhQiqirAAjxQAAjwCqiqQCrirDxAAMBMMgAKQDxAACqCrQCqCqAADxQAADwiqCrQiqCqjxAAMhMMAAKQjxAAiriqg");
	this.shape_1.setTransform(-0.0144,-288.035,0.8125,0.8125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_36
	this.instance = new lib.Group_2();
	this.instance.setTransform(-489,-29.4,1,1,0,0,0,137.3,43.9);
	this.instance.alpha = 0.3398;

	this.instance_1 = new lib.Group_1();
	this.instance_1.setTransform(77.45,-59.05,1,1,0,0,0,628.2,228.4);
	this.instance_1.alpha = 0.3398;

	this.instance_2 = new lib.Path_4();
	this.instance_2.setTransform(1.15,-103.55,1,1,0,0,0,638.8,217.7);
	this.instance_2.alpha = 0.25;

	this.instance_3 = new lib.Path_1_2();
	this.instance_3.setTransform(5.3,63.85,1,1,0,0,0,645.3,160);
	this.instance_3.alpha = 0.25;

	this.instance_4 = new lib.Path_2_0();
	this.instance_4.setTransform(-231.15,-152.55,1,1,0,0,0,406.7,211.6);
	this.instance_4.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_47
	this.homeBTN = new lib.homeBTN();
	this.homeBTN.name = "homeBTN";
	this.homeBTN.setTransform(448.7,-307.1,1,1,0,0,0,27.7,27.7);

	this.timeline.addTween(cjs.Tween.get(this.homeBTN).wait(1));

	// Layer_49
	this.playAgainBTN = new lib.playagainBTN();
	this.playAgainBTN.name = "playAgainBTN";
	this.playAgainBTN.setTransform(516.4,-307.1,1,1,0,0,0,27.7,27.7);

	this.timeline.addTween(cjs.Tween.get(this.playAgainBTN).wait(1));

	// Layer_43
	this.muteBTN = new lib.muteBTN();
	this.muteBTN.name = "muteBTN";
	this.muteBTN.setTransform(584.05,-307.1);

	this.timeline.addTween(cjs.Tween.get(this.muteBTN).wait(1));

	// _Path__5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#25224C","#383E87"],[0,1],-654.4,0,654.5,0).s().p("EhmPA5aMABPhz1MDLQAAAMgA4B03g");
	this.shape_2.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.endScreen, new cjs.Rectangle(-662.6,-374,1368.4,748.1), null);


(lib.speedBTN2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_3
	this.BTNbg = new lib.BTNbg();
	this.BTNbg.name = "BTNbg";
	this.BTNbg.setTransform(26.2,26.2,1,1,0,0,0,26.2,26.2);

	this.timeline.addTween(cjs.Tween.get(this.BTNbg).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.speedBTN2, new cjs.Rectangle(-26.2,-26.2,52.5,52.5), null);


(lib.speedBTN = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(6));

	// _Group_
	this.instance = new lib.speed();
	this.instance.setTransform(-0.05,0.05);

	this.instance_1 = new lib.CachedBmp_39();
	this.instance_1.setTransform(-18.2,-11.2,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_38();
	this.instance_2.setTransform(-7.25,-19.25,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_41();
	this.instance_3.setTransform(-26.5,-11.2,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_40();
	this.instance_4.setTransform(-16,-19.25,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_43();
	this.instance_5.setTransform(-26.5,-11.2,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_42();
	this.instance_6.setTransform(-16,-19.25,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_45();
	this.instance_7.setTransform(-26.5,-11.2,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_44();
	this.instance_8.setTransform(-16,-19.25,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_47();
	this.instance_9.setTransform(-26.5,-11.2,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_46();
	this.instance_10.setTransform(-16,-19.25,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_49();
	this.instance_11.setTransform(-18.2,-11.2,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_48();
	this.instance_12.setTransform(-7.25,-19.25,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_51();
	this.instance_13.setTransform(-18.2,-11.2,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_50();
	this.instance_14.setTransform(-7.25,-19.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).to({state:[{t:this.instance_4},{t:this.instance_3}]},1).to({state:[{t:this.instance_6},{t:this.instance_5}]},1).to({state:[{t:this.instance_8},{t:this.instance_7}]},1).to({state:[{t:this.instance_10},{t:this.instance_9}]},1).to({state:[{t:this.instance_12},{t:this.instance_11}]},1).to({state:[{t:this.instance_14},{t:this.instance_13}]},1).wait(1));

	// Layer_3
	this.BTNbg = new lib.BTNbg();
	this.BTNbg.name = "BTNbg";
	this.BTNbg.setTransform(26.2,26.2,1,1,0,0,0,26.2,26.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#5353A0","#352868"],[0.259,1],0,0,0,0,0,26.3).s().p("AAAEHQhsAAhNhNQhNhNAAhtQAAhsBNhNQBNhNBsAAIAAAAQBfAABHA7IAUASQBNBNAABsQAABthNBNIgUASQhHA7hfAAg");
	this.shape.setTransform(0.025,-0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#9A819E","#F7E5D4"],[0.11,0.769],-26.2,0,26.3,0).s().p("Ai5C6QhNhNAAhtQAAhrBNhOQBOhNBrAAQBtAABNBNQBNBNAABsQAABthNBNQhNBNhtAAQhsAAhNhNg");
	this.shape_1.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.BTNbg}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-26.3,52.8,52.6);


(lib.pauseBTN = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer_1
	this.instance = new lib.pause();

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#9B839F","#F8E5D5"],[0.106,0.765],-2,0,2,0).s().p("AgTBjIAAjFIAnAAIAADFg");
	this.shape.setTransform(-5.7,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#9B839F","#F8E5D5"],[0.106,0.765],-2,0,2,0).s().p("AgTBjIAAjFIAnAAIAADFg");
	this.shape_1.setTransform(5.7,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#53529E","#352768"],[0.259,1],0,0,0,0,0,16.6).s().p("Ahrh7IDXB8IjXB7g");
	this.shape_2.setTransform(2.525,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#9B839F","#F8E5D5"],[0.106,0.765],-10.7,0,10.8,0).s().p("Ahrh7IDXB8IjXB7g");
	this.shape_3.setTransform(2.525,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	// Layer_2
	this.BTNbg = new lib.BTNbg();
	this.BTNbg.name = "BTNbg";

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#5353A0","#352868"],[0.259,1],0,0,0,0,0,26.3).s().p("AAAEHQhsAAhNhNQhNhNAAhtQAAhsBNhNQBNhNBsAAIAAAAQBfAABHA7IAUASQBNBNAABsQAABthNBNIgUASQhHA7hfAAg");
	this.shape_4.setTransform(0.025,0.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#9A819E","#F7E5D4"],[0.11,0.769],-26.2,0,26.3,0).s().p("Ai4C6QhOhNAAhtQAAhsBOhNQBNhNBrAAQBsAABNBNQBOBNAABsQAABthOBNQhMBNhtAAQhrAAhNhNg");
	this.shape_5.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.BTNbg}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.2,-26.2,52.5,52.5);


(lib.fireMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#EAC191","#CC7F3C","#CC7F3C","#BF704F","#B15C5D","#A64E63","#A04566","#9E4266","#342666"],[0.012,0.122,0.208,0.29,0.451,0.639,0.733,0.843,1],0,-63.6,0,63.6).s().p("AiyJ4Qh6gWgOi2QgMiTA2ikQBIjdD2jaIBUhJQAwgrAegkQA/hHAmhaQAKCvgCB5QgDCigWCFQg2FIivDSIgOAaQgTAfgYAYQg+A9hQAAQgVAAgVgEg");
	this.shape.setTransform(39.5157,73.023);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#EAC191","#CC7F3C","#CC7F3C","#BF704F","#B15C5D","#A64E63","#A04566","#9E4266","#342666"],[0.012,0.122,0.208,0.29,0.451,0.639,0.733,0.843,1],0.7,-63.9,0.7,63.3).s().p("AirJ1Qh6gWgOi2QgLiTA1ikQBTj/DSi6QAjgfAegiIA8hGQBchqAchAQAFBiAYDDQARCugTB2Qg2FIiwDSIgOAaQgSAfgZAYQg9A9hRAAQgUAAgWgEg");
	this.shape_1.setTransform(38.7942,73.323);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#EAC191","#CC7F3C","#CC7F3C","#BF704F","#B15C5D","#A64E63","#A04566","#9E4266","#342666"],[0.012,0.122,0.208,0.29,0.451,0.639,0.733,0.843,1],0.6,-63.9,0.6,63.3).s().p("AisJ1Qh6gWgOi2QgMiTA2ikQAqiABIhsQBGhqBnhcQAjgeAhgmIA+hKQAfgkAMgiQALgiAEhCQBEBnAYCqQAWCfgZCZQg2FIivDSIgOAaQgTAfgYAYQg+A9hQAAQgVAAgVgEg");
	this.shape_2.setTransform(38.9382,73.323);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#EAC191","#CC7F3C","#CC7F3C","#BF704F","#B15C5D","#A64E63","#A04566","#9E4266","#342666"],[0.012,0.122,0.208,0.29,0.451,0.639,0.733,0.843,1],0.4,-63.2,0.4,64).s().p("AiuJ9Qh6gXgOi2QgLiSA1ikQAxiVAshRQA6hsBfhUQArgmAZgZQAdgdAjgoQA7hEAIiMQBlBqAaC0QAVCOgcCtQg2FHiwDTIgOAaQgSAfgZAYQg9A9hRAAQgUAAgWgEg");
	this.shape_3.setTransform(39.0937,72.573);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#EAC191","#CC7F3C","#CC7F3C","#BF704F","#B15C5D","#A64E63","#A04566","#9E4266","#342666"],[0.012,0.122,0.208,0.29,0.451,0.639,0.733,0.843,1],0.6,-63.6,0.6,63.6).s().p("AisJ4Qh6gXgOi2QgLiSA1ikQAtiLAihBQAnhOBRhfICDiYQAbgfA0hEIBeh8QAyCvAPB+QATCZgWCJQg2FHiwDTIgOAaQgSAfgZAYQg9A9hRAAQgUAAgWgEg");
	this.shape_4.setTransform(38.8832,73.073);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#EAC191","#CC7F3C","#CC7F3C","#BF704F","#B15C5D","#A64E63","#A04566","#9E4266","#342666"],[0.012,0.122,0.208,0.29,0.451,0.639,0.733,0.843,1],0.3,-64.9,0.3,62.3).s().p("AivJrQh6gWgOi2QgMiTA2ikQAtiKAhhBQAohPBQheQAmgtA1gwQA6g0AtgcQBkg9BYh0QgBB3AECzQABCUgUB3Qg2FIivDSIgOAaQgTAfgYAYQg+A9hQAAQgVAAgVgEg");
	this.shape_5.setTransform(39.2239,74.323);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#EAC191","#CC7F3C","#CC7F3C","#BF704F","#B15C5D","#A64E63","#A04566","#9E4266","#342666"],[0.012,0.122,0.208,0.29,0.451,0.639,0.733,0.843,1],-2,-65.1,-2,62.1).s().p("AjGJpQh6gXgOi2QgMiSA2ikQAtiLAhhBQAohOBQhfQAmgsA2gxQA5g0AtgbQAjgWBIg2QBXhDAsgeQgNCzgPB8QgLBggbCiQg2FHivDTIgOAaQgTAfgXAYQg/A9hQAAQgVAAgVgEg");
	this.shape_6.setTransform(41.5483,74.573);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#EAC191","#CC7F3C","#CC7F3C","#BF704F","#B15C5D","#A64E63","#A04566","#9E4266","#342666"],[0.012,0.122,0.208,0.29,0.451,0.639,0.733,0.843,1],-4.4,-65.7,-4.4,61.5).s().p("AjeJjQh6gXgOi2QgMiSA2ikQAtiLAhhBQAohOBQhfQAmgsA2gxQA5g0AtgbIB2hLQBVgzBSgiQguCYgZCKQgQBTgaCvQg2FHivDTIgOAaQgSAfgYAYQg/A8hQAAQgVAAgVgDg");
	this.shape_7.setTransform(43.9233,75.198);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#EAC191","#CC7F3C","#CC7F3C","#BF704F","#B15C5D","#A64E63","#A04566","#9E4266","#342666"],[0.012,0.122,0.208,0.29,0.451,0.639,0.733,0.843,1],-6.7,-66.9,-6.7,60.3).s().p("Aj2JXQh6gWgOi2QgLiTA1ikQAtiKAihBQAnhPBRheQAmgtA2gwQA4g0AugcQCshqCggfQgOAvhRDnQguCFgTByQg2FIivDSIgOAaQgSAfgZAYQg/A9hQAAQgUAAgWgEg");
	this.shape_8.setTransform(46.2983,76.323);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#EAC191","#CC7F3C","#CC7F3C","#BF704F","#B15C5D","#A64E63","#A04566","#9E4266","#342666"],[0.012,0.122,0.208,0.29,0.451,0.639,0.733,0.843,1],-9.2,-68.1,-9.2,59.1).s().p("AkPJLQh6gXgOi2QgLiSA1ikQAtiLAihBQAnhOBRhfQAmgsA2gxQA5g0AtgbQAtgcB2ghQBkgcB3gYQhwDFgcA/QgwBsgWCFQg2FHivDTIgOAaQgSAfgZAYQg/A9hQAAQgUAAgWgEg");
	this.shape_9.setTransform(48.7983,77.573);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#EAC191","#CC7F3C","#CC7F3C","#BF704F","#B15C5D","#A64E63","#A04566","#9E4266","#342666"],[0.012,0.122,0.208,0.29,0.451,0.639,0.733,0.843,1],-10.6,-70.8,-10.6,56.4).s().p("AkdIwQh6gXgOi2QgLiSA1ikQAtiLAihBQAnhOBRhfQAmgsA2gxQA5g0AtgbQA9gmB7gPQCRgTBRAsQiDB8gqBJQgpBIgYCTQg2FHivDTIgOAaQgSAfgZAYQg+A9hRAAQgUAAgWgEg");
	this.shape_10.setTransform(50.1733,80.2742);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#EAC191","#CC7F3C","#CC7F3C","#BF704F","#B15C5D","#A64E63","#A04566","#9E4266","#342666"],[0.012,0.122,0.208,0.29,0.451,0.639,0.733,0.843,1],-5.7,-68.3,-5.7,58.9).s().p("AjsJJQh6gWgOi2QgLiTA1ikQAtiKAihBQAnhPBRheQAmgtA2gwQA4g0AugcQAQgKArgeQArgdAhgPQBlgvBMApQhsBmgQB+QgDAegCBXQgCBPgJA2Qg2FIiwDSIgNAaQgSAfgZAYQg/A9hQAAQgUAAgWgEg");
	this.shape_11.setTransform(45.2983,77.725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#EAC191","#CC7F3C","#CC7F3C","#BF704F","#B15C5D","#A64E63","#A04566","#9E4266","#342666"],[0.012,0.122,0.208,0.29,0.451,0.639,0.733,0.843,1],-2.1,-67.5,-2.1,59.7).s().p("AjIJRQh6gWgOi2QgLiTA1ikQAtiKAihBQAnhPBRheQAmgtA2gwQA4g0AugcQAggUA+goQA9gkBVgdQgNBRgUCqQgSCdgRBpQg2FIiwDSIgOAaQgSAfgYAYQg+A9hRAAQgUAAgWgEg");
	this.shape_12.setTransform(41.6733,76.948);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#EAC191","#CC7F3C","#CC7F3C","#BF704F","#B15C5D","#A64E63","#A04566","#9E4266","#342666"],[0.012,0.122,0.208,0.29,0.451,0.639,0.733,0.843,1],-0.7,-64.5,-0.7,62.7).s().p("Ai6JvQh6gWgOi2QgLiTA1ikQAtiKAihBQAnhPBRheQA/hLAQgRQAxg1ApgZQAwgeAqgrQApgrAzhIQA9BzgHCkQgDBIgkDeQg2FIiwDSIgOAaQgSAfgYAYQg+A9hRAAQgUAAgWgEg");
	this.shape_13.setTransform(40.2798,73.948);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#EAC191","#CC7F3C","#CC7F3C","#BF704F","#B15C5D","#A64E63","#A04566","#9E4266","#342666"],[0.012,0.122,0.208,0.29,0.451,0.639,0.733,0.843,1],-0.3,-63.9,-0.3,63.3).s().p("Ai1J1Qh6gWgOi2QgMiTA2ikQAtiKAhhBQAohPBQheIBIhQQApgwAagjQAXgeAog7IBSh2QBqCHAHChQAEBOgjDTQg2FIivDSIgOAaQgTAfgYAYQg+A9hQAAQgVAAgVgEg");
	this.shape_14.setTransform(39.8394,73.323);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#EAC191","#CC7F3C","#CC7F3C","#BF704F","#B15C5D","#A64E63","#A04566","#9E4266","#342666"],[0.012,0.122,0.208,0.29,0.451,0.639,0.733,0.843,1],0.6,-63,0.6,64.2).s().p("AisJ+Qh6gWgOi2QgMiTA2ikQAtiKAhhBQAohPBQheIBHhQQAqgwAagjQAqg4AOgfQAXg2AEhUQBwCQAgCiQAbCGgbCjQg2FIivDSIgOAaQgTAfgYAYQg+A9hQAAQgVAAgVgEg");
	this.shape_15.setTransform(38.9358,72.448);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#EAC191","#CC7F3C","#CC7F3C","#BF704F","#B15C5D","#A64E63","#A04566","#9E4266","#342666"],[0.012,0.122,0.208,0.29,0.451,0.639,0.733,0.843,1],-0.1,-62.2,-0.1,65).s().p("Ai0KHQh6gXgOi2QgLiSA1ikQAtiLAihBQAnhOBRhfQAagfAegyQAjg7ASgZQAfgpAMg1QAKgwAEhiQDABzAeC8QALBHgKBcQgDAhgUB6Qg2FHiwDTIgOAaQgSAfgZAYQg9A9hRAAQgUAAgWgEg");
	this.shape_16.setTransform(39.6684,71.573);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_8}]},2).to({state:[{t:this.shape_9}]},2).to({state:[{t:this.shape_10}]},2).to({state:[{t:this.shape_11}]},2).to({state:[{t:this.shape_12}]},2).to({state:[{t:this.shape_13}]},2).to({state:[{t:this.shape_14}]},3).to({state:[{t:this.shape_15}]},2).to({state:[{t:this.shape_16}]},2).wait(3));

	// Layer_3
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],0,88.4,0,-88.4).s().p("ABmNzQhdgKhVg2QhRgzg8hQQhniJgojaQgVhugGiNQgDhVABinIACqVIgGg0QBDApCUBHQB5BGAmBaQAgBNgTBpQgMBAguB3QgpBugJBMQgMBoAsBJQgNgwAVg0QASguAogoQAagcA1gmQBAgvATgQQBDg5AthNQAuhNARhWQA1CzAOBnQAUCggpB4QgNAmgeA9QgkBJgLAZQgrBpgZCzQggDtgNA2QgGAagMALQgLAIgVAAIgMgBg");
	this.shape_17.setTransform(-11.2083,47.7333);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],1.1,90,1.1,-86.8).s().p("ABxODQhdgKhVg3QhRgzg8hQQhniIgojaQgVhvgGiMQgDhXABilQAAhrgDirQgDimABhxIgXi7QCCAhBsBQQB0BVAsBpQAgBNgUBpQgLBAguB3QgpBugJBLQgMBoAsBJQgNgvAVg1QASgtAogpQAagbA1gmQBAgvATgQQA6gyAdhWQAKgfAbiGQBZCDAbCVQAbCYguCFQgNAngeA9QgkBJgLAZQgrBogZCzQggDugNA1QgGAbgMAKQgLAIgVAAIgMAAg");
	this.shape_18.setTransform(-12.3222,46.1833);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],-1.2,92.1,-1.2,-84.7).s().p("ABZOYQhcgKhWg3QhRgzg8hQQhniIgojaQgVhvgGiMQgDhXABilQAAhygDikQgCisAAhrQAAhKAwhOQAMgTAVgeQAPgVgBgIQBsAcBHBrQAiAyBDChQAgBNgTBpQgMBAguB3QgpBugJBLQgMBoAsBJQgNgvAVg1QASguAogoQAbgbA0gmQBAgvATgQQBHg9AzhLQA4hTAQhSQCTDXh4FeQgNAngeA9QgkBJgLAZQgrBogZCzQggDugNA1QgGAbgMAKQgLAJgUAAIgNgBg");
	this.shape_19.setTransform(-9.9407,44.0583);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],-0.5,94.5,-0.5,-82.3).s().p("ABgOwQhdgKhVg3QhRgzg8hQQhmiIgpjaQgUhvgGiMQgEhXABilQABhvgLiJQgKiLAAhuQAAhYA9hsQA2hiA8grQBRA/A0B0QA0CNAfBJQAfBNgSBpQgNBAgtB3QgqBugJBLQgMBoAsBJQgMgvAUg1QATguAngoQAbgbA0gmQBAgvATgQQBIg9AyhLQA4hTARhSQCSDXh3FeQgNAngfA9QgkBJgKAZQgsBogYCzQghDugMA1QgGAbgNAKQgKAIgVAAIgNAAg");
	this.shape_20.setTransform(-10.6907,41.6833);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],-3.3,95.6,-3.3,-81.2).s().p("ABEO7QhcgKhWg3QhRgzg8hQQhmiIgpjaQgUhvgGiMQgEhXABilQABhvgLiJQgKiLAAhuQAAhVBRh6QBGhqBBgvQBABaApB4IBGDOQAgBNgTBpQgNBAgtB3QgqBugJBKQgMBpAsBJQgMgvAUg1QATguAngpQAcgaAzgmQBAgvATgQQBthOA5guQBmhRAOhHQBLBugmCdQgWBchLC1QgNAngfA9QgkBJgKAZQgsBogYCzQghDugMA1QgGAbgNAKQgKAJgVAAIgNgBg");
	this.shape_21.setTransform(-7.8611,40.5583);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],-4.3,95.6,-4.3,-81.2).s().p("AA6O7QhcgKhWg3QhRgzg8hQQhmiIgpjaQgUhvgGiMQgEhXABilQABhvgLiJQgKiLAAhuQAAhVBRh6QBGhqBBgvQBABaApB4IBGDOQAgBNgTBpQgNBAgtB3QgqBugJBKQgMBpAsBJQgMgvAUg1QATguAngpQAcgaAzgmQBAgvATgQQAigdCHhHQB3g+A0g7QAfB3gwCAQgMAfgmBSQgiBLgRAyQgNAngfA9QgkBJgKAZQgsBogYCzQghDugMA1QgGAbgNAKQgKAJgVAAIgNgBg");
	this.shape_22.setTransform(-6.8668,40.5583);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],-3.7,95.1,-3.7,-81.7).s().p("ABAO2QhcgKhWg3QhRgzg8hQQhmiIgpjaQgUhvgGiMQgEhXABilQABhvgLiJQgKiLAAhuQAAhRB1h5QBMhPBfhFQgDB1AfBaQAuBtAdBaQAaBRgSBmQgMBKgpBsQgqBugJBKQgMBpAsBJQgMgvAUg1QATguAngoQAcgbAzgmQBAgvATgQQBvhfAigZQBehDBlgiQgbCigWBcQgYBjgtCEQgNAngfA9QgkBJgKAZQgsBogYCzQghDugMA1QgGAbgNAKQgKAJgVAAIgNgBg");
	this.shape_23.setTransform(-7.475,41.0583);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],-5.2,94.7,-5.2,-82.1).s().p("AAxOyQhcgKhWg2QhRgzg8hQQhmiJgpjaQgUhugGiNQgEhWABimQABhvgLiJQgKiLAAhtQAAhiBthuQBwhzCCgUQgFC2ABAVQAFBKAnB5QAaBSgSBmQgMBKgpBrQgqBugJBLQgMBpAsBJQgMgwAUg0QATgvAngnQAcgcAzgmQBAgvATgQQB1hjArgbQBthDBlAPQgVB9grBsIhUDSQgNAmgfA9QgkBJgKAZQgsBpgYCzQghDtgMA2QgGAagNALQgKAIgVAAIgNgBg");
	this.shape_24.setTransform(-5.975,41.4333);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],-6.7,94.7,-6.7,-82.1).s().p("AAiOyQhcgKhWg2QhRgzg8hQQhmiJgpjaQgUhugGiNQgEhWABimQABhvgLiJQgKiLAAhtQAAheCIhyQCIhyCGgVQglCTgGA2QgKBQAmB1QAaBSgSBmQgMBKgpBrQgqBugJBLQgMBpAsBJQgMgwAUg0QATgvAngnQANgNA9hDQAsgzAfgaQBjhVBIgdQB4gzB6AyQhHCFgeBFQggBJgtCFQgNAmgfA9QgkBJgKAZQgsBpgYCzQghDtgMA2QgGAagNALQgKAIgVAAIgNgBg");
	this.shape_25.setTransform(-4.475,41.4333);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],-5.1,94.7,-5.1,-82.1).s().p("AAyOyQhcgKhWg2QhRgzg7hQQhniJgojaQgVhugGiNQgDhWABimQAAhvgKiJQgLiLAAhtQAAheCJhyQCHhyCGgVQglCTgGA2QgJBQAlB1QAaBSgRBmQgNBKgpBrQgpBugKBLQgLBpAsBJQgNgwAVg0QASgvAngnQAcgcAzgmQBBgvASgQQBehPA3geQBhg0B5AAQgXBmgpBsQhGC3gLAhQgNAmgfA9QgkBJgKAZQgrBpgZCzQghDtgMA2QgGAagNALQgKAIgVAAIgNgBg");
	this.shape_26.setTransform(-6.1,41.4333);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],-0.6,94.8,-0.6,-82).s().p("ABfOzQhdgKhVg2QhRgzg8hQQhniJgojaQgVhugGiNQgDhWABimQAAhvgKiJQgKiLAAhtQAAhrBIhmQBSh1B8gTQgXBuArBcIAtBWQAeA5ARA3QAaBSgRBmQgNBKgpBrQgpBugJBLQgMBpAsBJQgNgwAVg0QASgvAognQAagcA1gmQBAgvATgQQAmggBHhEQBFhCBHg8QAkB4gIB4QgIBugwCNQgNAmgeA9QgkBJgLAZQgrBpgZCzQggDtgNA2QgGAagMALQgLAIgVAAIgMgBg");
	this.shape_27.setTransform(-10.5023,41.3083);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],1.1,94.3,1.1,-82.5).s().p("ABwOuQhdgKhVg2QhRgzg8hQQhmiJgpjaQgUhugGiNQgEhWABimQABhvgLiJQgKiLAAhtQAAhWAxhVQAjg/BZhlQAQBiBTBjQAwA6ARAYQAjA0ATA7QAZBSgRBmQgMBKgpBrQgqBugJBMQgMBoAsBJQgMgwAUg0QATgvAngnQAbgcA0gmQBAgvATgQQAegZAOgbQAGgLAMgmQAXhEBGg7IAoB5QAYBJALAvQAfCIgnB0QgNAmgfA9QgkBJgKAZQgsBpgYCzQghDtgMA2QgGAagNALQgKAIgVAAIgNgBg");
	this.shape_28.setTransform(-12.2684,41.8083);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],0.6,93.7,0.6,-83.1).s().p("ABsOoQhdgKhVg2QhRgzg8hQQhniJgojaQgVhugGiNQgDhWABimQAAhvgKiJQgKiLAAhtQAAheAehHQAehHBLhXQAKA/AiAxQAXAhAyAuQA5A1AVAZQApAyATA7QAZBSgQBmQgNBKgpBrQgpBugJBMQgMBoAsBJQgNgwAVg0QASgvAognQAagcA1gmQBAgvATgQQA8g0AUguQAJgXAZhzQBoBlAaCGQAZB/gwCLQgNAmgeA9QgkBJgLAZQgrBpgZCzQggDtgNA2QgGAagMALQgLAIgVAAIgMgBg");
	this.shape_29.setTransform(-11.8082,42.4333);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],1.1,92.8,1.1,-84).s().p("ABwOfQhdgKhVg2QhRgzg8hQQhmiJgpjaQgUhugGiNQgEhWABimQABhvgLiJQgKiLAAhtQAAiCAFgaQAOhJBChMQAjA8AxAwQAXAWBAAzQA0ApAaAfQAlAuAUA9QAZBSgRBmQgMBKgpBrQgqBugJBMQgMBoAsBJQgMgwAUg0QATgvAngnQAbgcA0gmQBAgvATgQQA1gtAEgzIABg4QABgoAIgnQBwBsAqB8QAtCGgsCCQgNAmgfA9QgkBJgKAZQgsBpgYCzQghDtgMA2QgGAagNALQgKAIgVAAIgNgBg");
	this.shape_30.setTransform(-12.2687,43.3083);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],1.5,92.2,1.5,-84.6).s().p("AB0OZQhdgKhVg2QhRgzg8hQQhmiJgpjaQgUhugGiNQgEhWABimQABhvgLiJQgKiLAAhtQAAgegEg1QgFgtACgWQAEhGA/hJQAjA8A1AuQAbAXBEAuQA7AnAcAdQApAsAUA9QAZBSgSBmQgLBKgpBrQgqBugJBMQgMBoAsBJQgMgwAUg0QATgvAngnQAbgcA0gmQBAgvATgQQAfgaACgVQACgPgNgZQgTgigEgQQgLgjAJgpQCZA0A+CTQA6CJgwCOQgNAmgfA9QgkBJgKAZQgsBpgYCzQghDtgMA2QgGAagNALQgKAIgVAAIgNgBg");
	this.shape_31.setTransform(-12.6644,43.9333);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],1.5,92.2,1.5,-84.6).s().p("AB0OZQhdgKhVg2QhRgzg8hQQhmiJgpjaQgUhugGiNQgEhWABimQABhvgLiJQgKiLAAhtQAAgegEg1QgFgtACgWQAEhGA/hJQAjA8A1AuQAbAXBEAuQA7AnAcAdQApAsAUA9QAZBSgSBmQgLBKgpBrQgqBugJBMQgMBoAsBJQgMgwAUg0QATgvAngnQATgUAfgoQAZggAdgZQA0gtgBgwIgDg2QgBgmAIgoQCZA0A+CTQA6CJgwCOQgNAmgfA9QgkBJgKAZQgsBpgYCzQghDtgMA2QgGAagNALQgKAIgVAAIgNgBg");
	this.shape_32.setTransform(-12.6644,43.9333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17}]}).to({state:[{t:this.shape_18}]},2).to({state:[{t:this.shape_19}]},2).to({state:[{t:this.shape_20}]},2).to({state:[{t:this.shape_21}]},2).to({state:[{t:this.shape_22}]},2).to({state:[{t:this.shape_23}]},2).to({state:[{t:this.shape_24}]},2).to({state:[{t:this.shape_25}]},2).to({state:[{t:this.shape_26}]},2).to({state:[{t:this.shape_27}]},2).to({state:[{t:this.shape_28}]},2).to({state:[{t:this.shape_29}]},2).to({state:[{t:this.shape_30}]},2).to({state:[{t:this.shape_31}]},2).to({state:[{t:this.shape_31}]},2).to({state:[{t:this.shape_32}]},2).wait(4));

	// Layer_6
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],0,81.7,0,-81.6).s().p("AgGLiQgggfgYgnIgSgiQh1iMhMi5QhFioggjGQgcirgDjPQgDiaAMjjQAwByBRBeQAoAtA9A3QAkAgBIA+QCTCCBgB/QBzCYAyCbQBFDTgPC8QgSDpicAdQgcAGgbAAQhmAAhPhPg");
	this.shape_33.setTransform(-50.1699,66.4111);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],-1.1,84,-1.1,-79.3).s().p("AgRL5QgggegYgoIgSghQh1iMhMi5QhFipggjFQgYiTAlj/IAgjPQASh3AEhOQAgBVAUAtQAiBRAiAnQCBCUBQBIQB8BuBPCIQBCBzA7C2QBFDSgPC8QgSDqicAdQgcAFgbAAQhmAAhPhPg");
	this.shape_34.setTransform(-49.0705,64.0611);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],-0.8,83.5,-0.8,-79.7).s().p("AgPL1QgfgfgYgnIgSgiQh1iMhMi5QhFioghjGQggjCAnjQQApjbBtivQATAtAlBMIA7B3QAkBXARAjQAcA7ArAnQB9BvBPCIQBCByA7C2QBEDTgOC8QgTDpicAdQgcAFgaAAQhnAAhPhOg");
	this.shape_35.setTransform(-49.3195,64.5361);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],-0.4,83,-0.4,-80.2).s().p("AgLLwQgfgfgYgnIgSgiQh1iMhMi5QhFioghjGQgoj2Agi6QArkBCxhhQAPAjAVBnQAVBiASAnQAdA9ApApIBZBOQB0BmA/COQAXA2AbBTIAyCdQBEDTgOC8QgTDpicAdQgcAFgaAAQhnAAhPhOg");
	this.shape_36.setTransform(-49.7296,65.0361);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],0.9,83,0.9,-80.2).s().p("AACLwQgfgfgYgnIgSgiQh1iMhMi5QhFioggjGIgijQQgSiCADheQAJkECsheQARApA7BhQA/BpAQAgQAdA9ApApIBZBOQBzBmA/COQAYA2AbBTIAxCdQBFDTgPC8QgSDpicAdQgcAFgbAAQhnAAhPhOg");
	this.shape_37.setTransform(-51.0518,65.0361);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],2.3,83.5,2.3,-79.7).s().p("AAQL1QgfgfgYgnIgSgiQh1iMhMi5QhFioggjGIgrjRQgciLgFhZQgQkLCphcQAYA6A3BcQA5BfAnAtQAnAtA4AvQA/AzAkAgQBzBmA/COQAYA2AbBTIAxCdQBFDTgPC8QgSDpicAdQgcAFgbAAQhmAAhQhOg");
	this.shape_38.setTransform(-52.4675,64.5361);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],0,83.5,0,-79.7).s().p("AgGL1QgfgfgYgnIgSgiQh1iMhMi5QhFioghjGQgnjtAIiuQALjxBhiQQArAbBFBZQBIBiAaAfQAbAfAzBTQAqBHAnAjQB0BmA/COQAXA2AbBTIAyCdQBEDTgOC8QgTDpicAdQgcAFgaAAQhnAAhPhOg");
	this.shape_39.setTransform(-50.2164,64.5361);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],0.1,82.5,0.1,-80.7).s().p("AgFLrQgggfgYgnIgSgiQh1iMhMi5QhFioggjGQgijOAAi8QAAjZAuilQA6AlBWBFQBeBMAlArQAbAfAyBTQAqBHAoAjQBzBmA/COQAYA2AbBTIAxCdQBFDTgPC8QgSDpicAdQgcAFgbAAQhmAAhPhOg");
	this.shape_40.setTransform(-50.2733,65.5361);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],2.1,81.8,2.1,-81.5).s().p("AAOLjQgfgegYgoIgSghQh1iMhMi5QhFipggjFQgxkBgPiCQgajgAqiXQA+AoByBZQCABjAkAqQA3BAATAVQAeAfAyAsQBzBnA/COQAYA2AbBUIAxCcQBFDSgPC8QgSDqicAdQgcAFgbAAQhmAAhQhPg");
	this.shape_41.setTransform(-52.2741,66.2861);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],3.3,80.1,3.3,-83.2).s().p("AAaLSQgfgfgYgnIgSgiQh1iMhMi5QhFioggjGQgNhRgbkeQgVjegliJIDJBvQCdBXAgAlQA2A/AUAVQAeAgAyAsQBzBmA/COQAYA2AbBUIAxCcQBFDTgPC8QgSDpicAdQgcAFgaAAQhnAAhQhOg");
	this.shape_42.setTransform(-53.4983,68.0361);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],5.8,78.1,5.8,-85.2).s().p("AAzK+QgggfgXgnIgSgiQh1iMhMi5QhFioggjGQgfi9giieQgjiggwizQB5gECcBPQCEBBAzA8QAMAPA0BDQAcAkAqAlQBzBmA/COQAYA2AbBUIAxCcQBFDTgPC8QgSDpicAdQgcAFgaAAQhnAAhQhOg");
	this.shape_43.setTransform(-55.9983,70.0287);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],6.8,74.6,6.8,-88.7).s().p("AA9KbQgggfgYgnIgRgiQh1iMhMi5QhFioggjGQgZiUgyikQhUkQgJggQCEgECoAuQCkAtAoAwQAcAhAYAuQATAlAnAiQBzBmA/COQAYA2AbBUIAxCcQBFDTgPC8QgSDpicAdQgcAFgaAAQhnAAhQhOg");
	this.shape_44.setTransform(-56.9983,73.5238);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],6.8,74.6,6.8,-88.7).s().p("AA9KbQgggfgYgnIgRgiQh1iMhMi5QhFioggjGQgLg/gKhoQgKhhgJguQgbiYhliaQCEgECoAuQCkAtAoAwQAcAhAYAuQATAlAnAiQBzBmA/COQAYA2AbBUIAxCcQBFDTgPC8QgSDpicAdQgcAFgaAAQhnAAhQhOg");
	this.shape_45.setTransform(-56.9983,73.5238);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],6.8,74.6,6.8,-88.7).s().p("AA9KbQgggfgYgnIgRgiQh1iMhMi5QhFioggjGQgMhIADhgQAFh2gCgaQgFhNgfhBQgnhOhXhUQBzgDB3AzQApASA4AeIBZAxQA7AfArAgQAeAWA+A3QBzBmA/COQAYA2AbBUIAxCcQBFDTgPC8QgSDpicAdQgcAFgaAAQhnAAhQhOg");
	this.shape_46.setTransform(-56.9983,73.5278);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],3.5,78.3,3.5,-84.9).s().p("AAcLAQgegegYgoIgSghQh1iMhMi5QhFipghjFQgMhNgFhnQgDhygDg4QgMjIhEiOQB6BUBJAtQBLAvBVAsQA9AgAqAgQAdAVA+A3QB0BnA/COQAXA2AbBUIAyCcQBEDSgOC8QgTDqicAdQgbAFgbAAQhnAAhQhPg");
	this.shape_47.setTransform(-53.7483,69.7861);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],3.5,78.3,3.5,-84.9).s().p("AAcLAQgegegYgoIgSghQh1iMhMi5QhFipghjFQgtjlgUhsQgji7gDioQB1AoBjA3QBmA8A5AeQAyAaArA3QA6BKAXAUQB0BnA/COQAXA2AbBUIAyCcQBEDSgOC8QgTDqicAdQgbAFgbAAQhnAAhQhPg");
	this.shape_48.setTransform(-53.7483,69.7861);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],1,80.3,1,-82.9).s().p("AADLUQgegegYgoIgSghQh1iMhMi5QhFipghjFQgcisgMi5QgIiHgFjwQBwBsA8AwQBHA4BSArQA2AcAnAmQAuAwAjAfQB0BnA/COQAXA2AbBUIAyCcQBEDSgOC8QgTDqicAdQgbAFgbAAQhnAAhQhPg");
	this.shape_49.setTransform(-51.2483,67.7861);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33}]}).to({state:[{t:this.shape_34}]},2).to({state:[{t:this.shape_35}]},2).to({state:[{t:this.shape_36}]},2).to({state:[{t:this.shape_37}]},2).to({state:[{t:this.shape_38}]},2).to({state:[{t:this.shape_39}]},2).to({state:[{t:this.shape_40}]},2).to({state:[{t:this.shape_41}]},2).to({state:[{t:this.shape_42}]},2).to({state:[{t:this.shape_43}]},2).to({state:[{t:this.shape_44}]},2).to({state:[{t:this.shape_45}]},2).to({state:[{t:this.shape_46}]},2).to({state:[{t:this.shape_47}]},2).to({state:[{t:this.shape_48}]},2).to({state:[{t:this.shape_49}]},3).wait(3));

	// Layer_7
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],0,81.7,0,-81.6).s().p("AgHLiQgfgfgYgnIgSgiQh1iMhMi5QhFipggjFQgcirgEjPQgCicAMjhQAxB0BQBcQAoAtA9A3IBsBeQCSCCBhB/QBzCYAyCbQBFDSgPC8QgSDqicAdQgcAGgbAAQhnAAhPhPg");
	this.shape_50.setTransform(-91.0449,56.8111);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],-1,81.7,-1,-81.5).s().p("AgRLjQgfgfgYgnIgSgiQh1iMhMi5QhFipggjFQgZiVAbjmIAZi/QAOhxAEhNQAYA3AmA8QAlA6ApAvQAlAqBBAzQBcBIAPAPQB6BrBSCXQBAB2A+C/QBFDSgPC8QgSDqicAdQgcAFgbAAQhnAAhPhOg");
	this.shape_51.setTransform(-90.0311,56.7361);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],-0.8,81.7,-0.8,-81.5).s().p("AgPLjQgfgfgYgnIgSgiQh1iMhMi5QhFipggjFQghjFAji7QAmjLBzitQBDCeA/BIQAdAgAXA4QAUAwAlAiQB6BrBSCXQBAB2A+C/QBFDSgPC8QgSDqicAdQgcAFgbAAQhnAAhPhOg");
	this.shape_52.setTransform(-90.2308,56.7361);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],0.1,81.7,0.1,-81.5).s().p("AgFLjQgggfgYgnIgSgiQh0iMhMi5QhFipghjFQgskLANiEQAWjlCliEQAgBVAUAtQAiBRAiAnQAYAcAhAyQAXAlAnAjQB6BrBSCXQA/B2A/C/QBEDSgOC8QgTDqicAdQgcAFgaAAQhnAAhPhOg");
	this.shape_53.setTransform(-91.1616,56.7361);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],-0.6,81.5,-0.6,-81.7).s().p("AgNLgQgggegYgoIgSghQh0iMhMi5QhFipghjFQgljiAkirQAvjfCqiIQAMAeAKB0QAIBkAeAiQAnAtASAQQAbAXAjAfQB6BsBSCXQA/B1A/DAQBEDSgOC8QgTDqicAdQgcAFgaAAQhnAAhPhPg");
	this.shape_54.setTransform(-90.3925,56.9861);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],-1,81.5,-1,-81.7).s().p("AgRLgQgfgegYgoIgSghQh1iMhMi5QhFipggjFQghjLBAjCQBIjZCxiOQguBpAbBIQAMAhA+BGQAxA6ARAVQAcAgAtAoQBwBiA0CPQAgBVA2DOQBFDSgPC8QgSDqicAdQgcAFgbAAQhnAAhPhPg");
	this.shape_55.setTransform(-90.0097,56.9861);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],-0.9,84,-0.9,-79.3).s().p("AgQL5QgggegYgoIgSghQh0iMhMi5QhFipghjFQgkjfBDjDQBUj0DsiQQgwBuAOBcQALBKAwA2QAbAhATAuQAPAmAmAiQBwBiA0CPQAfBVA3DOQBEDSgOC8QgTDqicAdQgcAFgaAAQhnAAhPhPg");
	this.shape_56.setTransform(-90.0919,54.4861);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],-0.4,84.7,-0.4,-78.5).s().p("AgLMBQgggfgYgnIgSgiQh0iMhMi5QhFipghjFQgqkBAjioQA2kADliLQguBnAxBqQAZA2BIBSQAbAhATAtQAPAnAmAhQBwBjA0COQAfBWA3DNQBEDSgOC8QgTDqicAdQgcAFgaAAQhnAAhPhOg");
	this.shape_57.setTransform(-90.5938,53.7361);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],-0.3,85,-0.3,-78.3).s().p("AgKMDQgfgegYgoIgSghQh1iMhMi5QhFipggjFQgnjvAVibQAgjmChjKQB8EIBMBWQAcAhASAuQAPAmAmAiQBwBiA0CPQAgBVA2DOQBFDSgPC8QgSDqicAdQgdAFgaAAQhnAAhPhPg");
	this.shape_58.setTransform(-90.7054,53.4861);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],0.8,84.5,0.8,-78.8).s().p("AAAL+QgegegYgoIgSghQh1iMhMi5QhFipggjFQgXh+gKhBQgRhxAChVQAHjnCcjEQAyBrBaBoQBdBjAaAeQAdAhASAuQAPAmAmAiQBwBiA0CPQAgBVA2DOQBFDSgPC8QgSDqicAdQgcAFgbAAQhnAAhQhPg");
	this.shape_59.setTransform(-91.8394,53.9861);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],-0.3,84.5,-0.3,-78.8).s().p("AgKL+QgggegYgoIgSghQh0iMhMi5QhFipghjFQgkjdARioQAWjdBxjOQBNA8BRB9IBmCbQAbAhATAuQAPAmAmAiQBwBiA0CPQAfBVA3DOQBEDSgOC8QgTDqicAdQgcAFgaAAQhnAAhPhPg");
	this.shape_60.setTransform(-90.6826,53.9861);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],1.1,82.5,1.1,-80.8).s().p("AAELqQgfgegYgoIgSghQh0iMhMi5QhFipghjFIghi5QgThrgChNQgHjUBrjDQBbBGBmBfQBcBUAsAzQAcAhATAuQAPAmAmAiQBwBiA0CPQAfBVA3DOQBEDSgOC8QgTDqicAdQgcAFgaAAQhnAAhQhPg");
	this.shape_61.setTransform(-92.1948,55.9861);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],0.6,80.8,0.6,-82.5).s().p("AgBLZQgfgfgYgnIgSgiQh1iMhMi5QhFipggjFQgei4gJipQgIiiAHjhQCMAGCCBrQArAkBlB0QAdAhASAtQAPAnAmAhQBwBjA0COQAgBWA2DNQBFDSgPC8QgSDqicAdQgdAFgaAAQhnAAhPhOg");
	this.shape_62.setTransform(-91.6048,57.7361);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],3.4,77.5,3.4,-85.7).s().p("AAbK4QgfgegYgoIgSghQh0iMhMi5QhFipghjFQgUh9gxjEQgkiwAGizQCTAHCZBKQB6A8A0A7QAcAhATAuQAPAmAmAiQBwBiA0CPQAfBVA3DOQBEDSgOC8QgTDqicAdQgcAFgaAAQhnAAhQhPg");
	this.shape_63.setTransform(-94.4657,60.9861);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],5.6,75.9,5.6,-87.4).s().p("AAxKoQgggfgXgnIgSgiQh0iMhMi5QhFipghjFIgykuQgdiOhBi6QCqgkCnBGQB5AyA9BHQAcAhATAtQAPAnAmAhQBwBjA0COQAfBWA3DNQBEDSgOC8QgTDqicAdQgcAFgaAAQhnAAhQhOg");
	this.shape_64.setTransform(-96.6733,62.6248);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],7.9,73.6,7.9,-89.6).s().p("ABHKRQgfgegYgoIgRghQh1iMhMi5QhFipggjFQgYiSgxhyQhcjXgZhHQDUhRCsAuQB0AgBABJQAdAhASAuQAPAmAmAiQBwBiA0CPQAgBVA2DOQBFDSgPC8QgSDqicAdQgcAFgbAAQhnAAhQhPg");
	this.shape_65.setTransform(-98.9233,64.8915);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],7.9,75.4,7.9,-87.9).s().p("ABHKjQgfgfgYgnIgRgiQh1iMhMi5QhFipggjFQgKg6gKhmQgIhTgJgpQgch5h9iMQC3iEC6BDQBxAoBSBfQAdAhASAtQAPAnAmAhQBwBjA0COQAgBWA2DNQBFDSgPC8QgSDqicAdQgcAGgbAAQhnAAhQhPg");
	this.shape_66.setTransform(-98.9233,63.1194);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50}]}).to({state:[{t:this.shape_51}]},2).to({state:[{t:this.shape_52}]},2).to({state:[{t:this.shape_53}]},2).to({state:[{t:this.shape_54}]},2).to({state:[{t:this.shape_55}]},2).to({state:[{t:this.shape_56}]},2).to({state:[{t:this.shape_57}]},2).to({state:[{t:this.shape_58}]},2).to({state:[{t:this.shape_59}]},2).to({state:[{t:this.shape_60}]},2).to({state:[{t:this.shape_61}]},2).to({state:[{t:this.shape_62}]},2).to({state:[{t:this.shape_63}]},2).to({state:[{t:this.shape_64}]},2).to({state:[{t:this.shape_65}]},2).to({state:[{t:this.shape_66}]},3).wait(3));

	// Layer_8
	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["#EAC191","#CC7F3C","#BF704F","#B15C5D","#A64E63","#A04566","#9E4266","#342666"],[0,0.282,0.365,0.451,0.635,0.773,0.871,1],0,-50.3,0,50.3).s().p("AiCH3IgQgDQhJhMgThzQgShsAjhsQA6iwDCisIBCg5QAmgiAYgcQAyg7AehFQAHCNgBBdQgCCBgRBpQgmDhiQDIQg9BXhHAUQgTAFgSAAIgFAAg");
	this.shape_67.setTransform(82.0396,74.9571);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["#EAC191","#CC7F3C","#BF704F","#B15C5D","#A64E63","#A04566","#9E4266","#342666"],[0,0.282,0.365,0.451,0.635,0.773,0.871,1],-0.2,-48.9,-0.2,51.7).s().p("AiFIFIgQgCQhJhMgThzQgShtAjhsQA6iwDCirQAbgYAcgiIA0g9QATgXANg1QARhFAGgNQA4BfACCVQABBhgaCcQgmDiiQDIQg9BWhHAUQgTAGgRAAIgGgBg");
	this.shape_68.setTransform(82.3102,73.5071);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["#EAC191","#CC7F3C","#BF704F","#B15C5D","#A64E63","#A04566","#9E4266","#342666"],[0,0.282,0.365,0.451,0.635,0.773,0.871,1],0.2,-48.5,0.2,52.1).s().p("AiBIJIgQgCQhJhMgThzQgRhtAjhsQA5iwDCirQAdgaANgaIAXhBQAIgYAIg+QAIg5ALgYQBYA+ATCnQANB7gZCYQglDiiQDIQg+BWhGAUQgTAFgSAAIgGAAg");
	this.shape_69.setTransform(81.87,73.1321);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["#EAC191","#CC7F3C","#BF704F","#B15C5D","#A64E63","#A04566","#9E4266","#342666"],[0,0.282,0.365,0.451,0.635,0.773,0.871,1],0.6,-47.1,0.6,53.5).s().p("Ah8IXIgQgDQhJhMgThzQgShsAjhsQA6iwDCisQAlggALgRQAPgYABgpQACgvgHg1QgHg3gPgqQBcBAAuCzQApCggVCBQgmDhiQDIQg9BXhHAUQgTAFgSAAIgFAAg");
	this.shape_70.setTransform(81.4281,71.7571);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["#EAC191","#CC7F3C","#BF704F","#B15C5D","#A64E63","#A04566","#9E4266","#342666"],[0,0.282,0.365,0.451,0.635,0.773,0.871,1],0.1,-46.4,0.1,54.2).s().p("AiBIeIgQgCQhJhMgThzQgShtAjhsQA6iwDCirQAqglAHgHQASgUARgjQAVgqAGhHQAGhIgPgrQBYA+ASC9QANCMgaCbQgmDjiQDIQg9BWhHAUQgTAGgRAAIgGgBg");
	this.shape_71.setTransform(81.925,71.0071);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["#EAC191","#CC7F3C","#BF704F","#B15C5D","#A64E63","#A04566","#9E4266","#342666"],[0,0.282,0.365,0.451,0.635,0.773,0.871,1],-0.9,-46.7,-0.9,53.9).s().p("AiMIbIgQgDQhJhMgThzQgRhsAjhsQA5iwDCisIA9g1QAdgdARgiQBEiIgXhDQBWA8gFC7QgCBMgkDYQglDiiQDIQg+BXhGAUQgTAFgSAAIgGAAg");
	this.shape_72.setTransform(82.9696,71.3821);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["#EAC191","#CC7F3C","#BF704F","#B15C5D","#A64E63","#A04566","#9E4266","#342666"],[0,0.282,0.365,0.451,0.635,0.773,0.871,1],-2.2,-49.1,-2.2,51.5).s().p("AiZIDIgQgDQhJhMgThzQgRhsAjhsQA5iwDCisQAagWAZgnQAjg0ALgNIBziRQBCBTgZCbQgIAsgWBWQgWBXgGAlQglDhiQDIQg+BXhGAUQgUAFgRAAIgGAAg");
	this.shape_73.setTransform(84.2786,73.7571);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["#EAC191","#CC7F3C","#BF704F","#B15C5D","#A64E63","#A04566","#9E4266","#342666"],[0,0.282,0.365,0.451,0.635,0.773,0.871,1],-3.5,-49.6,-3.5,51).s().p("AimH+IgQgDQhJhMgThzQgRhsAjhsQBBjICniTIBBg7QAlgiAYgdQBoh+BKgOQAHBXgmCXQg3DbgEAZQglDhiQDIQg+BXhGAUQgUAFgRAAIgGAAg");
	this.shape_74.setTransform(85.5951,74.2571);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["#EAC191","#CC7F3C","#BF704F","#B15C5D","#A64E63","#A04566","#9E4266","#342666"],[0,0.282,0.365,0.451,0.635,0.773,0.871,1],-5.3,-51.2,-5.3,49.4).s().p("Ai4HuIgQgDQhJhMgThzQgShsAjhsQBCjICmiTQA7g0A6hGQAggnBKggQA7gZA8gMQgwBkggB5QgZBcgWCJQgmDhiPDIQg+BXhHAUQgTAFgRAAIgGAAg");
	this.shape_75.setTransform(87.4083,75.8821);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.lf(["#EAC191","#CC7F3C","#BF704F","#B15C5D","#A64E63","#A04566","#9E4266","#342666"],[0,0.282,0.365,0.451,0.635,0.773,0.871,1],-6.6,-52.7,-6.6,47.9).s().p("AjFHfIgQgDQhJhMgThzQgRhsAjhsQBBjICniTQAOgMA1gzQArgpAagVQAngeBKgUQAZgHBcgSQhBCHgbBHQgqBtgSBpQglDhiPDIQg/BXhGAUQgTAFgSAAIgGAAg");
	this.shape_76.setTransform(88.6583,77.3821);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["#EAC191","#CC7F3C","#BF704F","#B15C5D","#A64E63","#A04566","#9E4266","#342666"],[0,0.282,0.365,0.451,0.635,0.773,0.871,1],-7.8,-54.2,-7.8,46.4).s().p("AjRHQIgQgDQhJhMgThzQgShsAjhsQBCjICmiTIBGg+QAsgjAjgNQA2gTBKgRQAlgJBOgPQhNBggpBZQgoBZgTB0QgmDhiPDIQg+BXhHAUQgTAFgRAAIgGAAg");
	this.shape_77.setTransform(89.9083,78.8821);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["#EAC191","#CC7F3C","#BF704F","#B15C5D","#A64E63","#A04566","#9E4266","#342666"],[0,0.282,0.365,0.451,0.635,0.773,0.871,1],-8.3,-55.4,-8.3,45.2).s().p("AjWHEIgQgDQhJhMgThzQgShsAjhsQBCjICmiTIBHg+QArgjAjgNQBJgaA7gHQBKgJAvAWQhfB2gcAvQgvBQgRBpQgmDhiPDIQg+BXhHAUQgTAFgRAAIgGAAg");
	this.shape_78.setTransform(90.4083,80.0786);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["#EAC191","#CC7F3C","#BF704F","#B15C5D","#A64E63","#A04566","#9E4266","#342666"],[0,0.282,0.365,0.451,0.635,0.773,0.871,1],-8.8,-56.6,-8.8,44).s().p("AjbG3IgQgCQhJhMgThzQgShtAjhsQBCjICmiSQAhgdAvgcQAwgcApgPQA+gXBBACQBBABAzAZQheBogiArQg1BGgQBhQgmDiiPDIQg+BWhHAUQgTAFgRAAIgGAAg");
	this.shape_79.setTransform(90.9083,81.3275);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.lf(["#EAC191","#CC7F3C","#BF704F","#B15C5D","#A64E63","#A04566","#9E4266","#342666"],[0,0.282,0.365,0.451,0.635,0.773,0.871,1],-12.2,-57.2,-12.2,43.4).s().p("Aj9GxIgQgCQhJhMgThzQgRhtAjhsQBBjICniSQAhgdAwgcQAugcAqgPQA3gUBpAXQBVASBBAfQh9BJgvAlQhNA7gQBiQglDiiPDIQg/BWhGAUQgUAFgRAAIgGAAg");
	this.shape_80.setTransform(94.2833,81.917);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["#EAC191","#CC7F3C","#BF704F","#B15C5D","#A64E63","#A04566","#9E4266","#342666"],[0,0.282,0.365,0.451,0.635,0.773,0.871,1],-13.4,-57,-13.4,43.6).s().p("AkJGzIgQgCQhJhMgThzQgShtAjhsQBCjICmiSQAhgdAwgcQAvgcApgPQBFgZBuAVQB4AXAkA9IhnApQg2AWggAVQhUA2gQBlQgmDiiPDIQg+BWhHAUQgTAGgSAAIgFgBg");
	this.shape_81.setTransform(95.5333,81.7028);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["#EAC191","#CC7F3C","#BF704F","#B15C5D","#A64E63","#A04566","#9E4266","#342666"],[0,0.282,0.365,0.451,0.635,0.773,0.871,1],-14.6,-56.8,-14.6,43.8).s().p("AkVG2IgQgDQhJhMgThzQgRhsAjhsQBBjICniTQAhgcAwgdQAvgcApgPQBTgeBuAUQCGAZAeBiQglAPhFAVQhCATgdANQhfAqgQBhQglDhiPDIQg/BXhGAUQgTAFgSAAIgGAAg");
	this.shape_82.setTransform(96.6583,81.4611);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.lf(["#EAC191","#CC7F3C","#BF704F","#B15C5D","#A64E63","#A04566","#9E4266","#342666"],[0,0.282,0.365,0.451,0.635,0.773,0.871,1],-13.4,-55.9,-13.4,44.7).s().p("AkJG/IgQgDQhJhMgThzQgShsAjhsQBCjICmiTQAhgcAwgdQAvgcApgPQBmglBQABQB8AAAdBgQiNA7gwAkQhTA9gRBoQgmDhiPDIQg+BXhHAUQgTAFgSAAIgFAAg");
	this.shape_83.setTransform(95.5333,80.5568);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["#EAC191","#CC7F3C","#BF704F","#B15C5D","#A64E63","#A04566","#9E4266","#342666"],[0,0.282,0.365,0.451,0.635,0.773,0.871,1],-12.4,-56.2,-12.4,44.4).s().p("Aj/G8IgQgDQhJhMgThzQgShsAjhsQBCjICmiTQAhgcAwgdQAvgcApgPQBKgaAjgDQA9gFCRAYQhuAuhFBUQhHBVgTBzQgmDhiPDIQg+BXhHAUQgTAFgSAAIgFAAg");
	this.shape_84.setTransform(94.5333,80.8716);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_67}]}).to({state:[{t:this.shape_68}]},2).to({state:[{t:this.shape_69}]},2).to({state:[{t:this.shape_70}]},2).to({state:[{t:this.shape_71}]},2).to({state:[{t:this.shape_72}]},2).to({state:[{t:this.shape_73}]},2).to({state:[{t:this.shape_74}]},2).to({state:[{t:this.shape_75}]},2).to({state:[{t:this.shape_76}]},2).to({state:[{t:this.shape_77}]},2).to({state:[{t:this.shape_78}]},2).to({state:[{t:this.shape_79}]},2).to({state:[{t:this.shape_80}]},2).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},2).to({state:[{t:this.shape_83}]},2).to({state:[{t:this.shape_84}]},2).wait(3));

	// Layer_9
	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],0,97.3,0,-97.3).s().p("AjhOtQg8gchfhEQg1gngZgXQgoglgUgoQgSgjgHgyQgEgegCg7QgJkMAMiLQATjgBMijQAuhiBQhrQAyhCBoh4IETk/QBZE7gnFFQgGAwAOAmQAQAsAlgFQANgBAOgLQAIgGANgPQCFiTBpikQAsESAHCTQALDqgzC1QgjB8hMCIQiSEKiqBqQhVA1g2AAQgSADgTAAQhAAAhGggg");
	this.shape_85.setTransform(52.0714,24.4183);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],0.8,99.8,0.8,-94.8).s().p("AjZPGQg8gbhehFQg2gngYgWQgpgmgTgnQgSgkgHgxQgFgfgCg7QgIkLAMiMQATjgBMijQAthhBRhrQAxhCBph5QAug1A2iDQA3iEAtg1QBSEjAMA0QAvDSgRCKQgGAwAOAlQARAtAlgFQANgCANgKQAJgHANgOQAwg1ApiBQAviRAeguQAKBDAgCYQAgCZAMBQQAsEUgwCqQgiB7hMCJQiTEKipBqQhVA1g3AAQgSACgTAAQg/AAhHggg");
	this.shape_86.setTransform(51.226,21.8933);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],0.3,99.8,0.3,-94.8).s().p("AjePGQg8gbhehFQg2gngYgWQgpgmgTgnQgSgkgHgxQgFgfgCg7QgIkLAMiMQATjgBMijQAthhBRhrQAxhCBph5QA6hDAqhtQAYg/AqiDQBgCWAqDBQAoC3gUCmQgGAwAOAlQARAtAlgFQANgCANgKQAJgHANgOQAwg1ApiBQAviRAeguQBQDLAaDuQAeEJg2DAQgiB7hMCJQiTEKipBqQhVA1g3AAQgSADgTAAQg/AAhHghg");
	this.shape_87.setTransform(51.7095,21.8683);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],-0.1,99.8,-0.1,-94.8).s().p("AjjPGQg8gbhehFQg2gngYgWQgpgmgTgnQgSgkgHgxQgFgfgCg7QgIkLAMiMQATjgBMijQAthhBRhrQAxhCBph5QA3g/AbhxIAWhgQANg6AOgoQCCB6AvDSQAnCsgXC8QgGAwAOAlQARAtAlgFQANgCANgKQAJgHANgOQAvg0AaiCQAdiOAggyQB9CRAbEYQAZD8g/DeQgiB7hMCJQiTEKipBqQhUA1g4AAQgSADgTAAQg/AAhHghg");
	this.shape_88.setTransform(52.2188,21.8683);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],-0.8,99.8,-0.8,-94.8).s().p("AjqPGQg8gbhehFQg2gngYgWQgpgmgTgnQgSgkgHgxQgFgfgCg7QgIkLAMiMQATjgBMijQAthhBRhrQAxhCBph5QA7hEAPhnQAJg+AGiJQCGB+BADOQA6C7gVCtQgGAwAOAlQARAtAlgFQANgCANgKQAJgHANgOQAwg2AtiEQAziVAeguQB6CNAKEgQAJDxhDDsQgiB7hMCJQiTEKipBqQhUA1g4AAQgSADgTAAQg/AAhHghg");
	this.shape_89.setTransform(52.9219,21.8683);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],-2.3,100.2,-2.3,-94.4).s().p("Aj5PKQg8gbhehFQg2gngYgWQgpgmgTgnQgSgkgHgxQgFgfgCg7QgIkLAMiMQATjgBMijQAthhBRhrQAxhCBph5QA4hBAChuQAAgTgDhPQgCg/ADgpQCKCBBNDPQBJDFgUCmQgGAwAOAlQARAtAlgFQANgCANgKQAJgHANgOQAzg5BHiBQBfitAOgWQB3CIgPElQgKDOhNEPQgiB7hMCJQiTEKipBqQhUA1g4AAQgSACgTAAQg/AAhHggg");
	this.shape_90.setTransform(54.4028,21.4933);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],-3.9,100.5,-3.9,-94.1).s().p("AkJPNQg8gchehEQg2gngYgXQgpglgTgoQgSgjgHgyQgFgegCg7QgIkMAMiLQATjgBMijQAthiBRhrQAxhCBph4QA2g/gOhzIgOhkQgJg9AEgsQCvBPBRDsQBGDGgXC/QgGAwAOAmQARAsAlgFQANgBANgLQAJgGANgPQA8hDBXh4QBJhlA9hfQB0CFglEpQgTCVhdFJQgiB8hMCIQiTEKipBqQhUA1g4AAQgSADgTAAQg/AAhHggg");
	this.shape_91.setTransform(56.012,21.2433);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],-2.5,100.5,-2.5,-94.1).s().p("Aj6PNQg8gchfhEQg1gngZgXQgoglgUgoQgSgjgHgyQgEgegCg7QgJkMAMiLQATjgBMijQAuhiA4hMQAdgmBlh1QA5hCAIiPQACgjgBhWQAAhNAEgmQCuBPBSDsQBGDGgXC/QgGAwAOAmQAQAsAlgFQANgBAOgLQAIgGANgPQA1g6BIh9IBwjBQDJDoi9KdQgjB8hMCIQiSEKiqBqQhUA1g3AAQgSADgTAAQhAAAhGggg");
	this.shape_92.setTransform(54.5534,21.2433);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],-4.3,100.2,-4.3,-94.4).s().p("AkMPKQg8gbhfhFQg1gngZgWQgogmgUgnQgSgkgHgxQgEgfgCg7QgJkLAMiMQATjgBMijQAuhiA4hLQAdgnBlh0QA9hHAfiIQAUhVANiUQCpBNA7DrQAtCxgZDSQgGAwAOAlQAQAtAlgFQANgCAOgKQAIgHANgOQAVgXBxiXQBYh2BGg5QBzCFgpEYQgPBlgmCKQgWBOgqCQQgjB7hMCJQiSEKiqBqQhUA1g3AAQgSACgTAAQhAAAhGggg");
	this.shape_93.setTransform(56.3626,21.4933);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],-4.8,100,-4.8,-94.6).s().p("AkSPIQg8gchehEQg2gngYgXQgpglgTgoQgSgjgHgyQgFgegCg7QgIkMAMiLQATjgBMijQAthiA4hMQAdgmBlh1QBEhOAyh+QAwh5AJhuQCnBMAlDqQAXCQgdDwQgGAwAOAmQARAsAlgFQANgBANgLQAJgGANgPQAsgwBliFQBjh0BfgiQBPCYgyEHQgRBegnCEIhADXQgiB8hMCIQiTEKipBqQhUA1g4AAQgSADgTAAQg/AAhHggg");
	this.shape_94.setTransform(56.9272,21.7433);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],-2.9,100.7,-2.9,-93.9).s().p("Aj+PPQg8gbhfhFQg1gngZgWQgogmgUgnQgSgkgHgxQgEgfgCg7QgJkLAMiMQATjgBMijQAuhiA4hLQAdgnBlh0QBWhkBChwQBUiOAJhgQCiBJAGD0QADBUgRB7QgUCDgGA2QgGAwAOAlQAQAtAlgFQANgCAOgKQAIgHANgOQAbgdAhg5IA7hiQBNh3BbghQBRCdgaEEQgRCuhMEOQgjB7hMCJQiSEKiqBqQhUA1g3AAQgSACgTAAQhAAAhGggg");
	this.shape_95.setTransform(54.9632,20.9933);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],-4.3,100.2,-4.3,-94.4).s().p("AkNPKQg8gbhehFQg2gngYgWQgpgmgTgnQgSgkgHgxQgFgfgCg7QgIkLAMiMQATjgBMijQAthiA4hLQAdgnBlh0QBGhRA3h+QA4iAAJhpQCmBLAeDtQASCEgfD/QgGAwAOAlQARAtAlgFQANgCANgKQAJgHANgOQAsgxBfiCQBdhxBegiQBQCYgsEEQgQBfgkCBQgVBLgpCMQgiB7hMCJQiTEKipBqQhUA1g4AAQgSACgTAAQg/AAhHggg");
	this.shape_96.setTransform(56.4326,21.4933);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],-4.3,98.5,-4.3,-96.1).s().p("AkNO5Qg8gchehEQg2gngYgXQgpglgTgoQgSgjgHgyQgFgegCg7QgIkMAMiLQATjgBMijQAihJAlhYQAhhBBDhOQBBhLAsh+QAnhxAKh0QCsBOBGDZQA5CugYDDQgGAwAOAmQARAsAlgFQANgBANgLQAJgGANgPQAsgwBfiCQBdhyBegiQBQCZgsEEQgQBegkCCQgVBKgpCMQgiB8hMCIQiTEKipBqQhUA1g4AAQgSADgTAAQg/AAhHggg");
	this.shape_97.setTransform(56.4326,23.2433);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],-2.7,97.7,-2.7,-96.9).s().p("Aj8OxQg8gbhfhFQg1gngZgWQgogmgUgnQgSgkgHgxQgEgfgCg7QgJkLAMiMQATjgBMijQAihJAmhYQAghBBDhNQA6hDAPh/QAIhJAFiUQC0BRBiDOQBbC7gVCvQgGAwAOAlQAQAtAlgFQANgCAOgKQAIgHANgOQAbgeAhg4IA5hiQBKh3BbghQBSCdgYEEQgRC0hKEIQgjB7hMCJQiSEKiqBqQhUA1g3AAQgTACgTAAQg/AAhGggg");
	this.shape_98.setTransform(54.7955,23.9933);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],-1.4,97.8,-1.4,-96.8).s().p("AjvOyQg8gbhfhFQg1gngZgWQgogmgUgnQgSgkgHgxQgEgfgCg7QgJkLAMiMQATjgBMijQAihJAmhYQAghBBDhNQA3g/gQiEQgFglgLhLQgJhDAEgsQC7BVB9DMQB7DGgTClQgGAwAOAlQAQAtAlgFQANgCAOgKQAIgHANgOQAcgfAZg4QAPghAbhEQA4h8BYggQBVCjgFEDQgFDYhBDnQgjB7hMCJQiSEKiqBqQhUA1g3AAQgTADgTAAQg/AAhGghg");
	this.shape_99.setTransform(53.4905,23.8683);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],-0.4,98.2,-0.4,-96.4).s().p("AjmO2Qg8gbhehFQg2gngYgWQgpgmgTgnQgSgkgHgxQgFgfgCg7QgIkLAMiMQATjgBMijQAQgjAnh7QAWhFA9hHQA2g+gZiMIgXh0QgMhEAEgsQDABXCTDNQCUDPgTCgQgGAwAOAlQARAtAlgFQANgCANgKQAJgHANgOQAcgfASg6QALghAShHQAliBBXggQBYCqALEBQAKDvg8DVQgiB7hMCJQiTEKipBqQhUA1g4AAQgSACgTAAQg/AAhHggg");
	this.shape_100.setTransform(52.5452,23.4933);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],-1.3,99.2,-1.3,-95.4).s().p("AjvPAQg8gbhehFQg2gngYgWQgpgmgTgnQgSgkgHgxQgFgfgCg7QgIkLAMiMQATjgBMijQAQgjAnh7QAWhFA9hHQA3hAgHiUQgDgogIhTQgFhIADgrQC7BUCFDaQCDDUgUClQgGAwAOAlQARAtAlgFQANgCANgKQAJgHANgOQAbgfAZg8QAPgjAbhLQA2iKBYggQBWCjgFEQQgEDohBDlQgiB7hMCJQiTEKipBqQhUA1g4AAQgSACgTAAQg/AAhHggg");
	this.shape_101.setTransform(53.4126,22.4933);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],-2.5,98,-2.5,-96.6).s().p("Aj6O0Qg8gchfhEQg1gngZgXQgoglgUgoQgSgjgHgyQgEgegCg7QgJkMAMiLQATjgBMijQARgkAmh7QAWhFA+hHQA6hDARiEQAJhLAGiXQC2BTBuDPQBoDCgUCqQgGAwAOAmQAQAsAlgFQANgBAOgLQAIgGANgPQAbgdAgg5IA2hkQBHh6BaghQBTCfgVEFQgPC+hIEAQgjB8hMCIQiSEKiqBqQhUA1g3AAQgSADgTAAQhAAAhGggg");
	this.shape_102.setTransform(54.5528,23.7433);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_85}]}).to({state:[{t:this.shape_86}]},2).to({state:[{t:this.shape_87}]},2).to({state:[{t:this.shape_88}]},2).to({state:[{t:this.shape_89}]},2).to({state:[{t:this.shape_90}]},2).to({state:[{t:this.shape_91}]},2).to({state:[{t:this.shape_92}]},2).to({state:[{t:this.shape_93}]},2).to({state:[{t:this.shape_94}]},2).to({state:[{t:this.shape_95}]},2).to({state:[{t:this.shape_96}]},2).to({state:[{t:this.shape_97}]},2).to({state:[{t:this.shape_98}]},2).to({state:[{t:this.shape_99}]},2).to({state:[{t:this.shape_100}]},2).to({state:[{t:this.shape_101}]},2).to({state:[{t:this.shape_102}]},2).wait(2));

	// flash0_ai
	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],0,125.8,0,-125.8).s().p("AikTXQgQgMgMgWQgIgOgMgcIlbtEIgBgCQg+lWAUjhQAIhaAbhtQAQhBAoiDIC7ptQAJBwBCCEQAeA8BoCoQBXCNAhBXQAxCAgNByIEIpnQgqCNBAC+QAlBtBlDXQB2EUAVExQAUExhREiQgUBLgYAzQgeBCgrAtQgwAyhBAUQhFAVg8gYQhZgjgUiCQgGglgEhRQgEhSgGgnQgIBGAIBnQAHBegIApQgOBNhIAwQgoAagjAAQgeAAgbgUg");
	this.shape_103.setTransform(-25.2292,-0.9577);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],0,124.4,0,-127.2).s().p("AikTIQgQgMgMgWQgIgNgMgcIlbtFIgBgBQg+lWAUjiQAIhZAbhuQAQhBAoiCQAfhoB5jAQB5jBAfhoQAJBwAvB/QASAwBMCrQA6CEAWBWQAfB7gNBzQAshnCEjCQCDjCAshnQgtCbAXClQAUCKBLCvQB2EVAVEwQAUEyhREiQgUBKgYA0QgeBCgrAsQgwAyhBAUQhFAVg8gXQhZgkgUiBQgGgmgEhRQgEhRgGgnQgIBFAIBoQAHBegIApQgOBNhIAvQgoAbgjAAQgeAAgbgVg");
	this.shape_104.setTransform(-25.2292,0.4673);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],0,123.4,0,-128.2).s().p("AikS+QgQgMgMgWQgIgNgMgcIlbtFIgBgBQg+lWAUjiQAIhZAbhuQAQhBAoiCQAVhFA8hPQAkgvBVhbQBWhcAjgvQA8hPAVhFQAJBuAgB+IA7DUQBHD/gXC/QAshnCni4QCmi4AshnQg1C2gECAQgDCbA/CUQB2EVAVEwQAUEyhREiQgUBKgYA0QgeBCgrAsQgwAyhBAUQhFAVg8gXQhZgkgUiBQgGgmgEhRQgEhRgGgnQgIBFAIBoQAHBegIApQgOBNhIAvQgoAbgjAAQgeAAgbgVg");
	this.shape_105.setTransform(-25.2292,1.4673);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],0,121.4,0,-130.2).s().p("AikSqQgQgMgMgWQgIgNgMgcIlbtFIgBgBQg+lWAUjiQAIhZAbhuQAQhBAoiCQAVhGA8hEQAogvBXhJQBqhZAkgjQBOhLAuhMQAJBqAVB8IAiDGQAmDigYDIQAfiDA9hcQAthEBLg/IB3hiQA+g4AchCQAHBXgLBdIgVCVQgXClAzB3QB2EVAVEwQAUEyhREiQgUBKgYA0QgeBCgrAsQgwAyhBAUQhFAVg8gXQhZgkgUiBQgGgmgEhRQgEhRgGgnQgIBFAIBoQAHBegIApQgOBNhIAvQgoAbgjAAQgeAAgbgVg");
	this.shape_106.setTransform(-25.2292,3.4673);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],0,120.9,0,-130.7).s().p("AikSlQgQgMgMgWQgIgNgMgcIlbtFIgBgBQg+lWAUjiQAIhZAbhuQAQhBAoiCQAriRCOiCQByhpDqiPQAdEpAGB+QAKDIgaDdQAfiDBIhaQA1hDBbg9ICPheQBJg3AchCQAHBYgWBbQgIAlglBsQgcBSgEA0QgGBJAfBIQB2EVAVEwQAUEyhREiQgUBKgYA0QgeBCgrAsQgwAyhBAUQhFAVg8gXQhZgkgUiBQgGgmgEhRQgEhRgGgnQgIBFAIBoQAHBegIApQgOBNhIAvQgoAbgjAAQgeAAgbgVg");
	this.shape_107.setTransform(-25.2292,3.9673);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],0,118.9,0,-132.7).s().p("AikSRQgQgMgMgWQgIgNgMgcIlbtFIgBgBQg+lWAUjiQAIhZAbhuQAQhBAoiCQAniCDJh9QA8glCGhJQCLhLBGgrQARDLglDIIgkC0QgXB1gMBoQAfiDBQhcQA6hDBnhAICghiQBRg4AchCQAHBZgdBbQgOAtgxBoQgoBWgJAzQgOBMAfBHQB2EVAVEwQAUEyhREiQgUBKgYA0QgeBCgrAsQgwAyhBAUQhFAVg8gXQhZgkgUiBQgGgmgEhRQgEhRgGgnQgIBFAIBoQAHBegIApQgOBNhIAvQgoAbgjAAQgeAAgbgVg");
	this.shape_108.setTransform(-25.2292,5.9673);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],0,119.4,0,-132.2).s().p("AikSWQgQgMgMgWQgIgNgMgcIlbtFIgBgBQg+lWAUjiQAIhZAbhuQAQhBAoiCQAsiUB0hwQBjhgDhiJQAJBqASB2QAXB8AJA8QAhDNgYDJQAfiDA9haQAthDBLg9QApgiBOg8QA+g3AchCQAHBXgLBcIgVCRQgXCgAzB3QB2EVAVEwQAUEyhREiQgUBKgYA0QgeBCgrAsQgwAyhBAUQhFAVg8gXQhZgkgUiBQgGgmgEhRQgEhRgGgnQgIBFAIBoQAHBegIApQgOBNhIAvQgoAbgjAAQgeAAgbgVg");
	this.shape_109.setTransform(-25.2292,5.4673);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],0,119.9,0,-131.7).s().p("AikSbQgQgMgMgWQgIgNgMgcIlbtFIgBgBQg+lWAUjiQAIhZAbhuQAQhBAoiCQAPg0AYhaQAVhLAZgwQBCh+C3hwQAJBwArBxQAQAsBDCQQAzBvATBMQAaBtgNBzQA1jfBoh+QAagfAwg3IAHgIIARgWQAiguAWg1IAIBjIACAeQAMCQAIAzQAWCIA9CPQB2EVAVEwQAUEyhREiQgUBKgYA0QgeBCgrAsQgwAyhBAUQhFAVg8gXQhZgkgUiBQgGgmgEhRQgEhRgGgnQgIBFAIBoQAHBegIApQgOBNhIAvQgoAbgjAAQgeAAgbgVg");
	this.shape_110.setTransform(-25.2292,4.9673);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],0,117.9,0,-133.7).s().p("AikSHQgQgMgMgWQgIgNgMgcIlbtFIgBgBQg+lWAUjiQAIhZAbhuQAQhBAoiCQASg+ABhKQAAhjABgKQAHg5AkguQArg3Big8QAJBxA/BqQAfA1BhB5QBUBoAeBFQAvBngNBzQA4jrA4h3QAKgWAohMQAig/AZg7QANCrA+CeQBTCzAtBpQB2EVAVEwQAUEyhREiQgUBKgYA0QgeBCgrAsQgwAyhBAUQhFAVg8gXQhZgkgUiBQgGgmgEhRQgEhRgGgnQgIBFAIBoQAHBegIApQgOBNhIAvQgoAbgjAAQgeAAgbgVg");
	this.shape_111.setTransform(-25.2292,6.9673);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],0,117.9,0,-133.7).s().p("AikSHQgQgMgMgWQgIgNgMgcIlbtFIgBgBQg+lWAUjiQAPioAAjbQAAglgFhMQgChDAMgvQAjiFC0huQAJBxBIBqQAmA3BvB3QBjBpAlBEQA3BngNBzQBLk7AzhxQBDiVCUh/QAGBLADB+QAECPACAyQAMDbA4CCQB2EVAVEwQAUEyhREiQgUBKgYA0QgeBCgrAsQgwAyhBAUQhFAVg8gXQhZgkgUiBQgGgmgEhRQgEhRgGgnQgIBFAIBoQAHBegIApQgOBNhIAvQgoAbgjAAQgeAAgbgVg");
	this.shape_112.setTransform(-25.2292,6.9673);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],0,119.4,0,-132.2).s().p("AikSWQgQgMgMgWQgIgNgMgcIlbtFIgBgBQg+lWAUjiQAPioAAjbQAAh6BVh4QBhiJDGh5QAJBwAvBwQAVAvBJCJQA6BtAWBKQAfBsgNBzQA+kDBtiVQAvhABGhCQAjghBshdQAHBXgMBrIgZC0QgcDSAzB3QB2EVAVEwQAUEyhREiQgUBKgYA0QgeBCgrAsQgwAyhBAUQhFAVg8gXQhZgkgUiBQgGgmgEhRQgEhRgGgnQgIBFAIBoQAHBegIApQgOBNhIAvQgoAbgjAAQgeAAgbgVg");
	this.shape_113.setTransform(-25.2292,5.4673);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],0,118.4,0,-133.2).s().p("AikSMQgQgMgMgWQgIgNgMgcIlbtFIgBgBQg+lWAUjiQAPioAAjbQAAhnCWiBQBxhhD3iXQAJBuAbBuIAwCyQA5DMgXDAQBFkkCDiZQCGidDPgWQhyDEgfCSQgkCsBACVQB2EVAVEwQAUEyhREiQgUBKgYA0QgeBCgrAsQgwAyhBAUQhFAVg8gXQhZgkgUiBQgGgmgEhRQgEhRgGgnQgIBFAIBoQAHBegIApQgOBNhIAvQgoAbgjAAQgeAAgbgVg");
	this.shape_114.setTransform(-25.2292,6.4673);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],0,117.4,0,-134.2).s().p("AikSCQgQgMgMgWQgIgNgMgcIlbtFIgBgBQg+lWAUjiQAJhiAyiBQAvh8A7hWQBeiIBEhBQBehbDBh2QAfEXAJBtQAOCtgZDVQBCkXCBh+QB3hzDZgYQh0DIgYBmQgeCFA/CUQB2EVAVEwQAUEyhREiQgUBKgYA0QgeBCgrAsQgwAyhBAUQhFAVg8gXQhZgkgUiBQgGgmgEhRQgEhRgGgnQgIBFAIBoQAHBegIApQgOBNhIAvQgoAbgjAAQgeAAgbgVg");
	this.shape_115.setTransform(-25.2292,7.4673);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],0,113.4,0,-138.2).s().p("AikRaQgQgMgMgWQgIgNgMgcIlbtFIgBgBQg+lWAUjiQAJhiAyiBQAvh8A7hWQBciFAegcQA0gyDEh3QAJBuAaBfQAEASAoB9QAaBOAHBAQAKBXgOB1QAkiWAehPQAihWAtgtQArgrBHgVQA5gRBzgNQhgClAGBcQADAsAXA8IA5CEQB2EVAVEwQAUEyhREiQgUBKgYA0QgeBCgrAsQgwAyhBAUQhFAVg8gXQhZgkgUiBQgGgmgEhRQgEhRgGgnQgIBFAIBoQAHBegIApQgOBNhIAvQgoAbgjAAQgeAAgbgVg");
	this.shape_116.setTransform(-25.2292,11.4673);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],0,113.9,0,-137.7).s().p("AikRfQgQgMgMgWQgIgNgMgcIlbtFIgBgBQg+lWAUjiQAPiqAJgvQAWiAAxhIQAdgpAfg7QAdg1ASgXQA4hMCxhsQAJBwApBeQASArA+BoQAxBUARA9QAZBbgNBzIA2jpQAYhhAbgtQAegyA4gYQA1gXBrgMQABDLAGBJQAIBwA6CHQB2EVAVEwQAUEyhREiQgUBKgYA0QgeBCgrAsQgwAyhBAUQhFAVg8gXQhZgkgUiBQgGgmgEhRQgEhRgGgnQgIBFAIBoQAHBegIApQgOBNhIAvQgoAbgjAAQgeAAgbgVg");
	this.shape_117.setTransform(-25.2292,10.9673);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],0,118.9,0,-132.7).s().p("AikSRQgQgMgMgWQgIgNgMgcIlbtFIgBgBQg+lWAUjiQAPiqAJgvQAWiAAxhIQAWggAzhTQAqhGAggpQBfh+CyhsQAJBuAdBwIAzC1QAeBnAKBNQANBpgOB0QAjiWAehKQAghRArgoQAoglBGgRQAwgLB7gOQADBQgLBEIgUBiQgLAyAFApQAGA1AfBJQB2EVAVEwQAUEyhREiQgUBKgYA0QgeBCgrAsQgwAyhBAUQhFAVg8gXQhZgkgUiBQgGgmgEhRQgEhRgGgnQgIBFAIBoQAHBegIApQgOBNhIAvQgoAbgjAAQgeAAgbgVg");
	this.shape_118.setTransform(-25.2292,5.9673);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],0,117.9,0,-133.7).s().p("AikSHQgQgMgMgWQgIgNgMgcIlbtFIgBgBQg+lWAUjiQAPiqAJgvQAWiAAxhIQBTh4ByhgQBxhgDRiAQAfEaAJBvQAOCygZDVQAhiLAshIQAphDA+gbQAvgUBbgGIC3gNQAEBSgYA2QgMAbgkArQgeAjgEAcQgGAqAfBIQB2EVAVEwQAUEyhREiQgUBKgYA0QgeBCgrAsQgwAyhBAUQhFAVg8gXQhZgkgUiBQgGgmgEhRQgEhRgGgnQgIBFAIBoQAHBegIApQgOBNhIAvQgoAbgjAAQgeAAgbgVg");
	this.shape_119.setTransform(-25.2292,6.9673);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.lf(["#342666","#9E4266","#A04566","#A64E63","#B15C5D","#BF704F","#CC7F3C","#EAC191"],[0,0.259,0.306,0.376,0.451,0.537,0.596,1],0,121.4,0,-130.2).s().p("AikSqQgQgMgMgWQgIgNgMgcIlbtFIgBgBQg+lWAUjiQAPiqAJgvQAWiAAxhIQAegrAphQQAvhaAYgmQBfiaCthpQAJBuAeB4IA4DGQBCDrgXC/QAlibAchOQAhhcAqgyQAqgxBEgZQA9gXBugMQADBPgLBPQgPBSgFAkQgVB+A0B5QB2EVAVEwQAUEyhREiQgUBKgYA0QgeBCgrAsQgwAyhBAUQhFAVg8gXQhZgkgUiBQgGgmgEhRQgEhRgGgnQgIBFAIBoQAHBegIApQgOBNhIAvQgoAbgjAAQgeAAgbgVg");
	this.shape_120.setTransform(-25.2292,3.4673);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_103}]}).to({state:[{t:this.shape_104}]},2).to({state:[{t:this.shape_105}]},2).to({state:[{t:this.shape_106}]},2).to({state:[{t:this.shape_107}]},2).to({state:[{t:this.shape_108}]},2).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},2).to({state:[{t:this.shape_111}]},2).to({state:[{t:this.shape_112}]},2).to({state:[{t:this.shape_113}]},2).to({state:[{t:this.shape_114}]},2).to({state:[{t:this.shape_115}]},2).to({state:[{t:this.shape_116}]},2).to({state:[{t:this.shape_117}]},2).to({state:[{t:this.shape_118}]},2).to({state:[{t:this.shape_119}]},2).to({state:[{t:this.shape_120}]},2).to({state:[{t:this.shape_120}]},1).wait(1));

	// Layer_4_copy_copy
	this.instance = new lib.littleFire();
	this.instance.setTransform(-118.05,-51.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({regX:0.1,regY:2.8,scaleX:0.9999,scaleY:0.9999,rotation:-48.6798,guide:{path:[-118.1,-51.6,-117.9,-58.7,-117.2,-65.8,-112.5,-112.1,-111.2,-131.6,-109.3,-162.2,-110.9,-183.6,-112.8,-207.8,-119.8,-228.6,-127,-250.1,-141.1,-272.9,-151.8,-289.9,-178.1,-320.1,-209.8,-356.4,-221.6,-372.2,-245.7,-404.3,-257.9,-434.6,-267,-456.9,-270.6,-480.2], orient:'fixed'}},24).wait(1));

	// Layer_4_copy
	this.instance_1 = new lib.littleFire();
	this.instance_1.setTransform(-18.45,-34.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({_off:false},0).to({regX:0.1,regY:2.8,scaleX:0.9999,scaleY:0.9999,rotation:-48.6798,guide:{path:[-18.4,-34.8,-18.2,-35.1,-18.1,-35.3,-7.4,-59.7,-0.2,-85,0,-85.5,0.1,-86,23.4,-166.4,5.4,-226.1,-7.9,-270.6,-12.8,-289.4,-20.6,-319.2,-23,-340.5,-25.8,-364.6,-22.9,-386.3,-19.9,-408.9,-10.2,-434,-4.5,-449.2,10,-475], orient:'fixed'}},14).wait(1));

	// Layer_4
	this.instance_2 = new lib.littleFire();
	this.instance_2.setTransform(94.6,19.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-44.4733,guide:{path:[94.7,19.9,110.6,-4.1,121.5,-28.9,121.8,-29.4,122,-29.9,157.4,-110.3,130,-170,109.7,-214.6,102.2,-233.4,90.3,-263.2,86.6,-284.5,82.4,-308.6,86.8,-330.3,91.4,-352.9,106.1,-378,117.1,-396.6,147.7,-431.2,184.6,-473,197.8,-490.7,224.4,-526.8,234,-558.8,245.8,-598.5,234,-638,222.5,-676.5,203.1,-710.8,189,-735.5,167.8,-762.6,164.4,-766.8,151.6,-782.7,145.4,-790.4,141.3,-795.8], orient:'fixed'}},35).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-289.8,-812.6,535.8,960.7);


(lib.bonfireMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.fireMC();
	this.instance.setTransform(402.25,490.4,1,1,0,0,0,-12.2,10.6);

	this.instance_1 = new lib.CachedBmp_19();
	this.instance_1.setTransform(279,551.3,0.5,0.5);

	this.instance_2 = new lib.ClipGroup_2();
	this.instance_2.setTransform(368.15,726.55,1,1,0,0,0,340.2,335.2);
	this.instance_2.alpha = 0.3008;

	this.instance_3 = new lib.CachedBmp_18();
	this.instance_3.setTransform(155.25,532.05,0.5,0.5);

	this.instance_4 = new lib.fireLightUp();
	this.instance_4.setTransform(413.8,369.3,0.7835,0.7835,0,0,0,330,330);

	this.instance_5 = new lib.fireLightDown();
	this.instance_5.setTransform(399.9,682.75,0.9166,0.9166,0,0,0,399.9,88.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bonfireMC, new cjs.Rectangle(33.4,110.8,732.9,673.2), null);


(lib.skipBTN = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// _
	this.instance = new lib.skip();
	this.instance.setTransform(0.5,0);

	this.text = new cjs.Text("דלגו", "23px 'Arial'", "#FCEBEB");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 50;
	this.text.parent = this;
	this.text.setTransform(0.5,-15.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.text}]},1).wait(1));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#9A819E","#F7E5D4"],[0.11,0.769],-35.7,0,35.8,0).s().p("Aj8C6QhphNAAhtQAAhrBphOQBqhNCSAAQCUAABpBNQBpBNAABsQAABthpBNQhoBNiVAAQiTAAhphNg");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#5353A0","#352868"],[0.259,1],0,0,0,0,0,35.7).s().p("Aj7C6QhAgvgZg7IgQhPIAAgBIAQhPIAFgKIABgDIAKgRQATgfAggbIAWgSQBphNCSAAQCUAABpBNIAbAWQAlAiAUAoQAUAqAAAvIAAAAQAAAtgRAoIgDAGQgaA0g6ArQhoBNiVAAQiTAAhohNg");
	this.shape_1.setTransform(0.025,-0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#9A819E","#F7E5D4"],[0.11,0.769],-35.9,21.3,35.5,21.3).s().p("AD6AcQhphMiSAAQiUAAhpBMIgWARIAWgSQBphMCUAAQCSAABpBMQAPALAMAMIgbgWg");
	this.shape_2.setTransform(95.1,-25.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.7,-30,158.5,56.3);


(lib.guyfrombackarm = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E87054").s().p("AgNBEQhlg/g0guQAdgJAjgkIAegjIDvBeIhaCVQgogWgyggg");
	this.shape.setTransform(42.275,3.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(125));

	// Layer_4
	this.instance = new lib.guyfrombackwrist();
	this.instance.setTransform(24,-7.6,1,1,-16.4216,0,0,43.5,3.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:4.0189,x:24.05,y:-7.5},60).to({rotation:-16.4216,x:24,y:-7.6},64).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1C097").s().p("AC+C5QgmgFgagXIkyjmQj3iVDfAxIGzCyQA5AkASAxQAUA6g+AbQgbALgbAAIgUgBg");
	this.shape_1.setTransform(46.033,6.3285);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(125));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.4,-31.9,155.5,60.2);


(lib.guyfromback = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.CachedBmp_14();
	this.instance.setTransform(36.5,-95.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(125));

	// Layer_3
	this.instance_1 = new lib.CachedBmp_15();
	this.instance_1.setTransform(-36.75,-35.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(125));

	// Layer_4
	this.instance_2 = new lib.CachedBmp_16();
	this.instance_2.setTransform(-79.75,-14.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(125));

	// Layer_5
	this.instance_3 = new lib.CachedBmp_17();
	this.instance_3.setTransform(-42.25,-15.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(125));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#28316E","#1D1938"],[0,1],-89.7,0,89.8,0).s().p("AGDAoQilgYj4AEQh8ACklAQQjsANhYgFQiCgHAAgpQAAgaEPgSQEPgSF9AAIFfgDQC7gCBZADQD1AIAAA+QAAAthmAOQgpAGg3AAQh6AAi/gdg");
	this.shape.setTransform(1.375,88.9626);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(125));

	// Layer_7
	this.instance_4 = new lib.guyfrombackarm();
	this.instance_4.setTransform(35.95,-5.5,1,1,8.2059,0,0,63.2,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:10.4,rotation:-19.9828,x:36.05,y:-5.7},58).to({regY:10.5,rotation:8.2059,x:35.95,y:-5.5},64).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.1,-95.8,209.89999999999998,191.7);


(lib.guitarguyhead = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.guitarguyonlyhead();
	this.instance.setTransform(-18.5,23.2,1,1,-13.2241,0,0,-18.5,25.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:0,y:23.1},14).to({rotation:-13.2241,y:23.2},15).wait(1));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8C099").s().p("AADCMQg6gIgxgSQgygRgDgPQAdggAOgdQARglAAgsQASgZAZgXQAyguAhANQAqAQAWA0QAVA2gSAxQAcANARAUQARATAAAPQAAAwhYAAQgdAAgmgFg");
	this.shape.setTransform(-7.925,17.3427);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.8,-40.1,61.699999999999996,71.9);


(lib.bluecaplefthand = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.bluecapwrist();
	this.instance.setTransform(-5.2,2.7,1,1,5.743,0,0,-47,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-1.9832,x:-5.25,y:2.75},45).to({rotation:5.743,x:-5.2,y:2.7},43).wait(2));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E48544").s().p("AirAJQhFg8AmhlQAlhhBcgkIA4BcQBXAtAxBZIAnBGQAZApAhAcQhAgpg4BmQgVAmgLAsQgLArAFAUg");
	this.shape.setTransform(-78.8779,-17.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

	// Layer_4
	this.instance_1 = new lib.CachedBmp_26();
	this.instance_1.setTransform(-83.55,-18.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

	// Layer_5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C0692A").s().p("AhCBjQgRiTAogpQAjgkBQArQgwC8hAAAQgNAAgNgHg");
	this.shape_1.setTransform(-66.3909,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.5,-46.3,202.6,102.9);


(lib.bluecaphead = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.blucapjusthead();
	this.instance.setTransform(-3.75,5.15,1,1,-14.9992,0,0,-3.8,12.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:12.6,rotation:9.9752,x:-3.85,y:5.05},14).to({regY:12.7,rotation:-14.9992,x:-3.75,y:5.15},15).wait(1));

	// Layer_10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAC89F").s().p("AgJAtQgzgZgbgWQAgggAsgLQBTgXAJgEQgCAiAIBFQAFAqgOAAQgfAAg4gcg");
	this.shape.setTransform(-2.3074,24.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(30));

	// Layer_11
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1B58B").s().p("AgvBqQhFguAIgWIA2i6ICjAXIgQCzIAHA4QADAmgJABIgSAAQg7AAhAgrg");
	this.shape_1.setTransform(-3.8918,15.6989);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.9,-37.1,56.599999999999994,69.2);


(lib.bluecapguy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.bluecaphead();
	this.instance.setTransform(-57.4,-81.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(150));

	// Layer_3
	this.instance_1 = new lib.bluecaplefthand();
	this.instance_1.setTransform(-86.55,-38.9,1,1,5.1924,0,0,-86.5,-25.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-0.8367,x:-86.65},72).to({rotation:5.1924,x:-86.55},75).wait(3));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1B58B").s().p("AjTCnID5k9QArgmAzADQA7AFARBCQAJAlgKAhQgLAggaANIkOC5g");
	this.shape.setTransform(-6.9744,-11.9648);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1B58B").s().p("AgBCFIhFiKQgKgSADgVQACgUAOgQIA1g/IBXALIgEBbIgjBhIABAvQABALgGAKIgGAKQgGAKgMAAQgLgBgCgKg");
	this.shape_1.setTransform(-21.951,12.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(150));

	// Layer_5
	this.instance_2 = new lib.CachedBmp_21();
	this.instance_2.setTransform(-92.85,-2.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(150));

	// Layer_6
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D27A3B").s().p("AgRD0QgqgJg0g5QgTgViGilIhCjsIETAiQAvgIAlAcQAKAIA3A5QAqAtApAQQA7AYBRgQIgiBkIAwCBQhJAPidApQhAAQgjAAQgLAAgIgBg");
	this.shape_2.setTransform(-62.925,-15.8655);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E48544").s().p("AkRDlIgFkIIAAgBIhCjrQgQg4AXg2QAYg1A0gbQBeguA0gcQBEgjBxgBQBugBBLAeIANAbQA5B+ACCMQABCLg4B/IBMDNQASAvgWAtQgVAtgvARIosDEg");
	this.shape_3.setTransform(-61.4564,-13.2266);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(150));

	// Layer_7
	this.instance_3 = new lib.CachedBmp_22();
	this.instance_3.setTransform(-73.4,-20,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(150));

	// Layer_8
	this.instance_4 = new lib.CachedBmp_23();
	this.instance_4.setTransform(-43.65,-67.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(150));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.7,-118.6,205.60000000000002,232.3);


(lib.afrodudehead = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.afrodudejusthead();
	this.instance.setTransform(11.45,10.7,1,1,14.9992,0,0,11.5,16.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:16.1,rotation:-12.198,x:11.5,y:10.6},29).to({regY:16.2,rotation:14.9992,x:11.45,y:10.7},30).wait(1));

	// Layer_12
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A86048").s().p("AgiCOQgagCgWgXQgVgXgGggIggjLIC+AVIBdCHQgLAsggAiQguAxhLAAIgMAAg");
	this.shape.setTransform(5.65,21.414);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-43.2,68.5,78.9);


(lib.afrodudehandfront = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.afrodudewrist();
	this.instance.setTransform(23.2,-13.55,1,1,34.7105,0,0,47.6,-15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-0.5053},71).to({rotation:34.7105},62).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A86048").s().p("AC2BiInAgpQiKgLBohjIH7gvQBJAFApAnQAxAtgvA4QgaAggnAPQgZAJgYAAQgNAAgOgDg");
	this.shape.setTransform(49.9867,-12.7179);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(134));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.1,-80.2,174.7,106.5);


(lib.smoreWithSkew = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.catagoryText = new cjs.Text("קטגוריה", "normal 400 25px 'Assistant'", "#7F4011");
	this.catagoryText.name = "catagoryText";
	this.catagoryText.textAlign = "center";
	this.catagoryText.lineHeight = 39;
	this.catagoryText.lineWidth = 136;
	this.catagoryText.parent = this;
	this.catagoryText.setTransform(-0.05,-50.15,0.9849,0.9849);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.catagoryText);
	}

	this.skewForSmore = new lib.skewForSmore();
	this.skewForSmore.name = "skewForSmore";
	this.skewForSmore.setTransform(2.65,-77.5,0.9849,0.9849,0,0,0,2.7,60.1);

	this.instance = new lib.singleSmore();
	this.instance.setTransform(-0.15,-40.65,0.9849,0.9849,0,0,0,84.6,41);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.skewForSmore},{t:this.catagoryText}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.smoreWithSkew, new cjs.Rectangle(-83.4,-195.9,166.9,195.6), null);


(lib.winMarsh = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// Isolation_Mode_copy_copy
	this.instance = new lib.winStar();
	this.instance.setTransform(50.7,26.25,0.6327,0.6327,0,0,0,-0.8,-0.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({_off:true},11).wait(13));

	// Isolation_Mode_copy
	this.instance_1 = new lib.winStar();
	this.instance_1.setTransform(8.5,45.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).to({_off:true},10).wait(13));

	// Isolation_Mode_copy_copy_copy
	this.instance_2 = new lib.winStar();
	this.instance_2.setTransform(-28.65,50.8,0.9772,0.9772,-74.7147);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({_off:true},11).wait(10));

	// Isolation_Mode_copy_copy
	this.instance_3 = new lib.winStar();
	this.instance_3.setTransform(-66.2,40.35,0.7344,0.7344,-74.7152);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).to({_off:true},10).wait(10));

	// Isolation_Mode_copy_copy_copy_copy_copy
	this.instance_4 = new lib.winStar();
	this.instance_4.setTransform(-90.1,19.4,0.9772,0.9772,-74.7147);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11).to({_off:false},0).to({_off:true},11).wait(8));

	// Isolation_Mode_copy_copy_copy_copy
	this.instance_5 = new lib.winStar();
	this.instance_5.setTransform(-104.55,-15.5,1.1905,1.1905,-74.7156,0,0,0.1,-0.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(12).to({_off:false},0).to({_off:true},10).wait(8));

	// Isolation_Mode_copy_copy_copy_copy
	this.instance_6 = new lib.winStar();
	this.instance_6.setTransform(-99.1,-52.6,0.9772,0.9772,-74.7147);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(13).to({_off:false},0).to({_off:true},11).wait(6));

	// Isolation_Mode_copy_copy_copy
	this.instance_7 = new lib.winStar();
	this.instance_7.setTransform(-83.55,-79.4,0.7344,0.7344,-74.7152);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(14).to({_off:false},0).to({_off:true},10).wait(6));

	// Layer_1
	this.instance_8 = new lib.Tween13("synched",0);
	this.instance_8.alpha = 0.1289;

	this.instance_9 = new lib.Tween14("synched",0);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true,alpha:1},3).wait(27));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:false},3).wait(1).to({x:-0.3,y:1.45},0).to({regX:0.1,scaleX:0.5306,scaleY:0.5306,rotation:-134.2881,guide:{path:[-0.3,1.6,-14.4,-0.8,-24.8,-9.5,-46.1,-27.2,-27.9,-59.8,-19.4,-75.1,-4.1,-78.7,9.7,-81.8,25.3,-75,40.4,-68.5,50.8,-55.6,61.9,-42,63,-26.9,65.6,6.4,50.9,24.3,34.3,44.6,-7.4,49.9,-28.6,52.5,-47.6,47.2,-65.4,42.3,-78.8,31,-91.8,20,-98.4,5,-105.1,-10.3,-103.9,-26.9,-102.6,-45,-95.5,-61.4,-87.6,-80,-73.7,-92.9,-58.1,-107.5,-36.9,-113.5], orient:'fixed'},startPosition:21},10).to({regX:0,scaleX:0.4188,scaleY:0.4188,rotation:-49.1927,guide:{path:[-36.9,-113.6,-12.1,-120.6,20.1,-115.9,51.5,-111.3,75.7,-84.9,86.8,-72.8,94.5,-58.4], orient:'fixed'}},5).to({regX:-0.2,regY:0.2,scaleX:0.2528,scaleY:0.2528,rotation:0,guide:{path:[94.5,-58.3,102.1,-44,106.4,-27.5,115.1,5.8,106,31.6,96,60,68,68,19.1,82,-0.9,87.2,-10,89.6,-11,89.6], orient:'fixed'},startPosition:0},4).to({x:-0.35,y:385.8,alpha:0,startPosition:2},6).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-228.6,-221.1,414.29999999999995,642.7);


(lib.loserMarsh = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_22 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(22).call(this.frame_22).wait(1));

	// Layer_1
	this.instance = new lib.Tween3("synched",0);
	this.instance.setTransform(2,13.05);
	this.instance.alpha = 0;

	this.instance_1 = new lib.Tween4("synched",0);
	this.instance_1.setTransform(-2.5,-1.9,0.3929,0.3929,-1.0014,0,0,0.5,0.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:0.05,y:-6,alpha:1},3).to({_off:true,regX:0.5,regY:0.5,scaleX:0.3929,scaleY:0.3929,rotation:-1.0014,x:-2.5,y:-1.9},14).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},14).to({regX:0.8,regY:0,scaleX:0.1305,scaleY:0.1305,rotation:25.96,x:11.2,y:40.5,alpha:0},3).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89,-97.4,173.2,243.4);


(lib.pauseBG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bonfireMC();
	this.instance.setTransform(926.7,593.95,1,1,0,0,0,399.9,480.8);

	this.instance_1 = new lib.gameChoiceBGground();
	this.instance_1.setTransform(883.9,887,1,1,0,0,0,883.9,198.1);

	this.instance_2 = new lib.gameChoiceBGtrees();
	this.instance_2.setTransform(928.4,494.9,1,1,0,0,0,768.2,494.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pauseBG, new cjs.Rectangle(0,0,1767.7,1085.2), null);


(lib.gameChoiceScreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.an_CSS({'id': '', 'href':'assets/myCss.css'});

	this.instance.setTransform(98.05,-182.95,1,1,0,0,0,50,11);

	this.startGameBTN = new lib.startGameBTN();
	this.startGameBTN.name = "startGameBTN";
	this.startGameBTN.setTransform(665.15,225.5,0.6572,0.6572,0,0,0,0,-0.1);

	this.myCss = new lib.an_CSS({'id': 'myCss', 'href':'assets/myCss.css'});

	this.myCss.name = "myCss";
	this.myCss.setTransform(843.85,183.35,1,1,0,0,0,50,11);

	this.mycb = new lib.an_ComboBox({'id': 'mycb', 'label':'בחרו משחק', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 2, אובייקטים שמימיים, 0, מחלקות בעלי החיים, 1', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.mycb.name = "mycb";
	this.mycb.setTransform(656.65,135.15,2.1,1.9091,0,0,0,49.9,10.9);

	this.instance_1 = new lib.gameChoiceWindow();
	this.instance_1.setTransform(656.75,182.95,1,1,0,0,0,262.6,106.7);

	this.instance_2 = new lib.logo();
	this.instance_2.setTransform(1108.15,49.75,1,1,0,0,0,132.8,25.9);

	this.instance_3 = new lib.bonfireMC();
	this.instance_3.setTransform(650.65,466.8,0.672,0.672,0,0,0,399.9,480.9);

	this.instance_4 = new lib.gameChoiceBGground();
	this.instance_4.setTransform(607.85,730.95,1,1,0,0,0,883.9,198.1);

	this.instance_5 = new lib.gameChoiceBGtrees();
	this.instance_5.setTransform(652.35,406.05,1,1,0,0,0,768.2,494.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.mycb},{t:this.myCss},{t:this.startGameBTN},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.gameChoiceScreen, new cjs.Rectangle(-276,-194.4,1767.7,1123.5), null);


(lib.guitarguyupperbody = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// guitarguyrighthand
	this.instance = new lib.guitarguyrighthand();
	this.instance.setTransform(29,44.95,1,1,-11.4922,0,0,-14.5,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:3.5063},58).to({rotation:-11.4922},61).wait(1));

	// guitarguylefthand
	this.instance_1 = new lib.guitarguylefthand();
	this.instance_1.setTransform(-91.2,20.05,1,1,-17.4642,0,0,-28.1,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-28.2,regY:-9.4,rotation:6.7776,x:-91.25,y:19.95},14).to({regX:-28.1,regY:-9.5,rotation:-17.4642,x:-91.2,y:20.05},15).to({regX:-28.2,regY:-9.4,rotation:6.7776,x:-91.25,y:19.95},15).to({regX:-28.1,regY:-9.5,rotation:-17.4642,x:-91.2,y:20.05},15).to({regX:-28.2,regY:-9.4,rotation:6.7776,x:-91.25,y:19.95},14).to({regY:-9.3,rotation:-14.2307,y:20.2},13).to({regX:-28.1,regY:-9.5,rotation:-17.4642,x:-91.2,y:20.05},2).to({regX:-28.2,regY:-9.4,rotation:6.7776,x:-91.25,y:19.95},15).to({regX:-28.1,regY:-9.5,rotation:-17.4642,x:-91.2,y:20.05},16).wait(1));

	// Layer_10
	this.instance_2 = new lib.CachedBmp_28();
	this.instance_2.setTransform(-83.55,0.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(120));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRCcQgEgEAAgFQAVhYAAhDQAChOgXg8QAAgFAEgEQAEgEAFAAQAFAAADAEQADAEAAAFQAVA9gCBQQgCA+gRBaQAAAGgDADQgDAEgFAAQgFAAgEgEg");
	this.shape.setTransform(-42.7161,-3.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(120));

	// Layer_5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8C4E61").s().p("AgYAqQhngPgGgyIBzgXQAAACAqAQQA3AVA3AtQgoAJgtAAQgkAAglgFg");
	this.shape_1.setTransform(-45.825,-21.6636);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(120));

	// Layer_6
	this.instance_3 = new lib.guitarguyhead();
	this.instance_3.setTransform(-18.6,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(120));

	// Layer_7
	this.instance_4 = new lib.CachedBmp_29();
	this.instance_4.setTransform(-59.2,-39.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120));

	// Layer_8
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AANCAQAHhQgJg5QgKhEgfgvQgFgKALgCQAFAAACACIAFAIQAcAyALBEQAIA2gDBPQAAAJgLADIgDAAQgHAAACgJg");
	this.shape_2.setTransform(-3.7231,-8.4706);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(120));

	// Layer_9
	this.instance_5 = new lib.CachedBmp_30();
	this.instance_5.setTransform(-98.95,-29.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(120));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.1,-88.1,201.6,168.2);


(lib.guitarguy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.instance = new lib.guitarguyupperbody();
	this.instance.setTransform(-15.95,46.95,1,1,-3.4379,0,0,-16,65.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:5.5287,x:-16.05,y:47},58).to({rotation:-3.4379,x:-15.95,y:46.95},61).wait(1));

	// Layer_12
	this.instance_1 = new lib.CachedBmp_20();
	this.instance_1.setTransform(-87.7,36.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(120));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.4,-107,209.7,205.9);


(lib.afrodudelefthand = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.afrodudehandfront();
	this.instance.setTransform(56.7,4.1,1,1,-17.9699,0,0,75.5,-12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-12.7,rotation:12.0291,x:56.75,y:4.3},62).to({regY:-12.8,rotation:-17.9699,x:56.7,y:4.1},71).wait(1));

	// Layer_3
	this.instance_1 = new lib.CachedBmp_5();
	this.instance_1.setTransform(49.85,-39.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(134));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.8,-90.1,211.2,149.5);


(lib.afrodude = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.afrodudehead();
	this.instance.setTransform(52.25,-82.65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90));

	// Layer_4
	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(-36.7,2.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

	// Layer_5
	this.instance_2 = new lib.CachedBmp_2();
	this.instance_2.setTransform(30.45,-65.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90));

	// Layer_2
	this.instance_3 = new lib.afrodudelefthand();
	this.instance_3.setTransform(40.85,-50.55,1,1,5.9909,0,0,103.6,-27.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:103.5,regY:-27.7,rotation:0.7178,x:40.8,y:-50.65},33).to({regY:-27.6,rotation:-0.7195,x:40.75,y:-50.55},9).to({regX:103.6,rotation:5.9909,x:40.85},47).wait(1));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A86048").s().p("AAaB+QghgwgigEIgdgCQgRgBgOgHIhKijIBigjIAyB0IBCACQASABARAHQARAIAKALIBEBPQAaAfhGAKQgaAEgVAAQggAAgUgJg");
	this.shape.setTransform(148.7039,51.813);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A86048").s().p("AiEikQhAhTgYgWQgYgXAYgYQAWgVAwgKQAygLApAKQAwALAOAiIBDCUICjGRIg+Bsg");
	this.shape_1.setTransform(119.7812,19.1494);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(90));

	// Layer_8
	this.instance_4 = new lib.CachedBmp_3();
	this.instance_4.setTransform(-83.85,-15.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-173.6,-125.8,339.9,244.1);


(lib.pauseScreenCard = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgryAgTQiPAAhlijQhlijAAjnMAAAgvLQAAjmBlikQBlijCPAAMBXmAAAQCOAABmCjQBkCkAADmMAAAAvLQAADnhkCjQhmCjiOAAg");
	mask.setTransform(-2,-14.275);

	// Layer_1
	this.pauseBTN = new lib.pauseBTN();
	this.pauseBTN.name = "pauseBTN";
	this.pauseBTN.setTransform(-1.8,-67.15);

	this.text = new cjs.Text("...מחכים שתחזרו אלינו", "normal 700 38px 'Assistant'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 51;
	this.text.lineWidth = 416;
	this.text.parent = this;
	this.text.setTransform(-1.8,-164.2);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.instance = new lib.pauseBG();
	this.instance.setTransform(-19.75,4.5,0.4801,0.4801,0,0,0,884,542.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#25224C","#383E87"],[0,1],-314.5,0,314.6,0).s().p("EgrwAgTQiPAAhlijQhlijAAjoMAAAgvKQAAjmBlikQBlijCPAAMBXhAAAQCPAABlCjQBlCkAADmMAAAAvKQAADohlCjQhlCjiPAAg");
	this.shape.setTransform(-1.775,-14.325);

	var maskedShapeInstanceList = [this.pauseBTN,this.text,this.instance,this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance},{t:this.text},{t:this.pauseBTN}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pauseScreenCard, new cjs.Rectangle(-316.8,-220.9,629.6,413.3), null);


(lib.pauseScreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// pauseScreenCard
	this.pauseScreenCard = new lib.pauseScreenCard();
	this.pauseScreenCard.name = "pauseScreenCard";
	this.pauseScreenCard.setTransform(1072.65,642.9,1,1,0,0,0,424.3,260.4);

	this.timeline.addTween(cjs.Tween.get(this.pauseScreenCard).wait(1));

	// Layer_4
	this.instance = new lib.gameChoiceWindowBG();
	this.instance.setTransform(646.4,368.3,1.199,1.9379,0,0,0,262.6,106.7);
	this.instance.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(37,35,79,0.749)").s().p("EhlRA51MAAAhzpMDKjAAAMAAABzpg");
	this.shape.setTransform(648.175,370.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pauseScreen, new cjs.Rectangle(0,0,1296.4,740.2), null);


(lib.animationfrontscene = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// guyfromback
	this.instance = new lib.guyfromback();
	this.instance.setTransform(1251.3,562.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_14
	this.instance_1 = new lib.bonfireMC();
	this.instance_1.setTransform(1150.45,480.15,0.4561,0.4561,0,0,0,400.2,385.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// guitarguy
	this.instance_2 = new lib.guitarguy();
	this.instance_2.setTransform(863.8,548.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// pinkgirl
	this.instance_3 = new lib.CachedBmp_8();
	this.instance_3.setTransform(806.45,384.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// purplegirl
	this.instance_4 = new lib.CachedBmp_9();
	this.instance_4.setTransform(1382.45,383.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// bluecapguy
	this.instance_5 = new lib.bluecapguy();
	this.instance_5.setTransform(997.45,480.35);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// afrodude
	this.instance_6 = new lib.afrodude();
	this.instance_6.setTransform(1342.85,479.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// logs
	this.instance_7 = new lib.CachedBmp_10();
	this.instance_7.setTransform(663.3,503.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// ground_shadows
	this.instance_8 = new lib.CachedBmp_11();
	this.instance_8.setTransform(663.8,540.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// right_tent
	this.instance_9 = new lib.CachedBmp_12();
	this.instance_9.setTransform(1444.6,304.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// left_tent
	this.instance_10 = new lib.CachedBmp_13();
	this.instance_10.setTransform(327.8,328.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// ground
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#28316E","#1D1938"],[0,1],-1445.3,0,1445.2,0).s().p("EjLBAVyQvXg7lAjQQkBinCnkQQBnimFVkcQCliKAtgrQBZhTAAgnQAAh7KOh7QHPhXPYhzQUTiYCigWQKjhdAbhHQAdhNgIhbQgPhigEgqQgGhIAfgqQAng2BygmQCfg0C4AhQBoATDxBVQDxBVCbAcQD2AtD6gkQEsgrFGAFQDZAEKLAeQBAACLvAtQJjAlCHgHQDFgLDYgZQB+gODsgeQG4g2F5AAQFDAADbALQFoATEXA0QDMAnEEgdQCdgREtg/QEmg9CFgOQDfgWCXAwQEDBSJ9A6QFQAfHCAcQIWArCUAZQBKAMAUANQARAKgNAQQgVAVgKAOQgSAXAIAYQAXBDDzBZQCzBCJ3A4QHWAqQ/BBQbfBpGUAaQWJBcS6BnUA1VAEiAOhAEwQGOCChMCBQhEBym5BsQr3C74LB5Qp5AyovAVQomAUkLgPQj+gO3WgcQ5lgd6QgRUhJagAugI+ABiQleA8k6AAQjrAAkiglQlAgviogTQkhggkFAIQh7AEizgIImDgXQp7glrEAAQjhAAzTAsMgoKABeUgwZABxgLKAAAQh3AAg1gEg");
	this.shape.setTransform(1445.2705,589.2552);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.animationfrontscene, new cjs.Rectangle(0,304.2,2890.5,424.8), null);


(lib.animationScene = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_6
	this.instance = new lib.an_CSS({'id': '', 'href':'assets/myCss.css'});

	this.instance.setTransform(-1396.3,-424.05,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// Layer_5
	this.text = new cjs.Text("פה תהיה אנימציית פתיחה", "normal 800 100px 'Assistant'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 138;
	this.text.lineWidth = 786;
	this.text.parent = this;
	this.text.setTransform(-3,-252.5);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.fireonyou = new lib.fireonyoutext();
	this.fireonyou.name = "fireonyou";
	this.fireonyou.setTransform(-19.4,-101.7,1,1,0,0,0,372.1,86.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.fireonyou}]},1).wait(1));

	// Layer_2
	this.instance_1 = new lib.animationfrontscene();
	this.instance_1.setTransform(288,84.25,1,1,0,0,0,1445.2,394.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

	// Layer_4
	this.instance_2 = new lib.gameBG();
	this.instance_2.setTransform(326.7,-392.9,2.1398,2.0712,0,0,0,693.5,382.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1446.8,-1185.7,3331,1604.6);


// stage content:
(lib.marshmellowmedordered = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var self = this;
		stage.enableMouseOver(24);
		
		var stageW = 1280;
		var stageH = 720;
		
		//משתנים של מסכים
		var gameChoiceScreen; //מסך בחירת המשחק
		var animationScene; //מסך האנימציות
		var gameBG; //הרקע למשחק עצמו
		var endScreen; //מסך הסיום והמשוב
		
		//מבנה המשחק
		var gameArray; //מערך תוכן המשחק
		var categoryCountArray = [0]; //מערך ספירת כמה תשובות שייכות לכל קטגוריה - כמספר הקטגוריות
		var categoryCountArrayWin = [0]; //מערך ספירת כמה תשובות הצליח הלומד בכל קטגוריה - כמספר הקטגוריות
		var answersCountArray = [0]; //מערך כמה ניסיונות היו עד שהלומד הצליח את השאלה - כמספר השאלות
		var currentQ; //מספר השאלה הנוכחית שטעונה
		var questionNum; //המספר המקורי של השאלה במערך ההתחלתי
		var rightAnswersCount; //מספר התשובות הנכונות הכללי
		var gameChoice = 0; //בחירת המשחק - 0 חלל או 1 חיות
		var progressBar; //מד ההתקדמות
		var singleMarshBar; //מרשמלו בודד במד ההתקדמות
		
		//תנועת מרשמלו
		var newMarshWhenAnimationFinish; //ספירה של זמן לסיום אנימציית המשוב על הצלחה או אי הצלחה במשחק
		var marshInterval; //אינטרוול התנועה של המרשמלו מצד לצד
		var moveTo = ""; //כיוון התנועה של המרשמלו
		var currentSpeed = 1; //מקדם מהירות התנועה של המרשמלו
		
		//תנועת שיפוד
		var spike; //אינסטנס של שיפוד
		var spikeInterval; //אינטרוול התנועה של השיפוד למעלה
		var currentSpike; //מספר הקטגוריה שהשיפוד שייך אליה - הסמור ששלח אותו
		
		//נתונים למסך הסיום
		var endScreenWhenAnimationFinish; //ספירה של זמן לסיום אנימציית הסיום לפני עליית מסך הסיום
		var timeInterval; //טיימר שסופר את זמן המשחק - מוסתר מהלומד עד המשוב בסוף
		var timeVar; //המשתנה שסופר את זמן המשחק
		var score; //משתנה הציון
		var errorCount; //ספירת השגיאות
		
		//סאונדים
		var shootSound; //סאונד יריית שיפוד
		var fireSound; //סאונד מדורה
		var guitarSound; //נעימת גיטרה אקוסטית
		var loseSound; //סאונד משוב לאי הצלחה
		var winSound; //סאונד משוב להצלחה
		var finalSound; //סאונד להגעה אל מסך הסיום
		var endscreenMusic; //מוזיקת מסך הסיום
		
		//כפתור דילוג - לא לשכוח למחוק לפני שמסיימים!
		var state;
		var skiptonext;
		skiptonext = new lib.skiptonext();
		skiptonext.x = 200;
		skiptonext.y = 100;
		skiptonext.name = "skiptonext";
		stage.addChild(skiptonext); // למחוק ממקומות בקוד את זה
		skiptonext.addEventListener("click", skipToNext);
		
		init_Sound(); //הפעלה של כל הסאונדים
		startHere(); //התנעת המשחק
		
		function skipToNext() {
			console.log("skip");
			if (state == "gameChoice") {
				loadStartAnimation();
			} else if (state == "startAnimationScene") {
				loadNewGame();
			} else if (state == "game") {
				finishGame();
			} else if (state == "endAnimationScene") {
				loadEndScreen();
			}
		}
		
		function init_Sound() //הגדרת הסאונדים של המשחק
		{
			createjs.Sound.registerSound("sounds/shootSound.mp3", "shoot");
			createjs.Sound.registerSound("sounds/fireSound.mp3", "fire");
			createjs.Sound.registerSound("sounds/guitarSound.mp3", "guitar");
			createjs.Sound.registerSound("sounds/loseSound.mp3", "lose");
			createjs.Sound.registerSound("sounds/winSound.mp3", "win");
			createjs.Sound.registerSound("sounds/finalSound.mp3", "final");
			createjs.Sound.registerSound("sounds/endscreenMusic.mp3", "endscreenMusic");
		}
		
		function startHere() //התנעת המשחק
		{
			//למחוק
			state = "gameChoice";
			console.log(state);
		
			endscreenMusic = createjs.Sound.stop("endscreenMusic"); //אם מתחילים משחק חדש - הפסקת מוזיקת מסך הסיום
			stage.removeAllChildren(); //הסרת כל מה שיש על הבמה
		
			//הוספת מסך בחירת המשחק לבמה
			gameChoiceScreen = new lib.gameChoiceScreen();
			gameChoiceScreen.x = 0;
			gameChoiceScreen.y = 0;
			gameChoiceScreen.name = "gameChoiceScreen";
			stage.addChild(gameChoiceScreen);
			stage.addChild(skiptonext); //למחוק
		
			//מאזין לשינוי ערכים בקומבו
			$("#dom_overlay_container").on("change", "#mycb", gameChoiceByCombo);
		}
		
		function gameChoiceByCombo(evt) //בעת שינוי ערך בקומבו
		{
			console.log(gameChoice); //למחוק	
		
			gameChoice = evt.currentTarget.value; //שמירת הערך שנבחר בקומבו
		
			if (gameChoice == "") //אם לא נבחר שום ערך של משחק
			{
				//ניטרול כפתור בחירה
				gameChoiceScreen.startGameBTN.cursor = "auto";
				gameChoiceScreen.startGameBTN.gotoAndStop(0);
				gameChoiceScreen.startGameBTN.removeEventListener("click", loadStartAnimation);
			} else {
				//בכל בחירה אחרת - כלומר בחר נושא תקין, נאפשר לחיצה והפנייה לפונקציית תחילת המשחק
				gameChoiceScreen.startGameBTN.cursor = "pointer";
				gameChoiceScreen.startGameBTN.gotoAndStop(1);
				gameChoiceScreen.startGameBTN.addEventListener("click", loadStartAnimation);
			}
		}
		
		function loadStartAnimation() //טעינת אנימציית הפתיחה של המשחק
		{
			//למחוק	
			state = "startAnimationScene";
			console.log(state);
		
			stage.removeAllChildren(); //ניקוי הבמה
		
			//הוספת מסך האנימציה לבמה
			animationScene = new lib.animationScene();
			animationScene.x = stageW / 2;
			animationScene.y = stageH / 2;
			animationScene.name = "gameChoiceScreen";
			stage.addChild(animationScene);
			stage.addChild(skiptonext); //למחוק
		
			//הוספת כפתור הדילוג על האנימציה
			var BTNskip = new lib.BTNbg();
			BTNskip.x = stageW / 2; //לשנות מיקומים בהמשך
			BTNskip.y = stageH / 2; //לשנות מיקומים בהמשך
			BTNskip.name = "BTNskip";
			stage.addChild(BTNskip);
			BTNskip.scaleX = 1.5;
			var skip = new lib.skip();
			skip.x = BTNskip.x;
			skip.y = BTNskip.y + 5;
			skip.name = "skip";
			stage.addChild(skip);
			BTNskip.addEventListener("click", loadNewGame);
			BTNskip.addEventListener("mouseover", hoverOnBTNIn);
			BTNskip.addEventListener("mouseout", hoverOnBTNOut);
		}
		
		function loadNewGame() //טעינת משחק חדש
		{
			//למחוק
			state = "game";
			console.log(state);
		
			endscreenMusic = createjs.Sound.stop("endscreenMusic"); //עצירת סאונד של אנימציית הפתיחה
			guitarSound = createjs.Sound.play("guitar"); //הפעלת מוזיקת הרקע של המשחק
		
			stage.removeAllChildren(); //ניקוי הבמה
		
			//הטענת הרקע של המשחק
			gameBG = new lib.gameBG();
			gameBG.x = -42.05;
			gameBG.y = -24;
			gameBG.name = "gameBG";
			stage.addChild(gameBG);
			stage.addChild(skiptonext); //למחוק
		
			//הפעלת הטיימר - למחוק את ההצגה שלו לפני שמגישים
			timeInterval = setInterval(timerOn, 1000);
			timertxt = new lib.timertxt();
			timertxt.x = 24;
			timertxt.y = 29;
			timertxt.name = "timertxt";
			stage.addChild(timertxt);
			timertxt.timertxt.text = timeVar;
		
			//הפעלת כל הפונקציות של עליית המשחק
			loadGameArrays(); //הטענת מערכי המשחק בתוכן
			makeMarshBar(); //יצירת מד ההתקדמות
			makeSmores(); //יצירת הסמורס של הקטגוריות
			loadGameTitle(); //הטענת כותרת המשחק
			loadButtons(); //יצירת כפתורי השליטה בפינה
			newMarsh(); //יצירת מרשמלו שאלה חדש
		}
		
		function timerOn() //פונקציית אינטרוול לספירת הטיימר - סופרת כל שנייה
		{
			timeVar++;
		
			//למחוק
			console.log("sec");
			timertxt.timertxt.text = timeVar;
		}
		
		function loadGameArrays() //יצירת מערכי המשחק והטענתם בתוכן
		{
			loadGame(gameChoice); //קריאה לפונקצייה שתיקח את המידע על המשחקים ותכניס אותו למערך המשחק לפי המשחק שנבחר
		
			//איפוס המשתנים של נתוני המשחק
			rightAnswersCount = 0; //כמה תשובות נכונות סהכ
			errorCount = 0; //כמה טעויות סהכ
			score = 0; //ציון
			timeVar = 0; //זמן מצטבר
		
			//יצירת מערך ספירת הניסיונות של המשחק - תוכן ריק
			answersCountArray = [0]; //איפוס המערך
			for (var i = 1; i <= gameArray[2].length - 1; i++) //לולאה שרצה כמספר השאלות הכולל של המשחק
			{
				answersCountArray[answersCountArray.length] = 0; //ישמור בהמשך כמה ניסיונות סהכ עד שהצליח
			}
		
			//יצירת מערכי נתוני הקטגוריות של המשחק - תוכן ריק
			categoryCountArray = [0]; //איפוס המערך
			categoryCountArrayWin = [0]; //איפוס המערך
			for (var i = 1; i <= gameArray[1].length - 1; i++) //לולאה שרצה כמספר הקטגוריות של המשחק
			{
				categoryCountArray[categoryCountArray.length] = 0; //ישמור בהמשך כמה תשובות שייכות לכל קטגוריה
				categoryCountArrayWin[categoryCountArrayWin.length] = 0; //ישמור בהמשך כמה תשובות נכונות נענו לכל קטגוריה עד כה
			}
		
			//הטענת תוכן במערך של כמה תשובות שייכות לכל קטגוריה
			for (var i = 0; i <= gameArray[2].length - 1; i++) //לולאה שרצה כמספר השאלות הכולל
			{
				for (var n = 0; n <= gameArray[1].length - 1; n++) // לולאה שרצה כמספר הקטגוריות
				{
					if (gameArray[2][i][1] == n) //האם הקטגוריה שמשויכת לשאלה הנוכחית היא הקטגוריה הנוכחית
					{
						categoryCountArray[n] += 1; //כמה תשובות שייכות לכל קטגוריה - מילוי
					}
				}
			}
		
			//למחוק
			console.log(categoryCountArray);
			console.log(categoryCountArrayWin);
			console.log(answersCountArray);
			console.log(gameArray);
		}
		
		function loadGame(num) //הטענת המידע של המשחק לתוך מערך המשחק הראשי
		{
			if (num == 0) //אם נבחר משחק החלל
			{
				gameArray = [
					["אובייקטים שמימיים"], //כותרת המשחק
					["כוכבי לכת", "ערפיליות", "צבירי כוכבים", "גלקסיות", "כוכבי שבת"], //שמות הקטגוריות
					[
						[lib.g0_q00, 4, 0],
						[lib.g0_q01, 3, 1],
						[lib.g0_q02, 1, 2],
						[lib.g0_q03, 2, 3],
						[lib.g0_q04, 1, 4],
						[lib.g0_q05, 0, 5],
						[lib.g0_q06, 0, 6],
						[lib.g0_q07, 3, 7],
						[lib.g0_q08, 0, 8],
						[lib.g0_q09, 1, 9],
						[lib.g0_q10, 2, 10],
						[lib.g0_q11, 2, 11],
						[lib.g0_q12, 1, 12],
						[lib.g0_q13, 0, 13],
						[lib.g0_q14, 3, 14],
						[lib.g0_q15, 4, 15]
					] //תא של כל השאלות
				];
			} else if (num == 1) //אם נבחר משחק החיות
			{
				gameArray = [
					["מחלקות בעלי החיים"], //כותרת המשחק
					["חרקים", "עופות", "יונקים", "זוחלים"], //שמות הקטגוריות
					[
						[lib.g1_q00, 0, 0],
						[lib.g1_q01, 3, 1],
						[lib.g1_q02, 1, 2],
						[lib.g1_q03, 1, 3],
						[lib.g1_q04, 2, 4],
						[lib.g1_q05, 0, 5],
						[lib.g1_q06, 2, 6],
						[lib.g1_q07, 3, 7],
						[lib.g1_q08, 0, 8],
						[lib.g1_q09, 3, 9]
					] //תא של כל השאלות
				];
			}
		}
		
		function makeMarshBar() //הוספת בר ההתקדמות
		{
			//הוספת הרקע והשיפוד הריק לבמה
			progressBar = new lib.progressBar();
			progressBar.x = stageW - 40;
			progressBar.y = stageH / 2;
			stage.addChild(progressBar);
		
			//הוספת המרשמלואים על המד	
			for (var i = 0; i <= gameArray[2].length - 1; i++) {
		
				singleMarshBar = new lib.singleMarshForBar();
				singleMarshBar.x = 0;
				singleMarshBar.y = -singleMarshBar.nominalBounds.height / 2 - ((progressBar.progressBarSpike.nominalBounds.height - singleMarshBar.nominalBounds.height) / (gameArray[2].length) * i);
				singleMarshBar.name = "singleMarshBar" + (i + 1);
				progressBar.progressBarSpike.addChild(singleMarshBar);
				singleMarshBar.alpha = 0.2;
				if (i % 2 == 0) //צביעה של כל מרשמלו זוגי בצבע ורוד
				{
					singleMarshBar.SingleMarshBarColor.shape.graphics._fill.style = "rgb(250,215,216)";
				}
			}
		}
		
		function makeSmores() //יצירת הקטגוריות על המסך בתור סמורס - בשימוש גם ביצירת משחק חדש וגם בטעינת המשוב המסכם
		{
			//לולאה ליצירת כל הקטגוריות
			for (var i = 0; i <= gameArray[1].length - 1; i++) {
				//הוספת כל אינסטנס של קטגוריה לבמה
				var smore = new lib.smoreWithSkew();
				smore.catagoryText.text = gameArray[1][i];
				smore.name = "smore" + i;
				stage.addChild(smore);
		
				var totalWidth; //לצורך חישוב הריווח האוטומטי
				var mcNum = gameArray[1].length; //לצורך חישוב הריווח האוטומטי
		
				//קטע לבדיקה האם מדובר בטעינת משחק חדש או בטעינת מסך המשוב המסכם
		
				if (state == "game") //מקרה של טעינת משחק חדש
				{
					smore.addEventListener("click", clickOnSmore);
					smore.addEventListener("mouseover", shade);
					smore.addEventListener("mouseout", Outshade);
					smore.cursor = "pointer";
					totalWidth = progressBar.x - progressBar.nominalBounds.width / 2;
				} else //מקרה של טעינת משוב מסכם - אין צורך באינטראקציות אז הליסנרים מכובים
				{
					smore.removeEventListener("click", clickOnSmore);
					smore.removeEventListener("mouseover", shade);
					smore.removeEventListener("mouseout", Outshade);
					smore.cursor = "auto";
					totalWidth = stageW;
				}
				smore.x = (totalWidth / mcNum * i) + totalWidth / (mcNum * 2);
				smore.y = stageH;
			}
		}
		
		function loadGameTitle() //הוספת שם המשחק וההנחיות
		{
			var gameTitle = new lib.titleBG();
			gameTitle.x = stageW / 2;
			gameTitle.y = 15;
			stage.addChild(gameTitle);
			gameTitle.gameName.text = gameArray[0];
		}
		
		function loadButtons() //הוספת כפתורי השליטה
		{
			createPauseBTN();
			createMuteBTN();
			createSpeedBTN();
		}
		
		function createMuteBTN() //כפתור ההשתקה
		{
			var BTNmute = new lib.BTNbg();
			BTNmute.x = stageW - 40;
			BTNmute.y = 40;
			BTNmute.name = "BTNmute";
			stage.addChild(BTNmute);
			var mute = new lib.mute();
			mute.x = BTNmute.x;
			mute.y = BTNmute.y;
			mute.name = "mute";
			stage.addChild(mute);
		
			if (createjs.Sound.muted == true) {
				mute.gotoAndStop(2);
			}
		
			BTNmute.addEventListener("click", muteGame);
			BTNmute.addEventListener("mouseover", hoverOnBTNIn);
			BTNmute.addEventListener("mouseout", hoverOnBTNOut);
		}
		
		function createPauseBTN() //כפתור ההשהייה
		{
			var BTNpause = new lib.BTNbg();
			BTNpause.x = stageW - 110;
			BTNpause.y = 40;
			BTNpause.name = "BTNpause";
			stage.addChild(BTNpause);
			var pause = new lib.pause();
			pause.x = BTNpause.x;
			pause.y = BTNpause.y;
			pause.name = "pause";
			stage.addChild(pause);
			BTNpause.addEventListener("click", pauseGame);
			BTNpause.addEventListener("mouseover", hoverOnBTNIn);
			BTNpause.addEventListener("mouseout", hoverOnBTNOut);
		}
		
		function createSpeedBTN() //כפתור המהירות
		{
			var BTNspeed = new lib.BTNbg();
			BTNspeed.x = stageW - 180;
			BTNspeed.y = 40;
			BTNspeed.name = "BTNspeed";
			stage.addChild(BTNspeed);
			var speed = new lib.speed();
			speed.x = BTNspeed.x;
			speed.y = BTNspeed.y + 5;
			speed.name = "speed";
			stage.addChild(speed);
		
			if (currentSpeed == 1) {
				speed.gotoAndStop(0);
			} else if (currentSpeed == 0.5) {
				speed.gotoAndStop(2);
			} else if (currentSpeed == 2) {
				speed.gotoAndStop(6);
			} else if (currentSpeed == 1.5) {
				speed.gotoAndStop(4);
			}
		
			BTNspeed.addEventListener("click", changeGameSpeed);
			BTNspeed.addEventListener("mouseover", hoverOnBTNIn);
			BTNspeed.addEventListener("mouseout", hoverOnBTNOut);
		}
		
		function pauseGame() //השהיית משחק
		{
			guitarSound = createjs.Sound.stop("guitar"); //עצירת המוזיקה
		
			//עצירת האינטרוולים והסרת מרשמלו השאלה הנוכחית
			clearInterval(timeInterval);
			clearInterval(marshInterval);
			clearTimeout(newMarshWhenAnimationFinish);
			stage.removeChild(stage.getChildByName("marsh"));
		
			//ביטול כל הליסנרים	
			stage.getChildByName("BTNspeed").removeEventListener("click", changeGameSpeed);
			stage.getChildByName("BTNspeed").removeEventListener("mouseover", hoverOnBTNIn);
			stage.getChildByName("BTNspeed").removeEventListener("mouseout", hoverOnBTNOut);
			stage.getChildByName("BTNspeed").cursor = "auto";
			stage.getChildByName("BTNpause").removeEventListener("click", pauseGame);
			stage.getChildByName("BTNpause").removeEventListener("mouseover", hoverOnBTNIn);
			stage.getChildByName("BTNpause").removeEventListener("mouseout", hoverOnBTNOut);
			stage.getChildByName("BTNpause").cursor = "auto";
			stage.getChildByName("BTNmute").removeEventListener("click", muteGame);
			stage.getChildByName("BTNmute").removeEventListener("mouseover", hoverOnBTNIn);
			stage.getChildByName("BTNmute").removeEventListener("mouseout", hoverOnBTNOut);
			stage.getChildByName("BTNmute").cursor = "auto";
			for (var i = 0; i <= gameArray[1].length - 1; i++) {
				stage.getChildByName("smore" + i).removeEventListener("click", clickOnSmore);
				stage.getChildByName("smore" + i).removeEventListener("mouseover", shade);
				stage.getChildByName("smore" + i).removeEventListener("mouseout", Outshade);
				stage.getChildByName("smore" + i).cursor = "auto";
			}
			stage.getChildByName("BTNpause").gotoAndStop(0);
			stage.getChildByName("pause").gotoAndStop(2);
		
			//הצגת מסך ההשהייה
			var pauseScreen = new lib.pauseScreen();
			pauseScreen.x = 0;
			pauseScreen.y = 0;
			pauseScreen.name = "pauseScreen";
			stage.addChild(pauseScreen);
			pauseScreen.pauseScreenCard.pauseBTN.visible = false;
		
			//הפעלת כפתור ההפעלה מחדש
			var BTNresume = new lib.BTNbg();
			BTNresume.x = pauseScreen.pauseScreenCard.pauseBTN.x;
			BTNresume.y = pauseScreen.pauseScreenCard.pauseBTN.y;
			BTNresume.name = "BTNresume";
			pauseScreen.pauseScreenCard.addChild(BTNresume);
			var resume = new lib.pause();
			resume.x = BTNresume.x;
			resume.y = BTNresume.y;
			resume.name = "resume";
			pauseScreen.pauseScreenCard.addChild(resume);
			resume.gotoAndStop(2);
			BTNresume.addEventListener("click", resumeGame);
			BTNresume.addEventListener("mouseover", hoverOnBTNIn);
			BTNresume.addEventListener("mouseout", hoverOnBTNOut);
		}
		
		function resumeGame() //הפעלת המשחק מחדש
		{
			guitarSound = createjs.Sound.play("guitar"); //הפעלת המוזיקה מחדש
		
			//הסרת מסך ההשהייה
			stage.removeChild(stage.getChildByName("pauseScreen"));
			stage.removeChild(stage.getChildByName("BTNresume"));
			stage.removeChild(stage.getChildByName("resume"));
		
			timeInterval = setInterval(timerOn, 1000); //הפעלה מחדש של הטיימר
			newMarsh(); //טעינת שאלה חדשה
		
			//הפעלת הליסנרים מחדש
			stage.getChildByName("BTNspeed").addEventListener("click", changeGameSpeed);
			stage.getChildByName("BTNspeed").addEventListener("mouseover", hoverOnBTNIn);
			stage.getChildByName("BTNspeed").addEventListener("mouseout", hoverOnBTNOut);
			stage.getChildByName("BTNspeed").cursor = "pointer";
			stage.getChildByName("BTNpause").addEventListener("click", pauseGame);
			stage.getChildByName("BTNpause").addEventListener("mouseover", hoverOnBTNIn);
			stage.getChildByName("BTNpause").addEventListener("mouseout", hoverOnBTNOut);
			stage.getChildByName("BTNpause").cursor = "pointer";
			stage.getChildByName("BTNmute").addEventListener("click", muteGame);
			stage.getChildByName("BTNmute").addEventListener("mouseover", hoverOnBTNIn);
			stage.getChildByName("BTNmute").addEventListener("mouseout", hoverOnBTNOut);
			stage.getChildByName("BTNmute").cursor = "pointer";
			for (var i = 0; i <= gameArray[1].length - 1; i++) {
				stage.getChildByName("smore" + i).addEventListener("click", clickOnSmore);
				stage.getChildByName("smore" + i).addEventListener("mouseover", shade);
				stage.getChildByName("smore" + i).addEventListener("mouseout", Outshade);
				stage.getChildByName("smore" + i).cursor = "pointer";
			}
			stage.getChildByName("pause").gotoAndStop(0);
		}
		
		function muteGame(evt) //השתקת המשחק
		{
			if (evt.currentTarget.parent.getChildByName(evt.currentTarget.name.substr(3)).currentFrame == 1) {
				evt.currentTarget.parent.getChildByName(evt.currentTarget.name.substr(3)).gotoAndStop(3);
				createjs.Sound.muted = true;
			} else {
				evt.currentTarget.parent.getChildByName(evt.currentTarget.name.substr(3)).gotoAndStop(1);
				createjs.Sound.muted = false;
			}
		}
		
		function changeGameSpeed() //שינוי מהירות המשחק
		{
			if (currentSpeed == 1) {
				currentSpeed = 0.5;
				stage.getChildByName("speed").gotoAndStop(3);
			} else if (currentSpeed == 0.5) {
				currentSpeed = 2;
				stage.getChildByName("speed").gotoAndStop(7);
			} else if (currentSpeed == 2) {
				currentSpeed = 1.5;
				stage.getChildByName("speed").gotoAndStop(5);
			} else if (currentSpeed == 1.5) {
				currentSpeed = 1;
				stage.getChildByName("speed").gotoAndStop(1);
			}
		}
		
		function newMarsh() //טעינת שאלה לבמה
		{
			if (gameArray[2].length > 0) //בדיקה האם נותרו עוד שאלות במאגר
			{
				//יצירת מרשמלו ריק חדש
				var marsh = new lib.marshQ();
				marsh.x = 650;
				marsh.y = 200;
				marsh.name = "marsh";
				stage.addChild(marsh);
				marsh.addEventListener("mouseover", hoverOnMarshIn);
				marsh.addEventListener("mouseout", hoverOnMarshOut);
		
				//הגרלת שאלה
				rndQ = pickRandom(0, gameArray[2].length);
				currentQ = rndQ; //מספר השאלה שתעלה מתוך מה שנשאר
				questionNum = gameArray[2][currentQ][2]; //מספר השאלה האובייקטיבי במאגר המקורי
		
				//טעינת תוכן השאלה שהוגרלה על גבי המרשמלו
				var qContent;
				if (gameChoice == 0) {
					qContent = new lib.g0_q();
				} else if (gameChoice == 1) {
					qContent = new lib.g1_q();
				}
				qContent.gotoAndStop(questionNum);
				qContent.x = 0;
				qContent.y = 0;
				qContent.scaleX = 100 / qContent.nominalBounds.width;
				qContent.scaleY = 100 / qContent.nominalBounds.height;
				qContent.name = "g0_q0" + questionNum;
				marsh.addChild(qContent);
		
				//הפעלת תנועת המרשמלו
				marshInterval = setInterval(movingMarsh, 0.5);
				moveTo = "right";
				movingMarsh();
		
			} else //אם נגמרו השאלות במאגר
			{
				finishGame();
			}
		}
		
		function movingMarsh() //פונקציית אינטרוול תנועת המרשמלו
		{
			if (moveTo == "right") {
				if (stage.getChildByName("marsh").x < stageW - 150) {
					stage.getChildByName("marsh").x += 1.8 * currentSpeed;
				} else {
					moveTo = "left";
				}
			} else {
				if (stage.getChildByName("marsh").x > 100) {
					stage.getChildByName("marsh").x -= 1.8 * currentSpeed;
				} else {
					moveTo = "right";
				}
			}
		}
		
		function hoverOnMarshIn() //מעבר עכבר על מרשמלו השאלה כדי לעצור ולהגדיל אותו
		{
			stage.getChildByName("marsh").scaleX = 2;
			stage.getChildByName("marsh").scaleY = 2;
			clearInterval(marshInterval);
		}
		
		function hoverOnMarshOut() //מעבר עכבר החוצה ממרשמלו השאלה
		{
			stage.getChildByName("marsh").scaleX = 1;
			stage.getChildByName("marsh").scaleY = 1;
			marshInterval = setInterval(movingMarsh, 1);
		}
		
		function shade(evt) //מעבר עכבר על הסמורס - הדגשה שלו
		{
			evt.currentTarget.shadow = new createjs.Shadow("rgba(236,174,166,1)", 0, 0, 15);
		}
		function Outshade(evt) //מעבר עכבר החוצה מהסמורס
		{
			evt.currentTarget.shadow = null;
		}
		
		function clickOnSmore(evt) //מה קורה כשלוחצים על סמורס של קטגוריה
		{
			//במקרה שיש שיפוד שכבר בתהליך ירייה - לבטל אותו
			if (spikeInterval != null) {
				clearInterval(spikeInterval);
				stage.removeChild(stage.getChildByName("spike" + currentSpike));
			}
		
			currentSpike = evt.currentTarget.name.charAt(5); //כדי שהשיפוד ידע מאיזו תשובה הוא הגיע
		
			//יצירת שיפוד חדש לירייה
			spike = new lib.skewForSmore();
			stage.removeChild(spike);
			spike.x = evt.currentTarget.x;
			spike.y = stageH - (evt.currentTarget.nominalBounds.height) + spike.nominalBounds.height / 2;
			spike.name = "spike" + currentSpike;
			spike.alpha = 1;
			spike.visible = true;
			stage.addChildAt(spike, 1);
		
			shootSound = createjs.Sound.play("shoot"); //סאונד של יריית שיפוד
		
			spikeInterval = setInterval(spikeShoot, 0.1); //הפעלת תנועת השיפוד שנורה
		}
		
		function spikeShoot() //אינטרוול של יריית שיפוד
		{
			//אם השיפוד עדיין על הבמה - להזיז אותו
			if (stage.getChildByName("spike" + currentSpike).y > -70) {
				stage.getChildByName("spike" + currentSpike).y -= 5;
			} else //אם השיפוד יצא מהבמה - להסיר אותו ולבטל את האינטרוול
			{
				clearInterval(spikeInterval);
				stage.removeChild(stage.getChildByName("spike" + currentSpike));
			}
		
			//בדיקת פגיעה
			if (intersect(stage.getChildByName("marsh"), stage.getChildByName("spike" + currentSpike))) {
				//פגיעה
				marshHit();
			} else //פספוס
			{
				console.log("miss"); //למחוק
			}
		}
		
		//בדיקה האם אובייקטים נגעו זה בזה - מחזירה נכון רק אם כן
		function intersect(obj1, obj2) {
			if (obj1 != null && obj2 != null) {
				var obj1W = obj1.nominalBounds;
				var obj2W = obj2.nominalBounds;
		
				if (obj1.x + ((obj1W.width - 10) / 2) <= obj2.x - (obj2W.width / 2)) {
					return false;
				} else if (obj1.y + (obj1W.height / 2) <= obj2.y - (obj2W.height / 2)) {
					return false;
				} else if (obj1.x - ((obj1W.width - 10) / 2) > obj2.x + (obj2W.width / 2)) {
					return false;
				} else if (obj1.y - (obj1W.height / 2) > obj2.y + (obj2W.height / 2)) {
					return false;
				} else if (obj2.y > 310) {
					return false;
				} else if (obj2.y < 100) {
					return false;
				} else {
					return true;
				}
			}
		}
		
		function marshHit() //פגיעה של שיפוד במרשמלו
		{
			//הסרת השיפוד והאינטרוול שלו
			stage.removeChild(stage.getChildByName("spike" + currentSpike));
			clearInterval(spikeInterval);
		
			//בדיקה האם תשובה נכונה
			if (gameArray[2][currentQ][1] == currentSpike) //אם כן
			{
				winMarsh();
			} else //אם לא
			{
				errorCount++; //נספרת טעות
				loseMarsh();
			}
			newMarshWhenAnimationFinish = setTimeout(newMarsh, 1500); //טיימר לאנימציה שרק אחריה יווצר מרשמלו חדש
		}
		
		function winMarsh() //שיוך נכון של מרשמלו לקטגוריה
		{
			winSound = createjs.Sound.play("win"); //סאונד של הצלחה
		
			//הוספת אנימציית הצלחה לבמה
			Winmarsh = new lib.winMarsh();
			Winmarsh.x = stage.getChildByName("marsh").x;
			Winmarsh.y = stage.getChildByName("marsh").y;
			Winmarsh.name = "Winmarsh";
			stage.addChild(Winmarsh);
		
			//הסרת המרשמלו מהבמה
			stage.removeChild(stage.getChildByName("marsh"));
			clearInterval(marshInterval);
		
			//ספירת הניסיון והתשובה הנכונה
			answersCountArray[questionNum]++; //ספירת הניסיון
			rightAnswersCount += 1; //הוספה למספר התשובות הנכונות הכולל
			progressBar.progressBarSpike.getChildByName("singleMarshBar" + rightAnswersCount).alpha = 1; //סימון במד ההתקדמות
		
			//הוספה למספר התשובות הנכונות עבור השיפוד של הקטגוריה
			categoryCountArrayWin[currentSpike]++;
			var rightMarsh = new lib.singleMarshForSmore();
			rightMarsh.name = "rightMarsh" + currentSpike + "_" + categoryCountArrayWin[currentSpike];
			if (categoryCountArrayWin[currentSpike] % 2 == 0) {
				rightMarsh.gotoAndStop(1);
			}
			var maxMarsh = 0;
			for (var i = 0; i <= categoryCountArray.length - 1; i++) {
				if (categoryCountArray[i] >= maxMarsh) {
					maxMarsh = categoryCountArray[i];
				}
			}
			if (maxMarsh >= 3) {
				rightMarsh.scaleY = (110 / maxMarsh) / rightMarsh.nominalBounds.height;
			}
			stage.getChildByName("smore" + currentSpike).skewForSmore.addChild(rightMarsh);
			var totalHeight = rightMarsh.parent.nominalBounds.height - 20;
			var i = (categoryCountArrayWin[currentSpike] - 1);
			rightMarsh.y = -(totalHeight / maxMarsh * i) + (totalHeight / (maxMarsh * 2)) + totalHeight / 2 - 20;
		
			//הסרת השאלה מהמאגר
			gameArray[2].splice(currentQ, 1); 
		}
		
		function loseMarsh() //שיוך לא נכון של מרשמלו לקטגוריה
		{
			loseSound = createjs.Sound.play("lose"); //סאונד של אי הצלחה
		
			//הוספת אנימציית אי הצלחה לבמה
			Losemarsh = new lib.loserMarsh();
			Losemarsh.x = stage.getChildByName("marsh").x;
			Losemarsh.y = stage.getChildByName("marsh").y;
			Losemarsh.name = "Losemarsh";
			stage.addChild(Losemarsh);
		
			//הסרת המרשמלו מהבמה
			stage.removeChild(stage.getChildByName("marsh"));
			clearInterval(marshInterval);
		
			//ספירת הניסיון
			answersCountArray[questionNum]++;
		}
		
		function finishGame() //סיום משחק והטענת אנימציית הסיום
		{
			//למחוק	
			state = "endAnimationScene";
			console.log(state);
		
			//ניקוי הבמה והאינטרוולים
			stage.removeAllChildren();
			clearInterval(timeInterval);
			clearInterval(marshInterval);
			clearTimeout(newMarshWhenAnimationFinish);
			guitarSound = createjs.Sound.stop("guitar"); //עצירת המוזיקה
		
			//הטענת אנימציית הסיום
			animationScene = new lib.animationScene();
			animationScene.x = stageW / 2;
			animationScene.y = stageH / 2;
			animationScene.name = "gameChoiceScreen";
			animationScene.gotoAndStop(1);
			stage.addChild(animationScene);
			stage.addChild(skiptonext); //למחוק
		
			endScreenWhenAnimationFinish = setTimeout(loadEndScreen, 2800); //טיימר לסיום אנימציית הסיום
		}
		
		function loadEndScreen() //טעינת מסך הסיום והתוכן שלו
		{
			//למחוק	
			state = "endScreen";
			console.log(state);
		
			clearTimeout(endScreenWhenAnimationFinish); //ביטול הטיימר של אנימציית הסיום במקרה של דילוג למסך הסיום
		
			finalSound = createjs.Sound.play("final"); //סאונד חגיגי להגעה לסיום המשחק
			endscreenMusic = createjs.Sound.play("endscreenMusic"); //מוזיקת מסך הסיום
		
			stage.removeChild(animationScene); //הסרת אנימציית הסיום מהבמה
		
			//הטענת מסך הסיום לבמה
			endScreen = new lib.endScreen();
			endScreen.x = stageW / 2;
			endScreen.y = stageH / 2;
			endScreen.name = "endScreen";
			stage.addChild(endScreen);
		
			//הטענת כפתור הבית
			var BTNhome = new lib.BTNbg();
			console.log(stageW - 180);
			BTNhome.x = stageW - 180;
			BTNhome.y = 40;
			BTNhome.name = "BTNhome";
			endScreen.homeBTN.visible = false;
			stage.addChild(BTNhome);
			var home = new lib.home();
			home.x = BTNhome.x;
			home.y = BTNhome.y;
			home.name = "home";
			stage.addChild(home);
			BTNhome.addEventListener("click", startHere);
			BTNhome.addEventListener("mouseover", hoverOnBTNIn);
			BTNhome.addEventListener("mouseout", hoverOnBTNOut);
		
			//הטענת כפתור שחק שנית
			var BTNplayagain = new lib.BTNbg();
			BTNplayagain.x = stageW - 110;
			BTNplayagain.y = 40;
			BTNplayagain.name = "BTNplayagain";
			endScreen.playAgainBTN.visible = false;
			stage.addChild(BTNplayagain);
			var playagain = new lib.playagain();
			playagain.x = BTNplayagain.x;
			playagain.y = BTNplayagain.y;
			playagain.name = "playagain";
			stage.addChild(playagain);
			BTNplayagain.addEventListener("click", loadNewGame);
			BTNplayagain.addEventListener("mouseover", hoverOnBTNIn);
			BTNplayagain.addEventListener("mouseout", hoverOnBTNOut);
		
			//הטענת כפתור ההשתקה
			var BTNmute = new lib.BTNbg();
			BTNmute.x = stageW - 40;
			BTNmute.y = 40;
			BTNmute.name = "BTNmute";
			endScreen.muteBTN.visible = false;
			stage.addChild(BTNmute);
			var mute = new lib.mute();
			mute.x = BTNmute.x;
			mute.y = BTNmute.y;
			mute.name = "mute";
			stage.addChild(mute);
			if (createjs.Sound.muted == true) {
				mute.gotoAndStop(2);
			}
			BTNmute.addEventListener("click", muteGame);
			BTNmute.addEventListener("mouseover", hoverOnBTNIn);
			BTNmute.addEventListener("mouseout", hoverOnBTNOut);
		
			//חישוב הציון
			for (var i = 0; i <= answersCountArray.length - 1; i++) {
				score += 100 / (answersCountArray[i] * answersCountArray.length);
			}
		
			//חישוב נתוני המשחק
			var timeMin = Math.floor(timeVar / 60);
			var timeSec = timeVar % 60;
		
			//הצגת נתוני המשחק
			endScreen.yourScore.text = "הציון שלכם: " + Math.round(score);
			endScreen.errorNum.text = "מספר שגיאות: " + errorCount + " | מרשמלו ששרפתם";
			endScreen.totalTime.text = "זמן כולל: " + timeMin + " דקות ו-" + timeSec + " שניות";
		
			//איפוס מערכי המשחק לצורך המשוב המסכם
			loadGame(gameChoice);
			makeSmores();
			var countArray = []; //מערך לשמירת מספר המרשמלואים שעלו עד כה
		
			//טעינת שיפודים כמספר הקטגוריות
			for (var i = 0; i <= gameArray[1].length - 1; i++) {
				var endscreenSpike = new lib.endscreenSpike();
				endscreenSpike.x = stage.getChildByName("smore" + i).x;
				endscreenSpike.y = stageH - 80;
				endscreenSpike.name = "endscreenSpike" + i;
				stage.addChild(endscreenSpike);
		
				countArray[countArray.length] = 0;
			}
		
			//טעינת השאלות והתוכן שלהן פר שיפוד
			for (var n = 0; n <= gameArray[2].length - 1; n++) {
				var marshFeedback = new lib.singleMarshForEndSmore();
				marshFeedback.name = "marshFeedback" + n;
				stage.getChildByName("endscreenSpike" + gameArray[2][n][1]).addChild(marshFeedback);
				marshFeedback.addEventListener("mouseover", hoverEnlargeIn);
				marshFeedback.addEventListener("mouseout", hoverEnlargeOut);
		
				countArray[gameArray[2][n][1]] += 1;
		
				marshFeedback.x = 0;
				var totalHeight = endscreenSpike.nominalBounds.height - 50; //לצורך חישוב הריווח האוטומטי
				var mcNum = categoryCountArray[gameArray[2][n][1]]; //לצורך חישוב הריווח האוטומטי
				var i = countArray[gameArray[2][n][1]]; //לצורך חישוב הריווח האוטומטי
				marshFeedback.y = -(totalHeight / mcNum * i) + totalHeight / (mcNum * 2);
		
				var qContentFeedback;
				if (gameChoice == 0) {
					qContentFeedback = new lib.g0_q();
				} else if (gameChoice == 1) {
					qContentFeedback = new lib.g1_q();
				}
				qContentFeedback.gotoAndStop(n);
				marshFeedback.addChild(qContentFeedback);
				qContentFeedback.scaleX = 0.1;
				qContentFeedback.scaleY = 0.1;
		
				if (answersCountArray[n] != 1) // לא עובד טוב אם אנחנו מדלגות - יעבוד אחרי שנסיר את כפתור הדילוג
				{
					var redX = new lib.redX();
					marshFeedback.addChild(redX);
				}
			}
		}
		
		function hoverEnlargeIn(evt) {
			evt.currentTarget.scaleX = 2;
			evt.currentTarget.scaleY = 2;
		}
		
		function hoverEnlargeOut(evt) {
			evt.currentTarget.scaleX = 1;
			evt.currentTarget.scaleY = 1;
		}
		
		function hoverOnBTNIn(evt) {
			evt.currentTarget.cursor = "pointer";
			if (evt.currentTarget.currentFrame == 0) {
				evt.currentTarget.gotoAndStop(evt.currentTarget.currentFrame + 1);
				evt.currentTarget.parent.getChildByName(evt.currentTarget.name.substr(3)).gotoAndStop(evt.currentTarget.parent.getChildByName(evt.currentTarget.name.substr(3)).currentFrame + 1);
			}
		}
		
		function hoverOnBTNOut(evt) {
			evt.currentTarget.cursor = "auto";
			if (evt.currentTarget.currentFrame == 1) {
				evt.currentTarget.gotoAndStop(evt.currentTarget.currentFrame - 1);
				evt.currentTarget.parent.getChildByName(evt.currentTarget.name.substr(3)).gotoAndStop(evt.currentTarget.parent.getChildByName(evt.currentTarget.name.substr(3)).currentFrame - 1);
			}
		}
		
		function pickRandom(fromNum, toNum) //פונקציית הגרלת מספר בטווח מסויים
		{
			return Math.floor((Math.random() * ((toNum) - fromNum))) + fromNum;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// actions
	this.instance = new lib.an_CSS({'id': '', 'href':'assets/myCss.css'});

	this.instance.setTransform(65.05,-59.95,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// gameBG
	this.gameBGstart = new lib.gameBG();
	this.gameBGstart.name = "gameBGstart";
	this.gameBGstart.setTransform(639.45,358.8,1,1,0,0,0,693.5,382.8);

	this.timeline.addTween(cjs.Tween.get(this.gameBGstart).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(586,288.6,781.3,445.1);
// library properties:
lib.properties = {
	id: 'AC8763E7A7E0CE47A2AA18C30876EC0B',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/CachedBmp_58.png?1643372311104", id:"CachedBmp_58"},
		{src:"images/CachedBmp_57.png?1643372311104", id:"CachedBmp_57"},
		{src:"images/CachedBmp_56.png?1643372311104", id:"CachedBmp_56"},
		{src:"images/CachedBmp_52.png?1643372311104", id:"CachedBmp_52"},
		{src:"images/CachedBmp_24.png?1643372311104", id:"CachedBmp_24"},
		{src:"images/marshmellowmed_ordered_atlas_1.png?1643372310514", id:"marshmellowmed_ordered_atlas_1"},
		{src:"images/marshmellowmed_ordered_atlas_2.png?1643372310514", id:"marshmellowmed_ordered_atlas_2"},
		{src:"images/marshmellowmed_ordered_atlas_3.png?1643372310515", id:"marshmellowmed_ordered_atlas_3"},
		{src:"images/marshmellowmed_ordered_atlas_4.png?1643372310516", id:"marshmellowmed_ordered_atlas_4"},
		{src:"images/marshmellowmed_ordered_atlas_5.png?1643372310516", id:"marshmellowmed_ordered_atlas_5"},
		{src:"sounds/endscreenMusic.mp3?1643372311104", id:"endscreenMusic"},
		{src:"sounds/fireSound.mp3?1643372311104", id:"fireSound"},
		{src:"sounds/guitarSound.mp3?1643372311104", id:"guitarSound"},
		{src:"sounds/loseSound.mp3?1643372311104", id:"loseSound"},
		{src:"sounds/finalSound.mp3?1643372311104", id:"finalSound"},
		{src:"sounds/winSound.mp3?1643372311104", id:"winSound"},
		{src:"sounds/shootSound.mp3?1643372311104", id:"shootSound"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1643372311104", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1643372311104", id:"sdk/anwidget.js"},
		{src:"components/ui/src/combobox.js?1643372311104", id:"an.ComboBox"},
		{src:"components/ui/src/css.js?1643372311104", id:"an.CSS"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['AC8763E7A7E0CE47A2AA18C30876EC0B'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;