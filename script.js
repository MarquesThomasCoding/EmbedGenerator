



// Fonction pour convertir le Markdown en HTML
function convertMarkdownToHTML(text) {
    // Remplacez les liens par <a href="url">texte</a>
    text = text.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

    // Remplacez les sauts de ligne par <br>
    text = text.replace(/\n/g, '<br>');

    // Remplacez **texte** par <strong>texte</strong>
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Remplacez *texte* par <em>texte</em>
    text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');

    text = text.replace(/`(.*?)`/g, '<code>$1</code>');
    
    return text;
}


const codePreview = document.querySelector('.code-preview');


// Prévisualisation de la couleur choisie avec l'input color dans la bordure de l'élément embed preview

// Récupération de l'élément embed preview
const preview = document.querySelector('.embed-preview');

// Récupération de l'input color
const color = document.querySelector('#color');
// Ajout d'un écouteur d'événement sur l'input color
color.addEventListener('input', () => {
    // Modification de la bordure de l'élément embed preview
    preview.style.borderColor = color.value;

    if(color.value === '') {
        // Si l'input title est vide, on cache le titre de l'élément code preview
        codePreview.querySelector('.code-preview-color').style.display = 'none';
    }
    else {
        // Sinon, on affiche le titre de l'élément code preview
        codePreview.querySelector('.code-preview-color').style.display = 'inline';
    }

    // Ajout du titre dans le preview du code
    codePreview.querySelector('.code-preview-color').textContent = '"' + color.value + '"';
}
);



// Prévisualisation du titre de l'embed depuis l'input title dans l'élément embed preview

// Récupération de l'input title
const title = document.querySelector('#title');

// Ajout d'un écouteur d'événement sur l'input title
title.addEventListener('input', () => {
    // Modification du titre de l'élément embed preview
    preview.querySelector('.title-preview').textContent = title.value;

    if(title.value === '') {
        // Si l'input title est vide, on cache le titre de l'élément code preview
        codePreview.querySelector('.code-preview-title').style.display = 'none';
    }
    else {
        // Sinon, on affiche le titre de l'élément code preview
        codePreview.querySelector('.code-preview-title').style.display = 'inline';
    }

    // Ajout du titre dans le preview du code
    codePreview.querySelector('.code-preview-title').textContent = '"' + title.value + '"';
}
);



// Prévisualisation de la description de l'embed depuis l'input description dans l'élément embed preview

// Récupération de l'input description
const description = document.querySelector('#description');

// Ajout d'un écouteur d'événement sur l'input description
description.addEventListener('input', () => {
    // Obtenez le contenu du textarea
    const text = description.value;

    // Convertissez le Markdown en HTML
    const htmlText = convertMarkdownToHTML(text);

    // Mettez à jour le contenu de l'élément de prévisualisation avec le texte HTML
    preview.querySelector('.description-preview').innerHTML = htmlText;

    if(description.value === '') {
        // Si l'input title est vide, on cache le titre de l'élément code preview
        codePreview.querySelector('.code-preview-description').style.display = 'none';
    }
    else {
        // Sinon, on affiche le titre de l'élément code preview
        codePreview.querySelector('.code-preview-description').style.display = 'inline';
    }

    // Ajout du titre dans le preview du code
    codePreview.querySelector('.code-preview-description').textContent = '"' + description.value.replace(/\n/g, '\\n') + '"';
});



// Prévisualisation de l'image de l'embed depuis l'input image dans l'élément embed preview

// Récupération de l'input image
const image = document.querySelector('#image-url');

// Ajout d'un écouteur d'événement sur l'input image
image.addEventListener('input', () => {
    if(image.value === '') {
        // Si l'input image est vide, on cache l'image de l'élément embed preview
        preview.querySelector('.image-preview').style.display = 'none';
        codePreview.querySelector('.code-preview-image').style.display = 'none';
    } else {
        // Sinon, on affiche l'image de l'élément embed preview
        preview.querySelector('.image-preview').style.display = 'block';
        codePreview.querySelector('.code-preview-image').style.display = 'inline';
    }
    // Modification de l'image de l'élément embed preview
    preview.querySelector('.image-preview').src = image.value;

    // Ajout de l'image dans le preview du code
    codePreview.querySelector('.code-preview-image').textContent = '"' + image.value + '"';
}
);



// Prévisualisation de l'auteur de l'embed depuis l'input author dans l'élément embed preview

// Récupération de l'input author
const author = document.querySelector('#author-name');

// Ajout d'un écouteur d'événement sur l'input author
author.addEventListener('input', () => {
    // Modification de l'auteur de l'élément embed preview
    preview.querySelector('.author-name-preview').textContent = author.value;

    if(author.value === '') {
        // Si l'input title est vide, on cache le titre de l'élément code preview
        codePreview.querySelector('.code-preview-author-name').style.display = 'none';
    }
    else {
        // Sinon, on affiche le titre de l'élément code preview
        codePreview.querySelector('.code-preview-author-name').style.display = 'inline';
    }

    // Ajout du titre dans le preview du code
    codePreview.querySelector('.code-preview-author-name').textContent = '"' + author.value + '"';
}
);



