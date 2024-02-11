import { useParams } from "react-router-dom";
import ContactForm from "../../ui/contactForm/ContactForm";
import styles from "./UserPage.module.scss";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getUserSelector } from "../../redux/user/selector";
import { fetchUser } from "../../redux/user/getUser";
import Error from "../../ui/error/Error";

const UserPage = () => {
  const userText = {
    introduction:
      "Клиенты видят в нем эксперта по вопросам разработки комплексных решений финансовых продуктов, включая такие аспекты, как организационная структура, процессы, аналитика и ИТ-компоненты. Он помогает клиентам лучше понимать структуру рисков их бизнеса, улучшать процессы за счет применения новейших технологий и увеличивать продажи, используя самые современные аналитические инструменты.",
    clientWork:
      'В работе с клиентами недостаточно просто решить конкретную проблему или помочь справиться с трудностями. Не менее важно уделять внимание обмену знаниями: "Один из самых позитивных моментов — это осознание того, что ты помог клиенту перейти на совершенно новый уровень компетентности, уверенность в том, что после окончания проекта у клиента есть все необходимое, чтобы дальше развиваться самостоятельно".',
    entrepreneurialActivity:
      "Помимо разнообразных проектов для клиентов финансового сектора, Сорин ведет активную предпринимательскую деятельность. Он является совладельцем сети клиник эстетической медицины в Швейцарии, предлагающей инновационный подход к красоте, а также инвестором других бизнес-проектов.",
  };

  const dispatch = useAppDispatch();
  const { status, user } = useAppSelector(getUserSelector);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchUser(id));
    }
  }, []);

  if (user)
    return (
      <div className={styles.container}>
        <div className={styles.contacts}>
          <ContactForm email={user?.email} />
        </div>

        <div className={styles.userText}>
          <p>{userText.introduction}</p>
          <p>{userText.clientWork}</p>
          <p>{userText.entrepreneurialActivity}</p>
        </div>
      </div>
    );

  if (status === "rejected") {
    return <Error errorMessage="Пользовательне найден" />;
  }
};

export { UserPage };
