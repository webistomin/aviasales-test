<template>
  <aside class="filters">
    <div class="filters__block">
      <span class="filters__title">Валюта</span>
      <ul class="filters__list">
        <li class="filters__tab">
          <button class="filters__btn filters__btn--active">Rub</button>
        </li>
        <li class="filters__tab">
          <button class="filters__btn">Usd</button>
        </li>
        <li class="filters__tab">
          <button class="filters__btn">Eur</button>
        </li>
      </ul>
    </div>
    <div class="filters__block">
      <span class="filters__title">Количество пересадок</span>
      <ul class="filters__list filters__list--column">
        <li class="filters__item">
          <input type="checkbox" class="filters__checkbox" id="all">
          <label for="all" class="filters__label">Все</label>
        </li>
        <li class="filters__item">
          <input type="checkbox" class="filters__checkbox" id="without-stops">
          <label for="without-stops" class="filters__label">Без пересадок</label>
          <button class="filters__button">Только</button>
        </li>
        <li class="filters__item">
          <input type="checkbox" class="filters__checkbox" id="one-stop">
          <label for="one-stop" class="filters__label">1 пересадка</label>
          <button class="filters__button">Только</button>
        </li>
        <li class="filters__item">
          <input type="checkbox" class="filters__checkbox" id="two-stops">
          <label for="two-stops" class="filters__label">2 пересадки</label>
          <button class="filters__button">Только</button>
        </li>
        <li class="filters__item">
          <input type="checkbox" class="filters__checkbox" id="three-stops">
          <label for="three-stops" class="filters__label">3 пересадки</label>
          <button class="filters__button">Только</button>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>

</script>

<style scoped lang="less">
  .filters {
    border-radius: 5px;
    background-color: #ffffff;
    box-shadow: 0 1px 4px rgba(91, 137, 164, 0.25);
    padding-top: 15px;
    padding-left: 15px;

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

      &:hover,
      &:focus {
        color: #2196f3;
        background-color: #f2fcff;
        border-radius: inherit;
      }

      &--active {
        color: #ffffff;
        background-color: #2196f3;
      }
    }

    &__block {
      margin-bottom: 30px;
    }


  }
</style>
