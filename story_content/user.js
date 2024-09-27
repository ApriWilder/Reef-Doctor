window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var copyText = 'https://phagetosharks.org/'; // Link to copy

var tempInput = document.createElement("input");
document.body.appendChild(tempInput);
tempInput.setAttribute("value", copyText);
tempInput.select();
document.execCommand("copy");
document.body.removeChild(tempInput);
alert("Link copied to clipboard: " + copyText);

}

window.Script2 = function()
{
  // Get the dial value from the Articulate Storyline variable
var player = GetPlayer();
var reefDialValue = player.GetVar("Reef1dial");

// Define feedback message based on the dial value
var feedbackVMR;

if (reefDialValue === 0) {
    feedbackVMR = "Nailed it!";
} else if (reefDialValue === 1) {
    feedbackVMR = "Very good!";
} else if (reefDialValue === 2) {
    feedbackVMR = "You're on the right track...";
} else if (reefDialValue >= 3) {
    feedbackVMR = "Whoops! This reef is microbialized!";
}

// Set the feedback message back into the Storyline variable
player.SetVar("feedbackVMR", feedbackVMR);

}

window.Script3 = function()
{
  // Get the dial value from the Articulate Storyline variable
var player = GetPlayer();
var reefDialValue = player.GetVar("Reef2dial");

// Define feedback message based on the dial value
var feedbackVMR;

if (reefDialValue === 3) {
    feedbackVMR = "Not too shabby!";
} else if (reefDialValue === 4) {
    feedbackVMR = "Nailed it!";
} else if (reefDialValue === 5) {
    feedbackVMR = "Great!";
} else if (reefDialValue === 6) {
    feedbackVMR = "Very good!";
} else if (reefDialValue === 0 || reefDialValue === 1 || reefDialValue === 2) {
    feedbackVMR = "Whoops! This reef is viralized.";
}

// Set the feedback message back into the Storyline variable
player.SetVar("feedbackVMR", feedbackVMR);

}

window.Script4 = function()
{
  // Get the dial value from the Articulate Storyline variable
var player = GetPlayer();
var reefDialValue = player.GetVar("Reef3dial");

// Define feedback message based on the dial value
var feedbackVMR;

if (reefDialValue === 0) {
    feedbackVMR = "Terrific!";
} else if (reefDialValue === 1) {
    feedbackVMR = "Nailed it!";
} else if (reefDialValue === 2) {
    feedbackVMR = "Terrific!";
} else if (reefDialValue === 3) {
    feedbackVMR = "Not bad!";
} else if (reefDialValue === 4 || reefDialValue === 5 || reefDialValue === 6) {
    feedbackVMR = "Whoops! This reef is microbialized...";
}

// Set the feedback message back into the Storyline variable
player.SetVar("feedbackVMR", feedbackVMR);

}

window.Script5 = function()
{
  // Get the dial value from the Articulate Storyline variable
var player = GetPlayer();
var reefDialValue = player.GetVar("Reef4dial");

// Define feedback message based on the dial value
var feedbackVMR;

if (reefDialValue === 0) {
    feedbackVMR = "Nailed it!";
} else if (reefDialValue === 1) {
    feedbackVMR = "Terrific!";
} else if (reefDialValue === 2) {
    feedbackVMR = "Very good!";
} else if (reefDialValue === 3) {
    feedbackVMR = "Whoops. This reef is microbialized...";
} else if (reefDialValue === 4 || reefDialValue === 5 || reefDialValue === 6) {
    feedbackVMR = "Whoops! This reef is microbialized...";
}

// Set the feedback message back into the Storyline variable
player.SetVar("feedbackVMR", feedbackVMR);

}

