var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./App.js'); 
var names = require('./names.js');
var httpClient = require('axios');

function render(data) {
    ReactDOM.render(<App items={data.items} now={Date.now()}/>, document.body);
}

function fetchData() {
    return httpClient({ url: 'fake-api.json' });
}

function fetchDataAndRender() {
    fetchData().then(function(resp) {
        render(resp.data);
    });
}

fetchDataAndRender();
setInterval(fetchDataAndRender, 1000);