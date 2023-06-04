import { Text } from "@mantine/core";
import { useCalculatorStore } from "../store";

function CButton({ text }: { text: string }) {
  const firstValue = useCalculatorStore((state) => state.firstValue);
  const updateFirstValue = useCalculatorStore((state) => state.updateFirstValue);
  const updateSecondValue = useCalculatorStore((state) => state.updateSecondValue);
  const blink = useCalculatorStore((state) => state.blink);

  const blinkHandler = (preV?: string) => {
    if (blink) {
      updateFirstValue("");
      setTimeout(() => updateFirstValue(preV ?? firstValue), 100);
    } else updateFirstValue(preV ?? firstValue);
  };
  const updateResult = (equation: string): void => {
    try {
      let result = eval(equation);
      if (result.toString().split(".")[1]?.length > 2) {
        result = Math.round(result * 100) / 100;
      }
      updateSecondValue(String(result));
    } catch {}
  };

  const clickHandler = async () => {
    switch (text) {
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "0":
      case "7.2":
      case "6.8":
      case "3.5":
      case "3.2":
      case "2.5":
      case "1.7":
      case "-":
      case "+":
      case ".":
        updateFirstValue((firstValue === "0" ? "" : firstValue) + text);
        break;

      case "=": {
        updateResult(firstValue);
        break;
      }

      case "Del": {
        updateFirstValue(firstValue.length > 1 ? firstValue.slice(0, -1) : "0");
        break;
      }

      default: // AC button
        updateSecondValue("0");
        blinkHandler("0");
    }
  };
  return (
    <Text
      fw={700}
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[3],
        color: theme.colorScheme === "dark" ? theme.colors.gray[5] : theme.colors.gray[9],
        fontSize: 24,
        height: 70,
        borderRadius: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      })}
      onClick={clickHandler}
      title={text}
    >
      {text}
    </Text>
  );
}

export default CButton;
