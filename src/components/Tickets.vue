<template>
  <section class="tickets">
    <ul class="tickets__list">
      <li class="tickets__item"
          v-for="ticket of getTickets"
          v-if="$store.getters.getCheckedCheckboxes.includes(ticket.stops)">
        <div class="tickets__actions">
          <a :href="getCompanyLink(ticket.carrier)"
             target="_blank"
             rel="noopener nofollow"
             class="tickets__link">
            <picture>
              <img class="tickets__img" width="120" height="35"
                   :src="getCompanyLogotype(ticket.carrier)"
                   :srcset="`${getCompanyLogotype(ticket.carrier, true)} 2x`"
                   :alt="ticket.carrier">
            </picture>
          </a>
          <button class="tickets__btn">Купить<br>за
            <span class="tickets__price">
              {{getPriceInCurrency(ticket.price)}}
              <span class="tickets__currency"
                    ref="currency">{{currency}}</span>
            </span>
          </button>
        </div>
        <div class="tickets__info">
          <div class="tickets__block">
            <time class="tickets__time">{{ticket.departure_time}}</time>
            <p class="tickets__address">
              <span class="tickets__code">{{ticket.origin}}</span>
              ,&nbsp;
              <span class="tickets__city">{{ticket.origin_name}}</span>
            </p>
            <time class="tickets__date" datetime="09-10-2018">
              {{ticket.departure_date | formatDate}}
            </time>
          </div>
          <div class="tickets__stops">
            <p class="tickets__text">
              <span class="tickets__counter">{{ticket.stops}}</span>&nbsp;{{getCorrectWordEnding(ticket.stops, ['пересадка', 'пересадки', 'пересадок'])}}</p>
          </div>
          <div class="tickets__block">
            <time class="tickets__time">{{ticket.arrival_time}}</time>
            <p class="tickets__address">
              <span class="tickets__city">{{ticket.destination_name}}</span>
              ,&nbsp;
              <span class="tickets__code">{{ticket.destination}}</span>
            </p>
            <time class="tickets__date" datetime="10-10-2018">
              {{ticket.arrival_date | formatDate}}
            </time>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
  import moment from 'moment';

  export default {
    data() {
      return {
        currency: '',
      };
    },
    mounted() {
      this.$store.dispatch('getTicketsFromServer');
      this.$store.dispatch('getCurrencyRate');
      this.currency = this.$refs.currency;
    },
    methods: {
      getCorrectWordEnding(number, word) {
        const cases = [2, 0, 1, 1, 1, 2];
        return word[(number % 100 > 4 && number % 100 < 20) ?
          2 :
          cases[(number % 10 < 5) ? number % 10 : 5]];
      },
      getCompanyLogotype(company, isRetina) {
        if (isRetina) {
          switch (company) {
            default:
              return 'http://pics.avs.io/120/35/SU@2x.png';
            case 'SU':
              return 'http://pics.avs.io/120/35/SU@2x.png';
            case 'TK':
              return 'http://pics.avs.io/120/35/TK@2x.png';
            case 'S7':
              return 'http://pics.avs.io/120/35/S7@2x.png';
            case 'BA':
              return 'http://pics.avs.io/120/35/BA@2x.png';
          }
        } else {
          switch (company) {
            default:
              return 'http://pics.avs.io/120/35/SU.png';
            case 'SU':
              return 'http://pics.avs.io/120/35/SU.png';
            case 'TK':
              return 'http://pics.avs.io/120/35/TK.png';
            case 'S7':
              return 'http://pics.avs.io/120/35/S7.png';
            case 'BA':
              return 'http://pics.avs.io/120/35/BA.png';
          }
        }
      },
      getCompanyLink(company) {
        switch (company) {
          default:
            return 'https://www.aviasales.ru/';
          case 'SU':
            return 'https://www.aeroflot.ru/ru-ru';
          case 'TK':
            return 'https://www.turkishairlines.com/';
          case 'S7':
            return 'https://www.s7.ru/';
          case 'BA':
            return 'https://www.britishairways.com';
        }
      },
      getPriceInCurrency(price) {
        const rates = this.$store.getters.getRates;
        const currentCurrency = this.$store.getters.getCurrentCurrency;
        switch (currentCurrency) {
          default:
            return 'rub';
          case 'rub':
            this.currency = 'Р';
            return price;
          case 'usd':
            this.currency = '$';
            return (price / rates.RUB).toFixed(2);
          case 'eur':
            this.currency = '€';
            return ((price / rates.RUB) * rates.EUR).toFixed(2);
        }
      },
    },
    computed: {
      getTickets() {
        return this.$store.getters.getTickets;
      },
    },
    filters: {
      formatDate(value) {
        moment.locale('ru');
        return moment(String(value)).format('ll');
      },
    },
  };
