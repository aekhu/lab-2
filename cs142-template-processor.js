'use strict';
function Cs142TemplateProcessor(template) {
	this.template = template;
}
Cs142TemplateProcessor.prototype.fillIn = function(dictionary) {
	console.log(dictionary["month"])
	var res = this.template;
	var r = /{{[^{]*}}/g;
	var match = this.template.match(r);
	var pre, key, after;
	for (var i = 0; i < match.length; i++) {
		
		pre = match[i];
		key = pre.replace("{{", "");
		key = key.replace("}}", "");
		after = dictionary[key] || '';
		res = res.replace(pre, after);
		
	}
	return res;
};