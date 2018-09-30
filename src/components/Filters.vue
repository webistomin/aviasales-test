<template>
  <aside class="filters">
    <div class="filters__block">
      <span class="filters__title">Валюта</span>
      <ul class="filters__list">
        <li class="filters__item">
          <button class="filters__btn">Rub</button>
        </li>
        <li class="filters__item">
          <button class="filters__btn">Usd</button>
        </li>
        <li class="filters__item">
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
  }
</style>
