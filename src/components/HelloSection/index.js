import React from "react";
import s from './HelloSection.module.css';

export const HelloSection = () => {
  return (
    <section className={s.section}>
      <h1 className>Привет, меня зовут Руслан</h1>
      <h3>Я разработчик на JavaScript</h3>
      <p>На данный момент работаю в Совкомбанк Технологии</p>
    </section>
  )
}