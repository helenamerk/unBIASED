var _ = require('underscore'),
    AYLIENTextAPI = require("aylien_textapi");

var textapi = new AYLIENTextAPI({
    application_id: "d2beb1b8",
    application_key: "e451c045a899c2ba722500722f8712f7"
});

function escapeRegExp(r) {
  return r.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

var titleWeight = 3,
    articleWeight = 1;

textapi.combined({
    url: 'http://www.npr.org/2017/10/27/560231232/women-are-speaking-up-about-harassment-and-abuse-but-why-now',
    endpoint: ['extract', 'concepts']
}, function(err, result) {
  if (err === null) {
    var title;
    var article;
    var concepts;
    _(result.results).each(function(r) {
      if (r.endpoint == 'extract') {
        title = r.result.title;
        article = r.result.article;
      } else if (r.endpoint = 'concepts') {
        concepts = r.result.concepts;
      }
    });
    var cw = _.chain(concepts).map(function(o, c) {
      var w = _.chain(o.surfaceForms).map(function(sf) {
        var e = new RegExp('\\b' + escapeRegExp(sf.string) + '\\b', 'g');
        var inArticle = (article.match(e)  || []).length;
        var inTitle = (title.match(e) || []).length;
        return (inTitle * titleWeight) + (inArticle * articleWeight);
      }).reduce(function(memo, num) { return memo + num; }, 0).value();

      return {'concept': c, 'weight': w};
    }).sortBy(function(i) { return -i.weight; }).value();

    var numKeys = cw.length;

    if(numKeys > 6){
      numKeys = 6;
    }

    var top = [];

    for (i=0; i<numKeys; i++){
      var topicList = cw[i].concept;
      var splitText = topicList.split("/");
      var topicU = (splitText.slice(-1)).pop();
      var topic = topicU.replace(/_/g, " ");
      top.push();
      top[i] = topic;
    }
 
    console.log(top);
  }
});