window.Script6 = function()
{
  // Get the dial value from the Articulate Storyline variable
var player = GetPlayer();
var reefDialValue = player.GetVar("Reef5dial");

// Define feedback message based on the dial value
var feedbackVMR;

if (reefDialValue === 6) {
    feedbackVMR = "Nailed it!";
} else if (reefDialValue === 5) {
    feedbackVMR = "Awesome!";
} else if (reefDialValue === 4) {
    feedbackVMR = "Great!";
} else if (reefDialValue === 3) {
    feedbackVMR = "Not exactly...";
} else if (reefDialValue === 0 || reefDialValue === 1 || reefDialValue === 2) {
    feedbackVMR = "Whoops. This reef is viralized...";
}

// Set the feedback message back into the Storyline variable
player.SetVar("feedbackVMR", feedbackVMR);

}

window.Script7 = function()
{
  // Fetch the user-selected DOC and Oxygen levels from Storyline
let DOCanswer = player.GetVar("DOCanswer");  // Retrieve DOC level
let Oxygenanswer = player.GetVar("Oxygenanswer");  // Retrieve O2 level

// Feedback table for Event 2: Extreme Heat (High Microbialization Table)
const feedbackTable = {
    "0_0": {answeranswer: "hurt", feedback: "Your selection of no oxygen is devastating under extreme heat. Without oxygen supporting viral activity, microbial growth intensifies and will push the reef to extreme microbial dominance."},
    "0_1": {answeranswer: "neutral", feedback: "Low oxygen slightly helps viral predators, but it may not be enough to lessen microbialization. Microbial growth remains high and the reef will suffer."},
    "0_2": {answeranswer: "helped", feedback: "Great choice! Adding oxygen allows viral predators to keep microbial populations in check. The reef is improving."},
    "1_0": {answeranswer: "hurt", feedback: "Adding DOC without oxygen will favor microbial dominance. This choice accelerates microbialization."},
    "1_1": {answeranswer: "neutral", feedback: "Adding some oxygen is not enough to prevent microbial dominance. Microbes still thrive in the heatwave, and the viral predators aren't active enough to counteract them. You're close to stabilizing but need more oxygen and less DOC."},
    "1_2": {answeranswer: "helped", feedback: "Good job! The oxygen will help viral predators control the microbes. The reef shows signs of stabilizing."},
    "2_0": {answeranswer: "hurt", feedback: "Too much DOC without oxygen lets microbes dominate. Viral predators are suppressed, and microbialization increases. The heatwave worsens things, pushing the reef to collapse."},
    "2_1": {answeranswer: "hurt", feedback: "Even with some oxygen, too much DOC still supports microbial growth. The system remains imbalanced as microbial populations grow, and viral predators can't control them."},
    "2_2": {answeranswer: "hurt", feedback: "Adding this oxygen will help the system but the DOC is still too high to help the reef recover from microbialization."}
};

// Construct a key based on DOC and O2 levels to look up feedback
let feedbackKey = `${DOCanswer}_${Oxygenanswer}`;

// Fetch the correct feedback
let feedback = feedbackTable[feedbackKey] || {answeranswer: "neutral", feedback: "No significant change occurred."};

// Send feedback variables to Storyline for display
player.SetVar("answeranswer", feedback.answeranswer);  // Display "helped", "hurt", or "neutral"
player.SetVar("feedback", feedback.feedback);  // Display the feedback message

// Increment the countergame variable
let countergame = player.GetVar("countergame") + 1;
player.SetVar("countergame", countergame);

}

