import { Container, Grid } from "@mantine/core";
import CButton from "./CButton";
import CView from "./CView";

const Calculator = () => {
  return (
    <Container w={300} mx="auto">
      <Grid gutter={1.14}>
        <Grid.Col span={12}>
          <CView size="24" px="3" mode="true" position="left" />
        </Grid.Col>
        <Grid.Col span={12}>
          <CView size="48" px="5" mode="false" position="right" />
        </Grid.Col>
        <Grid.Col span={4}>
          <CButton text="7.2" />
        </Grid.Col>
        <Grid.Col span={4}>
          <CButton text="6.8" />
        </Grid.Col>
        <Grid.Col span={4}>
          <CButton text="3.5" />
        </Grid.Col>
        <Grid.Col span={4}>
          <CButton text="3.2" />
        </Grid.Col>
        <Grid.Col span={4}>
          <CButton text="2.5" />
        </Grid.Col>
        <Grid.Col span={4}>
          <CButton text="1.7" />
        </Grid.Col>
        <Grid.Col span={3}>
          <CButton text="7" />
        </Grid.Col>
        <Grid.Col span={3}>
          <CButton text="8" />
        </Grid.Col>
        <Grid.Col span={3}>
          <CButton text="9" />
        </Grid.Col>
        <Grid.Col span={3}>
          <CButton text="Del" />
        </Grid.Col>
        <Grid.Col span={3}>
          <CButton text="4" />
        </Grid.Col>
        <Grid.Col span={3}>
          <CButton text="5" />
        </Grid.Col>
        <Grid.Col span={3}>
          <CButton text="6" />
        </Grid.Col>
        <Grid.Col span={3}>
          <CButton text="-" />
        </Grid.Col>
        <Grid.Col span={3}>
          <CButton text="1" />
        </Grid.Col>
        <Grid.Col span={3}>
          <CButton text="2" />
        </Grid.Col>
        <Grid.Col span={3}>
          <CButton text="3" />
        </Grid.Col>
        <Grid.Col span={3}>
          <CButton text="+" />
        </Grid.Col>
        <Grid.Col span={3}>
          <CButton text="AC" />
        </Grid.Col>
        <Grid.Col span={3}>
          <CButton text="0" />
        </Grid.Col>
        <Grid.Col span={3}>
          <CButton text="." />
        </Grid.Col>
        <Grid.Col span={3}>
          <CButton text="=" />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Calculator;
