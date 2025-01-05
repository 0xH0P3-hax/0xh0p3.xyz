import { EduIntro, EduList, Link } from "../styles/Vuln.styled";
import { Wrapper } from "../styles/Output.styled";

const Vuln: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my vulnerability reports!</EduIntro>
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
    title: "아름다운이사 (yes2478.co.kr)",
    desc: "인증번호 검증 과정의 무결성 부족 취약점",
  },
  {
    title: "테크2030 (sms.tech24.kr)",
    desc: "인증 우회 취약점",
  },
  {
    title: "[**REDACTED**]",
    desc: "???? 우회 취약점",
  },
];

export default Vuln;
