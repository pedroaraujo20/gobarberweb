import React, { useState } from 'react';
import { FiClock, FiPower } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Section,
  Appointment,
  Calendar,
} from './styles';

const mockedUser = {
  id: '123456',
  name: 'Pedro Araujo',
  avatarUrl:
    'https://avatars.githubusercontent.com/u/17890530?s=460&u=316b3d3c4e35d227e58815f463d239006da86a23&v=4',
};

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logo} alt="goBarber" />
          <Profile>
            <img src={mockedUser.avatarUrl} alt="pedroAvatar" />
            <div>
              <span>Bem-vindo,</span>
              <strong>{mockedUser.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img src={mockedUser.avatarUrl} alt="pedro araujo" />
              <strong>{mockedUser.name}</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Manhã</strong>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img src={mockedUser.avatarUrl} alt="pedro araujo" />
                <strong>{mockedUser.name}</strong>
              </div>
            </Appointment>
          </Section>

          <Section>
            <strong>Tarde</strong>
          </Section>
        </Schedule>
        <Calendar />
      </Content>
    </Container>
  );
};

export default Dashboard;
