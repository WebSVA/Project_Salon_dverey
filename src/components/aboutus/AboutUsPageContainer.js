import React from 'react';
import AboutUsPageShablon from './AboutUsPageShablon';
import aboutus1 from '../../../src/assets/img/aboutus1.jpg'
import aboutus6 from '../../../src/assets/img/aboutus6.jpg'
import aboutus2 from '../../../src/assets/img/aboutus2.jpg'

function AboutUsPageContainer() {
  
  return (
    <div className="about-us-container">
      <AboutUsPageShablon
        title="Добро пожаловать в салон DVERITUT"
        subtitle="Ваш надежный проводник в мир стильных, проверенных и качественных дверей и напольных покрытий!"
        description="Салон дверей уже не первый год на рынке, и успел зарекомендовать себя в качестве надежного партнера, приобретя огромное число благодарных постоянных покупателей. Мы предлагаем нашим клиентам широчайший выбор моделей и цветов. Все модели специально разработаны с учетом очень разных вкусовых предпочтений розничных клиентов. В нашем ассортименте есть продукция с уникальным и эксклюзивным покрытием, который с высокой точностью повторяет натуральный шпон ценных пород древесины, но при этом лишен всех его недостатков. "
        image={aboutus6}
        reverse={false}
      />
      <AboutUsPageShablon
        title="Мы выделяемся на рынке"
        subtitle="Высокое качество продукции, разнообразие материалов и современные технология"
        description="Мы представляем модели в покрытии эмаль и натуральном шпоне. Наш салон предлагает ассортимент дверей таких производителей как Эльпорта, Велдорис, Юни, Динмар, Фаворит, PORTE VISTА. Двери данных производителей можно посмотреть у нас в салоне, а также ознакомиться с большим ассортиментом ведущих производителей дверной фурнитуры. "
        image={aboutus1}
        reverse={true}
      />
      <AboutUsPageShablon
        title="Квалифицированные специалисты"
        subtitle="Заказывая двери у нас, вы получаете возможность дальнейшего гарантийного обслуживания дверей."
        description="В частности, мы рекомендуем специалистов, которые оказывают следующие услуги: замер дверных проёмов, монтаж входных и межкомнатных дверей, монтаж арок и порталов, монтаж раздвижных систем, монтаж различных видов фурнитуры."
        image={aboutus2}
        reverse={false}
      />
    </div>
  );
}

export default AboutUsPageContainer;
