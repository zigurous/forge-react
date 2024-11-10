import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Container, Row, Col } from './components';
import DefaultRow from '../src/components/Row';

const meta: Meta<typeof DefaultRow> = {
  component: DefaultRow,
};

export default meta;

type Story = StoryObj<typeof DefaultRow>;

export const Single: Story = {
  render: args => {
    return (
      <Container>
        <Row>
          <Col>row</Col>
        </Row>
      </Container>
    );
  },
};

export const NoGutters: Story = {
  args: { gutters: 'none' },
  render: args => {
    return (
      <Container>
        <Row {...args}>
          <Col>1</Col>
        </Row>
        <Row {...args}>
          <Col>2</Col>
        </Row>
        <Row {...args}>
          <Col>3</Col>
        </Row>
      </Container>
    );
  },
};

export const Gutters: Story = {
  args: { gutters: 'lg' },
  render: args => {
    return (
      <Container>
        <Row {...args}>
          <Col>1</Col>
        </Row>
        <Row {...args}>
          <Col>2</Col>
        </Row>
        <Row {...args}>
          <Col>3</Col>
        </Row>
      </Container>
    );
  },
};

export const MultiRow: Story = {
  render: args => {
    return (
      <Container>
        <Row>
          <Col>col</Col>
          <Col>col</Col>
          <div className="w-full" />
          <Col>col</Col>
          <Col>col</Col>
        </Row>
      </Container>
    );
  },
};

export const Wrapping: Story = {
  render: args => {
    return (
      <Container>
        <Row>
          <Col size="7">col-7</Col>
          <Col size="6">col-6</Col>
          <Col size="5">col-5</Col>
          <Col size="4">col-4</Col>
          <Col size="3">col-3</Col>
          <Col size="2">col-2</Col>
          <Col size="1">col-1</Col>
        </Row>
      </Container>
    );
  },
};

export const Responsive: Story = {
  render: args => {
    const cols = Array.from({ length: 12 }, (_, i) => i + 1);
    return (
      <Container>
        <Row>
          {cols.map(col => (
            <Col key={col} size="none" sm="12" md="6" lg="4" xl="3">
              col
            </Col>
          ))}
        </Row>
      </Container>
    );
  },
};

export const VerticalAlignment: Story = {
  render: args => {
    return (
      <Container>
        <Row gutters="lg" className="align-start" style={{ height: '4rem' }}>
          <Col></Col>
          <Col>start</Col>
          <Col></Col>
        </Row>
        <Row gutters="lg" className="align-center" style={{ height: '4rem' }}>
          <Col></Col>
          <Col>center</Col>
          <Col></Col>
        </Row>
        <Row gutters="lg" className="align-end" style={{ height: '4rem' }}>
          <Col></Col>
          <Col>end</Col>
          <Col></Col>
        </Row>
      </Container>
    );
  },
};

export const HorizontalAlignment: Story = {
  render: args => {
    return (
      <Container>
        <Row gutters="lg" className="justify-start">
          <Col size="4">start</Col>
          <Col size="2"></Col>
        </Row>
        <Row gutters="lg" className="justify-center">
          <Col size="2"></Col>
          <Col size="4">center</Col>
          <Col size="2"></Col>
        </Row>
        <Row gutters="lg" className="justify-end">
          <Col size="2"></Col>
          <Col size="4">end</Col>
        </Row>
        <Row gutters="lg" className="justify-between">
          <Col size="4">space</Col>
          <Col size="4">between</Col>
        </Row>
        <Row gutters="lg" className="justify-around">
          <Col size="4">space</Col>
          <Col size="4">around</Col>
        </Row>
        <Row gutters="lg" className="justify-evenly">
          <Col size="4">space</Col>
          <Col size="4">evenly</Col>
        </Row>
      </Container>
    );
  },
};
