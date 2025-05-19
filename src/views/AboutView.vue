<template>
  <div class="about-container">
    <div class="about-card">
      <img src="../assets/profile.jpg" alt="Photo" class="photo" />
      <div class="info">
        <h1>Akbarkhon Inomkhujaev</h1>
        <p><strong>Возраст:</strong> 19</p>
        <p><strong>Дата рождения:</strong> 07.29.2005</p>
        <p><strong>Район:</strong> Шайхантахур, Ташкент</p>

        <section class="info-block">
          <h2>Обучение и Опыт</h2>
          <ul>
            <li><strong>Академия:</strong> Proweb Academy, Frontend-разработка</li>
            <li><strong>Работа:</strong> Фриланс, Pet-проекты</li>
            <li><strong>Проекты:</strong> Онлайн-магазин на Vue, Доска задач, Чат-бот Telegram</li>
          </ul>
        </section>

        <section class="info-block">
          <h2>Интересы</h2>
          <p>Программирование, Онлайн игры, дизайн интерфейсов</p>
        </section>

        <section class="info-block">
          <h2>Информация</h2>
          <p>
            Я начал изучать frontend-разработку в 2023 году, и с тех пор активно развиваю навыки в HTML, CSS, JavaScript, Vue и React. 
            Мне нравится создавать адаптивные и удобные интерфейсы.
          </p>
          <p>
            Помимо технических навыков, я стараюсь учиться работать в команде, разрабатывать UI-дизайны, 
            соблюдать архитектуру проектов и придерживаться чистого кода.
          </p>
          <p>
            В будущем планирую стать сильным Fullstack-разработчиком, работать над крупными веб-платформами и внести вклад в open-source.
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" />
<style scoped>
.about-container {
  padding: 40px 24px;
  display: flex;
  justify-content: flex-start;
}

.about-card {
  display: flex;
  align-items: flex-start;
  background: #fff;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  max-width: 1000px;
  gap: 32px;
}

.photo {
  width: 140px;
  height: 140px;
  border-radius: 100%;
  object-fit: cover;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.info {
  flex: 1;
}

h1 {
  margin-bottom: 12px;
  font-size: 24px;
}

h2 {
  margin-top: 24px;
  font-size: 20px;
}

p {
  margin-bottom: 6px;
}

ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

ul li {
  margin-bottom: 6px;
}

.info-block {
  margin-top: 16px;
}
</style>
