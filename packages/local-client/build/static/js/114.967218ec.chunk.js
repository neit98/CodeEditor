(this.webpackJsonpjbook=this.webpackJsonpjbook||[]).push([[114],{290:function(a,e){!function(a){a.languages.ejs={delimiter:{pattern:/^<%[-_=]?|[-_]?%>$/,alias:"punctuation"},comment:/^#[\s\S]*/,"language-javascript":{pattern:/[\s\S]+/,inside:a.languages.javascript}},a.hooks.add("before-tokenize",(function(e){a.languages["markup-templating"].buildPlaceholders(e,"ejs",/<%(?!%)[\s\S]+?%>/g)})),a.hooks.add("after-tokenize",(function(e){a.languages["markup-templating"].tokenizePlaceholders(e,"ejs")})),a.languages.eta=a.languages.ejs}(Prism)}}]);
//# sourceMappingURL=114.967218ec.chunk.js.map