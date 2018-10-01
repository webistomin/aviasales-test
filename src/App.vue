<template>
  <div id="app">
    <header class="page-header" role="banner">
      <picture>
        <source type="image/webp" srcset="../static/logo@1x.webp 1x, ../static/logo@2x.webp 2x">
        <img class="page-header__logo" width="78" height="85" src="../static/logo@1x.png" srcset="../static/logo@2x.png 2x" alt="Aviasales">
      </picture>
    </header>
    <main class="page-content" role="main">
      <div class="container">
        <filters></filters>
        <tickets></tickets>
      </div>
    </main>
    <ul>
      <li v-for="ticket of tickets">
        {{ticket.destination_name}}
        {{ticket.stops}}
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios';
  import Filters from './components/Filters';
  import Tickets from './components/Tickets';

  export default {
    name: 'app',
    components: {
      Filters,
      Tickets,
    },
    data() {
      return {
        tickets: [],
      };
    },
    mounted() {
      axios
        .get('http://localhost:3000/tickets')
        .then((response) => {
          this.tickets = response.data;
        });
    },
  };
</script>

<style>
  /* open-sans-regular - latin_cyrillic */
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-display: optional;
    src: local('Open Sans Regular'), local('OpenSans-Regular'),
    url('../static/fonts/open-sans-v15-latin_cyrillic-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
    url('../static/fonts/open-sans-v15-latin_cyrillic-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* open-sans-600 - latin_cyrillic */
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-display: optional;
    src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'),
    url('../static/fonts/open-sans-v15-latin_cyrillic-600.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
    url('../static/fonts/open-sans-v15-latin_cyrillic-600.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  body {
    margin: 0;
    font-family: 'Open Sans', 'Arial', sans-serif;
    font-weight: 400;
    background-color: #f3f7fa;
  }


  img {
    max-width: 100%;
    height: auto;
    vertical-align: top;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  blockquote {
    margin: 0;
  }

  p {
    margin: 0;
  }

  button {
    padding: 0;
    border: none;
    background-color: transparent;
  }

  *:focus {
    outline: thin dotted;
  }

  .page-header {
    padding-top: 50px;
    padding-bottom: 50px;
    text-align: center;
  }

  .container {
    width: 93.75%;
    margin: 0 auto;
    max-width: 818px;
  }

  @media (min-width: 900px) {
    .container {
      display: flex;
      align-items: flex-start;
    }
  }
</style>
