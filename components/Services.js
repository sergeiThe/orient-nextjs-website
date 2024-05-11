import React from "react";
import styles from "./../styles/Services.module.scss";
import Service from "./Service";
import services from "../data/services";

function Services() {
  return (
    <section className={styles.services} id="services">
      <div className={styles.title}>
        <h2>Tjenester & priser</h2>
      </div>
      <div className={styles.text}>
        <p>
          Thaimassasje er en tradisjonell form for massasje som egentlig stammer
          fra India og som har eksistert i flere tusen år. Behandlingen utføres
          gjennom strekking og trykk langs energilinjer i kroppen. Vi tilbyr
          følgende tjenester:
        </p>
      </div>

      <div className={styles["service-list"]}>
        <ul>
          {services.singlePersonMassage.map((service) => {
            return <li key={service.id}>{service.title}</li>;
          })}
        </ul>
      </div>

      <div className={styles["price-list-box"]}>
        <ul className={styles["price-list-single"]}>
          {services.singlePersonMassage.map((service) => {
            return (
              <Service
                key={service.id}
                title={service.title}
                description={service.description}
              >
                {service.pricings.map((pricing) => {
                  return (
                    <li
                      key={Math.random()}
                    >{`${pricing.time} minutter - ${pricing.price} NOK`}</li>
                  );
                })}
              </Service>
            );
          })}
        </ul>

        {/*<ul className={styles["price-list-couple"]}>
          {services.coupleMassage.map((service) => {
            return (
              <Service
                key={service.id}
                title={service.title}
                description={null}
              >
                {service.pricings.map((pricing) => {
                  return (
                    <li
                      key={Math.random()}
                    >{`${pricing.time} minutter - ${pricing.price} NOK`}</li>
                  );
                })}
              </Service>
            );
          })}
        </ul>*/}
      </div>
    </section>
  );
}

export default Services;
