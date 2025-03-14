import "@axa-fr/design-system-slash-css/dist/Alert/Alert.scss";
import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Components/Alert",
};

export default meta;

const MODIFIERS = ["success", "info", "danger", "error"];

export enum TypeIcons {
  error = "glyphicon glyphicon-minus-sign",
  danger = "glyphicon glyphicon-alert",
  info = "glyphicon glyphicon-info-sign",
  success = "glyphicon glyphicon-ok",
}

export const Default: StoryObj = {
  name: "Alert",
  render: (args) => {
    const alert = document.createElement("div");

    alert.className += [
      "af-alert",
      args.classModifier ? `af-alert--${args.classModifier}` : "",
    ].join(" ");

    alert.innerHTML = `
    <div class="af-alert__title">
        <div class="af-alert__title-icon">
            <i class="${
              args.icon ||
              TypeIcons[args.classModifier as keyof typeof TypeIcons]
            }"></i>
        </div>
        <div class="af-alert__title-text">
            ${args.title}
        </div>
        <button type="button" class="af-alert__title-icon-close">
            <i class="glyphicon glyphicon-close"></i>
        </button>
    </div>
`;

    return alert;
  },
  args: {
    title: "Attention: des informations sont manquantes",
    classModifier: "success",
    icon: "",
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS,
      control: { type: "select" },
      defaultValue: "success",
    },
  },
};
