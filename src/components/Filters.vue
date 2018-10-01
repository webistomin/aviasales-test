<template>
  <aside class="filters">
    <div class="filters__block  filters__block--mb">
      <span class="filters__title">Валюта</span>
      <ul class="filters__list">
        <li class="filters__tab"
            v-for="tab of tabs"
            :key="tab">
          <button class="filters__btn"
                  :class="{ 'filters__btn--active': currentTab === tab }"
                  v-on:click="setTab(tab)">
            {{tab}}
          </button>
        </li>
      </ul>
    </div>
    <div class="filters__block">
      <span class="filters__title">Количество пересадок</span>
      <ul class="filters__list filters__list--column">
        <li class="filters__item" tabindex="-1">
          <input type="checkbox" class="filters__checkbox" id="all">
          <label for="all" class="filters__label" tabindex="0">Все</label>
        </li>
        <li class="filters__item">
          <input type="checkbox" class="filters__checkbox" id="without-stops">
          <label for="without-stops" class="filters__label" tabindex="0">Без пересадок</label>
          <button class="filters__button">Только</button>
        </li>
        <li class="filters__item">
          <input type="checkbox" class="filters__checkbox" id="one-stop">
          <label for="one-stop" class="filters__label" tabindex="0">1 пересадка</label>
          <button class="filters__button">Только</button>
        </li>
        <li class="filters__item">
          <input type="checkbox" class="filters__checkbox" id="two-stops">
          <label for="two-stops" class="filters__label" tabindex="0">2 пересадки</label>
          <button class="filters__button">Только</button>
        </li>
        <li class="filters__item">
          <input type="checkbox" class="filters__checkbox" id="three-stops">
          <label for="three-stops" class="filters__label" tabindex="0">3 пересадки</label>
          <button class="filters__button">Только</button>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
  export default {
    data() {
      return {
        tabs: ['rub', 'usd', 'eur'],
        currentTab: 'rub',
        isActive: false,
      };
    },
    methods: {
      setTab(tab) {
        this.currentTab = tab;
        this.$store.commit('updateCurrentCurrency', tab);
      },
    },
  };
</script>

<style scoped lang="less">
  .filters {
    border-radius: 5px;
    background-color: #ffffff;
    box-shadow: 0 1px 4px rgba(91, 137, 164, 0.25);
    padding-top: 15px;
    padding-left: 15px;
    padding-bottom: 13px;
    margin-bottom: 20px;

    &__title {
      display: block;
      color: #4a4a4a;
      font-family: "Open Sans", Arial, sans-serif;
      font-weight: 600;
      font-size: 12px;
      line-height: 19px;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      margin-bottom: 9px;
    }

    &__list {
      display: flex;

      &--column {
        flex-direction: column;
      }
    }

    &__tab {
      width: 68px;
      min-height: 40px;
      border: 1px solid #d2d5d6;
      color: #2196f3;
      margin-left: -1px;

      &:hover {
        border-color: #64b5f5;
        z-index: 1;
      }

      &:first-child {
        border-radius: 5px 0 0 5px;
      }

      &:last-child {
        border-radius: 0 5px 5px 0;
      }

    }

    &__btn {
      display: block;
      width: 100%;
      height: 100%;
      font-family: "Open Sans", Arial, sans-serif;
      font-size: 12px;
      font-weight: 600;
      line-height: 22px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #2196f3;
      cursor: pointer;

      &:hover {
        color: #2196f3;
        background-color: #f2fcff;
        border-radius: inherit;
      }

      &--active {
        color: #ffffff;
        background-color: #2196f3;

        &:hover {
          color: #ffffff;
          background-color: #2196f3;
        }
      }
    }

    &__block {
      &--mb {
        margin-bottom: 30px;
      }
    }

    &__item {
      display: flex;
      margin-left: -15px;
      padding-left: 15px;

      &:hover {
        background-color: #f1fcff;
      }

      &:hover .filters__button {
        display: block;
      }

      &:hover .filters__label::before {
        background-color: #f2fcff;
        border-color: #2196f3;
      }
    }

    &__checkbox {
      display: none;
    }

    &__checkbox:checked + &__label::before {
      background-image: url("../../static/icon-check.svg");
      background-repeat: no-repeat;
      background-position: center center;
    }

    &__label {
      display: block;
      width: 100%;
      position: relative;
      padding-left: 29px;
      font-size: 13px;
      line-height: 35px;
      font-family: "Open Sans", Arial, sans-serif;
      color: #4a4a4a;
      outline: none;

      &::before {
        width: 20px;
        height: 20px;
        content: "";
        position: absolute;
        border-radius: 3px;
        border: 1px solid #d2d5d6;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }

      &:focus::before {
        background-color: #f2fcff;
        border-color: #2196f3;
      }
    }

    &__button {
      display: none;
      padding-right: 14px;
      height: 100%;
      font-family: "Open Sans", Arial, sans-serif;
      color: #2196f3;
      font-size: 11px;
      font-weight: 600;
      line-height: 35px;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      cursor: pointer;

      &:hover {
        color: #64b5f5;
      }
    }

    @media (min-width: 900px) {
      box-sizing: border-box;
      width: 232px;
      margin-right: 20px;
      padding-right: 15px;

      &__item {
        margin-right: -15px;
        padding-right: 15px;
      }
    }


  }
</style>
