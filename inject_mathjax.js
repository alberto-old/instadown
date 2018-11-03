function addMathJax () {  
  var mathjax_config = document.createElement('script');
  mathjax_config.type = 'text/x-mathjax-config'
  mathjax_config.text = 'MathJax.Hub.Config({tex2jax: {inlineMath: [["$","$"], ["\\(","\\)"]]}});'
  document.documentElement.appendChild(mathjax_config);

  var mathjax = document.createElement('script');
  mathjax.type = 'text/javascript';
  mathjax.async = true;
  mathjax.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_SVG';
  document.documentElement.appendChild(mathjax);
}

addMathJax()