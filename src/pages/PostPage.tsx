import { useParams } from "react-router-dom";
import { useState } from "react";
import TableOfContents from "../components/TableOfContents";
import InternalAdvertisement from "../components/InternalAdvertisement";
import Advertisement from "../components/Advertisement";
import adImage from "../assets/images/post-image.png";
import adImage2 from "../assets/images/post-image3.jpg";

const PostPage = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState([
    {
      title: "Куда сходить вечером в столице",
      image: "./assets/images/post-image5.jpg",
    },
    {
      title: "Где лучше арендовать велосипед",
      image: "./assets/images/post-image2.jpg",
    },
    {
      title: "Речной транспорт Москвы fdfdsdds fsdf sd fsdf dsf sdfsdf s d",
      image: "./assets/images/post-image3.jpg",
    },
    {
      title: "Новогоднее настроение - повод погулять",
      image: "./assets/images/post-image4.jpg",
    },
    {
      title: "Согрейте своих близких сделав это",
      image: "./assets/images/post-image5.jpg",
    },
    { title: "Кофе сближает", image: "./assets/images/post-image6.jpg" },
    {
      title: "Лепите снежинки на елки",
      image: "./assets/images/post-image1.jpg",
    },
  ]);
  const post = posts[id];

  const headers = [
    { id: "introduction", title: "Начало" },
    { id: "chapter1", title: "Глава 1" },
    { id: "chapter2", title: "Глава 2" },
    { id: "chapter3", title: "Глава 3" },
    { id: "chapter4", title: "Глава 4" },
    { id: "chapter5", title: "Глава 5" },
    { id: "conclusion", title: "Завершение" },
    // ... other header sections
  ];

  return (
    <div className="post-page-wrapper | flex-grow my-[2rem]">
      <div className="post-page-container | default-container">
        <div className="post-page-inner | ">
          <div className="post-page-grid | grid lg:grid-cols-6 lg:gap-[2rem]">
            <div className="post-sidebar | hidden lg:grid lg:col-span-1">
              <div className="advertisement-block | max-h-[23rem]">
                {/* <Advertisement></Advertisement> */}
                <TableOfContents headers={headers} />
              </div>
            </div>
            <div className="post-main-content | flex flex-col gap-[1rem] lg:col-span-4 ">
              <div className="post-title-block | flex flex-col gap-[0.25rem]">
                <div className="post-category | ">КУЛЬТУРА, ПОДКАТЕГОРИЯ</div>
                <div className="post-title | title cofo-sans-black lg:text-[1.5rem] ">
                  {post.title}
                </div>
                <div className="post-credentials | flex justify-between text-[#818181]">
                  <div className="post-author |">Иванов Иван</div>
                  <div className="post-date | ">10 марта, 2024</div>
                </div>
              </div>
              <div
                className="post-image-block | rounded-2xl min-h-[15rem] md:min-h-[25rem] bg-center bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(../src/${post.image})` }}
              ></div>
              <div className="post-body | flex flex-col gap-[1rem]">
                <h1 className="title">SAP Business Objects</h1>
                <p className="text-justify">
                  1.Определение ключевых показателей производительности (KPIs):
                  Прежде всего, важно определить ключевые показатели
                  производительности, которые будут использоваться для оценки
                  эффективности инвестиционного проекта. Это могут быть
                  финансовые показатели, такие как ROI (индекс доходности), NPV
                  (чистая приведенная стоимость), IRR (внутренняя норма
                  доходности), а также операционные показатели, клиентская
                  удовлетворенность и другие.
                </p>
                <p>
                  2. Сбор данных: Затем необходимо собрать данные, необходимые
                  для расчета выбранных KPIs. SAP BusinessObjects предоставляет
                  широкий спектр инструментов для извлечения, трансформации и
                  загрузки данных из различных источников, таких как базы
                  данных, хранилища данных, системы электронной коммерции и
                  другие.
                </p>
                <p>
                  3. Анализ данных: После сбора данных можно использовать
                  инструменты аналитики данных SAP BusinessObjects для
                  проведения различных анализов, включая сравнение
                  производительности проекта с прогнозами, выявление трендов,
                  анализ вариаций и определение факторов, влияющих на
                  эффективность проекта.
                </p>
                <p>
                  4. Визуализация результатов: SAP BusinessObjects предоставляет
                  возможности визуализации данных с помощью различных
                  инструментов, таких как отчеты, дашборды, графики и диаграммы.
                  Это позволяет представить результаты анализа эффективности
                  инвестиционного проекта в понятной и наглядной форме для
                  принятия решений.
                </p>
                <p>
                  {" "}
                  5. Мониторинг и оптимизация: Наконец, важно установить
                  процессы мониторинга и оптимизации, чтобы продолжать
                  отслеживать эффективность проекта во времени и принимать меры
                  по его улучшению при необходимости. SAP BusinessObjects может
                  использоваться для автоматизации мониторинга проекта и
                  оповещения о потенциальных проблемах или возможностях
                  оптимизации. Использование SAP BusinessObjects в процессе
                  оценки эффективности инвестиционных проектов позволяет
                  компаниям получать глубокий анализ данных и принимать
                  обоснованные решения на основе фактических данных и аналитики.
                </p>
              </div>
            </div>
            <div className="post-page-ads-sidebar | hidden lg:flex lg:flex-col lg:col-span-1  gap-[1.5rem]">
              <div className="add-block | flex flex-col gap-[1rem]">
                <InternalAdvertisement
                  image={adImage}
                  link="/"
                  title="Читай уникальные посты в нашем Telegram канале"
                ></InternalAdvertisement>
                <div className="add-block | min-h-[19rem]">
                  <Advertisement></Advertisement>
                </div>
                <InternalAdvertisement
                  image={adImage2}
                  link="/"
                  title="Читай уникальные посты в нашем Telegram канале"
                ></InternalAdvertisement>
              </div>

              <div className="add-block | ">
                {/* <InternalAdvertisement></InternalAdvertisement> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
