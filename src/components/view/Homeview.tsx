import ButtonWPP from "../buttons/ButtonWPP";
import About from "../sections/About";
import Card from "../sections/Card";
import ListGroup from "../sections/ListGroup";
import ListGroupHorizontal from "../sections/ListGroupHorizontal";
import Online from "../sections/Online";
import Question from "../sections/Question";
import styles from "./Homeview.module.css";

const Homeview = () => {
  return (
    <div className={styles.content}>
      <section id='home' className={styles.sec1}>
        <div className="container">
          <div>
            <h4>ATENDIMENTO ONLINE E PRESENCIAL DE PSICOLOGIA CLÍNICA</h4>
            <p>PARA ADOLESCENTES E ADULTOS</p>
            <p>
              Fale diretamente comigo, tire suas dúvidas e agende a sua sessão!
            </p>
            <ButtonWPP />
          </div>
        </div>
      </section>
      <section className={styles.sec2}>
        <div className="container py-md-5">
          <ListGroup />
        </div>
      </section>
      <section id='about' className={styles.sec3}>
        <div className="container-fluid py-sm-2 text-justify">
          <About />
        </div>
      </section>
      <section className={styles.sec4}>
        <div className="container text-center p-sm-4">
          <h3>
            Psicóloga clínica, com atendimentos em modo online para todos os
            estados do Brasil e presencial no ABC Paulista.
          </h3>
        </div>
      </section>
      <section className={styles.sec5}>
        <div>
          <ListGroupHorizontal />
        </div>
      </section>
      <section className={styles.sec6}>
        <div className="p-3 p-md-5">
          <Card text="O que é Psicotera​pia?" />
        </div>
      </section>
      <section id='info_question' className={styles.sec7}>
        <Question />
      </section>
      <section className={styles.sec8}>
        <div>
          <Online />
        </div>
      </section>
    </div>
  );
};
export default Homeview;
