javascript:(function() {     var letter=o    var color=white    var container = document.createElement(%27div%27);    document.body.appendChild(container);    container.style.position = %27fixed%27;    container.style.top = %270%27;    container.style.left = %270%27;    container.style.width = %27100%%27;    container.style.height = %27100%%27;    container.style.overflow = %27hidden%27;    container.style.pointerEvents = %27none%27;    function init() {        var injection = document.createElement(%27style%27);        document.body.appendChild(injection);        injection.innerHTML = %27@-webkit-keyframes snow {\nfrom {top:-1%;}\nto{top:121%;}}\n@-moz-keyframes snow {\nfrom {top: -1%;}\nto {top: 121%;}\n}%27;    }    init();    window.setInterval(createParticle, 200);    timeChoices = [5, 6, 7, 8, 9, 10];    function destroy(evt) {        container.removeChild(evt.target);    }    function createParticle() {        var particle = document.createElement(%27span%27);        var randomSpeed = timeChoices[Math.floor(Math.random() * timeChoices.length)];        particle.innerHTML = letter;        particle.className = %27flake%27;        particle.style.position = %27absolute%27;        particle.style.color = color;        particle.style.backgroundColor = %27transparent%27;        particle.style.width = %275px%27;        particle.style.height = %275px%27;        particle.style.pointerEvents = %27none%27;        particle.style.right = Math.random() * 100 + %27%%27;        particle.style.borderRadius = %2750%%27;        particle.style.WebkitAnimation = %27snow %27 + randomSpeed + %27s linear%27;         particle.style.MozAnimation = %27snow %27 + randomSpeed + %27s linear%27;        container.appendChild(particle);        particle.addEventListener(%27webkitAnimationEnd%27, destroy);         particle.addEventListener(%27AnimationEnd%27, destroy);    }})()