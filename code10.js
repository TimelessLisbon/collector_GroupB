gdjs.Sta_32JustaCode = {};
gdjs.Sta_32JustaCode.localVariables = [];
gdjs.Sta_32JustaCode.GDyesObjects1_1final = [];

gdjs.Sta_32JustaCode.GDprox_9595localObjects1= [];
gdjs.Sta_32JustaCode.GDprox_9595localObjects2= [];
gdjs.Sta_32JustaCode.GDprox_9595localObjects3= [];
gdjs.Sta_32JustaCode.GDnoObjects1= [];
gdjs.Sta_32JustaCode.GDnoObjects2= [];
gdjs.Sta_32JustaCode.GDnoObjects3= [];
gdjs.Sta_32JustaCode.GDyesObjects1= [];
gdjs.Sta_32JustaCode.GDyesObjects2= [];
gdjs.Sta_32JustaCode.GDyesObjects3= [];
gdjs.Sta_32JustaCode.GDfundoObjects1= [];
gdjs.Sta_32JustaCode.GDfundoObjects2= [];
gdjs.Sta_32JustaCode.GDfundoObjects3= [];
gdjs.Sta_32JustaCode.GDscoreObjects1= [];
gdjs.Sta_32JustaCode.GDscoreObjects2= [];
gdjs.Sta_32JustaCode.GDscoreObjects3= [];
gdjs.Sta_32JustaCode.GDnext_9595sceneObjects1= [];
gdjs.Sta_32JustaCode.GDnext_9595sceneObjects2= [];
gdjs.Sta_32JustaCode.GDnext_9595sceneObjects3= [];
gdjs.Sta_32JustaCode.GDURLObjects1= [];
gdjs.Sta_32JustaCode.GDURLObjects2= [];
gdjs.Sta_32JustaCode.GDURLObjects3= [];
gdjs.Sta_32JustaCode.GDfundopistagmObjects1= [];
gdjs.Sta_32JustaCode.GDfundopistagmObjects2= [];
gdjs.Sta_32JustaCode.GDfundopistagmObjects3= [];
gdjs.Sta_32JustaCode.GDpistagmObjects1= [];
gdjs.Sta_32JustaCode.GDpistagmObjects2= [];
gdjs.Sta_32JustaCode.GDpistagmObjects3= [];
gdjs.Sta_32JustaCode.GDdigitsObjects1= [];
gdjs.Sta_32JustaCode.GDdigitsObjects2= [];
gdjs.Sta_32JustaCode.GDdigitsObjects3= [];
gdjs.Sta_32JustaCode.GDlocal_9595erradoObjects1= [];
gdjs.Sta_32JustaCode.GDlocal_9595erradoObjects2= [];
gdjs.Sta_32JustaCode.GDlocal_9595erradoObjects3= [];
gdjs.Sta_32JustaCode.GDtask_9595confirmationObjects1= [];
gdjs.Sta_32JustaCode.GDtask_9595confirmationObjects2= [];
gdjs.Sta_32JustaCode.GDtask_9595confirmationObjects3= [];
gdjs.Sta_32JustaCode.GDgmapsObjects1= [];
gdjs.Sta_32JustaCode.GDgmapsObjects2= [];
gdjs.Sta_32JustaCode.GDgmapsObjects3= [];


