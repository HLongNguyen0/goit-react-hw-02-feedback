import { SectionContainer, Header } from './Section.styled';

function Section({ title, children }) {
  return (
    <>
      <SectionContainer>
        <Header>{title}</Header>
        {children}
      </SectionContainer>
    </>
  );
}

export default Section;