</script>

<style scoped lang="less">
  .tickets {
    &__item {
      box-shadow: 0 1px 4px rgba(91, 137, 164, 0.25);
      background-color: #ffffff;
      border-radius: 5px;
      margin-bottom: 20px;
    }

    &__actions {
      padding: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #eceff1;
    }

    &__link {
      margin-right: 20px;
      flex-shrink: 0;
    }

    &__btn {
      box-sizing: border-box;
      width: 100%;
      max-width: 160px;
      padding: 10px;
      font-family: "Open Sans", Arial, sans-serif;
      font-size: 12px;
      font-weight: 400;
      letter-spacing: 0.5px;
      color: #ffffff;
      background-color: #ff6d00;
      border-radius: 5px;
      box-shadow: 0 2px 1px rgba(0, 0, 0, 0.1), 0 1px 0 #d64d08;
      cursor: pointer;
      transition: all .3s;

      &:hover,
      &:focus {
        background-color: #faa760;
        transition: all .3s;
      }

      &:active {
        background-color: #ff6d00;
        box-shadow: inset 0 1px 0 0 #d64d08;
      }
    }

    &__info {
      padding: 20px;
      display: flex;
      justify-content: space-between;
    }

    &__time {
      font-family: "Open Sans", Arial, sans-serif;
      color: #4a4a4a;
      font-size: 20px;
      line-height: 26px;
    }

    &__address {
      display: flex;
      font-size: 10px;
      font-family: "Open Sans", Arial, sans-serif;
      font-weight: 600;
      color: #4a4a4a;
      padding-top: 8px;
    }

    &__city {
      text-align: left;
    }

    &__date {
      font-family: "Open Sans", Arial, sans-serif;
      color: #8b9497;
      font-weight: 400;
      font-size: 10px;
      line-height: 18px;
    }

    &__text {
      position: relative;
      font-family: "Open Sans", Arial, sans-serif;
      font-size: 10px;
      font-weight: 600;
      line-height: 12.1px;
      color: #8b9497;
      text-transform: uppercase;

      &::before {
        width: 96px;
        height: 1px;
        background-color: #d2d5d6;
        content: "";
        position: absolute;
        bottom: -8px;
        left: -18px;
      }

      &::after {
        width: 13px;
        height: 13px;
        content: "";
        position: absolute;
        background-image: url("../../static/icon-plane.svg");
        transform: rotate(90deg);
        bottom: -13px;
        right: -26px
      }
    }

    &__block {
      &:first-child {
        text-align: left;
      }

      &:last-child {
        text-align: right;
      }
    }

    @media (min-width: 480px) {
      &__time {
        font-size: 32px;
      }

      &__address {
        font-size: 12px;
      }

      &__date {
        font-size: 12px;
      }

      &__btn {
        padding-top: 6px;
        padding-bottom: 6px;
        font-size: 16px;
      }
    }

    @media (min-width: 600px) {
      &__item {
        display: flex;
        min-height: 161px;
        max-width: 566px;
      }

      &__actions {
        width: 200px;
        padding: 25px 20px;
        box-sizing: border-box;
        flex-direction: column;
        border-bottom: none;
        border-right: 1px solid #eceff1;
      }

      &__link {
        margin-right: 0;
        margin-bottom: 20px;
      }

      &__info {
        width: 365px;
        padding: 25px;
        box-sizing: border-box;
        justify-content: center;
      }

      &__btn {
        padding-left: 10px;
        padding-right: 10px;
      }

      &__stops {
        margin-right: 38px;
        margin-left: 10px;
      }

      &__list {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }


  }
</style>
