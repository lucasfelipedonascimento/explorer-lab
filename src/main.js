import "./css/index.css"

const ccBgColor01 = document.querySelector(".cc-bg svg > g g:nth-child(1) path");
const ccBgColor02 = document.querySelector(".cc-bg svg > g g:nth-child(2) path");
const ccIcon = document.querySelector(".cc-logo span:nth-child(1) img");
const ccLogo = document.querySelector(".cc-logo span:nth-child(3) img");


function setCardType(type) {
    const colors = {
    visa: ["#013BAD", "#FFB800"],
    visaPremium: ["#080064", "#0F4B00"],
    nubank: ["#2A005F", "#8F29DF"],
    mastercard: ["#C69347", "#DF6F29"],
    masterPremium: ["#FF9A03", "#A70000"],
    default: ["black", "gray"]
  }

  ccBgColor01.setAttribute("fill", colors[type][0]);
  ccBgColor02.setAttribute("fill", colors[type][1]);
  ccIcon.setAttribute("src", `cc-marca-${type}.svg`)
  ccLogo.setAttribute("src", `cc-${type}.svg`);
}

globalThis.setCardType = setCardType;