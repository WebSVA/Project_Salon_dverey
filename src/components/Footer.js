import "../styles/footer.css";

function ComponentYouSelected() {
  return (
    <div className="footer-container">
        <div className="info-footer-container">
            <div className="info-company-container">
                <div className="section-column-info">
                    <div className="item-logo-name">
                        <div className="item-logo">
                            <img src='' className="logo-icon" />
                        </div>
                        <div className="item-name">
                            <p>Салон дверей</p>
                        </div>
                    </div>
                    <div className="item-line">
                    </div>
                </div>
                <div className="section-column-info">
                    <div className="text-about-container">
                        <p className="text-about-company">
                            Частное предприятие «Салон дверей» в Сморгони предлагает эксклюзивные двери для клиентов из Вилейки, Сморгони, Молодечно, Островца, Воложина, Мяделя и других городов Беларуси. Мы
                            специализируемся на производстве межкомнатных и входных дверей, которые идеально сочетают в себе стиль, надежность и долговечность. Наша команда профессионалов гарантирует высокое
                            качество изготовления, быстрое выполнение заказов и доступные цены.
                        </p>
                    </div>
                </div>
                <div className="section-column-info">
                    <div className="item-line-under">
                    </div>
                </div>
            </div>
            <div className="contact-info">

            </div>
        </div>
    </div>
  );
}

export default ComponentYouSelected;