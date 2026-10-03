
  function filtrar(tag, botao) {
    document.querySelectorAll('.filtros button').forEach(b => b.classList.remove('ativo'));
    botao.classList.add('ativo');

    document.querySelectorAll('.item').forEach(item => {
      if (tag === 'todos' || item.dataset.tag === tag) {
        item.classList.remove('escondido');
      } else {
        item.classList.add('escondido');
      }
    });
  }

  function abrir(src) {
    document.getElementById('lightboxImg').src = src;
    document.getElementById('lightbox').classList.add('aberto');
  }

  function fechar() {
    document.getElementById('lightbox').classList.remove('aberto');
  }
