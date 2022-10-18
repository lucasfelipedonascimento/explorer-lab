import "./css/index.css"

const ccBgColor01 = document.querySelector(".cc-bg svg > g g:nth-child(1) path");
const ccBgColor02 = document.querySelector(".cc-bg svg > g g:nth-child(2) path");
const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img");

function setCardType(type) {
    const colors = {
    visa: ["#2D57F2", "#436D99"],
    visaPremium: ["#080064", "#0F4B00"],
    nubank: ["#2A005F", "#8F29DF"],
    mastercard: ["#C69347", "#DF6F29"],
    masterPremium: ["#FF9A03", "#A70000"],
    default: ["black", "gray"]
  }

  ccBgColor01.setAttribute("fill", colors[type][0]);
  ccBgColor02.setAttribute("fill", colors[type][1]);
  ccLogo.setAttribute("src", `cc-${type}.svg`);
}

globalThis.setCardType = setCardType;