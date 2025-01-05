import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "Daegu Univ. Star Infosec 10th",
    desc: "Daegu University | 2023.1 ~ 2023.11",
  },
  {
    title: "WHS (Pre-BOB) 2nd",
    desc: "Gasan Digital Complex BOB Center | 2024.3 - 2024.9",
  },
  {
    title: "Daegu Univ. Star Infosec 11th",
    desc: "Daegu University | 2024.1 ~ 2024.11",
  },
];

export default Education;
