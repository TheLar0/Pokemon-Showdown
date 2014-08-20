const messages = [

        "used Explosion!",
        "was swallowed up by the Earth!",
        "has left the building.",
        "got rekt.",
        "was Bullet Punched by Sciz!",
        "was slapped by Catnipz!",
        "was lynched by Ninja for crimes against humanity!",
        "recieved punishment from the Almighty Pokemaster!",
        "was hit by Mewderator's ban hammer!",
        "got sat on by AlphaDraconis",
        "was Whirlwinded away by a Skarmory",
        "fell into the Void",
        "was told to leave the server.",
        "was aboosed by Aeternis!",
        "was drop kicked by Mike!",
        "fell victim to DT's wise words.",
        "was bored to death by the server's bad grammar.",
        "got lost in the woods!",
        "left for their lover!",
        "was hit by Magikarp's Revenge!",
        "was sucked into a whirlpool!",
        "got scared and left the server!",
        "ventured too deep into Rock Tunnel without an escape rope",
        "woke up an angry Snorlax!",
        "was used as shark bait!",
        "peered through the hole on Shedinja's back",
        "received judgment from the almighty Arceus!",
        "used Final Gambit, but it missed!",
        "went into grass without any Pokemon!",
        "got lost in the illusion of reality.",
        "ate a bomb!",
        "left for a timeout!",
        "fell into a snake pit!",
        "was kicked by an anonymous user! #BlameSciz",
        "felt the wrath of Igglybuff!",
        "looked into the eyes of Sciz D:!",
        "got eaten by Sempiternus!", //Sempiternus'
        "got hit by Sheer Cold!", //Sempiternus'
        "tried to solve the theory of relativity!", //Sempiternus' 
        "saw Sunkern's true form!", //Sempiternus'
        "was told to leave by Phoebus Apollo!", //Phoebus Apollo's
        "was oppressed by Aeternis!", //Phoebus Apollo's
        "skipped leg day!", //Terlor's
        "was /imped by Mew!", //Terlor's
        "was sent to Hades by Phoebus Apollo!", //Phoebus Apollo's
        "was Crabhammered by a Kingler!", //Phoebus Apollo's
        "was assaulted by a wild trachy!", //Terlor's
        "tried to steal DT's food!", //Terlor's
         "went to the real world!", //NonePiece
        "met a Mega Slowbro in a dark alley!", //NonePiece
        "angered a Crawdaunt!", //NonePiece
        "went to look at teh pr0nz!", //NonePiece


];

exports.commands = {
	d: 'poof',
 	cpoof: 'poof',
	poof: function (target, room, user) {
		if (Config.poofOff) return this.sendReply("Poof is currently disabled.");
		if (target && !this.can('broadcast')) return false;
		if (room.id !== 'lobby') return false;
		var message = target || messages[Math.floor(Math.random() * messages.length)];
		if (message.indexOf('{{user}}') < 0)
			message = '{{user}} ' + message;
		message = message.replace(/{{user}}/g, user.name);
		if (!this.canTalk(message)) return false;

		var colour = '#' + [1, 1, 1].map(function () {
			var part = Math.floor(Math.random() * 0xaa);
			return (part < 0x10 ? '0' : '') + part.toString(16);
		}).join('');

		room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Tools.escapeHTML(message) + ' ~~</font></strong></center>');
		user.disconnectAll();
	},

	poofoff: 'nopoof',
	nopoof: function () {
		if (!this.can('poofoff')) return false;
		Config.poofOff = true;
		return this.sendReply("Poof is now disabled.");
	},

	poofon: function () {
		if (!this.can('poofoff')) return false;
		Config.poofOff = false;
		return this.sendReply("Poof is now enabled.");
	}
};
