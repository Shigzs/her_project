// Substitua os títulos e descrições pelos trabalhos reais da artista.
// Para adicionar mídia: defina media como um caminho local e type como 'image' ou 'video'.
const projects = [
  { title: 'A beleza do cotidiano', category: 'fotografia', label: 'Fotografia', description: 'Um espaço para registrar a poesia dos pequenos detalhes do dia a dia.', media: '', type: 'image' },
  { title: 'Histórias de perto', category: 'filmes', label: 'Filme · Direção e gravação', description: 'Um espaço para um filme sobre pessoas, encontros e histórias que merecem ser lembradas.', media: '', type: 'video' },
  { title: 'Entre luz e movimento', category: 'edicao', label: 'Edição de vídeo', description: 'Um espaço para explorar o ritmo, as cores e a sensibilidade de uma edição.', media: '', type: 'video' },
  { title: 'Gente que inspira', category: 'fotografia', label: 'Fotografia · Retratos', description: 'Um espaço para retratos das pessoas que tornam a vida mais bonita.', media: '', type: 'image' },
  { title: 'Dias para guardar', category: 'filmes', label: 'Filme · Memórias', description: 'Um espaço para guardar em movimento aqueles momentos que a gente quer reviver.', media: '', type: 'video' },
  { title: 'Outras formas de sentir', category: 'edicao', label: 'Edição · Experimentação', description: 'Um espaço para experimentos audiovisuais, novas ideias e diferentes maneiras de contar histórias.', media: '', type: 'video' }
];
const gallery = document.querySelector('#gallery');
const dialog = document.querySelector('#project-dialog');
projects.forEach((project, index) => {
  const card = document.createElement('article');
  card.className = 'work-card'; card.dataset.category = project.category;
  const button = document.createElement('button'); button.className = 'work-button';
  button.setAttribute('aria-label', `Ver projeto: ${project.title}`);
  const visual = document.createElement('div'); visual.className = 'work-media blank';
  visual.innerHTML = `<span class="media-number">0${index + 1}</span><span class="placeholder-mark">+</span><span>espaço para ${project.type === 'image' ? 'fotografia' : 'vídeo'}</span><span class="media-type">${project.type === 'image' ? 'FOTOGRAFIA' : '▷ VÍDEO'}</span>`;
  if (project.media && project.type === 'image') { const img = document.createElement('img'); img.src = project.media; img.alt = project.title; img.loading = 'lazy'; img.style.cssText = 'width:100%;height:100%;object-fit:cover;position:absolute;inset:0'; visual.prepend(img); }
  const details = document.createElement('div'); details.className = 'work-details';
  const title = document.createElement('h3'); title.textContent = project.title; details.append(title);
  const indexLabel = document.createElement('span'); indexLabel.textContent = `0${index + 1}`; details.append(indexLabel);
  const category = document.createElement('p'); category.className = 'work-category'; category.textContent = project.label;
  button.append(visual, details, category); card.append(button); gallery.append(card);
  button.addEventListener('click', () => {
    document.querySelector('#dialog-title').textContent = project.title;
    document.querySelector('#dialog-category').textContent = project.label;
    document.querySelector('#dialog-description').textContent = project.description;
    const container = document.querySelector('.dialog-blank');
    container.querySelectorAll('img, video').forEach(media => media.remove());
    container.querySelectorAll('span').forEach(span => span.hidden = !!project.media);
    document.querySelector('#dialog-media-label').textContent = `espaço para ${project.type === 'image' ? 'fotografia' : 'vídeo'}`;
    document.querySelector('.coming-soon').hidden = !!project.media;
    if (project.media) { const media = document.createElement(project.type === 'video' ? 'video' : 'img'); media.src = project.media; if (project.type === 'video') { media.controls = true; media.playsInline = true; } else media.alt = project.title; media.style.cssText = 'width:100%;height:100%;object-fit:contain'; container.append(media); }
    dialog.showModal();
  });
});
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(item => { const selected = item === button; item.classList.toggle('active', selected); item.setAttribute('aria-pressed', String(selected)); });
  let count = 0;
  document.querySelectorAll('.work-card').forEach(card => { card.hidden = button.dataset.filter !== 'todos' && card.dataset.category !== button.dataset.filter; if (!card.hidden) count++; });
  document.querySelector('#result-status').textContent = `${count} trabalhos exibidos.`;
}));
document.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { const box = dialog.getBoundingClientRect(); if (event.target === dialog && (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom)) dialog.close(); });
dialog.addEventListener('close', () => { const video = dialog.querySelector('video'); if (video) video.pause(); });
document.querySelector('#year').textContent = new Date().getFullYear();
