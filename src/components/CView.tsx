import { Text } from "@mantine/core";
import { useCalculatorStore } from "../store";

function CView( { size, px, mode, position } : { size: string, px: string, mode: string, position: string } ) {
  const firstValue = useCalculatorStore((state) => state.firstValue);
  const secondValue = useCalculatorStore((state) => state.secondValue);
  const check = (mode === "true" ? true : false)
  return (
    <Text
      title="CView"
      truncate
      ta = {position === "left" ? "left" : "right"}
      size={parseInt(size)}
      px={parseFloat(px)}
      lineClamp={2}
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[4]
            : theme.colors.gray[2],
        color:
          theme.colorScheme === "dark"
            ? theme.colors.gray[5]
            : theme.colors.gray[9],
        height: 70,
        borderRadius: 2,
      })}
    >
      {check ? firstValue : secondValue}
    </Text>
  );
}

export default CView;
