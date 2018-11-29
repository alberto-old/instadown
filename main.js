// All highlight icons designed by Freepik (www.freepik.com) from Flaticon
function createMarkdownContent() {
  highlights = document.getElementsByClassName('highlight')
  
  highlightsContent = 'data:text/markdown;charset=utf-8,'
  highlightsContent += '# ' + $("title").text() + '\n';
  highlightsContent += '[Reference](' + window.location.href + ')\n';

  for (var i=0; i< highlights.length; i++) {
    highlightsContent += highlights[i].firstChild.textContent + '\n';
  }

  return highlightsContent
}

function createInstadownLink (link) {
  return "<div><span><b><a download='highlights.md' href=" + link + "'>Export to Markdown</a><b></span></div>"
}

function addInstadownbutton () {
  if ($('.origin_line').length) {
    var markdownContent = createMarkdownContent();
    var encodedUri = encodeURI(markdownContent);
    var link = createInstadownLink(encodedUri)
    $('.origin_line').prepend(link);
  }
}


$(document).ready(addInstadownbutton);