// Prévisualisation de l'image de l'auteur de l'embed depuis l'input author-image dans l'élément embed preview

// Récupération de l'input author-image
const authorImage = document.querySelector('#author-icon');

// Ajout d'un écouteur d'événement sur l'input author-image
authorImage.addEventListener('input', () => {

    if(authorImage.value === '') {
        // Si l'input author-image est vide, on cache l'image de l'auteur de l'élément embed preview
        preview.querySelector('.author-icon-preview').style.display = 'none';
        codePreview.querySelector('.code-preview-author-icon').style.display = 'none';
    }
    else {
        // Sinon, on affiche l'image de l'auteur de l'élément embed preview
        preview.querySelector('.author-icon-preview').style.display = 'block';
        codePreview.querySelector('.code-preview-author-icon').style.display = 'inline';
    }
    // Modification de l'image de l'auteur de l'élément embed preview
    preview.querySelector('.author-icon-preview').src = authorImage.value;

    // Ajout du titre dans le preview du code
    codePreview.querySelector('.code-preview-author-icon').textContent = '"' + authorImage.value + '"';
}
);



// Prévisualisation du footer de l'embed depuis l'input footer dans l'élément embed preview

// Récupération de l'input footer
const footer = document.querySelector('#footer-content');

// Ajout d'un écouteur d'événement sur l'input footer
footer.addEventListener('input', () => {
    // Modification du footer de l'élément embed preview
    preview.querySelector('.footer-content-preview').textContent = footer.value;

    if(footer.value === '') {
        // Si l'input title est vide, on cache le titre de l'élément code preview
        codePreview.querySelector('.code-preview-footer-content').style.display = 'none';
    }
    else {
        // Sinon, on affiche le titre de l'élément code preview
        codePreview.querySelector('.code-preview-footer-content').style.display = 'inline';
    }

    // Ajout du titre dans le preview du code
    codePreview.querySelector('.code-preview-footer-content').textContent = '"' + footer.value + '"';
}
);



// Prévisualisation de l'image du footer de l'embed depuis l'input footer-image dans l'élément embed preview

// Récupération de l'input footer-image
const footerImage = document.querySelector('#footer-icon');

// Ajout d'un écouteur d'événement sur l'input footer-image
footerImage.addEventListener('input', () => {

    if(footerImage.value === '') {
        // Si l'input footer-image est vide, on cache l'image du footer de l'élément embed preview
        preview.querySelector('.footer-icon-preview').style.display = 'none';
        codePreview.querySelector('.code-preview-footer-icon').style.display = 'none';
    }
    else {
        // Sinon, on affiche l'image du footer de l'élément embed preview
        preview.querySelector('.footer-icon-preview').style.display = 'block';
        codePreview.querySelector('.code-preview-footer-icon').style.display = 'inline';
    }
    // Modification de l'image du footer de l'élément embed preview
    preview.querySelector('.footer-icon-preview').src = footerImage.value;

    // Ajout du titre dans le preview du code
    codePreview.querySelector('.code-preview-footer-icon').textContent = '"' + footerImage.value + '"';
}
);



// Prévisualisation de la date de l'embed depuis l'input timestamp dans l'élément embed preview

// Récupération de l'input timestamp
const timestamp = document.querySelector('#timestamp');

// Ajout d'un écouteur d'événement sur l'input date
timestamp.addEventListener('input', () => {
    // Modification de la date de l'élément embed preview
    preview.querySelector('.timestamp-preview').textContent = '• ' + timestamp.value;

    if(timestamp.value === '') {
        // Si l'input title est vide, on cache le titre de l'élément code preview
        codePreview.querySelector('.code-preview-timestamp').style.display = 'none';
    }
    else {
        // Sinon, on affiche le titre de l'élément code preview
        codePreview.querySelector('.code-preview-timestamp').style.display = 'inline';
    }

    // Ajout du titre dans le preview du code
    codePreview.querySelector('.code-preview-timestamp').textContent = "new Date(" + timestamp.value + ")";
}
);