gdjs.Sta_32JustaCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(28924404);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Track", gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Team", runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", runtimeScene.getGame().getVariables().getFromIndex(1).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Progress", runtimeScene.getGame().getVariables().getFromIndex(2).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.firebaseTools.database.getField("Optional", "Revelations", runtimeScene.getScene().getVariables().getFromIndex(6), runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.firebaseTools.database.getField("Timer", "Hour", runtimeScene.getScene().getVariables().getFromIndex(1), runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.firebaseTools.database.getField("Timer", "Minute", runtimeScene.getScene().getVariables().getFromIndex(3), runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 0, 1);
}}

}


};gdjs.Sta_32JustaCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(31286092);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Sta_32JustaCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(31287604);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Sta_32JustaCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(31290804);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Sta_32JustaCode.eventsList4 = function(runtimeScene) {

{

gdjs.Sta_32JustaCode.GDyesObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Sta_32JustaCode.GDyesObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Sta_32JustaCode.GDyesObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32JustaCode.GDyesObjects2.length;i<l;++i) {
    if ( gdjs.Sta_32JustaCode.GDyesObjects2[i].isVisible() ) {
        isConditionTrue_2 = true;
        gdjs.Sta_32JustaCode.GDyesObjects2[k] = gdjs.Sta_32JustaCode.GDyesObjects2[i];
        ++k;
    }
}
gdjs.Sta_32JustaCode.GDyesObjects2.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32JustaCode.GDyesObjects2.length;i<l;++i) {
    if ( gdjs.Sta_32JustaCode.GDyesObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_2 = true;
        gdjs.Sta_32JustaCode.GDyesObjects2[k] = gdjs.Sta_32JustaCode.GDyesObjects2[i];
        ++k;
    }
}
gdjs.Sta_32JustaCode.GDyesObjects2.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Sta_32JustaCode.GDyesObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Sta_32JustaCode.GDyesObjects1_1final.indexOf(gdjs.Sta_32JustaCode.GDyesObjects2[j]) === -1 )
            gdjs.Sta_32JustaCode.GDyesObjects1_1final.push(gdjs.Sta_32JustaCode.GDyesObjects2[j]);
    }
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsString() == gdjs.evtTools.firebaseTools.auth.userManagement.getUID());
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.Sta_32JustaCode.GDyesObjects1_1final, gdjs.Sta_32JustaCode.GDyesObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}{runtimeScene.getScene().getVariables().getFromIndex(4).setString("");
}
{ //Subevents
gdjs.Sta_32JustaCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.Sta_32JustaCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(31295812);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Sta_32JustaCode.eventsList6 = function(runtimeScene) {

{

gdjs.Sta_32JustaCode.GDyesObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Sta_32JustaCode.GDyesObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Sta_32JustaCode.GDyesObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32JustaCode.GDyesObjects2.length;i<l;++i) {
    if ( gdjs.Sta_32JustaCode.GDyesObjects2[i].isVisible() ) {
        isConditionTrue_2 = true;
        gdjs.Sta_32JustaCode.GDyesObjects2[k] = gdjs.Sta_32JustaCode.GDyesObjects2[i];
        ++k;
    }
}
gdjs.Sta_32JustaCode.GDyesObjects2.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32JustaCode.GDyesObjects2.length;i<l;++i) {
    if ( gdjs.Sta_32JustaCode.GDyesObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_2 = true;
        gdjs.Sta_32JustaCode.GDyesObjects2[k] = gdjs.Sta_32JustaCode.GDyesObjects2[i];
        ++k;
    }
}
gdjs.Sta_32JustaCode.GDyesObjects2.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Sta_32JustaCode.GDyesObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Sta_32JustaCode.GDyesObjects1_1final.indexOf(gdjs.Sta_32JustaCode.GDyesObjects2[j]) === -1 )
            gdjs.Sta_32JustaCode.GDyesObjects1_1final.push(gdjs.Sta_32JustaCode.GDyesObjects2[j]);
    }
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsString() == gdjs.evtTools.firebaseTools.auth.userManagement.getUID());
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.Sta_32JustaCode.GDyesObjects1_1final, gdjs.Sta_32JustaCode.GDyesObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}{runtimeScene.getScene().getVariables().getFromIndex(4).setString("");
}
{ //Subevents
gdjs.Sta_32JustaCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.Sta_32JustaCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsString() != "4a6bed99-f0a7-4a39-a974-6a4e0dceeae5");
}
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(3).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(31298500);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", runtimeScene.getGame().getVariables().getFromIndex(1).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Sta_32JustaCode.GDnext_9595sceneObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, (( gdjs.Sta_32JustaCode.GDnext_9595sceneObjects1.length === 0 ) ? "" :gdjs.Sta_32JustaCode.GDnext_9595sceneObjects1[0].getBehavior("Text").getText()), false);
}}

}


};gdjs.Sta_32JustaCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Sta_32JustaCode.GDnext_9595sceneObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(8);
}{for(var i = 0, len = gdjs.Sta_32JustaCode.GDnext_9595sceneObjects1.length ;i < len;++i) {
    gdjs.Sta_32JustaCode.GDnext_9595sceneObjects1[i].setString("Percurso Monopoly");
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Sta_32JustaCode.GDnext_9595sceneObjects1);
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Sta_32JustaCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("task_confirmation"), gdjs.Sta_32JustaCode.GDtask_9595confirmationObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Sta_32JustaCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Sta_32JustaCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Sta_32JustaCode.GDnoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Sta_32JustaCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Sta_32JustaCode.GDyesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Sta_32JustaCode.GDnext_9595sceneObjects1.length ;i < len;++i) {
    gdjs.Sta_32JustaCode.GDnext_9595sceneObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Sta_32JustaCode.GDtask_9595confirmationObjects1.length ;i < len;++i) {
    gdjs.Sta_32JustaCode.GDtask_9595confirmationObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scene_start");
}
{ //Subevents
gdjs.Sta_32JustaCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") <= 0;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber());
}{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Next", runtimeScene.getScene().getVariables().getFromIndex(4), runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Language", runtimeScene.getScene().getVariables().getFromIndex(2), runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.firebaseTools.database.getField("Voucher", "Status", runtimeScene.getScene().getVariables().getFromIndex(5), runtimeScene.getScene().getVariables().getFromIndex(0));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "scene_start") >= 1;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber());
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() < 10);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Sta_32JustaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Sta_32JustaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Sta_32JustaCode.GDscoreObjects1[i].setString("00" + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() >= 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() < 100);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Sta_32JustaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Sta_32JustaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Sta_32JustaCode.GDscoreObjects1[i].setString("0" + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() >= 100);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Sta_32JustaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Sta_32JustaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Sta_32JustaCode.GDscoreObjects1[i].setString(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("task_confirmation"), gdjs.Sta_32JustaCode.GDtask_9595confirmationObjects1);
{for(var i = 0, len = gdjs.Sta_32JustaCode.GDtask_9595confirmationObjects1.length ;i < len;++i) {
    gdjs.Sta_32JustaCode.GDtask_9595confirmationObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = (gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) != "Manteigaria Fim");
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) != "Bolo de Bacalhau");
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.Sta_32JustaCode.GDfundoObjects1);
{for(var i = 0, len = gdjs.Sta_32JustaCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.Sta_32JustaCode.GDfundoObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Sta_32JustaCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("prox_local"), gdjs.Sta_32JustaCode.GDprox_9595localObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Sta_32JustaCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Sta_32JustaCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Sta_32JustaCode.GDyesObjects1[i].SetLabelText("SIM", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Sta_32JustaCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Sta_32JustaCode.GDnoObjects1[i].SetLabelText("NÃO", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Sta_32JustaCode.GDprox_9595localObjects1.length ;i < len;++i) {
    gdjs.Sta_32JustaCode.GDprox_9595localObjects1[i].SetLabelText("Prox. local", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Sta_32JustaCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("prox_local"), gdjs.Sta_32JustaCode.GDprox_9595localObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Sta_32JustaCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Sta_32JustaCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Sta_32JustaCode.GDyesObjects1[i].SetLabelText("YES", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Sta_32JustaCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Sta_32JustaCode.GDnoObjects1[i].SetLabelText("NO", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Sta_32JustaCode.GDprox_9595localObjects1.length ;i < len;++i) {
    gdjs.Sta_32JustaCode.GDprox_9595localObjects1[i].SetLabelText("Next Place", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Sta_32JustaCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("prox_local"), gdjs.Sta_32JustaCode.GDprox_9595localObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Sta_32JustaCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Sta_32JustaCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Sta_32JustaCode.GDyesObjects1[i].SetLabelText("OUI", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Sta_32JustaCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Sta_32JustaCode.GDnoObjects1[i].SetLabelText("NON", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Sta_32JustaCode.GDprox_9595localObjects1.length ;i < len;++i) {
    gdjs.Sta_32JustaCode.GDprox_9595localObjects1[i].SetLabelText("Suivant", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Sta_32JustaCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("prox_local"), gdjs.Sta_32JustaCode.GDprox_9595localObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Sta_32JustaCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Sta_32JustaCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Sta_32JustaCode.GDyesObjects1[i].SetLabelText("SI", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Sta_32JustaCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Sta_32JustaCode.GDnoObjects1[i].SetLabelText("NO", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Sta_32JustaCode.GDprox_9595localObjects1.length ;i < len;++i) {
    gdjs.Sta_32JustaCode.GDprox_9595localObjects1[i].SetLabelText("Siguiente", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) == "Manteigaria Fim");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() == "not selected");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() == "");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() == "bacalhau");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.Sta_32JustaCode.GDfundoObjects1);
{for(var i = 0, len = gdjs.Sta_32JustaCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.Sta_32JustaCode.GDfundoObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) == "Bolo de Bacalhau");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() == "not selected");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() == "");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() == "manteigaria");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.Sta_32JustaCode.GDfundoObjects1);
{for(var i = 0, len = gdjs.Sta_32JustaCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.Sta_32JustaCode.GDfundoObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) == "Manteigaria Fim");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() == "ambos");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() == "manteigaria");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.Sta_32JustaCode.GDfundoObjects1);
{for(var i = 0, len = gdjs.Sta_32JustaCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.Sta_32JustaCode.GDfundoObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() + 4);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) == "Bolo de Bacalhau");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() == "ambos");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() == "bacalhau");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.Sta_32JustaCode.GDfundoObjects1);
{for(var i = 0, len = gdjs.Sta_32JustaCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.Sta_32JustaCode.GDfundoObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() + 4);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("prox_local"), gdjs.Sta_32JustaCode.GDprox_9595localObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32JustaCode.GDprox_9595localObjects1.length;i<l;++i) {
    if ( gdjs.Sta_32JustaCode.GDprox_9595localObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sta_32JustaCode.GDprox_9595localObjects1[k] = gdjs.Sta_32JustaCode.GDprox_9595localObjects1[i];
        ++k;
    }
}
gdjs.Sta_32JustaCode.GDprox_9595localObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Sta_32JustaCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("task_confirmation"), gdjs.Sta_32JustaCode.GDtask_9595confirmationObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Sta_32JustaCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Sta_32JustaCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Sta_32JustaCode.GDnoObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Sta_32JustaCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Sta_32JustaCode.GDyesObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Sta_32JustaCode.GDtask_9595confirmationObjects1.length ;i < len;++i) {
    gdjs.Sta_32JustaCode.GDtask_9595confirmationObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.Sta_32JustaCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Sta_32JustaCode.GDnoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32JustaCode.GDnoObjects1.length;i<l;++i) {
    if ( gdjs.Sta_32JustaCode.GDnoObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Sta_32JustaCode.GDnoObjects1[k] = gdjs.Sta_32JustaCode.GDnoObjects1[i];
        ++k;
    }
}
gdjs.Sta_32JustaCode.GDnoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32JustaCode.GDnoObjects1.length;i<l;++i) {
    if ( gdjs.Sta_32JustaCode.GDnoObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sta_32JustaCode.GDnoObjects1[k] = gdjs.Sta_32JustaCode.GDnoObjects1[i];
        ++k;
    }
}
gdjs.Sta_32JustaCode.GDnoObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Sta_32JustaCode.GDnoObjects1 */
gdjs.copyArray(runtimeScene.getObjects("task_confirmation"), gdjs.Sta_32JustaCode.GDtask_9595confirmationObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Sta_32JustaCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Sta_32JustaCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Sta_32JustaCode.GDnoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Sta_32JustaCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Sta_32JustaCode.GDyesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Sta_32JustaCode.GDtask_9595confirmationObjects1.length ;i < len;++i) {
    gdjs.Sta_32JustaCode.GDtask_9595confirmationObjects1[i].hide();
}
}
{ //Subevents
gdjs.Sta_32JustaCode.eventsList2(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() == 0);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Sta_32JustaCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = (gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) != "S. Roque fim");
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) != "Brasileira Fim");
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) != "Manteigaria Fim");
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) != "Bica Fim");
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) != "Camoes Fim");
}
}
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Sta_32JustaCode.eventsList6(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") >= 0.5;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(2);
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(4).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
{ //Subevents
gdjs.Sta_32JustaCode.eventsList7(runtimeScene);} //End of subevents
}

}


};

