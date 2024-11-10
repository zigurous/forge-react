import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Container, Row, Col } from './components';
import DefaultContainer from '../src/components/Container';

const meta: Meta<typeof DefaultContainer> = {
  component: DefaultContainer,
};

export default meta;

type Story = StoryObj<typeof DefaultContainer>;

export const FluidContainer: Story = {
  args: { fluid: true },
  render: args => {
    return (
      <Container {...args}>
        <Row gutters="lg">
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
        <Row gutters="lg">
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    );
  },
};

export const EqualWidth: Story = {
  render: args => {
    return (
      <Container {...args}>
        <Row gutters="lg">
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
        <Row gutters="lg">
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    );
  },
};

export const CustomWidth: Story = {
  render: args => {
    return (
      <Container {...args}>
        <Row gutters="lg">
          <Col size="2">col-2</Col>
          <Col size="4">col-4</Col>
          <Col size="6">col-6</Col>
        </Row>
        <Row gutters="lg">
          <Col size="3">col-3</Col>
          <Col size="8">col-8</Col>
          <Col size="1">col-1</Col>
        </Row>
      </Container>
    );
  },
};

export const VariableWidth: Story = {
  render: args => {
    return (
      <Container {...args}>
        <Row gutters="lg" className="justify-center">
          <Col lg="2">1 of 3</Col>
          <Col md="auto">variable</Col>
          <Col lg="2">3 of 3</Col>
        </Row>
        <Row gutters="lg">
          <Col>1 of 3</Col>
          <Col md="auto">variable</Col>
          <Col lg="2">3 of 3</Col>
        </Row>
      </Container>
    );
  },
};

export const MultiRow: Story = {
  render: args => {
    return (
      <Container {...args}>
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
      <Container {...args}>
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
  args: { fluid: true },
  render: args => {
    const cols = Array.from({ length: 12 }, (_, i) => i + 1);
    return (
      <Container {...args}>
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

export const AlignItems: Story = {
  render: args => {
    return (
      <Container {...args}>
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

export const AlignSelf: Story = {
  render: args => {
    return (
      <Container {...args}>
        <Row style={{ height: '6rem' }}>
          <Col className="align-self-start">start</Col>
          <Col className="align-self-center">center</Col>
          <Col className="align-self-end">end</Col>
        </Row>
      </Container>
    );
  },
};

export const JustifyContent: Story = {
  render: args => {
    return (
      <Container {...args}>
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

export const Offsetting: Story = {
  render: args => {
    return (
      <Container {...args}>
        <Row gutters="lg">
          <Col size="4">col-4</Col>
          <Col size="2" offset="1">
            col-2
          </Col>
          <Col size="3" offset="2">
            col-3
          </Col>
        </Row>
        <Row gutters="lg">
          <Col size="3" offset="2">
            col-3
          </Col>
          <Col size="6" offset="1">
            col-6
          </Col>
        </Row>
      </Container>
    );
  },
};

export const Ordering: Story = {
  render: args => {
    return (
      <Container {...args}>
        <Row gutters="lg">
          <Col order="3">1 of 3</Col>
          <Col order="2">2 of 3</Col>
          <Col order="1">3 of 3</Col>
        </Row>
        <Row gutters="lg">
          <Col>1 of 3</Col>
          <Col order="last">2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    );
  },
};