// Fonction pour ajouter un champ
function addField() {
    // Compter le nombre de field
    const fieldsNb = document.querySelectorAll('.field');
    // Si le nombre de field est supérieur à 5, on arrête la fonction
    if (fieldsNb.length >= 5) {
        return;
    }

    // Création d'un nouvel élément field
    const field = document.createElement('div');
    const fieldCode = document.createElement('span');
    // Ajout de la classe field à l'élément field
    field.classList.add('field');
    field.setAttribute('id', 'field-' + (fieldsNb.length + 1));

    // Ajout de la classe code-preview-field à l'élément field-code
    fieldCode.classList.add('code-preview-field');
    fieldCode.setAttribute("id",'code-preview-field-' + (fieldsNb.length + 1));

    // Ajout du contenu HTML de l'élément field
    field.innerHTML = `
        <input type="text" name="field-name" id="field-name-${fieldsNb.length + 1}" placeholder="Field name">
        <textarea name="field-content" id="field-content-${fieldsNb.length + 1}" placeholder="Field content"></textarea>
    `;

    fieldCode.innerHTML = `{ <span class="attribut">name:</span> <span class="string code-preview-field-name"></span>, <span class="attribut">value:</span> <span class="string code-preview-field-content"></span>},`

    // Récupération de l'élément fields
    const fields = document.querySelector('.fields');
    // Ajout de l'élément field à l'élément fields, avant le div buttons
    fields.insertBefore(field, fields.querySelector('.buttons'));

    codePreview.querySelector('.code-preview-fields').appendChild(fieldCode);

    // Récupération de l'élément fields-preview
    const fieldsPreview = preview.querySelector('.fields-preview');

    // Création d'un nouvel élément field-preview
    const fieldPreview = document.createElement('div');
    // Ajout de la classe field-preview à l'élément field-preview
    fieldPreview.classList.add('field-preview');
    fieldPreview.setAttribute('id', 'field-preview-' + (fieldsNb.length + 1));
    // Ajout du contenu HTML de l'élément field-preview

    fieldPreview.innerHTML = `
        <h4 class="field-name-preview"></h4>
        <p class="field-content-preview"></p>
    `;
    // Ajout de l'élément field-preview à l'élément fields-preview
    fieldsPreview.appendChild(fieldPreview);

    // Ajouter des écouteurs d'événements input aux nouveaux champs
    const newFieldName = field.querySelector(`#field-name-${fieldsNb.length + 1}`);
    const newFieldContent = field.querySelector(`#field-content-${fieldsNb.length + 1}`);

    newFieldName.addEventListener('input', () => {
        // Modification du nom du champ de l'élément embed preview
        updateFieldPreview(fieldsNb.length + 1);
    });

    newFieldContent.addEventListener('input', () => {
        // Modification du contenu du champ de l'élément embed preview
        updateFieldPreview(fieldsNb.length + 1);
    });
}

function removeField() {
    // Récupération de l'élément fields
    const fields = document.querySelector('.fields');
    // Récupération de tous les éléments field
    const fieldElements = fields.querySelectorAll('.field');

    const fieldCodes = document.querySelectorAll('.code-preview-field');
    // Suppression du dernier élément field
    fields.removeChild(fieldElements[fieldElements.length - 1]);
    codePreview.querySelector('.code-preview-fields').removeChild(fieldCodes[fieldCodes.length - 1]);

    // Suppression du dernier élément field-preview
    const fieldsPreview = preview.querySelector('.fields-preview');
    const fieldPreviewElements = fieldsPreview.querySelectorAll('.field-preview');
    fieldsPreview.removeChild(fieldPreviewElements[fieldPreviewElements.length - 1]);
}

// Fonction pour mettre à jour la prévisualisation du champ
function updateFieldPreview(index) {
    const fieldName = document.querySelector(`#field-name-${index}`);
    const fieldContent = document.querySelector(`#field-content-${index}`);
    const fieldPreview = document.querySelector(`#field-preview-${index}`);

    const fieldCode = document.querySelector(`#code-preview-field-${index}`);

    // Modification du nom du champ de l'élément embed preview
    fieldPreview.querySelector('.field-name-preview').textContent = fieldName.value;
    fieldCode.querySelector('.code-preview-field-name').textContent = '"' + fieldName.value + '"';

    // Obtenez le contenu du textarea
    const text = fieldContent.value;

    // Convertissez le Markdown en HTML
    const htmlText = convertMarkdownToHTML(text);

    // Modification du contenu du champ de l'élément embed preview
    fieldPreview.querySelector('.field-content-preview').innerHTML = htmlText;
    fieldCode.querySelector('.code-preview-field-content').textContent = '"' + fieldContent.value.replace(/\n/g, '\\n') + '"';
}


// Prévisualisation du thumbnail de l'embed depuis l'input thumbnail dans l'élément embed preview

// Récupération de l'input thumbnail
const thumbnail = document.querySelector('#thumbnail-url');

// Ajout d'un écouteur d'événement sur l'input thumbnail
thumbnail.addEventListener('input', () => {

    if(thumbnail.value === '') {
        // Si l'input thumbnail est vide, on cache le thumbnail de l'élément embed preview
        preview.querySelector('.thumbnail-preview').style.display = 'none';
        codePreview.querySelector('.code-preview-thumbnail').style.display = 'none';
    }
    else {
        // Sinon, on affiche le thumbnail de l'élément embed preview
        preview.querySelector('.thumbnail-preview').style.display = 'block';
        codePreview.querySelector('.code-preview-thumbnail').style.display = 'inline';
    }
    // Modification du thumbnail de l'élément embed preview
    preview.querySelector('.thumbnail-preview').src = thumbnail.value;

    // Ajout du titre dans le preview du code
    codePreview.querySelector('.code-preview-thumbnail').textContent = '"' + thumbnail.value + '"';
}
);