/*
Ryan Walters
03/14/2013
Project 2
What shopping is like with me and my friends!
*/

var greeting = "Hey! Lets stop in at Spencers first.",
	storesvisited = 3,
	lunchTime = true,
	skiplunch = false,
	time = 3,
	myName = "Ryan",
	friendname = "Brandon",
	peoplesummary;
	storesvisitedsofar = 1;
	typeofstores = ["clothing", "shoes", "accessories"];

var output = function(out)
{
	console.log(out);
};
var findanewstore = function(newstore)
{
	if(newstore == true)
	{
		console.log("We decided to stop in at HotTopic! We walked from Spencers to HotTopic.");
	}
	else
	{
		console.log("We'll stay at Spencers and look around.");
	};
};

var storesvisitedhere = function(storesvisited)
{
	if(storesvisited < 3)
	{
		var newstore = true;
		findanewstore(newstore);
	}
	else
	{
		var newstore = false;
		findanewstore(newstore);
	};
};

var lunch = function(boughtfood)
{
	if(hour < 2 && hour > 1 && boughtfood == true)
	{
		lunchtime = true;
	}
	else
	{
		lunchtime = false;
	};
	return(lunchTime);
};

var buybracelet = function(buybracelet)
{
	output("Buying a new silver skull bracelet at Spencers. Matching necklace needs to be found. ");
	var matchingnecklace = 0;
	while(bracelet > 1)
	{
		bracelete--;
		matchingnecklace++;

		output("I have found" + matchingnecklace + "matching necklaces" + fishToKeep + "got a bracelet.");



	};
	storesvisited = bracelet;
	return(storesvisited);
};

var whosatthestore = function(me,friend)
{
	var noshow = "Tina";
	peopleSummary = me + ", " + friend + ", and Brandon where the ones shopping today. " + noShow + " sadly didn't make it";

	return(peopleSummary);
};

var whattypeofstores = function(numberofstores,typesofstores)
{
	for (var diftypesofstores = numberofstores; diftypesstore >= 0 && diftypesofstore <= 2; diftypesofstores--) 
	{
		storesvisitedsofar++;
		output("we have gone to " + storesvisitedsofar + " store and  " + storesvisitedsofar]);
	};
	return(storesvisitedsofar);
};

output(greeting);
if(myName || friendName == "Ryan")
{
	output("shopping with Ryan!");
}
output("So far we have been to" + storesvisited + " stores.");
Storesvistedsofar(storesvisted);
lunch(time,skiplunch);

if(storesvisited > 0)
{
	movetoanotherstore(storesvisited);
}
else
{
	output("Ugh, I guess we wont be buying anything today.");
};

whosallshopping(myname,friendname);
typeofstores(3,typeofstores);
output(peopleSummary + "she missed " + storesvisited + " shopping!");


if(lunchTime == true)
{
	output("Now we have some nice things to ware for dinner tonight!");
}
else
{
	output("guess we can find something we already have to ware.");
};
output("We went to " + storesvisited + " store and got all our shopping done.");