import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Container, Row, Col } from './components';
import DefaultCol from '../src/components/Col';

const meta: Meta<typeof DefaultCol> = {
  component: DefaultCol,
};

export default meta;

type Story = StoryObj<typeof DefaultCol>;

export const Single: Story = {
  render: args => {
    return (
      <Container>
        <Row>
          <Col>col</Col>
        </Row>
      </Container>
    );
  },
};

export const EqualWidth: Story = {
  render: args => {
    return (
      <Container>
        <Row>
          <Col>col</Col>
          <Col>col</Col>
        </Row>
      </Container>
    );
  },
};

export const CustomWidth: Story = {
  render: args => {
    return (
      <Container>
        <Row>
          <Col size="2">col-2</Col>
          <Col size="4">col-4</Col>
          <Col size="6">col-6</Col>
        </Row>
      </Container>
    );
  },
};

export const VariableWidth: Story = {
  render: args => {
    return (
      <Container>
        <Row>
          <Col size="3">col-3</Col>
          <Col size="5">col-5</Col>
          <Col>variable</Col>
        </Row>
      </Container>
    );
  },
};

export const VerticalAlignment: Story = {
  render: args => {
    return (
      <Container>
        <Row style={{ height: '6rem' }}>
          <Col className="align-self-start">start</Col>
          <Col className="align-self-center">center</Col>
          <Col className="align-self-end">end</Col>
        </Row>
      </Container>
    );
  },
};

export const Offsetting: Story = {
  render: args => {
    return (
      <Container>
        <Row>
          <Col size="4">col-4</Col>
          <Col size="2" offset="1">
            col-2
          </Col>
          <Col size="3" offset="2">
            col-3
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
        <Row>
          <Col order="3">1 of 3</Col>
          <Col order="2">2 of 3</Col>
          <Col order="1">3 of 3</Col>
        </Row>
      </Container>
    );
  },
};

export const Gutters: Story = {
  args: { gutters: 'md' },
  render: args => {
    return (
      <Container>
        <Row>
          <Col {...args}>1</Col>
          <Col {...args}>2</Col>
          <Col {...args}>3</Col>
          <Col {...args}>4</Col>
          <Col {...args}>5</Col>
          <Col {...args}>6</Col>
          <Col {...args}>7</Col>
          <Col {...args}>8</Col>
          <Col {...args}>9</Col>
          <Col {...args}>10</Col>
          <Col {...args}>11</Col>
          <Col {...args}>12</Col>
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
        <Row>
          <Col {...args}>1</Col>
          <Col {...args}>2</Col>
          <Col {...args}>3</Col>
          <Col {...args}>4</Col>
          <Col {...args}>5</Col>
          <Col {...args}>6</Col>
          <Col {...args}>7</Col>
          <Col {...args}>8</Col>
          <Col {...args}>9</Col>
          <Col {...args}>10</Col>
          <Col {...args}>11</Col>
          <Col {...args}>12</Col>
        </Row>
      </Container>
    );
  },
};