gdjs.Sta_32JustaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Sta_32JustaCode.GDprox_9595localObjects1.length = 0;
gdjs.Sta_32JustaCode.GDprox_9595localObjects2.length = 0;
gdjs.Sta_32JustaCode.GDprox_9595localObjects3.length = 0;
gdjs.Sta_32JustaCode.GDnoObjects1.length = 0;
gdjs.Sta_32JustaCode.GDnoObjects2.length = 0;
gdjs.Sta_32JustaCode.GDnoObjects3.length = 0;
gdjs.Sta_32JustaCode.GDyesObjects1.length = 0;
gdjs.Sta_32JustaCode.GDyesObjects2.length = 0;
gdjs.Sta_32JustaCode.GDyesObjects3.length = 0;
gdjs.Sta_32JustaCode.GDfundoObjects1.length = 0;
gdjs.Sta_32JustaCode.GDfundoObjects2.length = 0;
gdjs.Sta_32JustaCode.GDfundoObjects3.length = 0;
gdjs.Sta_32JustaCode.GDscoreObjects1.length = 0;
gdjs.Sta_32JustaCode.GDscoreObjects2.length = 0;
gdjs.Sta_32JustaCode.GDscoreObjects3.length = 0;
gdjs.Sta_32JustaCode.GDnext_9595sceneObjects1.length = 0;
gdjs.Sta_32JustaCode.GDnext_9595sceneObjects2.length = 0;
gdjs.Sta_32JustaCode.GDnext_9595sceneObjects3.length = 0;
gdjs.Sta_32JustaCode.GDURLObjects1.length = 0;
gdjs.Sta_32JustaCode.GDURLObjects2.length = 0;
gdjs.Sta_32JustaCode.GDURLObjects3.length = 0;
gdjs.Sta_32JustaCode.GDfundopistagmObjects1.length = 0;
gdjs.Sta_32JustaCode.GDfundopistagmObjects2.length = 0;
gdjs.Sta_32JustaCode.GDfundopistagmObjects3.length = 0;
gdjs.Sta_32JustaCode.GDpistagmObjects1.length = 0;
gdjs.Sta_32JustaCode.GDpistagmObjects2.length = 0;
gdjs.Sta_32JustaCode.GDpistagmObjects3.length = 0;
gdjs.Sta_32JustaCode.GDdigitsObjects1.length = 0;
gdjs.Sta_32JustaCode.GDdigitsObjects2.length = 0;
gdjs.Sta_32JustaCode.GDdigitsObjects3.length = 0;
gdjs.Sta_32JustaCode.GDlocal_9595erradoObjects1.length = 0;
gdjs.Sta_32JustaCode.GDlocal_9595erradoObjects2.length = 0;
gdjs.Sta_32JustaCode.GDlocal_9595erradoObjects3.length = 0;
gdjs.Sta_32JustaCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.Sta_32JustaCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.Sta_32JustaCode.GDtask_9595confirmationObjects3.length = 0;
gdjs.Sta_32JustaCode.GDgmapsObjects1.length = 0;
gdjs.Sta_32JustaCode.GDgmapsObjects2.length = 0;
gdjs.Sta_32JustaCode.GDgmapsObjects3.length = 0;

