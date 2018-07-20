// JavaScript Document
window.onload = function () {
    console.log("Junior developer test.");

    // declare your variables here.
    var background;
    var skyGlassmark;
    var deezer;
    var mns;
    var shadowDark;
    var shadowLight;
    var chooseReward;
    var switchReward;
    var whenJoinSky;
    var skyLineRental;
    var bbSale;
    var bbShadow;
    var findOutMore;
    var oneYearFree;
    var whenBlue;
    var limitedTimeOffer;
    var skyLineRentalGrey;



    // store a reference to the canvas which we will draw on.
    var stage = new createjs.Stage("stage");

    // register the stage to handle mouse events. 
    stage.enableMouseOver(10);

    // register the Ticker to listen for the tick event.
    createjs.Ticker.setFPS(120);
    createjs.Ticker.addEventListener("tick", handleTick, false);
    createjs.Ticker.interval = 10;

    // redraw the canvas - like Event.ENTER_FRAME in Adobe Flash.
    function handleTick(event) {
        stage.update();
    }

    // create a preloader to load the images.
    var loader = new createjs.LoadQueue(false);

    // when all images are loaded call the handleAllImageLoaded function.
    loader.on('complete', handleAllImagesLoaded, this);

    // provide a manifest of files and ids to be loaded.
    loader.loadManifest([
        {
            id: "background",
            src: "images/background.png"
        },
        {
            id: "skyGlassmark",
            src: "images/skyGlassmark.png"
        }, {
            id: "deezer",
            src: "images/deezer.png"
        }, {
            id: "mns",
            src: "images/mns.png"
        }, {
            id: "shadowDark",
            src: "images/shadowDark.png"
        }, {
            id: "shadowLight",
            src: "images/shadowLight.png"
        }, {
            id: "chooseReward",
            src: "images/chooseReward.png"
        }, {
            id: "switchReward",
            src: "images/switchReward.png"
        }, {
            id: "whenJoinSky",
            src: "images/whenJoinSky.png"
        }, {
            id: "skyLineRental",
            src: "images/skyLineRental.png"
        }, {
            id: "bbSale",
            src: "images/bbSale.png"
        }, {
            id: "bbShadow",
            src: "images/bbShadow.png"
        }, {
            id: "findOutMore",
            src: "images/findOutMore.png"
        }, {
            id: "oneYearFree",
            src: "images/oneYearFree.png"
        }, {
            id: "whenBlue",
            src: "images/whenBlue.png"
        }, {
            id: "limitedTimeOffer",
            src: "images/limitedTimeOffer.png"
        }, {
            id: "skyLineRentalGrey",
            src: "images/skyLineRentalGrey.png"
        },
	]);

    function handleAllImagesLoaded() {
        console.log("All the images have loaded.");
        drawTheBannerBackground();
    }

    function drawTheBannerBackground() {
        console.log("draw and animate the background.");

        // provide the loader result for the item with id == 'background'
        // as a bitmap which will be stored in our background variable.
        background = new createjs.Bitmap(loader.getResult("background"));

        // set the background bitmap alpha to zero.
        background.alpha = 0;

        // add background to the display list.
        stage.addChild(background);

        // animate the background bitmap alpha value to 1 over the duration of 1000 milliseconds.
        createjs.Tween.get(background).to({
            alpha: 1
        }, 1000);

        // after the background is drawn on the canvas draw and animate the content for frame 1.
        setTimeout(frame1, 100);
    }

    function frame1() {
        console.log("draw and animate frame one.");

        // refer to the creative brief, frame 1 for guidance.

        skyGlassmark = new createjs.Bitmap(loader.getResult("skyGlassmark"));
        skyGlassmark.alpha = 0;
        skyGlassmark.x = 15;
        skyGlassmark.y = 205;
        stage.addChild(skyGlassmark);
        createjs.Tween.get(skyGlassmark).to({
            alpha: 1
        }, 1000);

        deezer = new createjs.Bitmap(loader.getResult("deezer"));
        deezer.alpha = 0;
        deezer.x = 50;
        deezer.y = 115;
        stage.addChild(deezer);
        createjs.Tween.get(deezer).to({
            alpha: 1
        }, 1000).wait(4000).to({
            alpha: 0
        }, 1000);


        mns = new createjs.Bitmap(loader.getResult("mns"));
        mns.alpha = 0;
        mns.x = 169;
        mns.y = 115;
        stage.addChild(mns);
        createjs.Tween.get(mns).to({
            alpha: 1
        }, 1000).wait(4000).to({
            alpha: 0
        }, 1000);


        shadowDark = new createjs.Bitmap(loader.getResult("shadowDark"));
        shadowDark.alpha = 0;
        shadowDark.x = 53;
        shadowDark.y = 193;
        stage.addChild(shadowDark);
        createjs.Tween.get(shadowDark).to({
            alpha: 1
        }, 1000).wait(4000).to({
            alpha: 0
        }, 1000);


        shadowLight = new createjs.Bitmap(loader.getResult("shadowLight"));
        shadowLight.alpha = 0;
        shadowLight.x = 169;
        shadowLight.y = 190;
        stage.addChild(shadowLight);
        createjs.Tween.get(shadowLight).to({
            alpha: 1
        }, 1000).wait(4000).to({
            alpha: 0
        }, 1000);


        chooseReward = new createjs.Bitmap(loader.getResult("chooseReward"));
        chooseReward.alpha = 0;
        chooseReward.x = 55.5;
        chooseReward.y = 25;
        stage.addChild(chooseReward);
        createjs.Tween.get(chooseReward).wait(1000).to({
            alpha: 1
        }, 1000).wait(3000).to({
            alpha: 0
        }, 1000);


        switchReward = new createjs.Bitmap(loader.getResult("switchReward"));
        switchReward.alpha = 0;
        switchReward.x = 55.5;
        switchReward.y = 50;
        stage.addChild(switchReward);
        createjs.Tween.get(switchReward).wait(2000).to({
            alpha: 1
        }, 1000).wait(2000).to({
            alpha: 0
        }, 1000);



        // after a timeout and the animations have completed, draw frame 2.
        setTimeout(frame2, 6000);
    }

    function frame2() {
        console.log("draw and animate frame two.");

        // refer to the creative brief, frame 2 for guidance.

        whenJoinSky = new createjs.Bitmap(loader.getResult("whenJoinSky"));
        whenJoinSky.alpha = 0;
        whenJoinSky.x = 43;
        whenJoinSky.y = 20;
        stage.addChild(whenJoinSky);
        createjs.Tween.get(whenJoinSky).to({
            alpha: 1
        }, 1000).wait(2000).to({
            alpha: 0
        }, 1000);

        skyLineRental = new createjs.Bitmap(loader.getResult("skyLineRental"));
        skyLineRental.alpha = 0;
        skyLineRental.x = 126;
        skyLineRental.y = 220;
        stage.addChild(skyLineRental);
        createjs.Tween.get(skyLineRental).wait(1000).to({
            alpha: 1
        }, 1000).wait(1000).to({
            alpha: 0
        }, 1000);


        bbSale = new createjs.Bitmap(loader.getResult("bbSale"));
        bbSale.alpha = 1;
        bbSale.x = 66.5;
        bbSale.y = -167;
        stage.addChild(bbSale);
        createjs.Tween.get(bbSale).wait(1000).to({
            y: 65
        }, 1000, createjs.Ease.bounceOut).wait(1000).to({
            alpha: 0
        }, 1000);


        bbShadow = new createjs.Bitmap(loader.getResult("bbShadow"));
        bbShadow.alpha = 0;
        bbShadow.x = 66.5;
        bbShadow.y = 200;
        stage.addChild(bbShadow);
        createjs.Tween.get(bbShadow).wait(1000).to({
            alpha: 1
        }, 1000).wait(1000).to({
            alpha: 0
        }, 1000);


        // after a timeout and the animations have completed, draw frame 3.
        setTimeout(frame3, 4000);
    }

    function frame3() {
        console.log("draw and animate frame three.");

        // refer to the creative brief, frame 3 for guidance.

        findOutMore = new createjs.Bitmap(loader.getResult("findOutMore"));
        findOutMore.alpha = 0;
        findOutMore.x = 145;
        findOutMore.y = 200;
        stage.addChild(findOutMore);
        createjs.Tween.get(findOutMore).to({
            alpha: 1
        }, 0);

        /*var matrix = new createjs.ColorMatrix().adjustBrightness(100);
        findOutMore.filters = [new createjs.ColorMatrixFilter(matrix)];
        findOutMore.cache(0, 0, 142, 41);*/

        oneYearFree = new createjs.Bitmap(loader.getResult("oneYearFree"));
        oneYearFree.alpha = 0;
        oneYearFree.x = 11.5;
        oneYearFree.y = 25;
        stage.addChild(oneYearFree);
        createjs.Tween.get(oneYearFree).to({
            alpha: 1
        }, 1000);

        whenBlue = new createjs.Bitmap(loader.getResult("whenBlue"));
        whenBlue.alpha = 0;
        whenBlue.x = 41.5;
        whenBlue.y = 80;
        stage.addChild(whenBlue);
        createjs.Tween.get(whenBlue).wait(1000).to({
            alpha: 1
        }, 1000);

        limitedTimeOffer = new createjs.Bitmap(loader.getResult("limitedTimeOffer"));
        limitedTimeOffer.alpha = 0;
        limitedTimeOffer.x = 74.5;
        limitedTimeOffer.y = 135;
        stage.addChild(limitedTimeOffer);
        createjs.Tween.get(limitedTimeOffer).wait(2000).to({
            alpha: 1
        }, 1000);

        skyLineRentalGrey = new createjs.Bitmap(loader.getResult("skyLineRentalGrey"));
        skyLineRentalGrey.alpha = 0;
        skyLineRentalGrey.x = 84.5;
        skyLineRentalGrey.y = 185;
        stage.addChild(skyLineRentalGrey);
        createjs.Tween.get(skyLineRentalGrey).wait(3000).to({
            alpha: 1
        }, 1000);


        var sheen = new createjs.Shape();
        sheen.graphics.beginFill("white").drawRect(135, 203, 10, 38);
        sheen.alpha = 0.5;
        stage.addChild(sheen);
        createjs.Tween.get(sheen).wait(4000).to({
            x: 216,
            alpha: 0
        }, 500, createjs.Ease.linear).to({
            x: 216,
            alpha: 1
        }, 500, createjs.Ease.linear).to({
            x: 287,
            alpha: 1
        }, 500, createjs.Ease.linear).to({
            x: 287,
            alpha: 0
        }, 500, createjs.Ease.linear);

    }

};