window.Script8 = function()
{
  // Fetch the user-selected DOC and Oxygen levels from Storyline
let DOCanswer = player.GetVar("DOCanswer");  // Retrieve DOC level
let Oxygenanswer = player.GetVar("Oxygenanswer");  // Retrieve O2 level

// Feedback table for Event 2: Medium Microbialization
const mediumMicrobialTable = {
    "0_0": {answeranswer: "hurt", feedback: "In this scenario, no oxygen is dangerous under heat stress. The reef is pushed further into microbialization. Microbial populations dominate, and viral predators cannot function."},
    "0_1": {answeranswer: "neutral", feedback: "While some oxygen is present, it is not enough to allow viruses to control microbial growth. Microbial activity is still thriving under heat stress, and the reef remains imbalanced."},
    "0_2": {answeranswer: "helped", feedback: "Great choice! Adding oxygen improves viral predation. The reef will begin to recover."},
    "1_0": {answeranswer: "hurt", feedback: "Adding DOC but no oxygen exacerbates the issue. Microbial activity dominates under heat stress, and the viral predators are too weak to control them. The reef is heading toward collapse."},
    "1_1": {answeranswer: "neutral", feedback: "Adding some oxygen will help keep things in balance but the DOC will favor microbialization. The heat stress favors microbial growth, and the system remains fragile."},
    "1_2": {answeranswer: "helped", feedback: "Good work! Adding high oxygen will help the viral predators control microbial populations. The reef shows signs of recovery under these conditions."},
    "2_0": {answeranswer: "hurt", feedback: "High DOC and no oxygen allow microbial growth to intensify under the heat. This pushes the reef deeper into microbial dominance, and viral predators are unable to reverse microbialization."},
    "2_1": {answeranswer: "hurt", feedback: "This is a difficult situation. Some oxygen helps viral predators, but the high DOC still fuels microbial growth. You're keeping the reef in its fragile state."},
    "2_2": {answeranswer: "hurt", feedback: "Adding oxygen will support viral predation, but the high DOC will help the microbes fight back."}
};

// Construct a key based on DOC and O2 levels to look up feedback
let feedbackKey = `${DOCanswer}_${Oxygenanswer}`;

// Fetch the correct feedback
let feedback = mediumMicrobialTable[feedbackKey] || {answeranswer: "neutral", feedback: "No significant change occurred."};

// Send feedback variables to Storyline for display
player.SetVar("answeranswer", feedback.answeranswer);  // Display "helped", "hurt", or "neutral"
player.SetVar("feedback", feedback.feedback);  // Display the feedback message

// Increment the countergame variable
let countergame = player.GetVar("countergame") + 1;
player.SetVar("countergame", countergame);

}

window.Script9 = function()
{
  // Fetch the user-selected DOC and Oxygen levels from Storyline
let DOCanswer = player.GetVar("DOCanswer");  // Retrieve DOC level
let Oxygenanswer = player.GetVar("Oxygenanswer");  // Retrieve O2 level

// Feedback table for Event 3: Higher Microbialization
const highMicrobialTable = {
    "0_0": {answeranswer: "hurt", feedback: "Without oxygen, the reef experiences more microbial growth. Even a slight heatwave worsens conditions, and viral predators can’t function effectively."},
    "0_1": {answeranswer: "neutral", feedback: "Low oxygen will somewhat help viral predators to control microbial growth. The reef is stable but slightly more microbialized than it should be. You're close, but more adjustments are needed."},
    "0_2": {answeranswer: "helped", feedback: "Great choice! Adding oxygen helps viral predators keep things balanced and the lack of DOC will hinder microbial growth. You're improving reef health."},
    "1_0": {answeranswer: "hurt", feedback: "This combination favors microbial overgrowth. Adding DOC and no oxygen will promote microbial growth, and the viral predators cannot control the system."},
    "1_1": {answeranswer: "neutral", feedback: "Your choice to add some oxygen will help the reef stabilize, but the DOC will ensure microbialization is still present. You’re close to a better balance, but a small adjustment is needed."},
    "1_2": {answeranswer: "helped", feedback: "Good choice! Adding high oxygen will help viruses keep microbial growth under control. The viral predators are able to prevent the reef from tipping into microbial dominance."},
    "2_0": {answeranswer: "hurt", feedback: "High DOC and no oxygen push the system toward microbial dominance, even under slight heat stress. Viral predators can’t keep up with the microbial growth."},
    "2_1": {answeranswer: "hurt", feedback: "The high DOC is supporting microbial growth, and there isn't enough oxygen to balance things out. The reef is still vulnerable."},
    "2_2": {answeranswer: "hurt", feedback: "Oxygen will increase viral activity, helping to control the microbes, but the addition of DOC will benefit the microbes. The reef is still fragile."}
};

// Construct a key based on DOC and O2 levels to look up feedback
let feedbackKey = `${DOCanswer}_${Oxygenanswer}`;

// Fetch the correct feedback
let feedback = highMicrobialTable[feedbackKey] || {answeranswer: "neutral", feedback: "No significant change occurred."};

// Send feedback variables to Storyline for display
player.SetVar("answeranswer", feedback.answeranswer);  // Display "helped", "hurt", or "neutral"
player.SetVar("feedback", feedback.feedback);  // Display the feedback message

// Increment the countergame variable
let countergame = player.GetVar("countergame") + 1;
player.SetVar("countergame", countergame);

}

