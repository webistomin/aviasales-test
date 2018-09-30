<template>
  <div>
    <header class="page-header">
      <img src="#" alt="#" class="page-header__logo">
    </header>
    <main class="page-content">
      <div class="container">
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
        <section class="tickets">
          <ul class="tickets__list">
            <li class="tickets__item">
              <div class="tickets__actions">
                <a href="#" class="tickets__link">
                  <img src="#" alt="#" class="tickets__img">
                </a>
                <button class="tickets__btn">Купить за
                  <span class="tickets__price">12&nbsp;032&nbsp;
                    <span class="tickets__currency">P</span>
                  </span>
                </button>
              </div>
              <div class="tickets__info">
                <div class="tickets__block">
                  <time class="tickets__time">09:25</time>
                  <p class="tickets__address">
                    <span class="tickets__code">VVO</span>
                    <span class="tickets__city">Владивосток</span>
                  </p>
                  <time class="tickets__date" datetime="09-10-2018">9 окт 2018, Пт</time>
                </div>
                <div class="tickets__stops">
                  <p class="tickets__text">
                    <span class="tickets__counter">1</span>&nbsp;пересадка</p>
                </div>
                <div class="tickets__block">
                  <time class="tickets__time">11:45</time>
                  <p class="tickets__address">
                    <span class="tickets__city">Тель-Авив</span>
                    <span class="tickets__code">TLV</span>
                  </p>
                  <time class="tickets__date" datetime="10-10-2018">10 окт 2018, Пт</time>
                </div>
              </div>
            </li>
            <li class="tickets__item">
              <div class="tickets__actions">
                <a href="#" class="tickets__link">
                  <img src="#" alt="#" class="tickets__img">
                </a>
                <button class="tickets__btn">Купить за
                  <span class="tickets__price">12&nbsp;032&nbsp;
                    <span class="tickets__currency">P</span>
                  </span>
                </button>
              </div>
              <div class="tickets__info">
                <div class="tickets__block">
                  <time class="tickets__time">09:25</time>
                  <p class="tickets__address">
                    <span class="tickets__code">VVO</span>
                    <span class="tickets__city">Владивосток</span>
                  </p>
                  <time class="tickets__date" datetime="09-10-2018">9 окт 2018, Пт</time>
                </div>
                <div class="tickets__stops">
                  <p class="tickets__text">
                    <span class="tickets__counter">1</span>&nbsp;пересадка</p>
                </div>
                <div class="tickets__block">
                  <time class="tickets__time">11:45</time>
                  <p class="tickets__address">
                    <span class="tickets__city">Тель-Авив</span>
                    <span class="tickets__code">TLV</span>
                  </p>
                  <time class="tickets__date" datetime="10-10-2018">10 окт 2018, Пт</time>
                </div>
              </div>
            </li>
            <li class="tickets__item">
              <div class="tickets__actions">
                <a href="#" class="tickets__link">
                  <img src="#" alt="#" class="tickets__img">
                </a>
                <button class="tickets__btn">Купить за
                  <span class="tickets__price">12&nbsp;032&nbsp;
                    <span class="tickets__currency">P</span>
                  </span>
                </button>
              </div>
              <div class="tickets__info">
                <div class="tickets__block">
                  <time class="tickets__time">09:25</time>
                  <p class="tickets__address">
                    <span class="tickets__code">VVO</span>
                    <span class="tickets__city">Владивосток</span>
                  </p>
                  <time class="tickets__date" datetime="09-10-2018">9 окт 2018, Пт</time>
                </div>
                <div class="tickets__stops">
                  <p class="tickets__text">
                    <span class="tickets__counter">1</span>&nbsp;пересадка</p>
                </div>
                <div class="tickets__block">
                  <time class="tickets__time">11:45</time>
                  <p class="tickets__address">
                    <span class="tickets__city">Тель-Авив</span>
                    <span class="tickets__code">TLV</span>
                  </p>
                  <time class="tickets__date" datetime="10-10-2018">10 окт 2018, Пт</time>
                </div>
              </div>
            </li>
            <li class="tickets__item">
              <div class="tickets__actions">
                <a href="#" class="tickets__link">
                  <img src="#" alt="#" class="tickets__img">
                </a>
                <button class="tickets__btn">Купить за
                  <span class="tickets__price">12&nbsp;032&nbsp;
                    <span class="tickets__currency">P</span>
                  </span>
                </button>
              </div>
              <div class="tickets__info">
                <div class="tickets__block">
                  <time class="tickets__time">09:25</time>
                  <p class="tickets__address">
                    <span class="tickets__code">VVO</span>
                    <span class="tickets__city">Владивосток</span>
                  </p>
                  <time class="tickets__date" datetime="09-10-2018">9 окт 2018, Пт</time>
                </div>
                <div class="tickets__stops">
                  <p class="tickets__text">
                    <span class="tickets__counter">1</span>&nbsp;пересадка</p>
                </div>
                <div class="tickets__block">
                  <time class="tickets__time">11:45</time>
                  <p class="tickets__address">
                    <span class="tickets__city">Тель-Авив</span>
                    <span class="tickets__code">TLV</span>
                  </p>
                  <time class="tickets__date" datetime="10-10-2018">10 окт 2018, Пт</time>
                </div>
              </div>
            </li>
            <li class="tickets__item">
              <div class="tickets__actions">
                <a href="#" class="tickets__link">
                  <img src="#" alt="#" class="tickets__img">
                </a>
                <button class="tickets__btn">Купить за
                  <span class="tickets__price">12&nbsp;032&nbsp;
                    <span class="tickets__currency">P</span>
                  </span>
                </button>
              </div>
              <div class="tickets__info">
                <div class="tickets__block">
                  <time class="tickets__time">09:25</time>
                  <p class="tickets__address">
                    <span class="tickets__code">VVO</span>
                    <span class="tickets__city">Владивосток</span>
                  </p>
                  <time class="tickets__date" datetime="09-10-2018">9 окт 2018, Пт</time>
                </div>
                <div class="tickets__stops">
                  <p class="tickets__text">
                    <span class="tickets__counter">1</span>&nbsp;пересадка</p>
                </div>
                <div class="tickets__block">
                  <time class="tickets__time">11:45</time>
                  <p class="tickets__address">
                    <span class="tickets__city">Тель-Авив</span>
                    <span class="tickets__code">TLV</span>
                  </p>
                  <time class="tickets__date" datetime="10-10-2018">10 окт 2018, Пт</time>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </main>
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
