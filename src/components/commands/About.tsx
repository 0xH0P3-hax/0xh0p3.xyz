import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>0xH0P3, Park Gibeom</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a white hacker</HighlightAlt> with a passion for exploring web, cryptography, and miscellaneous (misc) challenges.
      </p>
      <p>
      I enjoy solving wargame problems, learning new skills, and tackling real-world security challenges.
      </p>
      <p>
        안녕하세요, 제 이름은 <HighlightSpan>0xH0P3, 박기범</HighlightSpan>입니다!
      </p>
      <p>
        저는 웹, 암호학, 그리고 기타 분야(Misc) 문제를 탐구하는 데 열정을 가진 <HighlightAlt>화이트 해커</HighlightAlt>입니다.
      </p>
      <p>
        워게임 문제를 해결하고, 새로운 기술을 배우며, 현실 세계의 보안 문제에 도전하는 것을 즐깁니다.
      </p>
    </AboutWrapper>
  );
};

export default About;