window.Script10 = function()
{
  // Fetch the user-selected DOC and Oxygen levels from Storyline
let DOCanswer = player.GetVar("DOCanswer");  // Retrieve DOC level
let Oxygenanswer = player.GetVar("Oxygenanswer");  // Retrieve O2 level

// Feedback table for Shark Exercise scenario (Updated with the new table values)
const sharkExerciseTable = {
    "0_0": {answeranswer: "hurt", feedback: "The absence of oxygen and DOC creates an environment where viral predators can’t function, and microbial respiration can’t proceed. You’re worsening the reef’s collapse."},
    "0_1": {answeranswer: "neutral", feedback: "You’ve added some oxygen but not enough for viral predators to thrive. The reef remains stuck."},
    "0_2": {answeranswer: "helped", feedback: "Great job! By introducing oxygen, viral predators can now start controlling microbes. The oxygen helps balance the reef."},
    "1_0": {answeranswer: "hurt", feedback: "This combination worsens the situation. The DOC increases microbial activity, but there’s no oxygen to sustain viral predators. Microbes will flourish unchecked."},
    "1_1": {answeranswer: "neutral", feedback: "You’re in a better place. Some oxygen helps maintain viral presence, but the addition of DOC creates a fragile balance."},
    "1_2": {answeranswer: "helped", feedback: "Good decision! With oxygen supporting viral predators, you’ve created a balance. Microbial populations are checked, and the reef stabilizes."},
    "2_0": {answeranswer: "hurt", feedback: "You’re pushing the reef toward extreme microbialization. The high DOC feeds microbial overgrowth, but without oxygen, viruses can’t control microbes."},
    "2_1": {answeranswer: "hurt", feedback: "High DOC without enough oxygen favors microbialization. While some oxygen will help viruses kill some microbes, it is not enough to control microbialization."},
    "2_2": {answeranswer: "hurt", feedback: "The oxygen will help viruses keep the microbial population in check, but the DOC is too high and will further support microbial growth."}
};

// Construct a key based on DOC and O2 levels to look up feedback
let feedbackKey = `${DOCanswer}_${Oxygenanswer}`;

// Fetch the correct feedback
let feedback = sharkExerciseTable[feedbackKey] || {answeranswer: "neutral", feedback: "No significant change occurred."};

// Send feedback variables to Storyline for display
player.SetVar("answeranswer", feedback.answeranswer);  // Display "helped", "hurt", or "neutral"
player.SetVar("feedback", feedback.feedback);  // Display the feedback message

// Increment the countergame variable
let countergame = player.GetVar("countergame") + 1;
player.SetVar("countergame", countergame);

}

