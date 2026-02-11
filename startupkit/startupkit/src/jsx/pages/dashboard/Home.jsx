import React from "react";
import styled from "styled-components";
import Sidebar from "../../../components/Sidebar";

/* ================= LAYOUT WITH SIDEBAR ================= */

const Layout = styled.div`
  display: flex;
  min-height: 100vh;
  background: #f5f6fa;
`;

/* ================= PAGE CONTENT ================= */

const Content = styled.div`
  flex: 1;
  padding: 24px;
`;

/* ================= PAGE HEADER ================= */

const PageHeader = styled.div`
  margin-bottom: 24px;
`;

const Greeting = styled.h2`
  font-size: 22px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 4px;
`;

const SubText = styled.p`
  color: #6b7280;
  font-size: 14px;
`;

/* ================= CARD SYSTEM ================= */

const Card = styled.div`
  background: white;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  padding: 20px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
`;

/* ================= GRID ================= */

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 24px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

/* ================= STAT CARD ================= */

const StatCard = styled(Card)`
  display: flex;
  flex-direction: column;
`;

const StatTitle = styled.span`
  font-size: 13px;
  color: #6b7280;
  margin-bottom: 10px;
`;

const StatValue = styled.span`
  font-size: 26px;
  font-weight: 600;
  color: #111827;
`;

/* ================= TABLE ================= */

const TableCard = styled(Card)`
  margin-top: 10px;
`;

const TableTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #111827;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  text-align: left;
  font-size: 13px;
  color: #6b7280;
  padding-bottom: 12px;
  border-bottom: 1px solid #e5e7eb;
`;

const Td = styled.td`
  padding: 14px 0;
  font-size: 14px;
  color: #111827;
  border-bottom: 1px solid #f3f4f6;
`;

/* ================= BADGE ================= */

const Badge = styled.span`
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;

  background: ${(p) =>
    p.type === "success"
      ? "#ecfdf5"
      : p.type === "warning"
      ? "#fffbeb"
      : "#fef2f2"};

  color: ${(p) =>
    p.type === "success"
      ? "#059669"
      : p.type === "warning"
      ? "#d97706"
      : "#dc2626"};
`;

/* ================= COMPONENT ================= */

function Home() {
  return (
    <Layout>
      {/* ===== SIDEBAR ===== */}
      <Sidebar />

      {/* ===== PAGE CONTENT ===== */}
      <Content>
        <PageHeader>
          <Greeting>Good Morning</Greeting>
          <SubText>This is your admin dashboard overview</SubText>
        </PageHeader>

        {/* ===== STATS ===== */}
        <StatsGrid>
          <StatCard>
            <StatTitle>Total Users</StatTitle>
            <StatValue>12,540</StatValue>
          </StatCard>

          <StatCard>
            <StatTitle>Active Subscriptions</StatTitle>
            <StatValue>8,230</StatValue>
          </StatCard>

          <StatCard>
            <StatTitle> Paid User</StatTitle>
            <StatValue>4,320</StatValue>
          </StatCard>

          <StatCard>
            <StatTitle>Total Document</StatTitle>
            <StatValue>1,284</StatValue>
          </StatCard>

          <StatCard>
            <StatTitle>New Users (This Month)</StatTitle>
            <StatValue>1,200</StatValue>
          </StatCard>

          <StatCard>
            <StatTitle>Question Paper</StatTitle>
            <StatValue>320</StatValue>
          </StatCard>
          <StatCard>
            <StatTitle>Revenue (This Month)</StatTitle>
            <StatValue>₹4,25,000</StatValue>
          </StatCard>
        </StatsGrid>

        {/* ===== TABLE ===== */}
        <TableCard>
          <TableTitle>Recent User Activity</TableTitle>

          <Table>
            <thead>
              <tr>
                <Th>User</Th>
                <Th>Action</Th>
                <Th>Date</Th>
                <Th>Status</Th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <Td>Ananya Sharma</Td>
                <Td>Purchased Subscription</Td>
                <Td>Today</Td>
                <Td>
                  <Badge type="success">Completed</Badge>
                </Td>
              </tr>

              <tr>
                <Td>Rahul Verma</Td>
                <Td>Downloaded Notes</Td>
                <Td>Yesterday</Td>
                <Td>
                  <Badge type="success">Success</Badge>
                </Td>
              </tr>

              <tr>
                <Td>Priya Nair</Td>
                <Td>Payment Failed</Td>
                <Td>2 Days Ago</Td>
                <Td>
                  <Badge type="danger">Failed</Badge>
                </Td>
              </tr>
            </tbody>
          </Table>
        </TableCard>
      </Content>
    </Layout>
  );
}

export default Home;