gdjs.Sta_32JustaCode.eventsList8(runtimeScene);
gdjs.Sta_32JustaCode.GDprox_9595localObjects1.length = 0;
gdjs.Sta_32JustaCode.GDprox_9595localObjects2.length = 0;
gdjs.Sta_32JustaCode.GDprox_9595localObjects3.length = 0;
gdjs.Sta_32JustaCode.GDnoObjects1.length = 0;
gdjs.Sta_32JustaCode.GDnoObjects2.length = 0;
gdjs.Sta_32JustaCode.GDnoObjects3.length = 0;
gdjs.Sta_32JustaCode.GDyesObjects1.length = 0;
gdjs.Sta_32JustaCode.GDyesObjects2.length = 0;
gdjs.Sta_32JustaCode.GDyesObjects3.length = 0;
gdjs.Sta_32JustaCode.GDfundoObjects1.length = 0;
gdjs.Sta_32JustaCode.GDfundoObjects2.length = 0;
gdjs.Sta_32JustaCode.GDfundoObjects3.length = 0;
gdjs.Sta_32JustaCode.GDscoreObjects1.length = 0;
gdjs.Sta_32JustaCode.GDscoreObjects2.length = 0;
gdjs.Sta_32JustaCode.GDscoreObjects3.length = 0;
gdjs.Sta_32JustaCode.GDnext_9595sceneObjects1.length = 0;
gdjs.Sta_32JustaCode.GDnext_9595sceneObjects2.length = 0;
gdjs.Sta_32JustaCode.GDnext_9595sceneObjects3.length = 0;
gdjs.Sta_32JustaCode.GDURLObjects1.length = 0;
gdjs.Sta_32JustaCode.GDURLObjects2.length = 0;
gdjs.Sta_32JustaCode.GDURLObjects3.length = 0;
gdjs.Sta_32JustaCode.GDfundopistagmObjects1.length = 0;
gdjs.Sta_32JustaCode.GDfundopistagmObjects2.length = 0;
gdjs.Sta_32JustaCode.GDfundopistagmObjects3.length = 0;
gdjs.Sta_32JustaCode.GDpistagmObjects1.length = 0;
gdjs.Sta_32JustaCode.GDpistagmObjects2.length = 0;
gdjs.Sta_32JustaCode.GDpistagmObjects3.length = 0;
gdjs.Sta_32JustaCode.GDdigitsObjects1.length = 0;
gdjs.Sta_32JustaCode.GDdigitsObjects2.length = 0;
gdjs.Sta_32JustaCode.GDdigitsObjects3.length = 0;
gdjs.Sta_32JustaCode.GDlocal_9595erradoObjects1.length = 0;
gdjs.Sta_32JustaCode.GDlocal_9595erradoObjects2.length = 0;
gdjs.Sta_32JustaCode.GDlocal_9595erradoObjects3.length = 0;
gdjs.Sta_32JustaCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.Sta_32JustaCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.Sta_32JustaCode.GDtask_9595confirmationObjects3.length = 0;
gdjs.Sta_32JustaCode.GDgmapsObjects1.length = 0;
gdjs.Sta_32JustaCode.GDgmapsObjects2.length = 0;
gdjs.Sta_32JustaCode.GDgmapsObjects3.length = 0;


return;

}

gdjs['Sta_32JustaCode'] = gdjs.Sta_32JustaCode;