window.Script11 = function()
{
  // Fetch the user-selected DOC and Oxygen levels from Storyline
let DOCanswer = player.GetVar("DOCanswer");  // Retrieve DOC level
let Oxygenanswer = player.GetVar("Oxygenanswer");  // Retrieve O2 level

// Feedback table for Moderate Microbial Activity scenario
const moderateMicrobialTable = {
    "0_0": {answeranswer: "hurt", feedback: "No oxygen will result in increased hypoxia. Viral predators can’t function effectively, and the reef will continue to suffer."},
    "0_1": {answeranswer: "neutral", feedback: "Adding oxygen helps mitigate some hypoxia, but the reef remains fragile."},
    "0_2": {answeranswer: "helped", feedback: "Great choice! Adding more oxygen gives viral predators the chance to control microbes. The reef is on a path to stability."},
    "1_0": {answeranswer: "hurt", feedback: "Without oxygen, the reef can’t recover from microbial dominance. The DOC drives microbial respiration, worsening hypoxia and pushing the reef toward collapse."},
    "1_1": {answeranswer: "neutral", feedback: "Moderate oxygen provides some balance, but the DOC will keep microbial populations high. The reef remains fragile."},
    "1_2": {answeranswer: "helped", feedback: "Good choice! Viral predators benefit from the oxygen and can keep microbes partly in check. The DOC allows microbial respiration, but not enough to overwhelm the system."},
    "2_0": {answeranswer: "hurt", feedback: "High DOC with no oxygen fuels microbial biomass accumulation, further tipping the reef into microbial dominance. The system is deteriorating."},
    "2_1": {answeranswer: "hurt", feedback: "The DOC promotes microbial respiration, but the limited oxygen hampers viral control. The reef remains vulnerable to collapse."},
    "2_2": {answeranswer: "hurt", feedback: "The oxygen enables viruses to control microbial populations, but the DOC is too high and will support microbial activity."}
};

// Construct a key based on DOC and O2 levels to look up feedback
let feedbackKey = `${DOCanswer}_${Oxygenanswer}`;

// Fetch the correct feedback from the moderate microbialization table
let feedback = moderateMicrobialTable[feedbackKey] || {answeranswer: "neutral", feedback: "No significant change detected."};

// Send feedback variables to Storyline for display
player.SetVar("answeranswer", feedback.answeranswer);  // Display "helped", "hurt", or "neutral"
player.SetVar("feedback", feedback.feedback);  // Display the feedback message

// Increment the countergame variable
let countergame = player.GetVar("countergame") + 1;
player.SetVar("countergame", countergame);

}

window.Script12 = function()
{
  // Fetch the user-selected DOC and Oxygen levels from Storyline
let DOCanswer = player.GetVar("DOCanswer");  // Retrieve DOC level
let Oxygenanswer = player.GetVar("Oxygenanswer");  // Retrieve O2 level

// Feedback table for Slight Increase in Microbial Activity scenario
const slightMicrobialTable = {
    "0_0": {answeranswer: "hurt", feedback: "No oxygen precludes viral activity, favoring microbial overgrowth. This will push the reef toward collapse."},
    "0_1": {answeranswer: "neutral", feedback: "There’s some oxygen to promote viral activity, which will help control microbial populations. The reef is fragile but not worsening."},
    "0_2": {answeranswer: "helped", feedback: "Great choice! Adding oxygen allows viral predators to keep microbial populations in check. The reef is improving."},
    "1_0": {answeranswer: "hurt", feedback: "Low oxygen hinders viral control, and the DOC fuels microbial respiration. The reef will move towards collapse."},
    "1_1": {answeranswer: "neutral", feedback: "This combination provides enough oxygen for viral predators though the DOC may cause the reef to remain fragile."},
    "1_2": {answeranswer: "helped", feedback: "Good job! Adding oxygen will give viral predators a chance to control microbial populations. The reef is improving."},
    "2_0": {answeranswer: "hurt", feedback: "The high DOC without oxygen pushes microbial growth too far. Without oxygen, the viral predators can’t control the system, worsening the reef’s condition."},
    "2_1": {answeranswer: "hurt", feedback: "The DOC promotes microbial respiration, but the low oxygen level keeps viral predators from functioning effectively. The reef remains at risk."},
    "2_2": {answeranswer: "hurt", feedback: "The oxygen helps viruses to control microbial populations but the DOC is still high enough to promote microbial growth."}
};

// Construct a key based on DOC and O2 levels to look up feedback
let feedbackKey = `${DOCanswer}_${Oxygenanswer}`;

// Fetch the correct feedback from the slight microbial table
let feedback = slightMicrobialTable[feedbackKey] || {answeranswer: "neutral", feedback: "No significant change detected."};

// Send feedback variables to Storyline for display
player.SetVar("answeranswer", feedback.answeranswer);  // Display "helped", "hurt", or "neutral"
player.SetVar("feedback", feedback.feedback);  // Display the feedback message

// Increment the countergame variable
let countergame = player.GetVar("countergame") + 1;
player.SetVar("countergame", countergame);

}

