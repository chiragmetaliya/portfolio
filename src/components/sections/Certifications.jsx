// components/sections/Certifications.jsx
import React, { useState } from "react";
import styled from "styled-components";
import { certifications } from "../../data/constants";
import CertificationCard from "../cards/CertificationCard";
import CertificationDetails from "../Dialog/CertificationDetails";

const Container = styled.div`
margin-top: 100px;
display: flex;
flex-direction: column;
justify-content-center;
position: relative;
z-index: 1;
padding: 0 16px;
align-items: center;
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ToggleButtonGroup = styled.div`
display: flex;
border: 1.5px solid ${({ theme }) => theme.primary};
color: ${({ theme }) => theme.primary};
font-size: 16px;
border-radius: 12px;
font-weight 500;
margin: 22px 0;
@media (max-width: 768px){
    font-size: 12px;
}
`;

const ToggleButton = styled.div`
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.primary + 20};
  }
  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
  ${({ active, theme }) =>
        active &&
        `
  background:  ${theme.primary + 20};
  `}
`;

const Divider = styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary};
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`;

const Certifications = () => {
    const [openModal, setOpenModal] = useState({ state: false, certification: null });
    const [toggle, setToggle] = useState("all");

    return (

        <>
            <Container id="Projects">
                <Wrapper>
                    <Title>Certifications</Title>
                    <Desc>
                        I've earned several certifications that validate my expertise and skills in various technologies.
                        Here are some of them.
                    </Desc>

                    <ToggleButtonGroup>
                        <ToggleButton
                            active={toggle === "all"}
                            onClick={() => setToggle("all")}
                        >
                            ALL
                        </ToggleButton>
                        <Divider />
                        <ToggleButton
                            active={toggle === "development"}
                            onClick={() => setToggle("development")}
                        >
                            Development
                        </ToggleButton>
                        <Divider />
                        <ToggleButton
                            active={toggle === "software engineering"}
                            onClick={() => setToggle("software engineering")}
                        >
                            Software Engineering
                        </ToggleButton>
                    </ToggleButtonGroup>


                </Wrapper>
            </Container>
            <CardContainer>

                {toggle === "all" &&
                    certifications.map((certification) => (
                        <CertificationCard
                            key={certification.id}
                            certification={certification}
                            setOpenModal={setOpenModal}
                        />
                    ))}

                {certifications
                    .filter((item) => item.category === toggle)
                    .map((certification) => (
                <CertificationCard
                    key={certification.id}
                    certification={certification}
                    setOpenModal={setOpenModal}
                />
                ))}
            </CardContainer>
            {openModal.state && (
                <CertificationDetails
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                />
            )}
        </>
    );
};

export default Certifications;
