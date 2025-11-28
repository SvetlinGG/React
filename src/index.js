import React from 'react';
import ReactDom from 'react-dom/client';

const rootHtmlElement = document.getElementById('root');
const rootReactElement = ReactDom.createRoot(rootHtmlElement);

const headerElement = React.createElement('h1', {}, 'Hello World!');
const secondHeaderElement = React.createElement('h2', {}, 'The Best Frontend Framework Ever!!')
const headerSectionElement = React.createElement('header', {className: 'site-heading'}, headerElement, secondHeaderElement)
rootReactElement.render(headerSectionElement);