window.Script13 = function()
{
  // Fetch the user-selected DOC and Oxygen levels from Storyline
let DOCanswer = player.GetVar("DOCanswer");  // Retrieve DOC level
let Oxygenanswer = player.GetVar("Oxygenanswer");  // Retrieve O2 level

// Feedback table for Scenario 1: "Phages Overreact, Causing Viral Dominance"
const feedbackTable = {
    "0_0": {answeranswer: "hurt", feedback: "Without DOC and oxygen to support microbial growth, the phages cannot infect their hosts. However, the lack of oxygen also hurts the coral animals."},
    "0_1": {answeranswer: "hurt", feedback: "Adding some oxygen will help microbial respiration, but with so many phages around, beneficial microbes cannot recover."},
    "0_2": {answeranswer: "neutral", feedback: "Moderate recovery: Higher oxygen helps beneficial microbes respire but the absence of DOC means beneficial microbes are too weak to fight back effectively."},
    "1_0": {answeranswer: "hurt", feedback: "More oxygen is needed to support respiration in beneficial microbes. The system remains dangerously imbalanced, leaning toward phage dominance."},
    "1_1": {answeranswer: "neutral", feedback: "Balanced but fragile: The viral predators are active, but the minimal DOC isn’t enough to support recovery of beneficial microbes. You’ve stabilized the reef slightly, but more balance is needed."},
    "1_2": {answeranswer: "helped", feedback: "Great decision! The combination of oxygen and low DOC helps support beneficial microbes, balancing viral predators and microbial populations."},
    "2_0": {answeranswer: "hurt", feedback: "Too little oxygen: High DOC without oxygen tips the system toward instability by helping microbial pathogens, pushing the reef toward collapse."},
    "2_1": {answeranswer: "neutral", feedback: "Moderate oxygen helps beneficial microbes recover, keeping viral predators in check, but the DOC may be high enough to support microbial pathogens. The reef needs more balance."},
    "2_2": {answeranswer: "helped", feedback: "Good job! High DOC and oxygen are balancing the system by supporting the growth of beneficial microbes, helping them fight off viral predators."}
};

// Construct a key based on DOC and O2 levels to look up feedback
let feedbackKey = `${DOCanswer}_${Oxygenanswer}`;

// Fetch the correct feedback
let feedback = feedbackTable[feedbackKey] || {answeranswer: "neutral", feedback: "No significant change occurred."};

// Send feedback variables to Storyline for display
player.SetVar("answeranswer", feedback.answeranswer);  // Display "helped", "hurt", or "neutral"
player.SetVar("feedback", feedback.feedback);  // Display the feedback message

// Increment the countergame variable
let countergame = player.GetVar("countergame") + 1;
player.SetVar("countergame", countergame);

}

