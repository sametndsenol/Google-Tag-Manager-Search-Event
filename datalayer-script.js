(function () {
  var productElements = document.querySelectorAll('.py-2 .font-semibold.line-clamp-1');
  var params = new URLSearchParams(window.location.search);
  var action = params.get('q') || '';

  for (var i = 0; i < productElements.length && i < 5; i++) {
    var name = productElements[i].textContent.trim();
    if (name) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'search_advanced',
        action: action,
        label: name,
        category: 'search result',
        value: 1
      });
    }
  }
})();