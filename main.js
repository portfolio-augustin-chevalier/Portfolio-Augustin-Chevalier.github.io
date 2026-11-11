/* Construit la page à partir de competences.js et projets.js. */
(function () {
  var projets = Array.isArray(window.PROJETS) ? window.PROJETS : [];
  var comps = Array.isArray(window.COMPETENCES) ? window.COMPETENCES : [];
  var projetParId = {}, compParId = {};
  projets.forEach(function (p) { projetParId[p.id] = p; });
  comps.forEach(function (c) { compParId[c.id] = c; });

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function el(id) { return document.getElementById(id); }

  /* Textes de l'interface dans la langue de la page */
  var EN = (document.documentElement.lang || "").slice(0, 2) === "en";
  var T = EN
    ? { objectif: "Goal.", preuves: "Proven by", copie: "Copied", selection: "Select the text" }
    : { objectif: "Objectif.", preuves: "Preuves", copie: "Copié", selection: "Sélectionne le texte" };

  /* Icônes simples, une par compétence */
  var ICONES = {
    conception: '<path d="M3 21l3-1 12-12-2-2L4 18z"/><path d="M14 6l2 2"/>',
    simulation: '<path d="M3 3h18v18H3z"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>',
    rv: '<path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M12 12l9-5M12 12L3 7M12 12v10"/>',
    innovation: '<circle cx="12" cy="12" r="2.5"/><path d="M12 2v6M12 16v6M2 12h6M16 12h6"/>',
    fabrication: '<circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="8"/><path d="M12 1v3M12 20v3M1 12h3M20 12h3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>',
    durable: '<path d="M5 19c0-9 5-14 14-14 0 9-5 14-14 14z"/><path d="M5 19l8-8"/>',
    materiaux: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 12l9 5 9-5"/><path d="M3 16l9 5 9-5"/>',
    mecanique: '<path d="M12 3v13"/><path d="M7 11l5 5 5-5"/><path d="M4 21h16"/>'
  };
  function icone(id) {
    return '<svg viewBox="0 0 24 24" aria-hidden="true">' + (ICONES[id] || ICONES.innovation) + "</svg>";
  }

  /* Outils : tous ceux cités dans les compétences, sans doublon */
  function outils() {
    var vus = {}, liste = [];
    comps.forEach(function (c) {
      (c.outils || []).forEach(function (o) { if (!vus[o]) { vus[o] = 1; liste.push(o); } });
    });
    el("outils").innerHTML = liste.map(function (o) { return '<span class="chip">' + esc(o) + "</span>"; }).join("");
  }

  /* Projets, rangés par catégorie */
  function projetsParCategorie() {
    var cats = Array.isArray(window.CATEGORIES) ? window.CATEGORIES : [];
    var nav = [], blocs = [];
    cats.forEach(function (cat) {
      var liste = projets.filter(function (p) { return p.categorie === cat.id; });
      if (!liste.length) return;
      nav.push('<a class="chip" href="#cat-' + esc(cat.id) + '">' + esc(cat.titre) + "</a>");
      var cartes = liste.map(function (p) {
        var outilsHtml = (p.outils || []).map(function (o) { return '<span class="chip">' + esc(o) + "</span>"; }).join("");
        var media = p.image ? '<figure class="pc-media"><img src="' + esc(p.image) + '" alt="" loading="lazy"></figure>' : "";
        return '<article class="pcard" id="p-' + esc(p.id) + '">' + media +
          '<div class="pc-body"><span class="label">' + esc(p.cadre) + " · " + esc(p.annee) + "</span>" +
          "<h4>" + esc(p.titre) + "</h4>" +
          '<p class="pc-obj"><strong>' + T.objectif + "</strong> " + esc(p.objectif) + "</p>" +
          '<p class="pc-demarche">' + esc(p.demarche) + "</p>" +
          (outilsHtml ? '<div class="chips">' + outilsHtml + "</div>" : "") +
          "</div></article>";
      }).join("");
      blocs.push('<div class="pgroup" id="cat-' + esc(cat.id) + '"><div class="pgroup-head"><h3>' + esc(cat.titre) + "</h3><p>" + esc(cat.accroche) + "</p></div>" +
        '<div class="pgrid">' + cartes + "</div></div>");
    });
    el("projets-nav").innerHTML = nav.join("");
    el("projets-liste").innerHTML = blocs.join("");
  }

  /* Cartes de compétences, avec les projets qui les prouvent */
  function competences() {
    el("comps").innerHTML = comps.map(function (c) {
      var points = (c.points || []).map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("");
      var preuves = (c.preuves || []).map(function (id) { return projetParId[id]; }).filter(Boolean).map(function (p) {
        var titre = '<a class="proof-title" href="#p-' + esc(p.id) + '">' + esc(p.titre) + "</a>";
        var texte = p.objectif;
        return '<li class="proof"><div class="proof-head">' + titre + '</div><p>' + esc(texte) + "</p></li>";
      }).join("");
      var outilsHtml = (c.outils || []).length
        ? '<div class="chips">' + c.outils.map(function (o) { return '<span class="chip">' + esc(o) + "</span>"; }).join("") + "</div>"
        : "";
      var media = c.image
        ? '<figure class="comp-media"><img src="' + esc(c.image) + '" alt="' + esc(c.titre) + '" loading="lazy"></figure>'
        : "";
      return '<article class="comp" id="comp-' + esc(c.id) + '">' + media + icone(c.id) +
        "<h3>" + esc(c.titre) + '</h3><p class="comp-hook">' + esc(c.accroche) + "</p>" +
        '<ul class="points">' + points + "</ul>" + outilsHtml +
        (preuves ? '<h4 class="label">' + T.preuves + '</h4><ul class="proofs">' + preuves + "</ul>" : "") +
        "</article>";
    }).join("");
  }

  /* Copie des coordonnées */
  document.addEventListener("click", function (e) {
    var c = e.target.closest("[data-copy]");
    if (!c) return;
    var restore = c.textContent;
    var fin = function (msg) { c.textContent = msg; setTimeout(function () { c.textContent = restore; }, 1500); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(c.dataset.copy).then(function () { fin(T.copie); }, function () { fin(T.selection); });
    } else { fin(T.selection); }
  });

  /* Bouton clair / sombre : le choix est mémorisé pour les visites suivantes */
  var themeBtn = document.querySelector(".theme-btn");
  function themeActuel() {
    var t = document.documentElement.getAttribute("data-theme");
    if (t) return t;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function majBouton() {
    if (!themeBtn) return;
    var sombre = themeActuel() === "dark";
    themeBtn.setAttribute("aria-label", themeBtn.getAttribute(sombre ? "data-label-light" : "data-label-dark"));
    themeBtn.setAttribute("aria-pressed", sombre ? "true" : "false");
  }
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var suivant = themeActuel() === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", suivant);
      try { localStorage.setItem("theme", suivant); } catch (e) {}
      majBouton();
    });
    majBouton();
  }

  /* Changer de langue en restant au même endroit de la page */
  document.querySelectorAll(".lang a:not([aria-current])").forEach(function (a) {
    a.addEventListener("click", function () { if (location.hash) a.href = a.getAttribute("href") + location.hash; });
  });

  outils();
  projetsParCategorie();
  competences();
})();