window.Script14 = function()
{
  // Fetch the user-selected DOC and Oxygen levels from Storyline
let DOCanswer = player.GetVar("DOCanswer");  // Retrieve DOC level
let Oxygenanswer = player.GetVar("Oxygenanswer");  // Retrieve O2 level

// Feedback table for Scenario 2: "Phages cause a mass die-off of microbes, leading to excess DOC and oxygen depletion"
const feedbackTable = {
    "0_0": {answeranswer: "hurt", feedback: "Severe collapse: No oxygen leaves the reef in a state of extreme hypoxia."},
    "0_1": {answeranswer: "hurt", feedback: "Low oxygen will help the reef, and the lack of added DOC may slow down the phage-feeding pathogens."},
    "0_2": {answeranswer: "helped", feedback: "Higher oxygen is helping mitigate coral hypoxia. Soon the pathogens will run out of phages to eat, and the reef will begin to recover."},
    "1_0": {answeranswer: "hurt", feedback: "Hypoxia worsens: Low oxygen paired with some DOC worsens the collapse. Coral pathogens are feasting on the DOC and phages, killing the reef."},
    "1_1": {answeranswer: "hurt", feedback: "Some oxygen will support the coral, but adding DOC will further feed the coral pathogens."},
    "1_2": {answeranswer: "hurt", feedback: "Adding oxygen will support the coral, but the DOC will enable the coral pathogens to continue causing disease."},
    "2_0": {answeranswer: "hurt", feedback: "Hypoxia intensifies: The reef is nearing collapse due to a lack of oxygen. High DOC continues to support the phage-feeding coral pathogens."},
    "2_1": {answeranswer: "hurt", feedback: "High DOC with low oxygen leads to further destabilization. The reef is still collapsing without enough oxygen, and the overabundance of coral pathogens."},
    "2_2": {answeranswer: "hurt", feedback: "High DOC continues to support the phage-feeding coral pathogens, even if oxygen is high enough to support coral survival."}
};

// Construct a key based on DOC and O2 levels to look up feedback
let feedbackKey = `${DOCanswer}_${Oxygenanswer}`;

// Fetch the correct feedback
let feedback = feedbackTable[feedbackKey] || {answeranswer: "neutral", feedback: "No significant change occurred."};

// Send feedback variables to Storyline for display
player.SetVar("answeranswer", feedback.answeranswer);  // Display "helped", "hurt", or "neutral"
player.SetVar("feedback", feedback.feedback);  // Display the feedback message

// Increment the countergame variable
let countergame = player.GetVar("countergame") + 1;
player.SetVar("countergame", countergame);

}

window.Script15 = function()
{
  // Fetch the user-selected DOC and Oxygen levels from Storyline
let DOCanswer = player.GetVar("DOCanswer");  // Retrieve DOC level
let Oxygenanswer = player.GetVar("Oxygenanswer");  // Retrieve O2 level

// Feedback table for Scenario 3: "Phages Mutate, Increasing Resistance"
const feedbackTable = {
    "0_0": {answeranswer: "hurt", feedback: "Complete vulnerability: No oxygen pushes the reef toward severe hypoxia and collapse."},
    "0_1": {answeranswer: "hurt", feedback: "Minimal oxygen isn’t enough to induce prophages. The reef’s condition continues to deteriorate."},
    "0_2": {answeranswer: "helped", feedback: "Adding oxygen but no DOC will make some prophages decide to activate, thereby killing their host bacteria. The reef may begin to recover."},
    "1_0": {answeranswer: "hurt", feedback: "Some DOC is present, but low oxygen means prophages will stay with their host bacteria, pushing the reef further toward collapse."},
    "1_1": {answeranswer: "hurt", feedback: "Moderate DOC and low oxygen promote growth in lysogenic bacteria, supporting prophages that help cause coral disease. More intervention is needed to support recovery."},
    "1_2": {answeranswer: "helped", feedback: "Adding oxygen and little DOC will make some prophages decide to activate, thereby killing their host bacteria. The reef may begin to recover."},
    "2_0": {answeranswer: "hurt", feedback: "High DOC without oxygen allows microbial pathogens to strengthen and the coral animal lacks oxygen. The reef is nearing collapse without further intervention."},
    "2_1": {answeranswer: "hurt", feedback: "Some oxygen will help stabilize the reef, but high DOC will favor microbial predators with piggybacking prophages. The reef is still vulnerable to microbialization."},
    "2_2": {answeranswer: "hurt", feedback: "Too much DOC will make piggybacking phages too comfortable in their coalition with pathogenic hosts. Prophages must be excised and kill their hosts or the reef will collapse."}
};

// Construct a key based on DOC and O2 levels to look up feedback
let feedbackKey = `${DOCanswer}_${Oxygenanswer}`;

// Fetch the correct feedback
let feedback = feedbackTable[feedbackKey] || {answeranswer: "neutral", feedback: "No significant change occurred."};

// Send feedback variables to Storyline for display
player.SetVar("answeranswer", feedback.answeranswer);  // Display "helped", "hurt", or "neutral"
player.SetVar("feedback", feedback.feedback);  // Display the feedback message

// Increment the countergame variable
let countergame = player.GetVar("countergame") + 1;
player.SetVar("countergame", countergame);

}

};
