var data = {
    quantidade: 6,
    itens: [
        {
            nome: 'Mario Jump',
            imagemIcon: './images/projects/mario-jump-icon.png',
            imagemCard: './images/projects/mario-jump-card.png',
            linkGitHub: 'https://github.com/NianCode/mario-jump',
            linkPreview: 'https://nian-code.web.app/mariojump'
        },
        {
            nome: 'Rough Bot',
            imagemIcon: './images/projects/rough-bot-icon.png',
            imagemCard: './images/projects/rough-bot-card.png',
            linkGitHub: 'https://github.com/NianCode/rough-bot',
            linkPreview: 'https://github.com/NianCode/rough-bot'
        }
    ]
};

var aside = document.querySelector('aside');
var icons = document.querySelectorAll('.pItens');
var btnIcons = document.querySelectorAll('.btnItens');
var containerProjetos = document.querySelector('.containerProjetos');

//  //
//  //
//  //
//  //

for (var i = 0; i < data.quantidade; i++) {
    // Cria o item
    var item = document.createElement('div');
    item.classList.add('pItens');

    // Cria o elemento para o nome
    var nomeElement = document.createElement('div');
    var nome = data.itens[i] && data.itens[i].nome ? data.itens[i].nome : `...`;
    nomeElement.textContent = nome; // Adiciona o nome ao elemento .pItens
    item.appendChild(nomeElement); // Adiciona o nome ao item

    // Cria o botão de preview
    var btnPreview = document.createElement('button');
    btnPreview.type = 'button';
    btnPreview.classList.add('btnItens');
    btnPreview.textContent = 'Preview';

    // Cria o botão de GitHub
    var btnGitHub = document.createElement('button');
    btnGitHub.type = 'button';
    btnGitHub.classList.add('btnItens');
    btnGitHub.textContent = 'GitHub';

    // Adiciona os botões ao item
    item.appendChild(btnPreview);
    item.appendChild(btnGitHub);

    // Se o link de preview existir, adiciona o link ao botão
    if (data.itens[i] && data.itens[i].linkPreview) {
        btnPreview.addEventListener('click', createClickHandler(data.itens[i].linkPreview));
    }

    // Se o link do GitHub existir, adiciona o link ao botão
    if (data.itens[i] && data.itens[i].linkGitHub) {
        btnGitHub.addEventListener('click', createClickHandler(data.itens[i].linkGitHub));
    }

    // Adiciona o item ao container
    containerProjetos.appendChild(item);

    item.addEventListener('mouseover', createMouseoverHandler(i));

    var style = document.createElement('style');

    if (data.itens[i] && data.itens[i].imagemIcon) {
        style.innerHTML = `
        .pItens:nth-child(${i + 1})::before {
            background-image: url(${data.itens[i].imagemIcon});
        }
        `;
        document.head.appendChild(style);
    }
}

function createClickHandler(link) {
    return function () {
        window.open(link, '_blank');
    };
}

function createMouseoverHandler(i) {
    return function () {
        // Se a imagem do card existe, define a imagem de fundo do elemento aside
        if (data.itens[i] && data.itens[i].imagemCard) {
            aside.style.backgroundImage = 'url(' + data.itens[i].imagemCard + ')';
        } else {
            aside.style.backgroundImage = '';
        }

        document.head.appendChild(style);
    };
}