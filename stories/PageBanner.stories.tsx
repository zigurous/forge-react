import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Badge from '../src/components/Badge';
import Button from '../src/components/Button';
import Col from '../src/components/Col';
import Container from '../src/components/Container';
import PageBanner from '../src/components/PageBanner';
import Row from '../src/components/Row';
import SocialButton from '../src/components/SocialButton';
import Stack from '../src/components/Stack';
import Text from '../src/components/Text';
// @ts-ignore
import discordBanner from './assets/discord-banner.svg';

const meta: Meta<typeof PageBanner> = {
  component: PageBanner,
};

export default meta;

type Story = StoryObj<typeof PageBanner>;

export const Simple: Story = {
  args: {
    className: 'bg-surface-1',
    children: (
      <Container className="border">
        <Row className="p-xl">
          <Col>
            <Text marginBottom="lg" type="title-lg">
              Page Banner
            </Text>
            <Text type="body-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              pretium sapien at enim dignissim hendrerit. Donec sit amet quam at
              odio consequat lobortis. Duis facilisis ullamcorper urna mattis
              facilisis. Aenean eget ornare turpis, sit amet egestas neque.
              Quisque vel tristique erat. Maecenas interdum aliquam est in
              faucibus. Donec eu lobortis felis.
            </Text>
          </Col>
        </Row>
      </Container>
    ),
  },
};

export const CallToAction: Story = {
  args: {
    className: 'bg-surface-1',
    children: (
      <Container className="border">
        <Row className="p-xl">
          <Col>
            <Text
              as="div"
              className="ml-xxxs"
              marginBottom="xxs"
              type="subtitle"
            >
              Subtitle
            </Text>
            <Text as="h1" marginBottom="lg" type="title-lg">
              Page Banner
            </Text>
            <Text marginBottom="lg" type="body-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              pretium sapien at enim dignissim hendrerit. Donec sit amet quam at
              odio consequat lobortis. Duis facilisis ullamcorper urna mattis
              facilisis. Aenean eget ornare turpis, sit amet egestas neque.
              Quisque vel tristique erat. Maecenas interdum aliquam est in
              faucibus. Donec eu lobortis felis.
            </Text>
            <Button shape="pill" variant="outline">
              Call to Action
            </Button>
          </Col>
        </Row>
      </Container>
    ),
  },
};

export const ProductFeature: Story = {
  args: {
    className: 'bg-surface-1',
    children: (
      <Container className="border">
        <Row className="p-xl align-center">
          <Col className="mb-xxl" size={12} md={4}>
            <Text
              as="div"
              className="ml-xxxs"
              marginBottom="xxs"
              type="subtitle"
            >
              Subtitle
            </Text>
            <Text as="h1" marginBottom="lg" type="title-lg">
              Product
            </Text>
            <Stack spacing="sm" wrap>
              <Badge color="primary" variant="tint">
                Badge
              </Badge>
              <Badge color="primary" variant="tint">
                Badge
              </Badge>
            </Stack>
          </Col>
          <Col>
            <Text marginBottom="lg" type="body-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              pretium sapien at enim dignissim hendrerit. Donec sit amet quam at
              odio consequat lobortis. Duis facilisis ullamcorper urna mattis
              facilisis. Aenean eget ornare turpis, sit amet egestas neque.
              Quisque vel tristique erat. Maecenas interdum aliquam est in
              faucibus. Donec eu lobortis felis.
            </Text>
          </Col>
        </Row>
      </Container>
    ),
  },
};

export const ProductCTA: Story = {
  args: {
    className: 'bg-surface-1',
    children: (
      <Container className="border">
        <Row className="p-xl align-center">
          <Col className="mb-xxl" size={12} md={4}>
            <Text
              as="div"
              className="ml-xxxs"
              marginBottom="xxs"
              type="subtitle"
            >
              Subtitle
            </Text>
            <Text as="h1" marginBottom="lg" type="title-lg">
              Product
            </Text>
            <Button shape="pill" variant="outline">
              Call to Action
            </Button>
          </Col>
          <Col>
            <Text marginBottom="lg" type="body-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              pretium sapien at enim dignissim hendrerit. Donec sit amet quam at
              odio consequat lobortis. Duis facilisis ullamcorper urna mattis
              facilisis. Aenean eget ornare turpis, sit amet egestas neque.
              Quisque vel tristique erat. Maecenas interdum aliquam est in
              faucibus. Donec eu lobortis felis.
            </Text>
          </Col>
        </Row>
      </Container>
    ),
  },
};

export const CustomBackground: Story = {
  args: {
    size: 'xl',
    style: {
      background: `url(${discordBanner}), linear-gradient(0deg,#7196ff -.18%,#2a5ee8 97.44%)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    theme: 'dark',
    children: (
      <Container>
        <Row>
          <Col md={6} lg={5}>
            <Text as="div" marginBottom="xxs" weight="500">
              Subtitle
            </Text>
            <Text type="title">Page Banner</Text>
            <Text className="text-pretty" marginBottom="lg" marginTop="lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              pretium sapien at enim dignissim hendrerit. Donec sit amet quam at
              odio consequat lobortis. Duis facilisis ullamcorper urna mattis
              facilisis.
            </Text>
            <SocialButton
              className="my-sm"
              link="discord"
              primaryColor="white"
              secondaryColor="#7289da"
              shape="pill"
              size="md"
              variant="outline"
            >
              Call to Action
            </SocialButton>
          </Col>
        </Row>
      </Container>
    ),
  },
};
