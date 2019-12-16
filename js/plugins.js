// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"Community_Basic","status":true,"description":"Basic plugin for manipulating important parameters.","parameters":{"cacheLimit":"20","screenWidth":"816","screenHeight":"624","changeWindowWidthTo":"","changeWindowHeightTo":"","renderingMode":"auto","alwaysDash":"off"}},
{"name":"MadeWithMv","status":false,"description":"Show a Splash Screen \"Made with MV\" and/or a Custom Splash Screen before going to main screen.","parameters":{"Show Made With MV":"true","Made with MV Image":"MadeWithMv","Show Custom Splash":"false","Custom Image":"","Fade Out Time":"120","Fade In Time":"120","Wait Time":"160"}},
{"name":"MOG_Footsteps","status":false,"description":"(v1.1) Apresenta as pegadas do character em determinadas regiões.","parameters":{"StepFoot Terrain ID":"1","WaterSlash Terrain ID":"2","Duration":"60","X-Axis Offset":"0","Y-Axis Offset":"5","Play WaterSplash SE":"false","SE File Name":"Ice1"}},
{"name":"YEP_FootstepSounds","status":true,"description":"v1.01 Set footstep sounds to play when the player and/or\nevents walk over specific tiles.","parameters":{"---Default---":"","Default Sound":"","Default Volume":"10","Default Pitch":"150","---Player Settings---":"","Player Enable":"true","Player Volume":"1.00","Player Pitch":"1.00","---Event Settings---":"","Event Enable":"true","Event Volume":"1.00","Distance Volume":"-0.10","Event Pitch":"1.00","Distance Pitch":"-0.00","Distance Pan":"10"}},
{"name":"YEP_QuestJournal","status":true,"description":"v1.01 Insert a quest journal system into your game!","parameters":{"---Main Menu---":"","Quest Command":"Quest","Show Command":"true","Enable Command":"true","Auto Place Command":"true","---Quest Menu---":"","Quest Category Window":"{\"---Categories---\":\"\",\"Category Order\":\"[\\\"available\\\",\\\"completed\\\",\\\"all\\\"]\",\"Available Text\":\"Available (%1)\",\"Completed Text\":\"Completed (%1)\",\"Failed Text\":\"\",\"All Text\":\"All Quests (%1)\",\"Cancel Text\":\"\\\\i[161]Close\",\"---Window Settings---\":\"\",\"X\":\"0\",\"Y\":\"0\",\"Width\":\"Graphics.boxWidth / 3\",\"Height\":\"this.fittingHeight(this.numVisibleRows())\",\"Rows\":\"4\",\"Columns\":\"1\",\"Line Height\":\"36\",\"Font Face\":\"GameFont\",\"Font Size\":\"28\",\"Standard Padding\":\"18\",\"Text Padding\":\"6\",\"Text Alignment\":\"left\",\"Standard Opacity\":\"255\",\"Back Opacity\":\"192\",\"Window Skin\":\"Window\"}","Quest List Window":"{\"---Types---\":\"\",\"Show Types\":\"true\",\"Type Order\":\"[\\\"\\\\\\\\c[6]Main Quests\\\",\\\"\\\\\\\\c[4]Cookie Quests\\\",\\\"\\\\\\\\c[3]Carol Quests\\\",\\\"\\\\\\\\c[5]Good Deeds\\\"]\",\"List Open Symbol\":\"-\",\"List Closed Symbol\":\"+\",\"Type Text Format\":\"%1%2 (%3)\",\"Quest Indent\":\"0\",\"Show Empty\":\"false\",\"Read Quest\":\"\\\\i[121]Read Quest\",\"Cancel\":\"\\\\i[16]Cancel\",\"---Window Settings---\":\"\",\"X\":\"0\",\"Y\":\"Graphics.boxHeight - height\",\"Width\":\"Graphics.boxWidth / 3\",\"Height\":\"Graphics.boxHeight - this.fittingHeight(4)\",\"Line Height\":\"36\",\"Font Face\":\"GameFont\",\"Font Size\":\"28\",\"Standard Padding\":\"18\",\"Text Padding\":\"6\",\"Standard Opacity\":\"255\",\"Back Opacity\":\"192\",\"Type Alignment\":\"left\",\"Quest Alignment\":\"left\",\"Window Skin\":\"Window\"}","Quest Title Window":"{\"---Window Settings---\":\"\",\"No Quest Title\":\"\\\\c[4]Quest Journal\",\"X\":\"Graphics.boxWidth - width\",\"Y\":\"0\",\"Width\":\"Graphics.boxWidth * 2 / 3\",\"Height\":\"this.fittingHeight(1)\",\"Line Height\":\"36\",\"Font Face\":\"GameFont\",\"Font Size\":\"28\",\"Standard Padding\":\"18\",\"Text Padding\":\"6\",\"Text Alignment\":\"center\",\"Standard Opacity\":\"255\",\"Back Opacity\":\"192\",\"Window Skin\":\"Window\"}","Quest Data Window":"{\"---Data Settings---\":\"\",\"No Data Text\":\"\\\"Welcome to the \\\\\\\\c[4]Quest Journal\\\\\\\\c[0].\\\\n\\\\nHere, you can review over the various\\\\nquests given to you by people from all\\\\nover the world.\\\"\",\"Quest Data Format\":\"\\\"\\\\\\\\{%1\\\\\\\\}\\\\n\\\\\\\\c[4]Level:\\\\\\\\c[0] %2\\\\n\\\\\\\\c[4]From:\\\\\\\\c[0] %3\\\\n\\\\\\\\c[4]Location:\\\\\\\\c[0] %4\\\\n\\\\n\\\\\\\\c[4]Description:\\\\\\\\c[0]\\\\n%5\\\\n\\\\n\\\\\\\\c[4]Objectives:\\\\\\\\c[0]\\\\n%6\\\\n\\\\n\\\\\\\\c[4]Rewards:\\\\\\\\c[0]\\\\n%7\\\\n\\\\n%8\\\"\",\"Uncleared Objective\":\"\\\\i[160]%1\",\"Completed Objective\":\"\\\\i[165]%1\",\"Failed Objective\":\"\",\"Unclaimed Reward\":\"\\\\i[160]%1\",\"Claimed Reward\":\"\\\\i[163]%1\",\"Denied Reward\":\"\\\\i[161]%1\",\"Load Delay\":\"30\",\"---Window Settings---\":\"\",\"X\":\"Graphics.boxWidth - width\",\"Y\":\"Graphics.boxHeight - height\",\"Width\":\"Graphics.boxWidth * 2 / 3\",\"Height\":\"Graphics.boxHeight - this.fittingHeight(1)\",\"Line Height\":\"36\",\"Font Face\":\"GameFont\",\"Font Size\":\"28\",\"Standard Padding\":\"18\",\"Text Padding\":\"6\",\"Standard Opacity\":\"255\",\"Back Opacity\":\"192\",\"Window Skin\":\"Window\",\"Scroll Speed\":\"4\"}","Lunatic Mode":"{\"---Quest Menu---\":\"\",\"Before Create Windows\":\"\\\"// Variables\\\\n//   background - background image used for the menu\\\\n//   windowLayer - sprite layer that contains all windows\\\\n//\\\\n// background.bitmap = ImageManager.loadTitle1(\\\\\\\"Book\\\\\\\");\\\\n// this.fitScreen(background);\\\"\",\"After Create Windows\":\"\\\"// Variables\\\\n//   background - background image used for the menu\\\\n//   windowLayer - sprite layer that contains all windows\\\"\",\"Close Quest Menu\":\"\\\"// Variables\\\\n//   background - background image used for the menu\\\\n//   windowLayer - sprite layer that contains all windows\\\"\",\"---Quest Status---\":\"\",\"Quest Add\":\"\\\"// Variables:\\\\n//   questId - ID of the quest being added\\\\n//\\\\n// console.log('Quest ' + questId + ' successfully added!')\\\"\",\"Quest Remove\":\"\\\"// Variables:\\\\n//   questId - ID of the quest being removed\\\\n//\\\\n// console.log('Quest ' + questId + ' successfully removed!')\\\"\",\"Quest Complete\":\"\\\"// Variables:\\\\n//   questId - ID of the quest set to completed\\\\n//\\\\n// console.log('Quest ' + questId + ' status changed to Completed!')\\\"\",\"Quest Fail\":\"\\\"// Variables:\\\\n//   questId - ID of the quest set to failed\\\\n//\\\\n// console.log('Quest ' + questId + ' status changed to Failed!')\\\"\",\"Quest Available\":\"\\\"// Variables:\\\\n//   questId - ID of the quest set to available\\\\n//\\\\n// console.log('Quest ' + questId + ' status changed to Available!')\\\"\",\"---Description---\":\"\",\"Change Description\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose description is changed\\\\n//   index - Description index being changed to\\\\n//\\\\n// console.log('Quest ' + questId + ' description index changed to ' + index)\\\"\",\"---Objectives---\":\"\",\"Show Objective\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose objectives are altered\\\\n//   objectiveId - ID of the objective being shown\\\\n//\\\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to shown!')\\\"\",\"Hide Objective\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose objectives are altered\\\\n//   objectiveId - ID of the objective being hidden\\\\n//\\\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to hidden!')\\\"\",\"Complete Objective\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose objectives are altered\\\\n//   objectiveId - ID of the objective being completed\\\\n//\\\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to completed!')\\\"\",\"Fail Objective\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose objectives are altered\\\\n//   objectiveId - ID of the objective having failed\\\\n//\\\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to failed!')\\\"\",\"Normalize Objective\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose objectives are altered\\\\n//   objectiveId - ID of the objective normalized\\\\n//\\\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to normal!')\\\"\",\"---Rewards---\":\"\",\"Show Reward\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose rewards are altered\\\\n//   rewardId - ID of the reward being shown\\\\n//\\\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' becomes shown!')\\\"\",\"Hide Reward\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose rewards are altered\\\\n//   rewardId - ID of the reward being hidden\\\\n//\\\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' becomes hidden!')\\\"\",\"Claim Reward\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose rewards are altered\\\\n//   rewardId - ID of the reward becoming claimed\\\\n//\\\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' is now claimed!')\\\"\",\"Deny Reward\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose rewards are altered\\\\n//   rewardId - ID of the reward becoming denied\\\\n//\\\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' is now denied!')\\\"\",\"Normalize Reward\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose rewards are altered\\\\n//   rewardId - ID of the reward normalized\\\\n//\\\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' is normalized!')\\\"\",\"---Subtext---\":\"\",\"Change Subtext\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose subtext is changed\\\\n//   index - Subtext index being changed to\\\\n//\\\\n// console.log('Quest ' + questId + ' subtext index changed to ' + index)\\\"\"}","---Quest List---":"","Quest 1":"{\"Title\":\"Find \\\\N[3]\",\"Type\":\"Main Quests\",\"Difficulty\":\"\",\"From\":\"\",\"Location\":\"\",\"Description\":\"\",\"Objectives List\":\"[\\\"\\\\\\\"Find \\\\\\\\\\\\\\\\N[3].\\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\"]\",\"Rewards List\":\"[]\",\"Visible Rewards\":\"[]\",\"Subtext\":\"\"}","Quest 2":"{\"Title\":\"Lock the School\",\"Type\":\"Main Quests\",\"Difficulty\":\"\",\"From\":\"\",\"Location\":\"\",\"Description\":\"\",\"Objectives List\":\"[\\\"\\\\\\\"Find 3 branches \\\\\\\\\\\\\\\\V[1]/3\\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\"]\",\"Rewards List\":\"[]\",\"Visible Rewards\":\"\",\"Subtext\":\"\"}","Quest 3":"{\"Title\":\"Visit Santa Clause\",\"Type\":\"Main Quests\",\"Difficulty\":\"\",\"From\":\"\",\"Location\":\"\",\"Description\":\"\",\"Objectives List\":\"[\\\"\\\\\\\"See Santa at his workshop.\\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\"]\",\"Rewards List\":\"[]\",\"Visible Rewards\":\"\",\"Subtext\":\"\"}","Quest 4":"{\"Title\":\"Get on the Nice List\",\"Type\":\"Main Quests\",\"Difficulty\":\"\",\"From\":\"\",\"Location\":\"\",\"Description\":\"\",\"Objectives List\":\"[\\\"\\\\\\\"Go to the North Pole\\\\\\\"\\\",\\\"\\\\\\\"Talk to Santa\\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\"]\",\"Rewards List\":\"[]\",\"Visible Rewards\":\"\",\"Subtext\":\"\"}","Quest 5":"{\"Title\":\"Find Someone who needs help.\",\"Type\":\"Main Quests\",\"Difficulty\":\"\",\"From\":\"\",\"Location\":\"\",\"Description\":\"\",\"Objectives List\":\"[\\\"\\\\\\\"Find Someone to help\\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\"]\",\"Rewards List\":\"[\\\"\\\\\\\"+ 5 NP\\\\\\\"\\\"]\",\"Visible Rewards\":\"[\\\"1\\\"]\",\"Subtext\":\"\"}","Quest 6":"{\"Title\":\"Find Old Lady's Purse\",\"Type\":\"Good Deeds\",\"Difficulty\":\"\",\"From\":\"\",\"Location\":\"\",\"Description\":\"\",\"Objectives List\":\"[\\\"\\\\\\\"Find Purse\\\\\\\"\\\",\\\"\\\\\\\"Return Purse\\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\"]\",\"Rewards List\":\"[\\\"\\\\\\\"+5 NP\\\\\\\"\\\"]\",\"Visible Rewards\":\"[\\\"1\\\"]\",\"Subtext\":\"\"}","Quest 7":"{\"Title\":\"Deliver Package\",\"Type\":\"Good Deeds\",\"Difficulty\":\"\",\"From\":\"\",\"Location\":\"\",\"Description\":\"\",\"Objectives List\":\"[\\\"\\\\\\\"Deliver Package to Whisperwood\\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\"]\",\"Rewards List\":\"[\\\"\\\\\\\"+ 7 NP\\\\\\\"\\\"]\",\"Visible Rewards\":\"[\\\"1\\\"]\",\"Subtext\":\"\"}","Quest 8":"{\"Title\":\"Ghost Hill\",\"Type\":\"Good Deeds\",\"Difficulty\":\"\",\"From\":\"\",\"Location\":\"\",\"Description\":\"\",\"Objectives List\":\"[\\\"\\\\\\\"Find Ghost Hill\\\\\\\"\\\",\\\"\\\\\\\"Find Girl's Dog\\\\\\\"\\\",\\\"\\\\\\\"Bring Dog Home\\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\"]\",\"Rewards List\":\"[\\\"\\\\\\\"+ 10 NP\\\\\\\"\\\"]\",\"Visible Rewards\":\"[\\\"1\\\"]\",\"Subtext\":\"\"}","Quest 9":"{\"Title\":\"Find Hat\",\"Type\":\"Good Deeds\",\"Difficulty\":\"\",\"From\":\"\",\"Location\":\"\",\"Description\":\"\",\"Objectives List\":\"[\\\"\\\\\\\"Find the Man's Hat\\\\\\\"\\\",\\\"\\\\\\\"Return the Hat\\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\"]\",\"Rewards List\":\"[\\\"\\\\\\\"+ 10 NP\\\\\\\"\\\"]\",\"Visible Rewards\":\"[\\\"1\\\"]\",\"Subtext\":\"\"}","Quest 10":"{\"Title\":\"Build a Lantern\",\"Type\":\"Main Quests\",\"Difficulty\":\"\",\"From\":\"\",\"Location\":\"\",\"Description\":\"[\\\"\\\\\\\"This is the \\\\\\\\\\\\\\\\c[4]default\\\\\\\\\\\\\\\\c[0] quest description.\\\\\\\"\\\",\\\"\\\\\\\"This is the \\\\\\\\\\\\\\\\c[4]default\\\\\\\\\\\\\\\\c[0] quest description.\\\\\\\\n\\\\\\\\nYou can insert multiple description entries in case you\\\\\\\\never want to update the quest description midway while the\\\\\\\\nquest is in progress.\\\\\\\"\\\"]\",\"Objectives List\":\"[\\\"\\\\\\\"Get Paper\\\\\\\"\\\",\\\"\\\\\\\"Get Wire\\\\\\\"\\\",\\\"\\\\\\\"Get a Candle\\\\\\\"\\\",\\\"\\\\\\\"Get Dowels\\\\\\\"\\\",\\\"\\\\\\\"Build Lantern\\\\\\\"\\\",\\\"\\\\\\\"Set lantern\\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\",\\\"2\\\",\\\"3\\\",\\\"4\\\"]\",\"Rewards List\":\"[\\\"\\\\\\\"+ 20 NP\\\\\\\"\\\"]\",\"Visible Rewards\":\"[\\\"1\\\"]\",\"Subtext\":\"\"}","Quest 11":"{\"Title\":\"Starman\",\"Type\":\"Main Quests\",\"Difficulty\":\"\",\"From\":\"\",\"Location\":\"\",\"Description\":\"\",\"Objectives List\":\"[\\\"\\\\\\\"Deliver a message to the Observatory\\\\\\\"\\\",\\\"\\\\\\\"Find a flux capacitor\\\\\\\"\\\",\\\"\\\\\\\"Find a REXX book\\\\\\\"\\\",\\\"\\\\\\\"Find some Elbow Grease\\\\\\\"\\\",\\\"\\\\\\\"Gaze at the Stars\\\\\\\"\\\",\\\"\\\\\\\"Return to \\\\\\\\\\\\\\\\N[5]\\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\"]\",\"Rewards List\":\"[\\\"\\\\\\\"+ 30 NP\\\\\\\"\\\"]\",\"Visible Rewards\":\"[\\\"1\\\"]\",\"Subtext\":\"[\\\"\\\\\\\"\\\\\\\"\\\",\\\"\\\\\\\"This is a subtext. It is used as\\\\\\\\nextra text that you may want to\\\\\\\\nplace on your quest journal that\\\\\\\\ndiffers from the description.\\\\\\\"\\\"]\"}","Quest 12":"{\"Title\":\"Deliver Package to Prospector Point\",\"Type\":\"Main Quests\",\"Difficulty\":\"\",\"From\":\"\",\"Location\":\"\",\"Description\":\"\",\"Objectives List\":\"[\\\"\\\\\\\"Deliver Package to Prospector Point\\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\"]\",\"Rewards List\":\"[\\\"\\\\\\\"+10 NP\\\\\\\"\\\"]\",\"Visible Rewards\":\"[\\\"1\\\"]\",\"Subtext\":\"\"}","Quest 13":"{\"Title\":\"Find \\\\N[2]\",\"Type\":\"Main Quests\",\"Difficulty\":\"\",\"From\":\"\",\"Location\":\"\",\"Description\":\"\",\"Objectives List\":\"[\\\"\\\\\\\"Find \\\\\\\\\\\\\\\\N[2]\\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\"]\",\"Rewards List\":\"[\\\"\\\\\\\"+ 100 NP\\\\\\\"\\\"]\",\"Visible Rewards\":\"[\\\"1\\\"]\",\"Subtext\":\"\"}","Quest 14":"{\"Title\":\"Find a way home\",\"Type\":\"Main Quests\",\"Difficulty\":\"\",\"From\":\"\",\"Location\":\"\",\"Description\":\"\",\"Objectives List\":\"[\\\"\\\\\\\"Find a way home\\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\"]\",\"Rewards List\":\"[]\",\"Visible Rewards\":\"\",\"Subtext\":\"\"}","Quest 15":"{\"Title\":\"Get on Nice List\",\"Type\":\"Main Quests\",\"Difficulty\":\"\",\"From\":\"\",\"Location\":\"\",\"Description\":\"\",\"Objectives List\":\"[\\\"\\\\\\\"Go to the North Pole\\\\\\\"\\\",\\\"\\\\\\\"Find Santa Clause\\\\\\\"\\\",\\\"\\\\\\\"Find Dolly\\\\\\\"\\\",\\\"\\\\\\\"Talk to Santa\\\\\\\"\\\",\\\"\\\\\\\"Find Reindeer feed\\\\\\\"\\\",\\\"\\\\\\\"Feed Reindeer\\\\\\\"\\\",\\\"\\\\\\\"Ask Santa to go home.\\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\"]\",\"Rewards List\":\"\",\"Visible Rewards\":\"\",\"Subtext\":\"\"}","Quest 16":"{\"Title\":\"Chocolate Chip\",\"Type\":\"Cookie Quests\",\"Difficulty\":\"\",\"From\":\"\",\"Location\":\"\",\"Description\":\"\",\"Objectives List\":\"[\\\"\\\\\\\"Find Chocolate Chips\\\\\\\"\\\",\\\"\\\\\\\"Return to Baker\\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\"]\",\"Rewards List\":\"[\\\"\\\\\\\"+ 10 NP\\\\\\\"\\\"]\",\"Visible Rewards\":\"[\\\"1\\\"]\",\"Subtext\":\"\"}","Quest 17":"{\"Title\":\"Linzer\",\"Type\":\"Cookie Quests\",\"Difficulty\":\"\",\"From\":\"\",\"Location\":\"\",\"Description\":\"\",\"Objectives List\":\"[\\\"\\\\\\\"Find Raspberry Jam\\\\\\\"\\\",\\\"\\\\\\\"Return to Baker\\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\"]\",\"Rewards List\":\"[\\\"\\\\\\\"+ 10 NP\\\\\\\"\\\"]\",\"Visible Rewards\":\"[\\\"1\\\"]\",\"Subtext\":\"\"}","Quest 18":"{\"Title\":\"Walnut Snowballs\",\"Type\":\"Cookie Quests\",\"Difficulty\":\"\",\"From\":\"\",\"Location\":\"\",\"Description\":\"\",\"Objectives List\":\"[\\\"\\\\\\\"Find Walnuts\\\\\\\"\\\",\\\"\\\\\\\"Return to Baker\\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\"]\",\"Rewards List\":\"[\\\"\\\\\\\"+ 10 NP\\\\\\\"\\\"]\",\"Visible Rewards\":\"[\\\"1\\\"]\",\"Subtext\":\"\"}","Quest 19":"{\"Title\":\"Peanut Butter Blossoms\",\"Type\":\"Cookie Quests\",\"Difficulty\":\"\",\"From\":\"\",\"Location\":\"\",\"Description\":\"\",\"Objectives List\":\"[\\\"\\\\\\\"Find Peanut Butter\\\\\\\"\\\",\\\"\\\\\\\"Find Chocolate Kisses\\\\\\\"\\\",\\\"\\\\\\\"Return to Baker\\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\",\\\"2\\\"]\",\"Rewards List\":\"[\\\"\\\\\\\"+ 10 NP\\\\\\\"\\\"]\",\"Visible Rewards\":\"[\\\"1\\\"]\",\"Subtext\":\"\"}","Quest 20":"{\"Title\":\"Cinnamon Sandies\",\"Type\":\"Cookie Quests\",\"Difficulty\":\"\",\"From\":\"\",\"Location\":\"\",\"Description\":\"\",\"Objectives List\":\"[\\\"\\\\\\\"Find Cinnamon\\\\\\\"\\\",\\\"\\\\\\\"Find Almonds\\\\\\\"\\\",\\\"\\\\\\\"Return to Baker\\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\",\\\"2\\\"]\",\"Rewards List\":\"[\\\"\\\\\\\"+ 10 NP\\\\\\\"\\\"]\",\"Visible Rewards\":\"[\\\"1\\\"]\",\"Subtext\":\"\"}","Quest 21":"{\"Title\":\"Fudge\",\"Type\":\"Cookie Quests\",\"Difficulty\":\"\",\"From\":\"\",\"Location\":\"\",\"Description\":\"\",\"Objectives List\":\"[\\\"\\\\\\\"Find Chocolate Chips\\\\\\\"\\\",\\\"\\\\\\\"Find Condensed Milk\\\\\\\"\\\",\\\"\\\\\\\"Return to Baker\\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\",\\\"2\\\"]\",\"Rewards List\":\"[\\\"\\\\\\\"+ 10 NP\\\\\\\"\\\"]\",\"Visible Rewards\":\"[\\\"1\\\"]\",\"Subtext\":\"\"}","Quest 22":"{\"Title\":\"Pecan Rollup\",\"Type\":\"Cookie Quests\",\"Difficulty\":\"\",\"From\":\"\",\"Location\":\"\",\"Description\":\"\",\"Objectives List\":\"[\\\"\\\\\\\"Find Cream Cheese\\\\\\\"\\\",\\\"\\\\\\\"Find Pecans\\\\\\\"\\\",\\\"\\\\\\\"Return to Baker\\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\",\\\"2\\\"]\",\"Rewards List\":\"[\\\"\\\\\\\"+ 10 NP\\\\\\\"\\\"]\",\"Visible Rewards\":\"[\\\"1\\\"]\",\"Subtext\":\"\"}","Quest 23":"{\"Title\":\"Anise\",\"Type\":\"Cookie Quests\",\"Difficulty\":\"\",\"From\":\"\",\"Location\":\"\",\"Description\":\"\",\"Objectives List\":\"[\\\"\\\\\\\"Find Anise\\\\\\\"\\\",\\\"\\\\\\\"Find Sprinkles\\\\\\\"\\\",\\\"\\\\\\\"Return to Baker\\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\",\\\"2\\\"]\",\"Rewards List\":\"[\\\"\\\\\\\"+ 10 NP\\\\\\\"\\\"]\",\"Visible Rewards\":\"[\\\"1\\\"]\",\"Subtext\":\"\"}","Quest 24":"{\"Title\":\"Marshmallows\",\"Type\":\"Cookie Quests\",\"Difficulty\":\"\",\"From\":\"\",\"Location\":\"\",\"Description\":\"\",\"Objectives List\":\"[\\\"\\\\\\\"Find Gelatin\\\\\\\"\\\",\\\"\\\\\\\"Find Corn Syrup\\\\\\\"\\\",\\\"\\\\\\\"Return to Baker\\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\"]\",\"Rewards List\":\"[\\\"\\\\\\\"+ 10 NP\\\\\\\"\\\"]\",\"Visible Rewards\":\"[\\\"1\\\"]\",\"Subtext\":\"\"}","Quest 25":"{\"Title\":\"Macaron\",\"Type\":\"Cookie Quests\",\"Difficulty\":\"\",\"From\":\"\",\"Location\":\"\",\"Description\":\"\",\"Objectives List\":\"[\\\"\\\\\\\"Find Almond Flour\\\\\\\"\\\",\\\"\\\\\\\"Find Heavy Cream\\\\\\\"\\\",\\\"\\\\\\\"Return to Baker\\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\"]\",\"Rewards List\":\"[\\\"\\\\\\\"+ 10 NP\\\\\\\"\\\"]\",\"Visible Rewards\":\"[\\\"1\\\"]\",\"Subtext\":\"\"}","Quest 26":"{\"Title\":\"Oatmeal\",\"Type\":\"Cookie Quests\",\"Difficulty\":\"\",\"From\":\"\",\"Location\":\"\",\"Description\":\"\",\"Objectives List\":\"[\\\"\\\\\\\"Find Oatmeal\\\\\\\"\\\",\\\"\\\\\\\"Find Raisens\\\\\\\"\\\",\\\"\\\\\\\"Find White Chocolate Chips\\\\\\\"\\\",\\\"\\\\\\\"Return to Baker\\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\"]\",\"Rewards List\":\"[\\\"\\\\\\\"+ 10 NP\\\\\\\"\\\"]\",\"Visible Rewards\":\"[\\\"1\\\"]\",\"Subtext\":\"\"}","Quest 27":"{\"Title\":\"Gingerbread\",\"Type\":\"Cookie Quests\",\"Difficulty\":\"\",\"From\":\"\",\"Location\":\"\",\"Description\":\"\",\"Objectives List\":\"[\\\"\\\\\\\"Find Ginger\\\\\\\"\\\",\\\"\\\\\\\"Find Nutmeg\\\\\\\"\\\",\\\"\\\\\\\"Find Cloves\\\\\\\"\\\",\\\"\\\\\\\"Find Molasses\\\\\\\"\\\",\\\"\\\\\\\"Return to Baker\\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\"]\",\"Rewards List\":\"[\\\"\\\\\\\"+ 10 NP\\\\\\\"\\\"]\",\"Visible Rewards\":\"[\\\"1\\\"]\",\"Subtext\":\"\"}","Quest 28":"","Quest 29":"","Quest 30":"","Quest 31":"","Quest 32":"","Quest 33":"","Quest 34":"","Quest 35":"","Quest 36":"","Quest 37":"","Quest 38":"","Quest 39":"","Quest 40":"","Quest 41":"","Quest 42":"","Quest 43":"","Quest 44":"","Quest 45":"","Quest 46":"","Quest 47":"","Quest 48":"","Quest 49":"","Quest 50":"","Quest 51":"","Quest 52":"","Quest 53":"","Quest 54":"","Quest 55":"","Quest 56":"","Quest 57":"","Quest 58":"","Quest 59":"","Quest 60":"","Quest 61":"","Quest 62":"","Quest 63":"","Quest 64":"","Quest 65":"","Quest 66":"","Quest 67":"","Quest 68":"","Quest 69":"","Quest 70":"","Quest 71":"","Quest 72":"","Quest 73":"","Quest 74":"","Quest 75":"","Quest 76":"","Quest 77":"","Quest 78":"","Quest 79":"","Quest 80":"","Quest 81":"","Quest 82":"","Quest 83":"","Quest 84":"","Quest 85":"","Quest 86":"","Quest 87":"","Quest 88":"","Quest 89":"","Quest 90":"","Quest 91":"","Quest 92":"","Quest 93":"","Quest 94":"","Quest 95":"","Quest 96":"","Quest 97":"","Quest 98":"","Quest 99":"","Quest 100":""}},
{"name":"YEP_RegionRestrictions","status":true,"description":"v1.04 Use regions to block out Events and/or the player from\nbeing able to venture into those spots.","parameters":{"Player Restrict":"0","Event Restrict":"0","All Restrict":"0","Player Allow":"1","Event Allow":"0","All Allow":"0"}},
{"name":"LTN_RemoveMP","status":true,"description":"Remove the MP settings from the entire game.","parameters":{"Remove MP Bar":"true"}},
{"name":"YEP_EventMiniLabel","status":true,"description":"v1.12 Creates miniature-sized labels over events to allow\r\nyou to insert whatever text you'd like in them.","parameters":{"Default Show":"true","Minimum Width":"136","Font Size":"20","X Buffer":"0","Y Buffer":"36","Battle Transition":"false"}},
{"name":"HealthBar","status":true,"description":"HealthBar","parameters":{}}
];
