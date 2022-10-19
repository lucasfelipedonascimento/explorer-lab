import "./css/index.css"
import IMask from 'imask'

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
    elo: ["#002F8A", "#FF6200"],
    default: ["black", "gray"]
  }

  ccBgColor01.setAttribute("fill", colors[type][0]);
  ccBgColor02.setAttribute("fill", colors[type][1]);
  ccIcon.setAttribute("src", `cc-marca-${type}.svg`)
  ccLogo.setAttribute("src", `cc-${type}.svg`);
}

globalThis.setCardType = setCardType;

// card number
const cardNumber = document.querySelector("#card-number")
const cardNumberPattern = {
  mask: [
    {
      mask: "0000 0000 0000 0000",
      regex: /^4\d{0-15}/,
      cardType: "visa",
    },
    {
      mask: "0000 0000 0000 0000",
      regex: /(^5[1-5]\d{0,2}|^22[2-9]\d|^2[3-7]\d{0,2})\d{0,12}/,
      cardType: "mastercard",
    },
    {
      mask: "0000 0000 0000 0000",
      cardType: "default",
    },
  ],
  dispatch: function() {
    const number = (dynamicMasked.value + appended).replace(/\D/g,'');
    const foundMask = dynamicMasked.compiledMasks.find(function(item) {
      return number.match(item.regex)
    })

    return foundMask;
  },
}
const cardNumberMasked = IMask(cardNumber, cardNumberPattern)

// card holder
const cardHolder = document.querySelector("#card-holder")
const cardHolderPattern = {
  mask: "aaaaa"
}
const cardHolderMasked = IMask(cardHolder, cardHolderPattern)

// expiration date 
const expirationDate = document.querySelector("#expiration-date")
const expirationDatePattern = {
  mask: "MM{/}YY",
  blocks: {
    MM: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12
    },

    YY: {
      mask: IMask.MaskedRange,
      from: String(new Date().getFullYear()).slice(2),
      to: String(new Date().getFullYear() + 10).slice(2)
    }
  }
}
const expirationDateMasked = IMask(expirationDate, expirationDatePattern)

// security code
const securityCode =  document.querySelector("#security-code")
const securityCodePattern = {
  mask: "000"
}
const securityCodeMasked = IMask(securityCode, securityCodePattern)

